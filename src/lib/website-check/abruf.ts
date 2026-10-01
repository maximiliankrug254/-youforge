import { lookup } from "node:dns/promises";
import { isIP, isIPv4 } from "node:net";

export const BROWSER_KENNUNG =
  "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Mobile Safari/537.36";

export class AbrufFehler extends Error {
  constructor(public code: "adresse" | "nicht_erreichbar") {
    super(code);
  }
}

/** Nimmt „malermeister-bong.de“ oder eine volle Adresse an und liefert eine prüfbare https/http-Adresse. */
export function normalisiereEingabe(eingabe: string): URL {
  const roh = eingabe.trim();
  if (!roh || roh.length > 300) throw new AbrufFehler("adresse");
  let url: URL;
  try {
    url = new URL(/^https?:\/\//i.test(roh) ? roh : `https://${roh}`);
  } catch {
    throw new AbrufFehler("adresse");
  }
  url.hash = "";
  return url;
}

function istPrivateAdresse(ip: string): boolean {
  if (isIPv4(ip)) {
    const [a, b] = ip.split(".").map(Number);
    return (
      a === 0 ||
      a === 10 ||
      a === 127 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) ||
      a >= 224
    );
  }
  const v = ip.toLowerCase();
  if (v.startsWith("::ffff:")) return istPrivateAdresse(v.slice(7));
  return v === "::" || v === "::1" || v.startsWith("fc") || v.startsWith("fd") || v.startsWith("fe80");
}

/** Nur öffentliche Websites – keine internen Server, IP-Adressen oder fremden Ports. */
async function pruefeZiel(url: URL) {
  if (url.protocol !== "https:" && url.protocol !== "http:") throw new AbrufFehler("adresse");
  if (url.username || url.password) throw new AbrufFehler("adresse");
  if (url.port && url.port !== "80" && url.port !== "443") throw new AbrufFehler("adresse");
  const host = url.hostname.replace(/^\[|\]$/g, "").toLowerCase();
  if (isIP(host) || !host.includes(".") || host === "localhost" || /\.(local|localhost|internal|intranet|lan|home)$/.test(host)) {
    throw new AbrufFehler("adresse");
  }
  let adressen: { address: string }[];
  try {
    adressen = await lookup(host, { all: true });
  } catch {
    throw new AbrufFehler("nicht_erreichbar");
  }
  if (!adressen.length || adressen.some((a) => istPrivateAdresse(a.address))) throw new AbrufFehler("adresse");
}

async function leseBegrenzt(res: Response, maxBytes: number): Promise<string> {
  if (!res.body) return "";
  const reader = res.body.getReader();
  const teile: Uint8Array[] = [];
  let laenge = 0;
  while (laenge < maxBytes) {
    const { done, value } = await reader.read();
    if (done) break;
    teile.push(value);
    laenge += value.byteLength;
  }
  await reader.cancel().catch(() => {});
  const daten = new Uint8Array(Math.min(laenge, maxBytes));
  let pos = 0;
  for (const teil of teile) {
    const rest = daten.length - pos;
    if (rest <= 0) break;
    daten.set(teil.subarray(0, rest), pos);
    pos += Math.min(teil.byteLength, rest);
  }
  const zeichensatz = /charset=([\w-]+)/i.exec(res.headers.get("content-type") || "")?.[1] || "utf-8";
  try {
    return new TextDecoder(zeichensatz).decode(daten);
  } catch {
    return new TextDecoder("utf-8").decode(daten);
  }
}

export type Abruf = { status: number; url: string; text: string; headers: Headers };

/** Lädt eine Adresse und prüft jede Weiterleitung erneut auf ein öffentliches Ziel. */
export async function sichererAbruf(start: URL | string, { maxBytes = 3_000_000, timeoutMs = 12_000 } = {}): Promise<Abruf> {
  let url = new URL(start);
  for (let schritt = 0; schritt < 6; schritt++) {
    await pruefeZiel(url);
    let res: Response;
    try {
      res = await fetch(url, {
        redirect: "manual",
        signal: AbortSignal.timeout(timeoutMs),
        headers: {
          "user-agent": BROWSER_KENNUNG,
          accept: "text/html,application/xhtml+xml,application/xml;q=0.9,text/plain;q=0.8,*/*;q=0.5",
          "accept-language": "de-DE,de;q=0.9",
        },
      });
    } catch {
      throw new AbrufFehler("nicht_erreichbar");
    }
    const ziel = res.headers.get("location");
    if (res.status >= 300 && res.status < 400 && ziel) {
      await res.body?.cancel().catch(() => {});
      url = new URL(ziel, url);
      continue;
    }
    return { status: res.status, url: url.href, text: await leseBegrenzt(res, maxBytes), headers: res.headers };
  }
  throw new AbrufFehler("nicht_erreichbar");
}
