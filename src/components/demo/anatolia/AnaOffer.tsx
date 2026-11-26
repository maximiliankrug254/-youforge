"use client";

import { AnaButton } from "@/components/demo/anatolia/AnaButton";
import { AnaReveal } from "@/components/demo/anatolia/AnaReveal";
import { ANA_DEMO } from "@/components/demo/anatolia/ana-config";

const { pitch } = ANA_DEMO;

/** Pitch-Sektion: was Ali bei YouForge bekommt. */
export function AnaOffer() {
  return (
    <section
      id="was-sie-bekommen"
      className="bg-[var(--ana-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
          <AnaReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber)]">
              {pitch.offerEyebrow}
            </p>
            <h2 className="mt-5 whitespace-pre-line font-ana-display text-[clamp(2.4rem,5.2vw,4.2rem)] font-semibold leading-[1] tracking-[-0.03em]">
              {pitch.offerTitle}
            </h2>
          </AnaReveal>
          <AnaReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-[1.75] text-white/55">
              {pitch.offerText}
            </p>
          </AnaReveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5">
          {pitch.offerPoints.map((point, i) => (
            <AnaReveal key={point.title} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <span className="font-mono text-[11px] tracking-[0.28em] text-[var(--ana-amber)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-ana-display text-xl font-semibold tracking-[-0.02em] sm:text-[1.35rem]">
                  {point.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-white/55">
                  {point.text}
                </p>
              </article>
            </AnaReveal>
          ))}
        </div>

        <AnaReveal delay={0.2} className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
          <AnaButton
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--ana-amber)] px-7 py-4 text-sm font-semibold tracking-wide text-[var(--ana-ink)]"
          >
            Projekt besprechen
          </AnaButton>
          <a
            href={pitch.footerUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold tracking-wide text-white/85 transition hover:border-white/40 hover:text-white"
          >
            you-forge.de
          </a>
        </AnaReveal>
      </div>
    </section>
  );
}
