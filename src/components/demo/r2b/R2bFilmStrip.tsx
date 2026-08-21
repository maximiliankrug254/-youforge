"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { R2B_EASE } from "@/components/demo/r2b/r2b-motion";
import { R2B_STRIP } from "@/components/demo/r2b/r2b-content";

export function R2bFilmStrip() {
  const reduceMotion = useReducedMotion();
  const row = [...R2B_STRIP, ...R2B_STRIP];

  return (
    <section
      className="relative overflow-hidden bg-[var(--r2b-void)] py-10 sm:py-14"
      aria-hidden
    >
      <motion.div
        className="r2b-filmstrip flex w-max gap-3 sm:gap-4"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: R2B_EASE }}
      >
        {row.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="relative h-[210px] w-[155px] shrink-0 overflow-hidden sm:h-[300px] sm:w-[220px] lg:h-[360px] lg:w-[265px]"
          >
            <Image
              src={item.src}
              alt=""
              fill
              quality={90}
              sizes="265px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 sm:p-4">
              <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/55">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
