"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BbfButton } from "@/components/demo/bbf/BbfButton";
import { BBF_EASE } from "@/components/demo/bbf/bbf-motion";
import { BBF_ASSETS, BBF_CONTACT } from "@/components/demo/bbf/bbf-contact";

export function BbfHero() {
  const reduceMotion = useReducedMotion();
  const shiftRef = useRef<HTMLDivElement>(null);

  function onPointerMove(e: React.PointerEvent<HTMLElement>) {
    if (reduceMotion || !shiftRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    shiftRef.current.style.transform = `translate3d(${x * -22}px, ${y * -14}px, 0)`;
  }

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--bbf-void)] text-white"
      onPointerMove={onPointerMove}
    >
      <div ref={shiftRef} className="absolute -inset-[8%]">
        <Image
          src={BBF_ASSETS.hero}
          alt="Hände bei der Arbeit am Motor in der Werkstatt"
          fill
          priority
          sizes="100vw"
          className="bbf-breathe object-cover object-center"
        />
      </div>
      <div
        className="bbf-glow pointer-events-none absolute -left-[10%] bottom-[8%] h-[46vw] w-[46vw] rounded-full bg-[radial-gradient(circle,rgba(255,77,0,0.32),transparent_68%)] blur-2xl"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.45)_34%,rgba(0,0,0,0.12)_62%,transparent_100%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-5 pb-[max(6.5rem,env(safe-area-inset-bottom))] pt-6 sm:px-8 lg:px-12 lg:pb-14 lg:pt-8">
        <header data-bbf-nav className="flex items-center justify-between gap-4">
          <a href="#top" className="min-w-0" aria-label={BBF_CONTACT.brand}>
            <span className="font-bbf-display block text-[1.7rem] font-semibold leading-none tracking-[0.06em] sm:text-4xl">
              B&nbsp;&amp;&nbsp;B
            </span>
            <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Fahrzeugtechnik · Geilshausen
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#leistungen" className="hover:text-white">
              Leistungen
            </a>
            <a href="#kontakt" className="hover:text-white">
              Kontakt
            </a>
          </nav>
          <BbfButton
            href={`tel:${BBF_CONTACT.phoneTel}`}
            strength={0.18}
            className="hidden bg-[var(--bbf-red)] px-5 py-2.5 text-sm font-semibold text-black md:inline-flex"
          >
            Anrufen
          </BbfButton>
        </header>

        <div className="flex flex-1 flex-col justify-end pb-2 lg:max-w-[760px]">
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--bbf-red)]"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: BBF_EASE }}
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 bg-[var(--bbf-red)] align-middle bbf-pulse" aria-hidden />
            {BBF_CONTACT.region}
          </motion.p>
          <motion.h1
            className="mt-4 max-w-full font-bbf-display text-[clamp(2.85rem,13vw,7.2rem)] font-semibold leading-[0.9] tracking-[-0.04em]"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: BBF_EASE, delay: 0.08 }}
          >
            Werkstatt
            <br />
            und <span className="bbf-ember text-[var(--bbf-red)]">Autogas.</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: BBF_EASE, delay: 0.2 }}
          >
            Inspektion, Reparatur und Autogasanlagen. Grünberger Straße 12,
            Rabenau-Geilshausen.
          </motion.p>
          <motion.div
            className="mt-8 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: BBF_EASE, delay: 0.32 }}
          >
            <BbfButton
              href={`tel:${BBF_CONTACT.phoneTel}`}
              strength={0.18}
              className="inline-flex w-full items-center justify-center bg-[var(--bbf-red)] px-7 py-3.5 text-sm font-semibold text-black sm:w-auto"
            >
              {BBF_CONTACT.phoneDisplay}
            </BbfButton>
            <BbfButton
              href="#leistungen"
              strength={0.18}
              className="inline-flex w-full items-center justify-center border border-white/30 px-7 py-3.5 text-sm font-semibold text-white sm:w-auto"
            >
              Leistungen
            </BbfButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
