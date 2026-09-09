"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RK_EASE } from "@/components/demo/rk/rk-motion";

export function RkReveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.95, delay, ease: RK_EASE }}
    >
      {children}
    </motion.div>
  );
}
