"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { catalogStyles } from "@/lib/catalog";
import { cn } from "@/lib/utils";

const FRAMES = catalogStyles.slice(0, 8);
/** Doppelt für längeren Strip-Look beim Hin und Her */
const STRIP = [...FRAMES, ...FRAMES];

function SprocketRow() {
  return (
    <div className="flex justify-between gap-1.5 px-1.5 py-1" aria-hidden>
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className="h-2 w-2 shrink-0 rounded-[2px] bg-black/80 ring-1 ring-white/15"
        />
      ))}
    </div>
  );
}

export function CatalogFloat() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  // Filmstreifen: links → rechts → zurück (Scroll-getrieben)
  const stripX = useTransform(
    scrollYProgress,
    [0, 0.18, 0.36, 0.54, 0.72, 0.9, 1],
    reduceMotion
      ? [0, 0, 0, 0, 0, 0, 0]
      : [0, -72, -140, -60, -160, -40, -100]
  );
  const floatX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    reduceMotion ? [0, 0, 0, 0, 0] : [0, -22, 16, -18, 8]
  );
  const floatY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [0, -14, 8]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    reduceMotion ? [-5, -5, -5, -5] : [-7, -2, -9, -4]
  );

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hide =
    !pathname ||
    pathname.startsWith("/demo/") ||
    pathname === "/katalog" ||
    pathname.startsWith("/katalog/");

  if (hide || FRAMES.length === 0) return null;

  return (
    <motion.div
      style={{ x: floatX, y: floatY, rotate }}
      className={cn(
        "fixed bottom-24 right-3 z-40 sm:bottom-28 sm:right-5",
        "transition-opacity duration-500",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <Link
        href="/katalog"
        aria-label="Katalog öffnen — Website-Stile ansehen"
        className={cn(
          "group block w-[11.5rem] overflow-hidden rounded-lg border border-border/70",
          "bg-[#0c0c0c] shadow-[0_18px_50px_rgba(0,0,0,0.45)]",
          "transition hover:border-accent/45 sm:w-[13rem]"
        )}
      >
        <SprocketRow />

        <div className="relative overflow-hidden border-y border-white/10 bg-black">
          <motion.div style={{ x: stripX }} className="flex w-max gap-1.5 px-1.5 py-1.5">
            {STRIP.map((style, i) => (
              <span
                key={`${style.slug}-${i}`}
                className="relative block h-[3.35rem] w-[5.4rem] shrink-0 overflow-hidden rounded-[2px] bg-neutral-950 ring-1 ring-white/10 sm:h-[3.7rem] sm:w-[6rem]"
              >
                <Image
                  src={style.image}
                  alt=""
                  fill
                  sizes="100px"
                  quality={70}
                  className="object-cover object-top"
                />
              </span>
            ))}
          </motion.div>
          <span
            className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black to-transparent"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black to-transparent"
            aria-hidden
          />
        </div>

        <SprocketRow />

        <span className="flex items-center justify-between gap-2 px-2.5 pb-2 pt-0.5">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55 group-hover:text-accent">
            Katalog
          </span>
          <span className="font-mono text-[9px] text-accent" aria-hidden>
            →
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
