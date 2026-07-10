"use client";

import Link from "next/link";
import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import {
  briefingSteps,
  type BriefingStep,
} from "@/lib/briefing";
import { siteConfig } from "@/lib/constants";
import { submitBriefingFromBrowser } from "@/lib/web3forms";
import { cn } from "@/lib/utils";

type Answers = Record<string, string>;

const errorMessages: Record<string, string> = {
  not_configured:
    "Der Briefing-Versand ist noch nicht eingerichtet. Bitte buche einen Termin oder schreib uns direkt per E-Mail.",
  validation: "Bitte prüfe deine Angaben und versuche es erneut.",
  spam: "Senden fehlgeschlagen. Bitte versuche es erneut.",
  upstream:
    "Das Briefing konnte gerade nicht gesendet werden. Versuch es in ein paar Minuten erneut oder buche direkt einen Termin.",
};

export function ProjectBriefingForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [notes, setNotes] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const current = briefingSteps[step];
  const progress = ((step + 1) / briefingSteps.length) * 100;
  const isLastStep = step === briefingSteps.length - 1;

  function setAnswer(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function validateStep(): boolean {
    if (!current) return false;

    if (current.type === "website") {
      return Boolean(answers.websiteHas);
    }

    if (current.required !== false) {
      const value = answers[current.id]?.trim();
      if (!value) return false;
    }

    return true;
  }

  function canSubmit(): boolean {
    return validateStep() && privacyAccepted;
  }

  function goNext() {
    if (!validateStep()) return;
    if (step < briefingSteps.length - 1) {
      setStep((s) => s + 1);
    }
  }

  function goBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  async function handleSubmit() {
    if (!canSubmit()) return;

    setLoading(true);
    setError(null);

    try {
      const result = await submitBriefingFromBrowser({
        ...answers,
        notes,
        botcheck,
      });

      if (!result.ok) {
        setError(errorMessages[result.error] ?? errorMessages.upstream);
        return;
      }

      setDone(true);
    } catch {
      setError(errorMessages.upstream);
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <FadeIn>
        <div className="rounded-2xl border border-accent/30 bg-accent-muted p-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Briefing erhalten
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight">
            Danke — wir melden uns innerhalb von 24 Stunden.
          </h2>
          <p className="mt-3 text-muted">
            Wir schauen uns dein Briefing an und melden uns mit den nächsten
            Schritten.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={siteConfig.calendly} variant="primary">
              Termin buchen →
            </Button>
            <Button href="/" variant="ghost">
              Zur Startseite
            </Button>
          </div>
        </div>
      </FadeIn>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface/30 p-6 sm:p-10">
      {/* Honeypot — für Bots unsichtbar, muss leer bleiben */}
      <label htmlFor="botcheck" className="sr-only" aria-hidden>
        Nicht ausfüllen
      </label>
      <input
        id="botcheck"
        name="botcheck"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={botcheck}
        onChange={(e) => setBotcheck(e.target.value)}
        className="pointer-events-none absolute h-0 w-0 opacity-0"
      />

      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>
            Frage {step + 1} von {briefingSteps.length}
          </span>
          <Link href="/kontakt" className="hover:text-accent">
            ← Zurück zur Auswahl
          </Link>
        </div>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <FadeIn key={current.id}>
        <StepInput
          step={current}
          answers={answers}
          onAnswer={setAnswer}
          onAdvance={() => {
            if (step < briefingSteps.length - 1) {
              window.setTimeout(() => setStep((s) => s + 1), 220);
            }
          }}
          onChoiceSelect={(id, value) => {
            setAnswer(id, value);
            if (step < briefingSteps.length - 1) {
              window.setTimeout(() => setStep((s) => s + 1), 220);
            }
          }}
        />
      </FadeIn>

      {isLastStep && (
        <div className="mt-8 space-y-6 border-t border-border pt-6">
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-muted">
              Noch etwas für uns? <span className="font-normal">(optional)</span>
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Alles, was wir vorab wissen sollten…"
              className={inputClass}
            />
          </div>

          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted">
            <input
              type="checkbox"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-accent"
            />
            <span>
              Ich bin einverstanden, dass meine Angaben zur Bearbeitung meiner
              Anfrage verarbeitet werden. Details in der{" "}
              <Link href="/datenschutz" className="text-accent hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </span>
          </label>
        </div>
      )}

      {error && (
        <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <p>{error}</p>
          <p className="mt-2 text-red-400/80">
            Alternativ:{" "}
            <a href={siteConfig.calendly} className="underline hover:text-red-300">
              Termin buchen
            </a>{" "}
            oder{" "}
            <a href={`mailto:${siteConfig.email}`} className="underline hover:text-red-300">
              E-Mail schreiben
            </a>
          </p>
        </div>
      )}

      <div className="mt-10 flex flex-wrap gap-3">
        {step > 0 && (
          <Button type="button" variant="ghost" onClick={goBack}>
            Zurück
          </Button>
        )}
        {!isLastStep ? (
          <Button
            type="button"
            variant="primary"
            onClick={goNext}
            className={cn(!validateStep() && "pointer-events-none opacity-50")}
          >
            Weiter →
          </Button>
        ) : (
          <Button
            type="button"
            variant="primary"
            onClick={handleSubmit}
            className={cn(
              (loading || !canSubmit()) && "pointer-events-none opacity-50"
            )}
          >
            {loading ? "Wird gesendet…" : "Briefing absenden"}
          </Button>
        )}
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        Lieber direkt reden?{" "}
        <a
          href={siteConfig.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Termin buchen
        </a>
      </p>
    </div>
  );
}

function StepInput({
  step,
  answers,
  onAnswer,
  onAdvance,
  onChoiceSelect,
}: {
  step: BriefingStep;
  answers: Answers;
  onAnswer: (id: string, value: string) => void;
  onAdvance: () => void;
  onChoiceSelect: (id: string, value: string) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        {step.question}
      </h2>
      {step.hint && <p className="mt-2 text-muted">{step.hint}</p>}

      <div className="mt-8">
        {step.type === "text" || step.type === "email" ? (
          <input
            type={step.type}
            value={answers[step.id] ?? ""}
            onChange={(e) => onAnswer(step.id, e.target.value)}
            placeholder={step.placeholder}
            autoFocus
            className={inputClass}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
          />
        ) : null}

        {step.type === "choice" ? (
          <div className="flex flex-wrap gap-3">
            {step.options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChoiceSelect(step.id, opt.value)}
                className={cn(
                  "rounded-full border px-5 py-3 text-sm font-medium transition-all",
                  answers[step.id] === opt.value
                    ? "border-accent bg-accent text-background"
                    : "border-border bg-background hover:border-accent/40"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        ) : null}

        {step.type === "website" ? (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {[
                { value: "yes", label: "Ja" },
                { value: "no", label: "Nein" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onAnswer("websiteHas", opt.value);
                    if (opt.value === "no") onAdvance();
                  }}
                  className={cn(
                    "rounded-full border px-5 py-3 text-sm font-medium transition-all",
                    answers.websiteHas === opt.value
                      ? "border-accent bg-accent text-background"
                      : "border-border bg-background hover:border-accent/40"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {answers.websiteHas === "yes" && (
              <input
                type="url"
                value={answers.websiteUrl ?? ""}
                onChange={(e) => onAnswer("websiteUrl", e.target.value)}
                placeholder="https://deine-website.de"
                autoFocus
                className={inputClass}
              />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/50 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30";
