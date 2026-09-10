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
  center: [5.5725, -0.2018] as [number, number],
};

export const STEPS: RouteStep[] = [
  {
    id: 1,
    name: "Start Line — Absa Clubhouse",
    street: "El-Senoussi Street",
    lat: 5.5662,
    lng: -0.1896,
    cumulativeKm: 0,
    direction: "Flag off — head east",
    instruction:
      "Runners assemble at the Absa Clubhouse and flag off eastbound along El-Senoussi Street toward Julius Nyerere Avenue.",
    marker: "start",
    leg: "outbound",
  },
  {
    id: 2,
    name: "Absa Head Office Corridor",
    street: "Julius Nyerere Avenue",
    lat: 5.5695,
    lng: -0.1883,
    cumulativeKm: 0.5,
    direction: "Turn left — head north",
    instruction:
      "Turn north onto Julius Nyerere Avenue, running past Absa Place / Absa Bank Head Office toward Ring Road Central.",
    marker: "turn",
    leg: "outbound",
  },
  {
    id: 3,
    name: "Ring Road Central Entry",
    street: "Sankara / GBC Junction",
    lat: 5.5772,
    lng: -0.1868,
    cumulativeKm: 1.4,
    direction: "Turn left — head west",
    instruction:
      "At the Sankara / GBC junction, turn onto Ring Road Central and settle into the westbound outbound lanes.",
    marker: "turn",
    leg: "outbound",
  },
  {
    id: 4,
    name: "Westbound Ring Road Central",
    street: "Paloma Hotel Corridor",
    lat: 5.5732,
    lng: -0.1995,
    cumulativeKm: 2.9,
    direction: "Continue straight — west",
    instruction:
      "The long straight outbound stretch along the main commercial boulevard, passing Paloma Hotel toward Circle.",
    marker: "turn",
    leg: "outbound",
  },
  {
    id: 5,
    name: "Turnaround — Kwame Nkrumah Interchange",
    street: "Circle Interchange Roundabout",
    lat: 5.5694,
    lng: -0.2168,
    cumulativeKm: 4.0,
    direction: "U-turn — loop the interchange",
    instruction:
      "Halfway point. Runners loop around the Kwame Nkrumah Interchange (Circle) roundabout and begin the return journey east.",
    marker: "uturn",
    leg: "outbound",
  },
  {
    id: 6,
    name: "Eastbound Ring Road Central",
    street: "Paloma Hotel Corridor Return",
    lat: 5.5728,
    lng: -0.199,
    cumulativeKm: 5.2,
    direction: "Continue straight — east",
    instruction:
      "Return leg heading east along the opposite lanes of Ring Road Central, retracing the boulevard.",
    marker: "turn",
    leg: "inbound",
  },
  {
    id: 7,
    name: "Ringway Exit",
    street: "Osu Avenue Extension / Ringway Link",
    lat: 5.5768,
    lng: -0.187,
    cumulativeKm: 6.8,
    direction: "Turn right — exit south",
    instruction:
      "Exit Ring Road Central onto the Osu Avenue Extension / Ringway Link corridor heading south.",
    marker: "turn",
    leg: "inbound",
  },
  {
    id: 8,
    name: "Finish Line — Assemblies of God HQ",
    street: "Assemblies of God Ghana Head Office",
    lat: 5.5682,
    lng: -0.1863,
    cumulativeKm: 7.5,
    direction: "Finish",
    instruction:
      "The course concludes at the Assemblies of God Ghana Head Office. Cross the timing mat and collect refreshment.",
    marker: "finish",
    leg: "inbound",
  },
];

// Densified geometry so the polyline hugs the road corridors.
export const OUTBOUND_PATH: [number, number][] = [
  [5.5662, -0.1896],
  [5.5672, -0.1889],
  [5.5695, -0.1883],
  [5.5726, -0.1876],
  [5.5755, -0.1871],
  [5.5772, -0.1868],
  [5.5768, -0.1893],
  [5.5755, -0.1925],
  [5.5744, -0.1962],
  [5.5732, -0.1995],
  [5.5718, -0.2048],
  [5.5706, -0.2105],
  [5.5698, -0.2148],
  [5.5694, -0.2168],
];

export const INBOUND_PATH: [number, number][] = [
  [5.5694, -0.2168],
  [5.5686, -0.2158],
  [5.5688, -0.2138],
  [5.5701, -0.2101],
  [5.5714, -0.2044],
  [5.5728, -0.199],
  [5.574, -0.1958],
  [5.5751, -0.1921],
  [5.5764, -0.1889],
  [5.5768, -0.187],
  [5.5748, -0.1866],
  [5.5715, -0.1864],
  [5.5682, -0.1863],
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
