"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { RS_CONTACT } from "@/components/demo/rs/rs-contact";
import { getRsDeskStatus } from "@/components/demo/rs/rs-hours";

export function RsHero() {
  const reduceMotion = useReducedMotion();
  const [desk, setDesk] = useState({ open: false, label: RS_CONTACT.hours });

  useEffect(() => {
    setDesk(getRsDeskStatus());
  }, []);

  return (
    <section
      id="top"
      className="relative isolate min-h-[100dvh] overflow-hidden bg-[var(--rs-ink)] text-[var(--rs-cream)]"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/demo/rs-entruempelung/hero-room.jpg"
            alt="Heller, besenreiner Raum nach der Entrümpelung"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgba(28,25,23,0.82)] via-[rgba(28,25,23,0.48)] to-[rgba(28,25,23,0.12)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgba(28,25,23,0.78)] via-transparent to-[rgba(28,25,23,0.22)]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col justify-end px-6 pb-24 pt-24 sm:px-8 lg:pb-20">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(196,163,90,0.35)] bg-[rgba(28,25,23,0.45)] px-3 py-1.5 text-[11px] text-[var(--rs-ochre)] backdrop-blur-sm">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                desk.open ? "rs-pulse bg-[#7d9a62]" : "bg-[var(--rs-ochre)]"
              }`}
              aria-hidden
            />
            {desk.label}
          </p>

          <h1 className="font-[family-name:var(--font-rs-display)] text-[clamp(2.4rem,5.6vw,3.9rem)] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--rs-cream)]">
            Sie müssen das nicht selbst runtertragen.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[rgba(245,241,235,0.82)] sm:text-lg">
            Kostenlose Besichtigung, {RS_CONTACT.inspection}. Sie bekommen einen Festpreis — bevor der
            erste Karton fällt. Am vereinbarten Tag übergeben wir den Raum besenrein.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${RS_CONTACT.phoneTel}`}
              className="inline-flex items-center justify-center rounded-full bg-[var(--rs-ochre)] px-7 py-3.5 text-sm font-semibold text-[var(--rs-ink)] transition hover:bg-[var(--rs-ochre-hover)]"
            >
              Besichtigung anrufen
            </a>
            <a
              href={RS_CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(245,241,235,0.35)] px-7 py-3.5 text-sm font-semibold text-[var(--rs-cream)] transition hover:border-[var(--rs-cream)] hover:bg-[rgba(245,241,235,0.06)]"
            >
              Fotos schicken
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-[rgba(245,241,235,0.15)] pt-6 text-[12px] text-[rgba(245,241,235,0.68)] sm:text-[13px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.4, duration: reduceMotion ? 0 : 0.7 }}
        >
          <span>Keller ab {RS_CONTACT.kellerFrom}</span>
          <span className="hidden text-[rgba(245,241,235,0.28)] sm:inline" aria-hidden>
            ·
          </span>
          <span>Wohnung ab {RS_CONTACT.wohnungFrom}</span>
          <span className="hidden text-[rgba(245,241,235,0.28)] sm:inline" aria-hidden>
            ·
          </span>
          <span>{RS_CONTACT.insurance}</span>
        </motion.div>
      </div>
    </section>
  );
}
