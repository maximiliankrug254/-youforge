"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function AaScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[90] h-px origin-left bg-[var(--aa-tan)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
