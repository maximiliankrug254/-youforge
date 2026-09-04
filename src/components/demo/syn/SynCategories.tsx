"use client";

import Image from "next/image";
import Link from "next/link";
import { SYN, SYN_IMG } from "@/components/demo/syn/syn-config";
import { SYN_CATS } from "@/components/demo/syn/syn-content";
import { SynRail } from "@/components/demo/syn/SynRail";

export function SynCategories() {
  return (
    <>
      <section className="bg-[#fff9f7] px-4 py-16 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between">
          <h2 className="origin-left scale-x-[0.9] font-[family-name:var(--font-syn-display)] text-[clamp(2.4rem,7vw,5.6rem)] uppercase leading-[0.8]">
            04. CATEGORIES
          </h2>
          <p className="font-[family-name:var(--font-syn-mono)] text-xs uppercase">
            [ DRAGCLICK ]
          </p>
        </div>
        <div className="mt-10">
          <SynRail>
            {SYN_CATS.map((c) => (
              <Link
                key={c.slug}
                href={`${SYN.base}/shop`}
                className="group w-[72vw] shrink-0 sm:w-[38vw] lg:w-[18vw]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.label}
                    fill
                    sizes="30vw"
                    className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <p className="mt-3 flex items-baseline justify-between font-[family-name:var(--font-syn-display)] text-2xl uppercase leading-none">
                  {c.label}
                  <span className="font-[family-name:var(--font-syn-mono)] text-sm text-[#ed3833]">
                    [{c.count}]
                  </span>
                </p>
              </Link>
            ))}
          </SynRail>
        </div>
        <Link
          href={`${SYN.base}/shop`}
          className="mt-10 inline-block font-[family-name:var(--font-syn-mono)] uppercase"
        >
          <strong>[</strong> SEE ALL <strong>]</strong>
        </Link>
      </section>

      <section className="grid bg-black text-white lg:grid-cols-2">
        {[
          {
            k: "glam",
            n: "DRESSES",
            sub: "(glam)",
            copy: "Inspired by Berlin’s nightlife, BERliN Vibes FW25/26 celebrates women’s bold sexuality.",
            count: 25,
            img: SYN_IMG.sunna,
          },
          {
            k: "witch",
            n: "CORSETS",
            sub: "(witch)",
            copy: "Sheer mesh, latex, and oversized faux furs frame fearless silhouettes that empower women to own their untamed energy.",
            count: 7,
            img: SYN_IMG.velvet,
          },
        ].map((block) => (
          <article key={block.k} className="relative min-h-[72dvh] overflow-hidden">
            <Image
              src={block.img}
              alt=""
              fill
              sizes="50vw"
              className="object-cover opacity-55 grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="relative flex min-h-[72dvh] flex-col justify-end p-6 sm:p-12">
              <p className="font-[family-name:var(--font-syn-mono)] text-sm">05. CATEGORIES</p>
              <h3 className="mt-3 origin-left scale-x-[0.92] font-[family-name:var(--font-syn-display)] text-[clamp(2.8rem,6vw,5.5rem)] uppercase leading-[0.8]">
                {block.n}
                <span className="text-[#ed3833]">{block.sub}</span>
              </h3>
              <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-white/70">{block.copy}</p>
              <div className="mt-8 flex items-center justify-between font-[family-name:var(--font-syn-mono)] text-sm">
                <Link href={`${SYN.base}/shop`} className="uppercase">
                  <strong>[</strong> SEE COLLECTION <strong>]</strong>
                </Link>
                <span>
                  (UA) <strong className="text-[#ed3833]">[{block.count}]</strong>
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
