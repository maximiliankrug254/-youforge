"use client";

import { motion, useReducedMotion } from "framer-motion";
import { NOVUS_EASE } from "@/components/demo/novus/novus-motion";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
};

export function NovusButton({ children, href, className, target, rel }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={className}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ ease: NOVUS_EASE, duration: 0.28 }}
    >
      {children}
    </motion.a>
  );
}
