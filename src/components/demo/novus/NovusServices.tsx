"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NovusReveal } from "@/components/demo/novus/NovusReveal";
import { NOVUS_EASE } from "@/components/demo/novus/novus-motion";
import { NOVUS_SERVICES } from "@/components/demo/novus/novus-content";

const SERVICE_IMAGES = [
  "/demo/novus-hair/02-texture-blonde.jpg",
  "/demo/novus-hair/05-look-portrait.jpg",
  "/demo/novus-hair/06-texture-brunette.jpg",
] as const;

export function NovusServices() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section
      id="service"
      className="relative overflow-x-hidden bg-[var(--novus-stone)] px-5 py-24 text-[var(--novus-ink)] sm:px-8 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <NovusReveal className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--novus-gold-deep)]">
              Service
            </p>
            <h2 className="mt-4 font-novus-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
              Haare. Gesicht. Augen.
            </h2>
          </NovusReveal>
          <NovusReveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-md text-[1.05rem] leading-relaxed text-[var(--novus-muted)]">
              Drei Säulen. Ein Anspruch: typgerecht, technisch stark, ohne
              Kompromiss beim Ergebnis.
            </p>
          </NovusReveal>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <NovusReveal className="relative aspect-[4/5] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[520px]">
            {SERVICE_IMAGES.map((src, i) => (
              <motion.div
                key={src}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  scale: active === i ? 1 : 1.06,
                }}
                transition={{ duration: 0.7, ease: NOVUS_EASE }}
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
          </NovusReveal>

          <div className="space-y-0 border-t border-[var(--novus-ink)]/10 lg:col-span-6 lg:col-start-7">
            {NOVUS_SERVICES.map((item, i) => {
              const open = active === i;
              return (
                <NovusReveal key={item.title} delay={0.04 * i}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group grid w-full grid-cols-12 items-start gap-4 border-b border-[var(--novus-ink)]/10 py-7 text-left sm:py-8"
                  >
                    <span className="col-span-2 font-novus-display text-sm font-semibold tracking-[0.12em] text-[var(--novus-gold-deep)] sm:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-10 sm:col-span-11">
                      <span className="font-novus-display text-2xl font-bold tracking-[-0.03em] transition-colors group-hover:text-[var(--novus-gold-deep)] sm:text-3xl">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-[11px] uppercase tracking-[0.22em] text-[var(--novus-muted)]">
                        {item.kicker}
                      </span>
                      <motion.span
                        className="mt-3 block overflow-hidden text-[0.95rem] leading-relaxed text-[var(--novus-muted)]"
                        initial={false}
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                height: open ? "auto" : 0,
                                opacity: open ? 1 : 0,
                              }
                        }
                        transition={{ duration: 0.45, ease: NOVUS_EASE }}
                      >
                        {item.text}
                      </motion.span>
                    </span>
                  </button>
                </NovusReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
