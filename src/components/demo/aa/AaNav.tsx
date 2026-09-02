"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AA } from "@/components/demo/aa/aa-config";
import { AA_NAV } from "@/components/demo/aa/aa-content";
import { AA_EASE } from "@/components/demo/aa/aa-motion";
import { AaButton } from "@/components/demo/aa/AaButton";

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
            ink ? "text-[var(--aa-ink)]" : "text-[var(--aa-tan)]"
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
              href="#ofen"
              className="hidden text-[10px] uppercase tracking-[0.28em] opacity-70 transition hover:opacity-100 sm:inline"
            >
              Prozess
            </a>
          </div>

          <a href="#top" className="text-[11px] font-semibold uppercase tracking-[0.38em]">
            {AA.brand.short}
          </a>

          <div className="flex items-center gap-3">
            <span className="hidden text-[10px] uppercase tracking-[0.28em] sm:inline">De</span>
            <AaButton
              href="#besuch"
              className={
                ink
                  ? "bg-[var(--aa-ink)] px-5 py-2 text-[var(--aa-tan)] hover:bg-[var(--aa-ink)]/90"
                  : "bg-[var(--aa-tan)] px-5 py-2 text-[var(--aa-ink)] hover:bg-[var(--aa-tan-hot)]"
              }
            >
              Besuch
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
            <p className="font-aa-display text-[clamp(4rem,16vw,11rem)] leading-[0.8] tracking-[-0.04em]">
              AST
              <br />
              ASCHE
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.32em] opacity-50">
              by {AA.makers.wood.name.split(" ")[0]} · {AA.makers.clay.name.split(" ")[0]}
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
