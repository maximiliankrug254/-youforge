"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AaLineField } from "@/components/demo/bas/AaLineField";

export function AaAmbient() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const tan = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 bg-[var(--aa-tan)]" />
      <motion.div className="absolute inset-0 bg-[var(--aa-tan-hot)]" style={{ opacity: tan }} />
      {!reduce ? (
        <AaLineField
          className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
          color="#9fc9cc"
          mode="horizon"
          density={4.2}
          interactive={false}
        />
      ) : null}
    </div>
  );
}
