"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function WolffLivePhoto({
  src,
  alt,
  className,
  objectPosition = "center",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  ken = true,
}: {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  sizes?: string;
  ken?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="absolute inset-[-8%]"
        animate={
          reduceMotion || !ken
            ? undefined
            : {
                scale: [1.06, 1.14, 1.06],
                x: ["0%", "2.2%", "-1.4%", "0%"],
                y: ["0%", "-1.6%", "1.2%", "0%"],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          quality={92}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition }}
        />
      </motion.div>
    </div>
  );
}
