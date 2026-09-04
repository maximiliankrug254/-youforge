"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { WolffReveal } from "@/components/demo/wolff/WolffReveal";
import { WOLFF_EASE } from "@/components/demo/wolff/wolff-motion";
import { WOLFF_SERVICES } from "@/components/demo/wolff/wolff-content";

const IMAGES = [
  "/demo/wolff/04-cut.jpg",
  "/demo/wolff/03-shave.jpg",
  "/demo/wolff/09-mustache.jpg",
] as const;

export function WolffServices() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section
      id="service"
      className="relative overflow-x-hidden bg-[var(--wolff-ink)] px-5 py-24 text-[var(--wolff-cream)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <WolffReveal className="lg:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--wolff-brass)]">
              Handwerk
            </p>
            <h2 className="mt-4 font-wolff-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.03em]">
              Schnitt. Rasur. Bart.
            </h2>
          </WolffReveal>
          <WolffReveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-md text-[1.05rem] leading-relaxed text-[var(--wolff-cream)]/48">
              Drei Dinge, klar bepreist. Kein Menü mit zwanzig Nuancen. Du weißt
              vorher, was du zahlst und wie lange du sitzt.
            </p>
          </WolffReveal>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          <WolffReveal className="relative aspect-[4/5] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[520px]">
            {IMAGES.map((src, i) => (
              <motion.div
                key={src}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  scale: active === i ? 1.08 : 1.16,
                }}
                transition={{ duration: 1.05, ease: WOLFF_EASE }}
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
          </WolffReveal>

          <div className="border-t border-[var(--wolff-cream)]/12 lg:col-span-6 lg:col-start-7">
            {WOLFF_SERVICES.map((item, i) => {
              const open = active === i;
              return (
                <WolffReveal key={item.title} delay={0.04 * i}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group grid w-full grid-cols-12 gap-4 border-b border-[var(--wolff-cream)]/12 py-8 text-left"
                  >
                    <span className="col-span-2 font-wolff-display text-sm font-medium tracking-[0.12em] text-[var(--wolff-brass)] sm:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-10 sm:col-span-11">
                      <span className="font-wolff-display text-2xl font-medium tracking-[-0.02em] transition-colors group-hover:text-[var(--wolff-brass)] sm:text-3xl">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-[11px] uppercase tracking-[0.22em] text-[var(--wolff-cream)]/40">
                        {item.kicker}
                      </span>
                      <motion.span
                        className="mt-3 block overflow-hidden text-[0.95rem] leading-relaxed text-[var(--wolff-cream)]/50"
                        initial={false}
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                height: open ? "auto" : 0,
                                opacity: open ? 1 : 0,
                              }
                        }
                        transition={{ duration: 0.45, ease: WOLFF_EASE }}
                      >
                        {item.text}
                      </motion.span>
                    </span>
                  </button>
                </WolffReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
