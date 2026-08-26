"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { ForgeBot } from "@/components/animations/ForgeBot";
import { DemoChatPanel } from "@/components/chat/DemoChatPanel";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AiContentLabel } from "@/components/ui/AiContentLabel";

const outcomes = [
  {
    title: "Anfragen beantworten",
    text: "Öffnungszeiten, Preise, Leistungen — sofort, nicht erst wenn du am Handy bist.",
  },
  {
    title: "Leads vorqualifizieren",
    text: "Der Assistent filtert. Du sprichst mit Leuten, die wirklich wollen.",
  },
  {
    title: "Immer erreichbar",
    text: "Nachts, Sonntag, mitten im Job. Dein Auftritt arbeitet weiter.",
  },
];

export function ChatDemo() {
  const reduce = useReducedMotion();

  return (
    <section
      id="ki-demo"
      className="relative overflow-hidden border-t border-accent/20 bg-[#050505] px-6 py-28 text-white sm:py-36 lg:px-8"
    >
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 18% 40%, rgba(200,255,0,0.14), transparent 60%), radial-gradient(ellipse 50% 55% at 88% 30%, rgba(200,255,0,0.08), transparent 55%), radial-gradient(ellipse 80% 40% at 50% 100%, rgba(200,255,0,0.05), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,255,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Sweep line */}
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
          animate={{ y: [0, 720, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      )}

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn className="mb-14 text-center lg:mb-16">
          <SectionLabel
            number="07"
            title="KI · AUTOMATISIERUNG"
            align="center"
            className="text-white/45"
          />
          <h2 className="mx-auto mt-6 max-w-[18ch] text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Dein digitaler{" "}
            <span className="text-accent">Mitarbeiter.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
            Nicht Spielerei. Ein Assistent auf deiner Website — beantwortet,
            filtert, qualifiziert. 24/7. Gebaut wie der Rest von YouForge: klar,
            hart, wirksam.
          </p>
        </FadeIn>

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 xl:gap-16">
          <FadeIn>
            <div className="relative">
              <ForgeBot />
              <AiContentLabel className="mx-auto mt-1 max-w-sm text-center">
                Synthetische Illustration · kein Foto einer Person
              </AiContentLabel>
              <ul className="mx-auto mt-4 max-w-sm space-y-4 sm:mt-5">
                {outcomes.map((item, i) => (
                  <motion.li
                    key={item.title}
                    className="flex gap-3 border-l border-accent/40 pl-4"
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <div>
                      <p className="text-sm font-medium text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/45">
                        {item.text}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    Live Protocol
                  </p>
                  <p className="mt-1 text-sm text-white/50">
                    Probier echte Kundenszenarien — lokal, ohne Datenversand.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  KI · kein Mensch
                </span>
              </div>

              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-px bg-gradient-to-br from-accent/40 via-accent/10 to-transparent opacity-80"
                  aria-hidden
                />
                <DemoChatPanel
                  variant="embedded"
                  tone="forge"
                  className="relative shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
                />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/kontakt" size="lg">
                  Assistent anfragen →
                </Button>
                <Link
                  href="/leistungen"
                  className="text-sm text-white/50 transition-colors hover:text-accent"
                >
                  Mehr zu KI & Automation
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
