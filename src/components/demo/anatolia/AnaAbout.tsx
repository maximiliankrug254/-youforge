"use client";

import Image from "next/image";
import { AnaReveal } from "@/components/demo/anatolia/AnaReveal";
import { AnaCountUp } from "@/components/demo/anatolia/AnaCountUp";
import { ANA_ABOUT, ANA_IMG, ANA_STATS } from "@/components/demo/anatolia/ana-content";

export function AnaAbout() {
  return (
    <section
      id="unternehmen"
      className="bg-[var(--ana-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-12 lg:gap-16">
        <AnaReveal className="lg:col-span-5">
          <div className="ana-media relative aspect-[4/5] bg-[var(--ana-stone)]">
            <Image
              src={ANA_IMG.excavatorWork}
              alt="Team und Gerät von Anatolia bei Erdarbeiten"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(31,28,23,0.45)_100%)]"
              aria-hidden
            />
            <p className="absolute bottom-6 left-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
              Essen · seit 2016
            </p>
          </div>
        </AnaReveal>

        <div className="lg:col-span-7">
          <AnaReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber)]">
              {ANA_ABOUT.eyebrow}
            </p>
            <h2 className="mt-5 font-ana-display text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.03em]">
              {ANA_ABOUT.headline}
            </h2>
          </AnaReveal>

          <div className="mt-8 space-y-5">
            {ANA_ABOUT.paragraphs.map((p, i) => (
              <AnaReveal key={p.slice(0, 24)} delay={0.06 * (i + 1)}>
                <p className="text-[1.05rem] leading-[1.8] text-white/65">
                  {p}
                </p>
              </AnaReveal>
            ))}
          </div>

          <AnaReveal delay={0.2} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {ANA_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5"
              >
                <p className="font-ana-display text-3xl font-semibold tracking-[-0.03em] text-white">
                  <AnaCountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--ana-amber)]">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-white/40">{stat.hint}</p>
              </div>
            ))}
          </AnaReveal>

          <AnaReveal delay={0.24} className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <dl>
              {ANA_ABOUT.facts.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-white/10 px-5 py-4 last:border-b-0 sm:grid-cols-[10rem_1fr]"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    {k}
                  </dt>
                  <dd className="text-sm text-white/85 sm:text-[0.95rem]">{v}</dd>
                </div>
              ))}
            </dl>
          </AnaReveal>
        </div>
      </div>
    </section>
  );
}
