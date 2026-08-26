"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { demoScenarios } from "@/lib/demo-chat";
import { useDemoChat } from "@/components/chat/DemoChatProvider";
import { cn } from "@/lib/utils";

export function DemoChatPanel({
  variant = "embedded",
  tone = "default",
  className,
}: {
  variant?: "embedded" | "floating";
  tone?: "default" | "forge";
  className?: string;
}) {
  const {
    messages,
    hasStarted,
    isLimitReached,
    isTyping,
    startDemo,
    sendMessage,
  } = useDemoChat();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const forge = tone === "forge";

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLimitReached) return;
    sendMessage(input);
    setInput("");
  }

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden border",
        forge
          ? "border-white/12 bg-[#0a0a0a]/95 text-white backdrop-blur-md"
          : "border-border bg-background",
        variant === "embedded" ? "h-[min(560px,72vh)]" : "h-full",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between px-4 py-3.5 sm:px-5",
          forge ? "border-b border-white/10" : "border-b border-border"
        )}
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            YouForge · KI-Assistent
          </p>
          <p
            className={cn(
              "mt-1 text-sm font-medium",
              forge ? "text-white" : "text-foreground"
            )}
          >
            Automatisierte Demo · kein Mensch
          </p>
        </div>
        <span
          className={cn(
            "font-mono text-[10px] uppercase tracking-[0.2em]",
            forge ? "text-white/40" : "text-muted"
          )}
        >
          KI-Demo
        </span>
      </div>

      {!hasStarted ? (
        <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
          <div>
            <p
              className={cn(
                "max-w-sm text-sm leading-relaxed",
                forge ? "text-white/50" : "text-muted"
              )}
            >
              Probier ein reales Kundenszenario — lokal im Browser, ohne
              Datenversand.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {demoScenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => sendMessage(scenario.prompt)}
                  className={cn(
                    "px-4 py-3 text-left transition-colors",
                    forge
                      ? "border border-white/12 bg-white/[0.03] hover:border-accent/50 hover:bg-accent/10"
                      : "border border-border bg-surface/50 hover:border-accent/40 hover:bg-surface"
                  )}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                    {scenario.label}
                  </span>
                  <span
                    className={cn(
                      "mt-1.5 block text-sm",
                      forge ? "text-white/90" : "text-foreground"
                    )}
                  >
                    {scenario.prompt}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={startDemo}
            className={cn(
              "mt-8 self-start px-5 py-2.5 text-sm font-medium transition-colors",
              forge
                ? "border border-white/20 hover:border-accent/50 hover:bg-accent/10"
                : "border border-foreground/20 hover:bg-foreground/5"
            )}
          >
            Frei chatten →
          </button>
        </div>
      ) : (
        <>
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto p-4 sm:p-5 scrollbar-hide"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "max-w-[88%] px-4 py-2.5 text-sm leading-relaxed",
                  msg.role === "user"
                    ? "ml-auto bg-accent text-background"
                    : forge
                      ? "mr-auto border border-white/12 bg-white/[0.04] text-white/90"
                      : "mr-auto border border-border bg-surface/60 text-foreground"
                )}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div
                className={cn(
                  "mr-auto flex gap-1 px-4 py-3",
                  forge
                    ? "border border-white/12 bg-white/[0.04]"
                    : "border border-border bg-surface/60"
                )}
              >
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent/70 [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent/70 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent/70 [animation-delay:300ms]" />
              </div>
            )}
          </div>

          {!isLimitReached && (
            <div
              className={cn(
                "flex flex-wrap gap-2 px-4 py-3",
                forge ? "border-t border-white/10" : "border-t border-border"
              )}
            >
              {demoScenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => sendMessage(scenario.prompt)}
                  disabled={isTyping}
                  className={cn(
                    "px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors disabled:opacity-50",
                    forge
                      ? "border border-white/12 text-white/45 hover:border-accent/40 hover:text-accent"
                      : "border border-border text-muted hover:border-accent/40 hover:text-foreground"
                  )}
                >
                  {scenario.label}
                </button>
              ))}
            </div>
          )}

          {isLimitReached ? (
            <div
              className={cn(
                "p-4 text-center",
                forge ? "border-t border-white/10" : "border-t border-border"
              )}
            >
              <Link
                href="/kontakt"
                className="inline-flex bg-accent px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
              >
                Vision schmieden →
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={cn(
                "flex gap-2 p-3",
                forge ? "border-t border-white/10" : "border-t border-border"
              )}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Eigene Frage…"
                disabled={isTyping}
                className={cn(
                  "flex-1 px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent/50 disabled:opacity-50",
                  forge
                    ? "border border-white/12 bg-black/40 text-white placeholder:text-white/30"
                    : "border border-border bg-background"
                )}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent text-background transition-opacity hover:opacity-90 disabled:opacity-40"
                aria-label="Senden"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}
