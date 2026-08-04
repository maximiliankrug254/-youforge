"use client";

import Image from "next/image";
import { useState } from "react";
import { TiwoReveal } from "@/components/demo/tiwo/TiwoReveal";
import { TiwoButton } from "@/components/demo/tiwo/TiwoButton";
import { TIWO_CONTACT } from "@/components/demo/tiwo/tiwo-contact";

export function TiwoContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }
    const subject = encodeURIComponent(`Anfrage TiWo Fliesen — ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nE-Mail: ${email.trim()}\n\nNachricht:\n${message.trim()}`,
    );
    window.location.href = `mailto:${TIWO_CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const fieldClass =
    "mt-2.5 w-full border-0 border-b border-white/20 bg-transparent px-0 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[var(--tiwo-accent)]";

  return (
    <section
      id="kontakt"
      className="relative isolate overflow-x-hidden bg-[var(--tiwo-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/demo/tiwo-fliesen/haus.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.2]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,18,16,0.78)_0%,rgba(20,18,16,0.94)_55%,rgba(20,18,16,1)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1480px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <TiwoReveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--tiwo-accent)]">
              Kontakt
            </p>
            <h2 className="mt-5 font-tiwo-display text-[clamp(2.6rem,6.5vw,5rem)] font-bold leading-[0.9] tracking-[-0.04em]">
              Bereit für
              <br />
              <span className="text-[var(--tiwo-accent)]">dein Projekt?</span>
            </h2>
            <p className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-white/50">
              Kurz anrufen oder schreiben — wir melden uns persönlich. Kein
              Formular-Nirwana.
            </p>

            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TiwoButton
                href={`tel:${TIWO_CONTACT.phoneTel}`}
                className="inline-flex w-full items-center justify-center bg-[var(--tiwo-accent)] px-7 py-4 text-sm font-semibold tracking-wide text-white hover:bg-[var(--tiwo-accent-hot)] sm:w-auto"
              >
                {TIWO_CONTACT.phoneDisplay}
              </TiwoButton>
              <TiwoButton
                href={`mailto:${TIWO_CONTACT.email}`}
                className="inline-flex w-full items-center justify-center border border-white/20 px-7 py-4 text-sm font-semibold tracking-wide text-white hover:border-white/40 sm:w-auto"
              >
                E-Mail
              </TiwoButton>
            </div>

            <dl className="mt-14 space-y-6 border-t border-white/10 pt-10">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--tiwo-bronze)]">
                  Adresse
                </dt>
                <dd className="mt-2 whitespace-pre-line text-sm text-white/60">
                  {TIWO_CONTACT.brand}
                  {"\n"}
                  {TIWO_CONTACT.addressLine1}
                  {"\n"}
                  {TIWO_CONTACT.addressLine2}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--tiwo-bronze)]">
                  Inhaber
                </dt>
                <dd className="mt-2 text-sm text-white/60">{TIWO_CONTACT.owner}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--tiwo-bronze)]">
                  E-Mail
                </dt>
                <dd className="mt-2 text-sm">
                  <a
                    href={`mailto:${TIWO_CONTACT.email}`}
                    className="text-white/60 hover:text-[var(--tiwo-accent)]"
                  >
                    {TIWO_CONTACT.email}
                  </a>
                </dd>
              </div>
            </dl>
          </TiwoReveal>

          <TiwoReveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="border border-white/10 bg-[var(--tiwo-panel)]/90 p-7 backdrop-blur-md sm:p-10 lg:p-12">
              <h3 className="font-tiwo-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
                Nachricht senden
              </h3>
              <p className="mt-2 text-sm text-white/40">Pflichtfelder mit *</p>

              {sent ? (
                <div className="mt-10 border border-[var(--tiwo-accent)]/35 bg-[var(--tiwo-accent)]/10 px-6 py-7">
                  <p className="font-tiwo-display text-xl font-bold">
                    Bereit zum Versand
                  </p>
                  <p className="mt-3 text-sm text-white/55">
                    Ihr E-Mail-Programm sollte sich öffnen. Falls nicht:{" "}
                    <a
                      href={`mailto:${TIWO_CONTACT.email}`}
                      className="text-[var(--tiwo-accent)] underline-offset-2 hover:underline"
                    >
                      {TIWO_CONTACT.email}
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-10 space-y-7" noValidate>
                  <div>
                    <label
                      htmlFor="tiwo-name"
                      className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
                    >
                      Name *
                    </label>
                    <input
                      id="tiwo-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={fieldClass}
                      placeholder="Ihr Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tiwo-email"
                      className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
                    >
                      E-Mail *
                    </label>
                    <input
                      id="tiwo-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={fieldClass}
                      placeholder="name@beispiel.de"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tiwo-message"
                      className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="tiwo-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${fieldClass} resize-y`}
                      placeholder="Worum geht es bei Ihrem Projekt?"
                      required
                    />
                  </div>
                  {error ? (
                    <p className="text-sm text-[var(--tiwo-accent)]" role="alert">
                      {error}
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center bg-[var(--tiwo-accent)] px-8 py-4 text-sm font-semibold tracking-wide text-white hover:bg-[var(--tiwo-accent-hot)] sm:w-auto"
                  >
                    Absenden
                  </button>
                </form>
              )}
            </div>
          </TiwoReveal>
        </div>

        <TiwoReveal delay={0.05}>
          <div
            id="impressum"
            className="mt-24 border-t border-white/10 pt-12 text-sm text-white/35"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--tiwo-bronze)]">
              Impressum
            </p>
            <p className="mt-4 leading-relaxed">
              {TIWO_CONTACT.brand} · Inhaber: {TIWO_CONTACT.owner}
              <br />
              {TIWO_CONTACT.address}
              <br />
              Telefon: {TIWO_CONTACT.phoneDisplay} · E-Mail: {TIWO_CONTACT.email}
              <br />
              Berufsbezeichnung: {TIWO_CONTACT.profession}
            </p>
          </div>
        </TiwoReveal>
      </div>

      <p className="relative mt-16 text-center text-[11px] tracking-wide text-white/25">
        Living Demo von{" "}
        <a href="https://youforge.de" className="underline-offset-2 hover:underline">
          YouForge
        </a>{" "}
        · noch nicht live
      </p>
    </section>
  );
}
