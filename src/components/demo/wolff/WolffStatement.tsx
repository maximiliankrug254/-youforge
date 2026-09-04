"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { WolffReveal } from "@/components/demo/wolff/WolffReveal";
import { WOLFF_EASE } from "@/components/demo/wolff/wolff-motion";

const LINE_A = ["Lust", "ist", "Aufmerksamkeit."] as const;
const LINE_B = ["Freiheit", "ist", "ein", "sauberer", "Nacken."] as const;

export function WolffStatement() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0.08, 0.32, 0.72],
    [0.25, 1, 0.5],
  );

  return (
    <section
      ref={ref}
      className="relative overflow-x-hidden bg-[var(--wolff-panel)] px-5 py-32 text-[var(--wolff-cream)] sm:px-8 sm:py-40 lg:py-52"
    >
      <motion.div
        className="pointer-events-none absolute left-[18%] top-1/2 h-[55vmin] w-[55vmin] -translate-y-1/2 rounded-full bg-[var(--wolff-rust)]/22 blur-[110px]"
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.18, 1], x: ["0%", "8%", "0%"], opacity: [0.28, 0.55, 0.28] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <motion.div
        className="relative mx-auto max-w-[1500px]"
        style={reduceMotion ? undefined : { y, opacity }}
      >
        <WolffReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[var(--wolff-brass)]">
            Haltung
          </p>
        </WolffReveal>
        <h2 className="mt-8 max-w-[16ch] font-wolff-display text-[clamp(2.8rem,8vw,6.8rem)] font-medium leading-[0.92] tracking-[-0.03em]">
          <span className="block">
            {LINE_A.map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.22em] inline-block"
                initial={reduceMotion ? false : { y: "0.4em", opacity: 0 }}
                whileInView={{ y: "0em", opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.85, delay: 0.04 + i * 0.08, ease: WOLFF_EASE }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="mt-[0.08em] block italic text-[var(--wolff-brass)]">
            {LINE_B.map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.22em] inline-block"
                initial={reduceMotion ? false : { y: "0.4em", opacity: 0 }}
                whileInView={{ y: "0em", opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.85, delay: 0.32 + i * 0.08, ease: WOLFF_EASE }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h2>
        <WolffReveal delay={0.2}>
          <p className="mt-12 max-w-xl text-[1.12rem] leading-[1.75] text-[var(--wolff-cream)]/48 sm:text-[1.22rem]">
            Hier geht es nicht um Trends. Es geht um das Gesicht, das du morgens
            meinst. Jemand hält dir das Kinn. Die Klinge ist scharf. Danach
            gehst du raus — und die Straße gehört dir wieder.
          </p>
        </WolffReveal>
      </motion.div>
    </section>
  );
}
