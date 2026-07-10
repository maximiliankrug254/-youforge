"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { DemoChatPanel } from "@/components/chat/DemoChatPanel";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useDemoChat } from "@/components/chat/DemoChatProvider";

export function ChatDemo() {
  const { openWidget } = useDemoChat();

  return (
    <section id="ki-demo" className="border-t border-border px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionLabel number="04" title="KI DEMO" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Stell dir vor: Das hier auf deiner Website.
            </h2>
            <p className="mt-6 text-lg text-muted">
              Kunden fragen — der Assistent antwortet. 24/7, ohne dass du jedes
              Mal selbst antworten musst. Genau so bauen wir KI-Lösungen für
              dein Business.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent">·</span>
                Beantwortet häufige Fragen automatisch
              </li>
              <li className="flex gap-2">
                <span className="text-accent">·</span>
                Passt zum Design deiner Website
              </li>
              <li className="flex gap-2">
                <span className="text-accent">·</span>
                100% an dein Business anpassbar
              </li>
            </ul>
            <p className="mt-8 text-sm text-muted">
              Teste die Demo rechts — oder{" "}
              <button
                type="button"
                onClick={openWidget}
                className="text-accent underline-offset-2 hover:underline"
              >
                öffne sie unten links
              </button>
              .
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
            >
              So etwas für deine Website? → Vision schmieden
            </Link>
          </FadeIn>

          <FadeIn delay={0.15}>
            <DemoChatPanel variant="embedded" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
