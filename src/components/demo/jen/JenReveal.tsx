"use client";

import { motion, useReducedMotion } from "framer-motion";
import { JEN_EASE } from "@/components/demo/jen/jen-motion";

export function JenReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.9, delay, ease: JEN_EASE }}
    >
      {children}
    </motion.div>
  );
}
