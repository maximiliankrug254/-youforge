"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { BstReveal } from "@/components/demo/bst/BstReveal";
import { BST_EASE } from "@/components/demo/bst/bst-motion";

const LINE =
  "Der erste Eindruck entscheidet — auch im Trauerfall.".split(" ");

export function BstStatement() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      ref={ref}
      id="haltung"
      className="relative overflow-hidden bg-[var(--bst-snow)] px-5 py-28 text-[var(--bst-void)] sm:px-8 sm:py-36 lg:py-44"
    >
      <motion.div
        className="mx-auto max-w-[1200px] text-center"
        style={reduceMotion ? undefined : { y }}
      >
        <BstReveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[var(--bst-muted)]">
            Philosophie
          </p>
        </BstReveal>

        <p className="mx-auto mt-10 max-w-[18ch] font-bst-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
          {LINE.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="mr-[0.22em] inline-block last:mr-0"
              initial={reduceMotion ? false : { opacity: 0.18, y: 18 }}
              whileInView={{ opacity: i > 4 ? 0.42 : 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.045, ease: BST_EASE }}
            >
              {word}
            </motion.span>
          ))}
        </p>

        <BstReveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-xl text-[1.08rem] leading-[1.8] text-[var(--bst-muted)]">
            Eine Website, die Ruhe ausstrahlt, bevor ein Wort gesprochen wird.
            Präzise, menschlich, unverwechselbar — wie ein Produkt, das man spürt.
          </p>
        </BstReveal>
      </motion.div>
    </section>
  );
}
