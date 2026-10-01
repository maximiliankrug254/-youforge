import { CheckFehler, pruefeWebsite } from "@/lib/website-check/check";
import type { CheckAntwort, CheckErgebnis } from "@/lib/website-check/types";

export const maxDuration = 60;

const FENSTER_MS = 15 * 60 * 1000;
const MAX_PRO_FENSTER = 5;
const CACHE_MS = 30 * 60 * 1000;

// Pro Server-Instanz – reicht als erste Bremse gegen Missbrauch, ersetzt keinen zentralen Speicher.
const anfragen = new Map<string, number[]>();
const cache = new Map<string, { zeit: number; ergebnis: CheckErgebnis }>();

function erlaubt(ip: string): boolean {
  const jetzt = Date.now();
  const liste = (anfragen.get(ip) || []).filter((t) => jetzt - t < FENSTER_MS);
  if (liste.length >= MAX_PRO_FENSTER) {
    anfragen.set(ip, liste);
    return false;
  }
  liste.push(jetzt);
  anfragen.set(ip, liste);
  if (anfragen.size > 5000) anfragen.clear();
  return true;
}

const antwort = (body: CheckAntwort, status = 200) => Response.json(body, { status, headers: { "cache-control": "no-store" } });

export async function POST(request: Request) {
  let body: { url?: unknown; firma?: unknown };
  try {
    body = await request.json();
  } catch {
    return antwort({ ok: false, fehler: "adresse" }, 400);
  }
  // Unsichtbares Feld – nur Bots füllen es aus.
  if (typeof body.firma === "string" && body.firma.trim()) return antwort({ ok: false, fehler: "intern" }, 400);
  if (typeof body.url !== "string" || !body.url.trim()) return antwort({ ok: false, fehler: "adresse" }, 400);

  const schluessel = body.url.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/+$/, "");
  const gespeichert = cache.get(schluessel);
  if (gespeichert && Date.now() - gespeichert.zeit < CACHE_MS) return antwort({ ok: true, ergebnis: gespeichert.ergebnis });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unbekannt";
  if (!erlaubt(ip)) return antwort({ ok: false, fehler: "zu_viele" }, 429);

  try {
    const ergebnis = await pruefeWebsite(body.url);
    cache.set(schluessel, { zeit: Date.now(), ergebnis });
    if (cache.size > 300) cache.delete(cache.keys().next().value as string);
    return antwort({ ok: true, ergebnis });
  } catch (err) {
    if (err instanceof CheckFehler) return antwort({ ok: false, fehler: err.code }, err.code === "intern" ? 500 : 422);
    console.error("website-check", err);
    return antwort({ ok: false, fehler: "intern" }, 500);
  }
}
