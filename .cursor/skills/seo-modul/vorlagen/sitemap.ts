/**
 * Ziel im Kundenprojekt: src/app/sitemap.ts
 * Jede öffentliche Seite eintragen. Impressum/Datenschutz dürfen fehlen.
 */
import type { MetadataRoute } from "next";
import { SEO } from "@/lib/seo/seo-config";

const SEITEN = ["", "/leistungen", "/ueber-uns", "/referenzen", "/kontakt"];

export default function sitemap(): MetadataRoute.Sitemap {
  return SEITEN.map((pfad) => ({
    url: `${SEO.website}${pfad}`,
    lastModified: new Date(),
    changeFrequency: pfad === "" ? "weekly" : "monthly",
    priority: pfad === "" ? 1 : 0.8,
  }));
}
