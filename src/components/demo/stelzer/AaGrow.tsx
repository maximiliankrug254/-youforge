"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AA_FILM_CHAPTERS } from "@/components/demo/stelzer/aa-content";

export function AaGrow() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="ablauf"
      ref={ref}
      data-aa-tone="tan"
      className="relative z-10 bg-[var(--aa-tan)] text-[var(--aa-ink)]"
      style={{ height: reduce ? "auto" : `${AA_FILM_CHAPTERS.length * 100}vh` }}
    >
      <div className={reduce ? "px-5 py-16 sm:px-8" : "sticky top-0 grid h-dvh grid-rows-[auto_1fr] px-4 pb-8 pt-24 sm:px-8 lg:px-10"}>
        <p className="text-[10px] uppercase tracking-[0.42em] opacity-50">Ablauf</p>
        <div className="relative mt-4 min-h-0 overflow-hidden rounded-[1.8rem]">
          {AA_FILM_CHAPTERS.map((chapter, i) => (
            <CinemaFrame
              key={chapter.title}
              index={i}
              total={AA_FILM_CHAPTERS.length}
              progress={scrollYProgress}
              reduce={!!reduce}
              src={chapter.src}
              alt={`${chapter.title}. ${chapter.note}`}
            />
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#2a2118]/55 to-transparent p-6 text-[var(--aa-cream)] sm:p-10">
            <CinemaCaption progress={scrollYProgress} reduce={!!reduce} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CinemaFrame({
  index,
  total,
  progress,
  reduce,
  src,
  alt,
}: {
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
  src: string;
  alt: string;
}) {
  const start = index / total;
  const mid = (index + 0.55) / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, mid, end], index === 0 ? [1, 1, 0] : [0, 1, index === total - 1 ? 1 : 0]);
  const scale = useTransform(progress, [start, end], [1.08, 1]);

  return (
    <motion.div className="absolute inset-0" style={reduce ? { opacity: index === 0 ? 1 : 0 } : { opacity }}>
      <motion.div className="absolute inset-0" style={reduce ? undefined : { scale }}>
        <Image src={src} alt={alt} fill quality={90} sizes="100vw" className="object-cover" />
      </motion.div>
    </motion.div>
  );
}

function CinemaCaption({
  progress,
  reduce,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
}) {
  const index = useTransform(progress, (v) =>
    Math.min(AA_FILM_CHAPTERS.length - 1, Math.floor(v * AA_FILM_CHAPTERS.length)),
  );
  const title = useTransform(index, (i) => AA_FILM_CHAPTERS[i]?.title ?? "");
  const note = useTransform(index, (i) => AA_FILM_CHAPTERS[i]?.note ?? "");

  if (reduce) {
    const chapter = AA_FILM_CHAPTERS[0];
    return (
      <>
        <p className="text-[10px] uppercase tracking-[0.28em] opacity-80">{chapter.title}</p>
        <p className="mt-1 font-aa-display text-3xl">{chapter.note}</p>
      </>
    );
  }

  return (
    <>
      <motion.p className="text-[10px] uppercase tracking-[0.28em] opacity-80">{title}</motion.p>
      <motion.p className="mt-1 font-aa-display text-3xl sm:text-4xl">{note}</motion.p>
    </>
  );
}
