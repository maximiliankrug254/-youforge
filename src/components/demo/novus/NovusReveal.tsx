"use client";

import { motion, useReducedMotion } from "framer-motion";
import { NOVUS_EASE } from "@/components/demo/novus/novus-motion";

export function NovusReveal({
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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 1, delay, ease: NOVUS_EASE }}
    >
      {children}
    </motion.div>
  );
}
