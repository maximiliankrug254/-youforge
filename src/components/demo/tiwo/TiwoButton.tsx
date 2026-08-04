"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TIWO_EASE } from "@/components/demo/tiwo/tiwo-motion";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
};

export function TiwoButton({ children, href, className, target, rel }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={className}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ ease: TIWO_EASE, duration: 0.28 }}
    >
      {children}
    </motion.a>
  );
}
