"use client";

import Image from "next/image";
import { AtlReveal } from "@/components/demo/atl/AtlReveal";
import { ATL_WHY } from "@/components/demo/atl/atl-content";

export function AtlWhy() {
  return (
    <section
      id="warum"
      className="relative overflow-x-hidden bg-[var(--atl-steel)] px-5 py-20 text-white sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-10 lg:items-center">
        <AtlReveal className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:col-span-5 lg:aspect-[4/5]">
          <Image
            src="/demo/atl-lauber/why-car.jpg"
            alt="Hochwertiges Fahrzeug — Sinnbild für Präzision und Anspruch"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[var(--atl-steel)] via-transparent to-black/20"
            aria-hidden
          />
        </AtlReveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <AtlReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--atl-red)]">
              Warum ATL
            </p>
            <h2 className="mt-4 max-w-[16ch] font-atl-display text-[clamp(2.1rem,4.8vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.02em]">
              Nicht nur reparieren. Auf Niveau bringen.
            </h2>
            <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-white/55">
              Automobil-Technik Lauber steht für handfeste Qualität in Grünberg —
              vom Alltagsservice bis zur Performance-Lösung.
            </p>
          </AtlReveal>

          <div className="mt-10 space-y-0 border-t border-white/12">
            {ATL_WHY.map((item, i) => (
              <AtlReveal key={item.title} delay={0.08 * (i + 1)}>
                <div className="border-b border-white/12 py-6 sm:py-7">
                  <p className="font-atl-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {item.title}
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/55">
                    {item.text}
                  </p>
                </div>
              </AtlReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
