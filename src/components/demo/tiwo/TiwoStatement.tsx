"use client";

import { TiwoReveal } from "@/components/demo/tiwo/TiwoReveal";

export function TiwoStatement() {
  return (
    <section className="relative overflow-x-hidden bg-[var(--tiwo-ink)] px-5 py-28 text-white sm:px-8 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-[1480px]">
        <TiwoReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[var(--tiwo-accent)]">
            Haltung
          </p>
        </TiwoReveal>
        <TiwoReveal delay={0.08}>
          <p className="mt-8 max-w-[18ch] font-tiwo-display text-[clamp(2.6rem,7.5vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.045em]">
            Wir bauen keine
            <span className="text-white/35"> „nur Fliesen“.</span>
            <br />
            Wir bauen{" "}
            <span className="text-[var(--tiwo-accent)]">Räume mit Charakter.</span>
          </p>
        </TiwoReveal>
        <TiwoReveal delay={0.16}>
          <p className="mt-10 max-w-xl text-[1.1rem] leading-[1.7] text-white/50 sm:text-[1.2rem]">
            Wenn die Fuge sitzt, das Licht auf dem Stein spielt und du morgens
            reinläufst und denkst: genau so — dann haben wir unseren Job gemacht.
          </p>
        </TiwoReveal>
      </div>
    </section>
  );
}
