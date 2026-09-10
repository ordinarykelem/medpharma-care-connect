import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { Download, FileImage, FileText, Printer } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { COURSE, STEPS, OUTBOUND_PATH, INBOUND_PATH, buildGpx } from "@/lib/marathonRoute";

/* ---------- A4 landscape canvas (96 dpi) ---------- */
const W = 1123;
const H = 794;

const MX = 40;
const MY = 168;
const SIDEBAR = 306;
const GAP = 16;
const MW = W - MX * 2 - SIDEBAR - GAP;
const MH = H - MY - 58;

const INK = "#0f2a23";
const ROAD = "#123b31";
const OUT = "#0f9d76";
const RET = "#e2653c";
const GOLD = "#c9902a";
const CREAM = "#f7f2e7";

/* ---------- Web Mercator (real map geometry) ---------- */
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

const PADDING = 56; // px of breathing room inside the map frame
function pickZoom() {
  for (let z = 17; z >= 10; z--) {
    const w = lngToX(bbox.maxLng, z) - lngToX(bbox.minLng, z);
    const h = latToY(bbox.minLat, z) - latToY(bbox.maxLat, z);
    if (w <= MW - PADDING * 2 && h <= MH - PADDING * 2) return z;
  }
  return 10;
}
const Z = pickZoom();

const cx = (lngToX(bbox.minLng, Z) + lngToX(bbox.maxLng, Z)) / 2;
const cy = (latToY(bbox.minLat, Z) + latToY(bbox.maxLat, Z)) / 2;
const originX = cx - MW / 2; // world px at the map frame's left edge
const originY = cy - MH / 2;

const project = ([lat, lng]: [number, number]): [number, number] => [
  MX + lngToX(lng, Z) - originX,
  MY + latToY(lat, Z) - originY,
];

