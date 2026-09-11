export type CatalogStyle = {
  slug: string;
  industry: string;
  title: string;
  line: string;
  href: string;
  image: string;
  width: number;
  height: number;
  /** z. B. Onepager — zusätzlich zur Branche */
  format?: string;
};

/** Lookbook: eine Live-Demo pro Branche. Kein Filter, kein Portfolio. */
export const catalogStyles: CatalogStyle[] = [
  {
    slug: "syn",
    industry: "Fashion",
    title: "Pyra",
    line: "Feuer, Riss, Drag — ein Shop der schlägt.",
    href: "/demo/syn",
    image: "/portfolio/syn-website.png",
    width: 1800,
    height: 1125,
  },
  {
    slug: "vault",
    industry: "Spirituosen",
    title: "Single Malt",
    line: "Drei Reifestufen, ein Haus.",
    href: "/demo/vault",
    image: "/portfolio/vault-website.png",
    width: 1800,
    height: 1125,
  },
  {
    slug: "lane",
    industry: "Gastro",
    title: "Night Kitchen",
    line: "Zwölf Stühle an der Glut.",
    href: "/demo/lane",
    image: "/portfolio/lane-website.png",
    width: 1800,
    height: 1125,
  },
  {
    slug: "tukan",
    industry: "Food",
    title: "TUKAN",
    line: "Maracuja, 0 g Zucker, 14 g Protein.",
    href: "/demo/tukan",
    image: "/demo/tukan/popsicle-hero.jpg",
    width: 1920,
    height: 1080,
    format: "Onepager",
  },
  {
    slug: "ast-asche",
    industry: "Manufaktur",
    title: "Holz & Ton",
    line: "Werkstatt, kein Shop-Raster.",
    href: "/demo/ast-asche",
    image: "/portfolio/ast-asche-website.png",
    width: 1800,
    height: 1125,
  },
  {
    slug: "salon",
    industry: "Salon",
    title: "Colour Atelier",
    href: "/demo/aurea",
    line: "Flagship statt Buchungs-Template.",
    image: "/portfolio/salon-website.png",
    width: 1800,
    height: 1125,
  },
  {
    slug: "wolff",
    industry: "Barber",
    title: "Herrenzimmer",
    href: "/demo/wolff",
    line: "Klinge, Leder, 1972.",
    image: "/portfolio/wolff-website.png",
    width: 1800,
    height: 1125,
  },
  {
    slug: "garten",
    industry: "Garten",
    title: "Grünwerk",
    line: "Handwerk, das man sofort sieht.",
    href: "/demo/garten",
    image: "/portfolio/garten-website.png",
    width: 1800,
    height: 1125,
  },
  {
    slug: "bestattung",
    industry: "Bestattung",
    title: "Begleitung",
    line: "Ruhig, klar, rund um die Uhr.",
    href: "/demo/bestattung",
    image: "/portfolio/bestattungs-website.png",
    width: 1800,
    height: 1125,
  },
  {
    slug: "fliesen",
    industry: "Fliesen",
    title: "Meisterbetrieb",
    line: "Bad, Stein, Präzision.",
    href: "/demo/fliesen",
    image: "/portfolio/fliesen-website.png",
    width: 1800,
    height: 1125,
  },
  {
    slug: "rs-entruempelung",
    industry: "Entrümpelung",
    title: "Raumklar",
    line: "Leer. Sauber. Bereit.",
    href: "/demo/rs-entruempelung",
    image: "/portfolio/rs-website.png",
    width: 1800,
    height: 1125,
  },
  {
    slug: "kfz",
    industry: "KFZ",
    title: "Spurwerk",
    line: "Karosserie, Werkstatt, Tuning.",
    href: "/demo/kfz",
    image: "/demo/kfz/hero-workshop.jpg",
    width: 1920,
    height: 1080,
    format: "Onepager",
  },
];
