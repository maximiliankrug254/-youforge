"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { JenReveal } from "@/components/demo/jen/JenReveal";
import { JenButton } from "@/components/demo/jen/JenButton";
import { JEN_EASE } from "@/components/demo/jen/jen-motion";
import { JEN_CONTACT } from "@/components/demo/jen/jen-contact";
import { JEN_SERVICES } from "@/components/demo/jen/jen-content";

const SERVICE_IMAGES: Record<string, string> = {
  dachreinigung: "/demo/dachservice-jennebach/before-moss.jpg",
  versiegelung: "/demo/dachservice-jennebach/coating-detail.jpg",
  beschichtung: "/demo/dachservice-jennebach/hero-roof.jpg",
  "hof-mauer": "/demo/dachservice-jennebach/about-craft.jpg",
  fassade: "/demo/dachservice-jennebach/tile-closeup.jpg",
};

export function JenServices() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<string>(JEN_SERVICES[0].id);

  return (
    <section
      id="leistungen"
      className="relative overflow-x-hidden bg-[var(--jen-mist)] px-5 py-24 text-[var(--jen-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <JenReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--jen-accent)]">
            Leistungen
          </p>
          <h2 className="mt-5 max-w-[14ch] font-jen-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.94] tracking-[-0.035em]">
            Fünf Disziplinen. Ein Standard.
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.7] text-[var(--jen-muted)]">
            Neueste Technik, klare Beratung, zuverlässige Umsetzung — pünktlich,
            preiswert und fachgerecht.
          </p>
        </JenReveal>

        <div className="mt-16 space-y-0 border-t border-[var(--jen-ink)]/10 lg:mt-20">
          {JEN_SERVICES.map((service, index) => {
            const open = active === service.id;
            return (
              <JenReveal key={service.id} delay={index * 0.04}>
                <div className="border-b border-[var(--jen-ink)]/10">
                  <button
                    type="button"
                    onClick={() => setActive(service.id)}
                    className="group flex w-full items-center gap-4 py-6 text-left sm:gap-8 sm:py-7"
                    aria-expanded={open}
                  >
                    <span className="font-jen-display text-sm tracking-[0.16em] text-[var(--jen-accent)]">
                      {service.label}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`font-jen-display text-2xl font-bold tracking-[-0.02em] transition-colors sm:text-3xl lg:text-[2.15rem] ${
                          open ? "text-[var(--jen-ink)]" : "text-[var(--jen-ink)]/55 group-hover:text-[var(--jen-ink)]"
                        }`}
                      >
                        {service.title}
                      </p>
                      <p className="mt-1 text-sm text-[var(--jen-muted)]">
                        {service.tagline}
                      </p>
                    </div>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center text-lg transition-colors ${
                        open
                          ? "bg-[var(--jen-ink)] text-white"
                          : "bg-[var(--jen-stone)] text-[var(--jen-ink)]/60"
                      }`}
                      aria-hidden
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        initial={
                          reduceMotion ? false : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={
                          reduceMotion ? undefined : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.6, ease: JEN_EASE }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-0 pb-10 lg:grid-cols-12 lg:pb-12">
                          <div className="relative aspect-[16/10] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[340px]">
                            <Image
                              src={SERVICE_IMAGES[service.id]}
                              alt={service.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 42vw"
                              className="object-cover"
                            />
                          </div>

                          <div className="pt-8 lg:col-span-6 lg:col-start-7 lg:pt-2 lg:pl-4">
                            <p className="max-w-xl text-[1.05rem] leading-[1.7] text-[var(--jen-muted)]">
                              {service.description}
                            </p>
                            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                              {service.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-3 text-sm text-[var(--jen-ink)]"
                                >
                                  <span
                                    className="mt-2 h-px w-5 shrink-0 bg-[var(--jen-accent)]"
                                    aria-hidden
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-9">
                              <JenButton
                                href={`tel:${JEN_CONTACT.phoneTel}`}
                                strength={0.15}
                                className="inline-flex items-center justify-center bg-[var(--jen-accent)] px-6 py-3.5 text-sm font-semibold tracking-wide text-white hover:bg-[var(--jen-accent-hot)]"
                              >
                                Beratung anfragen
                              </JenButton>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </JenReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
