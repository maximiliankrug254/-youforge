"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import { submitWebsiteCheckLead } from "@/lib/web3forms";
import { groessteProbleme } from "@/lib/website-check/pruefungen";
import type { CheckAntwort, CheckErgebnis, CheckFehlerCode, CheckPunkt, PunktStatus } from "@/lib/website-check/types";
import { cn } from "@/lib/utils";

const LADE_SCHRITTE = ["Startseite wird geladen …", "Technik wird geprüft …", "Google-Ladezeit wird abgefragt …", "Ergebnis wird berechnet …"];

const FEHLER_TEXT: Record<CheckFehlerCode, { titel: string; text: string; formular: boolean }> = {
  adresse: {
    titel: "Diese Adresse können wir nicht prüfen.",
    text: "Bitte gib die Adresse einer öffentlichen Website ein, zum Beispiel malermeister-muster.de.",
    formular: false,
  },
  nicht_erreichbar: {
    titel: "Die Website war gerade nicht erreichbar.",
    text: "Prüf die Schreibweise oder versuch es gleich noch einmal. Oder lass uns die Seite von Hand prüfen.",
    formular: true,
  },
  blockiert: {
    titel: "Diese Website blockt automatische Prüfungen.",
    text: "Der Server-Schutz der Seite lässt unseren Schnell-Check nicht herein. Kein Problem: Wir prüfen die Seite von Hand.",
    formular: true,
  },
  zu_viele: {
    titel: "Das waren viele Prüfungen in kurzer Zeit.",
    text: "Bitte warte ein paar Minuten. Oder fordere direkt den vollständigen Bericht an.",
    formular: true,
  },
  intern: {
    titel: "Da ist bei uns etwas schiefgelaufen.",
    text: "Versuch es gleich noch einmal. Oder fordere den Bericht direkt an, wir prüfen von Hand.",
    formular: true,
  },
};

const STATUS_STIL: Record<PunktStatus, { zeichen: string; klasse: string; label: string }> = {
  ok: { zeichen: "✓", klasse: "bg-accent/15 text-accent", label: "In Ordnung" },
  warnung: { zeichen: "!", klasse: "bg-amber-400/15 text-amber-500", label: "Verbesserungswürdig" },
  fehler: { zeichen: "✕", klasse: "bg-red-500/15 text-red-500", label: "Problem" },
  info: { zeichen: "i", klasse: "bg-foreground/10 text-muted", label: "Hinweis" },
};

const ZAEHLER_TEXT: Record<PunktStatus, (anzahl: number) => string> = {
  ok: () => "in Ordnung",
  warnung: () => "verbesserungswürdig",
  fehler: (n) => (n === 1 ? "Problem" : "Probleme"),
  info: (n) => (n === 1 ? "Hinweis" : "Hinweise"),
};

function notenFarbe(note: number) {
  if (note >= 75) return "text-accent";
  if (note >= 50) return "text-amber-500";
  return "text-red-500";
}

