import { formatBriefingForEmail } from "@/lib/briefing";
import type { CheckErgebnis } from "@/lib/website-check/types";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export type BriefingPayload = Record<string, string> & {
  notes?: string;
  botcheck?: string;
};

export type BriefingSubmitResult =
  | { ok: true }
  | { ok: false; error: "not_configured" | "validation" | "spam" | "upstream" | "domain" };

/** Client-side only — Web3Forms Free-Tier (Domain: localhost / deine Live-Domain). */
export async function submitBriefingFromBrowser(
  payload: BriefingPayload
): Promise<BriefingSubmitResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return { ok: false, error: "not_configured" };
  }

  if (payload.botcheck?.trim()) {
    return { ok: false, error: "spam" };
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const company = payload.company?.trim();

  if (!name || !email || !company) {
    return { ok: false, error: "validation" };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "validation" };
  }

  try {
    const res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Projekt-Briefing: ${company}`,
        from_name: name,
        name,
        email,
        replyto: email,
        message: formatBriefingForEmail(payload),
        botcheck: "",
      }),
    });

    const data = (await res.json()) as { success?: boolean; message?: string };

    if (!res.ok || !data.success) {
      const msg = data.message?.toLowerCase() ?? "";
      if (msg.includes("domain")) {
        return { ok: false, error: "domain" };
      }
      return { ok: false, error: "upstream" };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "upstream" };
  }
}

export type WebsiteCheckLead = {
  name: string;
  email: string;
  phone?: string;
  website: string;
  ergebnis: CheckErgebnis | null;
  /** Grund, falls der automatische Check nicht durchlief (z. B. „blockiert“) */
  hinweis?: string;
  botcheck?: string;
};

function formatWebsiteCheckForEmail(lead: WebsiteCheckLead): string {
  const zeilen = [
    "WEBSITE-CHECK – Bericht angefordert",
    "",
    `Website: ${lead.ergebnis?.url ?? lead.website}`,
    `Name: ${lead.name}`,
    `E-Mail: ${lead.email}`,
    `Telefon: ${lead.phone?.trim() || "–"}`,
    "",
  ];
  const e = lead.ergebnis;
  if (!e) {
    zeilen.push(`Automatischer Check: nicht durchgelaufen (${lead.hinweis ?? "unbekannt"}) – bitte von Hand prüfen.`);
  } else {
    zeilen.push(`Schnell-Check: ${e.note}/100 (${e.bewertung}) · Plattform: ${e.plattform ?? "nicht erkannt"}`);
    if (e.google) {
      const quelle = e.google.feld ? `echte Nutzerdaten (${e.google.feld.quelle})` : "Google-Testlauf";
      const lcp = e.google.feld?.lcp ?? e.google.labor.lcp;
      zeilen.push(`Google: ${quelle}, LCP ${lcp != null ? `${(lcp / 1000).toFixed(1)} s` : "–"}, Leistung ${e.google.labor.leistung ?? "–"}/100`);
    }
    zeilen.push("", "Offene Punkte:");
    const offen = e.punkte.filter((p) => p.status === "fehler" || p.status === "warnung");
    for (const p of offen) zeilen.push(`- [${p.status}] ${p.titel}: ${p.detail}`);
    if (!offen.length) zeilen.push("- keine auf der Startseite");
    zeilen.push("", "Nächster Schritt: SEO-Master mit --site laufen lassen, Bericht selbst prüfen, dann senden.");
  }
  return zeilen.join("\n");
}

/** Client-side only – gleicher Web3Forms-Zugang wie das Briefing. */
export async function submitWebsiteCheckLead(lead: WebsiteCheckLead): Promise<BriefingSubmitResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return { ok: false, error: "not_configured" };
  if (lead.botcheck?.trim()) return { ok: false, error: "spam" };

  const name = lead.name.trim();
  const email = lead.email.trim();
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "validation" };

  const domain = lead.ergebnis?.domain ?? lead.website.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  try {
    const res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Website-Check: ${domain}${lead.ergebnis ? ` (${lead.ergebnis.note}/100)` : ""}`,
        from_name: name,
        name,
        email,
        replyto: email,
        message: formatWebsiteCheckForEmail({ ...lead, name, email }),
        botcheck: "",
      }),
    });
    const data = (await res.json()) as { success?: boolean; message?: string };
    if (!res.ok || !data.success) {
      return { ok: false, error: data.message?.toLowerCase().includes("domain") ? "domain" : "upstream" };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "upstream" };
  }
}
