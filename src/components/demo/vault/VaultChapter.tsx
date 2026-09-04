"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function VaultChapter({
  label,
  telemetry,
}: {
  label: string;
  telemetry: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const clip = useTransform(
    scrollYProgress,
    [0.12, 0.48],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
  );
  const fill = useTransform(scrollYProgress, [0.12, 0.48], [100, 0]);

  return (
    <section ref={ref} className="relative h-[130vh]">
      <div className="sticky top-0 flex h-dvh items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ clipPath: reduce ? "inset(0% 0% 0% 0%)" : clip }}
        >
          <div className="flex flex-col items-center">
            <span className="h-16 w-px border-l border-dashed border-[var(--vault-bone)]/35 sm:h-24" />
            <span className="my-4 font-vault text-[clamp(1.8rem,5vw,3.4rem)] font-light uppercase tracking-[0.34em] text-[var(--vault-bone)]">
              {label}
            </span>
            <span className="h-16 w-px border-l border-dashed border-[var(--vault-bone)]/35 sm:h-24" />
          </div>
          <p className="absolute right-[8%] top-1/2 hidden origin-center -translate-y-1/2 rotate-90 text-[9px] uppercase tracking-[0.22em] text-[var(--vault-bone)]/35 sm:block">
            {telemetry}
          </p>
          <FillLabel fill={fill} />
        </motion.div>
      </div>
    </section>
  );
}

function FillLabel({ fill }: { fill: ReturnType<typeof useTransform<number, number>> }) {
  const text = useTransform(fill, (v) => `lay ${Math.round(v).toString().padStart(2, "0")}%`);
  return (
    <motion.p className="absolute left-[8%] top-1/2 hidden -translate-y-1/2 -rotate-90 text-[9px] uppercase tracking-[0.22em] text-[var(--vault-bone)]/35 sm:block">
      {text}
    </motion.p>
  );
}
