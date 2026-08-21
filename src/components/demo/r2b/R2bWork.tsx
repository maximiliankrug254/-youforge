"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { R2bReveal } from "@/components/demo/r2b/R2bReveal";
import { R2B_CASES } from "@/components/demo/r2b/r2b-content";

function CasePanel({
  item,
  index,
}: {
  item: (typeof R2B_CASES)[number];
  index: number;
}) {
  return (
    <article className="relative h-full w-full shrink-0 overflow-hidden">
      <Image
        src={item.image}
        alt={item.alt}
        fill
        quality={92}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,6,0.35)_0%,rgba(7,7,6,0.15)_38%,rgba(7,7,6,0.92)_100%)] lg:bg-[linear-gradient(90deg,rgba(7,7,6,0.88)_0%,rgba(7,7,6,0.42)_52%,rgba(7,7,6,0.18)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-5 pb-16 sm:px-8 lg:justify-center lg:px-12 lg:pb-0">
        <p className="text-[10px] font-medium uppercase tracking-[0.36em] text-[var(--r2b-brass)]">
          {String(index + 1).padStart(2, "0")} — {item.role}
        </p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-white/50">
          {item.client}
        </p>
        <h3 className="mt-4 max-w-[14ch] font-r2b-display text-[clamp(2.2rem,5.4vw,4.6rem)] font-medium leading-[0.92] tracking-[-0.04em] text-white">
          {item.title}
        </h3>
        <p className="mt-6 max-w-md text-[1.02rem] leading-[1.75] text-white/58">
          {item.text}
        </p>
      </div>
    </article>
  );
}

export function R2bWork() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-200vw"]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="arbeit" className="relative overflow-x-clip bg-[var(--r2b-void)] text-white">
      <div className="px-5 pt-24 sm:px-8 sm:pt-32 lg:hidden">
        <R2bReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--r2b-brass)]">
            Arbeit
          </p>
          <h2 className="mt-4 font-r2b-display text-[clamp(2.4rem,8vw,3.4rem)] font-medium leading-[0.92] tracking-[-0.04em]">
            Wo Handwerk auf Wirkung trifft.
          </h2>
        </R2bReveal>
        <div className="mt-10 space-y-8 pb-8">
          {R2B_CASES.map((item, i) => (
            <div key={item.client} className="relative aspect-[4/5] overflow-hidden">
              <CasePanel item={item} index={i} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="px-12 pt-16">
          <div className="mx-auto flex max-w-[1500px] items-end justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--r2b-brass)]">
                Arbeit
              </p>
              <h2 className="mt-3 font-r2b-display text-5xl font-medium tracking-[-0.04em]">
                Wo Handwerk auf Wirkung trifft.
              </h2>
            </div>
            <p className="max-w-xs text-right text-sm leading-relaxed text-white/40">
              Drei Ausschnitte. Keine leeren Zahlen. Echtes Gewerk, das digital
              denselben Anspruch hat.
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className="relative"
          style={{ height: reduceMotion ? "auto" : "300vh" }}
        >
          <div className="sticky top-0 h-svh overflow-hidden">
            {reduceMotion ? (
              <div className="flex h-full">
                {R2B_CASES.map((item, i) => (
                  <div key={item.client} className="h-full w-screen shrink-0">
                    <CasePanel item={item} index={i} />
                  </div>
                ))}
              </div>
            ) : (
              <motion.div className="flex h-full" style={{ x }}>
                {R2B_CASES.map((item, i) => (
                  <div key={item.client} className="h-full w-screen shrink-0">
                    <CasePanel item={item} index={i} />
                  </div>
                ))}
              </motion.div>
            )}

            <div className="pointer-events-none absolute bottom-10 left-12 right-12 flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                01
              </span>
              <div className="relative h-px flex-1 bg-white/15">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[var(--r2b-brass)]"
                  style={{ width: bar }}
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                03
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
