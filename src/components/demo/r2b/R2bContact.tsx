"use client";

import Image from "next/image";
import { useState } from "react";
import { R2bReveal } from "@/components/demo/r2b/R2bReveal";
import { R2bButton } from "@/components/demo/r2b/R2bButton";
import { R2B_CONTACT } from "@/components/demo/r2b/r2b-contact";
import { R2B_IMG } from "@/components/demo/r2b/r2b-content";

export function R2bContact() {
  const [name, setName] = useState("");
  const [firm, setFirm] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Bitte Name, E-Mail und Anliegen ausfüllen.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Bitte eine gültige E-Mail-Adresse angeben.");
      return;
    }
    const subject = encodeURIComponent(
      `YouForge × Room2Build — ${name.trim()}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Firma: ${firm.trim() || "—"}`,
        `E-Mail: ${email.trim()}`,
        "",
        "Anliegen:",
        message.trim(),
      ].join("\n"),
    );
    window.location.href = `mailto:${R2B_CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const fieldClass =
    "mt-2 w-full border-0 border-b border-white/20 bg-transparent px-0 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/28 focus:border-[var(--r2b-brass)]";
  const labelClass =
    "block text-[10px] font-medium uppercase tracking-[0.22em] text-white/45";

  return (
    <section
      id="kontakt"
      className="relative isolate overflow-x-hidden bg-[var(--r2b-void)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={R2B_IMG.wide}
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,6,0.82)_0%,rgba(7,7,6,0.95)_55%,rgba(7,7,6,1)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <R2bReveal className="lg:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--r2b-brass)]">
              Nächster Schritt
            </p>
            <h2 className="mt-5 font-r2b-display text-[clamp(2.6rem,6.2vw,5.2rem)] font-medium leading-[0.9] tracking-[-0.045em]">
              Diese Seite existiert
              <span className="block italic text-[var(--r2b-brass)]">
                noch nicht live.
              </span>
            </h2>
            <p className="mt-8 max-w-lg text-[1.08rem] leading-[1.8] text-white/48">
              {R2B_CONTACT.pitch} 30 Minuten. Wir machen aus dem Pitch den
              Auftritt.
            </p>

            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row">
              <R2bButton
                href={R2B_CONTACT.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center bg-[var(--r2b-brass)] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--r2b-void)] hover:bg-[var(--r2b-brass-hot)] sm:w-auto"
              >
                30 Min. Gespräch
              </R2bButton>
              <R2bButton
                href={`mailto:${R2B_CONTACT.email}?subject=${encodeURIComponent("YouForge × Room2Build")}`}
                className="inline-flex w-full items-center justify-center border border-white/20 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white hover:border-white/45 sm:w-auto"
              >
                E-Mail schreiben
              </R2bButton>
            </div>

            <dl className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                  Headquarter
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/65">
                  {R2B_CONTACT.legal}
                  <br />
                  {R2B_CONTACT.street}
                  <br />
                  {R2B_CONTACT.city}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                  YouForge
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/65">
                  <a
                    href={`mailto:${R2B_CONTACT.email}`}
                    className="hover:text-[var(--r2b-brass)]"
                  >
                    {R2B_CONTACT.email}
                  </a>
                  <br />
                  <a
                    href={R2B_CONTACT.youforge}
                    className="hover:text-[var(--r2b-brass)]"
                  >
                    youforge.de
                  </a>
                </dd>
              </div>
            </dl>
          </R2bReveal>

          <R2bReveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <form
              onSubmit={onSubmit}
              className="border border-white/10 bg-[var(--r2b-panel)]/80 p-8 backdrop-blur-md sm:p-10"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--r2b-brass)]">
                Meld dich
              </p>
              <h3 className="mt-4 font-r2b-display text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                Lasst uns den Betrieb sichtbar machen.
              </h3>

              <div className="mt-8 space-y-6">
                <label className="block">
                  <span className={labelClass}>Name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={fieldClass}
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>Firma</span>
                  <input
                    value={firm}
                    onChange={(e) => setFirm(e.target.value)}
                    className={fieldClass}
                    autoComplete="organization"
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>E-Mail</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldClass}
                    autoComplete="email"
                    required
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>Anliegen</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${fieldClass} min-h-[96px] resize-none`}
                    required
                  />
                </label>
              </div>

              {error ? (
                <p className="mt-5 text-sm text-red-300">{error}</p>
              ) : null}
              {sent ? (
                <p className="mt-5 text-sm text-[var(--r2b-brass)]">
                  Mail-Programm geöffnet. Wenn nicht — schreibt direkt an{" "}
                  {R2B_CONTACT.email}.
                </p>
              ) : null}

              <button
                type="submit"
                className="mt-8 w-full bg-[var(--r2b-brass)] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--r2b-void)] transition-colors hover:bg-[var(--r2b-brass-hot)]"
              >
                Senden
              </button>
              <p className="mt-5 text-[11px] leading-relaxed text-white/35">
                Mit dem Senden akzeptierst du die{" "}
                <a href={R2B_CONTACT.privacy} className="underline underline-offset-2">
                  Datenschutzrichtlinien
                </a>
                .
              </p>
            </form>
          </R2bReveal>
        </div>
      </div>

      <p className="relative mt-20 text-center text-[11px] tracking-wide text-white/28">
        Spekulatives Redesign von{" "}
        <a href={R2B_CONTACT.youforge} className="underline-offset-2 hover:underline">
          YouForge
        </a>
        {" · "}
        kein offizieller Auftritt von Room2Build
      </p>
    </section>
  );
}
