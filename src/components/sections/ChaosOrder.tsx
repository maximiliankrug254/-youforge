"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { chaosTags, orderSteps, painPoints } from "@/lib/constants";

export function ChaosOrder() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative border-t border-border px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <SectionLabel number="02" title="REALITÄT" align="center" />
          <motion.h2
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Erkennst du dich?
          </motion.h2>
        </div>

        <div className="relative grid min-h-[420px] gap-8 lg:grid-cols-2 lg:gap-0">
          <div className="relative hidden border-r border-border/50 lg:block" aria-hidden />

          {/* Chaos — mobile: flex wrap */}
          <div className="relative min-h-[200px] lg:hidden">
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-chaos">
              Chaos
            </span>
            <div className="flex flex-wrap gap-2">
              {chaosTags.map((tag) => (
                <span
                  key={tag.label}
                  className="rounded border border-border bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider"
                >
                  <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-chaos" />
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Chaos — desktop */}
          <div className="relative hidden min-h-[400px] lg:block">
            <span className="absolute left-0 top-0 font-mono text-xs uppercase tracking-widest text-chaos">
              Chaos
            </span>
            {chaosTags.map((tag, i) => (
              <motion.div
                key={tag.label}
                className="absolute rounded border border-border bg-surface px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground"
                style={{
                  top: tag.top,
                  left: tag.left,
                  rotate: `${tag.rotate}deg`,
                }}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-chaos" />
                {tag.label}
              </motion.div>
            ))}
          </div>

          {/* Order */}
          <div className="relative flex flex-col items-center lg:items-end lg:pr-8">
            <span className="mb-8 font-mono text-xs uppercase tracking-widest text-accent lg:absolute lg:right-8 lg:top-0">
              Ordnung
            </span>
            <div className="flex w-full max-w-xs flex-col gap-3">
              {orderSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                >
                  <div className="flex items-center gap-3 rounded border border-border bg-surface/80 px-4 py-3 font-mono text-xs uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {step}
                  </div>
                  {i < orderSteps.length - 1 && (
                    <div className="flex justify-center py-1 text-muted/40">↓</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="mt-16 max-w-md space-y-3"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {painPoints.map((point) => (
            <p key={point} className="text-sm leading-relaxed text-muted">
              {point}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
