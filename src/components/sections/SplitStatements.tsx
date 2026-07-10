"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { splitStatements } from "@/lib/constants";

export function SplitStatements() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-t border-border px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel number="01" title="VISION" className="mb-20" />

        <div className="space-y-24 md:space-y-32">
          {splitStatements.map((item, i) => (
            <motion.div
              key={item.statement}
              className="grid gap-6 md:grid-cols-2 md:items-end md:gap-16"
              initial={shouldReduceMotion ? false : { opacity: 0.3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm text-muted md:text-base">{item.context}</p>
              <motion.h2
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
                initial={shouldReduceMotion ? false : { opacity: 0.4, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {item.statement}
              </motion.h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
