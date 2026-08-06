"use client";

import Image from "next/image";
import { useState } from "react";
import { GpfReveal } from "@/components/demo/gpf/GpfReveal";
import { GpfButton } from "@/components/demo/gpf/GpfButton";
import { GPF_CONTACT } from "@/components/demo/gpf/gpf-contact";
import { GPF_DEMO } from "@/components/demo/gpf/gpf-config";
import { GPF_IMG } from "@/components/demo/gpf/gpf-content";

const TOPICS = [
  "Gartenpflege / Pflegepaket",
  "Rasen & Rasenneuanlage",
  "Hecken & Sträucher",
  "Baumpflege / Fällung / Rodung",
  "Terrasse, Wege oder Mauer",
  "Zaun- & Toranlage",
  "Etwas anderes",
] as const;

export function GpfContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [topic, setTopic] = useState<string>(TOPICS[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Bitte füllen Sie Name, Telefon und Nachricht aus.");
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }
    const subject = encodeURIComponent(`Gartenanfrage — ${name.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Telefon: ${phone.trim()}`,
        `E-Mail: ${email.trim() || "—"}`,
        `Ort: ${place.trim() || "—"}`,
        `Leistung: ${topic}`,
        "",
        "Nachricht:",
        message.trim(),
      ].join("\n"),
    );
    window.location.href = `mailto:${GPF_CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const fieldClass =
    "mt-2.5 w-full border-0 border-b border-white/20 bg-transparent px-0 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[var(--gpf-accent)]";
  const labelClass =
    "block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45";

  return (
    <section
      id="kontakt"
      className="relative isolate overflow-x-hidden bg-[var(--gpf-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={GPF_IMG.gartenWeit}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.16]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,21,17,0.82)_0%,rgba(15,21,17,0.95)_58%,rgba(15,21,17,1)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1480px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <GpfReveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--gpf-sand)]">
              Kontakt
            </p>
            <h2 className="mt-5 font-gpf-display text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[0.98] tracking-[-0.03em]">
              Reden wir über
              <br />
              <span className="italic text-[var(--gpf-accent-hot)]">
                Ihren Garten.
              </span>
            </h2>
            <p className="mt-7 max-w-md text-[1.05rem] leading-[1.75] text-white/55">
              Ein Anruf reicht. Wir kommen vorbei, schauen uns die Fläche an und
              sagen Ihnen ehrlich, was sinnvoll ist — unverbindlich und
              kostenlos.
            </p>

            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <GpfButton
                href={`tel:${GPF_CONTACT.phoneTel}`}
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--gpf-accent)] px-7 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[var(--gpf-accent-hot)] sm:w-auto"
              >
                {GPF_CONTACT.phoneDisplay}
              </GpfButton>
              <GpfButton
                href={GPF_CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:border-white/45 sm:w-auto"
              >
                WhatsApp
              </GpfButton>
            </div>

            <dl className="mt-14 space-y-7 border-t border-white/10 pt-10">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gpf-sand)]">
                  Adresse
                </dt>
                <dd className="mt-2 whitespace-pre-line text-sm leading-relaxed text-white/60">
                  {GPF_CONTACT.legalName}
                  {"\n"}
                  {GPF_CONTACT.addressLine1}
                  {"\n"}
                  {GPF_CONTACT.addressLine2}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gpf-sand)]">
                  E-Mail
                </dt>
                <dd className="mt-2 text-sm">
                  <a
                    href={`mailto:${GPF_CONTACT.email}`}
                    className="text-white/60 transition-colors hover:text-[var(--gpf-accent-hot)]"
                  >
                    {GPF_CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gpf-sand)]">
                  Erreichbarkeit
                </dt>
                <dd className="mt-2 text-sm text-white/60">
                  {GPF_CONTACT.hours}
                </dd>
              </div>
            </dl>
          </GpfReveal>

          <GpfReveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="border border-white/10 bg-[var(--gpf-panel)]/85 p-7 backdrop-blur-md sm:p-10 lg:p-12">
              <h3 className="font-gpf-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
                Angebot anfragen
              </h3>
              <p className="mt-2 text-sm text-white/40">
                Pflichtfelder mit * · Antwort in der Regel am nächsten Werktag
              </p>

              {sent ? (
                <div className="mt-10 border border-[var(--gpf-accent)]/40 bg-[var(--gpf-accent)]/10 px-6 py-8">
                  <p className="font-gpf-display text-xl font-bold">
                    Bereit zum Versand
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    Ihr E-Mail-Programm sollte sich geöffnet haben. Falls nicht,
                    schreiben Sie direkt an{" "}
                    <a
                      href={`mailto:${GPF_CONTACT.email}`}
                      className="text-[var(--gpf-accent-hot)] underline-offset-2 hover:underline"
                    >
                      {GPF_CONTACT.email}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-10 space-y-7" noValidate>
                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <label htmlFor="gpf-name" className={labelClass}>
                        Name *
                      </label>
                      <input
                        id="gpf-name"
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
                      <label htmlFor="gpf-phone" className={labelClass}>
                        Telefon *
                      </label>
                      <input
                        id="gpf-phone"
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
                      <label htmlFor="gpf-email" className={labelClass}>
                        E-Mail
                      </label>
                      <input
                        id="gpf-email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={fieldClass}
                        placeholder="name@beispiel.de"
                      />
                    </div>
                    <div>
                      <label htmlFor="gpf-place" className={labelClass}>
                        Ort des Gartens
                      </label>
                      <input
                        id="gpf-place"
                        type="text"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        className={fieldClass}
                        placeholder={GPF_DEMO.form.placePlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="gpf-topic" className={labelClass}>
                      Worum geht es?
                    </label>
                    <select
                      id="gpf-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className={`${fieldClass} cursor-pointer`}
                    >
                      {TOPICS.map((t) => (
                        <option
                          key={t}
                          value={t}
                          className="bg-[var(--gpf-panel)] text-white"
                        >
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="gpf-message" className={labelClass}>
                      Ihr Projekt *
                    </label>
                    <textarea
                      id="gpf-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${fieldClass} resize-y`}
                      placeholder="Größe der Fläche, Zustand, was Sie sich vorstellen …"
                      required
                    />
                  </div>

                  {error ? (
                    <p className="text-sm text-[var(--gpf-accent-hot)]" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[var(--gpf-accent)] px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[var(--gpf-accent-hot)] sm:w-auto"
                  >
                    Anfrage absenden
                  </button>
                </form>
              )}
            </div>
          </GpfReveal>
        </div>

        <GpfReveal delay={0.05}>
          <div
            id="impressum"
            className="mt-24 grid gap-10 border-t border-white/10 pt-12 text-sm text-white/35 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gpf-sand)]">
                Impressum
              </p>
              <p className="mt-4 leading-relaxed">
                {GPF_CONTACT.legalName}
                <br />
                {GPF_CONTACT.addressLine1}
                <br />
                {GPF_CONTACT.addressLine2}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gpf-sand)]">
                Kontakt
              </p>
              <p className="mt-4 leading-relaxed">
                Telefon: {GPF_CONTACT.phoneDisplay}
                <br />
                E-Mail: {GPF_CONTACT.email}
                <br />
                {GPF_CONTACT.profession}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gpf-sand)]">
                Einsatzgebiet
              </p>
              <p className="mt-4 leading-relaxed">
                {GPF_DEMO.impressum.regionSummary}
              </p>
            </div>
          </div>
        </GpfReveal>
      </div>

      <p className="relative mt-16 text-center text-[11px] tracking-wide text-white/25">
        Living Demo von{" "}
        <a
          href="https://youforge.de"
          className="underline-offset-2 hover:underline"
        >
          YouForge
        </a>{" "}
        · Konzept-Demo
      </p>
    </section>
  );
}
