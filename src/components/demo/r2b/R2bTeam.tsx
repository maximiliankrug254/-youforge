"use client";

import { R2bReveal } from "@/components/demo/r2b/R2bReveal";
import { R2bImageReveal } from "@/components/demo/r2b/R2bImageReveal";
import { R2B_IMG, R2B_TEAM } from "@/components/demo/r2b/r2b-content";

export function R2bTeam() {
  return (
    <section
      id="atelier"
      className="relative overflow-x-hidden bg-[var(--r2b-bone)] px-5 py-24 text-[var(--r2b-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <R2bReveal className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--r2b-brass-deep)]">
              Atelier
            </p>
            <h2 className="mt-5 font-r2b-display text-[clamp(2.6rem,5.5vw,4.8rem)] font-medium leading-[0.92] tracking-[-0.045em]">
              Sechs Leute.
              <span className="block italic text-[var(--r2b-brass-deep)]">
                Ein Anspruch.
              </span>
            </h2>
            <p className="mt-8 max-w-md text-[1.08rem] leading-[1.8] text-[var(--r2b-muted)]">
              Kein Comedy-Club. Ein Atelier in Kassel, das Handwerk so ernst
              nimmt wie das Gewerk selbst — Strategie, Bild, Kampagne, Betrieb.
            </p>
            <div className="mt-10">
              <R2bImageReveal
                src={R2B_IMG.detail}
                alt="Detailarbeit — Präzision, die man fühlt"
                className="aspect-[4/5] min-h-[380px] lg:min-h-[460px]"
              />
            </div>
          </R2bReveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-[var(--r2b-ink)]/10">
              {R2B_TEAM.map((person, i) => (
                <R2bReveal key={person.name} delay={0.04 * i}>
                  <li className="group flex items-baseline justify-between gap-6 border-b border-[var(--r2b-ink)]/10 py-6 sm:py-7">
                    <span className="font-r2b-display text-xl font-medium tracking-[-0.03em] transition-colors group-hover:text-[var(--r2b-brass-deep)] sm:text-[1.65rem]">
                      {person.name}
                    </span>
                    <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--r2b-muted)] sm:text-[11px]">
                      {person.role}
                    </span>
                  </li>
                </R2bReveal>
              ))}
            </ul>
            <R2bReveal delay={0.28}>
              <p className="mt-10 text-[11px] uppercase tracking-[0.28em] text-[var(--r2b-muted)]">
                Kassel · Stuttgarter Straße 11
              </p>
            </R2bReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
