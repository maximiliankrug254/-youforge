"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SYN } from "@/components/demo/syn/syn-config";
import { SYN_HERO_CARDS } from "@/components/demo/syn/syn-content";
import { SYN_EASE, tearClip } from "@/components/demo/syn/syn-motion";
import { useSyn } from "@/components/demo/syn/SynBag";
import { SynRail } from "@/components/demo/syn/SynRail";

function TearCard({
  title,
  image,
  hover,
  i,
}: {
  title: string;
  image: string;
  hover: string;
  i: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "center 0.35"],
  });
  const clip = useTransform(scrollYProgress, (v) => tearClip(100 - v * 92));

  return (
    <Link
      ref={ref}
      href={`${SYN.base}/shop`}
      className="group relative block w-[78vw] shrink-0 sm:w-[42vw] lg:w-[22vw]"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-black">
        <Image
          src={hover}
          alt=""
          fill
          sizes="40vw"
          className="object-cover"
          priority={i < 2}
        />
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={reduce ? undefined : { clipPath: clip }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="40vw"
            className="object-cover grayscale contrast-125 transition duration-700 group-hover:grayscale-0 group-hover:scale-[1.06]"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-x-[-2%] bottom-[-6%] h-[18%] bg-[url('/demo/syn/tear.png')] bg-cover mix-blend-multiply opacity-90" />
      </div>
      <h3 className="absolute bottom-5 left-3 right-3 font-[family-name:var(--font-syn-display)] text-[clamp(1.4rem,2.4vw,2.1rem)] uppercase leading-[0.82] text-white mix-blend-difference">
        {title}
      </h3>
    </Link>
  );
}

export function SynHero() {
  const { booted } = useSyn();
  const reduce = useReducedMotion();
  const word = SYN.brand.short.split("");

  return (
    <section className="relative overflow-hidden bg-[#fff9f7] pt-16">
      <div className="px-4 pt-8 sm:px-8 lg:px-12">
        <h1 className="syn-display origin-left scale-x-[0.86] overflow-hidden font-[family-name:var(--font-syn-display)] text-[clamp(4.2rem,18vw,16rem)] leading-[0.74] tracking-[-0.055em] text-black">
          {word.map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              className="inline-block"
              initial={reduce ? false : { y: "118%" }}
              animate={booted || reduce ? { y: "0%" } : { y: "118%" }}
              transition={{ duration: 0.92, delay: 0.035 * i, ease: SYN_EASE }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="mt-5 max-w-xl font-[family-name:var(--font-syn-mono)] text-sm sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={booted || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, delay: 0.42, ease: SYN_EASE }}
        >
          {SYN.brand.tagline}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-8 font-[family-name:var(--font-syn-mono)] text-sm uppercase"
          initial={reduce ? false : { opacity: 0 }}
          animate={booted || reduce ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <span className="syn-bracket">
            <strong>[</strong> be yourself <strong>]</strong>
          </span>
          <Link href={`${SYN.base}/shop`} className="syn-bracket syn-bracket--link">
            <strong>[</strong> SEE COLLECTION <strong>]</strong>
          </Link>
        </motion.div>
      </div>

      <div className="mt-12 sm:mt-16">
        <SynRail>
          {SYN_HERO_CARDS.map((card, i) => (
            <TearCard key={card.title} {...card} i={i} />
          ))}
        </SynRail>
      </div>
      <div className="syn-section-rip" aria-hidden />
    </section>
  );
}
