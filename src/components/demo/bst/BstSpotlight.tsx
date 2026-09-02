"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BstReveal } from "@/components/demo/bst/BstReveal";
import { BST_EASE } from "@/components/demo/bst/bst-motion";

const MOMENTS = [
  {
    id: "ruhe",
    title: "Ruhe",
    text: "Ein Raum, der atmet — bevor Entscheidungen fallen.",
    src: "/demo/bestattung/hero-light.jpg",
  },
  {
    id: "weg",
    title: "Weg",
    text: "Jeder Schritt geführt. Nichts bleibt im Unklaren.",
    src: "/demo/bestattung/section-path.jpg",
  },
  {
    id: "nahe",
    title: "Nähe",
    text: "Menschlich im Ton. Präzise in der Ausführung.",
    src: "/demo/bestattung/section-flowers.jpg",
  },
] as const;

export function BstSpotlight() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const moment = MOMENTS[active];

  return (
    <section
      id="moment"
      className="relative overflow-hidden bg-[var(--bst-elevated)] px-5 py-28 text-[var(--bst-snow)] sm:px-8 sm:py-36 lg:py-44"
    >
      <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <BstReveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--bst-accent)]">
              Erlebnis
            </p>
            <h2 className="mt-5 max-w-[10ch] font-bst-display text-[clamp(2.4rem,5vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              Drei Momente. Ein Gefühl.
            </h2>
          </BstReveal>

          <div className="mt-12 space-y-1">
            {MOMENTS.map((item, i) => {
              const on = active === i;
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-start gap-5 border-b border-[var(--bst-line)] py-5 text-left transition-colors"
                >
                  <span
                    className={`mt-1 font-bst-display text-xs font-semibold tracking-[0.2em] ${
                      on ? "text-[var(--bst-accent)]" : "text-white/25"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block font-bst-display text-2xl font-semibold tracking-[-0.03em] transition-colors sm:text-3xl ${
                        on ? "text-[var(--bst-snow)]" : "text-white/35 group-hover:text-white/60"
                      }`}
                    >
                      {item.title}
                    </span>
                    <AnimatePresence mode="wait" initial={false}>
                      {on ? (
                        <motion.span
                          key={item.id}
                          className="mt-2 block max-w-sm text-sm leading-relaxed text-white/45"
                          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.35, ease: BST_EASE }}
                        >
                          {item.text}
                        </motion.span>
                      ) : null}
                    </AnimatePresence>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[16/11] lg:aspect-[5/4]">
            <AnimatePresence mode="wait">
              <motion.div
                key={moment.id}
                className="absolute inset-0"
                initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: BST_EASE }}
              >
                <Image
                  src={moment.src}
                  alt={moment.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,19,18,0.55)] via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
            <p className="absolute bottom-6 left-6 font-bst-display text-sm font-semibold tracking-[0.28em] text-white/70 uppercase">
              {moment.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
