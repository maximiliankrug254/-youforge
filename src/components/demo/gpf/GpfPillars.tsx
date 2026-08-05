"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GpfReveal } from "@/components/demo/gpf/GpfReveal";
import { GPF_EASE } from "@/components/demo/gpf/gpf-motion";
import { GPF_PILLARS } from "@/components/demo/gpf/gpf-content";

export function GpfPillars() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-x-hidden bg-[var(--gpf-ink)] px-5 py-24 text-white sm:px-8 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <GpfReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--gpf-sand)]">
              Drei Bereiche
            </p>
            <h2 className="mt-5 font-gpf-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-bold leading-[1] tracking-[-0.03em]">
              Alles am Grundstück.
              <br />
              <span className="italic text-[var(--gpf-accent-hot)]">
                Aus einer Hand.
              </span>
            </h2>
          </GpfReveal>
          <GpfReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-[1.75] text-white/55">
              Sie brauchen keine drei Firmen zu koordinieren. Pflege, Bäume und
              Bau kommen bei uns aus demselben Team — mit einem
              Ansprechpartner.
            </p>
          </GpfReveal>
        </div>

        <div className="mt-14 flex flex-col gap-3 lg:mt-16 lg:h-[620px] lg:flex-row">
          {GPF_PILLARS.map((pillar, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={pillar.id}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                className="group relative h-[380px] w-full overflow-hidden rounded-[2px] text-left sm:h-[440px] lg:h-full lg:min-h-0 lg:basis-0"
                animate={
                  reduceMotion
                    ? undefined
                    : { flexGrow: isActive ? 2.5 : 1 }
                }
                transition={{ duration: 0.85, ease: GPF_EASE }}
                style={{ flexGrow: 1 }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    animate={
                      reduceMotion ? undefined : { scale: isActive ? 1 : 1.1 }
                    }
                    transition={{ duration: 1.1, ease: GPF_EASE }}
                  >
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive
                      ? "bg-[linear-gradient(180deg,rgba(15,21,17,0.15)_0%,rgba(15,21,17,0.55)_52%,rgba(15,21,17,0.95)_100%)]"
                      : "bg-[linear-gradient(180deg,rgba(15,21,17,0.45)_0%,rgba(15,21,17,0.78)_100%)]"
                  }`}
                  aria-hidden
                />

                <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
                  <span className="font-gpf-display text-[11px] font-bold tracking-[0.3em] text-[var(--gpf-sand)]">
                    {pillar.index}
                  </span>

                  <h3
                    className={`mt-4 font-gpf-display text-[clamp(1.9rem,5vw,2.6rem)] font-bold leading-[1.02] tracking-[-0.025em] ${
                      isActive
                        ? "lg:text-[clamp(2rem,3.2vw,2.75rem)]"
                        : "lg:text-[clamp(1.15rem,1.6vw,1.6rem)]"
                    }`}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className={`mt-3 font-gpf-display italic leading-snug text-[var(--gpf-accent-hot)] ${
                      isActive ? "text-lg" : "text-lg lg:text-[0.9rem]"
                    }`}
                  >
                    {pillar.claim}
                  </p>

                  <motion.div
                    className="overflow-hidden"
                    initial={false}
                    animate={
                      reduceMotion
                        ? undefined
                        : { height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }
                    }
                    transition={{ duration: 0.6, ease: GPF_EASE }}
                  >
                    <p className="mt-5 max-w-md text-[0.95rem] leading-[1.7] text-white/65">
                      {pillar.text}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {pillar.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/20 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-white/70"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
