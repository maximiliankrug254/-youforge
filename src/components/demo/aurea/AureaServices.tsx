"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AureaReveal } from "@/components/demo/aurea/AureaReveal";
import { AUREA_EASE } from "@/components/demo/aurea/aurea-motion";
import { AUREA_SERVICES } from "@/components/demo/aurea/aurea-content";

const IMAGES = [
  "/demo/aurea/02-texture.jpg",
  "/demo/aurea/05-portrait.jpg",
  "/demo/aurea/06-brunette.jpg",
] as const;

export function AureaServices() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section
      id="service"
      className="relative overflow-x-hidden bg-[var(--aurea-bone)] px-5 py-24 text-[var(--aurea-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <AureaReveal className="lg:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--aurea-copper-deep)]">
              Service
            </p>
            <h2 className="mt-4 font-aurea-display text-[clamp(2.6rem,5.5vw,4.6rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
              Colour. Cut. Finish.
            </h2>
          </AureaReveal>
          <AureaReveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-md text-[1.05rem] leading-relaxed text-[var(--aurea-muted)]">
              Drei Säulen. Ein Anspruch. So strukturiert sich eine Seite, die
              Termine verkauft — nicht nur informiert.
            </p>
          </AureaReveal>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          <AureaReveal className="relative aspect-[4/5] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[520px]">
            {IMAGES.map((src, i) => (
              <motion.div
                key={src}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  scale: active === i ? 1 : 1.05,
                }}
                transition={{ duration: 0.7, ease: AUREA_EASE }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  quality={92}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </AureaReveal>

          <div className="border-t border-[var(--aurea-ink)]/10 lg:col-span-6 lg:col-start-7">
            {AUREA_SERVICES.map((item, i) => {
              const open = active === i;
              return (
                <AureaReveal key={item.title} delay={0.04 * i}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group grid w-full grid-cols-12 gap-4 border-b border-[var(--aurea-ink)]/10 py-8 text-left"
                  >
                    <span className="col-span-2 font-aurea-display text-sm font-semibold tracking-[0.12em] text-[var(--aurea-copper-deep)] sm:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-10 sm:col-span-11">
                      <span className="font-aurea-display text-2xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-[var(--aurea-copper-deep)] sm:text-3xl">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-[11px] uppercase tracking-[0.22em] text-[var(--aurea-muted)]">
                        {item.kicker}
                      </span>
                      <motion.span
                        className="mt-3 block overflow-hidden text-[0.95rem] leading-relaxed text-[var(--aurea-muted)]"
                        initial={false}
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                height: open ? "auto" : 0,
                                opacity: open ? 1 : 0,
                              }
                        }
                        transition={{ duration: 0.45, ease: AUREA_EASE }}
                      >
                        {item.text}
                      </motion.span>
                    </span>
                  </button>
                </AureaReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
