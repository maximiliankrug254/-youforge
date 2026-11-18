"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BBF_EASE } from "@/components/demo/bbf/bbf-motion";
import { BBF_PILLARS } from "@/components/demo/bbf/bbf-content";

export function BbfPillars() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="leistungen" className="bg-[var(--bbf-void)] text-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-6 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--bbf-red)]">
          Leistungen
        </p>
        <h2 className="mt-3 max-w-[11ch] font-bbf-display text-[clamp(2.4rem,5vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-balance">
          Inspektion, Reparatur, Autogas.
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-12 lg:pb-24">
        {BBF_PILLARS.map((pillar, index) => (
          <motion.article
            key={pillar.id}
            className="bg-[var(--bbf-void)]"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: BBF_EASE, delay: index * 0.08 }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="px-1 py-8 sm:px-2 lg:pr-10">
              <p className="font-bbf-display text-sm tracking-[0.16em] text-[var(--bbf-red)]">
                {pillar.label}
              </p>
              <h3 className="mt-2 font-bbf-display text-[clamp(2.35rem,9vw,3.75rem)] font-semibold tracking-[-0.04em]">
                {pillar.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
                {pillar.description}
              </p>
              <ul className="mt-5 flex max-w-md flex-wrap gap-2">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="border border-white/15 px-3 py-1.5 text-sm text-white/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
