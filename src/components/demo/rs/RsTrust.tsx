"use client";

import { RsReveal } from "@/components/demo/rs/RsReveal";
import { RS_CONTACT } from "@/components/demo/rs/rs-contact";

const facts = [
  { title: "Festpreis", text: "schriftlich, bevor wir anfangen" },
  { title: RS_CONTACT.insurance, text: "kein Risiko bei Ihnen im Haus" },
  { title: RS_CONTACT.disposal, text: "getrennt entsorgt, Beleg auf Wunsch" },
  { title: "Eigenes Team", text: "eigene Leute, eigener Wagen" },
] as const;

export function RsTrust() {
  return (
    <section className="border-y border-[rgba(28,25,23,0.08)] bg-[var(--rs-cream-deep)] px-6 py-10 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {facts.map((item, i) => (
          <RsReveal key={item.title} delay={i * 0.06}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--rs-ochre)]">
              {item.title}
            </p>
            <p className="mt-2 text-[15px] leading-snug text-[var(--rs-ink)]">{item.text}</p>
          </RsReveal>
        ))}
      </div>
    </section>
  );
}
