export const AA = {
  assets: "/demo/ast-asche",
  brand: {
    short: "AST & ASCHE",
    stacked: ["AST", "&", "ASCHE"] as const,
    full: "Ast & Asche Manufaktur",
    tagline: "Holz trifft Feuer. Ton trifft Geduld.",
    profession: "Manufaktur für Möbel und Keramik",
  },
  place: {
    village: "Kammwald",
    region: "Westerwald",
    address1: "Werkstattweg 3",
    address2: "57629 Kammwald",
    address3: "Westerwald",
  },
  contact: {
    phoneTel: "+492661000000",
    phoneDisplay: "+49 2661 000 000",
    email: "besuch@astundasche.de",
    hours: "Do–Sa 11–18 · Atelier nach Vereinbarung",
  },
  makers: {
    wood: { name: "Nils Havel", role: "Möbel · Eiche" },
    clay: { name: "Lea Somm", role: "Keramik · Aschebrand" },
  },
  youforge: {
    label: "Living Demo",
    studio: "YouForge",
    href: "/",
  },
} as const;

export const AA_IMG = {
  hero: `${AA.assets}/hero.jpg`,
  chair: `${AA.assets}/chair.jpg`,
  vessels: `${AA.assets}/vessels.jpg`,
  kiln: `${AA.assets}/kiln.jpg`,
  exterior: `${AA.assets}/exterior.jpg`,
  table: `${AA.assets}/table.jpg`,
  wheel: `${AA.assets}/wheel.jpg`,
  joinery: `${AA.assets}/joinery.jpg`,
  lamp: `${AA.assets}/lamp.jpg`,
  bowl: `${AA.assets}/bowl.jpg`,
  forest: `${AA.assets}/forest.jpg`,
  makers: `${AA.assets}/makers.jpg`,
  clay: `${AA.assets}/clay.jpg`,
  stool: `${AA.assets}/stool.jpg`,
  firing: `${AA.assets}/firing.jpg`,
  oak: `${AA.assets}/oak.jpg`,
  showroom: `${AA.assets}/showroom.jpg`,
  glaze: `${AA.assets}/glaze.jpg`,
  film: `${AA.assets}/prozess.mp4`,
} as const;
