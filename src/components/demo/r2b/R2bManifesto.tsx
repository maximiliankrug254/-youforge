"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const LINES = [
  { quiet: "Nicht Likes.", loud: "Anfragen." },
  { quiet: "Nicht Reichweite.", loud: "Wirkung." },
  { quiet: "Nicht Templates.", loud: "Atelier." },
] as const;

export function R2bManifesto() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const o1 = useTransform(scrollYProgress, [0.08, 0.28, 0.48], [0.14, 1, 0.28]);
  const o2 = useTransform(scrollYProgress, [0.22, 0.42, 0.62], [0.14, 1, 0.28]);
  const o3 = useTransform(scrollYProgress, [0.36, 0.56, 0.78], [0.14, 1, 0.45]);
  const opacities = [o1, o2, o3];

  return (
    <section
      ref={ref}
      className="relative overflow-x-hidden bg-[var(--r2b-void)] px-5 py-32 text-white sm:px-8 sm:py-44 lg:py-56"
    >
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-16 text-[11px] font-medium uppercase tracking-[0.4em] text-[var(--r2b-brass)]">
          Haltung
        </p>
        <div className="space-y-8 sm:space-y-12">
          {LINES.map((line, i) => (
            <motion.p
              key={line.loud}
              className="font-r2b-display text-[clamp(2.4rem,7.5vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.05em]"
              style={reduceMotion ? undefined : { opacity: opacities[i] }}
            >
              <span className="text-white/40">{line.quiet}</span>{" "}
              <span className={i === 2 ? "italic text-[var(--r2b-brass)]" : ""}>
                {line.loud}
              </span>
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
