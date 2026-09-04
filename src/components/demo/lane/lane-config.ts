export const LANE = {
  assets: "/demo/lane",
  brand: {
    short: "LANE",
    full: "LANE Night Kitchen",
    tagline: "Streetfood vom Grill. Zwölf Plätze am Counter.",
    line: "Night Kitchen",
  },
  place: {
    access: "Bitte reservieren",
    note: "Die Adresse steht in der Bestätigung.",
    late: "Nach 21 Uhr ohne Reservierung oft kein Platz mehr.",
  },
  contact: {
    phoneTel: "+491700000011",
    phoneDisplay: "+49 170 000 0011",
    email: "nacht@lane-kitchen.de",
    hours: "Mi–Sa 18–01 · So 16–23",
    closed: "Mo–Di geschlossen",
    seats: 12,
  },
  youforge: {
    label: "Living Demo",
    studio: "YouForge",
    href: "/",
    contact: "/kontakt",
    pitch:
      "Das ist eine Living Demo von YouForge — so kann ein Streetfood-Betrieb auf Club-Niveau online wirken.",
  },
} as const;

export const LANE_IMG = {
  hero: `${LANE.assets}/hero.jpg`,
  grill: `${LANE.assets}/grill.jpg`,
  bun: `${LANE.assets}/bun.jpg`,
  skewer: `${LANE.assets}/skewer.jpg`,
  taco: `${LANE.assets}/taco.jpg`,
  noodles: `${LANE.assets}/noodles.jpg`,
  wings: `${LANE.assets}/wings.jpg`,
  ribs: `${LANE.assets}/ribs.jpg`,
  shrimp: `${LANE.assets}/shrimp.jpg`,
  bar: `${LANE.assets}/bar.jpg`,
  room: `${LANE.assets}/room.jpg`,
  counter: `${LANE.assets}/counter.jpg`,
  venue: `${LANE.assets}/venue.jpg`,
  night: `${LANE.assets}/night.jpg`,
} as const;
