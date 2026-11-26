"use client";

import { useEffect, useState } from "react";
import { AnaButton } from "@/components/demo/anatolia/AnaButton";
import { AnaLogo } from "@/components/demo/anatolia/AnaLogo";
import { ANA_CONTACT } from "@/components/demo/anatolia/ana-contact";
import { ANA_DEMO } from "@/components/demo/anatolia/ana-config";

const LINKS = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#projekte", label: "Projekte" },
  { href: "#unternehmen", label: "Unternehmen" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function AnaNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  return (
    <>
      <header
        data-ana-nav
        className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-b border-white/10 bg-[rgba(26,24,20,0.82)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-[1480px] items-center justify-between gap-4 pl-3 pr-5 sm:pl-4 sm:pr-8 lg:h-[4.75rem] lg:pl-5 lg:pr-12">
          <a
            href="#top"
            className="-ml-0.5 inline-flex min-w-0 shrink-0 items-center rounded-xl bg-white py-1.5 pl-1.5 pr-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.18)] sm:-ml-1 sm:pl-1.5"
            aria-label={ANA_CONTACT.full}
          >
            <AnaLogo
              height={46}
              priority
              className="-ml-1 h-9 w-auto object-left sm:-ml-1.5 sm:h-11"
            />
          </a>

          <nav className="hidden items-center gap-9 text-[13px] font-medium text-white/70 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:inline-flex">
              {ANA_DEMO.pitch.badge}
            </span>
            <AnaButton
              href={`tel:${ANA_CONTACT.phoneTel}`}
              strength={0.16}
              className="hidden rounded-xl bg-[var(--ana-amber)] px-5 py-2.5 text-sm font-semibold text-[var(--ana-ink)] md:inline-flex"
            >
              Anrufen
            </AnaButton>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white lg:hidden"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menü</span>
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-full bg-white transition-transform ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-[1.5px] w-full bg-white transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-[1.5px] w-full bg-white transition-transform ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-[var(--ana-ink)] px-5 pb-10 pt-28 lg:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-white/10 py-5 font-ana-display text-3xl font-semibold tracking-[-0.03em] text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
            {ANA_DEMO.pitch.badge}
          </p>
          <AnaButton
            href={`tel:${ANA_CONTACT.phoneTel}`}
            strength={0}
            className="mt-4 inline-flex rounded-xl bg-[var(--ana-amber)] px-6 py-4 text-sm font-semibold text-[var(--ana-ink)]"
          >
            {ANA_CONTACT.phoneDisplay}
          </AnaButton>
        </div>
      ) : null}
    </>
  );
}
