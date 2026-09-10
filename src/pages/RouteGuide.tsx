import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileImage, FileText, Printer, Map as MapIcon, ListOrdered, Flag, Navigation, RotateCcw, MountainSnow } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { COURSE, STEPS, OUTBOUND_PATH, INBOUND_PATH, buildGpx, type RouteStep } from "@/lib/marathonRoute";

const markerHtml = (s: RouteStep, active: boolean) => {
  const glyph =
    s.marker === "start" ? "▲" : s.marker === "finish" ? "◼" : s.marker === "uturn" ? "↺" : String(s.id);
  const bg =
    s.marker === "start" ? "#15803d" : s.marker === "finish" ? "#111827" : s.marker === "uturn" ? "#b45309" : "#1d4ed8";
  return `<div style="display:grid;place-items:center;width:30px;height:30px;border-radius:9999px;background:${bg};color:#fff;font:700 13px/1 ui-sans-serif,system-ui;border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.35);transform:scale(${active ? 1.25 : 1});">${glyph}</div>`;
};

const makeIcon = (s: RouteStep, active: boolean) =>
  L.divIcon({ html: markerHtml(s, active), className: "", iconSize: [30, 30], iconAnchor: [15, 15] });

function MapController({ active }: { active: RouteStep | null }) {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds([...OUTBOUND_PATH, ...INBOUND_PATH] as [number, number][]);
    map.fitBounds(bounds, { padding: [40, 40] });
    setTimeout(() => map.invalidateSize(), 200);
  }, [map]);
  useEffect(() => {
    if (active) map.flyTo([active.lat, active.lng], 16, { duration: 0.8 });
  }, [active, map]);
  return null;
}

