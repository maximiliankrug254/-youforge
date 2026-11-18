"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BBF_EASE } from "@/components/demo/bbf/bbf-motion";

export function BbfReveal({
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
      transition={{ duration: 0.9, delay, ease: BBF_EASE }}
    >
      {children}
    </motion.div>
  );
}
