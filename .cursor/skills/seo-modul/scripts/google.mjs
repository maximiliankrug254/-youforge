/**
 * Google PageSpeed Insights (Handy): echte Nutzerdaten (Chrome-Nutzer, letzte 28 Tage) und Googles Testlauf.
 * Schlüssel: PAGESPEED_API_KEY aus der Umgebung oder aus .env.local im Projektordner.
 * Ohne Schlüssel lehnt Google praktisch jede Abfrage ab (HTTP 429).
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

function schluessel() {
  if (process.env.PAGESPEED_API_KEY) return process.env.PAGESPEED_API_KEY.trim();
  const datei = join(process.cwd(), ".env.local");
  if (!existsSync(datei)) return "";
  const zeile = readFileSync(datei, "utf8")
    .split(/\r?\n/)
    .find((z) => /^\s*PAGESPEED_API_KEY\s*=/.test(z));
  return zeile ? zeile.split("=").slice(1).join("=").trim().replace(/^["']|["']$/g, "") : "";
}

function feldWerte(e) {
  const lcp = e?.metrics?.LARGEST_CONTENTFUL_PAINT_MS?.percentile;
  const cls = e?.metrics?.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile;
  if (lcp == null && cls == null) return null;
  // CLS kommt als ganze Zahl ×100 (12 = 0,12).
  return { lcp: lcp ?? null, cls: cls == null ? null : cls / 100 };
}

/** @returns {Promise<{ok: true, feld: object|null, labor: object} | {ok: false, grund: string}>} */
export async function holeGoogle(url, timeoutMs = 60_000) {
  const key = schluessel();
  if (!key) return { ok: false, grund: "kein Schlüssel (PAGESPEED_API_KEY)" };
  const api = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  api.searchParams.set("url", url);
  api.searchParams.set("strategy", "mobile");
  api.searchParams.set("category", "performance");
  api.searchParams.set("locale", "de");
  api.searchParams.set("key", key);
  try {
    const res = await fetch(api, { signal: AbortSignal.timeout(timeoutMs) });
    if (!res.ok) return { ok: false, grund: `Google antwortet mit HTTP ${res.status}` };
    const daten = await res.json();
    const seite = daten.loadingExperience?.origin_fallback ? null : feldWerte(daten.loadingExperience);
    const domain = feldWerte(daten.originLoadingExperience);
    const audits = daten.lighthouseResult?.audits || {};
    const leistung = daten.lighthouseResult?.categories?.performance?.score;
    return {
      ok: true,
      feld: seite ? { ...seite, quelle: "seite" } : domain ? { ...domain, quelle: "domain" } : null,
      labor: {
        lcp: audits["largest-contentful-paint"]?.numericValue ?? null,
        cls: audits["cumulative-layout-shift"]?.numericValue ?? null,
        leistung: leistung == null ? null : Math.round(leistung * 100),
      },
    };
  } catch (err) {
    return { ok: false, grund: err?.name === "TimeoutError" ? "Zeitüberschreitung" : "nicht erreichbar" };
  }
}
