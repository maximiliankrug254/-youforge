"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FloatingPanels } from "@/components/portfolio/FloatingPanels";
import type { PanelLayout } from "@/lib/work-showcase";
import { cn } from "@/lib/utils";

type WorkChapterProps = {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  description?: string;
  panels: PanelLayout[];
  cta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string; onClick?: () => void };
  onSecondaryClick?: () => void;
  className?: string;
};

export function WorkChapter({
  id,
  label,
  title,
  subtitle,
  description,
  panels,
  cta,
  secondaryCta,
  onSecondaryClick,
  className,
}: WorkChapterProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      data-chapter={id}
      className={cn(
        "relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-28 lg:px-8",
        className
      )}
    >
      <FloatingPanels panels={panels} />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.28em] text-accent"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          {label}
        </motion.p>

        <motion.h2
          className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:tracking-[-0.02em]"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {title}
        </motion.h2>

        {subtitle ? (
          <motion.p
            className="mt-3 text-sm text-muted sm:text-base"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={reduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            ( {subtitle} )
          </motion.p>
        ) : null}

        {description ? (
          <motion.p
            className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            {description}
          </motion.p>
        ) : null}

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          {cta ? (
            <Button href={cta.href} size="lg">
              {cta.label}
            </Button>
          ) : null}
          {secondaryCta ? (
            secondaryCta.onClick || onSecondaryClick ? (
              <Button
                variant="ghost"
                size="lg"
                onClick={secondaryCta.onClick ?? onSecondaryClick}
              >
                {secondaryCta.label}
              </Button>
            ) : (
              <Button href={secondaryCta.href} variant="ghost" size="lg">
                {secondaryCta.label}
              </Button>
            )
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
