"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RK_EASE } from "@/components/demo/rk/rk-motion";
import { RK_FAQ } from "@/components/demo/rk/rk-content";

export function RkFaq() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-x-clip bg-[var(--rk-paper-deep)] px-5 py-24 sm:px-8 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <RkReveal className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
              Fragen
            </p>
            <h2 className="rk-display-lines font-rk-display mt-5 text-[clamp(2.2rem,4.6vw,3.5rem)] tracking-[0.01em] uppercase">
              <span>Bevor Sie</span>
              <span>anrufen.</span>
            </h2>
            <p className="mt-6 max-w-[28ch] text-[1.02rem] leading-[1.75] text-[var(--rk-muted)]">
              Preise ohne Aufmaß sind eine Schätzung. Der Termin vor Ort ist
              kostenlos — danach haben Sie eine Zahl.
            </p>
          </RkReveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-black/10">
              {RK_FAQ.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q} className="border-b border-black/10">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`font-rk-display text-[1.15rem] leading-[1.35] tracking-[0.01em] uppercase transition-colors sm:text-[1.3rem] ${
                          isOpen ? "text-[var(--rk-purple)]" : ""
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`mt-1 shrink-0 text-lg leading-none transition-transform duration-500 ${
                          isOpen ? "rotate-45 text-[var(--rk-purple)]" : ""
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
                      transition={{ duration: 0.5, ease: RK_EASE }}
                    >
                      <p className="max-w-2xl pb-7 pr-10 text-[0.98rem] leading-[1.75] text-[var(--rk-muted)]">
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
