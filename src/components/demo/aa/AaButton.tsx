"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
};

export function AaButton({ children, href, onClick, className = "", type = "button" }: Props) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (rect.left + rect.width / 2)) * 0.22,
      y: (e.clientY - (rect.top + rect.height / 2)) * 0.22,
    });
  }

  const motionProps = {
    onMouseMove: onMove,
    onMouseLeave: () => setOffset({ x: 0, y: 0 }),
    animate: reduceMotion ? undefined : offset,
    whileTap: reduceMotion ? undefined : { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 240, damping: 20, mass: 0.45 },
  };

  const cls = `inline-flex items-center justify-center rounded-full px-7 py-3 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${className}`;

  if (href) {
    return (
      <motion.a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={cls} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={cls}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
