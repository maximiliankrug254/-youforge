"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BST_EASE } from "@/components/demo/bst/bst-motion";

export function BstReveal({
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
      transition={{ duration: 0.95, delay, ease: BST_EASE }}
    >
      {children}
    </motion.div>
  );
}
