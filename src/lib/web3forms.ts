import { formatBriefingForEmail } from "@/lib/briefing";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export type BriefingPayload = Record<string, string> & {
  notes?: string;
  botcheck?: string;
};

export type BriefingSubmitResult =
  | { ok: true }
  | { ok: false; error: "not_configured" | "validation" | "spam" | "upstream" };

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

    const data = (await res.json()) as { success?: boolean };

    if (!res.ok || !data.success) {
      return { ok: false, error: "upstream" };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "upstream" };
  }
}
