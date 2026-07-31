"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AtlReveal } from "@/components/demo/atl/AtlReveal";
import { AtlButton } from "@/components/demo/atl/AtlButton";
import { ATL_EASE } from "@/components/demo/atl/atl-motion";
import { ATL_CONTACT } from "@/components/demo/atl/atl-contact";
import { ATL_PILLARS } from "@/components/demo/atl/atl-content";

export function AtlPillars() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(ATL_PILLARS[0].id);

  return (
    <section
      id="saeulen"
      className="relative overflow-x-hidden bg-[var(--atl-void)] px-5 py-20 text-white sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <AtlReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--atl-red)]">
            Leistungen
          </p>
          <h2 className="mt-4 max-w-[14ch] font-atl-display text-[clamp(2.2rem,5.5vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.02em]">
            Drei Disziplinen. Ein Anspruch.
          </h2>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/55 sm:text-base">
            Ob Blech, Technik oder Performance — bei ATL bekommen Sie Handwerk
            mit Haltung. Klar, präzise, ohne Umwege.
          </p>
        </AtlReveal>

        <div className="mt-14 space-y-3 lg:mt-16">
          {ATL_PILLARS.map((pillar, index) => {
            const open = active === pillar.id;
            return (
              <AtlReveal key={pillar.id} delay={index * 0.06}>
                <div className="overflow-hidden border border-white/10 bg-[var(--atl-panel)]">
                  <button
                    type="button"
                    onClick={() => setActive(open ? null : pillar.id)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:gap-6 sm:px-8 sm:py-6"
                    aria-expanded={open}
                  >
                    <span className="font-atl-display text-sm tracking-[0.12em] text-[var(--atl-red)]">
                      {pillar.label}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-atl-display text-2xl font-semibold tracking-tight sm:text-3xl">
                        {pillar.title}
                      </p>
                      <p className="mt-1 text-sm text-white/45">{pillar.tagline}</p>
                    </div>
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-lg text-white/70"
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
                          reduceMotion
                            ? undefined
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.55, ease: ATL_EASE }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-0 border-t border-white/10 lg:grid-cols-12">
                          <div className="relative aspect-[16/10] lg:col-span-5 lg:aspect-auto lg:min-h-[320px]">
                            <Image
                              src={pillar.image}
                              alt={pillar.imageAlt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 42vw"
                              className="object-cover"
                            />
                            <div
                              className="absolute inset-0 bg-gradient-to-t from-[var(--atl-panel)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[var(--atl-panel)]"
                              aria-hidden
                            />
                          </div>

                          <div className="px-5 py-8 sm:px-8 sm:py-10 lg:col-span-7 lg:pl-10">
                            <p className="max-w-xl text-[0.95rem] leading-relaxed text-white/60">
                              {pillar.description}
                            </p>
                            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                              {pillar.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex gap-3 border-b border-white/10 pb-2.5 text-sm text-white/80"
                                >
                                  <span
                                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--atl-red)]"
                                    aria-hidden
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-8">
                              <AtlButton
                                href={`tel:${ATL_CONTACT.phoneTel}`}
                                strength={0}
                                className="inline-flex items-center justify-center rounded-sm bg-[var(--atl-red)] px-6 py-3 text-sm font-semibold text-white"
                              >
                                Termin anfragen
                              </AtlButton>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </AtlReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
