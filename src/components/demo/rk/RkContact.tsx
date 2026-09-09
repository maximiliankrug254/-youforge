"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkButton } from "@/components/demo/rk/RkButton";
import { RK_CONTACT } from "@/components/demo/rk/rk-contact";
import { RK_BASE, RK_IMG } from "@/components/demo/rk/rk-config";
import { RK_LEGAL_LINKS } from "@/components/demo/rk/rk-legal";
import { RkLogo } from "@/components/demo/rk/RkLogo";

const TOPICS = [
  "Markise / Gelenkarm / Kassette",
  "ZIP-Screen / Senkrechtmarkise",
  "Wintergarten- oder Pergolamarkise",
  "Plissee, Rollo, Jalousie",
  "Gardinen / Polster / Boden",
  "Insektenschutz",
  "Mobile Ausstellung",
  "Etwas anderes",
] as const;

export function RkContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [topic, setTopic] = useState<string>(TOPICS[0]);
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Bitte füllen Sie Name, Telefon und Nachricht aus.");
      return;
    }
    if (!privacy) {
      setError("Bitte stimmen Sie der Datenverarbeitung zu.");
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }
    const subject = encodeURIComponent(`Anfrage Raumkontrast — ${name.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Telefon: ${phone.trim()}`,
        `E-Mail: ${email.trim() || "—"}`,
        `Ort: ${place.trim() || "—"}`,
        `Thema: ${topic}`,
        "",
        "Nachricht:",
        message.trim(),
      ].join("\n"),
    );
    window.location.href = `mailto:${RK_CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const fieldClass =
    "mt-2.5 w-full border-0 border-b border-white/20 bg-transparent px-0 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[var(--rk-lime)]";
  const labelClass =
    "block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45";

  return (
    <section
      id="kontakt"
      className="relative isolate overflow-x-clip bg-[var(--rk-purple-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={RK_IMG.hero}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,7,28,0.82)_0%,rgba(28,7,28,0.95)_58%,rgba(28,7,28,1)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1480px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <RkReveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-lime)]">
              Kontakt
            </p>
            <h2 className="rk-display-lines font-rk-display mt-5 text-[clamp(2.5rem,6vw,4.6rem)] tracking-[0.01em] uppercase">
              <span>Termin</span>
              <span className="text-[var(--rk-lime)]">vereinbaren.</span>
            </h2>
            <p className="mt-7 max-w-md text-[1.05rem] leading-[1.75] text-white/55">
              Ein Anruf reicht. Wir kommen mit der Ausstellung, nehmen Maß und
              sagen Ihnen, welches System zur Fassade passt. Aufmaß und
              Ausstellung sind kostenlos.
            </p>

            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <RkButton
                href={`tel:${RK_CONTACT.phoneTel}`}
                className="rk-shine inline-flex w-full items-center justify-center rounded-sm bg-[var(--rk-lime)] px-7 py-4 text-sm font-semibold tracking-wide text-[var(--rk-ink)] hover:bg-[var(--rk-lime-deep)] hover:text-white sm:w-auto"
              >
                {RK_CONTACT.phoneDisplay}
              </RkButton>
              <RkButton
                href={RK_CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-sm border border-white/20 px-7 py-4 text-sm font-semibold tracking-wide text-white hover:border-white/45 sm:w-auto"
              >
                WhatsApp
              </RkButton>
            </div>

            <dl className="mt-14 space-y-7 border-t border-white/10 pt-10">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--rk-lime)]">
                  Adresse
                </dt>
                <dd className="mt-2 whitespace-pre-line text-sm leading-relaxed text-white/60">
                  {RK_CONTACT.legalName}
                  {"\n"}
                  {RK_CONTACT.addressLine1}
                  {"\n"}
                  {RK_CONTACT.addressLine2}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--rk-lime)]">
                  E-Mail
                </dt>
                <dd className="mt-2 text-sm">
                  <a
                    href={`mailto:${RK_CONTACT.email}`}
                    className="text-white/60 transition-colors hover:text-[var(--rk-lime)]"
                  >
                    {RK_CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--rk-lime)]">
                  Öffnungszeiten
                </dt>
                <dd className="mt-2 text-sm text-white/60">{RK_CONTACT.hours}</dd>
              </div>
            </dl>
          </RkReveal>

          <RkReveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="border border-white/10 bg-[var(--rk-purple-ink)]/80 p-7 backdrop-blur-md sm:p-10 lg:p-12">
              <h3 className="font-rk-display text-2xl tracking-[0.02em] uppercase sm:text-3xl">
                Kostenloses Aufmaß
              </h3>
              <p className="mt-2 text-sm text-white/40">
                Pflichtfelder mit * · Antwort in der Regel am nächsten Werktag
              </p>

              {sent ? (
                <div className="mt-10 border border-[var(--rk-lime)]/40 bg-[var(--rk-lime)]/10 px-6 py-8">
                  <p className="font-rk-display text-xl uppercase tracking-[0.02em]">
                    Bereit zum Versand
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    Ihr E-Mail-Programm sollte sich geöffnet haben. Falls nicht,
                    schreiben Sie direkt an{" "}
                    <a
                      href={`mailto:${RK_CONTACT.email}`}
                      className="text-[var(--rk-lime)] underline-offset-2 hover:underline"
                    >
                      {RK_CONTACT.email}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-10 space-y-7" noValidate>
                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <label htmlFor="rk-name" className={labelClass}>
                        Name *
                      </label>
                      <input
                        id="rk-name"
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
                      <label htmlFor="rk-phone" className={labelClass}>
                        Telefon *
                      </label>
                      <input
                        id="rk-phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={fieldClass}
                        placeholder="Für Rückfragen"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="rk-email" className={labelClass}>
                        E-Mail
                      </label>
                      <input
                        id="rk-email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={fieldClass}
                        placeholder="name@beispiel.de"
                      />
                    </div>
                    <div>
                      <label htmlFor="rk-place" className={labelClass}>
                        Ort des Objekts
                      </label>
                      <input
                        id="rk-place"
                        type="text"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        className={fieldClass}
                        placeholder="z. B. Irschenberg"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="rk-topic" className={labelClass}>
                      Worum geht es?
                    </label>
                    <select
                      id="rk-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className={`${fieldClass} cursor-pointer`}
                    >
                      {TOPICS.map((t) => (
                        <option
                          key={t}
                          value={t}
                          className="bg-[var(--rk-purple-ink)] text-white"
                        >
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="rk-message" className={labelClass}>
                      Ihr Projekt *
                    </label>
                    <textarea
                      id="rk-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${fieldClass} resize-y`}
                      placeholder="Terrasse, Fenstergröße, Südseite, was Sie sich vorstellen …"
                      required
                    />
                  </div>

                  <label className="flex items-start gap-3 text-sm leading-relaxed text-white/50">
                    <input
                      type="checkbox"
                      checked={privacy}
                      onChange={(e) => setPrivacy(e.target.checked)}
                      className="mt-1 accent-[var(--rk-lime)]"
                      required
                    />
                    <span>
                      Ich habe die{" "}
                      <Link
                        href={`${RK_BASE}/datenschutz`}
                        className="text-[var(--rk-lime)] underline-offset-2 hover:underline"
                      >
                        Datenschutzerklärung
                      </Link>{" "}
                      zur Kenntnis genommen und stimme zu, dass meine Angaben
                      zur Bearbeitung elektronisch verarbeitet werden.
                    </span>
                  </label>

                  {error ? (
                    <p className="text-sm text-[var(--rk-lime)]" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    className="rk-shine inline-flex w-full items-center justify-center rounded-sm bg-[var(--rk-lime)] px-8 py-4 text-sm font-semibold tracking-wide text-[var(--rk-ink)] transition-colors hover:bg-[var(--rk-lime-deep)] hover:text-white sm:w-auto"
                  >
                    Anfrage absenden
                  </button>
                </form>
              )}
            </div>
          </RkReveal>
        </div>

        <RkFooterInner />
      </div>
    </section>
  );
}

