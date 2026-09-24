"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AA, AA_IMG } from "@/components/demo/stelzer/aa-config";

export function AaHero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const kick = () => {
      video.muted = true;
      video.play().catch(() => undefined);
    };
    kick();
    video.addEventListener("canplay", kick);
    return () => video.removeEventListener("canplay", kick);
  }, []);

  useEffect(() => {
    const section = ref.current;
    const video = videoRef.current;
    if (!section || !video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.15 },
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  const edgeY = useTransform(scrollYProgress, [0.12, 0.82], reduce ? ["0%", "0%"] : ["0%", "8%"]);
  const edgeX = useTransform(scrollYProgress, [0.12, 0.82], reduce ? ["0%", "0%"] : ["0%", "12%"]);
  const ui = useTransform(scrollYProgress, [0, 0.42, 0.72], [1, 1, 0]);

  return (
    <section id="top" ref={ref} data-aa-tone="dark" className="relative z-10 h-[175vh] bg-[var(--aa-tan)] text-white">
      <div className="sticky top-0 h-dvh overflow-hidden">
        <div className="absolute inset-0">
          {reduce ? (
            <Image
              src={AA_IMG.hero}
              alt="Ziegeldächer in Oberhausen"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              className="absolute inset-0 z-[1] h-full w-full object-cover"
              src={AA_IMG.heroFilm}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          )}
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/25 via-transparent to-black/35" />
          <motion.div className="absolute inset-x-0 top-0 z-[3] bg-[var(--aa-tan)]" style={{ height: edgeY }} />
          <motion.div className="absolute inset-x-0 bottom-0 z-[3] bg-[var(--aa-tan)]" style={{ height: edgeY }} />
          <motion.div className="absolute inset-y-0 left-0 z-[3] bg-[var(--aa-tan)]" style={{ width: edgeX }} />
          <motion.div className="absolute inset-y-0 right-0 z-[3] bg-[var(--aa-tan)]" style={{ width: edgeX }} />
          <motion.div
            className="pointer-events-none absolute z-[4] border border-[var(--aa-cream)]/45"
            style={{ top: edgeY, right: edgeX, bottom: edgeY, left: edgeX }}
          />
        </div>

        <motion.div
          className="relative z-10 flex h-full flex-col justify-between px-5 pb-8 pt-24 sm:px-8 lg:px-12"
          style={reduce ? undefined : { opacity: ui }}
        >
          <div className="flex items-start justify-between gap-6">
            <p className="text-[10px] uppercase tracking-[0.32em]">Bedachungen</p>
            <p className="hidden max-w-xs text-right text-[10px] uppercase leading-relaxed tracking-[0.18em] sm:block">
              {AA.place.village}, {AA.place.region}
            </p>
          </div>

          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.42em]">{AA.brand.tagline}</p>
            <h1 className="mt-3 font-aa-display text-[clamp(2.4rem,7vw,5.6rem)] leading-[0.9] tracking-[-0.04em]">
              {AA.brand.short}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[clamp(1.05rem,2.4vw,1.55rem)] font-medium uppercase leading-snug tracking-[0.22em]">
              {AA.brand.profession}
            </p>
          </div>

          <div className="grid items-end gap-6 sm:grid-cols-3">
            <p className="text-[10px] uppercase tracking-[0.2em]">Seit 2022</p>
            <p className="text-[10px] uppercase tracking-[0.2em] sm:text-center">Eigenes Team</p>
            <p className="text-[10px] uppercase tracking-[0.2em] sm:text-right">
              {AA.place.village}, {AA.place.region}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
