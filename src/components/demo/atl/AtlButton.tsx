"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ATL_EASE } from "@/components/demo/atl/atl-motion";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  strength?: number;
};

export function AtlButton({
  children,
  href,
  className,
  target,
  rel,
  strength = 0.22,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const [magnetic, setMagnetic] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 24, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 300, damping: 24, mass: 0.35 });

  useEffect(() => {
    setMagnetic(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const enabled = magnetic && !reduceMotion && strength > 0;

  function onMove(e: React.MouseEvent) {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={enabled ? { x: springX, y: springY } : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ ease: ATL_EASE, duration: 0.3 }}
    >
      {children}
    </motion.a>
  );
}
