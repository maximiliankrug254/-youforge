"use client";

import { JenReveal } from "@/components/demo/jen/JenReveal";
import { JenCountUp } from "@/components/demo/jen/JenCountUp";
import {
  JEN_BENEFITS,
  JEN_EXTRA_BENEFITS,
} from "@/components/demo/jen/jen-content";

export function JenBenefits() {
  return (
    <section
      id="vorteile"
      className="relative overflow-x-hidden bg-[var(--jen-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 85% 10%, rgba(194,112,62,0.18), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1480px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <JenReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--jen-accent)]">
              Die Beschichtung
            </p>
            <h2 className="mt-5 max-w-[14ch] font-jen-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.94] tracking-[-0.035em]">
              Vorteile mit System
            </h2>
            <p className="mt-6 max-w-lg text-[1.05rem] leading-[1.7] text-white/50">
              Dauerhaft. Preiswert. Mit klarer Garantie — und spürbarer
              Wertsteigerung für Ihr Haus.
            </p>
          </JenReveal>

          <JenReveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <div className="relative overflow-hidden bg-[var(--jen-panel)] px-8 py-10">
              <div
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--jen-accent)]/20 blur-3xl"
                aria-hidden
              />
              <p className="font-jen-display text-7xl font-bold tracking-[-0.04em] text-[var(--jen-accent)] sm:text-8xl">
                <JenCountUp value={10} />
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                Jahre Garantie
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/45">
                Eine Dachbeschichtung führt zu einer deutlichen Wertsteigerung
                Ihres Hauses.
              </p>
            </div>
          </JenReveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {JEN_BENEFITS.map((benefit, i) => (
            <JenReveal key={benefit} delay={0.04 * i}>
              <div className="h-full bg-[var(--jen-ink)] px-6 py-8 transition-colors hover:bg-[var(--jen-panel)] sm:px-8 sm:py-10">
                <span className="font-jen-display text-xs tracking-[0.2em] text-[var(--jen-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 font-jen-display text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                  {benefit}
                </p>
              </div>
            </JenReveal>
          ))}
        </div>

        <JenReveal delay={0.08}>
          <div className="mt-16 border-t border-white/10 pt-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--jen-bronze)]">
              Außerdem
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:gap-x-16">
              {JEN_EXTRA_BENEFITS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-[0.95rem] leading-relaxed text-white/55"
                >
                  <span
                    className="mt-2.5 h-px w-6 shrink-0 bg-[var(--jen-accent)]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </JenReveal>
      </div>
    </section>
  );
}
