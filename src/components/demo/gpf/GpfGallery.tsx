"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { GpfReveal } from "@/components/demo/gpf/GpfReveal";
import { GPF_GALLERY } from "@/components/demo/gpf/gpf-content";
import { useGpfMediaQuery } from "@/components/demo/gpf/useGpfMediaQuery";

function GalleryCard({
  item,
  portraitClass,
  landscapeClass,
  captionClass,
}: {
  item: (typeof GPF_GALLERY)[number];
  portraitClass: string;
  landscapeClass: string;
  captionClass: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-[2px] bg-[var(--gpf-ink)] ${
        item.portrait ? portraitClass : landscapeClass
      }`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 1024px) 50vw, 45vw"
        className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(15,21,17,0.8)_100%)]"
        aria-hidden
      />
      <figcaption className={captionClass}>{item.label}</figcaption>
    </figure>
  );
}

function GalleryMobile() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-2 px-5 pb-24 sm:gap-3 sm:px-8 sm:pb-28">
      {GPF_GALLERY.map((item) => (
        <GalleryCard
          key={item.src}
          item={item}
          portraitClass="aspect-[4/5]"
          landscapeClass="aspect-[4/5]"
          captionClass="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white"
        />
      ))}
    </div>
  );
}

function GalleryDesktop() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });
  const x = useTransform(smooth, [0, 1], ["0%", "-78%"]);

  return (
    <div ref={ref} className="relative mt-16 h-[340vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          className="flex items-center gap-5 pl-8 will-change-transform"
          style={{ x }}
        >
          {GPF_GALLERY.map((item) => (
            <GalleryCard
              key={item.src}
              item={item}
              portraitClass="h-[72vh] w-[30vw] shrink-0"
              landscapeClass="h-[58vh] w-[44vw] shrink-0"
              captionClass="absolute bottom-5 left-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function GpfGallery() {
  const reduceMotion = useReducedMotion();
  const desktop = useGpfMediaQuery("(min-width: 1024px)");
  const useSticky = desktop && !reduceMotion;

  return (
    <section className="relative bg-[var(--gpf-paper-deep)] text-[var(--gpf-ink)]">
      <div className="mx-auto max-w-[1480px] px-5 pt-24 sm:px-8 sm:pt-32 lg:pt-40">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <GpfReveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--gpf-accent)]">
              Aus der Wetterau
            </p>
            <h2 className="mt-5 font-gpf-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-bold leading-[1] tracking-[-0.03em]">
              Arbeiten, die
              <br />
              <span className="italic">stehen geblieben sind.</span>
            </h2>
          </GpfReveal>
          <GpfReveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.05rem] leading-[1.75] text-[var(--gpf-muted)]">
              Terrassen, Mauern, Zäune, Beete und Parkflächen — fotografiert
              nach der Abnahme, nicht im Katalog.
            </p>
          </GpfReveal>
        </div>
      </div>

      {useSticky ? <GalleryDesktop /> : <GalleryMobile />}
    </section>
  );
}
