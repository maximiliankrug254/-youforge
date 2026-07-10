"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WireframeSphere } from "@/components/animations/WireframeSphere";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
      <WireframeSphere />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-muted"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Digitalagentur · DACH
        </motion.p>

        <motion.h1
          className="text-[clamp(1.75rem,5vw,3.25rem)] font-bold uppercase leading-[1.15] tracking-tight"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Die meisten Unternehmen haben kein Website-Problem.
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-muted sm:text-xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Sie haben ein <span className="text-foreground">Digital-Problem.</span>
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button href={siteConfig.calendly} size="lg">
            Termin buchen →
          </Button>
          <Button href="/kontakt" variant="ghost" size="lg">
            Vision schmieden →
          </Button>
          <Button href="/arbeiten" variant="ghost" size="lg" className="border-border/40">
            Unsere Arbeiten
          </Button>
        </motion.div>

        <motion.p
          className="mt-16 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/60"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          {siteConfig.tagline}
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted/50">
          Scroll
        </span>
        <motion.div
          className="h-8 w-px bg-foreground/20"
          animate={shouldReduceMotion ? {} : { scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
