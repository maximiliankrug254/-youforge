"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function WolffScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[90] h-[2px] origin-left bg-[var(--wolff-brass)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
