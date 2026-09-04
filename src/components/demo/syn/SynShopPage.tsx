"use client";

import Image from "next/image";
import Link from "next/link";
import { SYN } from "@/components/demo/syn/syn-config";
import { formatEur, SYN_PIECES } from "@/components/demo/syn/syn-content";
import { SynFooter } from "@/components/demo/syn/SynFooter";

export function SynShopPage() {
  return (
    <main className="bg-[#fff9f7] pt-24">
      <div className="px-4 sm:px-8 lg:px-12">
        <p className="font-[family-name:var(--font-syn-mono)] text-sm">[ All Products ]</p>
        <h1 className="mt-3 font-[family-name:var(--font-syn-display)] text-[clamp(3rem,8vw,7rem)] uppercase leading-none">
          Shop all
        </h1>
        <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {SYN_PIECES.map((p) => (
            <Link key={p.slug} href={`${SYN.base}/shop/${p.slug}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <Image src={p.image} alt={p.name} fill sizes="25vw" className="object-cover transition duration-500 group-hover:opacity-0" />
                {p.hover && (
                  <Image src={p.hover} alt="" fill sizes="25vw" className="object-cover opacity-0 transition duration-500 group-hover:opacity-100" />
                )}
              </div>
              <h2 className="mt-2 font-[family-name:var(--font-syn-display)] uppercase">{p.name}</h2>
              <p className="font-[family-name:var(--font-syn-mono)] text-sm">{formatEur(p.price)}</p>
            </Link>
          ))}
        </div>
      </div>
      <SynFooter />
    </main>
  );
}
