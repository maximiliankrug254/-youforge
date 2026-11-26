"use client";

import { useEffect, useState } from "react";
import { AnaButton } from "@/components/demo/anatolia/AnaButton";
import { ANA_CONTACT } from "@/components/demo/anatolia/ana-contact";

/** Dezente Abschluss-Leiste ab Desktop, sobald man gescrollt hat. */
export function AnaDesktopCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden justify-center px-6 pb-6 transition duration-500 lg:flex ${
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      aria-hidden={!show}
    >
      <div
        className={`pointer-events-auto flex items-center gap-3 rounded-2xl border border-white/12 bg-[rgba(31,28,23,0.92)] px-3 py-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md ${
          show ? "" : "pointer-events-none"
        }`}
      >
        <p className="hidden px-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45 xl:block">
          {ANA_CONTACT.owner} · Essen
        </p>
        <AnaButton
          href={`tel:${ANA_CONTACT.phoneTel}`}
          strength={0.12}
          className="rounded-xl bg-[var(--ana-amber)] px-5 py-3 text-sm font-semibold text-[var(--ana-ink)]"
        >
          Anrufen
        </AnaButton>
        <AnaButton
          href="#kontakt"
          strength={0.1}
          className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white"
        >
          Anfrage
        </AnaButton>
      </div>
    </div>
  );
}
