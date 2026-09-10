import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { Download, FileImage, FileText, Printer } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  COURSE,
  STEPS,
  LANDMARKS,
  OUTBOUND_PATH,
  INBOUND_PATH,
  buildGpx,
} from "@/lib/marathonRoute";

/* ---------- A4 landscape canvas (96 dpi) ---------- */
const W = 1123;
const H = 794;

const INK = "#0f2a23";
const ROAD = "#123b31";
const OUT = "#0f9d76";
const RET = "#e2653c";
const GOLD = "#c9902a";
const CREAM = "#f7f2e7";

/* ---------- Web Mercator ---------- */
const TILE = 256;
const lngToX = (lng: number, z: number) => ((lng + 180) / 360) * TILE * 2 ** z;
const latToY = (lat: number, z: number) => {
  const s = Math.sin((lat * Math.PI) / 180);
  return (0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * TILE * 2 ** z;
};

const ALL: [number, number][] = [...OUTBOUND_PATH, ...INBOUND_PATH];
const lats = ALL.map((p) => p[0]);
const lngs = ALL.map((p) => p[1]);
const bbox = {
  minLat: Math.min(...lats),
  maxLat: Math.max(...lats),
  minLng: Math.min(...lngs),
  maxLng: Math.max(...lngs),
};

const PADDING = 58;
const FIT_W = W - PADDING * 2;
const FIT_H = H - PADDING * 2;

function pickZoom() {
  for (let z = 18; z >= 10; z--) {
    const w = lngToX(bbox.maxLng, z) - lngToX(bbox.minLng, z);
    const h = latToY(bbox.minLat, z) - latToY(bbox.maxLat, z);
    if (w <= FIT_W * 1.9 && h <= FIT_H * 1.9) return z;
  }
  return 10;
}
const Z = pickZoom();

const cx = (lngToX(bbox.minLng, Z) + lngToX(bbox.maxLng, Z)) / 2;
const cy = (latToY(bbox.minLat, Z) + latToY(bbox.maxLat, Z)) / 2;
const rawW = lngToX(bbox.maxLng, Z) - lngToX(bbox.minLng, Z);
const rawH = latToY(bbox.minLat, Z) - latToY(bbox.maxLat, Z);
const K = Math.min(FIT_W / rawW, FIT_H / rawH, 2);

const FX = W / 2;
const FY = H / 2;
const wx = (worldX: number) => FX + (worldX - cx) * K;
const wy = (worldY: number) => FY + (worldY - cy) * K;

const project = ([lat, lng]: [number, number]): [number, number] => [
  wx(lngToX(lng, Z)),
  wy(latToY(lat, Z)),
];

/* tiles covering the whole sheet */
const tiles: { x: number; y: number; px: number; py: number; size: number }[] = [];
{
  const leftWorld = cx + (0 - FX) / K;
  const rightWorld = cx + (W - FX) / K;
  const topWorld = cy + (0 - FY) / K;
  const botWorld = cy + (H - FY) / K;
  const x0 = Math.floor(leftWorld / TILE);
  const x1 = Math.floor(rightWorld / TILE);
  const y0 = Math.floor(topWorld / TILE);
  const y1 = Math.floor(botWorld / TILE);
  const max = 2 ** Z;
  for (let x = x0; x <= x1; x++) {
    for (let y = y0; y <= y1; y++) {
      if (y < 0 || y >= max) continue;
      tiles.push({
        x: ((x % max) + max) % max,
        y,
        px: wx(x * TILE),
        py: wy(y * TILE),
        size: TILE * K + 0.5,
      });
    }
  }
}
const tileUrl = (x: number, y: number) => `https://tile.openstreetmap.org/${Z}/${x}/${y}.png`;

/* smooth Catmull-Rom -> cubic bezier */
function smoothPath(pts: [number, number][]) {
  const p = pts.map(project);
  if (p.length < 2) return "";
  let d = `M ${p[0][0].toFixed(1)} ${p[0][1].toFixed(1)}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C ${c1[0].toFixed(1)} ${c1[1].toFixed(1)}, ${c2[0].toFixed(1)} ${c2[1].toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}
const OUT_D = smoothPath(OUTBOUND_PATH);
const IN_D = smoothPath(INBOUND_PATH);

/* label offsets so callouts sit clear of the course */
const LABEL_OFFSET: Record<number, { dx: number; dy: number; anchor: "start" | "end" }> = {
  1: { dx: -24, dy: 34, anchor: "end" },
  2: { dx: -26, dy: 26, anchor: "end" },
  3: { dx: -26, dy: 0, anchor: "end" },
  4: { dx: -18, dy: -54, anchor: "end" },
  5: { dx: 4, dy: -40, anchor: "start" },
  6: { dx: 34, dy: 60, anchor: "start" },
  7: { dx: -26, dy: -26, anchor: "end" },
  8: { dx: -26, dy: 24, anchor: "end" },
};


export default function RouteGuide() {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);

  const capture = async () => {
    await new Promise((r) => setTimeout(r, 900));
    return html2canvas(sheetRef.current!, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      logging: false,
    });
  };

  const downloadJpeg = async () => {
    setBusy(true);
    try {
      const canvas = await capture();
      canvas.toBlob((b) => b && saveAs(b, "Race_Route_Map_A4.jpg"), "image/jpeg", 0.96);
      toast({ title: "JPEG downloaded" });
    } catch {
      toast({ title: "Could not create the image", variant: "destructive" });
    }
    setBusy(false);
  };

  const downloadPdf = async () => {
    setBusy(true);
    try {
      const canvas = await capture();
      const pdf = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });
      pdf.addImage(
        canvas.toDataURL("image/jpeg", 0.96),
        "JPEG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight(),
      );
      pdf.save("Race_Route_Map_A4.pdf");
      toast({ title: "PDF downloaded" });
    } catch {
      toast({ title: "Could not create the PDF", variant: "destructive" });
    }
    setBusy(false);
  };

  return (
    <div className="min-h-screen bg-muted/40">
      <style>{`@media print{.no-print{display:none!important}body{background:#fff}}`}</style>

      <header className="no-print sticky top-0 z-20 border-b border-border bg-card">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-6 py-3">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Full-bleed A4 landscape race map · print ready
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                saveAs(new Blob([buildGpx()], { type: "application/gpx+xml" }), "Official_Route.gpx")
              }
            >
              <Download className="mr-1.5 h-4 w-4" />
              GPX
            </Button>
            <Button variant="outline" size="sm" disabled={busy} onClick={downloadJpeg}>
              <FileImage className="mr-1.5 h-4 w-4" />
              JPEG
            </Button>
            <Button size="sm" disabled={busy} onClick={downloadPdf}>
              <FileText className="mr-1.5 h-4 w-4" />
              PDF
            </Button>
            <Button variant="outline" size="sm" onClick={() => window.print()}>
              <Printer className="mr-1.5 h-4 w-4" />
              Print
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1240px] overflow-x-auto p-6">
        <div ref={sheetRef} style={{ width: W, height: H, background: "#fff" }} className="mx-auto shadow-xl">
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            <defs>
              <marker id="arrowOut" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="4.2" markerHeight="4.2" orient="auto">
                <path d="M2 1 L10 6 L2 11 z" fill="#ffffff" />
              </marker>
              <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0f2a23" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* ---------- BASEMAP (full bleed) ---------- */}
            <rect x="0" y="0" width={W} height={H} fill="#eef1ec" />
            {tiles.map((t) => (
              <image
                key={`${t.x}-${t.y}`}
                href={tileUrl(t.x, t.y)}
                x={t.px}
                y={t.py}
                width={t.size}
                height={t.size}
                crossOrigin="anonymous"
                preserveAspectRatio="none"
              />
            ))}
            <rect x="0" y="0" width={W} height={H} fill="#ffffff" opacity="0.2" />

            {/* ---------- ROUTE ---------- */}
            <g filter="url(#soft)">
              <path d={OUT_D} fill="none" stroke={ROAD} strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" />
              <path d={IN_D} fill="none" stroke={ROAD} strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <path d={OUT_D} fill="none" stroke={OUT} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
            <path d={IN_D} fill="none" stroke={RET} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d={OUT_D}
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.6"
              strokeDasharray="12 20"
              strokeLinecap="round"
              opacity="0.92"
              markerMid="url(#arrowOut)"
            />
            <path
              d={IN_D}
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.6"
              strokeDasharray="12 20"
              strokeLinecap="round"
              opacity="0.92"
              markerMid="url(#arrowOut)"
            />

            {/* ---------- LANDMARKS ---------- */}
            {LANDMARKS.map((l) => {
              const [x, y] = project([l.lat, l.lng]);
              return (
                <g key={l.name}>
                  <circle cx={x} cy={y} r="4.5" fill="#ffffff" stroke={ROAD} strokeWidth="2" />
                  <text
                    x={x + 9}
                    y={y - 7}
                    fontSize="11"
                    fontWeight="700"
                    fill={INK}
                    stroke="#ffffff"
                    strokeWidth="3.2"
                    paintOrder="stroke"
                  >
                    {l.name}
                  </text>
                </g>
              );
            })}

            {/* ---------- NUMBERED MARKERS + INLINE DETAIL ---------- */}
            {STEPS.map((s) => {
              const [x, y] = project([s.lat, s.lng]);
              const isEnd = s.marker === "start" || s.marker === "finish";
              const fill =
                s.marker === "start" ? OUT : s.marker === "finish" ? ROAD : s.marker === "uturn" ? GOLD : "#ffffff";
              const txt = fill === "#ffffff" ? INK : "#fff";
              const o = LABEL_OFFSET[s.id];
              const lx = x + o.dx;
              const ly = y + o.dy;
              const title = s.name.replace(/^(Start|Finish|Turnaround) — /, "");
              return (
                <g key={s.id}>
                  <line x1={x} y1={y} x2={lx} y2={ly - 10} stroke={ROAD} strokeWidth="1.2" opacity="0.55" />
                  <circle cx={x} cy={y} r={isEnd ? 19 : 15} fill="#fff" opacity="0.96" />
                  <circle cx={x} cy={y} r={isEnd ? 16 : 12} fill={fill} stroke={ROAD} strokeWidth="2.6" />
                  <text x={x} y={y + 5} fontSize="13" fontWeight="800" textAnchor="middle" fill={txt}>
                    {s.marker === "start" ? "S" : s.marker === "finish" ? "F" : s.id}
                  </text>

                  <text
                    x={lx}
                    y={ly}
                    fontSize="12.5"
                    fontWeight="800"
                    textAnchor={o.anchor}
                    fill={INK}
                    stroke="#ffffff"
                    strokeWidth="3.6"
                    paintOrder="stroke"
                  >
                    {title}
                  </text>
                  <text
                    x={lx}
                    y={ly + 15}
                    fontSize="11"
                    fontWeight="600"
                    textAnchor={o.anchor}
                    fill="#3d5c53"
                    stroke="#ffffff"
                    strokeWidth="3.2"
                    paintOrder="stroke"
                  >
                    {s.cumulativeKm.toFixed(1)} km · {s.direction}
                  </text>
                  <text
                    x={lx}
                    y={ly + 29}
                    fontSize="10.5"
                    textAnchor={o.anchor}
                    fill="#5b7a70"
                    stroke="#ffffff"
                    strokeWidth="3"
                    paintOrder="stroke"
                  >
                    {s.street}
                  </text>
                </g>
              );
            })}

            {/* ---------- COMPACT KEY (bottom-left corner) ---------- */}
            <g transform={`translate(24, ${H - 118})`}>
              <rect x="0" y="0" width="252" height="94" rx="10" fill={CREAM} opacity="0.95" stroke={ROAD} strokeWidth="1.5" />
              <rect x="14" y="17" width="26" height="8" rx="4" fill={OUT} />
              <text x="48" y="25" fontSize="11" fontWeight="700" fill={INK}>Outbound — west to Circle</text>
              <rect x="14" y="39" width="26" height="8" rx="4" fill={RET} />
              <text x="48" y="47" fontSize="11" fontWeight="700" fill={INK}>Return — east to finish</text>
              <circle cx="27" cy="66" r="7" fill={GOLD} stroke={ROAD} strokeWidth="1.6" />
              <text x="48" y="70" fontSize="11" fontWeight="700" fill={INK}>Turnaround · {COURSE.totalDistance}</text>
            </g>

            <text x={W - 16} y={H - 12} fontSize="10" textAnchor="end" fill="#4c635b">
              Map data © OpenStreetMap contributors
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
