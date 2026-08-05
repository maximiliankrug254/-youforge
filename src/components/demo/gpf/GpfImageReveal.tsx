"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export function GpfImageReveal({
  src,
  alt,
  className,
  sizes = "(max-width: 1024px) 100vw, 55vw",
  priority = false,
  objectClassName = "object-center",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectClassName?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.3"],
  });
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(16% 14% 16% 14%)", "inset(0% 0% 0% 0%)"],
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1.16, 1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { clipPath: clip }}
      >
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { scale }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={`object-cover ${objectClassName}`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