export function RkFooterInner({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative grid gap-10 border-t border-white/10 pt-12 text-sm text-white/35 sm:grid-cols-2 lg:grid-cols-4 ${className || "mt-24"}`}
    >
      <div>
        <RkLogo onDark compact className="mb-5" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--rk-lime)]">
          Anbieter
        </p>
        <p className="mt-4 leading-relaxed">
          {RK_CONTACT.legalName}
          <br />
          {RK_CONTACT.owner}
          <br />
          {RK_CONTACT.addressLine1}
          <br />
          {RK_CONTACT.addressLine2}
        </p>
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--rk-lime)]">
          Kontakt
        </p>
        <p className="mt-4 leading-relaxed">
          Telefon: {RK_CONTACT.phoneDisplay}
          <br />
          E-Mail: {RK_CONTACT.email}
          <br />
          {RK_CONTACT.profession}
        </p>
        <p className="mt-4 flex gap-4">
          <a href={RK_CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--rk-lime)]">
            Facebook
          </a>
          <a href={RK_CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--rk-lime)]">
            Instagram
          </a>
        </p>
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--rk-lime)]">
          Einsatzgebiet
        </p>
        <p className="mt-4 leading-relaxed">
          Irschenberg, Mangfalltal, Tegernsee, Schliersee, Miesbach,
          Holzkirchen, Bad Aibling, Rosenheim
        </p>
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--rk-lime)]">
          Rechtliches
        </p>
        <ul className="mt-4 space-y-2 leading-relaxed">
          {RK_LEGAL_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-[var(--rk-lime)]">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="sm:col-span-2 lg:col-span-4 mt-4 text-[11px] tracking-wide text-white/25">
        Gestaltungskonzept von{" "}
        <a href="https://youforge.de" className="underline-offset-2 hover:underline">
          YouForge
        </a>{" "}
        · Living Demo, kein Ersatz der Live-Website
      </p>
    </div>
  );
}
