"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GPF_EASE } from "@/components/demo/gpf/gpf-motion";

export function GpfMarquee({
  words,
  flip = false,
  tone = "dark",
}: {
  words: readonly string[];
  flip?: boolean;
  tone?: "dark" | "light";
}) {
  const reduceMotion = useReducedMotion();
  const row = [...words, ...words];
  const dark = tone === "dark";

  return (
    <div
      className={`relative overflow-hidden py-5 ${
        dark
          ? "border-y border-white/10 bg-[var(--gpf-ink)] text-white"
          : "border-y border-[var(--gpf-ink)]/10 bg-[var(--gpf-paper-deep)] text-[var(--gpf-ink)]"
      }`}
      aria-hidden
    >
      <motion.div
        className={`gpf-marquee flex w-max gap-10 whitespace-nowrap ${flip ? "[animation-direction:reverse]" : ""}`}
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: GPF_EASE }}
      >
        {row.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={`inline-flex items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.38em] ${
              dark ? "text-white/35" : "text-[var(--gpf-ink)]/45"
            }`}
          >
            {word}
            <span className="h-1 w-1 rounded-full bg-[var(--gpf-accent)]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
