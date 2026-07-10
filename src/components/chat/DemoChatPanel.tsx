"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { demoQuickReplies } from "@/lib/demo-chat";
import { useDemoChat } from "@/components/chat/DemoChatProvider";
import { cn } from "@/lib/utils";

export function DemoChatPanel({
  variant = "embedded",
  className,
}: {
  variant?: "embedded" | "floating";
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
        "flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm",
        variant === "embedded" ? "h-[min(520px,70vh)]" : "h-full",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-foreground">
            KI-Assistent
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
          Live-Demo
        </span>
      </div>

      {!hasStarted ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
          <p className="max-w-xs text-sm text-muted">
            100% kostenlos — keine Daten werden versendet. Alles läuft lokal in
            deinem Browser.
          </p>
          <button
            type="button"
            onClick={startDemo}
            className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            Demo starten
          </button>
        </div>
      ) : (
        <>
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto p-4 scrollbar-hide"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                  msg.role === "user"
                    ? "ml-auto bg-accent text-background"
                    : "mr-auto border border-border bg-background/60 text-foreground"
                )}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="mr-auto flex gap-1 rounded-2xl border border-border bg-background/60 px-4 py-3">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:300ms]" />
              </div>
            )}
          </div>

          {!isLimitReached && (
            <div className="flex flex-wrap gap-2 border-t border-border p-3">
              {demoQuickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => sendMessage(reply)}
                  disabled={isTyping}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/40 hover:text-foreground disabled:opacity-50"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {isLimitReached ? (
            <div className="border-t border-border p-4 text-center">
              <Link
                href="/kontakt"
                className="inline-flex rounded-full border border-accent/40 bg-accent-muted px-6 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
              >
                Vision schmieden →
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 border-t border-border p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nachricht eingeben…"
                disabled={isTyping}
                className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none transition-colors focus:border-accent/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-background transition-opacity hover:opacity-90 disabled:opacity-40"
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
