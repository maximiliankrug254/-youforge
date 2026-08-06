"use client";

import Image from "next/image";
import { AureaReveal } from "@/components/demo/aurea/AureaReveal";
import { AureaImageReveal } from "@/components/demo/aurea/AureaImageReveal";
import { AUREA_LOOKS } from "@/components/demo/aurea/aurea-content";

export function AureaLooks() {
  const [hero, ...rest] = AUREA_LOOKS;

  return (
    <section
      id="looks"
      className="relative overflow-x-hidden bg-[var(--aurea-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <AureaReveal className="lg:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--aurea-copper)]">
              Looks
            </p>
            <h2 className="mt-4 max-w-[11ch] font-aurea-display text-[clamp(2.6rem,5.5vw,4.6rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
              Ergebnisse ohne Filter-Show.
            </h2>
          </AureaReveal>
          <AureaReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-sm text-[1.05rem] leading-relaxed text-white/40">
              Texture, Glanz, Dimension. Bilder, die Handwerk beweisen — und eine
              Marke, die man fühlt.
            </p>
          </AureaReveal>
        </div>

        <AureaReveal delay={0.06} className="mt-14 lg:mt-16">
          <AureaImageReveal
            src={hero.src}
            alt={hero.alt}
            className="aspect-[16/10] min-h-[280px] w-full sm:aspect-[21/10] lg:min-h-[520px]"
            objectPosition="center 28%"
          />
        </AureaReveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {rest.map((look, i) => (
            <AureaReveal key={look.src} delay={0.05 * (i % 3)}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={look.src}
                  alt={look.alt}
                  fill
                  quality={92}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
            </AureaReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
