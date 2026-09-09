"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { RkButton } from "@/components/demo/rk/RkButton";
import { RK_EASE } from "@/components/demo/rk/rk-motion";
import { RK_CONTACT } from "@/components/demo/rk/rk-contact";
import { RK_IMG } from "@/components/demo/rk/rk-config";
import { RK_INTRO_HERO_READY_MS } from "@/components/demo/rk/RkIntroLoader";
import { useRkMediaQuery } from "@/components/demo/rk/useRkMediaQuery";

export function RkHero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxOn = useRkMediaQuery("(min-width: 1024px)");
  const [introDone, setIntroDone] = useState(false);
  const ready = !!reduceMotion || introDone;

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setTimeout(
      () => setIntroDone(true),
      RK_INTRO_HERO_READY_MS,
    );
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);
  const useParallax = !reduceMotion && parallaxOn;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--rk-purple-ink)] text-white"
    >
      {/* Single living photo — slow Ken Burns */}
      <motion.div
        className="absolute inset-0"
        style={useParallax ? { y: bgY } : undefined}
      >
        <motion.div
          className="absolute inset-[-8%]"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1.08, 1.16, 1.08],
                  x: ["0%", "-2.5%", "0%"],
                  y: ["0%", "1.5%", "0%"],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 28,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        >
          <Image
            src={RK_IMG.hero}
            alt="Terrasse mit Markise im Abendlicht über dem Mangfalltal"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_45%]"
          />
        </motion.div>
      </motion.div>

      {/* Soft photographic overlays */}
      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(28,7,28,0.42)_0%,rgba(28,7,28,0.1)_38%,rgba(28,7,28,0.5)_72%,rgba(28,7,28,0.9)_100%)] lg:bg-[linear-gradient(115deg,rgba(28,7,28,0.68)_0%,rgba(28,7,28,0.24)_42%,rgba(28,7,28,0.06)_62%,rgba(28,7,28,0.52)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[55%] bg-[radial-gradient(ellipse_at_bottom,rgba(28,7,28,0.5)_0%,transparent_70%)]"
        aria-hidden
      />

      {/* Warm sunset breathe */}
      {ready && !reduceMotion ? (
        <motion.div
          className="pointer-events-none absolute inset-0 z-[1] mix-blend-soft-light"
          animate={{ opacity: [0.14, 0.32, 0.14] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse 55% 40% at 72% 32%, rgba(255,186,120,0.6) 0%, transparent 70%)",
          }}
          aria-hidden
        />
      ) : null}

      {/* Floating dust in the light */}
      {ready && !reduceMotion ? (
        <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden>
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[var(--rk-lime)]/40"
              style={{
                left: `${12 + ((i * 17) % 70)}%`,
                top: `${20 + ((i * 23) % 45)}%`,
              }}
              animate={{
                y: [0, -24 - (i % 5) * 6, 0],
                opacity: [0, 0.55, 0],
                scale: [0.6, 1.2, 0.6],
              }}
              transition={{
                duration: 5 + (i % 4),
                delay: i * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      ) : null}

      <motion.div
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1480px] flex-col justify-end px-5 pb-[max(7.5rem,calc(env(safe-area-inset-bottom)+5.5rem))] pt-36 sm:px-8 lg:px-12 lg:pb-20 lg:pt-40"
        style={
          useParallax
            ? { y: contentY, opacity: contentOpacity }
            : undefined
        }
      >
        <div className="min-w-0 lg:max-w-[820px]">
          <motion.p
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[var(--rk-lime)] sm:text-[11px]"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.75, ease: RK_EASE, delay: 0.05 }}
          >
            Irschenberg
            <span
              className="mx-3 inline-block h-1 w-1 rounded-full bg-[var(--rk-lime)] align-middle"
              aria-hidden
            />
            Meisterbetrieb seit {RK_CONTACT.since}
          </motion.p>

          <h1 className="w-full min-w-0">
            <motion.span
              className="font-rk-display block w-full text-[clamp(2.35rem,9.4vw,6.8rem)] leading-[0.92] tracking-[0.04em] uppercase drop-shadow-[0_2px_24px_rgba(26,12,18,0.45)]"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 1.05, ease: RK_EASE, delay: 0.12 }}
            >
              Raumkontrast
            </motion.span>
            <motion.span
              className="mt-4 block max-w-[22ch] text-[clamp(1.25rem,3.2vw,2.15rem)] leading-[1.2] text-white/95 drop-shadow-[0_2px_16px_rgba(28,7,28,0.5)] sm:mt-5"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 1, ease: RK_EASE, delay: 0.26 }}
            >
              Wenn Sie abends noch auf der Terrasse sitzen.
            </motion.span>
          </h1>

          <motion.p
            className="mt-6 max-w-[32rem] text-[1.02rem] leading-[1.7] text-white/78 sm:mt-7 sm:text-[1.1rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease: RK_EASE, delay: 0.45 }}
          >
            Markisen auf Maß, geplant mit 15 m² Ausstellung bei Ihnen vor Ort.
            Aufmaß und Beratung kostenlos — Montage durch uns.
          </motion.p>

          <motion.div
            className="mt-9 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease: RK_EASE, delay: 0.58 }}
          >
            <RkButton
              href="/demo/raumkontrast/kontakt"
              className="rk-shine inline-flex w-full items-center justify-center rounded-sm bg-[var(--rk-lime)] px-8 py-4 text-sm font-semibold tracking-wide text-[var(--rk-ink)] transition-colors hover:bg-[var(--rk-lime-deep)] hover:text-white sm:w-auto"
            >
              Kostenloses Aufmaß
            </RkButton>
            <RkButton
              href={`tel:${RK_CONTACT.phoneTel}`}
              className="inline-flex w-full items-center justify-center rounded-sm border border-white/35 bg-black/20 px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-[2px] transition-colors hover:border-[var(--rk-lime)] hover:text-[var(--rk-lime)] sm:w-auto"
            >
              {RK_CONTACT.phoneDisplay}
            </RkButton>
          </motion.div>

          <motion.p
            className="mt-5 text-[12px] tracking-wide text-white/45"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            {RK_CONTACT.address} · {RK_CONTACT.hours}
          </motion.p>
        </div>

        <motion.div
          className="pointer-events-none absolute bottom-8 right-5 hidden flex-col items-end gap-2 sm:right-8 lg:bottom-16 lg:right-12 lg:flex"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: 1, duration: 0.7 }}
          aria-hidden
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/40">
            Scroll
          </span>
          <motion.span
            className="h-12 w-px bg-gradient-to-b from-[var(--rk-lime)] to-transparent"
            animate={
              reduceMotion
                ? undefined
                : { scaleY: [0.35, 1, 0.35], opacity: [0.35, 1, 0.35] }
            }
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
