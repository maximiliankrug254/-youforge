"use client";

import { RsReveal } from "@/components/demo/rs/RsReveal";

export function RsVoice() {
  return (
    <section className="bg-[var(--rs-cream)] px-6 py-20 sm:px-8 lg:py-24">
      <RsReveal className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--rs-ochre)]">
          Aus einem Auftrag
        </p>
        <blockquote className="mt-6 font-[family-name:var(--font-rs-display)] text-[clamp(1.45rem,3.2vw,2.05rem)] font-medium leading-snug tracking-[-0.02em] text-[var(--rs-ink)]">
          „Der Keller war zwölf Jahre zu. Um halb vier hatten wir den Schlüssel für den Käufer.“
        </blockquote>
        <p className="mt-6 text-sm text-[var(--rs-muted)]">
          Familie S. · Haushaltsauflösung, 2. OG ohne Aufzug
        </p>
      </RsReveal>
    </section>
  );
}
