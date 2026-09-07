"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { TUKAN_IMG } from "@/components/demo/tukan/tukan-config";
import { TUKAN_COPY } from "@/components/demo/tukan/tukan-content";
import { TUKAN_EASE } from "@/components/demo/tukan/tukan-motion";
import { TukanRail } from "@/components/demo/tukan/TukanRail";

export function TukanFacts() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xL = useTransform(scrollYProgress, [0, 1], ["-5%", "3%"]);
  const xR = useTransform(scrollYProgress, [0, 1], ["5%", "-3%"]);

  return (
    <section id="pack" ref={ref} className="scroll-mt-20 py-16 sm:py-24">
      <div className="flex items-end justify-between gap-4 px-5 sm:px-10 lg:px-14">
        <h2 className="font-tukan-display text-[clamp(2rem,5.5vw,4.4rem)] leading-[0.9] text-white">
          {TUKAN_COPY.chapterPack}
        </h2>
        <p className="hidden font-tukan-mono text-[12px] uppercase tracking-[0.18em] text-[var(--tukan-sun)] sm:block">
          [ {TUKAN_COPY.railHint} ]
        </p>
      </div>
      <p className="mt-4 max-w-xl px-5 text-[1.05rem] text-white/70 sm:px-10 lg:px-14">
        {TUKAN_COPY.factsTitle}
      </p>

      <div className="mt-10 px-5 sm:px-10 lg:px-14">
        <TukanRail>
          {TUKAN_COPY.facts.map((item) => (
            <article
              key={item.label}
              className="w-[70vw] shrink-0 rounded-[1.4rem] border border-white/12 bg-white/[0.04] px-6 py-10 sm:w-[38vw] lg:w-[20vw]"
            >
              <p className="font-tukan-display text-[clamp(3rem,8vw,5rem)] leading-none text-[var(--tukan-sun)]">
                {item.value}
              </p>
              <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-white">
                {item.label}
              </p>
              <p className="mt-1 font-tukan-mono text-[12px] text-white/55">{item.hint}</p>
            </article>
          ))}
        </TukanRail>
      </div>

      <div className="mt-20 grid items-stretch lg:grid-cols-2">
        <div className="relative min-h-[56dvh] overflow-hidden">
          <Image
            src={TUKAN_IMG.toucan}
            alt="Tukan im Abendlicht — Markenzeichen von TUKAN"
            fill
            quality={90}
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12">
          <motion.p
            className="font-tukan-mono text-[12px] uppercase tracking-[0.22em] text-[var(--tukan-sun)]"
            style={reduce ? undefined : { x: xL }}
          >
            {TUKAN_COPY.packKicker}
          </motion.p>
          <motion.h3
            className="mt-4 max-w-[16ch] text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white"
            initial={reduce ? false : { y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, ease: TUKAN_EASE }}
          >
            {TUKAN_COPY.packTitle}
          </motion.h3>
          <motion.p
            className="mt-5 max-w-lg text-[1.04rem] leading-relaxed text-white/72"
            style={reduce ? undefined : { x: xR }}
          >
            {TUKAN_COPY.packLead}
          </motion.p>
          <a
            href="#bestellen"
            className="mt-8 inline-block font-tukan-mono text-[12px] uppercase tracking-[0.16em] text-[var(--tukan-sun)]"
          >
            [ {TUKAN_COPY.orderCta} ]
          </a>
        </div>
      </div>
    </section>
  );
}
