"use client";

import { useEffect, useState } from "react";
import { RS_CONTACT } from "@/components/demo/rs/rs-contact";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#gebiet", label: "Gebiet" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function RsNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-rs-nav
      role="banner"
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled
          ? "border-b border-[rgba(28,25,23,0.08)] bg-[rgba(245,241,235,0.94)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
        <a
          href="#top"
          className={`font-[family-name:var(--font-rs-display)] text-[1.15rem] font-medium tracking-[-0.02em] transition-colors ${
            scrolled ? "text-[var(--rs-ink)]" : "text-[var(--rs-cream)]"
          }`}
        >
          {RS_CONTACT.brand}
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] transition ${
                scrolled
                  ? "text-[var(--rs-ink-soft)] hover:text-[var(--rs-ink)]"
                  : "text-[rgba(245,241,235,0.72)] hover:text-[var(--rs-cream)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${RS_CONTACT.phoneTel}`}
          className="rounded-full bg-[var(--rs-ochre)] px-4 py-2 text-[13px] font-semibold text-[var(--rs-ink)] transition hover:bg-[var(--rs-ochre-hover)]"
        >
          {RS_CONTACT.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
