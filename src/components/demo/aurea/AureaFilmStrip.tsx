"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AUREA_EASE } from "@/components/demo/aurea/aurea-motion";

const STRIP = [
  { src: "/demo/aurea/02-texture.jpg", label: "Texture" },
  { src: "/demo/aurea/05-portrait.jpg", label: "Portrait" },
  { src: "/demo/aurea/06-brunette.jpg", label: "Dimension" },
  { src: "/demo/aurea/03-craft.jpg", label: "Craft" },
  { src: "/demo/aurea/07-bridal.jpg", label: "Bridal" },
  { src: "/demo/aurea/08-bowl.jpg", label: "Colour" },
] as const;

export function AureaFilmStrip() {
  const reduceMotion = useReducedMotion();
  const row = [...STRIP, ...STRIP];

  return (
    <section
      className="relative overflow-hidden bg-[var(--aurea-ink)] py-10 sm:py-14"
      aria-hidden
    >
      <motion.div
        className={`aurea-filmstrip flex w-max gap-3 sm:gap-4 ${reduceMotion ? "" : ""}`}
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: AUREA_EASE }}
      >
        {row.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="relative h-[200px] w-[150px] shrink-0 overflow-hidden sm:h-[280px] sm:w-[210px] lg:h-[340px] lg:w-[255px]"
          >
            <Image
              src={item.src}
              alt=""
              fill
              quality={90}
              sizes="255px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
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
