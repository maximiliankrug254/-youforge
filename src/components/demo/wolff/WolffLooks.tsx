"use client";

import { motion } from "framer-motion";
import { WolffReveal } from "@/components/demo/wolff/WolffReveal";
import { WolffImageReveal } from "@/components/demo/wolff/WolffImageReveal";
import { WolffLivePhoto } from "@/components/demo/wolff/WolffLivePhoto";
import { WOLFF_LOOKS } from "@/components/demo/wolff/wolff-content";
import { WOLFF_EASE } from "@/components/demo/wolff/wolff-motion";

export function WolffLooks() {
  const [hero, ...rest] = WOLFF_LOOKS;

  return (
    <section
      id="maenner"
      className="relative overflow-x-hidden bg-[var(--wolff-panel)] px-5 py-24 text-[var(--wolff-cream)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <WolffReveal className="lg:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--wolff-brass)]">
              Männer
            </p>
            <h2 className="mt-4 max-w-[12ch] font-wolff-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.03em]">
              Gesichter, keine Looks.
            </h2>
          </WolffReveal>
          <WolffReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-sm text-[1.05rem] leading-relaxed text-[var(--wolff-cream)]/45">
              Schnurrbart, Scheitel, Koteletten, glatte Wange. Was bleibt, ist
              der Mann — nicht der Filter.
            </p>
          </WolffReveal>
        </div>

        <WolffReveal delay={0.06} className="mt-14 lg:mt-16">
          <WolffImageReveal
            src={hero.src}
            alt={hero.alt}
            className="aspect-[16/10] min-h-[280px] w-full sm:aspect-[21/10] lg:min-h-[540px]"
            objectPosition="center 18%"
          />
        </WolffReveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {rest.map((look, i) => (
            <WolffReveal key={look.src} delay={0.05 * (i % 3)}>
              <motion.div
                className="relative aspect-[3/4] overflow-hidden"
                whileHover="hover"
              >
                <WolffLivePhoto
                  src={look.src}
                  alt={look.alt}
                  className="absolute inset-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <motion.div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  variants={{ hover: { opacity: 1 } }}
                  transition={{ duration: 0.5, ease: WOLFF_EASE }}
                />
              </motion.div>
            </WolffReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
