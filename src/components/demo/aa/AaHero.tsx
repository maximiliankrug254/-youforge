"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AA, AA_IMG } from "@/components/demo/aa/aa-config";
import { AaCircleCta } from "@/components/demo/aa/AaCircleCta";

export function AaHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const inset = useTransform(scrollYProgress, [0.08, 0.72], [0, 18]);
  const clip = useTransform(inset, (v) => `inset(${v}% ${v * 1.15}% ${v}% ${v * 1.15}%)`);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1.08, 1]);
  const heroUi = useTransform(scrollYProgress, [0, 0.45, 0.78], [1, 1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-aa-tone="dark"
      className="relative z-10 h-[180vh] text-[var(--aa-tan)]"
    >
      <div className="sticky top-0 h-dvh overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={reduce ? undefined : { clipPath: clip, opacity: heroUi }}
        >
          <motion.div className="absolute inset-0" style={reduce ? undefined : { scale }}>
            <Image
              src={AA_IMG.hero}
              alt="Werkstatt Ast & Asche bei Dämmerung — Ofenlicht und Holzbank"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,17,13,0.2)_0%,rgba(22,17,13,0.12)_45%,rgba(22,17,13,0.5)_100%)]" />
        </motion.div>

        <motion.div
          className="relative z-10 flex h-full flex-col justify-between px-5 pb-8 pt-24 sm:px-8 lg:px-12"
          style={reduce ? undefined : { opacity: heroUi }}
        >
          <div className="flex items-start justify-between gap-6">
            <p className="text-[10px] uppercase tracking-[0.32em] opacity-70">Manufakturprojekt</p>
            <p className="hidden max-w-xs text-right text-[10px] uppercase leading-relaxed tracking-[0.18em] opacity-70 sm:block">
              {AA.place.village}, {AA.place.region}
            </p>
          </div>

          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.42em] opacity-80">Holz + Ton</p>
            <h1 className="aa-glitch mt-3 font-aa-display text-[clamp(3.2rem,12vw,8.8rem)] leading-[0.82] tracking-[-0.045em]">
              {AA.brand.short}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[clamp(1.05rem,2.4vw,1.55rem)] font-medium uppercase leading-snug tracking-[0.22em] text-[var(--aa-tan)]">
              {AA.brand.profession}
            </p>
          </div>

          <div className="grid items-end gap-6 sm:grid-cols-3">
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-75">Gebaut von Hand</p>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-75 sm:text-center">
              Möbel und Keramik
            </p>
            <div className="flex items-end justify-between gap-4 sm:justify-end">
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-75">
                {AA.place.village}, {AA.place.region}
              </p>
              <AaCircleCta href="#besuch">Atelier besuchen</AaCircleCta>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
