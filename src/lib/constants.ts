export const siteConfig = {
  name: "YouForge",
  tagline: "Wir schmieden deine Vision.",
  founder: "Max",
  description:
    "Digitale Lösungen für Unternehmen in DACH. Websites, Landingpages, Web-Apps und KI-Integration — wir verwandeln Ideen in digitale Realität.",
  email: "mk-ventures-360@gmx.net",
  calendly: "https://calendly.com/maximiliankrug7/30min",
};

export const legalConfig = {
  company: "MK VENTURES 360 LLC",
  street: "30 N Gould St Ste N",
  cityLine: "Sheridan, WY 82801",
  country: "USA",
  asOf: "Juli 2026",
};

export const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/arbeiten", label: "Arbeiten" },
  { href: "/kontakt", label: "Kontakt" },
];

export const splitStatements = [
  {
    context: "Andere bauen Websites.",
    statement: "YouForge schmiedet Visionen.",
  },
  {
    context: "Agenturen liefern Projekte.",
    statement: "YouForge baut Systeme, die für dich laufen.",
  },
  {
    context: "Du hast Excel & WhatsApp.",
    statement: "YouForge bringt Ordnung ins Digitale.",
  },
];

export const chaosTags = [
  { label: "ALTE WEBSITE", top: "10%", left: "5%", rotate: -12 },
  { label: "OHNE AUFTRITT", top: "6%", left: "36%", rotate: 8 },
  { label: "ZETTELWIRTSCHAFT", top: "36%", left: "18%", rotate: -5 },
  { label: "EXCEL-LISTEN", top: "55%", left: "4%", rotate: 11 },
  { label: "WHATSAPP-CHAOS", top: "26%", left: "44%", rotate: -9 },
  { label: "ALLES MANUELL", top: "62%", left: "32%", rotate: 6 },
];

export const orderSteps = [
  "KENNENLERNEN",
  "KONZEPT",
  "SCHMIEDEN",
  "LAUNCH",
];

export const painPoints = [
  "Du verlierst Kunden, weil deine Website veraltet wirkt.",
  "Du weißt nicht, wo Anfragen und Termine eigentlich landen.",
  "Dein digitales Onboarding kostet dich mehr Zeit als es bringt.",
];

export const serviceCards = [
  {
    label: "WEBSITES",
    title: "Online-Auftritt der sitzt",
    problem: "Besucher springen ab, weil es alt und unübersichtlich wirkt.",
    solution: "Modern, schnell, überzeugend — deine digitale Visitenkarte.",
  },
  {
    label: "AUTOMATISIERUNG",
    title: "Prozesse die laufen",
    problem: "Du jonglierst Anfragen zwischen Mail, Handy und Zettel.",
    solution: "Klare Abläufe — weniger Chaos, mehr Zeit fürs Wesentliche.",
  },
  {
    label: "WEB-APPS",
    title: "Tools für dein Business",
    problem: "Excel und Workarounds bremsen dein Wachstum.",
    solution: "Individuelle Lösungen, zugeschnitten auf deinen Workflow.",
  },
  {
    label: "KI",
    title: "Intelligenz die hilft",
    problem: "Du hörst überall KI — aber niemand zeigt dir den konkreten Nutzen.",
    solution: "Praktische KI-Integration, die wirklich Arbeit abnimmt.",
  },
];

export const services = [
  {
    slug: "websites",
    title: "Websites",
    description:
      "Digitale Visitenkarten, die überzeugen — modern, schnell und auf dein Business zugeschnitten.",
    featured: true,
  },
  {
    slug: "landingpages",
    title: "Landingpages",
    description: "Conversion-starke Seiten, die Besucher in Kunden verwandeln.",
    featured: true,
  },
  {
    slug: "web-apps",
    title: "Web-Apps",
    description: "Individuelle Tools und Anwendungen für dein Business.",
    featured: true,
  },
  {
    slug: "ki-automatisierung",
    title: "KI-Automatisierung",
    description:
      "Intelligente Prozesse, die Zeit sparen und dein Business skalieren.",
    featured: true,
  },
  {
    slug: "prozessoptimierung",
    title: "Prozessoptimierung",
    description: "Digitale Abläufe, die einfach funktionieren.",
    featured: false,
  },
  {
    slug: "digitale-beratung",
    title: "Digitale Beratung",
    description: "Strategie und Klarheit, bevor der erste Pixel fällt.",
    featured: false,
  },
];