export default function RouteGuide() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [mobileView, setMobileView] = useState<"map" | "guide">("map");
  const [busy, setBusy] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const active = STEPS.find((s) => s.id === activeId) ?? null;

  const capture = async () => {
    const el = sheetRef.current!;
    await new Promise((r) => setTimeout(r, 600));
    return html2canvas(el, { useCORS: true, scale: 2, backgroundColor: "#ffffff", logging: false });
  };

  const downloadJpeg = async () => {
    setBusy(true);
    try {
      const canvas = await capture();
      canvas.toBlob((b) => b && saveAs(b, "Official_Route_Guide.jpg"), "image/jpeg", 0.95);
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
      const img = canvas.toDataURL("image/jpeg", 0.95);
      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
      const pw = pdf.internal.pageSize.getWidth();
      const ph = pdf.internal.pageSize.getHeight();
      const w = pw - 40;
      const h = (canvas.height * w) / canvas.width;
      let left = h;
      let y = 20;
      pdf.addImage(img, "JPEG", 20, y, w, h);
      left -= ph - 40;
      while (left > 0) {
        pdf.addPage();
        y = 20 - (h - left);
        pdf.addImage(img, "JPEG", 20, y, w, h);
        left -= ph - 40;
      }
      pdf.save("Official_Route_Guide.pdf");
      toast({ title: "PDF downloaded" });
    } catch {
      toast({ title: "Could not create the PDF", variant: "destructive" });
    }
    setBusy(false);
  };

  const downloadGpx = () => {
    saveAs(new Blob([buildGpx()], { type: "application/gpx+xml" }), "Official_Route.gpx");
  };

  return (
    <div className="min-h-screen bg-background">
      <style>{`@media print{.no-print{display:none !important}.print-full{width:100% !important;position:static !important}body{background:#fff}}`}</style>

      <header className="no-print border-b border-border bg-card sticky top-0 z-20">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight uppercase">{COURSE.title}</h1>
            <p className="text-xs text-muted-foreground mt-0.5 tracking-wide uppercase">{COURSE.subtitle}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              <MountainSnow className="h-3.5 w-3.5" /> {COURSE.surface}
            </span>
            <Button variant="outline" size="sm" onClick={downloadGpx}><Download className="h-4 w-4 mr-1.5" />GPX</Button>
            <Button variant="outline" size="sm" disabled={busy} onClick={downloadJpeg}><FileImage className="h-4 w-4 mr-1.5" />JPEG</Button>
            <Button size="sm" disabled={busy} onClick={downloadPdf}><FileText className="h-4 w-4 mr-1.5" />PDF</Button>
            <Button variant="outline" size="sm" onClick={() => window.print()}><Printer className="h-4 w-4 mr-1.5" />Print</Button>
          </div>
        </div>
      </header>

      <div className="no-print md:hidden max-w-[1400px] mx-auto px-6 pt-4">
        <div className="grid grid-cols-2 gap-1 rounded-lg bg-muted p-1">
          {(["map", "guide"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setMobileView(v)}
              className={`flex items-center justify-center gap-1.5 rounded-md py-2 text-sm font-semibold transition ${
                mobileView === v ? "bg-background shadow-sm" : "text-muted-foreground"
              }`}
            >
              {v === "map" ? <MapIcon className="h-4 w-4" /> : <ListOrdered className="h-4 w-4" />}
              {v === "map" ? "Route Map" : "Turn-by-Turn"}
            </button>
          ))}
        </div>
      </div>

      <div ref={sheetRef} className="max-w-[1400px] mx-auto px-6 py-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] bg-background">
        {/* Left: summary + itinerary */}
        <div className={`space-y-4 ${mobileView === "map" ? "hidden md:block" : ""}`}>
          <Card className="p-5">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Course Summary</h2>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold">{COURSE.totalDistance}</div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground mt-1">Total distance</div>
              </div>
              <div>
                <div className="text-sm font-semibold leading-snug">{COURSE.courseType}</div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground mt-1">Course type</div>
              </div>
              <div>
                <div className="text-sm font-semibold leading-snug">{COURSE.terrain}</div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground mt-1">Terrain</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground border-t border-border pt-3">
              Start: Absa Clubhouse, El-Senoussi Street · Finish: Assemblies of God Ghana Head Office.
            </p>
          </Card>

          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground px-1">
              Turn-by-Turn Itinerary
            </h2>
            {STEPS.map((s) => {
              const on = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveId(s.id);
                    setMobileView("map");
                  }}
                  className={`w-full text-left rounded-lg border p-4 transition ${
                    on ? "border-primary bg-primary/5 shadow-sm" : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-foreground text-background text-sm font-bold">
                      {s.marker === "start" ? <Flag className="h-4 w-4" /> : s.marker === "uturn" ? <RotateCcw className="h-4 w-4" /> : s.marker === "finish" ? <Flag className="h-4 w-4" /> : s.id}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-semibold">{s.name}</span>
                        <span className="text-xs font-mono text-muted-foreground">{s.cumulativeKm.toFixed(1)} km</span>
                      </div>
                      <div className="text-xs uppercase tracking-wide text-primary font-semibold mt-1">
                        {s.direction} · {s.street}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-snug">{s.instruction}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: map */}
        <div className={`${mobileView === "guide" ? "hidden md:block" : ""}`}>
          <div className="md:sticky md:top-24 print-full">
            <Card className="overflow-hidden p-0">
              <div className="h-[70vh] min-h-[420px] w-full">
                <MapContainer center={COURSE.center} zoom={14} scrollWheelZoom style={{ height: "100%", width: "100%" }}>
                  <TileLayer
                    crossOrigin
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Polyline positions={OUTBOUND_PATH} pathOptions={{ color: "#1d4ed8", weight: 7, opacity: 0.9 }} />
                  <Polyline
                    positions={INBOUND_PATH}
                    pathOptions={{ color: "#dc2626", weight: 6, opacity: 0.9, dashArray: "12 8" }}
                  />
                  {STEPS.map((s) => (
                    <Marker
                      key={s.id}
                      position={[s.lat, s.lng]}
                      icon={makeIcon(s, s.id === activeId)}
                      eventHandlers={{ click: () => setActiveId(s.id) }}
                    >
                      <Popup>
                        <div className="text-sm">
                          <strong>{s.id}. {s.name}</strong>
                          <div className="text-xs mt-1">{s.direction} · {s.street}</div>
                          <div className="text-xs mt-1">{s.cumulativeKm.toFixed(1)} km</div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                  <MapController active={active} />
                </MapContainer>
              </div>
              <div className="flex flex-wrap items-center gap-4 border-t border-border px-4 py-3 text-xs">
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-6 rounded bg-[#1d4ed8]" /> Outbound (westbound)</span>
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-6 rounded bg-[#dc2626]" /> Return (eastbound)</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground"><Navigation className="h-3.5 w-3.5" /> Tap a marker or a step to sync</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
