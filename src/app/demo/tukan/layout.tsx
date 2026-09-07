import type { Metadata, Viewport } from "next";
import { Anton, IBM_Plex_Mono, Outfit } from "next/font/google";
import { TUKAN } from "@/components/demo/tukan/tukan-config";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tukan-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-tukan-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-tukan-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${TUKAN.brand.full} | Living Demo by YouForge`,
  description:
    "Living Demo: Maracuja Protein-Eis — 0 g Zucker, 14 g Protein, schmeckt nach Bali. Fiktive Marke, gebaut von YouForge.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `${TUKAN.brand.short} — ${TUKAN.brand.tagline}`,
    description: TUKAN.youforge.pitch,
    images: [{ url: TUKAN.assets + "/hero.jpg", width: 1536, height: 1024 }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07140e",
};

export default function TukanDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${sans.variable} ${mono.variable} tukan-demo min-h-dvh bg-[var(--tukan-void)] text-[var(--tukan-bone)] antialiased`}
      style={
        {
          "--tukan-void": "#07140e",
          "--tukan-bone": "#f4efe6",
          "--tukan-sun": "#ff7a18",
          "--tukan-leaf": "#1a3a28",
        } as React.CSSProperties
      }
    >
      <style>{`
        html:has(.tukan-demo) {
          scroll-behavior: auto !important;
          height: 100%;
          overflow: hidden;
        }
        body:has(.tukan-demo) {
          height: 100%;
          overflow: hidden;
        }
        body:has(.tukan-demo) header.z-50,
        body:has(.tukan-demo) main + footer,
        body:has(.tukan-demo) [data-demo-chat-widget],
        body:has(.tukan-demo) [data-demo-catalog-return] {
          display: none !important;
        }
        .tukan-demo {
          font-family: var(--font-tukan-sans), system-ui, sans-serif;
          overflow: hidden;
          height: 100dvh;
          hyphens: none;
          overflow-wrap: normal;
          word-break: normal;
        }
        .tukan-demo .font-tukan-display {
          font-family: var(--font-tukan-display), Impact, sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          line-height: 1;
          padding-inline-end: 0.08em;
          font-kerning: normal;
        }
        .tukan-demo h1.font-tukan-display {
          letter-spacing: 0.07em;
          line-height: 0.98;
          padding-inline-end: 0.1em;
        }
        .tukan-demo .tukan-headline {
          font-family: var(--font-tukan-sans), system-ui, sans-serif;
          text-transform: none;
          letter-spacing: -0.015em;
          line-height: 1.28;
          text-wrap: unset;
          overflow-wrap: normal;
          font-kerning: normal;
        }
        .tukan-demo .font-tukan-mono {
          font-family: var(--font-tukan-mono), ui-monospace, monospace;
        }
        .tukan-split {
          position: relative;
          display: inline-grid;
          overflow: hidden;
          vertical-align: bottom;
        }
        .tukan-split span { grid-area: 1 / 1; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .tukan-split span:last-child { transform: translateY(110%); color: var(--tukan-sun); }
        a:hover .tukan-split span:first-child,
        button:hover .tukan-split span:first-child { transform: translateY(-110%); }
        a:hover .tukan-split span:last-child,
        button:hover .tukan-split span:last-child { transform: translateY(0); }
        .tukan-demo h2,
        .tukan-demo h3 {
          font-family: var(--font-tukan-sans), system-ui, sans-serif;
        }
        .tukan-demo ::selection {
          background: color-mix(in srgb, var(--tukan-sun) 55%, transparent);
          color: var(--tukan-void);
        }
        .tukan-demo :focus-visible {
          outline: 1px solid var(--tukan-sun);
          outline-offset: 3px;
        }
        .tukan-glass {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow:
            0 0 0 1px color-mix(in srgb, var(--tukan-sun) 18%, transparent),
            0 30px 80px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(16px);
        }
        @keyframes tukan-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        .tukan-marquee {
          animation: tukan-marquee 28s linear infinite;
          will-change: transform;
        }
        .tukan-poster-type {
          text-shadow: 0 10px 36px rgba(0,0,0,0.55);
        }
        .tukan-poster-type h1 {
          filter: drop-shadow(0 18px 28px rgba(0,0,0,0.45));
        }
        .tukan-look-bg {
          transform: translate3d(calc(var(--look-x, 0) * -22px), calc(var(--look-y, 0) * -14px), 0);
          transition: transform 0.5s ease-out;
          will-change: transform;
        }
        .tukan-look-bird {
          transform: translate3d(calc(var(--look-x, 0) * 32px), calc(var(--look-y, 0) * 20px), 0);
          transition: transform 0.5s ease-out;
          will-change: transform;
        }
        @keyframes tukan-ken {
          0% { transform: scale(1.08) translate3d(0, 0, 0); }
          40% { transform: scale(1.16) translate3d(-2.4%, 1.6%, 0); }
          100% { transform: scale(1.08) translate3d(0, 0, 0); }
        }
        .tukan-ken {
          animation: tukan-ken 32s ease-in-out infinite;
          will-change: transform;
        }
        .tukan-sun {
          pointer-events: none;
          position: absolute;
          left: 4%;
          top: -8%;
          z-index: 1;
          width: min(58vw, 640px);
          height: min(58vw, 640px);
          background: radial-gradient(circle, rgba(255, 186, 82, 0.5) 0%, rgba(255, 140, 40, 0.12) 38%, transparent 68%);
          mix-blend-mode: screen;
          animation: tukan-sun 8s ease-in-out infinite;
        }
        @keyframes tukan-sun {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 0.95; transform: scale(1.12); }
        }
        .tukan-rays {
          pointer-events: none;
          position: absolute;
          inset: -30%;
          z-index: 1;
          background: repeating-conic-gradient(from 200deg at 22% 16%, rgba(255, 190, 90, 0) 0deg, rgba(255, 210, 120, 0.16) 3deg, rgba(255, 180, 80, 0) 8deg);
          mix-blend-mode: screen;
          animation: tukan-rays 11s ease-in-out infinite;
        }
        @keyframes tukan-rays {
          0%, 100% { opacity: 0.28; transform: rotate(-2deg); }
          50% { opacity: 0.62; transform: rotate(3deg); }
        }
        .tukan-bird-mask {
          -webkit-mask-image: radial-gradient(ellipse 62% 72% at 48% 48%, #000 40%, transparent 78%);
          mask-image: radial-gradient(ellipse 62% 72% at 48% 48%, #000 40%, transparent 78%);
        }
        @keyframes tukan-float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-1deg); }
          50% { transform: translate3d(14px, -18px, 0) rotate(1.4deg); }
        }
        .tukan-bird-float {
          animation: tukan-float 5.4s ease-in-out 1.55s infinite;
        }
        .tukan-dust {
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 6;
          background-image:
            radial-gradient(1.5px 1.5px at 18% 32%, rgba(255, 214, 160, 0.7) 50%, transparent 60%),
            radial-gradient(1px 1px at 72% 28%, rgba(255, 180, 90, 0.65) 50%, transparent 60%),
            radial-gradient(1.5px 1.5px at 84% 48%, rgba(255, 236, 200, 0.55) 50%, transparent 60%),
            radial-gradient(1px 1px at 62% 18%, rgba(255, 160, 70, 0.5) 50%, transparent 60%),
            radial-gradient(2px 2px at 90% 62%, rgba(255, 200, 120, 0.45) 50%, transparent 60%),
            radial-gradient(1px 1px at 28% 58%, rgba(255, 220, 160, 0.5) 50%, transparent 60%),
            radial-gradient(1.5px 1.5px at 48% 22%, rgba(255, 170, 80, 0.4) 50%, transparent 60%);
          animation: tukan-dust 9s linear infinite;
        }
        .tukan-dust-slow {
          z-index: 5;
          opacity: 0.7;
          animation-duration: 16s;
          animation-direction: reverse;
        }
        @keyframes tukan-dust {
          from { transform: translateY(12px); opacity: 0.35; }
          40% { opacity: 0.9; }
          to { transform: translateY(-36px); opacity: 0.2; }
        }
        .tukan-ice-scene {
          perspective: 1100px;
        }
        .tukan-ice {
          transform-style: preserve-3d;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }
        .tukan-ice::after {
          content: "";
          pointer-events: none;
          position: absolute;
          inset: 8% 18%;
          border-radius: 2rem;
          background: linear-gradient(118deg, transparent 38%, rgba(255,255,255,0.22) 49%, transparent 58%);
          mix-blend-mode: overlay;
        }
        .tukan-cabinet {
          border-radius: 1.15rem;
          background:
            linear-gradient(180deg, rgba(38, 48, 44, 0.88) 0%, rgba(12, 22, 18, 0.94) 40%, rgba(5, 12, 9, 0.96) 100%);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.18),
            inset 0 -18px 40px rgba(0,0,0,0.45),
            0 0 0 1px rgba(255,122,24,0.12),
            0 24px 80px rgba(0,0,0,0.55),
            0 0 90px rgba(255,122,24,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(10px);
        }
        .tukan-gasket {
          border-radius: 0.85rem;
          background: rgba(7, 20, 14, 0.92);
          box-shadow:
            inset 0 0 0 3px #121c18,
            inset 0 0 0 5px rgba(255,255,255,0.06),
            inset 0 30px 50px rgba(0,0,0,0.35);
        }
        .tukan-drawer {
          border-radius: 0.55rem;
          flex: none;
          min-height: 0;
          overflow: hidden;
          background: linear-gradient(180deg, #1a2621 0%, #0d1612 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
          height: 3.75rem;
          transition: height 0.62s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease;
        }
        .tukan-drawer.is-open {
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.14),
            0 0 0 1px rgba(255,122,24,0.28),
            0 18px 40px rgba(0,0,0,0.35);
        }
        .tukan-drawer-body {
          height: calc(100% - 3.75rem);
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }
        .tukan-drawer.is-open .tukan-drawer-body.tukan-bin-scroll {
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .tukan-drawer.is-open .tukan-drawer-body {
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.45s ease 0.16s;
        }
        .tukan-drawer:not(.is-open) .tukan-ken,
        .tukan-drawer:not(.is-open) .tukan-dust,
        .tukan-drawer:not(.is-open) .tukan-sun,
        .tukan-drawer:not(.is-open) .tukan-rays,
        .tukan-drawer:not(.is-open) .tukan-sheen,
        .tukan-drawer:not(.is-open) .tukan-vapor {
          animation: none !important;
        }
        .tukan-handle {
          height: 3.75rem;
          min-height: 3.75rem;
          overflow: visible;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.015) 100%);
          transition: background 0.35s ease;
        }
        .tukan-handle:hover:not(.tukan-handle-open) {
          background:
            linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%);
        }
        .tukan-handle:hover .tukan-grip {
          transform: scaleX(1.08);
          filter: brightness(1.25);
        }
        .tukan-handle-open {
          background:
            linear-gradient(180deg, rgba(255,122,24,0.22) 0%, rgba(255,255,255,0.03) 100%);
        }
        .tukan-grip {
          width: 2.1rem;
          height: 0.55rem;
          flex: none;
          border-radius: 999px;
          background: linear-gradient(180deg, #c5c0b6 0%, #7d786e 48%, #d9d4c8 100%);
          box-shadow: 0 1px 0 rgba(255,255,255,0.35), inset 0 1px 2px rgba(0,0,0,0.45);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease;
        }
        .tukan-bin {
          position: relative;
          background:
            radial-gradient(ellipse at 50% 0%, rgba(180, 220, 255, 0.12), transparent 46%),
            radial-gradient(ellipse at 18% 12%, rgba(255,122,24,0.12), transparent 42%),
            #07140e;
        }
        .tukan-vapor {
          pointer-events: none;
          position: absolute;
          left: 6%;
          right: 6%;
          top: -8%;
          height: 42%;
          background: radial-gradient(ellipse at 50% 100%, rgba(210,230,255,0.22), transparent 70%);
          filter: blur(18px);
          animation: tukan-vapor 4.8s ease-in-out infinite;
        }
        @keyframes tukan-vapor {
          0%, 100% { opacity: 0.25; transform: translateY(8px) scaleX(0.92); }
          50% { opacity: 0.8; transform: translateY(-10px) scaleX(1.05); }
        }
        .tukan-led {
          color: #7dffb0;
          text-shadow: 0 0 10px rgba(125, 255, 176, 0.7);
          animation: tukan-led 2.4s ease-in-out infinite;
        }
        @keyframes tukan-led {
          0%, 100% { opacity: 0.72; }
          50% { opacity: 1; }
        }
        .tukan-pull {
          display: inline-block;
          padding-block: 2px;
          animation: tukan-pull 1.6s ease-in-out infinite;
        }
        @keyframes tukan-pull {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(1px); opacity: 1; }
        }
        .tukan-cta {
          box-shadow: 0 0 0 0 rgba(255,122,24,0.55);
          animation: tukan-cta 2.2s ease-out infinite;
        }
        @keyframes tukan-cta {
          0% { box-shadow: 0 0 0 0 rgba(255,122,24,0.5); }
          70% { box-shadow: 0 0 0 14px rgba(255,122,24,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,122,24,0); }
        }
        .tukan-sheen {
          pointer-events: none;
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 36%, rgba(255,255,255,0.28) 48%, transparent 60%);
          mix-blend-mode: overlay;
          animation: tukan-sheen 3.8s ease-in-out infinite;
        }
        @keyframes tukan-sheen {
          0% { transform: translateX(-28%); opacity: 0; }
          35% { opacity: 1; }
          100% { transform: translateX(28%); opacity: 0; }
        }
        .tukan-drip {
          pointer-events: none;
          position: absolute;
          width: 5px;
          height: 9px;
          border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
          background: rgba(200, 230, 255, 0.35);
          filter: blur(0.4px);
          animation: tukan-drip 5.5s ease-in infinite;
        }
        @keyframes tukan-drip {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translateY(18px); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tukan-marquee,
          .tukan-dust,
          .tukan-ken,
          .tukan-sun,
          .tukan-rays,
          .tukan-bird-float,
          .tukan-vapor,
          .tukan-led,
          .tukan-pull,
          .tukan-cta,
          .tukan-sheen,
          .tukan-drip { animation: none; }
          .tukan-ice { transition: none; }
          .tukan-drawer { transition: none; }
          .tukan-drawer-body { transition: none; }
        }
      `}</style>
      {children}
    </div>
  );
}
