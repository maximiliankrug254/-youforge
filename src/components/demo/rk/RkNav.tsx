"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RK_CONTACT } from "@/components/demo/rk/rk-contact";
import { RK_EASE } from "@/components/demo/rk/rk-motion";
import { RkButton } from "@/components/demo/rk/RkButton";
import { RkLogo } from "@/components/demo/rk/RkLogo";

const PRODUCT_LINKS = [
  ["/demo/raumkontrast/markisen", "Markisen"],
  ["/demo/raumkontrast/sonnenschutz", "Sicht- & Sonnenschutz"],
  ["/demo/raumkontrast/produkte/gardinen", "Gardinenstoffe"],
  ["/demo/raumkontrast/produkte/polsterei", "Polsterei"],
  ["/demo/raumkontrast/produkte/bodenbelaege", "Bodenbeläge"],
  ["/demo/raumkontrast/produkte/insektenschutz", "Insektenschutz"],
] as const;

const COMPANY_LINKS = [
  ["/demo/raumkontrast/unternehmen", "Geschichte"],
  ["/demo/raumkontrast/unternehmen#ausstellung", "Mobile Ausstellung"],
  ["/demo/raumkontrast/referenzen", "Referenzen"],
  ["/demo/raumkontrast/partner", "Partner"],
] as const;

