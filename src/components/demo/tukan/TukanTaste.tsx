"use client";

import Image from "next/image";
import { TUKAN_IMG } from "@/components/demo/tukan/tukan-config";
import { TUKAN_COPY } from "@/components/demo/tukan/tukan-content";
import { TukanReveal } from "@/components/demo/tukan/TukanReveal";

export function TukanTaste() {
  const blocks = [
    {
      img: TUKAN_IMG.passion,
      alt: "Aufgeschnittene Maracuja mit Kernen",
      point: TUKAN_COPY.tastePoints[0],
    },
    {
      img: TUKAN_IMG.macro,
      alt: "Nahaufnahme vom Maracuja-Eis mit Kernen und Frost",
      point: TUKAN_COPY.tastePoints[1],
    },
  ];

  return (
    <section id="eis" className="scroll-mt-20">
      <div className="px-5 py-14 sm:px-10 lg:px-14">
        <TukanReveal>
          <p className="font-tukan-mono text-[12px] uppercase tracking-[0.22em] text-[var(--tukan-sun)]">
            {TUKAN_COPY.chapterEis}
          </p>
          <h2 className="tukan-headline mt-3 max-w-[36rem] text-[clamp(1.85rem,3.2vw,2.75rem)] font-semibold text-white">
            <span className="block">Die Frucht siehst du.</span>
            <span className="mt-1 block">Die 14 Gramm merkst du.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/78">
            {TUKAN_COPY.tasteLead}
          </p>
        </TukanReveal>
      </div>

      <div className="grid lg:grid-cols-2">
        {blocks.map((block) => (
          <article key={block.point.title} className="relative min-h-[72dvh] overflow-hidden">
            <Image
              src={block.img}
              alt={block.alt}
              fill
              quality={90}
              sizes="50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,20,14,0.92)] via-[rgba(7,20,14,0.25)] to-transparent" />
            <div className="relative flex min-h-[72dvh] flex-col justify-end p-6 sm:p-10">
              <h3 className="tukan-headline text-[clamp(1.7rem,3.2vw,2.6rem)] font-semibold leading-[1.12] text-white">
                {block.point.title}
              </h3>
              <p className="mt-4 max-w-[36ch] text-[0.98rem] leading-relaxed text-white/75">
                {block.point.text}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="px-5 py-12 sm:px-10 lg:px-14">
        <p className="max-w-xl text-[1.02rem] leading-relaxed text-white/70">
          <span className="font-semibold text-white">{TUKAN_COPY.tastePoints[2].title}. </span>
          {TUKAN_COPY.tastePoints[2].text}
        </p>
      </div>
    </section>
  );
}
