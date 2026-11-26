"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ANA_EASE } from "@/components/demo/anatolia/ana-motion";
import { ANA_CONTACT } from "@/components/demo/anatolia/ana-contact";
import { ANA_FILM } from "@/components/demo/anatolia/ana-content";
import { ANA_DEMO } from "@/components/demo/anatolia/ana-config";
import {
  isAnaHeroReady,
  resetAnaIntroGate,
  setAnaIntroPhase,
  subscribeAnaHeroReady,
} from "@/components/demo/anatolia/ana-intro-gate";

/** Wie lange der Clip sichtbar bleibt, nachdem er spielt */
export const ANA_INTRO_HOLD_MS = 2800;
export const ANA_INTRO_FADE_MS = 650;
/** Max. Warten auf Hero-Video, damit kein dunkler Gap entsteht */
export const ANA_INTRO_HERO_WAIT_MS = 1600;

/**
 * Sauberes Intro: nur Tinte + Clip, keine Zwischenbilder.
 * Hero-Video startet erst nach dem Fade.
 */
export function AnaIntroLoader() {
  const reduceMotion = useReducedMotion();
  const [dismissed, setDismissed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const holdStarted = useRef(false);
  const visible = !reduceMotion && !dismissed;

  useEffect(() => {
    resetAnaIntroGate();
    if (reduceMotion) {
      setAnaIntroPhase("holding");
      setAnaIntroPhase("done");
      setDismissed(true);
    }
  }, [reduceMotion]);

  useEffect(() => {
    if (!dismissed) return;
    const t = window.setTimeout(
      () => setAnaIntroPhase("done"),
      ANA_INTRO_FADE_MS + 80,
    );
    return () => window.clearTimeout(t);
  }, [dismissed]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !visible) return;

    let holdTimer = 0;
    let waitTimer = 0;
    let unsubHero: (() => void) | undefined;
    v.muted = true;
    v.playsInline = true;

    const dismissWhenHeroReady = () => {
      if (isAnaHeroReady()) {
        setDismissed(true);
        return;
      }
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        unsubHero?.();
        window.clearTimeout(waitTimer);
        setDismissed(true);
      };
      unsubHero = subscribeAnaHeroReady((ready) => {
        if (ready) finish();
      });
      waitTimer = window.setTimeout(finish, ANA_INTRO_HERO_WAIT_MS);
    };

    const startHold = () => {
      if (holdStarted.current) return;
      holdStarted.current = true;
      setPlaying(true);
      setAnaIntroPhase("holding");
      holdTimer = window.setTimeout(
        dismissWhenHeroReady,
        ANA_INTRO_HOLD_MS,
      );
    };

    const onReady = () => {
      v.play()
        .then(startHold)
        .catch(() => startHold());
    };

    if (v.readyState >= 3) onReady();
    else {
      v.addEventListener("canplaythrough", onReady, { once: true });
      v.addEventListener("canplay", onReady, { once: true });
    }

    v.load();
    v.play().catch(() => undefined);

    const failSafe = window.setTimeout(() => {
      if (!holdStarted.current) {
        holdStarted.current = true;
        setAnaIntroPhase("holding");
        setDismissed(true);
      }
    }, 4500);

    return () => {
      window.clearTimeout(failSafe);
      window.clearTimeout(holdTimer);
      window.clearTimeout(waitTimer);
      unsubHero?.();
      v.removeEventListener("canplaythrough", onReady);
      v.removeEventListener("canplay", onReady);
    };
  }, [visible]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setAnaIntroPhase("done");
      }}
    >
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[var(--ana-ink)]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: ANA_INTRO_FADE_MS / 1000, ease: ANA_EASE },
          }}
          aria-hidden
        >
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              playing ? "opacity-100" : "opacity-0"
            }`}
            src={ANA_FILM.excavator}
            muted
            loop
            playsInline
            preload="auto"
            autoPlay
          />

          <div
            className={`absolute inset-0 bg-[var(--ana-ink)] transition-opacity duration-700 ${
              playing ? "opacity-40" : "opacity-100"
            }`}
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.p
              className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[var(--ana-amber)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: ANA_EASE, delay: 0.08 }}
            >
              {ANA_DEMO.intro.label} · {ANA_CONTACT.sinceLabel}
            </motion.p>

            <div className="mt-6 overflow-hidden">
              <motion.p
                className="font-ana-display text-[clamp(3.6rem,14vw,9rem)] font-semibold leading-none tracking-[-0.045em] text-white"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: ANA_EASE, delay: 0.18 }}
              >
                {ANA_CONTACT.short}
              </motion.p>
            </div>

            <motion.p
              className="mt-5 max-w-sm text-sm tracking-[0.18em] text-white/55 sm:text-base"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: ANA_EASE, delay: 0.55 }}
            >
              Stein · Erde · Pflaster
            </motion.p>

            <motion.div
              className="mt-10 h-px origin-center bg-[var(--ana-amber)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: ANA_EASE, delay: 0.7 }}
              style={{ width: 120 }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
