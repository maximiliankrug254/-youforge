"use client";

import Link from "next/link";
import { SYN } from "@/components/demo/syn/syn-config";

export function SynFooter() {
  return (
    <footer className="syn-chrome bg-black px-4 py-16 text-white sm:px-8 lg:px-12">
      <div className="flex flex-wrap items-start justify-between gap-10">
        <div>
          <p className="font-[family-name:var(--font-syn-mono)] text-[11px] uppercase tracking-[0.28em] text-[#ed3833]">
            created with love
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/55">
            Made in collaboration by design and development.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-[family-name:var(--font-syn-mono)] text-xs uppercase tracking-[0.16em]">
          <Link href={`${SYN.base}/shop`}>Shop all</Link>
          <Link href={`${SYN.base}#campaign`}>Campaign</Link>
          <Link href={`${SYN.base}/who-we-are`}>Who we are</Link>
          <Link href={`${SYN.base}/contact`}>Contact</Link>
          <Link href={SYN.youforge.contact}>YouForge</Link>
        </div>
      </div>
      <p className="mt-16 origin-left scale-x-[0.88] font-[family-name:var(--font-syn-display)] text-[clamp(2.4rem,8vw,7rem)] uppercase leading-[0.8]">
        ©2026_{SYN.brand.short}
      </p>
      <p className="mt-6 text-xs text-white/35">
        {SYN.youforge.label} ·{" "}
        <Link href={SYN.youforge.href} className="underline">
          {SYN.youforge.studio}
        </Link>{" "}
        — Rekonstruktion der Design-Sprache, keine offizielle Marke.
      </p>
    </footer>
  );
}
