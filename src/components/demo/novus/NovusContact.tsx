"use client";

import Image from "next/image";
import { useState } from "react";
import { NovusReveal } from "@/components/demo/novus/NovusReveal";
import { NovusButton } from "@/components/demo/novus/NovusButton";
import { NOVUS_CONTACT } from "@/components/demo/novus/novus-contact";

export function NovusContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Bitte fülle alle Pflichtfelder aus.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }
    const subject = encodeURIComponent(`Termin Novus — ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nE-Mail: ${email.trim()}\n\nNachricht:\n${message.trim()}`,
    );
    window.location.href = `mailto:${NOVUS_CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const fieldClass =
    "mt-2.5 w-full border-0 border-b border-white/20 bg-transparent px-0 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[var(--novus-gold)]";

  return (
    <section
      id="kontakt"
      className="relative isolate overflow-x-hidden bg-[var(--novus-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/demo/novus-hair/04-salon-floor.jpg"
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,8,0.82)_0%,rgba(10,9,8,0.95)_55%,rgba(10,9,8,1)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1480px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <NovusReveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--novus-gold)]">
              Kontakt
            </p>
            <h2 className="mt-5 font-novus-display text-[clamp(2.6rem,6.5vw,5rem)] font-bold leading-[0.9] tracking-[-0.04em]">
              Dein Termin.
              <br />
              <span className="text-[var(--novus-gold)]">Dein Look.</span>
            </h2>
            <p className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-white/50">
              Anrufen, schreiben oder vorbeikommen — wir melden uns persönlich.
              Kein Callcenter. Kein Formular-Nirwana.
            </p>

            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <NovusButton
                href={`tel:${NOVUS_CONTACT.phoneTel}`}
                className="inline-flex w-full items-center justify-center bg-[var(--novus-gold)] px-7 py-4 text-sm font-semibold tracking-wide text-[var(--novus-ink)] hover:bg-[var(--novus-gold-hot)] sm:w-auto"
              >
                {NOVUS_CONTACT.phoneDisplay}
              </NovusButton>
              <NovusButton
                href={NOVUS_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center border border-white/20 px-7 py-4 text-sm font-semibold tracking-wide text-white hover:border-white/40 sm:w-auto"
              >
                {NOVUS_CONTACT.instagramHandle}
              </NovusButton>
            </div>

            <dl className="mt-14 space-y-6 border-t border-white/10 pt-10">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--novus-gold)]">
                  Salon
                </dt>
                <dd className="mt-2 whitespace-pre-line text-sm text-white/60">
                  {NOVUS_CONTACT.brand}
                  {"\n"}
                  {NOVUS_CONTACT.addressLine1}
                  {"\n"}
                  {NOVUS_CONTACT.addressLine2}
                  {"\n"}
                  {NOVUS_CONTACT.addressLine3}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--novus-gold)]">
                  Öffnungszeiten
                </dt>
                <dd className="mt-2 space-y-1 text-sm text-white/60">
                  {NOVUS_CONTACT.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between gap-6 border-b border-white/5 py-1.5 last:border-0"
                    >
                      <span>{h.day}</span>
                      <span className="text-white/45">{h.time}</span>
                    </div>
                  ))}
                  <p className="pt-2 text-xs text-white/35">
                    {NOVUS_CONTACT.hoursNote}
                  </p>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--novus-gold)]">
                  E-Mail
                </dt>
                <dd className="mt-2 text-sm">
                  <a
                    href={`mailto:${NOVUS_CONTACT.email}`}
                    className="text-white/60 hover:text-[var(--novus-gold)]"
                  >
                    {NOVUS_CONTACT.email}
                  </a>
                </dd>
              </div>
            </dl>
          </NovusReveal>

          <NovusReveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="border border-white/10 bg-[var(--novus-panel)]/90 p-7 backdrop-blur-md sm:p-10 lg:p-12">
              <h3 className="font-novus-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
                Nachricht senden
              </h3>
              <p className="mt-2 text-sm text-white/40">Pflichtfelder mit *</p>

              {sent ? (
                <div className="mt-10 border border-[var(--novus-gold)]/35 bg-[var(--novus-gold)]/10 px-6 py-7">
                  <p className="font-novus-display text-xl font-bold">
                    Bereit zum Versand
                  </p>
                  <p className="mt-3 text-sm text-white/55">
                    Dein E-Mail-Programm sollte sich öffnen. Falls nicht:{" "}
                    <a
                      href={`mailto:${NOVUS_CONTACT.email}`}
                      className="text-[var(--novus-gold)] underline-offset-2 hover:underline"
                    >
                      {NOVUS_CONTACT.email}
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-10 space-y-7" noValidate>
                  <div>
                    <label
                      htmlFor="novus-name"
                      className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
                    >
                      Name *
                    </label>
                    <input
                      id="novus-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={fieldClass}
                      placeholder="Dein Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="novus-email"
                      className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
                    >
                      E-Mail *
                    </label>
                    <input
                      id="novus-email"
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
                      htmlFor="novus-message"
                      className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="novus-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${fieldClass} resize-y`}
                      placeholder="Worum geht's — Schnitt, Colour, Braut?"
                      required
                    />
                  </div>
                  {error ? (
                    <p className="text-sm text-[var(--novus-gold)]" role="alert">
                      {error}
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center bg-[var(--novus-gold)] px-8 py-4 text-sm font-semibold tracking-wide text-[var(--novus-ink)] hover:bg-[var(--novus-gold-hot)] sm:w-auto"
                  >
                    Absenden
                  </button>
                </form>
              )}
            </div>
          </NovusReveal>
        </div>

        <NovusReveal delay={0.05}>
          <div
            id="impressum"
            className="mt-24 border-t border-white/10 pt-12 text-sm text-white/35"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--novus-gold)]">
              Impressum
            </p>
            <p className="mt-4 leading-relaxed">
              {NOVUS_CONTACT.brand} · Inhaber: {NOVUS_CONTACT.owner}
              <br />
              Salon: {NOVUS_CONTACT.address}
              <br />
              Anschrift (rechtlich): {NOVUS_CONTACT.legalAddress}
              <br />
              Telefon: {NOVUS_CONTACT.phoneDisplay} · E-Mail:{" "}
              {NOVUS_CONTACT.email}
            </p>
          </div>
        </NovusReveal>
      </div>

      <p className="relative mt-16 text-center text-[11px] tracking-wide text-white/25">
        Living Demo von{" "}
        <a href="https://you-forge.de" className="underline-offset-2 hover:underline">
          YouForge
        </a>{" "}
        · noch nicht live
      </p>
    </section>
  );
}
