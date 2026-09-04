"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SYN } from "@/components/demo/syn/syn-config";
import { SYN_EASE } from "@/components/demo/syn/syn-motion";

export function SynManifesto() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xL = useTransform(scrollYProgress, [0, 1], ["-6%", "4%"]);
  const xR = useTransform(scrollYProgress, [0, 1], ["6%", "-4%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#fff9f7] py-24 text-black">
      <div className="syn-section-rip syn-section-rip--flip" aria-hidden />
      <div className="relative mx-auto grid max-w-[1500px] gap-16 px-4 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div>
          <motion.p
            className="font-[family-name:var(--font-syn-mono)] text-sm text-[#ed3833]"
            style={reduce ? undefined : { x: xL }}
          >
            SPACE (transformation)
          </motion.p>
          <motion.h2
            className="mt-4 origin-left scale-x-[0.9] font-[family-name:var(--font-syn-display)] text-[clamp(2.6rem,7vw,6rem)] uppercase leading-[0.82]"
            initial={reduce ? false : { y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, ease: SYN_EASE }}
          >
            our pieces are built to LAST, not to be REPLACED.
          </motion.h2>
          <Link
            href={`${SYN.base}/who-we-are`}
            className="mt-8 inline-block font-[family-name:var(--font-syn-mono)] uppercase"
          >
            <strong>[</strong> WHO WE ARE <strong>]</strong>
          </Link>
        </div>
        <div>
          <motion.p
            className="font-[family-name:var(--font-syn-mono)] text-sm text-[#ed3833]"
            style={reduce ? undefined : { x: xR }}
          >
            FREEDOM (creative)
          </motion.p>
          <p className="mt-8 max-w-[34ch] text-lg leading-relaxed">
            <strong>PYRA</strong> is about wearing what empowers you – what mirrors your{" "}
            <strong>emotions,</strong> your <strong>energy,</strong> your <strong>essence.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
