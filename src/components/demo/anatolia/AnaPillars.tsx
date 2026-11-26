"use client";

import Image from "next/image";
import { AnaReveal } from "@/components/demo/anatolia/AnaReveal";
import { ANA_PILLARS } from "@/components/demo/anatolia/ana-content";

export function AnaPillars() {
  return (
    <section className="bg-[var(--ana-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1480px]">
        <AnaReveal className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber)]">
            Drei Schwerpunkte
          </p>
          <h2 className="mt-5 font-ana-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1] tracking-[-0.03em]">
            Pflaster. Garten.
            <br />
            Erde und Stein.
          </h2>
        </AnaReveal>

        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-3">
          {ANA_PILLARS.map((pillar, i) => (
            <AnaReveal key={pillar.id} delay={i * 0.08}>
              <article
                data-ana-hot={pillar.title}
                className="ana-media group relative flex h-full flex-col bg-[var(--ana-stone)] ring-0 transition-[box-shadow] duration-500 hover:shadow-[0_0_0_1px_rgba(239,184,37,0.35),0_20px_60px_rgba(0,0,0,0.3)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1100ms] group-hover:scale-[1.08]"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(31,28,23,0.62)_100%)]"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(239,184,37,0.2),transparent_55%)]"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--ana-amber)]">
                      {pillar.index}
                    </span>
                    <h3 className="mt-2 font-ana-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/65">{pillar.claim}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[0.98rem] leading-[1.7] text-white/60">
                    {pillar.text}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-white/80"
                      >
                        <span
                          className="h-1 w-1 shrink-0 rounded-full bg-[var(--ana-amber)]"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnaReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
