"use client";

import Image from "next/image";
import { WolffReveal } from "@/components/demo/wolff/WolffReveal";
import { WolffButton } from "@/components/demo/wolff/WolffButton";
import { WOLFF_CONTACT } from "@/components/demo/wolff/wolff-contact";

export function WolffContact() {
  return (
    <section
      id="kontakt"
      className="relative isolate overflow-x-hidden bg-[var(--wolff-ink)] px-5 py-24 text-[var(--wolff-cream)] sm:px-8 sm:py-32 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/demo/wolff/10-street.jpg"
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-cover opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,11,8,0.82)_0%,rgba(18,11,8,0.94)_55%,rgba(18,11,8,1)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <WolffReveal className="lg:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--wolff-brass)]">
              Nächster Schritt
            </p>
            <h2 className="mt-5 font-wolff-display text-[clamp(2.6rem,6.5vw,5rem)] font-medium leading-[0.92] tracking-[-0.03em]">
              Euer Laden.
              <br />
              <span className="italic text-[var(--wolff-brass)]">
                Dieses Niveau.
              </span>
            </h2>
            <p className="mt-8 max-w-lg text-[1.1rem] leading-[1.75] text-[var(--wolff-cream)]/48">
              {WOLFF_CONTACT.pitch} In 30 Minuten klären wir, wie euer
              Herrenbarber online wirken soll — und was das kostet.
            </p>

            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WolffButton
                href={WOLFF_CONTACT.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center bg-[var(--wolff-brass)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--wolff-ink)] hover:bg-[var(--wolff-brass-hot)] sm:w-auto"
              >
                30 Min. Gespräch
              </WolffButton>
              <WolffButton
                href={`mailto:${WOLFF_CONTACT.email}?subject=${encodeURIComponent("Living Demo Barber — Anfrage")}`}
                className="inline-flex w-full items-center justify-center border border-[var(--wolff-cream)]/25 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--wolff-cream)] hover:border-[var(--wolff-cream)]/50 sm:w-auto"
              >
                E-Mail schreiben
              </WolffButton>
            </div>
          </WolffReveal>

          <WolffReveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <div className="border border-[var(--wolff-brass)]/25 bg-[var(--wolff-panel)]/92 p-8 sm:p-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--wolff-brass)]">
                Living Demo
              </p>
              <h3 className="mt-4 font-wolff-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
                Das Gegenteil vom Colour-Atelier.
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--wolff-cream)]/45">
                Beispiel-Herrenbarber, gebaut von YouForge: dunkel, maskulin,
                1970er — mit Preisen, Zeiten und einem Stuhl, den man nehmen
                will.
              </p>
              <dl className="mt-8 space-y-5 border-t border-[var(--wolff-cream)]/12 pt-8 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-[var(--wolff-cream)]/35">
                    Adresse
                  </dt>
                  <dd className="mt-1.5 text-[var(--wolff-cream)]/65">
                    {WOLFF_CONTACT.address}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-[var(--wolff-cream)]/35">
                    Kontakt
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${WOLFF_CONTACT.email}`}
                      className="text-[var(--wolff-cream)]/65 hover:text-[var(--wolff-brass)]"
                    >
                      {WOLFF_CONTACT.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-[var(--wolff-cream)]/35">
                    Web
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={WOLFF_CONTACT.youforge}
                      className="text-[var(--wolff-cream)]/65 hover:text-[var(--wolff-brass)]"
                    >
                      you-forge.de
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </WolffReveal>
        </div>
      </div>

      <p className="relative mt-20 text-center text-[11px] tracking-wide text-[var(--wolff-cream)]/25">
        Living Demo von{" "}
        <a
          href={WOLFF_CONTACT.youforge}
          className="underline-offset-2 hover:underline"
        >
          YouForge
        </a>{" "}
        · Beispiel-Barber, kein Live-Betrieb
      </p>
    </section>
  );
}
