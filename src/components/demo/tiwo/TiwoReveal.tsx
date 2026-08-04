"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TIWO_EASE } from "@/components/demo/tiwo/tiwo-motion";

export function TiwoReveal({
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.95, delay, ease: TIWO_EASE }}
    >
      {children}
    </motion.div>
  );
}
