"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { BST_EASE } from "@/components/demo/bst/bst-motion";

export function BstImageReveal({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(18% 18% 18% 18%)", "inset(0% 0% 0% 0%)"]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { clipPath: clip }}
        transition={{ ease: BST_EASE }}
      >
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { scale }}
        >
          <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}
