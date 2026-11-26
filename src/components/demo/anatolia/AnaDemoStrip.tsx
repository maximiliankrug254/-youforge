"use client";

import { AnaButton } from "@/components/demo/anatolia/AnaButton";
import { AnaReveal } from "@/components/demo/anatolia/AnaReveal";
import { ANA_DEMO } from "@/components/demo/anatolia/ana-config";

const { pitch } = ANA_DEMO;

/** Kurzer Pitch-Rahmen direkt nach dem Hero. */
export function AnaDemoStrip() {
  return (
    <section
      className="border-y border-[var(--ana-ink)]/8 bg-[var(--ana-paper-deep)] px-5 py-10 sm:px-8 sm:py-12"
      aria-label="Living Demo Hinweis"
    >
      <div className="mx-auto flex max-w-[1480px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <AnaReveal className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber-deep)]">
            {pitch.stripEyebrow}
          </p>
          <h2 className="mt-3 font-ana-display text-[clamp(1.55rem,3.2vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-[var(--ana-ink)]">
            {pitch.stripTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-[0.98rem] leading-[1.7] text-[var(--ana-muted)]">
            {pitch.stripText}
          </p>
        </AnaReveal>
        <AnaReveal delay={0.08} className="shrink-0">
          <AnaButton
            href="#was-sie-bekommen"
            className="inline-flex rounded-xl border border-[var(--ana-ink)]/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[var(--ana-ink)]"
          >
            {pitch.stripCta}
          </AnaButton>
        </AnaReveal>
      </div>
    </section>
  );
}
