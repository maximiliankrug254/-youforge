"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function R2bScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[90] h-px origin-left bg-[var(--r2b-brass)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
