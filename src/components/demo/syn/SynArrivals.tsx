"use client";

import Image from "next/image";
import Link from "next/link";
import { SYN } from "@/components/demo/syn/syn-config";
import { formatEur, SYN_PIECES, SYN_TAGS } from "@/components/demo/syn/syn-content";
import { useSyn } from "@/components/demo/syn/SynBag";
import { SynRail } from "@/components/demo/syn/SynRail";

function Card({
  slug,
  name,
  price,
  sizes,
  bestseller,
  image,
  hover,
}: {
  slug: string;
  name: string;
  price: number;
  sizes: string[];
  bestseller?: boolean;
  image: string;
  hover?: string;
}) {
  const s = useSyn();
  return (
    <article className="w-[62vw] shrink-0 sm:w-[34vw] lg:w-[17.5vw]">
      <Link href={`${SYN.base}/shop/${slug}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden bg-black">
          <Image
            src={image}
            alt={name}
            fill
            sizes="30vw"
            className="object-cover transition duration-[420ms] group-hover:opacity-0"
          />
          {hover && (
            <Image
              src={hover}
              alt=""
              fill
              sizes="30vw"
              className="object-cover opacity-0 transition duration-[420ms] group-hover:opacity-100 group-hover:scale-[1.04]"
            />
          )}
          {bestseller && (
            <span className="absolute left-2 top-2 bg-[#ed3833] px-2 py-0.5 font-[family-name:var(--font-syn-mono)] text-[10px] uppercase leading-none text-white">
              Best seller
            </span>
          )}
          <button
            type="button"
            className="absolute right-2 top-2 text-lg leading-none text-white mix-blend-difference"
            aria-label="Favorite"
            onClick={(e) => {
              e.preventDefault();
              s.toggleFav(slug);
            }}
          >
            {s.favs.includes(slug) ? "×" : "+"}
          </button>
        </div>
        <h3 className="mt-2 font-[family-name:var(--font-syn-display)] text-[1.05rem] uppercase leading-[1.05] sm:text-lg">
          {name}
        </h3>
        <p className="mt-1 font-[family-name:var(--font-syn-mono)] text-[12px] sm:text-sm">
          {formatEur(price)}{" "}
          <span className="opacity-45">{sizes.map((sz) => `(${sz})`).join(" ")}</span>
        </p>
      </Link>
    </article>
  );
}

export function SynArrivals() {
  const rows = [
    SYN_PIECES,
    [...SYN_PIECES.slice(4), ...SYN_PIECES.slice(0, 4)],
    [...SYN_PIECES].reverse(),
  ];
  const track = [...SYN_TAGS, ...SYN_TAGS, ...SYN_TAGS].join("   ·   ");

  return (
    <section className="bg-[#fff9f7] px-4 py-14 sm:px-8 lg:px-12">
      <div className="flex items-end justify-between gap-4">
        <h2 className="syn-display origin-left scale-x-[0.9] font-[family-name:var(--font-syn-display)] text-[clamp(2.4rem,7vw,5.6rem)] uppercase leading-[0.8]">
          02. New Arrivals
        </h2>
        <p className="font-[family-name:var(--font-syn-mono)] text-sm">(UA)</p>
      </div>

      <div className="syn-marquee mt-4">
        <p>{track}</p>
        <p aria-hidden>{track}</p>
      </div>

      <div className="mt-10 space-y-5">
        {rows.map((row, i) => (
          <SynRail key={i}>
            {row.map((p) => (
              <Card key={`${i}-${p.slug}`} {...p} />
            ))}
          </SynRail>
        ))}
      </div>

      <Link
        href={`${SYN.base}/shop`}
        className="mt-12 inline-block font-[family-name:var(--font-syn-mono)] uppercase"
      >
        <strong>[</strong> SEE ALL <strong>]</strong>
      </Link>
    </section>
  );
}
