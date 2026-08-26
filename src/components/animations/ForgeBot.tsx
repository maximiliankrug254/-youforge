"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Wireframe KI-Einheit — industriell, YouForge-Lime, kein Cartoon. */
export function ForgeBot({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={className} aria-hidden>
      <motion.div
        className="relative mx-auto h-[340px] w-[280px] sm:h-[400px] sm:w-[320px]"
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Orbit rings */}
        <motion.div
          className="absolute left-1/2 top-[42%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20 sm:h-[260px] sm:w-[260px]"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent" />
        </motion.div>
        <motion.div
          className="absolute left-1/2 top-[42%] h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 sm:h-[200px] sm:w-[200px]"
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        />

        <svg
          viewBox="0 0 320 400"
          className="relative z-10 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Core glow disc */}
          <circle cx="160" cy="168" r="54" className="fill-accent/10" />
          <circle
            cx="160"
            cy="168"
            r="70"
            stroke="currentColor"
            strokeWidth="0.6"
            className="text-white/15"
          />

          {/* Head */}
          <rect
            x="108"
            y="72"
            width="104"
            height="88"
            rx="18"
            stroke="currentColor"
            strokeWidth="1.4"
            className="text-white/55"
          />
          <rect
            x="122"
            y="98"
            width="76"
            height="28"
            rx="6"
            className="fill-black/40 stroke-accent/80"
            strokeWidth="1.2"
          />
          {/* Visor scan */}
          <motion.rect
            x="128"
            y="104"
            width="18"
            height="16"
            rx="2"
            className="fill-accent"
            animate={reduce ? undefined : { opacity: [0.45, 1, 0.45], x: [0, 48, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Antenna */}
          <line
            x1="160"
            y1="72"
            x2="160"
            y2="48"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-white/40"
          />
          <circle cx="160" cy="42" r="5" className="fill-accent" />
          <circle
            cx="160"
            cy="42"
            r="10"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-accent/50"
          />

          {/* Neck */}
          <rect
            x="148"
            y="160"
            width="24"
            height="22"
            stroke="currentColor"
            strokeWidth="1.1"
            className="text-white/35"
          />

          {/* Torso */}
          <path
            d="M96 188 H224 L246 310 H74 Z"
            stroke="currentColor"
            strokeWidth="1.3"
            className="text-white/45"
          />
          <rect
            x="132"
            y="210"
            width="56"
            height="56"
            rx="8"
            stroke="currentColor"
            strokeWidth="1.1"
            className="text-accent/70"
          />
          <circle cx="160" cy="238" r="10" className="fill-accent/80" />
          <circle
            cx="160"
            cy="238"
            r="18"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-accent/40"
          />

          {/* Arms */}
          <path
            d="M96 200 L58 248 L72 252 L108 214"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-white/35"
          />
          <path
            d="M224 200 L262 248 L248 252 L212 214"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-white/35"
          />

          {/* Signal ticks */}
          <path
            d="M42 120 H70 M250 120 H278"
            stroke="currentColor"
            strokeWidth="1"
            className="text-accent/50"
            strokeLinecap="round"
          />
          <path
            d="M48 132 H64 M256 132 H272"
            stroke="currentColor"
            strokeWidth="1"
            className="text-white/25"
            strokeLinecap="round"
          />
        </svg>

        {/* Floating status chips */}
        <motion.div
          className="absolute left-0 top-8 border border-accent/30 bg-black/50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-accent backdrop-blur-sm sm:-left-4"
          animate={reduce ? undefined : { opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          Signal · OK
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-0 border border-white/15 bg-black/50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm sm:-right-2"
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          24/7 Online
        </motion.div>
      </motion.div>
    </div>
  );
}
