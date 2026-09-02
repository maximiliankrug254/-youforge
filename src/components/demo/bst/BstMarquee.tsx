"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BST_EASE } from "@/components/demo/bst/bst-motion";

const WORDS = [
  "Würde",
  "Klarheit",
  "Nähe",
  "Präzision",
  "Ruhe",
  "Vertrauen",
  "Haltung",
  "Begleitung",
];

export function BstMarquee({ flip = false }: { flip?: boolean }) {
  const reduceMotion = useReducedMotion();
  const row = [...WORDS, ...WORDS];

  return (
    <div
      className="relative overflow-hidden border-y border-[var(--bst-line)] bg-[var(--bst-void)] py-6"
      aria-hidden
    >
      <motion.div
        className={`bst-marquee flex w-max gap-12 whitespace-nowrap ${flip ? "[animation-direction:reverse]" : ""}`}
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: BST_EASE }}
      >
        {row.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-flex items-center gap-12 font-bst-display text-[clamp(1.4rem,3vw,2rem)] font-medium tracking-[-0.03em] text-white/18"
          >
            {word}
            <span className="h-[3px] w-[3px] rounded-full bg-[var(--bst-accent)]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
