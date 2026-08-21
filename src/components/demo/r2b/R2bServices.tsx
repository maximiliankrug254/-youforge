"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { R2bReveal } from "@/components/demo/r2b/R2bReveal";
import { R2B_EASE } from "@/components/demo/r2b/r2b-motion";
import { R2B_SERVICES } from "@/components/demo/r2b/r2b-content";

export function R2bServices() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section
      id="leistungen"
      className="relative overflow-x-hidden bg-[var(--r2b-bone)] px-5 py-24 text-[var(--r2b-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <R2bReveal className="lg:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--r2b-brass-deep)]">
              Leistungen
            </p>
            <h2 className="mt-4 font-r2b-display text-[clamp(2.6rem,5.8vw,5rem)] font-medium leading-[0.92] tracking-[-0.045em]">
              Vier Säulen.
              <span className="block italic text-[var(--r2b-brass-deep)]">
                Ein Anspruch.
              </span>
            </h2>
          </R2bReveal>
          <R2bReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-relaxed text-[var(--r2b-muted)]">
              Kein Baukasten-Menü. Ein System — vom ersten Bild bis zur
              Anfrage, die wirklich zählt.
            </p>
          </R2bReveal>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <R2bReveal className="relative aspect-[4/5] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[560px]">
            {R2B_SERVICES.map((item, i) => (
              <motion.div
                key={item.title}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  scale: active === i ? 1 : 1.06,
                }}
                transition={{ duration: 0.75, ease: R2B_EASE }}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  quality={92}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </R2bReveal>

          <div className="border-t border-[var(--r2b-ink)]/10 lg:col-span-6 lg:col-start-7">
            {R2B_SERVICES.map((item, i) => {
              const open = active === i;
              return (
                <R2bReveal key={item.title} delay={0.04 * i}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group grid w-full grid-cols-12 gap-4 border-b border-[var(--r2b-ink)]/10 py-8 text-left"
                  >
                    <span className="col-span-2 font-r2b-display text-sm tracking-[0.14em] text-[var(--r2b-brass-deep)] sm:col-span-1">
                      {item.index}
                    </span>
                    <span className="col-span-10 sm:col-span-11">
                      <span className="font-r2b-display text-2xl font-medium tracking-[-0.03em] transition-colors group-hover:text-[var(--r2b-brass-deep)] sm:text-[2rem]">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-[11px] uppercase tracking-[0.2em] text-[var(--r2b-muted)]">
                        {item.kicker}
                      </span>
                      <motion.span
                        className="mt-3 block overflow-hidden text-[0.98rem] leading-relaxed text-[var(--r2b-muted)]"
                        initial={false}
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                height: open ? "auto" : 0,
                                opacity: open ? 1 : 0,
                              }
                        }
                        transition={{ duration: 0.45, ease: R2B_EASE }}
                      >
                        {item.text}
                      </motion.span>
                    </span>
                  </button>
                </R2bReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