export const whyUs = [
  {
    title: "Wir denken in Lösungen.",
    subtitle: "Nicht in Problemen.",
  },
  {
    title: "Wir handeln schnell.",
    subtitle: "Ideen werden Realität, nicht PowerPoints.",
  },
  {
    title: "Wir arbeiten partnerschaftlich.",
    subtitle: "Dein Erfolg ist unser Maßstab.",
  },
  {
    title: "Wir lieben mutige Ideen.",
    subtitle: '„Geht nicht" gibt es bei uns nicht.',
  },
  {
    title: "Wir schmieden digitale Visionen.",
    subtitle: "Das ist, was wir tun.",
  },
];

export const process = [
  {
    step: "01",
    title: "Analyse",
    description: "Wir verstehen dein Business. Nicht oberflächlich. Wirklich.",
  },
  {
    step: "02",
    title: "Konzept",
    description: "Wir bauen den Plan, bevor wir irgendwas anfassen.",
  },
  {
    step: "03",
    title: "Schmieden",
    description: "Du siehst Fortschritt. Wir liefern in Etappen, nicht in Versprechen.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Go-live, Übergabe und optional laufende Betreuung.",
  },
];

export const pricingTiers = [
  {
    label: "Landingpage",
    price: "unter 1.000 €",
    hint: "Eine Seite, ein Ziel. Oft in 1–2 Wochen live.",
  },
  {
    label: "Website",
    price: "Festpreis",
    hint: "Mehrere Seiten, klarer Scope. Die Zahl steht nach dem Briefing.",
  },
  {
    label: "Web-App & KI",
    price: "individuell",
    hint: "Systeme und Automatisierung — erst verstehen, dann Festpreis.",
  },
];

