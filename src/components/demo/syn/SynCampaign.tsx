"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SYN, SYN_IMG } from "@/components/demo/syn/syn-config";
import { SYN_EASE } from "@/components/demo/syn/syn-motion";

export function SynCampaign() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <section
      ref={ref}
      id="campaign"
      className="relative min-h-[100dvh] overflow-hidden bg-black text-white"
    >
      <motion.div className="absolute inset-[-12%]" style={reduce ? undefined : { y }}>
        <Image
          src={SYN_IMG.street}
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-cover opacity-75"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/20" />
      <div className="relative z-[1] flex min-h-[100dvh] flex-col justify-end px-4 py-16 sm:px-12">
        <p className="font-[family-name:var(--font-syn-mono)] text-sm">03. Campaign</p>
        <h2 className="mt-4 max-w-[16ch] origin-left scale-x-[0.92] font-[family-name:var(--font-syn-display)] text-[clamp(2.6rem,8vw,7.2rem)] uppercase leading-[0.82]">
          Straight <span className="text-[#ed3833]">masculine</span> design is all you need for an
          elegant, <em className="not-italic text-[#ed3833]">ultra-feminine</em> look.
        </h2>
        <p className="mt-6 font-[family-name:var(--font-syn-mono)] text-sm">
          NEW <strong>( DRESSES )</strong> (UA) (SS_“25)
        </p>
        <Link
          href={`${SYN.base}/shop`}
          className="mt-8 inline-block font-[family-name:var(--font-syn-mono)] uppercase"
        >
          <strong>[</strong> SEE campaign <strong>]</strong>
        </Link>
      </div>
      <motion.div
        className="pointer-events-none absolute right-[6%] top-[12%] z-[2] h-[min(52vw,520px)] w-[min(42vw,420px)]"
        initial={reduce ? false : { scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: SYN_EASE }}
      >
        <svg width="0" height="0" aria-hidden>
          <clipPath id="syn-lips" clipPathUnits="objectBoundingBox">
            <path d="M0.50 0.18 C0.36 0.04 0.20 0.08 0.10 0.28 C0.02 0.44 0.08 0.52 0.20 0.56 C0.08 0.62 0.04 0.74 0.14 0.86 C0.28 0.98 0.42 0.94 0.50 0.86 C0.58 0.94 0.72 0.98 0.86 0.86 C0.96 0.74 0.92 0.62 0.80 0.56 C0.92 0.52 0.98 0.44 0.90 0.28 C0.80 0.08 0.64 0.04 0.50 0.18 Z" />
          </clipPath>
        </svg>
        <div className="syn-lips-mask relative h-full w-full">
          <Image src={SYN_IMG.lips} alt="" fill className="object-cover" sizes="40vw" />
        </div>
      </motion.div>
    </section>
  );
}
