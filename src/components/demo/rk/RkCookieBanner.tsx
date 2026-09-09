"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { RK_BASE } from "@/components/demo/rk/rk-config";

const STORAGE_KEY = "rk-cookies";

export function RkCookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) !== "1") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          role="dialog"
          aria-labelledby="rk-cookie-title"
          aria-describedby="rk-cookie-desc"
          className="fixed bottom-0 left-0 right-0 z-[90] border-t border-white/10 bg-[var(--rk-purple-ink)] p-5 text-white shadow-[0_-12px_40px_rgba(26,12,18,0.35)] sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md sm:rounded-sm sm:border"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "110%", opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            id="rk-cookie-title"
            className="font-rk-display text-xl uppercase tracking-wide"
          >
            Cookies & Datenschutz
          </p>
          <p
            id="rk-cookie-desc"
            className="mt-3 text-sm leading-relaxed text-white/60"
          >
            Wir speichern nur technisch Notwendiges (z. B. Ihre Zustimmung).
            Kein Tracking, keine Werbe-Cookies. Details unter{" "}
            <Link
              href={`${RK_BASE}/cookies`}
              className="text-[var(--rk-lime)] underline-offset-2 hover:underline"
            >
              Cookies
            </Link>{" "}
            und{" "}
            <Link
              href={`${RK_BASE}/datenschutz`}
              className="text-[var(--rk-lime)] underline-offset-2 hover:underline"
            >
              Datenschutz
            </Link>
            .
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={accept}
              className="rounded-sm bg-[var(--rk-lime)] px-5 py-2.5 text-sm font-semibold text-[var(--rk-ink)] transition-colors hover:bg-[var(--rk-lime-deep)] hover:text-white"
            >
              Verstanden
            </button>
            <Link
              href={`${RK_BASE}/impressum`}
              className="rounded-sm border border-white/25 px-5 py-2.5 text-sm text-white/80 transition-colors hover:border-white/50 hover:text-white"
            >
              Impressum
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
