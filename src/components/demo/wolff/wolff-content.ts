export const WOLFF_SERVICES = [
  {
    title: "Schnitt",
    kicker: "42 € · 45 Minuten",
    text: "Kontur, Länge, der Ansatz an der Schläfe. Kein Reel-Schnitt, der in drei Tagen tot ist. Du sagst, wie du leben willst — wir schneiden das Gesicht dazu.",
  },
  {
    title: "Rasur",
    kicker: "38 € · 30 Minuten",
    text: "Heißes Tuch, Dachshaar, offene Klinge. Jemand hält dir das Kinn. Danach riechst du nach Vetiver, nicht nach Spray. Das innigste, was ein Herrenzimmer kann.",
  },
  {
    title: "Bart",
    kicker: "28 € · 25 Minuten",
    text: "Linie, Dichte, Öl. Der Bart ist Haltung, nicht Deko. Wir ziehen die Kante, wo dein Kiefer sie braucht — nicht wo das Internet sie gerade will.",
  },
] as const;

export const WOLFF_MEN = [
  {
    title: "Klinge",
    text: "Offene Rasur, Hand und Stahl. Wer zittern muss, bleibt am Hobel. Hier hält einer still — und einer führt.",
  },
  {
    title: "Zeit",
    text: "45 Minuten sind 45 Minuten. Der nächste wartet draußen, nicht in deinem Nacken. Vier Stühle, kein Fließband.",
  },
  {
    title: "Raum",
    text: "Nussbaum, Leder, Vinyl. Wer Neon will und einen Spiegel fürs Handy, ist in der falschen Straße.",
  },
] as const;

export const WOLFF_RITUAL = [
  {
    name: "Stuhl",
    price: "42 €",
    time: "45 Min",
    text: "Schnitt, Tonikum, aus. Du kommst, du sitzt, du gehst mit einem Kopf, der zu dir gehört.",
  },
  {
    name: "Ritual",
    price: "68 €",
    time: "70 Min",
    text: "Schnitt und Hot-Towel-Rasur. Das volle Herrenzimmer: Dampf, Klinge, Stille dazwischen.",
  },
  {
    name: "Gentleman",
    price: "85 €",
    time: "80 Min",
    text: "Schnitt, Rasur, Bart, Kölnisch Wasser. Ein Stuhl, ein Mann, bis nichts mehr fehlt.",
  },
] as const;

export const WOLFF_LOOKS = [
  {
    src: "/demo/wolff/01-hero.jpg",
    alt: "Herrenschnitt mit Scheitel und Schnurrbart — Wolff Schwabing",
  },
  {
    src: "/demo/wolff/05-portrait.jpg",
    alt: "Gentleman nach dem Schnitt — samtiges Sakko, klare Linie",
  },
  {
    src: "/demo/wolff/09-mustache.jpg",
    alt: "Schnurrbart, Koteletten, Goldkette — 70er Haltung",
  },
  {
    src: "/demo/wolff/03-shave.jpg",
    alt: "Hot-Towel-Rasur mit offener Klinge",
  },
  {
    src: "/demo/wolff/04-cut.jpg",
    alt: "Schnitt am Stuhl — Schere, Kamm, Messing-Spiegel",
  },
  {
    src: "/demo/wolff/07-chair.jpg",
    alt: "Cognac-Lederstuhl im Nussbaum-Herrenzimmer",
  },
] as const;

export const WOLFF_STRIP = [
  { src: "/demo/wolff/01-hero.jpg", label: "Mann" },
  { src: "/demo/wolff/03-shave.jpg", label: "Rasur" },
  { src: "/demo/wolff/06-tools.jpg", label: "Klinge" },
  { src: "/demo/wolff/07-chair.jpg", label: "Stuhl" },
  { src: "/demo/wolff/08-team.jpg", label: "Laden" },
  { src: "/demo/wolff/09-mustache.jpg", label: "Bart" },
] as const;

export const WOLFF_MARQUEE = [
  "Schnitt",
  "Rasur",
  "Freiheit",
  "Haltung",
  "Herrenzimmer",
  "Klinge",
  "Vetiver",
  "1972",
  "Liebe",
  "Mann",
] as const;

export const WOLFF_AMENITIES = [
  "Vier Stühle, Nussbaum und Leder",
  "Offene Klinge, heißes Tuch",
  "Vinyl, kein Algorithmus",
  "Kölnisch Wasser, kein Haarparfüm",
] as const;
