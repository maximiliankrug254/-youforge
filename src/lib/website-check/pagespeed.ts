import type { GoogleDaten, GoogleWerte } from "./types";

type CruxMetrik = { percentile?: number };
type Erfahrung = {
  origin_fallback?: boolean;
  metrics?: {
    LARGEST_CONTENTFUL_PAINT_MS?: CruxMetrik;
    CUMULATIVE_LAYOUT_SHIFT_SCORE?: CruxMetrik;
  };
};
type PageSpeedAntwort = {
  loadingExperience?: Erfahrung;
  originLoadingExperience?: Erfahrung;
  lighthouseResult?: {
    categories?: { performance?: { score?: number | null } };
    audits?: Record<string, { numericValue?: number }>;
  };
};

function feldWerte(e: Erfahrung | undefined): GoogleWerte | null {
  const lcp = e?.metrics?.LARGEST_CONTENTFUL_PAINT_MS?.percentile;
  const cls = e?.metrics?.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile;
  if (lcp == null && cls == null) return null;
  // Google liefert CLS als ganze Zahl ×100 (z. B. 12 = 0,12).
  return { lcp: lcp ?? null, cls: cls == null ? null : cls / 100 };
}

/**
 * Fragt Google PageSpeed Insights ab (Handy). Ohne Schlüssel in PAGESPEED_API_KEY gibt es keine Google-Werte –
 * Google lehnt Abfragen ohne Schlüssel praktisch immer ab.
 */
export async function holeGoogleDaten(url: string, timeoutMs = 45_000): Promise<GoogleDaten | null> {
  const key = process.env.PAGESPEED_API_KEY;
  if (!key) return null;
  const api = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  api.searchParams.set("url", url);
  api.searchParams.set("strategy", "mobile");
  api.searchParams.set("category", "performance");
  api.searchParams.set("locale", "de");
  api.searchParams.set("key", key);
  try {
    const res = await fetch(api, { signal: AbortSignal.timeout(timeoutMs) });
    if (!res.ok) return null;
    const daten = (await res.json()) as PageSpeedAntwort;
    const seite = daten.loadingExperience?.origin_fallback ? null : feldWerte(daten.loadingExperience);
    const domain = feldWerte(daten.originLoadingExperience);
    const audits = daten.lighthouseResult?.audits || {};
    const leistung = daten.lighthouseResult?.categories?.performance?.score;
    return {
      feld: seite ? { ...seite, quelle: "seite" } : domain ? { ...domain, quelle: "domain" } : null,
      labor: {
        lcp: audits["largest-contentful-paint"]?.numericValue ?? null,
        cls: audits["cumulative-layout-shift"]?.numericValue ?? null,
        leistung: leistung == null ? null : Math.round(leistung * 100),
      },
    };
  } catch {
    return null;
  }
}
