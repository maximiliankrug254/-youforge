"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TUKAN_EASE } from "@/components/demo/tukan/tukan-motion";

export function TukanReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.95, delay, ease: TUKAN_EASE }}
    >
      {children}
    </motion.div>
  );
}
