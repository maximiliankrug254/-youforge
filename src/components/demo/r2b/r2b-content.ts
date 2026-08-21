export const R2B_IMG = {
  hero: "/demo/garten/hero-wide.jpg",
  craft: "/demo/tiwo-fliesen/handwerk.jpg",
  material: "/demo/garten/arbeit-detail.jpg",
  interior: "/demo/tiwo-fliesen/01-hero.jpg",
  stone: "/demo/garten/steinmauer.jpg",
  pool: "/demo/garten/pool-terrasse.jpg",
  park: "/demo/garten/parkanlage.jpg",
  workshop: "/demo/atl-lauber/hero-workshop.jpg",
  terrace: "/demo/garten/terrasse-complete.jpg",
  plants: "/demo/garten/pflanzen-detail.jpg",
  wall: "/demo/garten/mauer.jpg",
  wide: "/demo/garten/garten-weit.jpg",
  detail: "/demo/garten/detail-hoch.jpg",
  tiles: "/demo/tiwo-fliesen/after-bad.jpg",
} as const;

export const R2B_NAV = [
  ["#arbeit", "Arbeit"],
  ["#ansatz", "Ansatz"],
  ["#atelier", "Atelier"],
  ["#kontakt", "Kontakt"],
] as const;

export const R2B_MARQUEE = [
  "Holz Design Hamburg",
  "Fußbodentechnik Müller",
  "Kassel",
  "Marke",
  "Content",
  "Kampagne",
  "Recruiting",
  "Anfragen",
] as const;

export const R2B_CASES = [
  {
    client: "Holz Design Hamburg",
    role: "Marke · Web · Content",
    title: "Parkett, das online genauso sitzt.",
    text: "Zuerst zugehört. Dann vermessen. Dann geliefert — Zielgruppe, Tonalität, Fläche. Ein Auftritt wie der Endschliff.",
    image: R2B_IMG.interior,
    alt: "Hochwertiger Innenraum — Material, Licht, Präzision",
  },
  {
    client: "Fußbodentechnik Müller",
    role: "Auftritt · Anfragen",
    title: "Kunden, die wirklich passen.",
    text: "Keine leeren Klicks. Eine Außendarstellung, die Betriebe anzieht, die zum Gewerk gehören — modern, klar, ehrlich.",
    image: R2B_IMG.tiles,
    alt: "Präzise verlegte Fläche — Handwerk, das man sieht",
  },
  {
    client: "Employer Branding",
    role: "Kampagne · Fachkräfte",
    title: "Azubis finden euch. Endlich.",
    text: "Nicht noch eine Stellenanzeige, die niemand liest. Content, der Fachkräfte dort trifft, wo sie wirklich scrollen.",
    image: R2B_IMG.workshop,
    alt: "Werkstatt und Präzision — Handwerk als Marke",
  },
] as const;

export const R2B_SERVICES = [
  {
    index: "01",
    title: "Auftritt",
    kicker: "Marke, Fläche, Web",
    text: "Logo, Farben, Website, Werbemittel — ein System, das online und vor Ort dieselbe Sprache spricht.",
    image: R2B_IMG.terrace,
  },
  {
    index: "02",
    title: "Bild",
    kicker: "Foto, Reel, Set",
    text: "Vor Ort. Echte Hände. Echte Baustellen. Content, der Vertrauen schafft, weil er nicht gestellt wirkt.",
    image: R2B_IMG.craft,
  },
  {
    index: "03",
    title: "Reichweite",
    kicker: "Ads, Recruiting, Platz",
    text: "Die richtigen Leute. Zur richtigen Zeit. Messbar in Anfragen — nicht in leeren Impressionen.",
    image: R2B_IMG.park,
  },
  {
    index: "04",
    title: "Betrieb",
    kicker: "Kanäle, die laufen",
    text: "Strategie, Planung, Umsetzung. Damit der Kalender voll ist mit den richtigen Gesprächen — nicht mit Marketing-Stress.",
    image: R2B_IMG.stone,
  },
] as const;

export const R2B_STEPS = [
  {
    index: "01",
    title: "Hören",
    text: "Gewerk, Stimme, Engpass. Bevor eine Kampagne entsteht, verstehen wir den Betrieb.",
  },
  {
    index: "02",
    title: "Schärfen",
    text: "Positionierung, Bild, Tonalität. Alles, was nicht sitzt, fliegt raus.",
  },
  {
    index: "03",
    title: "Sichtbar machen",
    text: "Content, Fläche, Kampagne. Dann erst Reichweite — mit dem, was euch unterscheidet.",
  },
] as const;

export const R2B_TEAM = [
  { name: "Niko Lindauer", role: "General Manager" },
  { name: "Felicitas Jordan", role: "General Manager" },
  { name: "Tobias Amador", role: "Marketing Manager" },
  { name: "Darja Lakomski", role: "Project Manager" },
  { name: "Anna Povolyaeva", role: "Campaign Manager" },
  { name: "Angelina Herz", role: "Content Creator" },
] as const;

export const R2B_VOICES = [
  {
    quote:
      "Nicht irgendwas gemacht — erst zugehört, sauber vermessen, dann geliefert. Zielgruppe, Positionierung, Tonalität. Alles sitzt wie der Endschliff beim Parkett.",
    name: "Thies Eggers",
    firm: "Holz Design Hamburg",
  },
  {
    quote:
      "Ehrlich, unkompliziert, professionell. Unsere Außendarstellung ist heute viel moderner — und wir bekommen Anfragen von Kunden, die wirklich zu uns passen.",
    name: "Michael Müller",
    firm: "Fußbodentechnik Müller",
  },
] as const;

export const R2B_STRIP = [
  { src: R2B_IMG.craft, label: "Gewerk" },
  { src: R2B_IMG.interior, label: "Raum" },
  { src: R2B_IMG.material, label: "Material" },
  { src: R2B_IMG.pool, label: "Wohnen" },
  { src: R2B_IMG.workshop, label: "Präzision" },
  { src: R2B_IMG.plants, label: "Fläche" },
  { src: R2B_IMG.wall, label: "Struktur" },
  { src: R2B_IMG.detail, label: "Detail" },
] as const;
