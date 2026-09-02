"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AA_EASE } from "@/components/demo/aa/aa-motion";

export function AaReveal({
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
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 1.15, delay, ease: AA_EASE }}
    >
      {children}
    </motion.div>
  );
}
