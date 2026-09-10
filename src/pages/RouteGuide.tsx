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
const PAD_X = 120;
const TOP = 190;
const BOTTOM = 92;

const ALL: [number, number][] = [...OUTBOUND_PATH, ...INBOUND_PATH];
const lats = ALL.map((p) => p[0]);
const lngs = ALL.map((p) => p[1]);
const minLat = Math.min(...lats);
const maxLat = Math.max(...lats);
const minLng = Math.min(...lngs);
const maxLng = Math.max(...lngs);
const kx = Math.cos(((minLat + maxLat) / 2) * (Math.PI / 180));

const areaW = W - PAD_X * 2;
const areaH = H - TOP - BOTTOM;
const dx = (maxLng - minLng) * kx;
const dy = maxLat - minLat;
const scale = Math.min(areaW / dx, areaH / dy);
const offX = PAD_X + (areaW - dx * scale) / 2;
const offY = TOP + (areaH - dy * scale) / 2;

const project = ([lat, lng]: [number, number]): [number, number] => [
  offX + (lng - minLng) * kx * scale,
  offY + (maxLat - lat) * scale,
];

/* smooth Catmull-Rom -> cubic bezier so the road reads like a designed graphic */
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

/* label placement: keep callouts off the road */
type Label = { dx: number; dy: number; anchor: "start" | "middle" | "end" };
const LABELS: Record<number, Label> = {
  1: { dx: 0, dy: 62, anchor: "middle" },
  2: { dx: -30, dy: -6, anchor: "end" },
  3: { dx: -16, dy: -58, anchor: "end" },
  4: { dx: 0, dy: -62, anchor: "middle" },
  5: { dx: 8, dy: -84, anchor: "start" },
  6: { dx: 0, dy: 70, anchor: "middle" },
  7: { dx: -150, dy: 34, anchor: "end" },
  8: { dx: -162, dy: 62, anchor: "end" },
};

const INK = "#0f2a23";
const ROAD = "#123b31";
const OUT = "#0f9d76";
const RET = "#e2653c";
const CREAM = "#f7f2e7";

