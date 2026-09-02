"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BstReveal } from "@/components/demo/bst/BstReveal";
import { BST_EASE } from "@/components/demo/bst/bst-motion";
import { BST_SERVICES } from "@/components/demo/bst/bst-content";

export function BstServices() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section
      id="leistungen"
      className="relative overflow-x-hidden bg-[var(--bst-void)] px-5 py-28 text-[var(--bst-snow)] sm:px-8 sm:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <BstReveal className="lg:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--bst-accent)]">
              Leistungen
            </p>
            <h2 className="mt-5 font-bst-display text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.94] tracking-[-0.04em]">
              Alles, was
              <br />
              Abschied braucht.
            </h2>
          </BstReveal>
          <BstReveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.02rem] leading-[1.75] text-white/42">
              Sechs Disziplinen. Ein Anspruch: Präzision mit Haltung.
            </p>
          </BstReveal>
        </div>

        <div className="mt-16 border-t border-[var(--bst-line)] lg:mt-20">
          {BST_SERVICES.map((item, i) => {
            const open = active === i;
            return (
              <BstReveal key={item.title} delay={Math.min(i * 0.04, 0.2)}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group relative grid w-full grid-cols-12 items-center gap-3 border-b border-[var(--bst-line)] py-6 text-left sm:py-8 lg:py-9"
                >
                  <motion.span
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-[var(--bst-accent)]"
                    initial={false}
                    animate={{ scaleX: open ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: BST_EASE }}
                  />
                  <span className="col-span-2 font-bst-display text-xs font-semibold tracking-[0.2em] text-[var(--bst-accent)] sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`col-span-10 font-bst-display text-[clamp(1.5rem,3.2vw,2.75rem)] font-semibold tracking-[-0.035em] transition-colors sm:col-span-4 ${
                      open ? "text-[var(--bst-accent)]" : "group-hover:text-[var(--bst-accent)]"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span className="col-span-12 sm:col-span-7 sm:pl-6">
                    <AnimatePresence mode="wait" initial={false}>
                      {open || reduceMotion ? (
                        <motion.span
                          key="open"
                          className="block text-[0.95rem] leading-relaxed text-white/42 sm:text-[1.02rem]"
                          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.35, ease: BST_EASE }}
                        >
                          {item.text}
                        </motion.span>
                      ) : (
                        <motion.span
                          key="closed"
                          className="hidden text-sm text-white/22 sm:block"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          Hover · Details
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </button>
              </BstReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
