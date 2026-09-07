"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { TUKAN_IMG } from "@/components/demo/tukan/tukan-config";
import { TUKAN_COPY } from "@/components/demo/tukan/tukan-content";
import { TUKAN_EASE } from "@/components/demo/tukan/tukan-motion";

export function TukanBali() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      id="bali"
      className="relative min-h-[100dvh] overflow-hidden"
    >
      <motion.div className="absolute inset-[-12%]" style={reduce ? undefined : { y }}>
        <Image
          src={TUKAN_IMG.bali}
          alt="Abendlicht über Pool und Palmen auf Bali"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,14,0.25)_0%,rgba(7,20,14,0.2)_40%,rgba(7,20,14,0.88)_100%)]" />

      <div className="relative z-[1] flex min-h-[100dvh] flex-col justify-end px-5 py-16 sm:px-10 lg:px-14">
        <p className="font-tukan-mono text-[12px] uppercase tracking-[0.22em] text-[var(--tukan-sun)]">
          {TUKAN_COPY.chapterBali}
        </p>
        <motion.h2
          className="tukan-headline mt-4 max-w-[38rem] text-[clamp(1.85rem,3.2vw,2.75rem)] font-semibold text-white"
          initial={reduce ? false : { y: 36, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: TUKAN_EASE }}
        >
          <span className="block">Es schmeckt nach Bali.</span>
          <span className="mt-1 block">Den Flug kannst du dir sparen.</span>
        </motion.h2>
        <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/82">
          {TUKAN_COPY.baliLead}
        </p>
        <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-white/62">
          {TUKAN_COPY.baliBody}
        </p>
        <a
          href="#bestellen"
          className="mt-8 inline-block font-tukan-mono text-[12px] uppercase tracking-[0.16em] text-[var(--tukan-sun)]"
        >
          [ {TUKAN_COPY.heroCta} ]
        </a>
      </div>
    </section>
  );
}
