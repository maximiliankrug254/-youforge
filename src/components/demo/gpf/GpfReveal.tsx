"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GPF_EASE } from "@/components/demo/gpf/gpf-motion";

export function GpfReveal({
  children,
  className,
  delay = 0,
  y = 30,
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
      transition={{ duration: 1, delay, ease: GPF_EASE }}
    >
      {children}
    </motion.div>
  );
}
