"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GERMAN_BASE } from "@/components/demo/the-german/german-config";
import { GermanHeroFx } from "@/components/demo/the-german/GermanHeroFx";
import { GermanScaleImg } from "@/components/demo/the-german/GermanMotion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function GermanPageHero({
  title,
  image,
  alt,
  crumb,
}: {
  title: string;
  image: string;
  alt: string;
  crumb: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="tg-hero-sm">
      <GermanScaleImg
        src={image}
        alt={alt}
        from={0.4}
        to={1.4}
        className="tg-hero-img"
        objectPosition="top"
      />
      <div className="tg-hero-overlay" />
      <GermanHeroFx />
      <div className="tg-container tg-hero-content">
        <div className="tg-center">
          <motion.p
            className="tg-hero-de tg-page-kicker"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            Berawa · Bali · German Precision
          </motion.p>
          <h1 className="tg-h1 tg-upper tg-hero-sm-title">
            <span className="tg-line">
              <motion.span
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.22, ease: EASE }}
              >
                {title}
              </motion.span>
            </span>
          </h1>
          <motion.ul
            className="tg-crumbs"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <li>
              <a href={GERMAN_BASE}>Home</a>
            </li>
            <li>
              <span>{crumb}</span>
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
