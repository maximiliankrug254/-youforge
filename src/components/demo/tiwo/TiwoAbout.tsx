"use client";

import { TiwoReveal } from "@/components/demo/tiwo/TiwoReveal";
import { TiwoImageReveal } from "@/components/demo/tiwo/TiwoImageReveal";

export function TiwoAbout() {
  return (
    <section
      id="ueber"
      className="relative overflow-x-hidden bg-[var(--tiwo-mist)] px-5 py-24 text-[var(--tiwo-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <TiwoReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--tiwo-accent)]">
              Über uns
            </p>
            <h2 className="mt-5 max-w-[12ch] font-tiwo-display text-[clamp(2.5rem,5.2vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
              Tradition trifft Tempo.
            </h2>
          </TiwoReveal>

          <TiwoReveal delay={0.08}>
            <p className="mt-7 max-w-md text-[1.08rem] leading-[1.7] text-[var(--tiwo-muted)]">
              Regionaler Meisterbetrieb aus dem Landkreis Marburg-Biedenkopf —
              traditionelles Handwerk, moderne Ideen, persönliche Beratung von
              der ersten Skizze bis zur letzten Fuge.
            </p>
            <p className="mt-5 max-w-md text-[1.08rem] leading-[1.7] text-[var(--tiwo-muted)]">
              Wir kennen Materialien, vermeiden typische Fehler und setzen Räume
              mit Verlegemustern in Szene, die man nicht vergisst.
            </p>
          </TiwoReveal>
        </div>

        <TiwoReveal delay={0.1} className="lg:col-span-7">
          <TiwoImageReveal
            src="/demo/tiwo-fliesen/luxus-bad.jpg"
            alt="Hochwertig gefliestes Bad — Präzision und Ästhetik"
            className="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[5/4] lg:min-h-[540px]"
          />
        </TiwoReveal>
      </div>
    </section>
  );
}
