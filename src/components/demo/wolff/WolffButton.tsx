"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WOLFF_EASE } from "@/components/demo/wolff/wolff-motion";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
};

export function WolffButton({ children, href, className, target, rel }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={className}
      whileHover={reduceMotion ? undefined : { y: -1, letterSpacing: "0.04em" }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ ease: WOLFF_EASE, duration: 0.28 }}
    >
      {children}
    </motion.a>
  );
}
