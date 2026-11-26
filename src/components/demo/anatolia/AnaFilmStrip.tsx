"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { AnaReveal } from "@/components/demo/anatolia/AnaReveal";
import { ANA_FILM, ANA_IMG } from "@/components/demo/anatolia/ana-content";

export function AnaFilmStrip() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <section className="relative overflow-hidden bg-[var(--ana-ink)] text-white">
      <div className="relative min-h-[85vh]">
        {reduce ? (
          <Image
            src={ANA_IMG.atmCrane}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={ANA_FILM.drone}
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
        <div className="ana-soft-fade" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,28,23,0.62)_0%,rgba(31,28,23,0.16)_55%,rgba(31,28,23,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(239,184,37,0.2),transparent_55%)]" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1480px] flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
          <AnaReveal className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[var(--ana-amber)]">
              Weitwinkel
            </p>
            <h2 className="mt-6 font-ana-display text-[clamp(2.8rem,7vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.04em]">
              Essen.
              <br />
              Und weiter.
            </h2>
            <p className="mt-7 max-w-lg text-[1.1rem] leading-[1.75] text-white/70">
              Von Hilden bis Kleve, von der Hofeinfahrt bis zur Parkplatzanlage —
              derselbe Anspruch an Kante, Unterbau und Übergabe.
            </p>
          </AnaReveal>
        </div>
      </div>
    </section>
  );
}
