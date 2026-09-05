"use client";

import Image from "next/image";
import { catalogStyles } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function CatalogFilmJump({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "sticky top-14 z-30 border-b border-border/80 bg-background/90 backdrop-blur-md",
        className
      )}
    >
      <div className="mx-auto max-w-[92rem] px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
            Filmstreifen · springen
          </p>
          <p className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-muted/70 sm:block">
            {String(catalogStyles.length).padStart(2, "0")} Stile
          </p>
        </div>

        <div
          className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="navigation"
          aria-label="Katalog-Stile"
        >
          <div className="flex w-max gap-2 rounded-md bg-[#0c0c0c] p-2 ring-1 ring-white/10">
            {catalogStyles.map((style, i) => (
              <a
                key={style.slug}
                href={`#${style.slug}`}
                className="group relative block h-14 w-[5.75rem] shrink-0 overflow-hidden rounded-[2px] bg-black ring-1 ring-white/10 transition hover:ring-accent/60 sm:h-16 sm:w-[6.5rem]"
              >
                <Image
                  src={style.image}
                  alt=""
                  fill
                  sizes="104px"
                  quality={70}
                  className="object-cover object-top transition duration-300 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-1.5 pb-1 pt-4">
                  <span className="block font-mono text-[8px] uppercase tracking-[0.14em] text-white/85">
                    {String(i + 1).padStart(2, "0")} · {style.industry}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
