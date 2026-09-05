"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { catalogStyles } from "@/lib/catalog";

/** Nur auf Katalog-Demos — THE GERMAN und andere Nicht-Katalog-Demos bleiben ohne Bar. */
export function DemoCatalogReturn() {
  const pathname = usePathname();
  const inCatalog = catalogStyles.some(
    (s) => pathname === s.href || pathname.startsWith(`${s.href}/`)
  );

  if (!inCatalog) return null;

  return (
    <div
      data-demo-catalog-return
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] flex justify-center p-3 sm:justify-end sm:p-4"
    >
      <Link
        href="/katalog"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/75 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md transition hover:border-accent/50 hover:text-accent"
      >
        <span aria-hidden>←</span>
        Zurück zum Katalog
      </Link>
    </div>
  );
}
