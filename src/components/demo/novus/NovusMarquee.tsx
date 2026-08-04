"use client";

import { motion, useReducedMotion } from "framer-motion";
import { NOVUS_EASE } from "@/components/demo/novus/novus-motion";

const WORDS = [
  "Colour Artists",
  "CalligraphyCut",
  "Balayage",
  "Junges Team",
  "Alte Molkerei",
  "Alsfeld",
  "Too much is never enough",
  "Bräute",
];

export function NovusMarquee({ flip = false }: { flip?: boolean }) {
  const reduceMotion = useReducedMotion();
  const row = [...WORDS, ...WORDS];

  return (
    <div
      className="relative overflow-hidden border-y border-white/10 bg-[var(--novus-ink)] py-5 text-white"
      aria-hidden
    >
      <motion.div
        className={`novus-marquee flex w-max gap-10 whitespace-nowrap ${flip ? "[animation-direction:reverse]" : ""}`}
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: NOVUS_EASE }}
      >
        {row.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-flex items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.38em] text-white/35"
          >
            {word}
            <span className="h-1 w-1 rounded-full bg-[var(--novus-gold)]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
