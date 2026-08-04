"use client";

import Image from "next/image";
import { NovusReveal } from "@/components/demo/novus/NovusReveal";
import { NovusImageReveal } from "@/components/demo/novus/NovusImageReveal";
import { NOVUS_LOOKS } from "@/components/demo/novus/novus-content";

export function NovusLooks() {
  const [hero, ...rest] = NOVUS_LOOKS;

  return (
    <section
      id="looks"
      className="relative overflow-x-hidden bg-[var(--novus-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <NovusReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--novus-gold)]">
              Looks
            </p>
            <h2 className="mt-4 max-w-[12ch] font-novus-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
              Ergebnisse, die man anfassen will.
            </h2>
          </NovusReveal>
          <NovusReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-sm text-[1.05rem] leading-relaxed text-white/45">
              Keine Filter-Show. Texture, Glanz, Dimension — so sieht Colour aus,
              wenn ein junges Team ernsthaft arbeitet.
            </p>
          </NovusReveal>
        </div>

        <NovusReveal delay={0.06} className="mt-14 lg:mt-16">
          <NovusImageReveal
            src={hero.src}
            alt={hero.alt}
            className="aspect-[16/10] min-h-[280px] w-full sm:aspect-[21/10] lg:min-h-[520px]"
            objectPosition="center 28%"
          />
        </NovusReveal>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {rest.map((look, i) => (
            <NovusReveal key={look.src} delay={0.05 * (i % 3)}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={look.src}
                  alt={look.alt}
                  fill
                  quality={92}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                />
              </div>
            </NovusReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