export function RkNav() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const home = pathname === "/demo/raumkontrast";
  const transparent = home && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
    setCompanyOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkCls = transparent
    ? "text-white/75 hover:text-white"
    : "text-[var(--rk-ink)]/70 hover:text-[var(--rk-purple)]";
  const navLink =
    "relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors after:absolute after:bottom-1 after:left-3 after:right-3 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--rk-lime)] after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <div role="banner" className="fixed inset-x-0 top-0 z-[80]">
      <div
        className={`hidden border-b text-[11px] sm:block ${
          transparent
            ? "border-white/10 bg-[var(--rk-purple)]/90 text-white backdrop-blur-md"
            : "border-[var(--rk-purple)]/15 bg-[var(--rk-purple)] text-white"
        }`}
      >
        <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-4 px-5 py-1.5 sm:px-8 lg:px-12">
          <p className="tracking-wide text-white/80">
            {RK_CONTACT.address} · {RK_CONTACT.hours}
          </p>
          <div className="flex items-center gap-5">
            <a href={`tel:${RK_CONTACT.phoneTel}`} className="hover:text-[var(--rk-lime)]">
              {RK_CONTACT.phoneDisplay}
            </a>
            <a
              href={`mailto:${RK_CONTACT.email}`}
              className="hidden hover:text-[var(--rk-lime)] md:inline"
            >
              {RK_CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`transition-[background-color,border-color,box-shadow] duration-500 ${
          transparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-black/6 bg-[var(--rk-paper)]/95 shadow-[0_8px_30px_rgba(28,7,28,0.07)] backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12 lg:py-3.5">
          <Link
            href="/demo/raumkontrast"
            className="shrink-0"
            aria-label={RK_CONTACT.short}
          >
            <RkLogo onDark={transparent} compact />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/demo/raumkontrast/markisen"
              className={`${navLink} ${
                pathname.includes("/markisen")
                  ? "text-[var(--rk-purple)] after:scale-x-100"
                  : linkCls
              }`}
            >
              Markisen
            </Link>
            <Link
              href="/demo/raumkontrast/sonnenschutz"
              className={`${navLink} ${
                pathname.includes("/sonnenschutz")
                  ? "text-[var(--rk-purple)] after:scale-x-100"
                  : linkCls
              }`}
            >
              Sonnenschutz
            </Link>
            <Link
              href="/demo/raumkontrast/trends"
              className={`${navLink} ${
                pathname.includes("/trends")
                  ? "text-[var(--rk-purple)] after:scale-x-100"
                  : linkCls
              }`}
            >
              Trends
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className={`px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${linkCls}`}
                aria-expanded={productsOpen}
              >
                Produkte
              </button>
              <AnimatePresence>
                {productsOpen ? (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2, ease: RK_EASE }}
                    className="absolute left-0 top-full z-20 min-w-[240px] border border-black/6 bg-[var(--rk-paper)] py-2 shadow-[0_18px_50px_rgba(28,7,28,0.12)]"
                  >
                    {PRODUCT_LINKS.map(([href, label]) => (
                      <Link
                        key={href}
                        href={href}
                        className="block px-4 py-2.5 text-[13px] text-[var(--rk-ink)]/80 hover:bg-[var(--rk-lime)]/15 hover:text-[var(--rk-purple)]"
                      >
                        {label}
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                type="button"
                className={`px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${linkCls}`}
                aria-expanded={companyOpen}
              >
                Unternehmen
              </button>
              <AnimatePresence>
                {companyOpen ? (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2, ease: RK_EASE }}
                    className="absolute left-0 top-full z-20 min-w-[220px] border border-black/6 bg-[var(--rk-paper)] py-2 shadow-[0_18px_50px_rgba(28,7,28,0.12)]"
                  >
                    {COMPANY_LINKS.map(([href, label]) => (
                      <Link
                        key={href}
                        href={href}
                        className="block px-4 py-2.5 text-[13px] text-[var(--rk-ink)]/80 hover:bg-[var(--rk-lime)]/15 hover:text-[var(--rk-purple)]"
                      >
                        {label}
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            <Link
              href="/demo/raumkontrast/kontakt"
              className={`${navLink} ${
                pathname.includes("/kontakt")
                  ? "text-[var(--rk-purple)] after:scale-x-100"
                  : linkCls
              }`}
            >
              Kontakt
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <RkButton
              href={`tel:${RK_CONTACT.phoneTel}`}
              strength={0.16}
              className="rk-shine hidden rounded-sm bg-[var(--rk-lime)] px-5 py-2.5 text-xs font-semibold tracking-wide text-[var(--rk-ink)] transition-colors hover:bg-[var(--rk-lime-deep)] hover:text-white sm:inline-flex"
            >
              {RK_CONTACT.phoneDisplay}
            </RkButton>
            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-sm border lg:hidden ${
                transparent ? "border-white/30 text-white" : "border-black/15 text-[var(--rk-ink)]"
              }`}
              aria-expanded={open}
              aria-controls="rk-mobile-nav"
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
      </div>

      {open ? (
        <div
          id="rk-mobile-nav"
          className="max-h-[min(80vh,calc(100dvh-6rem))] overflow-y-auto border-t border-black/8 bg-[var(--rk-paper)] lg:hidden"
        >
          <nav className="mx-auto flex max-w-[1480px] flex-col px-5 py-3 sm:px-8">
            <Link
              href="/demo/raumkontrast/markisen"
              className="border-b border-black/8 py-3.5 text-sm font-semibold text-[var(--rk-purple)]"
            >
              Markisen
            </Link>
            <Link
              href="/demo/raumkontrast/sonnenschutz"
              className="border-b border-black/8 py-3.5 text-sm font-medium"
            >
              Sicht- und Sonnenschutz
            </Link>
            <Link
              href="/demo/raumkontrast/trends"
              className="border-b border-black/8 py-3.5 text-sm font-semibold text-[var(--rk-purple)]"
            >
              Trends
            </Link>
            {PRODUCT_LINKS.slice(2).map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="border-b border-black/8 py-3.5 text-sm font-medium text-[var(--rk-ink)]/80"
              >
                {label}
              </Link>
            ))}
            {COMPANY_LINKS.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="border-b border-black/8 py-3.5 text-sm font-medium text-[var(--rk-ink)]/80"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/demo/raumkontrast/kontakt"
              className="border-b border-black/8 py-3.5 text-sm font-medium"
            >
              Kontakt
            </Link>
            <a
              href={`tel:${RK_CONTACT.phoneTel}`}
              className="mt-4 mb-2 inline-flex items-center justify-center rounded-sm bg-[var(--rk-lime)] py-3.5 text-sm font-semibold text-[var(--rk-ink)]"
            >
              {RK_CONTACT.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
