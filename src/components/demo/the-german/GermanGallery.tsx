"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { GERMAN_GALLERY } from "@/components/demo/the-german/german-services";

export function GermanGallery() {
  const pin = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: pin,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  if (reduce) {
    return (
      <section className="tg-section">
        <div className="tg-film-mobile">
          {GERMAN_GALLERY.map((item) => (
            <article key={item.src} className="tg-film-card">
              <img src={item.src} alt={item.title} />
              <h3 className="tg-h4 tg-upper">{item.title}</h3>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={pin} className="tg-film-pin">
      <div className="tg-film-sticky">
        <motion.div className="tg-film-track" style={{ x }}>
          {GERMAN_GALLERY.map((item) => (
            <article key={item.src} className="tg-film-card">
              <img src={item.src} alt={item.title} />
              <div className="tg-film-caption">
                <h3 className="tg-h4 tg-upper">{item.title}</h3>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
