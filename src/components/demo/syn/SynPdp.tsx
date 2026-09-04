"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SYN } from "@/components/demo/syn/syn-config";
import { formatEur, getSynPiece } from "@/components/demo/syn/syn-content";
import { useSyn } from "@/components/demo/syn/SynBag";
import { SynFooter } from "@/components/demo/syn/SynFooter";

export function SynPdp({ slug }: { slug: string }) {
  const piece = getSynPiece(slug);
  const bag = useSyn();
  const [size, setSize] = useState(piece?.sizes[0] ?? "");
  if (!piece) return null;

  return (
    <main className="bg-[#fff9f7] pt-20">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[70dvh] bg-black lg:min-h-dvh">
          <Image src={piece.image} alt={piece.name} fill priority className="object-cover" sizes="50vw" />
        </div>
        <div className="flex flex-col justify-center px-6 py-12 lg:px-16">
          <Link href={`${SYN.base}/shop`} className="font-[family-name:var(--font-syn-mono)] text-xs uppercase">
            [ All Products ]
          </Link>
          {piece.bestseller && (
            <p className="mt-6 font-[family-name:var(--font-syn-mono)] text-xs uppercase text-[#ed3833]">
              Best seller
            </p>
          )}
          <h1 className="mt-3 font-[family-name:var(--font-syn-display)] text-[clamp(2.4rem,5vw,4.5rem)] uppercase leading-[0.88]">
            {piece.name}
          </h1>
          <p className="mt-4 font-[family-name:var(--font-syn-mono)] text-lg">
            ({formatEur(piece.price)})
          </p>
          <p className="mt-8 font-[family-name:var(--font-syn-mono)] text-sm">Select size:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {piece.sizes.map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={() => setSize(sz)}
                className={`border px-3 py-1 font-[family-name:var(--font-syn-mono)] text-sm ${
                  size === sz ? "border-[#ed3833] bg-[#ed3833] text-white" : "border-black"
                }`}
              >
                [{sz}]
              </button>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => bag.add(piece.slug)}
              className="bg-[#ed3833] px-8 py-3 font-[family-name:var(--font-syn-mono)] uppercase text-white"
            >
              [ Add TO bag ]
            </button>
            <button
              type="button"
              onClick={() => bag.toggleFav(piece.slug)}
              className="border border-black px-6 py-3 font-[family-name:var(--font-syn-mono)] uppercase"
            >
              {bag.favs.includes(piece.slug) ? "In favorites" : "Add to favorites"}
            </button>
          </div>
        </div>
      </div>
      <SynFooter />
    </main>
  );
}
