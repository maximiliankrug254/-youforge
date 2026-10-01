import "server-only";
import { AbrufFehler, normalisiereEingabe, sichererAbruf } from "./abruf";
import { holeGoogleDaten } from "./pagespeed";
import { berechneNote, bewertung, erkennePlattform, pruefeStartseite } from "./pruefungen";
import type { CheckErgebnis, CheckFehlerCode } from "./types";

export class CheckFehler extends Error {
  constructor(public code: CheckFehlerCode) {
    super(code);
  }
}

const fehltWirklich = (status: number) => status === 404 || status === 410;

function istSperrseite(status: number, html: string) {
  if (![403, 429, 503].includes(status)) return false;
  return /cf-error-details|challenge-platform|cf-wrapper|<title>\s*(just a moment|attention required|access denied)/i.test(html);
}

async function robotsUndSitemap(origin: string) {
  let robotsGefunden: boolean | null = null;
  let sitemaps: string[] = [];
  try {
    const robots = await sichererAbruf(`${origin}/robots.txt`, { maxBytes: 200_000, timeoutMs: 8_000 });
    if (robots.status === 200 && !/<html/i.test(robots.text.slice(0, 500))) {
      robotsGefunden = true;
      sitemaps = [...robots.text.matchAll(/^\s*sitemap\s*:\s*(\S+)/gim)].map((m) => m[1]);
    } else if (fehltWirklich(robots.status)) {
      robotsGefunden = false;
    }
  } catch {
    /* nicht prüfbar */
  }

  const kandidaten = [...sitemaps.slice(0, 2), `${origin}/sitemap.xml`, `${origin}/sitemap_index.xml`, `${origin}/wp-sitemap.xml`];
  let sitemapGefunden: boolean | null = false;
  let unklar = false;
  for (const adresse of [...new Set(kandidaten)].slice(0, 4)) {
    try {
      const res = await sichererAbruf(adresse, { maxBytes: 300_000, timeoutMs: 8_000 });
      if (res.status === 200 && /<(urlset|sitemapindex)[\s>]/i.test(res.text)) {
        sitemapGefunden = true;
        break;
      }
      if (!fehltWirklich(res.status) && res.status !== 200) unklar = true;
    } catch {
      unklar = true;
    }
  }
  if (!sitemapGefunden && unklar) sitemapGefunden = null;
  return { robotsGefunden, sitemapGefunden };
}

export async function pruefeWebsite(eingabe: string): Promise<CheckErgebnis> {
  let start: URL;
  try {
    start = normalisiereEingabe(eingabe);
  } catch {
    throw new CheckFehler("adresse");
  }

  const googlePromise = holeGoogleDaten(start.href);

  let seite;
  try {
    seite = await sichererAbruf(start);
  } catch (err) {
    throw new CheckFehler(err instanceof AbrufFehler ? err.code : "nicht_erreichbar");
  }
  if (istSperrseite(seite.status, seite.text)) throw new CheckFehler("blockiert");
  if (seite.status >= 400) throw new CheckFehler("nicht_erreichbar");

  const origin = new URL(seite.url).origin;
  const [{ robotsGefunden, sitemapGefunden }, google] = await Promise.all([robotsUndSitemap(origin), googlePromise]);

  const { punkte, nurBrowser } = pruefeStartseite({ finalUrl: seite.url, html: seite.text, robotsGefunden, sitemapGefunden, google });
  const note = berechneNote(punkte);
  return {
    url: seite.url,
    domain: new URL(seite.url).hostname.replace(/^www\./, ""),
    geprueftAm: new Date().toISOString(),
    note,
    bewertung: bewertung(note),
    plattform: erkennePlattform(seite.text),
    nurBrowser,
    punkte,
    google,
  };
}
