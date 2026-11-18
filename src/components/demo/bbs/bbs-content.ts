export const BBS = {
  name: "BBS-Bauservice",
  firstName: "Bernd",
  owner: "Bernd Schäfer",
  role: "Maurermeister",
  since: 1996,
  street: "Bleichstraße 3",
  postalCode: "35469",
  city: "Allendorf (Lumda)",
  phoneDisplay: "06407 400436",
  phoneTel: "+496407400436",
  faxDisplay: "06407 400437",
  email: "BBS-Bauservice@web.de",
  slogan: "Service rund ums Haus",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Bleichstra%C3%9Fe%203%2C%2035469%20Allendorf%20(Lumda)",
  /** Allendorf (Lumda), Bleichstraße 3 — aus öffentlicher Ortsangabe */
  mapEmbedSrc:
    "https://www.openstreetmap.org/export/embed.html?bbox=8.8165%2C50.6725%2C8.8275%2C50.6800&layer=mapnik&marker=50.676357%2C8.821977",
} as const;

export type BbsService = {
  name: string;
  photo?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const BBS_SERVICES: readonly BbsService[] = [
  {
    name: "Abbrucharbeiten",
    photo: {
      src: "/demo/bbs-bauservice/abbruch.jpg",
      width: 1152,
      height: 864,
      alt: "Bagger beim Abbruch eines alten Hauses, Schutt und freigelegtes Mauerwerk",
    },
  },
  {
    name: "Rohbauarbeiten",
    photo: {
      src: "/demo/bbs-bauservice/keller.jpg",
      width: 1152,
      height: 864,
      alt: "Betonwände eines Kellers mit Drainageleitung auf Kies",
    },
  },
  {
    name: "Schornsteinsanierung",
    photo: {
      src: "/demo/bbs-bauservice/schornstein.jpg",
      width: 864,
      height: 1152,
      alt: "Ziegelkamin auf einem Altbau mit abgeplatztem Putz und Gerüst",
    },
  },
  { name: "Altbausanierung" },
  { name: "Kanalarbeiten" },
  {
    name: "Hofbefestigungen",
    photo: {
      src: "/demo/bbs-bauservice/hof.jpg",
      width: 1152,
      height: 864,
      alt: "Neu gepflasterter Hof an einem Wohnhaus",
    },
  },
  { name: "Garten- und Landschaftsbau" },
  {
    name: "Zaunanlagen",
    photo: {
      src: "/demo/bbs-bauservice/zaun.jpg",
      width: 1152,
      height: 864,
      alt: "Metallzaun auf einer gemauerten Einfassung aus Klinker",
    },
  },
] as const;

export const BBS_DEFAULT_PHOTO = BBS_SERVICES.find((s) => s.photo)?.photo!;
