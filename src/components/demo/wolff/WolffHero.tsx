"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { WolffButton } from "@/components/demo/wolff/WolffButton";
import { WolffMark } from "@/components/demo/wolff/WolffMark";
import { WolffClock } from "@/components/demo/wolff/WolffClock";
import { WOLFF_EASE } from "@/components/demo/wolff/wolff-motion";
import { WOLFF_CONTACT } from "@/components/demo/wolff/wolff-contact";

const LINES = ["Komm als Mann.", "Geh als du."] as const;

export function WolffHero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxOn, setParallaxOn] = useState(false);
  const [ready, setReady] = useState(!!reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 3900);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setParallaxOn(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0.25]);
  const useParallax = !reduceMotion && parallaxOn;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-x-hidden bg-[var(--wolff-ink)] text-[var(--wolff-cream)]"
    >
      <motion.div
        className="absolute inset-0 lg:inset-[-12%] lg:h-[124%]"
        style={useParallax ? { y: bgY, scale: bgScale } : undefined}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.12 }}
          animate={
            ready
              ? reduceMotion
                ? { scale: 1 }
                : { scale: [1.08, 1.16, 1.08], x: ["0%", "1.8%", "-1.2%", "0%"] }
              : undefined
          }
          transition={
            reduceMotion
              ? { duration: 2.1, ease: WOLFF_EASE }
              : { duration: 26, repeat: Infinity, ease: "linear" }
          }
        >
          <Image
            src="/demo/wolff/00-hero.jpg"
            alt="Herrenzimmer Wolff — Nussbaum, Lederstühle, Bernsteinlicht"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,11,8,0.55)_0%,rgba(18,11,8,0.22)_42%,rgba(18,11,8,0.9)_100%)] lg:bg-[linear-gradient(100deg,rgba(18,11,8,0.82)_0%,rgba(18,11,8,0.38)_46%,rgba(18,11,8,0.22)_100%)]"
        style={useParallax ? { opacity: fade } : undefined}
        aria-hidden
      />

      <div
        className="wolff-flicker pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(196,146,58,0.22)_0%,transparent_55%)] mix-blend-soft-light"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] flex-col px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-[max(0.9rem,env(safe-area-inset-top))] sm:px-8 lg:px-14 lg:pb-14 lg:pt-8">
        <motion.header
          className="flex shrink-0 items-center justify-between gap-4"
          initial={reduceMotion ? false : { opacity: 0, y: -14 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9, ease: WOLFF_EASE }}
        >
          <a
            href="#top"
            className="inline-flex items-center gap-3"
            aria-label={WOLFF_CONTACT.brand}
          >
            <WolffMark className="h-8 w-8 text-[var(--wolff-brass)]" />
            <span className="flex flex-col">
              <span className="font-wolff-display text-[1.7rem] font-medium leading-none tracking-[-0.03em] sm:text-[2rem]">
                {WOLFF_CONTACT.short}
              </span>
              <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.34em] text-[var(--wolff-brass)]">
                Herrenbarber
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 text-[11px] font-medium tracking-[0.16em] text-[var(--wolff-cream)]/50 lg:flex">
            {[
              ["#laden", "Laden"],
              ["#service", "Schnitt"],
              ["#maenner", "Männer"],
              ["#stuhl", "Stuhl"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="relative uppercase transition-colors hover:text-[var(--wolff-cream)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--wolff-brass)] after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <WolffButton
            href={WOLFF_CONTACT.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 border border-[var(--wolff-brass)] bg-[var(--wolff-brass)] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--wolff-ink)] hover:bg-[var(--wolff-brass-hot)] sm:px-5"
          >
            Demo anfragen
          </WolffButton>
        </motion.header>

        <motion.div
          className="flex flex-1 flex-col justify-end py-12 sm:py-16 lg:max-w-[880px] lg:py-8 lg:pt-24"
          style={useParallax ? { y: textY } : undefined}
        >
          <motion.p
            className="mb-5 text-[10px] font-medium uppercase tracking-[0.42em] text-[var(--wolff-brass)]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.85, ease: WOLFF_EASE, delay: 0.05 }}
          >
            {WOLFF_CONTACT.region} · seit 1972
            <span className="mx-2 text-[var(--wolff-cream)]/30">·</span>
            <WolffClock />
          </motion.p>

          <h1 className="font-wolff-display text-[clamp(2.6rem,8vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.03em]">
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden py-[0.04em]">
                <motion.span
                  className={`block ${i === 1 ? "italic text-[var(--wolff-brass)]" : ""}`}
                  initial={reduceMotion ? false : { y: "118%" }}
                  animate={ready ? { y: "0%" } : undefined}
                  transition={{
                    duration: 1.15,
                    ease: WOLFF_EASE,
                    delay: 0.18 + i * 0.12,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-8 max-w-[32rem] text-[1.08rem] leading-[1.7] text-[var(--wolff-cream)]/62 sm:mt-9 sm:text-[1.14rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, ease: WOLFF_EASE, delay: 0.55 }}
          >
            Vier Stühle in der Occamstraße. Schnitt 42 €, Rasur 38 €, beides 68 €.
            Du sitzt, bis es sitzt — nicht bis der nächste in der Tür steht.
          </motion.p>

          <motion.div
            className="mt-10 flex w-full flex-col gap-3 sm:mt-11 sm:flex-row sm:gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, ease: WOLFF_EASE, delay: 0.7 }}
          >
            <WolffButton
              href="#stuhl"
              className="inline-flex w-full items-center justify-center bg-[var(--wolff-brass)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--wolff-ink)] hover:bg-[var(--wolff-brass-hot)] sm:w-auto"
            >
              Stuhl nehmen
            </WolffButton>
            <WolffButton
              href="#laden"
              className="inline-flex w-full items-center justify-center border border-[var(--wolff-cream)]/30 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--wolff-cream)] hover:border-[var(--wolff-cream)]/60 sm:w-auto"
            >
              Den Laden sehen
            </WolffButton>
          </motion.div>

          <motion.dl
            className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-4 border-t border-[var(--wolff-cream)]/15 pt-6 text-[11px] uppercase tracking-[0.18em] text-[var(--wolff-cream)]/45 sm:grid-cols-3"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={{ duration: 0.9, ease: WOLFF_EASE, delay: 0.9 }}
          >
            <div>
              <dt className="text-[var(--wolff-brass)]">Offen</dt>
              <dd className="mt-1.5 normal-case tracking-wide text-[var(--wolff-cream)]/70">
                {WOLFF_CONTACT.hours}
              </dd>
            </div>
            <div>
              <dt className="text-[var(--wolff-brass)]">Stühle</dt>
              <dd className="mt-1.5 normal-case tracking-wide text-[var(--wolff-cream)]/70">
                {WOLFF_CONTACT.seats} Plätze
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-[var(--wolff-brass)]">Anrufen</dt>
              <dd className="mt-1.5">
                <a
                  href={`tel:${WOLFF_CONTACT.phoneTel}`}
                  className="normal-case tracking-wide text-[var(--wolff-cream)]/70 hover:text-[var(--wolff-brass)]"
                >
                  {WOLFF_CONTACT.phone}
                </a>
              </dd>
            </div>
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
