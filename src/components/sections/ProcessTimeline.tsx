"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { process } from "@/lib/constants";

export function ProcessTimeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-t border-border px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel number="05" title="VORGEHEN" />
        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          Wie wir arbeiten.
        </h2>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block" />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <span className="pointer-events-none absolute -top-2 left-0 text-6xl font-bold text-foreground/[0.04] sm:text-7xl">
                  {step.step}
                </span>
                <div className="relative pt-12">
                  <div className="mb-4 hidden h-2 w-2 rounded-full bg-foreground lg:block" />
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
