"use client";

import Image from "next/image";
import { AureaReveal } from "@/components/demo/aurea/AureaReveal";
import { AureaButton } from "@/components/demo/aurea/AureaButton";
import { AUREA_CONTACT } from "@/components/demo/aurea/aurea-contact";

export function AureaContact() {
  return (
    <section
      id="kontakt"
      className="relative isolate overflow-x-hidden bg-[var(--aurea-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/demo/aurea/04-salon.jpg"
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-cover opacity-[0.16]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,7,0.85)_0%,rgba(8,8,7,0.96)_55%,rgba(8,8,7,1)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <AureaReveal className="lg:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--aurea-copper)]">
              Nächster Schritt
            </p>
            <h2 className="mt-5 font-aurea-display text-[clamp(2.8rem,6.5vw,5.2rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
              Eure Website.
              <br />
              <span className="text-[var(--aurea-copper)]">Dieses Niveau.</span>
            </h2>
            <p className="mt-8 max-w-lg text-[1.1rem] leading-[1.75] text-white/45">
              {AUREA_CONTACT.pitch} In 30 Minuten klären wir, wie euer Salon online
              wirken soll — und was das kostet.
            </p>

            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AureaButton
                href={AUREA_CONTACT.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center bg-[var(--aurea-copper)] px-8 py-4 text-sm font-semibold tracking-wide text-[var(--aurea-ink)] hover:bg-[var(--aurea-copper-hot)] sm:w-auto"
              >
                Termin auf Calendly
              </AureaButton>
              <AureaButton
                href={`mailto:${AUREA_CONTACT.email}?subject=${encodeURIComponent("Living Demo Salon — Anfrage")}`}
                className="inline-flex w-full items-center justify-center border border-white/20 px-8 py-4 text-sm font-semibold tracking-wide text-white hover:border-white/40 sm:w-auto"
              >
                E-Mail schreiben
              </AureaButton>
            </div>
          </AureaReveal>

          <AureaReveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <div className="border border-white/10 bg-[var(--aurea-panel)]/90 p-8 backdrop-blur-md sm:p-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--aurea-copper)]">
                Living Demo
              </p>
              <h3 className="mt-4 font-aurea-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                Kein Novus. Kein Template.
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/45">
                Diese Seite ist ein Beispiel-Atelier — gebaut von YouForge, um zu
                zeigen, was eine Salon-Website für ~20k€ Niveau leisten kann:
                Präsenz, Conversion, Charakter.
              </p>
              <dl className="mt-8 space-y-5 border-t border-white/10 pt-8 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Studio
                  </dt>
                  <dd className="mt-1.5 text-white/65">YouForge</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Kontakt
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${AUREA_CONTACT.email}`}
                      className="text-white/65 hover:text-[var(--aurea-copper)]"
                    >
                      {AUREA_CONTACT.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Web
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={AUREA_CONTACT.youforge}
                      className="text-white/65 hover:text-[var(--aurea-copper)]"
                    >
                      youforge.de
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </AureaReveal>
        </div>
      </div>

      <p className="relative mt-20 text-center text-[11px] tracking-wide text-white/25">
        Living Demo von{" "}
        <a href={AUREA_CONTACT.youforge} className="underline-offset-2 hover:underline">
          YouForge
        </a>{" "}
        · Beispiel-Salon, kein Live-Betrieb
      </p>
    </section>
  );
}