export function WebsiteCheck({ startUrl = "" }: { startUrl?: string }) {
  const [eingabe, setEingabe] = useState(startUrl);
  const [falle, setFalle] = useState("");
  const [phase, setPhase] = useState<"eingabe" | "laeuft" | "ergebnis" | "fehler">("eingabe");
  const [schritt, setSchritt] = useState(0);
  const [ergebnis, setErgebnis] = useState<CheckErgebnis | null>(null);
  const [fehler, setFehler] = useState<CheckFehlerCode | null>(null);
  const ergebnisRef = useRef<HTMLDivElement>(null);
  const gestartet = useRef(false);

  async function pruefen(adresse: string) {
    if (!adresse.trim()) return;
    setPhase("laeuft");
    setSchritt(0);
    setErgebnis(null);
    setFehler(null);
    try {
      const res = await fetch("/api/website-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: adresse, firma: falle }),
      });
      const daten = (await res.json()) as CheckAntwort;
      if (daten.ok) {
        setErgebnis(daten.ergebnis);
        setPhase("ergebnis");
      } else {
        setFehler(daten.fehler);
        setPhase("fehler");
      }
    } catch {
      setFehler("intern");
      setPhase("fehler");
    }
  }

  useEffect(() => {
    if (startUrl && !gestartet.current) {
      gestartet.current = true;
      void pruefen(startUrl);
    }
    // nur beim ersten Laden mit ?url=
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phase !== "laeuft") return;
    const timer = window.setInterval(() => setSchritt((s) => Math.min(s + 1, LADE_SCHRITTE.length - 1)), 3500);
    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase === "ergebnis" || phase === "fehler") {
      ergebnisRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [phase]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void pruefen(eingabe);
        }}
        className="rounded-2xl border border-border bg-surface/30 p-4 sm:p-6"
      >
        <label htmlFor="check-url" className="block text-sm font-medium text-muted">
          Adresse deiner Website
        </label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            id="check-url"
            type="text"
            inputMode="url"
            autoComplete="url"
            value={eingabe}
            onChange={(e) => setEingabe(e.target.value)}
            placeholder="malermeister-muster.de"
            className={cn(inputClass, "mt-0 flex-1")}
            disabled={phase === "laeuft"}
          />
          <button
            type="submit"
            disabled={phase === "laeuft" || !eingabe.trim()}
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-background transition-all hover:bg-accent-hover disabled:pointer-events-none disabled:opacity-50"
          >
            {phase === "laeuft" ? "Wird geprüft …" : "Kostenlos prüfen →"}
          </button>
        </div>
        {/* Für Bots unsichtbar, muss leer bleiben */}
        <input
          type="text"
          name="firma"
          tabIndex={-1}
          autoComplete="off"
          value={falle}
          onChange={(e) => setFalle(e.target.value)}
          className="hidden"
          aria-hidden
        />
        <p className="mt-3 text-xs text-muted">Wir prüfen die Startseite. Dauert meist 10–40 Sekunden. Ohne Anmeldung.</p>
      </form>

      <div ref={ergebnisRef} className="scroll-mt-24">
        {phase === "laeuft" && (
          <div className="mt-8 rounded-2xl border border-border bg-surface/30 p-8 text-center" aria-live="polite">
            <div className="mx-auto h-1 w-40 overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-accent transition-all duration-700"
                style={{ width: `${((schritt + 1) / LADE_SCHRITTE.length) * 100}%` }}
              />
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">{LADE_SCHRITTE[schritt]}</p>
          </div>
        )}

        {phase === "fehler" && fehler && (
          <FadeIn>
            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-border bg-surface/30 p-6 sm:p-8">
                <h2 className="text-xl font-bold tracking-tight">{FEHLER_TEXT[fehler].titel}</h2>
                <p className="mt-2 text-muted">{FEHLER_TEXT[fehler].text}</p>
              </div>
              {FEHLER_TEXT[fehler].formular && <LeadFormular website={eingabe} ergebnis={null} hinweis={fehler} />}
            </div>
          </FadeIn>
        )}

        {phase === "ergebnis" && ergebnis && <Ergebnis ergebnis={ergebnis} />}
      </div>
    </div>
  );
}

