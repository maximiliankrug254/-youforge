/**
 * THE GERMAN – Dental & Skin Aesthetics
 * Zentrale Klinik-Konfiguration. Kontakt, URLs und Analytics nur hier ändern.
 */

export const GERMAN_BASE = "/demo/the-german";
export const GERMAN_ASSETS = `${GERMAN_BASE}/images`;
export const GERMAN_DOCS = `${GERMAN_BASE}/documents`;

export const GERMAN = {
  brand: {
    name: "THE GERMAN",
    tagline: "Dental & Skin Aesthetics",
    full: "THE GERMAN – Dental & Skin Aesthetics",
    alternateName: "THE GERMAN Clinic Bali",
    logoAlt: "THE GERMAN Clinic Logo",
  },

  contact: {
    phoneDisplay: "+62 811 250 250 22",
    phoneTel: "+6281125025022",
    email: "hello@the-german.clinic",
    street: "Jl. Karang Suwung",
    locality: "Berawa",
    region: "Bali",
    country: "ID",
    countryName: "Indonesia",
    addressLine: "Jl. Karang Suwung, Berawa, Bali",
    geo: {
      lat: -8.6637777,
      lng: 115.1359348,
    },
  },

  /** WhatsApp-Buchung — gleiche Nachricht wie auf der Quellwebsite */
  whatsapp: {
    number: "6281125025022",
    message:
      "Would you like to make an appointment or receive personalized advice? We look forward to hearing from you!",
  },

  social: {
    instagram: "https://www.instagram.com/the_german_aesthetics/",
    instagramHandle: "@the_german_aesthetics",
  },

  hours: {
    /** Aus dem JSON-LD der Quellwebsite */
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const,
    opens: "09:00",
    closes: "18:00",
    display: "Mon–Sat 09:00–18:00",
  },

  urls: {
    source: "https://www.the-german.clinic",
    canonicalBase: GERMAN_BASE,
  },

  analytics: {
    /** TODO – OWNER INPUT REQUIRED: only activate when a real ID is supplied */
    gaId: "",
    gtmId: "",
    metaPixelId: "",
  },

  copyright: "© 2025. All rights reserved.",
} as const;

export function germanWhatsAppChat(): string {
  return `https://wa.me/${GERMAN.whatsapp.number}/`;
}

export function germanWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage ?? GERMAN.whatsapp.message);
  return `https://wa.me/${GERMAN.whatsapp.number}/?text=${text}`;
}

export function germanTelHref(): string {
  return `tel:${GERMAN.contact.phoneTel}`;
}

export function germanMailto(): string {
  return `mailto:${GERMAN.contact.email}`;
}

export function germanAsset(path: string): string {
  return `${GERMAN_ASSETS}/${path}`;
}

export function germanDoc(filename: string): string {
  return `${GERMAN_DOCS}/${filename}`;
}

export const GERMAN_PDF = {
  dental: {
    href: germanDoc("THE-GERMAN-Dental-Menu.pdf"),
    label: "Dental Treatment Menu & Pricing",
    title: "Dental Treatment Menu and Pricing in Bali",
  },
  dermatology: {
    href: germanDoc("THE-GERMAN-Dermatology-Menu.pdf"),
    label: "Skin Treatment Menu & Pricing",
    title: "Skin Aesthetic Treatments and Pricing in Bali",
  },
} as const;
