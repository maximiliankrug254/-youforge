"use client";

import { useEffect, useState } from "react";
import { GpfButton } from "@/components/demo/gpf/GpfButton";
import { GPF_CONTACT } from "@/components/demo/gpf/gpf-contact";
import { GPF_DEMO } from "@/components/demo/gpf/gpf-config";

const LINKS = [
  ["#leistungen", "Leistungen"],
  ["#referenzen", "Referenzen"],
  ["#ablauf", "Ablauf"],
  [`#${GPF_DEMO.about.sectionId}`, "Über uns"],
  ["#region", "Region"],
  ["#kontakt", "Kontakt"],
] as const;

export function GpfNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
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
      className={`fixed inset-x-0 top-0 z-[80] text-white transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid
          ? "border-b border-white/10 bg-[rgba(15,21,17,0.9)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12 lg:py-4">
        <a href="#top" className="group inline-flex flex-col" aria-label={GPF_CONTACT.brand}>
          <span className="font-gpf-display text-[1.4rem] font-bold leading-none tracking-[-0.02em] sm:text-[1.6rem]">
            {GPF_CONTACT.short}
          </span>
          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.24em] text-[var(--gpf-sand)] transition-colors group-hover:text-[var(--gpf-accent-hot)] sm:text-[10px]">
            {GPF_CONTACT.navSubtitle}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="relative text-[12px] font-medium text-white/50 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[var(--gpf-accent)] after:transition-all hover:text-white hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <GpfButton
            href={`tel:${GPF_CONTACT.phoneTel}`}
            strength={0.18}
            className="hidden rounded-full bg-white px-5 py-2.5 text-xs font-semibold tracking-wide text-[var(--gpf-ink)] transition-colors hover:bg-[var(--gpf-accent)] hover:text-white sm:inline-flex"
          >
            {GPF_CONTACT.phoneDisplay}
          </GpfButton>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="gpf-mobile-nav"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="gpf-mobile-nav"
          className="border-t border-white/10 bg-[var(--gpf-panel)] lg:hidden"
        >
          <nav className="mx-auto flex max-w-[1480px] flex-col px-5 py-3 sm:px-8">
            {LINKS.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3.5 text-sm font-medium tracking-wide text-white/70"
              >
                {label}
              </a>
            ))}
            <a
              href={`tel:${GPF_CONTACT.phoneTel}`}
              className="mt-4 mb-2 inline-flex items-center justify-center rounded-full bg-[var(--gpf-accent)] py-3.5 text-sm font-semibold text-white"
            >
              {GPF_CONTACT.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