function Ergebnis({ ergebnis }: { ergebnis: CheckErgebnis }) {
  const probleme = groessteProbleme(ergebnis.punkte);
  const zaehle = (status: PunktStatus) => ergebnis.punkte.filter((p) => p.status === status).length;
  const google = ergebnis.google;
  const googleText = google
    ? google.feld
      ? `Ladezeit aus echten Google-Nutzerdaten${google.feld.quelle === "domain" ? " (ganze Domain)" : ""}`
      : "Ladezeit aus Googles Testlauf am Handy"
    : null;

  return (
    <FadeIn>
      <div className="mt-8 space-y-6">
        <div className="rounded-2xl border border-border bg-surface/30 p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Schnell-Check · {ergebnis.domain}</p>
          <div className="mt-4 flex flex-wrap items-end gap-x-6 gap-y-2">
            <p className={cn("text-6xl font-bold tracking-tight sm:text-7xl", notenFarbe(ergebnis.note))}>
              {ergebnis.note}
              <span className="text-2xl text-muted sm:text-3xl">/100</span>
            </p>
            <p className="pb-2 text-xl font-semibold">{ergebnis.bewertung}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <Zaehler status="ok" anzahl={zaehle("ok")} />
            <Zaehler status="warnung" anzahl={zaehle("warnung")} />
            <Zaehler status="fehler" anzahl={zaehle("fehler")} />
          </div>
          <p className="mt-4 text-sm text-muted">
            {ergebnis.plattform ? `Erkannt: ${ergebnis.plattform}. ` : ""}
            {googleText ? `${googleText}.` : ""}
          </p>
        </div>

        {probleme.length > 0 ? (
          <div className="rounded-2xl border border-border bg-surface/30 p-6 sm:p-8">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              {probleme.length === 1 ? "Deine wichtigste Baustelle" : `Deine ${probleme.length} wichtigsten Baustellen`}
            </h2>
            <ol className="mt-6 space-y-6">
              {probleme.map((p, i) => (
                <li key={p.id} className="flex gap-4">
                  <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold">{p.titel}</p>
                    <p className="mt-1 text-muted">{p.detail}</p>
                    {p.fix && (
                      <p className="mt-2 text-sm">
                        <span className="text-accent">So geht&apos;s:</span> {p.fix}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div className="rounded-2xl border border-accent/30 bg-accent-muted p-6 sm:p-8">
            <h2 className="text-xl font-bold tracking-tight">Auf der Startseite sitzt alles.</h2>
            <p className="mt-2 text-muted">
              Stark. Probleme stecken oft in den Unterseiten: fehlende Telefonnummern, langsame Bilder, doppelte Titel. Die prüft der
              vollständige Bericht.
            </p>
          </div>
        )}

        <details className="group rounded-2xl border border-border bg-surface/30 p-6 sm:p-8">
          <summary className="cursor-pointer list-none font-semibold">
            Alle {ergebnis.punkte.length} Prüfpunkte ansehen <span className="text-muted group-open:hidden">↓</span>
            <span className="hidden text-muted group-open:inline">↑</span>
          </summary>
          <ul className="mt-6 space-y-4">
            {ergebnis.punkte.map((p) => (
              <PunktZeile key={p.id} punkt={p} />
            ))}
          </ul>
        </details>

        <LeadFormular website={ergebnis.url} ergebnis={ergebnis} />

        <p className="text-center text-xs text-muted">
          Automatischer Schnell-Check der Startseite vom {new Date(ergebnis.geprueftAm).toLocaleDateString("de-DE")}. Er zeigt, was
          Google auf deiner Website findet – Platzierungen kann niemand versprechen.
        </p>
      </div>
    </FadeIn>
  );
}

function Zaehler({ status, anzahl }: { status: PunktStatus; anzahl: number }) {
  const stil = STATUS_STIL[status];
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1", stil.klasse)}>
      <span aria-hidden>{stil.zeichen}</span>
      {anzahl} {ZAEHLER_TEXT[status](anzahl)}
    </span>
  );
}

function PunktZeile({ punkt }: { punkt: CheckPunkt }) {
  const stil = STATUS_STIL[punkt.status];
  return (
    <li className="flex gap-3">
      <span
        className={cn("mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold", stil.klasse)}
        aria-label={stil.label}
      >
        {stil.zeichen}
      </span>
      <div>
        <p className="font-medium">{punkt.titel}</p>
        <p className="text-sm text-muted">{punkt.detail}</p>
      </div>
    </li>
  );
}

const LEAD_FEHLER: Record<string, string> = {
  not_configured: "Der Versand ist noch nicht eingerichtet. Schreib uns bitte direkt per E-Mail.",
  validation: "Bitte prüf deinen Namen und deine E-Mail-Adresse.",
  spam: "Senden fehlgeschlagen. Bitte versuch es erneut.",
  domain: "Der Versand ist für diese Domain noch nicht freigegeben. Schreib uns bitte direkt per E-Mail.",
  upstream: "Das hat gerade nicht geklappt. Versuch es in ein paar Minuten erneut oder schreib uns per E-Mail.",
};

function LeadFormular({ website, ergebnis, hinweis }: { website: string; ergebnis: CheckErgebnis | null; hinweis?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [einverstanden, setEinverstanden] = useState(false);
  const [botcheck, setBotcheck] = useState("");
  const [laedt, setLaedt] = useState(false);
  const [fehler, setFehler] = useState<string | null>(null);
  const [fertig, setFertig] = useState(false);

  const kannSenden = name.trim() && email.trim() && einverstanden && !laedt;

  async function senden(e: React.FormEvent) {
    e.preventDefault();
    if (!kannSenden) return;
    setLaedt(true);
    setFehler(null);
    const res = await submitWebsiteCheckLead({ name, email, phone, website, ergebnis, hinweis, botcheck });
    setLaedt(false);
    if (res.ok) setFertig(true);
    else setFehler(LEAD_FEHLER[res.error] ?? LEAD_FEHLER.upstream);
  }

  if (fertig) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent-muted p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Anfrage erhalten</p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight">Danke! Dein Bericht ist in Arbeit.</h2>
        <p className="mt-3 text-muted">
          Wir prüfen deine Website von Hand und melden uns in der Regel innerhalb von 24 Stunden per E-Mail.
        </p>
        <div className="mt-6">
          <Button href={siteConfig.calendly} variant="ghost">
            Lieber gleich sprechen? Termin buchen →
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={senden} className="rounded-2xl border border-accent/30 bg-surface/30 p-6 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Kostenlos</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight">{ergebnis ? "Vollständigen Bericht anfordern" : "Von Hand prüfen lassen"}</h2>
      <ul className="mt-4 space-y-2 text-sm text-muted">
        <li>✓ Alle wichtigen Unterseiten, nicht nur die Startseite</li>
        <li>✓ Ladezeit je Seite – mit dem Bild oder Skript, das bremst</li>
        <li>✓ Konkrete Schritte für dein System (WordPress, Wix, Jimdo …)</li>
        <li>✓ Von Max persönlich geprüft, keine Massenmail</li>
      </ul>

      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        value={botcheck}
        onChange={(e) => setBotcheck(e.target.value)}
        className="hidden"
        aria-hidden
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="block text-sm font-medium text-muted">
            Name
          </label>
          <input id="lead-name" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="lead-email" className="block text-sm font-medium text-muted">
            E-Mail
          </label>
          <input
            id="lead-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lead-phone" className="block text-sm font-medium text-muted">
            Telefon <span className="font-normal">(optional, für Rückfragen)</span>
          </label>
          <input id="lead-phone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
        </div>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted">
        <input
          type="checkbox"
          checked={einverstanden}
          onChange={(e) => setEinverstanden(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-accent"
        />
        <span>
          Ich bin einverstanden, dass meine Angaben{ergebnis ? " und das Prüfergebnis" : ""} zur Bearbeitung meiner Anfrage verarbeitet
          werden. Details in der{" "}
          <Link href="/datenschutz#website-check" className="text-accent hover:underline">
            Datenschutzerklärung
          </Link>
          .
        </span>
      </label>

      {fehler && (
        <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500">
          {fehler}{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={!kannSenden}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-medium text-background transition-all hover:bg-accent-hover disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
      >
        {laedt ? "Wird gesendet …" : "Bericht anfordern →"}
      </button>
    </form>
  );
}

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/50 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30";
