"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export function GermanScaleImg({
  src,
  alt,
  from,
  to,
  className,
  objectPosition,
}: {
  src: string;
  alt: string;
  from: number;
  to: number;
  className?: string;
  objectPosition?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{
        scale: reduce ? 1 : scale,
        objectPosition,
      }}
    />
  );
}

export function GermanParallaxImg({
  src,
  alt,
  className,
  from,
  to,
}: {
  src: string;
  alt: string;
  className?: string;
  from: string;
  to: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{ y: reduce ? 0 : y }}
    />
  );
}
