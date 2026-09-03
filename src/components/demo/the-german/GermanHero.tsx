"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  GERMAN,
  GERMAN_BASE,
  germanAsset,
  germanWhatsAppUrl,
} from "@/components/demo/the-german/german-config";
import { GERMAN_HOME } from "@/components/demo/the-german/german-content";
import { GermanClock } from "@/components/demo/the-german/GermanClock";
import { GermanHeroFx } from "@/components/demo/the-german/GermanHeroFx";
import { GermanLink } from "@/components/demo/the-german/GermanLink";
import { GermanMagnetic } from "@/components/demo/the-german/GermanMagnetic";
import { GermanSpotlight } from "@/components/demo/the-german/GermanSpotlight";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function CharLine({
  text,
  accent,
  delay,
  reduce,
}: {
  text: string;
  accent?: boolean;
  delay: number;
  reduce: boolean | null;
}) {
  return (
    <span className={`tg-line${accent ? " tg-accent" : ""}`}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={`${text}-${i}`}
          className="tg-char"
          initial={reduce ? false : { y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.7, delay: delay + i * 0.028, ease: EASE }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export function GermanHero() {
  const { hero } = GERMAN_HOME;
  const reduce = useReducedMotion();
  const pin = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: pin,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.28]);
  const veil = useTransform(scrollYProgress, [0, 1], [0.4, 0.62]);
  const lines = [hero.h1Before, hero.h1Accent, ...hero.h1After.split("\n")];

  return (
    <section ref={pin} className="tg-hero-pin">
      <div className="tg-hero">
        <motion.img
          src={hero.image}
          alt={hero.imageAlt}
          className="tg-hero-img"
          style={{ scale: reduce ? 1 : scale }}
        />
        <motion.div className="tg-hero-overlay" style={{ opacity: reduce ? 0.4 : veil }} />
        <GermanSpotlight />
        <GermanHeroFx />
        <div className="tg-container tg-hero-content">
          <div className="tg-hero-copy">
            <motion.div
              className="tg-hero-kicker"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            >
              <span className="tg-suptitle tg-suptitle-light">{hero.eyebrow}</span>
              <span className="tg-hero-de">From Germany to Bali</span>
            </motion.div>

            <h1 className="tg-h1 tg-upper tg-hero-title">
              {lines.map((line, i) => (
                <CharLine
                  key={line}
                  text={line}
                  accent={line === hero.h1Accent}
                  delay={0.35 + i * 0.12}
                  reduce={reduce}
                />
              ))}
            </h1>

            <motion.div
              className="tg-hero-links"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
            >
              <GermanMagnetic>
                <a
                  href={germanWhatsAppUrl()}
                  className="tg-link tg-upper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hero.book}
                  <span className="tg-arrow">
                    <img src={germanAsset("icons/whatsapp.svg")} alt="" width={18} height={18} />
                  </span>
                </a>
              </GermanMagnetic>
              <br />
              <GermanMagnetic>
                <GermanLink href={`${GERMAN_BASE}/dental-care-bali`}>{hero.exploreDental}</GermanLink>
              </GermanMagnetic>
              <GermanMagnetic>
                <GermanLink href={`${GERMAN_BASE}/skin-aesthetics-dermatology-bali`}>
                  {hero.exploreSkin}
                </GermanLink>
              </GermanMagnetic>
              <br />
              <GermanMagnetic>
                <a
                  href={GERMAN.social.instagram}
                  className="tg-link tg-upper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hero.instagram}
                  <span className="tg-arrow">
                    <img src={germanAsset("icons/instagram.svg")} alt="" width={16} height={16} />
                  </span>
                </a>
              </GermanMagnetic>
            </motion.div>
          </div>
          <GermanClock className="tg-hero-clock" showStatus />
        </div>
      </div>
    </section>
  );
}
