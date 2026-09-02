"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

export function BstProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  if (reduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-[var(--bst-accent)]"
      style={{ scaleX: scrollYProgress }}
      aria-hidden
    />
  );
}
