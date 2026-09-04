"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { WOLFF_EASE } from "@/components/demo/wolff/wolff-motion";
import { WOLFF_STRIP } from "@/components/demo/wolff/wolff-content";

export function WolffStrip() {
  const reduceMotion = useReducedMotion();
  const row = [...WOLFF_STRIP, ...WOLFF_STRIP];

  return (
    <section
      className="relative overflow-hidden bg-[var(--wolff-ink)] py-8 sm:py-12"
      aria-hidden
    >
      <motion.div
        className="wolff-strip flex w-max gap-3 sm:gap-4"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: WOLFF_EASE }}
      >
        {row.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="relative h-[210px] w-[155px] shrink-0 overflow-hidden sm:h-[290px] sm:w-[215px] lg:h-[350px] lg:w-[260px]"
          >
            <Image
              src={item.src}
              alt=""
              fill
              quality={90}
              sizes="260px"
              className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 sm:p-4">
              <p className="font-wolff-display text-[13px] italic tracking-wide text-[var(--wolff-cream)]/70">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
