"use client";

import { useEffect, useState } from "react";
import { TUKAN } from "@/components/demo/tukan/tukan-config";
import { TUKAN_COPY, TUKAN_NAV } from "@/components/demo/tukan/tukan-content";
import { TukanButton } from "@/components/demo/tukan/TukanButton";
import { TukanMark } from "@/components/demo/tukan/TukanMark";
import { TukanSplit } from "@/components/demo/tukan/TukanSplit";

export function TukanNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-[background-color,backdrop-filter,border-color] duration-500 ${
        solid
          ? "border-b border-white/10 bg-[rgba(7,20,14,0.78)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-white" aria-label={TUKAN.brand.short}>
          <TukanMark className="h-7 w-7" />
          <span className="font-tukan-display text-[1.3rem] leading-none lg:text-[1.45rem]">
            {TUKAN.brand.short}
          </span>
        </a>

        <nav className="hidden items-center gap-x-6 lg:flex" aria-label="Seite">
          {TUKAN_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-tukan-mono text-[11px] uppercase tracking-[0.16em] text-white/75"
            >
              <TukanSplit>{item.label}</TukanSplit>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <TukanButton
            href="#bestellen"
            className="hidden bg-[var(--tukan-sun)] text-[var(--tukan-void)] md:inline-flex"
          >
            4er-Pack holen
          </TukanButton>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menü</span>
            <span className="flex flex-col gap-1.5">
              <span className={`h-px w-4 bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[rgba(7,20,14,0.96)] px-5 py-8 lg:hidden">
          <nav className="flex flex-col gap-5">
            {TUKAN_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-tukan-mono text-sm uppercase tracking-[0.18em] text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <TukanButton
              href="#bestellen"
              className="mt-2 bg-[var(--tukan-sun)] text-[var(--tukan-void)]"
              onClick={() => setOpen(false)}
            >
              {TUKAN_COPY.heroCta}
            </TukanButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
