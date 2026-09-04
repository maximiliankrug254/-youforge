"use client";

import { RsReveal } from "@/components/demo/rs/RsReveal";
import { RS_CONTACT } from "@/components/demo/rs/rs-contact";

const steps = [
  {
    step: "01",
    title: "Besichtigung, kostenlos",
    text: `Wir sind ${RS_CONTACT.inspection} bei Ihnen. ${RS_CONTACT.visitMinutes}, unverbindlich. Fotos per WhatsApp reichen für eine grobe Einschätzung.`,
  },
  {
    step: "02",
    title: "Festpreis, schriftlich",
    text: "Oft noch am selben Abend. Kein Nachschlag, keine „wir haben mehr gefunden“-Rechnung. Sie sagen ja oder nein.",
  },
  {
    step: "03",
    title: "Termin, dann besenrein",
    text: "Keller oft am selben Nachmittag, eine Wohnung meist in einem Durchgang. Sie müssen nicht dabeistehen. Schlüsselübergabe sauber.",
  },
] as const;

export function RsProcess() {
  return (
    <section id="ablauf" className="scroll-mt-20 bg-[var(--rs-ink)] px-6 py-24 text-[var(--rs-cream)] sm:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <RsReveal className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--rs-ochre)]">
            Ablauf
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-rs-display)] text-[clamp(1.85rem,4vw,2.75rem)] font-medium leading-tight tracking-[-0.02em]">
            Drei Schritte. Kein Rätselraten.
          </h2>
        </RsReveal>

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-[rgba(245,241,235,0.12)] lg:block"
            aria-hidden
          />
          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((item, i) => (
              <RsReveal key={item.step} delay={i * 0.1}>
                <li className="relative">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(196,163,90,0.45)] bg-[var(--rs-ink)] font-[family-name:var(--font-rs-display)] text-lg text-[var(--rs-ochre)]">
                    {item.step}
                  </div>
                  <h3 className="mt-6 font-[family-name:var(--font-rs-display)] text-xl font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-[rgba(245,241,235,0.65)]">
                    {item.text}
                  </p>
                </li>
              </RsReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
