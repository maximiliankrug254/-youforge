"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GpfReveal } from "@/components/demo/gpf/GpfReveal";
import { GPF_EASE } from "@/components/demo/gpf/gpf-motion";
import { GPF_SERVICES } from "@/components/demo/gpf/gpf-content";

export function GpfServices() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const current = GPF_SERVICES[active];

  return (
    <section
      id="leistungen"
      className="relative overflow-x-hidden bg-[var(--gpf-paper)] px-5 py-24 text-[var(--gpf-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <GpfReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--gpf-accent)]">
              Leistungen
            </p>
            <h2 className="mt-5 font-gpf-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-bold leading-[1] tracking-[-0.03em]">
              Zwölf Dinge,
              <br />
              die wir richtig gut können.
            </h2>
          </GpfReveal>
          <GpfReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-[1.75] text-[var(--gpf-muted)]">
              Einzeln buchbar oder kombiniert im Pflegepaket — angepasst an
              Größe, Zustand und Nutzung Ihres Gartens.
            </p>
          </GpfReveal>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-[var(--gpf-paper-deep)]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={current.image}
                    className="absolute inset-0"
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: GPF_EASE }}
                  >
                    <Image
                      src={current.image}
                      alt={current.alt}
                      fill
                      sizes="45vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(15,21,17,0.85)_100%)]"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--gpf-sand)]">
                    {current.group}
                  </span>
                  <p className="mt-2 font-gpf-display text-2xl font-bold tracking-[-0.02em] text-white">
                    {current.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-[var(--gpf-ink)]/12">
              {GPF_SERVICES.map((item, i) => {
                const isActive = active === i;
                const isOpen = openMobile === i;
                return (
                  <li key={item.title} className="border-b border-[var(--gpf-ink)]/12">
                    <button
                      type="button"
                      className="group flex w-full items-start gap-4 py-6 text-left sm:py-7"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => {
                        setActive(i);
                        setOpenMobile(isOpen ? null : i);
                      }}
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`mt-1 font-gpf-display text-xs font-bold tracking-[0.16em] transition-colors ${
                          isActive
                            ? "text-[var(--gpf-accent)]"
                            : "text-[var(--gpf-ink)]/30"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="flex-1">
                        <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span
                            className={`font-gpf-display text-[1.4rem] font-bold leading-tight tracking-[-0.02em] transition-colors sm:text-[1.7rem] ${
                              isActive ? "text-[var(--gpf-accent)]" : ""
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gpf-muted)]">
                            {item.group}
                          </span>
                        </span>

                        <motion.span
                          className="block overflow-hidden lg:hidden"
                          initial={false}
                          animate={
                            reduceMotion
                              ? undefined
                              : { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }
                          }
                          transition={{ duration: 0.5, ease: GPF_EASE }}
                        >
                          <span className="relative mt-5 block aspect-[16/10] w-full overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.alt}
                              fill
                              sizes="100vw"
                              className="object-cover"
                            />
                          </span>
                          <span className="mt-4 block text-[0.95rem] leading-[1.7] text-[var(--gpf-muted)]">
                            {item.text}
                          </span>
                        </motion.span>

                        <span className="mt-3 hidden text-[0.95rem] leading-[1.7] text-[var(--gpf-muted)] lg:block">
                          {item.text}
                        </span>
                      </span>

                      <span
                        className={`mt-1 shrink-0 text-lg leading-none transition-transform duration-500 lg:hidden ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
