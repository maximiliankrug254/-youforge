"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WOLFF_EASE } from "@/components/demo/wolff/wolff-motion";

export function WolffReveal({
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay, ease: WOLFF_EASE }}
    >
      {children}
    </motion.div>
  );
}
