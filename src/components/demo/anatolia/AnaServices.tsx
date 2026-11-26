"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AnaReveal } from "@/components/demo/anatolia/AnaReveal";
import { ANA_EASE } from "@/components/demo/anatolia/ana-motion";
import { ANA_SERVICES } from "@/components/demo/anatolia/ana-content";

export function AnaServices() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const current = ANA_SERVICES[active];

  return (
    <section
      id="leistungen"
      className="relative bg-[var(--ana-paper)] px-5 py-24 text-[var(--ana-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <AnaReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber-deep)]">
              Leistungen
            </p>
            <h2 className="mt-5 font-ana-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-semibold leading-[1] tracking-[-0.03em]">
              Zehn Felder.
              <br />
              Ein Ansprechpartner.
            </h2>
          </AnaReveal>
          <AnaReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-[1.75] text-[var(--ana-muted)]">
              Von der Gartengestaltung bis zur Bordsteinabsenkung — einzeln
              buchbar oder kombiniert, abgestimmt auf Ihr Grundstück.
            </p>
          </AnaReveal>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 z-10">
              <div className="ana-media relative aspect-[4/5] max-h-[min(70vh,620px)] w-full bg-[var(--ana-paper-deep)] shadow-[0_24px_60px_rgba(31,28,23,0.12)]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={current.title}
                    className="absolute inset-0"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: ANA_EASE }}
                  >
                    <Image
                      src={current.image}
                      alt={current.alt}
                      fill
                      sizes="42vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(31,28,23,0.55)_100%)]"
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--ana-amber)]">
                    {String(active + 1).padStart(2, "0")} · {current.group}
                  </span>
                  <p className="mt-2 font-ana-display text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
                    {current.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-[var(--ana-ink)]/10 border-y border-[var(--ana-ink)]/10">
              {ANA_SERVICES.map((service, index) => {
                const isActive = active === index;
                const isOpen = openMobile === index;
                return (
                  <li key={service.title}>
                    <button
                      type="button"
                      className="group flex w-full items-start gap-4 py-5 text-left sm:gap-6 sm:py-6"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() =>
                        setOpenMobile((prev) => (prev === index ? null : index))
                      }
                    >
                      <span
                        className={`mt-1 shrink-0 font-mono text-[11px] tracking-wider transition-colors ${
                          isActive
                            ? "text-[var(--ana-amber-deep)]"
                            : "text-[var(--ana-muted)]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline justify-between gap-4">
                          <span
                            className={`font-ana-display text-[1.35rem] font-semibold tracking-[-0.02em] transition-colors sm:text-[1.55rem] ${
                              isActive
                                ? "text-[var(--ana-ink)]"
                                : "text-[var(--ana-ink)]/70 group-hover:text-[var(--ana-ink)]"
                            }`}
                          >
                            {service.title}
                          </span>
                          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--ana-muted)] sm:inline">
                            {service.group}
                          </span>
                        </span>
                        <span
                          className={`mt-2 block text-[0.98rem] leading-[1.7] text-[var(--ana-muted)] transition-all lg:max-h-none lg:opacity-100 ${
                            isOpen
                              ? "max-h-48 opacity-100"
                              : "max-h-0 overflow-hidden opacity-0 lg:mt-2 lg:max-h-none lg:overflow-visible"
                          }`}
                        >
                          {service.text}
                        </span>
                        <span className="ana-media relative mt-4 block aspect-[16/10] lg:hidden">
                          <Image
                            src={service.image}
                            alt={service.alt}
                            fill
                            sizes="100vw"
                            className={`object-cover transition-opacity ${
                              isOpen ? "opacity-100" : "opacity-0"
                            }`}
                          />
                        </span>
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
