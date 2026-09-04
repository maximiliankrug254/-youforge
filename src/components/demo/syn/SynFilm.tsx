"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SYN_IMG } from "@/components/demo/syn/syn-config";

export function SynFilm() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.28, 1]);
  const clip = useTransform(
    scrollYProgress,
    [0, 0.72],
    ["inset(18% 22% 18% 22%)", "inset(0% 0% 0% 0%)"],
  );
  const dim = useTransform(scrollYProgress, [0, 0.55, 1], [0.55, 0.2, 0.45]);

  return (
    <section ref={ref} className="relative h-[220vh] bg-black">
      <div className="sticky top-0 h-dvh overflow-hidden">
        <motion.div className="absolute inset-0" style={reduce ? undefined : { scale, clipPath: clip }}>
          <Image src={SYN_IMG.film} alt="" fill className="object-cover" sizes="100vw" priority={false} />
          <motion.div className="absolute inset-0 bg-black" style={reduce ? undefined : { opacity: dim }} />
        </motion.div>
        <div className="relative z-[1] flex h-dvh flex-col justify-end px-4 py-16 text-white sm:px-12">
          <p className="font-[family-name:var(--font-syn-mono)] text-sm">07. pyra film</p>
          <h2 className="mt-3 origin-left scale-x-[0.9] font-[family-name:var(--font-syn-display)] text-[clamp(2.6rem,7vw,6rem)] uppercase leading-[0.82]">
            A Vision in Motion
          </h2>
          <p className="mt-6 max-w-lg text-white/70">
            Experience the essence of Pyra through film. Our cinematic journey brings to life
            the bold, artistic spirit behind each collection.
          </p>
          <p className="mt-8 font-[family-name:var(--font-syn-mono)] text-xs uppercase tracking-[0.32em] text-[#ed3833]">
            tip: scroll to dive
          </p>
        </div>
      </div>
    </section>
  );
}
