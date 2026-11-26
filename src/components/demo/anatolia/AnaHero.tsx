"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { AnaButton } from "@/components/demo/anatolia/AnaButton";
import { ANA_EASE } from "@/components/demo/anatolia/ana-motion";
import { ANA_CONTACT } from "@/components/demo/anatolia/ana-contact";
import { ANA_FILM, ANA_IMG } from "@/components/demo/anatolia/ana-content";
import { ANA_DEMO } from "@/components/demo/anatolia/ana-config";
import {
  setAnaHeroReady,
  subscribeAnaIntro,
} from "@/components/demo/anatolia/ana-intro-gate";

const { hero } = ANA_DEMO;

export function AnaHero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [introDone, setIntroDone] = useState(false);
  const [loadHeroFilm, setLoadHeroFilm] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const ready = !!reduceMotion || introDone;

  useEffect(() => {
    if (reduceMotion) {
      setIntroDone(true);
      setLoadHeroFilm(true);
      setAnaHeroReady(true);
      return;
    }

    // Schon während des Intros laden — Crossfade ohne dunklen Gap
    return subscribeAnaIntro((phase) => {
      if (phase === "holding" || phase === "done") {
        setIntroDone(true);
        setLoadHeroFilm(true);
      }
    });
  }, [reduceMotion]);

  // Notfall: Text darf nie dauerhaft fehlen
  useEffect(() => {
    if (reduceMotion || introDone) return;
    const t = window.setTimeout(() => setIntroDone(true), 5200);
    return () => window.clearTimeout(t);
  }, [reduceMotion, introDone]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion || !loadHeroFilm) return;
    const markReady = () => {
      setHeroReady(true);
      setAnaHeroReady(true);
    };
    const kick = () => {
      video.muted = true;
      video.play().then(markReady).catch(markReady);
    };
    const onCanPlay = () => kick();
    if (video.readyState >= 3) kick();
    video.addEventListener("canplay", onCanPlay);
    return () => video.removeEventListener("canplay", onCanPlay);
  }, [reduceMotion, loadHeroFilm]);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video || reduceMotion || !loadHeroFilm) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.12 },
    );
    io.observe(section);
    return () => io.disconnect();
  }, [reduceMotion, loadHeroFilm]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const edgeY = useTransform(
    scrollYProgress,
    [0.08, 0.78],
    reduceMotion ? ["0%", "0%"] : ["0%", "16%"],
  );
  const edgeX = useTransform(
    scrollYProgress,
    [0.08, 0.78],
    reduceMotion ? ["0%", "0%"] : ["0%", "14%"],
  );
  const ui = useTransform(scrollYProgress, [0, 0.38, 0.72], [1, 1, 0]);
  const filmScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1.08, 1],
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative z-10 h-[175vh] bg-[var(--ana-ink)] text-white"
    >
      <div className="sticky top-0 h-dvh overflow-hidden">
        <div className="absolute inset-0">
          {reduceMotion ? (
            <Image
              src={ANA_IMG.hero}
              alt={ANA_IMG.heroAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_40%]"
            />
          ) : loadHeroFilm ? (
            <motion.div
              className="absolute inset-0"
              style={{ scale: filmScale }}
            >
              <video
                ref={videoRef}
                className={`absolute inset-0 z-[1] h-full w-full object-cover ${
                  heroReady ? "opacity-100" : "opacity-0"
                }`}
                src={ANA_FILM.hero}
                muted
                loop
                playsInline
                preload="auto"
                autoPlay
              />
            </motion.div>
          ) : null}

          <div
            className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(31,28,23,0.35)_0%,rgba(31,28,23,0.08)_38%,rgba(31,28,23,0.55)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(31,28,23,0.28)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[3] shadow-[inset_0_0_120px_60px_rgba(31,28,23,0.4)]"
            aria-hidden
          />

          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 z-[3] bg-gradient-to-b from-[var(--ana-ink)] via-[var(--ana-ink)]/55 to-transparent"
            style={{ height: edgeY }}
          />
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-[var(--ana-ink)] via-[var(--ana-ink)]/55 to-transparent"
            style={{ height: edgeY }}
          />
          <motion.div
            className="pointer-events-none absolute inset-y-0 left-0 z-[3] bg-gradient-to-r from-[var(--ana-ink)] via-[var(--ana-ink)]/45 to-transparent"
            style={{ width: edgeX }}
          />
          <motion.div
            className="pointer-events-none absolute inset-y-0 right-0 z-[3] bg-gradient-to-l from-[var(--ana-ink)] via-[var(--ana-ink)]/45 to-transparent"
            style={{ width: edgeX }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-28 bg-gradient-to-t from-[var(--ana-ink)] to-transparent sm:h-36"
            aria-hidden
          />
        </div>

        <motion.div
          className="relative z-10 mx-auto flex h-full w-full max-w-[1480px] flex-col justify-end px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pb-16"
          style={reduceMotion ? undefined : { opacity: ui }}
        >
          <div className="lg:max-w-[1040px]">
            <motion.p
              className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--ana-amber)] sm:text-[11px]"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.75, ease: ANA_EASE, delay: 0.08 }}
            >
              {hero.eyebrow}
              <span
                className="mx-3 inline-block h-1 w-1 rounded-full bg-[var(--ana-amber)] align-middle ana-pulse"
                aria-hidden
              />
              Live · {ANA_CONTACT.sinceLabel}
            </motion.p>

            <h1 className="font-ana-display">
              <span className="block overflow-hidden py-[0.02em]">
                <motion.span
                  className="block text-[clamp(3.8rem,13vw,9.2rem)] font-semibold leading-[0.84] tracking-[-0.05em]"
                  initial={reduceMotion ? false : { y: "110%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{ duration: 1.1, ease: ANA_EASE, delay: 0.14 }}
                >
                  {hero.brandLine}
                </motion.span>
              </span>
              <span className="mt-4 block overflow-hidden sm:mt-5">
                <motion.span
                  className="block max-w-[18ch] text-[clamp(1.45rem,3.6vw,2.55rem)] font-medium leading-[1.12] tracking-[-0.02em] text-white/90"
                  initial={reduceMotion ? false : { y: "115%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{ duration: 1, ease: ANA_EASE, delay: 0.28 }}
                >
                  {hero.headline}
                </motion.span>
              </span>
            </h1>

            <motion.p
              className="mt-7 max-w-xl text-[1.08rem] leading-[1.7] text-white/72 sm:text-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.85, ease: ANA_EASE, delay: 0.42 }}
            >
              {hero.text}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, ease: ANA_EASE, delay: 0.55 }}
            >
              <AnaButton
                href="#kontakt"
                data-ana-hot="Anfrage"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--ana-amber)] px-7 py-4 text-sm font-semibold tracking-wide text-[var(--ana-ink)] shadow-[0_0_36px_rgba(239,184,37,0.28)]"
              >
                Projekt besprechen
              </AnaButton>
              <AnaButton
                href="#cinema"
                strength={0.14}
                data-ana-hot="Film"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-7 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm"
              >
                Film ansehen
              </AnaButton>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 hidden items-end justify-between border-t border-white/15 pt-5 text-[11px] uppercase tracking-[0.24em] text-white/45 lg:flex"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={{ duration: 0.9, ease: ANA_EASE, delay: 0.7 }}
          >
            <span>
              {ANA_CONTACT.addressLine1}, {ANA_CONTACT.addressLine2}
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--ana-amber)] ana-pulse" />
              Scrollen
            </span>
            <span>{ANA_CONTACT.phoneDisplay}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
