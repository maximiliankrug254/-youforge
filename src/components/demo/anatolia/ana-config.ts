/**
 * Anatolia Straßen- und GaLaBau — Living Demo.
 * Nur belegte Angaben aus anatoliabau.de und Register.
 */
export const ANA_DEMO = {
  assetsBase: "/demo/anatolia",
  route: "/demo/anatolia",

  brand: {
    short: "Anatolia",
    full: "ANATOLIA Straßen- und GaLaBau GmbH",
    legalName: "ANATOLIA Straßen- und GaLaBau GmbH",
    tagline: "Straßenbau, Gartenbau und Terrassenbau.",
    navSubtitle: "Straßen- und GaLaBau",
    profession: "Straßen-, Tief-, Garten- und Landschaftsbau",
  },

  contact: {
    owner: "Ali Sertpolat",
    ownerRole: "Geschäftsführer",
    phoneTel: "+4915234038098",
    phoneDisplay: "0152 34038098",
    email: "info@anatoliabau.de",
    addressLine1: "Im Looscheid 91",
    addressLine2: "45141 Essen",
    city: "Essen",
    region: "Essen und Umgebung",
    mapsQuery: "Im+Looscheid+91,+45141+Essen",
  },

  business: {
    sinceLabel: "seit 2016",
    sinceYear: 2016,
    sinceExact: "1. Juni 2016",
    register: "Amtsgericht Essen, HRB 33128",
    subject:
      "Straßen-, Tief-, Garten- und Landschaftsbau und Maurer-, Erd- und Baggerarbeiten",
  },

  hero: {
    eyebrow: "Straßen- und GaLaBau · Essen",
    brandLine: "Anatolia",
    headline: "Stein, Erde und Pflaster — sauber gesetzt.",
    text: "Von der Hofpflasterung bis zur Parkplatzanlage: Planung, Ausführung und Pflege aus einer Hand. Für Privat und Gewerbe in Essen und Umgebung.",
  },

  intro: {
    label: "Straßen · GaLaBau",
  },

  stats: [
    { value: 2016, suffix: "", label: "Gegründet", hint: "1. Juni" },
    { value: 8, suffix: "", label: "Genannte Projekte", hint: "benannt und belegt" },
    { value: 10, suffix: "", label: "Leistungsfelder", hint: "von Pflaster bis Zaun" },
    { value: 1, suffix: "", label: "Ansprechpartner", hint: "Ali Sertpolat" },
  ] as const,

  form: {
    placePlaceholder: "z. B. Essen, Mülheim, Duisburg",
  },

  /** Pitch-Rahmen für die Kunden-Vorstellung (YouForge) */
  pitch: {
    badge: "Living Demo · YouForge",
    stripEyebrow: "Living Demo",
    stripTitle: "So könnte Ihre neue Website aussehen.",
    stripText:
      "Gebaut von YouForge — mit Ihren Leistungen, Ihren Baustellenfotos und dem direkten Draht zu Ali Sertpolat in Essen.",
    stripCta: "Was Sie bekommen",
    offerEyebrow: "Was Sie bekommen",
    offerTitle: "Ihr Auftritt.\nKlar und modern.",
    offerText:
      "Kein Baukasten-Standard — eine Seite, die Anatolia zeigt: Stein, Erde, Pflaster, und ein Anruf genügt.",
    offerPoints: [
      {
        title: "Film und eigene Fotos",
        text: "Bewegung statt Stillstand — Baustelle und Ergebnis im Blick.",
      },
      {
        title: "Leistungen auf einen Blick",
        text: "Zehn Felder, klar benannt — vom Pflaster bis zum Zaun.",
      },
      {
        title: "Anfrage auf dem Handy",
        text: "Anrufen oder schreiben — ein Schritt, ein Ansprechpartner.",
      },
      {
        title: "YouForge dahinter",
        text: "Konzeption, Umsetzung und Feinschliff — damit die Seite verkauft.",
      },
    ],
    footerCredit: "Konzept & Umsetzung: YouForge",
    footerUrl: "https://you-forge.de",
    footerUrlLabel: "you-forge.de",
  },
} as const;