export default function RouteGuide() {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);

  const capture = async () => {
    await new Promise((r) => setTimeout(r, 250));
    return html2canvas(sheetRef.current!, { scale: 2, backgroundColor: CREAM, logging: false });
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
      const pw = pdf.internal.pageSize.getWidth();
      const ph = pdf.internal.pageSize.getHeight();
      pdf.addImage(canvas.toDataURL("image/jpeg", 0.96), "JPEG", 0, 0, pw, ph);
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
            <p className="text-xs uppercase tracking-wide text-muted-foreground">A4 landscape route sheet · print ready</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => saveAs(new Blob([buildGpx()], { type: "application/gpx+xml" }), "Official_Route.gpx")}>
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
        <div
          ref={sheetRef}
          style={{ width: W, height: H, background: CREAM, color: INK }}
          className="mx-auto shadow-xl"
        >
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            <defs>
              <marker id="arrowOut" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M2 1 L10 6 L2 11 z" fill="#ffffff" />
              </marker>
              <marker id="arrowIn" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M2 1 L10 6 L2 11 z" fill="#ffffff" />
              </marker>
              <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0f2a23" floodOpacity="0.18" />
              </filter>
            </defs>

            <rect x="0" y="0" width={W} height={H} fill={CREAM} />
            <rect x="0" y="0" width={W} height="12" fill={ROAD} />

            {/* Header block */}
            <text x={PAD_X} y="72" fontSize="40" fontWeight="800" letterSpacing="-0.5" fill={INK}>
              {COURSE.title.toUpperCase()}
            </text>
            <text x={PAD_X} y="100" fontSize="14" letterSpacing="3" fill="#5b7a70">
              OFFICIAL ROUTE GUIDE · ACCRA, GHANA
            </text>

            {[
              ["DISTANCE", COURSE.totalDistance],
              ["COURSE", "Out-and-back loop"],
              ["SURFACE", COURSE.surface],
              ["START", "Absa Clubhouse"],
              ["FINISH", "Assemblies of God HQ"],
            ].map(([k, v], i) => (
              <g key={k} transform={`translate(${PAD_X + i * 200}, 130)`}>
                <text fontSize="10" letterSpacing="2" fill="#8aa79d">{k}</text>
                <text y="22" fontSize="15" fontWeight="700" fill={INK}>{v}</text>
              </g>
            ))}
            <line x1={PAD_X} y1="168" x2={W - PAD_X} y2="168" stroke="#d9cfb8" strokeWidth="1.5" />

            {/* ROAD — casing, body, centre dashes */}
            <g filter="url(#soft)">
              <path d={OUT_D} fill="none" stroke={ROAD} strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" />
              <path d={IN_D} fill="none" stroke={ROAD} strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <path d={OUT_D} fill="none" stroke={OUT} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
            <path d={IN_D} fill="none" stroke={RET} strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
            <path d={OUT_D} fill="none" stroke="#ffffff" strokeWidth="3" strokeDasharray="16 20" strokeLinecap="round" opacity="0.85" markerMid="url(#arrowOut)" />
            <path d={IN_D} fill="none" stroke="#ffffff" strokeWidth="3" strokeDasharray="16 20" strokeLinecap="round" opacity="0.85" markerMid="url(#arrowIn)" />

            {/* Markers + callouts */}
            {STEPS.map((s) => {
              const [x, y] = project([s.lat, s.lng]);
              const lab = LABELS[s.id] ?? { dx: 0, dy: -56, anchor: "middle" as const };
              const lx = x + lab.dx;
              const ly = y + lab.dy;
              const anchor = lab.anchor;
              const isEnd = s.marker === "start" || s.marker === "finish";
              const fill = s.marker === "start" ? OUT : s.marker === "finish" ? ROAD : s.marker === "uturn" ? "#c9902a" : "#ffffff";
              const txt = s.marker === "start" ? "#fff" : s.marker === "finish" ? "#fff" : s.marker === "uturn" ? "#fff" : INK;
              return (
                <g key={s.id}>
                  <line
                    x1={x}
                    y1={y}
                    x2={lx + (anchor === "end" ? 6 : anchor === "start" ? -6 : 0)}
                    y2={ly + (lab.dy < 0 ? 22 : lab.dy > 20 ? -20 : -4)}
                    stroke="#8aa79d"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <circle cx={x} cy={y} r={isEnd ? 19 : 16} fill="#fff" />
                  <circle cx={x} cy={y} r={isEnd ? 15 : 12} fill={fill} stroke={ROAD} strokeWidth="2.5" />
                  <text x={x} y={y + 5} fontSize="13" fontWeight="800" textAnchor="middle" fill={txt}>
                    {s.marker === "start" ? "S" : s.marker === "finish" ? "F" : s.id}
                  </text>
                  <text x={lx} y={ly} fontSize="14" fontWeight="700" textAnchor={anchor} fill={INK} stroke={CREAM} strokeWidth="5" paintOrder="stroke">
                    {s.name.replace(/^(Start Line|Finish Line) — /, "")}
                  </text>
                  <text x={lx} y={ly + 17} fontSize="11.5" textAnchor={anchor} fill="#5b7a70" stroke={CREAM} strokeWidth="4" paintOrder="stroke">
                    {s.cumulativeKm.toFixed(1)} km · {s.direction}
                  </text>
                </g>
              );
            })}

            {/* Footer legend */}
            <line x1={PAD_X} y1={H - 74} x2={W - PAD_X} y2={H - 74} stroke="#d9cfb8" strokeWidth="1.5" />
            <g transform={`translate(${PAD_X}, ${H - 44})`}>
              <rect x="0" y="-8" width="46" height="12" rx="6" fill={OUT} />
              <text x="56" y="2" fontSize="13" fontWeight="600" fill={INK}>Outbound — westbound to Circle</text>
              <rect x="330" y="-8" width="46" height="12" rx="6" fill={RET} />
              <text x="386" y="2" fontSize="13" fontWeight="600" fill={INK}>Return — eastbound to finish</text>
              <circle cx="700" cy="-2" r="9" fill="#c9902a" />
              <text x="716" y="2" fontSize="13" fontWeight="600" fill={INK}>Turnaround point</text>
            </g>
            <text x={W - PAD_X} y={H - 22} fontSize="11" letterSpacing="1.5" textAnchor="end" fill="#8aa79d">
              SCHEMATIC — NOT TO SCALE
            </text>
            <rect x="0" y={H - 10} width={W} height="10" fill={ROAD} />
          </svg>
        </div>
      </div>
    </div>
  );
}
