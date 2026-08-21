"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export function R2bImageReveal({
  src,
  alt,
  className,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.94", "start 0.28"],
  });
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(22% 18% 22% 18%)", "inset(0% 0% 0% 0%)"],
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
            quality={92}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
            style={{ objectPosition }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
