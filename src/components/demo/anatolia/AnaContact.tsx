"use client";

import { useState } from "react";
import { AnaButton } from "@/components/demo/anatolia/AnaButton";
import { AnaReveal } from "@/components/demo/anatolia/AnaReveal";
import { ANA_CONTACT } from "@/components/demo/anatolia/ana-contact";
import { ANA_DEMO } from "@/components/demo/anatolia/ana-config";

export function AnaContact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-[var(--ana-paper)] px-5 py-24 text-[var(--ana-ink)] sm:px-8 sm:py-32 lg:py-40"
    >
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(196,122,42,0.12),transparent_70%)] blur-2xl"
        aria-hidden
      />
      <div className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-12 lg:gap-16">
        <AnaReveal className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--ana-amber-deep)]">
            Kontakt
          </p>
          <h2 className="mt-5 font-ana-display text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.03em]">
            Nächster
            <br />
            Schritt.
          </h2>
          <p className="mt-6 max-w-md text-[1.05rem] leading-[1.75] text-[var(--ana-muted)]">
            Anrufen oder schreiben — {ANA_CONTACT.owner},{" "}
            {ANA_CONTACT.ownerRole}, meldet sich aus Essen. In der Live-Version
            landet die Anfrage direkt bei Anatolia.
          </p>

          <div className="mt-10 space-y-6 border-t border-[var(--ana-ink)]/10 pt-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--ana-muted)]">
                Telefon
              </p>
              <a
                href={`tel:${ANA_CONTACT.phoneTel}`}
                className="mt-2 block font-ana-display text-2xl font-semibold tracking-[-0.02em] hover:text-[var(--ana-amber-deep)]"
              >
                {ANA_CONTACT.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--ana-muted)]">
                E-Mail
              </p>
              <a
                href={`mailto:${ANA_CONTACT.email}`}
                className="mt-2 block text-lg hover:text-[var(--ana-amber-deep)]"
              >
                {ANA_CONTACT.email}
              </a>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--ana-muted)]">
                Adresse
              </p>
              <a
                href={ANA_CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-lg leading-relaxed hover:text-[var(--ana-amber-deep)]"
              >
                {ANA_CONTACT.addressLine1}
                <br />
                {ANA_CONTACT.addressLine2}
              </a>
            </div>
          </div>
        </AnaReveal>

        <AnaReveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-2xl border border-[var(--ana-ink)]/8 bg-white/60 p-6 shadow-[0_20px_50px_rgba(31,28,23,0.06)] sm:p-8 lg:p-10">
            {sent ? (
              <div className="flex min-h-[320px] flex-col justify-center">
                <p className="font-ana-display text-3xl font-semibold tracking-[-0.03em]">
                  Nachricht erfasst.
                </p>
                <p className="mt-4 max-w-md text-[var(--ana-muted)]">
                  In der Live-Version geht Ihre Anfrage direkt an{" "}
                  {ANA_CONTACT.email}. Für diese Demo bleibt es bei der
                  Bestätigung auf dem Bildschirm.
                </p>
                <AnaButton
                  href={`tel:${ANA_CONTACT.phoneTel}`}
                  className="mt-8 inline-flex w-fit rounded-xl bg-[var(--ana-amber)] px-6 py-3.5 text-sm font-semibold text-[var(--ana-ink)]"
                >
                  Lieber anrufen
                </AnaButton>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--ana-muted)]">
                      Name
                    </span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="mt-2 w-full rounded-xl border border-[var(--ana-ink)]/12 bg-white px-4 py-3.5 text-[0.95rem] outline-none transition focus:border-[var(--ana-amber-deep)]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--ana-muted)]">
                      Telefon
                    </span>
                    <input
                      required
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-2 w-full rounded-xl border border-[var(--ana-ink)]/12 bg-white px-4 py-3.5 text-[0.95rem] outline-none transition focus:border-[var(--ana-amber-deep)]"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--ana-muted)]">
                    E-Mail
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-[var(--ana-ink)]/12 bg-white px-4 py-3.5 text-[0.95rem] outline-none transition focus:border-[var(--ana-amber-deep)]"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--ana-muted)]">
                    Ort / Projekt
                  </span>
                  <input
                    name="place"
                    placeholder={ANA_DEMO.form.placePlaceholder}
                    className="mt-2 w-full rounded-xl border border-[var(--ana-ink)]/12 bg-white px-4 py-3.5 text-[0.95rem] outline-none transition focus:border-[var(--ana-amber-deep)]"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--ana-muted)]">
                    Nachricht
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="mt-2 w-full resize-y rounded-xl border border-[var(--ana-ink)]/12 bg-white px-4 py-3.5 text-[0.95rem] outline-none transition focus:border-[var(--ana-amber-deep)]"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex rounded-xl bg-[var(--ana-ink)] px-7 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-[var(--ana-stone)]"
                >
                  Nachricht senden
                </button>
                <p className="text-xs leading-relaxed text-[var(--ana-muted)]">
                  Living Demo von YouForge. Keine Daten werden gespeichert.
                </p>
              </form>
            )}
          </div>
        </AnaReveal>
      </div>

      <div
        data-ana-foot
        className="mx-auto mt-20 max-w-[1480px] border-t border-[var(--ana-ink)]/10 pt-8 text-sm text-[var(--ana-muted)]"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {ANA_CONTACT.legalName}
          </p>
          <p className="text-xs tracking-[0.04em] text-[var(--ana-muted)]">
            {ANA_DEMO.pitch.footerCredit} ·{" "}
            <a
              href={ANA_DEMO.pitch.footerUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold uppercase tracking-[0.18em] text-[var(--ana-ink)]/70 underline-offset-2 hover:underline"
            >
              {ANA_DEMO.pitch.footerUrlLabel}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
