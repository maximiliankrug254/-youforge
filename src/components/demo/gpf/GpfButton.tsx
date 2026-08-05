"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  strength?: number;
};

export function GpfButton({
  children,
  href,
  className,
  target,
  rel,
  strength = 0.28,
}: Props) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (rect.left + rect.width / 2)) * strength,
      y: (e.clientY - (rect.top + rect.height / 2)) * strength,
    });
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={reduceMotion ? undefined : offset}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.5 }}
    >
      {children}
    </motion.a>
  );
}
