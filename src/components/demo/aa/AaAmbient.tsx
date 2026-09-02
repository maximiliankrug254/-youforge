"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AaLineField } from "@/components/demo/aa/AaLineField";

export function AaAmbient() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const tan = useTransform(scrollYProgress, [0.28, 0.4, 0.56, 0.68, 0.84, 0.94], [0, 1, 1, 0, 0, 1]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 bg-[#16110d]" />
      <motion.div className="absolute inset-0 bg-[#c4b194]" style={{ opacity: tan }} />
      {!reduce ? (
        <AaLineField
          className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
          color="#c4b194"
          mode="horizon"
          density={4.2}
          interactive={false}
        />
      ) : null}
    </div>
  );
}
