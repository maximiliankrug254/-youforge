/**
 * Seitentitel, Beschreibung, Canonical und Vorschau beim Teilen.
 * Ziel im Kundenprojekt: src/lib/seo/metadata.ts
 *
 * Root-Layout:   export const metadata = basisMetadata;
 * Unterseite:    export const metadata = seiteMetadata({ titel: "Fassadenanstrich in Rosenheim", beschreibung: "…", pfad: "/fassade" });
 */
import type { Metadata } from "next";
import { SEO } from "./seo-config";

export const basisMetadata: Metadata = {
  metadataBase: new URL(SEO.website),
  title: {
    default: `${SEO.hauptleistung} in ${SEO.adresse.ort} | ${SEO.kurzname}`,
    template: `%s | ${SEO.kurzname}`,
  },
  description: `${SEO.firma} in ${SEO.adresse.ort}: ${SEO.leistungen.slice(0, 3).join(", ")}. Jetzt unverbindlich anfragen.`,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: SEO.kurzname,
    images: [{ url: SEO.bild, width: 1200, height: 630, alt: SEO.firma }],
  },
};

export function seiteMetadata({
  titel,
  beschreibung,
  pfad,
}: {
  titel: string;
  beschreibung: string;
  pfad: string;
}): Metadata {
  return {
    title: titel,
    description: beschreibung,
    alternates: { canonical: pfad },
    openGraph: { title: titel, description: beschreibung, url: pfad },
  };
}
