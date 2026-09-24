"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AA, AA_IMG } from "@/components/demo/stelzer/aa-config";
import { AA_NAV } from "@/components/demo/stelzer/aa-content";
import { AA_EASE } from "@/components/demo/stelzer/aa-motion";
import { AaButton } from "@/components/demo/stelzer/AaButton";

export function AaNav() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-aa-tone]"));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target.getAttribute("data-aa-tone") === "tan") setLight(true);
        else if (vis) setLight(false);
      },
      { threshold: [0.35, 0.55] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const ink = light && !open;

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[80] mix-blend-normal">
        <div
          className={`pointer-events-auto mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12 ${
            ink ? "text-[var(--aa-ink)]" : "text-[var(--aa-cream)]"
          }`}
        >
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em]"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Menü"
            >
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span
                  className={`block h-px w-5 bg-current transition duration-300 ${
                    open ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-5 bg-current transition duration-300 ${
                    open ? "-translate-y-[3.5px] -rotate-45" : ""
                  }`}
                />
              </span>
              Menü
            </button>
            <a
              href="/demo/stelzer-hesselmann#ablauf"
              className="hidden text-[10px] uppercase tracking-[0.28em] opacity-70 transition hover:opacity-100 sm:inline"
            >
              Ablauf
            </a>
          </div>

          <a href="/demo/stelzer-hesselmann" className="relative block h-10 w-[148px] sm:h-11 sm:w-[168px]">
            <Image
              src={ink ? AA_IMG.logoInk : AA_IMG.logo}
              alt={AA.brand.full}
              fill
              sizes="168px"
              className="object-contain object-center"
            />
          </a>

          <div className="flex items-center gap-3">
            <span className="hidden text-[10px] uppercase tracking-[0.28em] sm:inline">De</span>
            <AaButton
              href={`tel:${AA.contact.phoneTel}`}
              className={
                "bg-[var(--aa-roof)] px-5 py-2 text-[var(--aa-cream)] hover:brightness-110"
              }
            >
              Anrufen
            </AaButton>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[75] flex flex-col justify-end bg-[var(--aa-tan)] px-8 pb-16 pt-28 text-[var(--aa-ink)] sm:px-16"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.85, ease: AA_EASE }}
          >
            <p className="font-aa-display text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.9] tracking-[-0.04em]">
              Stelzer
              <br />
              &amp; Heßelmann
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.32em] opacity-50">
              {AA.makers.wood.name} · {AA.makers.clay.name}
            </p>
            <nav className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              {AA_NAV.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-aa-display text-3xl tracking-tight sm:text-4xl"
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
