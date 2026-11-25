export const KEILS = {
  name: "Keils Bäder-ABZ",
  firstName: "Ingolf",
  owner: "Ingolf Keil",
  role: "Meister-Fachbetrieb",
  since: 1991,
  street: "Goldbergstraße 16",
  postalCode: "35460",
  city: "Staufenberg/Treis",
  phoneDisplay: "06406 73169",
  phoneTel: "+49640673169",
  mobileDisplay: "0170 3149049",
  mobileTel: "+491703149049",
  faxDisplay: "06406 73187",
  email: "baeder.ABZ@gmx.de",
  slogan: "Ihr Ansprechpartner in Sachen Haustechnik",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Goldbergstra%C3%9Fe%2016%2C%2035460%20Staufenberg",
  mapEmbedSrc:
    "https://www.openstreetmap.org/export/embed.html?bbox=8.7765%2C50.6665%2C8.7888%2C50.6732&layer=mapnik&marker=50.6698137%2C8.7826510",
} as const;

export type KeilsPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type KeilsService = {
  name: string;
  line: string;
  photo: KeilsPhoto;
};

export const KEILS_SERVICES: readonly KeilsService[] = [
  {
    name: "Badausstattung",
    line: "Planung und Bau Ihres Traumbads — inklusive Maurer-, Putzer- und Fliesenarbeiten.",
    photo: {
      src: "/demo/keils-baeder/svc-bad.jpg",
      width: 1600,
      height: 1067,
      alt: "Modernes Bad mit freistehender Badewanne, Glasdusche und Doppelwaschtisch",
    },
  },
  {
    name: "Gas- und Wasserinstallation",
    line: "Sanitäranlagen fachgerecht eingebaut, von der Leitung bis zur Armatur.",
    photo: {
      src: "/demo/keils-baeder/svc-wasser.jpg",
      width: 1600,
      height: 1067,
      alt: "Chrom-Armatur mit Handbrause an einer Badewanne",
    },
  },
  {
    name: "Klempnerei",
    line: "Spengler- und Klempnerarbeiten am Haus, termingerecht ausgeführt.",
    photo: {
      src: "/demo/keils-baeder/svc-klempner.jpg",
      width: 1152,
      height: 864,
      alt: "Kupferleitungen werden mit der Lötlampe fachgerecht verbunden",
    },
  },
  {
    name: "Heizung und Solar",
    line: "Heizungs- und Ölanlagen sowie Solar — wirtschaftlich beraten und eingebaut.",
    photo: {
      src: "/demo/keils-baeder/svc-heizung.jpg",
      width: 1600,
      height: 1200,
      alt: "Montage eines Solarmoduls auf einem Ziegeldach",
    },
  },
  {
    name: "BARRISOL Spanndecken",
    line: "Lack- und Spanndecken als Fachverleger für das System BARRISOL.",
    photo: {
      src: "/demo/keils-baeder/svc-spanndecke.jpg",
      width: 1152,
      height: 864,
      alt: "Bad mit glänzender Lack-Spanndecke und freistehender Badewanne",
    },
  },
  {
    name: "Regenwassernutzung",
    line: "Regenwasser sinnvoll nutzen — Teil meiner Haustechnik aus einer Hand.",
    photo: {
      src: "/demo/keils-baeder/svc-regen.jpg",
      width: 1152,
      height: 864,
      alt: "Regentonne unter dem Fallrohr sammelt Regenwasser am Haus",
    },
  },
  {
    name: "Kanalreinigung",
    line: "Kanalreinigung als Grundlage für eine zuverlässige Betreuung.",
    photo: {
      src: "/demo/keils-baeder/svc-kanal.jpg",
      width: 1152,
      height: 864,
      alt: "Offener Kanaldeckel mit Hochdruckschlauch bei der Kanalreinigung",
    },
  },
  {
    name: "Haustechnik",
    line: "Alles rund um die Haustechnik — Beratung, Einbau und Kundendienst.",
    photo: {
      src: "/demo/keils-baeder/svc-haustechnik.jpg",
      width: 1152,
      height: 864,
      alt: "Wandhängende Heizungsanlage mit Rohren, Ventilen und Manometer",
    },
  },
] as const;

/** Echte Referenzfotos vom Betrieb — getrennt vom Leistungsspektrum */
export const KEILS_GALLERY: readonly KeilsPhoto[] = [
  {
    src: "/demo/keils-baeder/ref-01.jpg",
    width: 640,
    height: 480,
    alt: "Bad mit dunkelblauer Lack-Spanndecke und Waschtisch",
  },
  {
    src: "/demo/keils-baeder/ref-02.jpg",
    width: 640,
    height: 480,
    alt: "Raum mit blauer glänzender Spanndecke",
  },
  {
    src: "/demo/keils-baeder/ref-03.jpg",
    width: 640,
    height: 480,
    alt: "Badewanne mit Handbrause und Deckenstrahlern",
  },
  {
    src: "/demo/keils-baeder/ref-04.jpg",
    width: 640,
    height: 480,
    alt: "Whirlpool-Badewanne mit Handbrause und Statue an der Wannenecke",
  },
  {
    src: "/demo/keils-baeder/ref-05.jpg",
    width: 640,
    height: 480,
    alt: "Whirlpool-Badewanne mit Bidet und Wandregal",
  },
  {
    src: "/demo/keils-baeder/ref-06.jpg",
    width: 640,
    height: 480,
    alt: "Bad mit Badewanne, Waschtisch und Holzschrank",
  },
  {
    src: "/demo/keils-baeder/ref-07.jpg",
    width: 640,
    height: 480,
    alt: "Baddetail mit strukturierter Wandgestaltung",
  },
  {
    src: "/demo/keils-baeder/ref-08.jpg",
    width: 640,
    height: 480,
    alt: "Saunabereich mit Glastür und strukturierter Wand",
  },
] as const;
