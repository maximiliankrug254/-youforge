"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { RS_CONTACT } from "@/components/demo/rs/rs-contact";

/** Headline-Varianten — aktiv: 0 */
export const HERO_HEADLINES = [
  "Wir schaffen Platz. Sie behalten den Überblick.",
  "Aus Chaos wird Klarheit — diskret und besenrein.",
  "Wenn der Raum wieder atmen darf.",
] as const;

export function RsHero() {
  const reduceMotion = useReducedMotion();
  const headline = HERO_HEADLINES[0];

  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-[var(--rs-ink)] text-[var(--rs-cream)]">
      <div className="absolute inset-0">
        <Image
          src="/demo/rs-entruempelung/hero-room.jpg"
          alt="Heller, besenreiner Raum — Sinnbild für Erleichterung nach der Entrümpelung"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgba(28,25,23,0.88)] via-[rgba(28,25,23,0.62)] to-[rgba(28,25,23,0.28)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgba(28,25,23,0.75)] via-transparent to-[rgba(28,25,23,0.35)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:px-8 lg:pb-20">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 font-[family-name:var(--font-rs-sans)] text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--rs-ochre)]">
            {RS_CONTACT.brand} · {RS_CONTACT.profession}
          </p>

          <h1 className="font-[family-name:var(--font-rs-display)] text-[clamp(2.35rem,5.5vw,3.85rem)] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--rs-cream)]">
            {headline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[rgba(245,241,235,0.78)] sm:text-lg">
            Entrümpelung, Haushaltsauflösung und Umzug in Ihrer Region — schnell, diskret, zum
            fairen Festpreis.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${RS_CONTACT.phoneTel}`}
              className="inline-flex items-center justify-center rounded-full bg-[var(--rs-ochre)] px-7 py-3.5 text-sm font-semibold text-[var(--rs-ink)] transition hover:bg-[var(--rs-ochre-hover)]"
            >
              {RS_CONTACT.phoneDisplay} anrufen
            </a>
            <a
              href={RS_CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(245,241,235,0.35)] bg-transparent px-7 py-3.5 text-sm font-semibold text-[var(--rs-cream)] transition hover:border-[var(--rs-cream)] hover:bg-[rgba(245,241,235,0.06)]"
            >
              WhatsApp schreiben
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-[rgba(245,241,235,0.15)] pt-6 text-[12px] tracking-wide text-[rgba(245,241,235,0.62)] sm:text-[13px]"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          <span>Kostenlose Besichtigung</span>
          <span className="hidden text-[rgba(245,241,235,0.28)] sm:inline" aria-hidden>
            ·
          </span>
          <span>Festpreis, keine Nachforderungen</span>
          <span className="hidden text-[rgba(245,241,235,0.28)] sm:inline" aria-hidden>
            ·
          </span>
          <span>100% besenreine Übergabe</span>
        </motion.div>
      </div>
    </section>
  );
}