export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: "live" | "coming-soon";
  description: string;
  challenge: string;
  solution: string;
  result: string;
  highlights: string[];
  tech: string[];
  href?: string;
  image?: string;
  featured: boolean;
  year: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "syn",
    title: "Pyra",
    subtitle: "Where glam meets grunge",
    category: "Website · Fashion · E-Commerce",
    status: "live",
    description:
      "Fashion-E-Commerce mit Preloader, Riss, Custom Cursor, Drag-Arrivals und Overlay-Drawern. Signalrot auf Schwarz.",
    challenge:
      "Eine Fashion-Site braucht Bewegung, Emotion und Power — nicht ein stilles Moodboard.",
    solution:
      "Prozent-Preloader, Mix-Blend-Header, DRAG CLICK, Lippen-Maske, Bag-Drawer. Living Demo.",
    result:
      "Ein Shop, der schlägt.",
    highlights: [
      "Preloader 01–100%",
      "Custom Cursor + Drag-Rails",
      "Overlay Menu / Bag / Search",
      "Hover-Swap Produktkarten",
    ],
    tech: ["Next.js", "TypeScript", "Framer Motion", "Lenis"],
    image: "/demo/syn/street.png",
    href: "/demo/syn",
    featured: true,
    year: "2026",
  },
  {
    slug: "lane",
    title: "LANE",
    subtitle: "Night Kitchen · Streetfood",
    category: "Website · Gastro · Horizontal",
    status: "live",
    description:
      "Night Kitchen mit zwölf Plätzen am Counter: Bun, Spieß, Ribs — horizontal, Glut-Cursor, Rauch über der Bar.",
    challenge:
      "Gastro-Seiten kippen schnell ins Hipster-Bistro oder ins Foodtruck-Template. Streetfood mit teurem Nacht-Charakter braucht eine eigene Sprache.",
    solution:
      "Fünf Kapitel von links nach rechts, Ember-Cursor, Fire-Fotografie und Fluid-Rauch über der Bar. Living Demo, fiktive Marke.",
    result:
      "Ein Auftritt, der nach Mitternacht und nach Grill aussieht — nicht nach Avocado.",
    highlights: [
      "Horizontaler Lenis-Scroll",
      "Glut-Cursor mit Hitze-Trail",
      "Rauch-Simulation in der Bar",
      "Reservierungs-Kapitel",
    ],
    tech: ["Next.js", "TypeScript", "Framer Motion", "Lenis", "Canvas"],
    image: "/demo/lane/hero.jpg",
    href: "/demo/lane",
    featured: true,
    year: "2026",
  },
  {
    slug: "ast-asche",
    title: "Ast & Asche",
    subtitle: "Manufaktur für Holz und Ton",
    category: "Website · Manufaktur · Editorial",
    status: "live",
    description:
      "Cineastischer One-Pager für eine Möbel- und Keramikwerkstatt — Preloader, Linienkunst, Kapitel-Scroll. Kein Shop, ein Atelierbesuch.",
    challenge:
      "Manufakturen sterben online im Raster: Produktfotos, Filter, Warenkorb. Wer Unikate baut, braucht eine Seite, die sich anfühlt wie die Werkstatt.",
    solution:
      "Zwei Farben, Display-Serif, generative Strich-Grafik, Lenis-Scroll, Ofenklang und Kapitel statt Katalog — gebaut als Living Demo auf Signature-Niveau.",
    result:
      "Ein Unikat-Auftritt: Besucher verstehen Material, Zeit und Haltung, bevor sie eine Zahl sehen.",
    highlights: [
      "Generative Linien-Engine",
      "Kapitel-Scroll & Portal-Maske",
      "Ofentour + Ambient-Klang",
      "Stücke ohne Shop-Logik",
    ],
    tech: ["Next.js", "TypeScript", "Framer Motion", "Lenis", "Canvas"],
    image: "/demo/ast-asche/hero.jpg",
    href: "/demo/ast-asche",
    featured: true,
    year: "2026",
  },
  {
    slug: "salon-website",
    title: "Salon-Website",
    subtitle: "Premium Colour Atelier",
    category: "Website · Branding · Salon",
    status: "live",
    description:
      "Editorial Salon-Auftritt auf Atelier-Niveau — Colour, Bridal und Craft als eigene Kapitel. Wirkt wie ein Flagship-Salon, nicht wie ein Buchungs-Template.",
    challenge:
      "Viele Salon-Websites sind austauschbar: Stockfotos, Preisliste, fertig. Ein starker Salon braucht einen Auftritt mit Charakter und Conversion.",
    solution:
      "Bone, Copper, Display-Typografie, Filmstreifen und klare Termin-CTAs — die Seite verkauft das Handwerk, bevor jemand anruft.",
    result:
      "Sofortiger Premium-Eindruck: Besucher sehen Stil, Handwerk und Buchungsweg in einem Flow.",
    highlights: [
      "Cinematic Colour-Atelier Look",
      "Looks-, Bridal- und Salon-Kapitel",
      "Conversion zu Termin & Anfrage",
      "Mobile Sticky CTA",
    ],
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    image: "/portfolio/salon-website.png",
    href: "/demo/aurea",
    featured: true,
    year: "2026",
  },
  {
    slug: "wolff",
    title: "WOLFF",
    subtitle: "Herrenbarber · Schwabing",
    category: "Website · Branding · Barber",
    status: "live",
    description:
      "Herrenbarber im 1970er-Herrenzimmer: Nussbaum, offene Klinge, vier Stühle. Das maskuline Gegenstück zum Colour-Atelier — Lust, Liebe, Freiheit, Gentleman.",
    challenge:
      "Salon-Seiten kippen ins Feminine, Helle, Bridal. Ein echter Herrenbarber braucht Holz, Klinge und Haltung — ohne Drogen-Klischee und ohne Gym-Bro-Look.",
    solution:
      "Dunkles Nussbaum, Messing, Melodrama-Serif, Preise und Zeiten auf dem Tisch. Ritual statt Bridal, Männer statt Looks.",
    result:
      "Ein Auftritt, der nach Herrenzimmer und 1972 riecht — nicht nach Balayage.",
    highlights: [
      "1970er Herrenzimmer-Look",
      "Schnitt, Rasur, Gentleman-Ritual",
      "Preise, Zeiten, vier Stühle",
      "Mobile Sticky CTA",
    ],
    tech: ["Next.js", "TypeScript", "Framer Motion", "Lenis"],
    image: "/demo/wolff/00-hero.jpg",
    href: "/demo/wolff",
    featured: true,
    year: "2026",
  },
  {
    slug: "garten-website",
    title: "Garten-Website",
    subtitle: "Gartenpflege & Landschaftsbau",
    category: "Website · Handwerk · Lokal",
    status: "live",
    description:
      "Lebendige Handwerker-Website für Gartenpflege und Landschaftsbau — Vorher/Nachher, klare Leistungen und direkte Anfrage aus einer Hand.",
    challenge:
      "Gartenbetriebe wirken online oft wie Kataloge: unscharfe Fotos, unklare Leistungen, kein Vertrauen vor dem Anruf.",
    solution:
      "Editorial Grünwerk-Auftritt mit starken Projektbildern, Service-Pillars und Formular — vom Rasen bis zum Baumwipfel.",
    result:
      "Besucher verstehen sofort den Betrieb, die Qualität und den nächsten Schritt.",
    highlights: [
      "Vorher/Nachher-Cases",
      "Leistungen klar strukturiert",
      "Lokaler Vertrauensaufbau",
      "Direkte Anfrage-Conversion",
    ],
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    image: "/portfolio/garten-website.png",
    href: "/demo/garten",
    featured: false,
    year: "2026",
  },
  {
    slug: "bestattungs-website",
    title: "Bestattungs-Website",
    subtitle: "Würdevolle Begleitung online",
    category: "Website · Branding · Vertrauen",
    status: "live",
    description:
      "Ruhiger, würdevoller Online-Auftritt für ein Bestattungshaus — Klarheit in der Trauer, rund um die Uhr erreichbar, ohne Lautstärke.",
    challenge:
      "In sensiblen Branchen wirkt Standard-Webdesign oft falsch: zu laut, zu bunt oder zu unpersönlich.",
    solution:
      "Dark Editorial mit warmem Akzent, klaren Schritten und sofortiger Erreichbarkeit — Raum für Abschied statt Verkaufsdruck.",
    result:
      "Vertrauen in Sekunden: Angehörige finden Orientierung und den richtigen Kontaktweg.",
    highlights: [
      "Würdevolles Dark-Design",
      "Klare Begleitungs-Schritte",
      "24/7-Erreichbarkeit im Fokus",
      "Ruhige Typografie & Motion",
    ],
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    image: "/portfolio/bestattungs-website.png",
    href: "/demo/bestattung",
    featured: false,
    year: "2026",
  },
  {
    slug: "fliesen-website",
    title: "Fliesen-Website",
    subtitle: "Meisterbetrieb Bad & Naturstein",
    category: "Website · Handwerk · Meisterbetrieb",
    status: "live",
    description:
      "Präziser Auftritt für einen Fliesen-Meisterbetrieb — Bad, Terrasse, Naturstein. Handwerk sichtbar, Angebot klar, Anfrage nah.",
    challenge:
      "Fliesenleger-Websites bleiben oft stecken zwischen Baustellenfotos und generischen Baukasten-Layouts.",
    solution:
      "Modernes Meister-Lookbook mit Craft-Details, Vorher/Nachher und direkter Telefon-Conversion.",
    result:
      "Kunden sehen Qualität und Präzision — und wissen, wen sie anrufen.",
    highlights: [
      "Craft- und Projektgalerie",
      "Vorher/Nachher-Stories",
      "Meister-Positionierung",
      "Sticky Call-CTA",
    ],
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    image: "/portfolio/fliesen-website.png",
    href: "/demo/fliesen",
    featured: false,
    year: "2026",
  },
  {
    slug: "the-german",
    title: "THE GERMAN",
    subtitle: "Dental & Skin Aesthetics · Bali",
    category: "Website · Klinik · Migration",
    status: "live",
    description:
      "Produktionsreife Neuumsetzung der Klinik-Website THE GERMAN in Bali — Zahnmedizin, Kieferorthopädie, Dermatologie und Technologie, inkl. Team, PDFs und WhatsApp-Buchung.",
    challenge:
      "Die bestehende HTML-Seite war schwer wartbar: Template-CSS, jQuery, tote Links und Inhalte, die über viele Dateien verstreut lagen.",
    solution:
      "Nächste-Generation-Auftritt in Next.js: zentrale Inhalte, originale Texte und Bilder, klare Navigation, SEO und mobile Menüs — visuell treu zur Quelle.",
    result:
      "Dieselbe Klinik, sauberer Code: Kontakt, Preise und Behandlungen an einer Stelle pflegbar.",
    highlights: [
      "Mehrseitige Klinik-IA originalgetreu",
      "WhatsApp-Buchung & Preis-PDFs",
      "Team, Founder, Leistungen zentral",
      "Dark Editorial mit Gelb-Akzent",
    ],
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    image: "/demo/the-german/images/home/clinic.jpg",
    href: "/demo/the-german",
    featured: true,
    year: "2026",
  },
  {
    slug: "youforge",
    title: "YouForge",
    subtitle: "Digitalagentur-Website",
    category: "Website · Branding · KI-Demo",
    status: "live",
    description:
      "Premium-Homepage für eine Digitalagentur — mit interaktiver KI-Demo, die Besucher direkt ausprobieren können. Kein generisches Template, sondern eine Marke mit Charakter.",
    challenge:
      "Eine junge Agentur braucht einen Auftritt, der sofort Vertrauen schafft — ohne Fake-Erfahrungsjahre und ohne wie jede andere Webdesign-Seite auszusehen.",
    solution:
      "Editorial Homepage im FORMED-Stil, Chaos-vs-Ordnung-Section für die Zielgruppe, und eine kostenfreie KI-Chat-Demo als Live-Beweis der Leistungsfähigkeit.",
    result:
      "Die Website ist gleichzeitig Portfolio und Produkt — jeder Besucher sieht, was YouForge kann, bevor ein Wort gesprochen wird.",
    highlights: [
      "Interaktive KI-Demo zum Anfassen",
      "Chaos-vs-Ordnung Storytelling",
      "Dark/Light Mode",
      "Scroll-Animationen & Wireframe-Hero",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/portfolio/youforge.png",
    href: "/",
    featured: false,
    year: "2026",
  },
  {
    slug: "rechnungs-app",
    title: "Rechnungs-App",
    subtitle: "PDF-Tool für Selbstständige",
    category: "Web-App · Produkt",
    status: "live",
    description:
      "Lokale Web-App zum Erstellen professioneller Rechnungen — PDF im Browser, ohne Abo, mit zwei Einmalkauf-Editionen.",
    challenge:
      "Selbstständige wollen Rechnungen schnell erstellen, ohne monatliche Abos und ohne komplizierte Buchhaltungssoftware.",
    solution:
      "Browser-basiertes Tool mit klarem Workflow: Kunde wählen, Positionen eintragen, PDF exportieren. Business- und Premium-Edition als Einmalkauf.",
    result:
      "Verkaufbares Produkt mit festen Preisen — läuft komplett lokal, Datenschutz inklusive.",
    highlights: [
      "PDF-Export im Browser",
      "Zwei Produkt-Editionen",
      "Kein Abo-Modell",
      "Lokale Datenverarbeitung",
    ],
    tech: ["HTML", "JavaScript", "PDF-Export"],
    image: "/portfolio/rechnungs-app-preview.png",
    featured: false,
    year: "2026",
  },
  {
    slug: "rechnungs-landing",
    title: "Produkt-Landingpage",
    subtitle: "Verkaufsseite für Rechnungs-Software",
    category: "Landingpage · Produkt",
    status: "live",
    description:
      "Conversion-starke Verkaufsseite für ein digitales Rechnungs-Tool — klar, vertrauenswürdig, ohne Abo-Druck.",
    challenge:
      "Ein verkaufbares Software-Produkt braucht einen Online-Auftritt, der Nutzen und Preismodell sofort verständlich macht.",
    solution:
      "Landingpage mit Hero, Feature-Übersicht, Editionen-Vergleich und klarem Call-to-Action — optimiert für Selbstständige.",
    result:
      "Professioneller Produkt-Auftritt — Besucher verstehen in Sekunden, was sie bekommen und was es kostet.",
    highlights: [
      "Klare Value Proposition",
      "Zwei Produkt-Editionen",
      "Conversion-orientiert",
      "Mobile-first Design",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/portfolio/rechnungs-landing.png",
    href: "https://rechnungdesk.netlify.app",
    featured: false,
    year: "2026",
  },
  {
    slug: "coaching-website",
    title: "Coaching-Website",
    subtitle: "Landingpage für Beratung",
    category: "Website · Landingpage",
    status: "live",
    description:
      "Vertrauensvolle Landingpage für eine Beraterin im Bereich finanzielle Begleitung — klar, warm, conversion-orientiert.",
    challenge:
      "Eine Expertin braucht einen professionellen Online-Auftritt, der Vertrauen schafft und Erstgespräche generiert.",
    solution:
      "One-Page-Website mit Hero, Über-mich, Leistungen und direkter Calendly-Integration für Terminbuchungen.",
    result:
      "Professioneller erster Eindruck — Besucher verstehen das Angebot in Sekunden und können direkt buchen.",
    highlights: [
      "Klare Conversion-Struktur",
      "Calendly-Integration",
      "Mobile-first Design",
      "Vertrauensaufbau durch Storytelling",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/portfolio/coaching-website.png",
    featured: false,
    year: "2026",
  },
  {
    slug: "kunden-portal",
    title: "Kunden-Portal",
    subtitle: "Web-App mit Login",
    category: "Web-App · Backend",
    status: "live",
    description:
      "Next.js Web-App mit Benutzer-Login, Datenbank-Anbindung und interaktivem Dashboard für ein Beratungsunternehmen.",
    challenge:
      "Ein wachsendes Beratungsbusiness braucht mehr als eine statische Website — Kunden und Inhalte müssen digital verwaltet werden.",
    solution:
      "Moderne Web-App mit Supabase-Backend, Authentifizierung und skalierbarer Architektur.",
    result:
      "Digitale Plattform statt Zettelwirtschaft — bereit für Wachstum.",
    highlights: [
      "Login & Authentifizierung",
      "Supabase-Datenbank",
      "Responsive Dashboard",
      "Skalierbare Architektur",
    ],
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    image: "/portfolio/kunden-portal.png",
    featured: false,
    year: "2026",
  },
  {
    slug: "ki-bildproduktion",
    title: "KI-Bildproduktion",
    subtitle: "Workflow für Social Media",
    category: "KI · Automatisierung",
    status: "live",
    description:
      "Operativer Workflow für konsistente Business-Bilder — LinkedIn und Instagram, mit Template-Strategie und Qualitäts-Checklisten.",
    challenge:
      "Professionelle Bilder für Social Media kosten Zeit und müssen trotzdem zur Marke passen.",
    solution:
      "Lokales Dashboard mit Prompt-Vorlagen, Brand-Profil, Batch-Jobs und Qualitäts-Gates für jeden Kanal.",
    result:
      "Schnellere Bildproduktion mit rotem Faden — 50/50 Template- und Individualstrategie.",
    highlights: [
      "Brand-konsistente Prompts",
      "Batch-Produktion",
      "Qualitäts-Checklisten",
      "LinkedIn & Instagram Fokus",
    ],
    tech: ["HTML", "JavaScript", "KI-Workflow"],
    image: "/portfolio/ki-bildproduktion.png",
    featured: false,
    year: "2026",
  },
  {
    slug: "ki-studio",
    title: "KI-Studio",
    subtitle: "Bild-Generierung per API",
    category: "KI · Web-App",
    status: "live",
    description:
      "Lokale Mini-App: Prompt-Vorlagen, Referenzbilder und KI-gestützte Bild-Erzeugung über eine Gemini-API.",
    challenge:
      "KI-Bilder brauchen gute Prompts und Referenzen — das soll nicht jedes Mal bei null starten.",
    solution:
      "Studio-Interface mit Prompt-Bibliothek, Referenz-Upload und direkter API-Anbindung zur Bildgenerierung.",
    result:
      "Wiederholbarer KI-Workflow — von der Idee zum Bild in Minuten.",
    highlights: [
      "Gemini API Integration",
      "Prompt-Vorlagen",
      "Referenzbilder",
      "Lokales Studio-Interface",
    ],
    tech: ["Node.js", "Gemini API", "HTML/CSS"],
    image: "/portfolio/ki-studio.png",
    featured: false,
    year: "2026",
  },
  {
    slug: "handwerk-website",
    title: "Handwerker-Website",
    subtitle: "Premium-Auftritt für Meisterbetrieb",
    category: "Website · Branding",
    status: "live",
    description:
      "Dunkles, kraftvolles One-Page-Design für einen Meisterbetrieb — mit Neon-Akzenten, animiertem Grid und dem Gefühl einer High-End-Marke statt Standard-Handwerker-Template.",
    challenge:
      "Viele Handwerker-Websites sehen austauschbar aus — Stockfotos, blaue Buttons, null Persönlichkeit. Der Betrieb verdient einen Auftritt, der Qualität schon beim ersten Scroll vermittelt.",
    solution:
      "Editorial Dark-Design mit Lime-Akzenten, großer Typografie und klarer Leistungsstruktur — wirkt wie eine Agentur-Website, nicht wie ein Baukasten.",
    result:
      "Sofortiger Wow-Effekt bei Besuchern — Vertrauen und Premium-Positionierung, bevor jemand anruft.",
    highlights: [
      "Dark Premium Ästhetik",
      "Animiertes Grid & Glow-Effekte",
      "Große Display-Typografie",
      "Conversion-starke CTAs",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/portfolio/handwerk-website.png",
    href: "/showcase/handwerk-premium.html",
    featured: false,
    year: "2026",
  },
  {
    slug: "studio-website",
    title: "Studio-Website",
    subtitle: "Editorial Brand Experience",
    category: "Website · Branding",
    status: "live",
    description:
      "Elegante Editorial-Website für ein Kreativstudio — Creme-Töne, Serif-Typografie und ruhige Layouts, die sich anfühlen wie ein gedrucktes Magazin.",
    challenge:
      "Kreative Studios brauchen einen Online-Auftritt, der ihre Ästhetik widerspiegelt — nicht eine generische Portfolio-Vorlage von der Stange.",
    solution:
      "Magazin-inspiriertes Layout mit Cormorant-Serif, asymmetrischen Grids und subtilen Hover-Animationen — jedes Detail wirkt kuratiert.",
    result:
      "Besucher bleiben hängen — die Seite verkauft Stil und Anspruch, bevor ein einziges Wort über Leistungen gelesen wird.",
    highlights: [
      "Editorial Magazin-Look",
      "Serif + Sans Kombination",
      "Asymmetrisches Grid-Layout",
      "Subtile Micro-Animationen",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/portfolio/studio-website.png",
    href: "/showcase/studio-editorial.html",
    featured: false,
    year: "2026",
  },
  {
    slug: "saas-landing",
    title: "SaaS-Landingpage",
    subtitle: "Produkt-Launch im Premium-Look",
    category: "Landingpage · SaaS",
    status: "live",
    description:
      "Spektakuläre Verkaufsseite für ein SaaS-Produkt — Violett-Rosa-Gradienten, schwebendes Dashboard-Mockup und Social Proof, der sofort Vertrauen aufbaut.",
    challenge:
      "Startups brauchen eine Landingpage, die nicht wie jede andere aussieht — sondern wie ein fertiges, millionenschweres Produkt wirkt.",
    solution:
      "Dark-Space-Design mit Coral- und Cyan-Akzenten, eingebettetem Produkt-Mockup, KPI-Karten und Live-Activity-Feed — alles auf einen Blick.",
    result:
      "Besucher denken sofort: Das ist kein Baukasten. Das ist das Level, das ich will.",
    highlights: [
      "Gradient Mesh & Glow-Orbs",
      "Eingebettetes Produkt-Mockup",
      "Social Proof & Trust-Bar",
      "Conversion-Funnel optimiert",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/portfolio/saas-landing.png",
    href: "/showcase/saas-launch.html",
    featured: false,
    year: "2026",
  },
  {
    slug: "client-hub",
    title: "Client Hub",
    subtitle: "Premium Kundenportal mit Analytics",
    category: "Web-App · Portal",
    status: "live",
    description:
      "Luxuriöses Dark-Dashboard für Kundenverwaltung — mit Umsatz-Charts, Projekt-Timeline, KPI-Karten und Gold-Akzenten. Fühlt sich an wie ein €500/Monat SaaS-Tool.",
    challenge:
      "Agenturen und Dienstleister brauchen ein Portal, das professioneller wirkt als Excel und Google Drive — und Kunden das Gefühl gibt, in guten Händen zu sein.",
    solution:
      "Full-Stack-Dashboard mit Sidebar-Navigation, Live-Analytics, Kundentabelle mit Fortschrittsbalken und Activity-Timeline — alles in einem durchdachten UI.",
    result:
      "Kunden sehen sofort: Hier arbeitet jemand mit System. Das will ich auch.",
    highlights: [
      "Dark Glass Dashboard",
      "Umsatz-Charts & KPIs",
      "Kunden- & Projektübersicht",
      "Activity Timeline",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/portfolio/client-hub.png",
    href: "/showcase/client-hub.html",
    featured: false,
    year: "2026",
  },
  {
    slug: "dein-projekt",
    title: "Dein Projekt?",
    subtitle: "Platz frei",
    category: "Website · Web-App · KI",
    status: "coming-soon",
    description: "Hier könnte dein Projekt stehen — als nächste Case Study.",
    challenge: "",
    solution: "",
    result: "",
    highlights: [],
    tech: [],
    featured: false,
    year: "2026",
  },
];
