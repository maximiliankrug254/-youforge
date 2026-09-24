"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AaLineField } from "@/components/demo/stelzer/AaLineField";

export function AaAmbient() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const tan = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 bg-[#d8c7b0]" />
      <motion.div className="absolute inset-0 bg-[#e8d9c4]" style={{ opacity: tan }} />
      {!reduce ? (
        <AaLineField
          className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
          color="#e7c2b4"
          mode="horizon"
          density={4.2}
          interactive={false}
        />
      ) : null}
    </div>
  );
}
