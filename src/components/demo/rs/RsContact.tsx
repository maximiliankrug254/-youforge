"use client";

import { RsReveal } from "@/components/demo/rs/RsReveal";
import { RS_CONTACT } from "@/components/demo/rs/rs-contact";

export function RsContact() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-[var(--rs-ink)] px-6 py-28 text-[var(--rs-cream)] sm:px-8 lg:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,163,90,0.14),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <RsReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--rs-ochre)]">
            Kontakt
          </p>
          <h2 className="mt-5 font-[family-name:var(--font-rs-display)] text-[clamp(2rem,5vw,3.2rem)] font-medium leading-tight tracking-[-0.02em]">
            Kostenlose Besichtigung anfragen
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[rgba(245,241,235,0.68)]">
            Rufen Sie an oder schreiben Sie uns — wir melden uns zeitnah und schauen uns alles in
            Ruhe vor Ort an.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${RS_CONTACT.phoneTel}`}
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--rs-ochre)] px-8 py-3.5 text-sm font-semibold text-[var(--rs-ink)] transition hover:bg-[var(--rs-ochre-hover)] sm:w-auto"
            >
              {RS_CONTACT.phoneDisplay} anrufen
            </a>
            <a
              href={RS_CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-[rgba(245,241,235,0.3)] px-8 py-3.5 text-sm font-semibold transition hover:border-[var(--rs-cream)] hover:bg-[rgba(245,241,235,0.06)] sm:w-auto"
            >
              WhatsApp schreiben
            </a>
          </div>

          <dl className="mx-auto mt-14 grid max-w-2xl gap-6 border-t border-[rgba(245,241,235,0.12)] pt-10 text-left sm:grid-cols-3 sm:text-center">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--rs-ochre)]">
                Adresse
              </dt>
              <dd className="mt-2 text-sm text-[rgba(245,241,235,0.7)]">{RS_CONTACT.address}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--rs-ochre)]">
                Zeiten
              </dt>
              <dd className="mt-2 text-sm text-[rgba(245,241,235,0.7)]">{RS_CONTACT.hours}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--rs-ochre)]">
                E-Mail
              </dt>
              <dd className="mt-2 text-sm">
                <a
                  href={`mailto:${RS_CONTACT.email}`}
                  className="text-[rgba(245,241,235,0.7)] transition hover:text-[var(--rs-ochre)]"
                >
                  {RS_CONTACT.email}
                </a>
              </dd>
            </div>
          </dl>
        </RsReveal>
      </div>

      <p className="relative mt-16 text-center text-[11px] tracking-wide text-[rgba(245,241,235,0.35)]">
        Living Demo von{" "}
        <a href="https://youforge.de" className="underline-offset-2 hover:underline">
          YouForge
        </a>{" "}
        · noch nicht live
      </p>
    </section>
  );
}
