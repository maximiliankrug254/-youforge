"use client";

import { useState } from "react";
import { JenReveal } from "@/components/demo/jen/JenReveal";
import { JenButton } from "@/components/demo/jen/JenButton";
import { JEN_CONTACT } from "@/components/demo/jen/jen-contact";

export function JenContact() {
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

    const subject = encodeURIComponent(
      `Anfrage Dachservice — ${name.trim()}`,
    );
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nE-Mail: ${email.trim()}\n\nNachricht:\n${message.trim()}`,
    );
    window.location.href = `mailto:${JEN_CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const fieldClass =
    "mt-2.5 w-full border-0 border-b border-white/20 bg-transparent px-0 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[var(--jen-accent)]";

  return (
    <section
      id="kontakt"
      className="relative overflow-x-hidden bg-[var(--jen-ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-44"
    >
      <div className="relative mx-auto max-w-[1480px]">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <JenReveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--jen-accent)]">
              Kontakt
            </p>
            <h2 className="mt-5 font-jen-display text-[clamp(2.6rem,6vw,4.75rem)] font-bold leading-[0.92] tracking-[-0.035em]">
              Sprechen wir über Ihr Dach.
            </h2>
            <p className="mt-7 max-w-md text-[1.05rem] leading-[1.7] text-white/50">
              Unverbindliches Angebot, Termin oder Frage — wir melden uns
              persönlich.
            </p>

            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <JenButton
                href={`tel:${JEN_CONTACT.phoneTel}`}
                strength={0.18}
                className="inline-flex w-full items-center justify-center bg-[var(--jen-accent)] px-7 py-4 text-sm font-semibold tracking-wide text-white hover:bg-[var(--jen-accent-hot)] sm:w-auto"
              >
                {JEN_CONTACT.phoneDisplay}
              </JenButton>
              <JenButton
                href={JEN_CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                strength={0}
                className="inline-flex w-full items-center justify-center border border-white/20 px-7 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:border-white/40 sm:w-auto"
              >
                WhatsApp
              </JenButton>
            </div>

            <dl className="mt-14 space-y-7 border-t border-white/10 pt-10">
              {(
                [
                  ["Adresse", `${JEN_CONTACT.brand}\n${JEN_CONTACT.addressLine1}\n${JEN_CONTACT.addressLine2}`],
                  ["Telefon", JEN_CONTACT.phoneIntl],
                  ["E-Mail", JEN_CONTACT.email],
                  ["Bürozeiten", JEN_CONTACT.hours],
                ] as const
              ).map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--jen-bronze)]">
                    {label}
                  </dt>
                  <dd className="mt-2 whitespace-pre-line text-sm leading-relaxed text-white/60">
                    {label === "Telefon" ? (
                      <a
                        href={`tel:${JEN_CONTACT.phoneTel}`}
                        className="transition-colors hover:text-white"
                      >
                        {value}
                      </a>
                    ) : label === "E-Mail" ? (
                      <a
                        href={`mailto:${JEN_CONTACT.email}`}
                        className="transition-colors hover:text-[var(--jen-accent)]"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </JenReveal>

          <JenReveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="bg-[var(--jen-panel)] p-7 sm:p-10 lg:p-12">
              <h3 className="font-jen-display text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
                Nachricht senden
              </h3>
              <p className="mt-2 text-sm text-white/40">
                Pflichtfelder mit *
              </p>

              {sent ? (
                <div className="mt-10 border border-[var(--jen-accent)]/35 bg-[var(--jen-accent)]/10 px-6 py-7">
                  <p className="font-jen-display text-xl font-bold text-white">
                    Bereit zum Versand
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    Ihr E-Mail-Programm sollte sich öffnen. Falls nicht:{" "}
                    <a
                      href={`mailto:${JEN_CONTACT.email}`}
                      className="text-[var(--jen-accent)] underline-offset-2 hover:underline"
                    >
                      {JEN_CONTACT.email}
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-10 space-y-7" noValidate>
                  <div>
                    <label
                      htmlFor="jen-name"
                      className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
                    >
                      Name *
                    </label>
                    <input
                      id="jen-name"
                      name="name"
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
                      htmlFor="jen-email"
                      className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
                    >
                      E-Mail *
                    </label>
                    <input
                      id="jen-email"
                      name="email"
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
                      htmlFor="jen-message"
                      className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="jen-message"
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${fieldClass} resize-y`}
                      placeholder="Wobei können wir helfen?"
                      required
                    />
                  </div>

                  {error ? (
                    <p className="text-sm text-[var(--jen-accent)]" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center bg-[var(--jen-accent)] px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[var(--jen-accent-hot)] sm:w-auto"
                  >
                    Absenden
                  </button>
                </form>
              )}
            </div>
          </JenReveal>
        </div>

        <JenReveal delay={0.05}>
          <div
            id="impressum"
            className="mt-24 border-t border-white/10 pt-12 text-sm text-white/35"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--jen-bronze)]">
              Impressum
            </p>
            <p className="mt-4 leading-relaxed">
              Verantwortlich: {JEN_CONTACT.brand} · {JEN_CONTACT.owner}
              <br />
              {JEN_CONTACT.address}
              <br />
              Telefon: {JEN_CONTACT.phoneIntl} · E-Mail: {JEN_CONTACT.email}
            </p>
          </div>
        </JenReveal>
      </div>

      <p className="relative mt-16 text-center text-[11px] tracking-wide text-white/25">
        Living Demo von{" "}
        <a
          href="https://youforge.de"
          className="underline-offset-2 hover:underline"
        >
          YouForge
        </a>{" "}
        · noch nicht live
      </p>
    </section>
  );
}
