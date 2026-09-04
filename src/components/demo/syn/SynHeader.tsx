"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SYN } from "@/components/demo/syn/syn-config";
import {
  formatEur,
  SYN_CATS,
  SYN_MENU,
  SYN_PIECES,
} from "@/components/demo/syn/syn-content";
import { SYN_EASE } from "@/components/demo/syn/syn-motion";
import { useSyn } from "@/components/demo/syn/SynBag";

function Split({ children }: { children: string }) {
  return (
    <span className="syn-split">
      <span>{children}</span>
      <span aria-hidden>{children}</span>
    </span>
  );
}

export function SynHeader() {
  const s = useSyn();
  const open = s.drawer;
  const [q, setQ] = useState("");
  const hits = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return SYN_PIECES.slice(0, 4);
    return SYN_PIECES.filter((p) => p.name.toLowerCase().includes(t) || p.tag.toLowerCase().includes(t));
  }, [q]);

  return (
    <>
      <header className="syn-chrome pointer-events-none fixed inset-x-0 top-0 z-[110]">
        <div className="pointer-events-auto flex items-center justify-between px-3 py-3 sm:px-5">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.14em] sm:gap-x-6">
            <li>
              <button type="button" onClick={() => s.setDrawer(open === "menu" ? null : "menu")}>
                <Split>menu</Split>
              </button>
            </li>
            <li>
              <button type="button" onClick={() => s.setDrawer(open === "bag" ? null : "bag")}>
                <Split>{`Bag.${s.count}`}</Split>
              </button>
            </li>
            <li className="hidden sm:block">
              <Link href={`${SYN.base}/shop`}>
                <Split>Shop all</Split>
              </Link>
            </li>
            <li>
              <button type="button" onClick={() => s.setDrawer(open === "search" ? null : "search")}>
                <Split>Search</Split>
              </button>
            </li>
            <li>
              <button type="button" onClick={() => s.setDrawer(open === "cats" ? null : "cats")}>
                <Split>Categories</Split>
              </button>
            </li>
            <li>
              <button type="button" onClick={() => s.setDrawer(open === "fav" ? null : "fav")}>
                <Split>{`Favorites.${s.favs.length}`}</Split>
              </button>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <span className="hidden font-[family-name:var(--font-syn-mono)] text-[11px] sm:inline">
              <strong>[</strong> {SYN.brand.stamp} <strong>]</strong>
            </span>
            <Link
              href={SYN.base}
              className="origin-right scale-x-[0.92] font-[family-name:var(--font-syn-display)] text-[1.2rem] uppercase leading-none tracking-tight sm:text-[1.55rem]"
            >
              {SYN.brand.short}
            </Link>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            className="fixed inset-0 z-[90] bg-black/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close"
            onClick={() => s.setDrawer(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open === "menu" && (
          <motion.aside
            data-lenis-prevent
            className="syn-drawer syn-drawer--left"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.72, ease: SYN_EASE }}
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#ed3833]">[ Collections ]</p>
            <nav className="mt-10 space-y-2">
              {SYN_MENU.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.55, ease: SYN_EASE }}
                >
                  <Link
                    href={item.href}
                    onClick={() => s.setDrawer(null)}
                    className="flex items-baseline gap-4 overflow-hidden font-[family-name:var(--font-syn-display)] text-[clamp(1.9rem,4.4vw,3.4rem)] uppercase leading-[0.9]"
                  >
                    <span className="font-[family-name:var(--font-syn-mono)] text-sm text-[#ed3833]">
                      {item.n}
                    </span>
                    <Split>{item.label}</Split>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open === "cats" && (
          <motion.aside
            data-lenis-prevent
            className="syn-drawer syn-drawer--left"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.72, ease: SYN_EASE }}
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#ed3833]">Select (Categories)</p>
            <ul className="mt-10 space-y-3">
              {SYN_CATS.map((c, i) => (
                <motion.li
                  key={c.slug}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.45, ease: SYN_EASE }}
                >
                  <Link
                    href={`${SYN.base}/shop`}
                    onClick={() => s.setDrawer(null)}
                    className="flex items-center justify-between border-b border-white/15 pb-3 font-[family-name:var(--font-syn-display)] text-3xl uppercase"
                  >
                    {c.label}
                    <span className="font-[family-name:var(--font-syn-mono)] text-sm text-[#ed3833]">
                      [{c.count}]
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open === "search" && (
          <motion.aside
            data-lenis-prevent
            className="syn-drawer syn-drawer--full"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.65, ease: SYN_EASE }}
          >
            <p className="font-[family-name:var(--font-syn-mono)] text-sm">
              <strong>[</strong> SEARCH <strong>]</strong>
            </p>
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="dresses / corset / berlin"
              className="mt-8 w-full border-b border-white bg-transparent py-4 font-[family-name:var(--font-syn-display)] text-4xl uppercase outline-none placeholder:text-white/25"
            />
            <p className="mt-6 font-[family-name:var(--font-syn-mono)] text-sm text-white/50">
              {hits.length} results · Popular · SS_“25
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {hits.slice(0, 8).map((p) => (
                <Link key={p.slug} href={`${SYN.base}/shop/${p.slug}`} onClick={() => s.setDrawer(null)}>
                  <div className="relative aspect-[3/4]">
                    <Image src={p.image} alt="" fill className="object-cover" sizes="25vw" />
                  </div>
                  <p className="mt-2 text-xs uppercase">{p.name}</p>
                </Link>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open === "bag" && (
          <motion.aside
            data-lenis-prevent
            className="syn-drawer syn-drawer--right"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.72, ease: SYN_EASE }}
          >
            <p className="font-[family-name:var(--font-syn-mono)]">
              your bag <strong>[ {s.count} - Items ]</strong>
            </p>
            {s.items.length === 0 ? (
              <p className="mt-16 font-[family-name:var(--font-syn-display)] text-4xl uppercase leading-[0.9]">
                Your cart is empty.
              </p>
            ) : (
              <ul className="mt-10 space-y-5">
                {s.items.map(({ piece, qty }) => (
                  <li key={piece.slug} className="flex gap-4">
                    <div className="relative h-24 w-20 shrink-0">
                      <Image src={piece.image} alt="" fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="flex-1">
                      <p className="uppercase">{piece.name}</p>
                      <p className="mt-1 font-[family-name:var(--font-syn-mono)] text-sm">
                        {qty} × {formatEur(piece.price)}
                      </p>
                    </div>
                    <button type="button" onClick={() => s.remove(piece.slug)}>
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-10 font-[family-name:var(--font-syn-mono)]">
              Subtotal: [ {formatEur(s.total)} ]
            </p>
            <p className="mt-3 text-xs text-white/40">
              Taxes, shipping, and discounts are calculated at checkout.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`${SYN.base}/shop`}
                onClick={() => s.setDrawer(null)}
                className="inline-block bg-[#ed3833] px-6 py-3 uppercase"
              >
                [ continue shopping ]
              </Link>
              <span className="inline-block border border-white px-6 py-3 uppercase opacity-50">
                [ checkout ]
              </span>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open === "fav" && (
          <motion.aside
            data-lenis-prevent
            className="syn-drawer syn-drawer--right"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.72, ease: SYN_EASE }}
          >
            <p className="font-[family-name:var(--font-syn-mono)]">
              Favorites <strong>[ {s.favs.length} - Items ]</strong>
            </p>
            {s.favItems.length === 0 ? (
              <>
                <p className="mt-16 font-[family-name:var(--font-syn-display)] text-3xl uppercase leading-[0.9]">
                  Your most stylish finds will be here.
                </p>
                <p className="mt-4 font-[family-name:var(--font-syn-mono)] text-sm text-white/50">
                  Save them so you don’t lose them!
                </p>
              </>
            ) : (
              <ul className="mt-10 space-y-5">
                {s.favItems.map((piece) => (
                  <li key={piece.slug}>
                    <Link
                      href={`${SYN.base}/shop/${piece.slug}`}
                      onClick={() => s.setDrawer(null)}
                      className="flex gap-4"
                    >
                      <div className="relative h-24 w-20 shrink-0">
                        <Image src={piece.image} alt="" fill className="object-cover" sizes="80px" />
                      </div>
                      <div>
                        <p className="uppercase">{piece.name}</p>
                        <p className="mt-1 font-[family-name:var(--font-syn-mono)] text-sm">
                          {formatEur(piece.price)}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
