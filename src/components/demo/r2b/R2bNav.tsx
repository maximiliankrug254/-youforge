"use client";

import { useEffect, useState } from "react";
import { R2bButton } from "@/components/demo/r2b/R2bButton";
import { R2B_CONTACT } from "@/components/demo/r2b/r2b-contact";
import { R2B_NAV } from "@/components/demo/r2b/r2b-content";

export function R2bNav() {
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
    <div
      role="banner"
      className={`fixed inset-x-0 top-0 z-[85] text-white transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid
          ? "border-b border-white/10 bg-[rgba(7,7,6,0.88)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12 lg:py-4">
        <a href="#top" className="group inline-flex flex-col" aria-label={R2B_CONTACT.brand}>
          <span className="font-r2b-display text-[1.55rem] font-medium leading-none tracking-[-0.03em] sm:text-[1.75rem]">
            {R2B_CONTACT.brand}
          </span>
          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.28em] text-[var(--r2b-brass)] sm:text-[10px]">
            Atelier für Handwerk
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {R2B_NAV.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="relative text-[11px] font-medium uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--r2b-brass)] after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <R2bButton
            href="#kontakt"
            className="hidden rounded-none bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--r2b-void)] hover:bg-[var(--r2b-brass)] sm:inline-flex"
          >
            Gespräch
          </R2bButton>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menü</span>
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-white transition-transform ${open ? "top-1.5 rotate-45" : "top-0.5"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-4 bg-white transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-white transition-transform ${open ? "top-1.5 -rotate-45" : "top-2.5"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[var(--r2b-void)] px-5 py-8 lg:hidden">
          <nav className="flex flex-col gap-5">
            {R2B_NAV.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-r2b-display text-3xl font-medium tracking-[-0.03em] text-white"
              >
                {label}
              </a>
            ))}
            <R2bButton
              href="#kontakt"
              className="mt-4 inline-flex items-center justify-center bg-[var(--r2b-brass)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--r2b-void)]"
            >
              Gespräch anfragen
            </R2bButton>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
