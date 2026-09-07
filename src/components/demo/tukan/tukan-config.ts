export const TUKAN = {
  assets: "/demo/tukan",
  brand: {
    short: "TUKAN",
    full: "TUKAN Maracuja Protein",
    tagline: "Maracuja Protein-Eis. 0 g Zucker. 14 g Protein.",
  },
  product: {
    name: "Maracuja",
    kind: "Protein-Eis am Stiel",
    proteinG: 14,
    sugarG: 0,
    kcal: 121,
    packSize: 4,
    packPrice: "9,90 €",
    packPriceValue: 9.9,
    stickPrice: "2,48 €",
    ship: "2\u2060–\u20604\u00A0Werktage",
  },
  youforge: {
    label: "Living Demo",
    studio: "YouForge",
    href: "/",
    contact: "/kontakt",
    pitch:
      "Das ist eine Living Demo von YouForge — so kann ein Food-Launch online wirken: Produkt, Zahl, Bestellung auf einer Seite.",
  },
} as const;

export const TUKAN_IMG = {
  hero: `${TUKAN.assets}/jungle-dusk.jpg`,
  jungle: `${TUKAN.assets}/jungle-dusk.jpg`,
  popsicle: `${TUKAN.assets}/popsicle-hero.jpg`,
  passion: `${TUKAN.assets}/passion-cut.jpg`,
  bali: `${TUKAN.assets}/bali-pool.jpg`,
  macro: `${TUKAN.assets}/ice-macro.jpg`,
  toucan: `${TUKAN.assets}/toucan.jpg`,
  toucanA: `${TUKAN.assets}/toucan-a.jpg`,
  toucanB: `${TUKAN.assets}/toucan-b.jpg`,
  toucanFly: `${TUKAN.assets}/toucan-fly.jpg`,
  toucanGlide: `${TUKAN.assets}/toucan-glide.jpg`,
} as const;
