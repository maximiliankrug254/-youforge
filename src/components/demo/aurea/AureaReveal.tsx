"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AUREA_EASE } from "@/components/demo/aurea/aurea-motion";

export function AureaReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.05, delay, ease: AUREA_EASE }}
    >
      {children}
    </motion.div>
  );
}