/* tiles covering the frame — Carto "light" basemap keeps streets legible under the route */
const tiles: { x: number; y: number; px: number; py: number }[] = [];
{
  const x0 = Math.floor(originX / TILE);
  const x1 = Math.floor((originX + MW) / TILE);
  const y0 = Math.floor(originY / TILE);
  const y1 = Math.floor((originY + MH) / TILE);
  const max = 2 ** Z;
  for (let x = x0; x <= x1; x++) {
    for (let y = y0; y <= y1; y++) {
      if (y < 0 || y >= max) continue;
      tiles.push({
        x: ((x % max) + max) % max,
        y,
        px: MX + x * TILE - originX,
        py: MY + y * TILE - originY,
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

export default function RouteGuide() {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);

  const capture = async () => {
    await new Promise((r) => setTimeout(r, 600));
    return html2canvas(sheetRef.current!, {
      scale: 2,
      backgroundColor: CREAM,
      useCORS: true,
      logging: false,
    });
  };

  const downloadJpeg = async () => {
    setBusy(true);
    try {
      const canvas = await capture();
      canvas.toBlob((b) => b && saveAs(b, "Route_Guide_A4_Landscape.jpg"), "image/jpeg", 0.96);
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
      pdf.save("Route_Guide_A4_Landscape.pdf");
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
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-6 py-4">
          <div>
            <h1 className="text-xl font-bold uppercase tracking-tight">{COURSE.title}</h1>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">A4 landscape route map · print ready</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => saveAs(new Blob([buildGpx()], { type: "application/gpx+xml" }), "Official_Route.gpx")}
            >
              <Download className="mr-1.5 h-4 w-4" />GPX
            </Button>
            <Button variant="outline" size="sm" disabled={busy} onClick={downloadJpeg}>
              <FileImage className="mr-1.5 h-4 w-4" />JPEG
            </Button>
            <Button size="sm" disabled={busy} onClick={downloadPdf}>
              <FileText className="mr-1.5 h-4 w-4" />PDF
            </Button>
            <Button variant="outline" size="sm" onClick={() => window.print()}>
              <Printer className="mr-1.5 h-4 w-4" />Print
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1240px] overflow-x-auto p-6">
        <div ref={sheetRef} style={{ width: W, height: H, background: CREAM, color: INK }} className="mx-auto shadow-xl">
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            <defs>
              <clipPath id="mapClip">
                <rect x={MX} y={MY} width={MW} height={MH} rx="14" />
              </clipPath>
              <marker id="arrowOut" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="4.5" markerHeight="4.5" orient="auto">
                <path d="M2 1 L10 6 L2 11 z" fill="#ffffff" />
              </marker>
              <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0f2a23" floodOpacity="0.22" />
              </filter>
            </defs>

            <rect x="0" y="0" width={W} height={H} fill={CREAM} />
            <rect x="0" y="0" width={W} height="12" fill={ROAD} />

            {/* Header */}
            <text x={MX} y="70" fontSize="38" fontWeight="800" letterSpacing="-0.5" fill={INK}>
              {COURSE.title.toUpperCase()}
            </text>
            <text x={MX} y="96" fontSize="13" letterSpacing="3" fill="#5b7a70">
              OFFICIAL ROUTE MAP · RING ROAD CENTRAL · ACCRA, GHANA
            </text>
            {[
              ["DISTANCE", COURSE.totalDistance],
              ["COURSE", "Out-and-back"],
              ["SURFACE", COURSE.surface],
              ["START", "Absa Clubhouse"],
              ["FINISH", "Assemblies of God HQ"],
            ].map(([k, v], i) => (
              <g key={k} transform={`translate(${MX + i * 172}, 124)`}>
                <text fontSize="9.5" letterSpacing="2" fill="#8aa79d">{k}</text>
                <text y="20" fontSize="14" fontWeight="700" fill={INK}>{v}</text>
              </g>
            ))}
            <line x1={MX} y1="152" x2={W - MX} y2="152" stroke="#d9cfb8" strokeWidth="1.5" />

            {/* ---------- MAP ---------- */}
            <g clipPath="url(#mapClip)">
              <rect x={MX} y={MY} width={MW} height={MH} fill="#eef1ec" />
              {tiles.map((t) => (
                <image
                  key={`${t.x}-${t.y}`}
                  href={tileUrl(t.x, t.y)}
                  x={t.px}
                  y={t.py}
                  width={TILE}
                  height={TILE}
                  crossOrigin="anonymous"
                  preserveAspectRatio="none"
                />
              ))}
              <rect x={MX} y={MY} width={MW} height={MH} fill={CREAM} opacity="0.18" />

              {/* route */}
              <g filter="url(#soft)">
                <path d={OUT_D} fill="none" stroke={ROAD} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
                <path d={IN_D} fill="none" stroke={ROAD} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <path d={OUT_D} fill="none" stroke={OUT} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
              <path d={IN_D} fill="none" stroke={RET} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d={OUT_D}
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeDasharray="12 18"
                strokeLinecap="round"
                opacity="0.9"
                markerMid="url(#arrowOut)"
              />
              <path
                d={IN_D}
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeDasharray="12 18"
                strokeLinecap="round"
                opacity="0.9"
                markerMid="url(#arrowOut)"
              />

              {/* numbered markers only — detail lives in the key */}
              {STEPS.map((s) => {
                const [x, y] = project([s.lat, s.lng]);
                const isEnd = s.marker === "start" || s.marker === "finish";
                const fill = s.marker === "start" ? OUT : s.marker === "finish" ? ROAD : s.marker === "uturn" ? GOLD : "#ffffff";
                const txt = fill === "#ffffff" ? INK : "#fff";
                return (
                  <g key={s.id}>
                    <circle cx={x} cy={y} r={isEnd ? 17 : 14} fill="#fff" opacity="0.95" />
                    <circle cx={x} cy={y} r={isEnd ? 14 : 11} fill={fill} stroke={ROAD} strokeWidth="2.5" />
                    <text x={x} y={y + 4.5} fontSize="12" fontWeight="800" textAnchor="middle" fill={txt}>
                      {s.marker === "start" ? "S" : s.marker === "finish" ? "F" : s.id}
                    </text>
                  </g>
                );
              })}
            </g>
            <rect x={MX} y={MY} width={MW} height={MH} rx="14" fill="none" stroke={ROAD} strokeWidth="2" />

            {/* start / finish flags on the map frame */}
            <g transform={`translate(${MX + 14}, ${MY + MH - 44})`}>
              <rect x="0" y="0" width="196" height="30" rx="15" fill="#ffffff" opacity="0.92" />
              <text x="14" y="20" fontSize="11.5" fontWeight="700" fill={INK}>
                MAP DATA © OPENSTREETMAP
              </text>
            </g>

            {/* ---------- KEY / ITINERARY ---------- */}
            <g transform={`translate(${MX + MW + GAP}, ${MY})`}>
              <rect x="0" y="0" width={SIDEBAR} height={MH} rx="14" fill="#ffffff" stroke="#d9cfb8" strokeWidth="1.5" />
              <rect x="0" y="0" width={SIDEBAR} height="42" rx="14" fill={ROAD} />
              <rect x="0" y="28" width={SIDEBAR} height="14" fill={ROAD} />
              <text x="18" y="27" fontSize="13" fontWeight="800" letterSpacing="2.5" fill="#fff">
                ROUTE KEY
              </text>

              {STEPS.map((s, i) => {
                const y = 68 + i * 50;
                const fill = s.marker === "start" ? OUT : s.marker === "finish" ? ROAD : s.marker === "uturn" ? GOLD : "#ffffff";
                const txt = fill === "#ffffff" ? INK : "#fff";
                return (
                  <g key={s.id}>
                    <circle cx="30" cy={y} r="13" fill={fill} stroke={ROAD} strokeWidth="2" />
                    <text x="30" y={y + 4.5} fontSize="12" fontWeight="800" textAnchor="middle" fill={txt}>
                      {s.marker === "start" ? "S" : s.marker === "finish" ? "F" : s.id}
                    </text>
                    <text x="54" y={y - 2} fontSize="12.5" fontWeight="700" fill={INK}>
                      {s.name.replace(/^(Start Line|Finish Line) — /, "").slice(0, 30)}
                    </text>
                    <text x="54" y={y + 15} fontSize="11" fill="#5b7a70">
                      {s.cumulativeKm.toFixed(1)} km · {s.direction}
                    </text>
                    {i < STEPS.length - 1 && (
                      <line x1="18" y1={y + 25} x2={SIDEBAR - 18} y2={y + 25} stroke="#eee6d3" strokeWidth="1" />
                    )}
                  </g>
                );
              })}
            </g>

            {/* ---------- LEGEND FOOTER ---------- */}
            <g transform={`translate(${MX}, ${H - 30})`}>
              <rect x="0" y="-11" width="42" height="11" rx="5.5" fill={OUT} />
              <text x="52" y="0" fontSize="12.5" fontWeight="600" fill={INK}>Outbound — westbound to Circle</text>
              <rect x="272" y="-11" width="42" height="11" rx="5.5" fill={RET} />
              <text x="324" y="0" fontSize="12.5" fontWeight="600" fill={INK}>Return — eastbound to finish</text>
              <circle cx="600" cy="-5" r="8" fill={GOLD} />
              <text x="616" y="0" fontSize="12.5" fontWeight="600" fill={INK}>Turnaround — Kwame Nkrumah Interchange</text>
            </g>
            <rect x="0" y={H - 10} width={W} height="10" fill={ROAD} />
          </svg>
        </div>
      </div>
    </div>
  );
}
