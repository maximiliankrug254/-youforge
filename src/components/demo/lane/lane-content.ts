import { LANE_IMG } from "@/components/demo/lane/lane-config";

export const LANE_NAV = [
  { id: "hero", n: "01", label: "Abend" },
  { id: "kitchen", n: "02", label: "Küche" },
  { id: "bar", n: "03", label: "Bar" },
  { id: "room", n: "04", label: "Raum" },
  { id: "reserve", n: "05", label: "Tisch" },
] as const;

export const LANE_COPY = {
  heroEyebrow: "LANE",
  heroTitle: "Du isst, wo gegrillt wird.",
  heroLead:
    "Bun, Spieß, Ribs — frisch von der Glut, Counter statt Tische weit weg. Zwölf Plätze. Am besten vorher reservieren.",
  heroMeta: "Mi–Sa 18–01 · So 16–23 · 45–65 € · max. 6 Personen",
  heroCta: "Tisch reservieren",
  heroSecondary: "Zur Karte →",
  heroPlateName: "Wagyu Bun",
  heroPlatePrice: "22 €",
  heroPlateNote: "Chili-Fett, saure Gurke. Eine Hand reicht.",
  scarcityFallback: "12 Plätze · Mi–Sa ab 18 · bitte reservieren",
  kitchenEyebrow: "02 · Küche",
  kitchenTitle: "Was auf dem Grill liegt.",
  kitchenLead:
    "Sechs Gerichte, alles vom Grill oder aus der Pfanne. Die festen Gerichte bleiben, der Rest wechselt. Portionen für Hunger — mit den Händen essen ist in Ordnung.",
  kitchenCta: "Tisch reservieren",
  kitchenFeaturedLabel: "Heute auf dem Grill",
  barEyebrow: "03 · Bar",
  barTitle: "Erst ein Drink, dann das Essen.",
  barLead:
    "Highball zum Ankommen, Bier zum Spieß, letzter Ausschank 00:45. Acht Drinks, keine lange Cocktailkarte. Wer nur trinken will, sitzt trotzdem am Counter — Stehtische gibt es nicht.",
  barSignature: "Zum Start",
  roomEyebrow: "04 · Raum",
  roomTitle: "Ihr sitzt direkt an der Küche.",
  roomLead:
    "Zwölf Stühle nebeneinander, Blick zum Grill. Jacke an den Haken. Hinter dem Counter zwei Leute: einer kocht, einer schenkt ein. Mehr als sechs Personen teilen wir auf.",
  roomFacts: [
    {
      k: "Plätze",
      v: "Zwölf Stühle am Counter. Maximal sechs Personen pro Reservierung.",
    },
    {
      k: "Reservieren",
      v: "Am besten vorher. Nach 21 Uhr bekommen wir Walk-ins oft nicht mehr unter.",
    },
    {
      k: "Adresse",
      v: "Steht in der Bestätigung. Kleiner Laden, kein großes Schild — so findet ihr uns.",
    },
  ],
  roomCta: "Tisch reservieren",
  reserveEyebrow: "05 · Tisch",
  reserveTitle: "Tisch reservieren.",
  reserveLead:
    "Name, Anzahl und Abend. Innerhalb von 24 Stunden bekommst du Bescheid — bei freien Plätzen mit Uhrzeit und Adresse.",
  reserveHours: "Mi–Sa 18–01 · So 16–23 · Mo & Di geschlossen",
  reserveCta: "Tisch reservieren",
  reserveDone: "Danke. Bestätigung und Adresse kommen per Mail.",
  reserveHint: "Living Demo — so würde die Anfrage laufen.",
} as const;

export const LANE_SLOTS = ["18:30", "20:00", "21:30"] as const;

export const LANE_FEATURED_DISH = {
  id: "ribs",
  name: "Ribs",
  note: "Lange im Rauch, dann Grill. Halbes Rack.",
  sell: "Halbes Rack, klebrig vom Grill. Dafür kommen die meisten.",
  price: "28",
  image: LANE_IMG.ribs,
} as const;

export const LANE_DISHES = [
  {
    id: "bun",
    name: "Wagyu Bun",
    note: "Weiches Brötchen, Chili-Fett, saure Gurke. Eine Hand reicht.",
    price: "22",
    image: LANE_IMG.bun,
  },
  {
    id: "skewer",
    name: "Rind am Spieß",
    note: "Vom Grill, mit Mark-Glasur.",
    price: "26",
    image: LANE_IMG.skewer,
  },
  {
    id: "taco",
    name: "Schweinebauch-Taco",
    note: "Asche-Salz, scharf. Zwei Stück.",
    price: "18",
    image: LANE_IMG.taco,
  },
  {
    id: "noodles",
    name: "Chili-Öl Nudeln",
    note: "Kalt angesetzt, eine Schüssel.",
    price: "19",
    image: LANE_IMG.noodles,
  },
  {
    id: "wings",
    name: "Wings",
    note: "Knusprig, klebrig, sechs Stück.",
    price: "16",
    image: LANE_IMG.wings,
  },
] as const;

export const LANE_DRINKS = [
  {
    name: "House Highball",
    note: "Whisky, Soda, viel Eis. Der erste Drink.",
    price: "14",
    signature: true,
  },
  { name: "Rauch-Cola", note: "Cola, kalter Rauch, Zitrone. Passt zum Spieß.", price: "11" },
  { name: "Dunkles Fass", note: "Wechselndes Fass. Kurz und bitter.", price: "7" },
  { name: "Whisky, pur", note: "Ein Glas, nach dem Essen.", price: "16" },
  { name: "Chili-Ginger", note: "Ingwer, Chili, kalt.", price: "12" },
  { name: "Espresso", note: "Kurz, auch nach Mitternacht.", price: "4" },
  { name: "Sour", note: "Zitrone, Fass, Schaum. Unser einziges Sour.", price: "13" },
  { name: "Wasser, still", note: "0,75 l. Sinnvoll bei den Nudeln.", price: "4" },
] as const;

export const LANE_INTRO_SLIDES = [
  { src: LANE_IMG.hero, word: "FEUER" },
  { src: LANE_IMG.bun, word: "FETT" },
  { src: LANE_IMG.skewer, word: "GLUT" },
  { src: LANE_IMG.wings, word: "HUNGER" },
] as const;
