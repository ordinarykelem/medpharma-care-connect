export type RouteStep = {
  id: number;
  name: string;
  street: string;
  lat: number;
  lng: number;
  cumulativeKm: number;
  direction: string;
  instruction: string;
  marker: "start" | "turn" | "uturn" | "finish";
  leg: "outbound" | "inbound";
};

export const COURSE = {
  title: "Absa Ring Road Central Race",
  subtitle: "Official Route Guide · Accra, Ghana",
  totalDistance: "≈ 7.5 km",
  courseType: "Out-and-back city loop",
  terrain: "Paved metropolitan road",
  surface: "Flat Asphalt",
  center: [5.5680, -0.1960] as [number, number],
};

export const STEPS: RouteStep[] = [
  {
    id: 1,
    name: "Start — Absa Bank Club House",
    street: "El-Senoussi Street",
    lat: 5.5616,
    lng: -0.1857,
    cumulativeKm: 0,
    direction: "Flag off — head north-west",
    instruction:
      "Runners assemble at the Absa Bank Club House and flag off north-west along El-Senoussi Street, passing LMI Holdings toward Independence Avenue.",
    marker: "start",
    leg: "outbound",
  },
  {
    id: 2,
    name: "Independence Avenue Turn",
    street: "El-Senoussi St / Independence Ave",
    lat: 5.5637,
    lng: -0.1893,
    cumulativeKm: 0.5,
    direction: "Turn right — head north",
    instruction:
      "At the Independence Avenue junction turn right and run north along Independence Avenue, past Absa Bank Head Office (Absa Place).",
    marker: "turn",
    leg: "outbound",
  },
  {
    id: 3,
    name: "Absa Place Corridor",
    street: "Independence Avenue",
    lat: 5.5666,
    lng: -0.1912,
    cumulativeKm: 1.1,
    direction: "Continue straight — north",
    instruction:
      "Long straight climb along Independence Avenue toward the Sankara Interchange, keeping the Ahmadou Ahidjo Road side on the left.",
    marker: "turn",
    leg: "outbound",
  },
  {
    id: 4,
    name: "Sankara Interchange — Ring Road Central Entry",
    street: "Ring Road Central",
    lat: 5.5722,
    lng: -0.1949,
    cumulativeKm: 1.9,
    direction: "Turn left — head west",
    instruction:
      "Join Ring Road Central at the Sankara Interchange and settle into the westbound outbound lanes toward Circle.",
    marker: "turn",
    leg: "outbound",
  },
  {
    id: 5,
    name: "Turnaround — Kwame Nkrumah Interchange",
    street: "Circle Interchange Roundabout",
    lat: 5.5707,
    lng: -0.2075,
    cumulativeKm: 3.4,
    direction: "U-turn — loop the interchange",
    instruction:
      "Halfway point. Runners loop the Kwame Nkrumah Interchange (Circle) and begin the return journey east on Ring Road Central.",
    marker: "uturn",
    leg: "outbound",
  },
  {
    id: 6,
    name: "Sankara Return",
    street: "Ring Road Central eastbound",
    lat: 5.5724,
    lng: -0.1946,
    cumulativeKm: 5.0,
    direction: "Continue straight — east",
    instruction:
      "Return east along the opposite lanes of Ring Road Central, through the Sankara Interchange onto Ring Road East.",
    marker: "turn",
    leg: "inbound",
  },
  {
    id: 7,
    name: "Ringway Link Exit",
    street: "Ring Road East / Ringway Link",
    lat: 5.5700,
    lng: -0.1858,
    cumulativeKm: 6.6,
    direction: "Turn right — exit south",
    instruction:
      "Leave Ring Road East onto the Ringway Link corridor and head south toward Osu.",
    marker: "turn",
    leg: "inbound",
  },
  {
    id: 8,
    name: "Finish — Assemblies of God HQ",
    street: "Assemblies of God Ghana Head Office",
    lat: 5.5648,
    lng: -0.1839,
    cumulativeKm: 7.5,
    direction: "Finish",
    instruction:
      "The course concludes at the Assemblies of God Ghana Head Office. Cross the timing mat and collect refreshment.",
    marker: "finish",
    leg: "inbound",
  },
];

export const LANDMARKS: { name: string; lat: number; lng: number }[] = [
  { name: "Absa Bank Head Office", lat: 5.5647, lng: -0.1899 },
  { name: "LMI Holdings", lat: 5.5632, lng: -0.1882 },
];

// Densified geometry so the polyline hugs the road corridors.
export const OUTBOUND_PATH: [number, number][] = [
  [5.5616, -0.1857],
  [5.5623, -0.1869],
  [5.5630, -0.1881],
  [5.5637, -0.1893],
  [5.5648, -0.1899],
  [5.5666, -0.1912],
  [5.5686, -0.1925],
  [5.5705, -0.1938],
  [5.5722, -0.1949],
  [5.5719, -0.1968],
  [5.5715, -0.1995],
  [5.5712, -0.2025],
  [5.5709, -0.2052],
  [5.5707, -0.2075],
];

export const INBOUND_PATH: [number, number][] = [
  [5.5707, -0.2075],
  [5.5700, -0.2070],
  [5.5701, -0.2050],
  [5.5705, -0.2022],
  [5.5709, -0.1992],
  [5.5713, -0.1966],
  [5.5724, -0.1946],
  [5.5719, -0.1925],
  [5.5713, -0.1898],
  [5.5706, -0.1876],
  [5.5700, -0.1858],
  [5.5684, -0.1852],
  [5.5666, -0.1845],
  [5.5648, -0.1839],
];

export const FULL_PATH: [number, number][] = [...OUTBOUND_PATH, ...INBOUND_PATH.slice(1)];


export function buildGpx(): string {
  const pts = FULL_PATH.map((p) => `      <trkpt lat="${p[0]}" lon="${p[1]}"></trkpt>`).join("\n");
  const wpts = STEPS.map(
    (s) =>
      `  <wpt lat="${s.lat}" lon="${s.lng}"><name>${s.id}. ${s.name}</name><desc>${s.instruction}</desc></wpt>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="MedPharma Route Guide" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata><name>${COURSE.title}</name></metadata>
${wpts}
  <trk>
    <name>${COURSE.title}</name>
    <trkseg>
${pts}
    </trkseg>
  </trk>
</gpx>`;
}
