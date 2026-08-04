"use client";

import { NovusReveal } from "@/components/demo/novus/NovusReveal";

export function NovusStatement() {
  return (
    <section className="relative overflow-x-hidden bg-[var(--novus-ink)] px-5 py-28 text-white sm:px-8 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-[1480px]">
        <NovusReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[var(--novus-gold)]">
            Haltung
          </p>
        </NovusReveal>
        <NovusReveal delay={0.08}>
          <p className="mt-8 max-w-[16ch] font-novus-display text-[clamp(2.6rem,7.5vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.045em]">
            Wir sind nie
            <span className="text-white/30"> zu laut.</span>
            <br />
            Nie{" "}
            <span className="text-[var(--novus-gold)]">zu individuell.</span>
          </p>
        </NovusReveal>
        <NovusReveal delay={0.16}>
          <p className="mt-10 max-w-xl text-[1.1rem] leading-[1.7] text-white/50 sm:text-[1.2rem]">
            Too much is never enough — kein Witz, sondern Lebensgefühl. Sei laut.
            Sei bunt. Sei du. Wir machen den Rest mit Schere, Farbe und Haltung.
          </p>
        </NovusReveal>
      </div>
    </section>
  );
}
