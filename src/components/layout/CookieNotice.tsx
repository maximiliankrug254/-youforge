"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const storageKey = "youforge-cookie-notice";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(storageKey) === "dismissed") return;
    setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem(storageKey, "dismissed");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Hinweis zu externen Diensten"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur-sm sm:inset-x-6 sm:p-5"
    >
      <p className="text-sm leading-relaxed text-muted">
        Beim Klick auf{" "}
        <span className="text-foreground">Termin buchen</span> öffnet sich
        Calendly — dort können Cookies gesetzt werden. Details:{" "}
        <Link
          href="/datenschutz"
          className="text-accent underline-offset-2 hover:underline"
        >
          Datenschutz
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={dismiss}
        className="mt-3 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-accent-hover"
      >
        Verstanden
      </button>
    </div>
  );
}
