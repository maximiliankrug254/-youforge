"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GpfReveal } from "@/components/demo/gpf/GpfReveal";
import { GPF_EASE } from "@/components/demo/gpf/gpf-motion";
import { GPF_FAQ } from "@/components/demo/gpf/gpf-content";

export function GpfFaq() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-x-hidden bg-[var(--gpf-paper)] px-5 py-24 text-[var(--gpf-ink)] sm:px-8 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <GpfReveal className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--gpf-accent)]">
              Häufige Fragen
            </p>
            <h2 className="mt-5 font-gpf-display text-[clamp(2.2rem,4.6vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em]">
              Kurz
              <br />
              beantwortet.
            </h2>
          </GpfReveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-[var(--gpf-ink)]/12">
              {GPF_FAQ.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li
                    key={item.q}
                    className="border-b border-[var(--gpf-ink)]/12"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`font-gpf-display text-[1.15rem] font-bold tracking-[-0.015em] transition-colors sm:text-[1.3rem] ${
                          isOpen ? "text-[var(--gpf-accent)]" : ""
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`mt-1 shrink-0 text-lg leading-none transition-transform duration-500 ${
                          isOpen ? "rotate-45 text-[var(--gpf-accent)]" : ""
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    <motion.div
                      className="overflow-hidden"
                      initial={false}
                      animate={
                        reduceMotion
                          ? undefined
                          : { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }
                      }
                      transition={{ duration: 0.5, ease: GPF_EASE }}
                    >
                      <p className="max-w-2xl pb-7 pr-10 text-[0.98rem] leading-[1.75] text-[var(--gpf-muted)]">
                        {item.a}
                      </p>
                    </motion.div>
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
