"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TiwoReveal } from "@/components/demo/tiwo/TiwoReveal";
import { TIWO_EASE } from "@/components/demo/tiwo/tiwo-motion";
import { TIWO_SERVICES } from "@/components/demo/tiwo/tiwo-content";

export function TiwoServices() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section
      id="leistungen"
      className="relative overflow-x-hidden bg-[var(--tiwo-mist)] px-5 py-24 text-[var(--tiwo-ink)] sm:px-8 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <TiwoReveal className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--tiwo-accent)]">
              Leistungen
            </p>
            <h2 className="mt-4 font-tiwo-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
              Was wir können.
            </h2>
          </TiwoReveal>
          <TiwoReveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-md text-[1.05rem] leading-relaxed text-[var(--tiwo-muted)]">
              Bad, Küche, Terrasse, Sanierung, Neubau — immer mit demselben
              Anspruch: sieht stark aus, hält, fühlt sich fertig an.
            </p>
          </TiwoReveal>
        </div>

        <div className="mt-14 space-y-0 border-t border-[var(--tiwo-ink)]/10 sm:mt-16">
          {TIWO_SERVICES.map((item, i) => {
            const open = active === i;
            return (
              <TiwoReveal key={item.title} delay={0.04 * (i % 3)}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group grid w-full grid-cols-12 items-start gap-4 border-b border-[var(--tiwo-ink)]/10 py-7 text-left sm:py-8 lg:py-9"
                >
                  <span className="col-span-2 font-tiwo-display text-sm font-semibold tracking-[0.12em] text-[var(--tiwo-accent)] sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 sm:col-span-4">
                    <span className="font-tiwo-display text-2xl font-bold tracking-[-0.03em] transition-colors group-hover:text-[var(--tiwo-accent)] sm:text-3xl">
                      {item.title}
                    </span>
                  </span>
                  <span className="col-span-12 sm:col-span-7 sm:pl-4">
                    <motion.span
                      className="block overflow-hidden text-[0.95rem] leading-relaxed text-[var(--tiwo-muted)]"
                      initial={false}
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              height: open ? "auto" : 24,
                              opacity: open ? 1 : 0.55,
                            }
                      }
                      transition={{ duration: 0.45, ease: TIWO_EASE }}
                    >
                      {item.text}
                    </motion.span>
                  </span>
                </button>
              </TiwoReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
