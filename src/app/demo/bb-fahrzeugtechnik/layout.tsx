import type { Metadata, Viewport } from "next";
import { BbfCursor } from "@/components/demo/bbf/BbfCursor";
import { BbfLenis } from "@/components/demo/bbf/BbfLenis";
import { BbfIntroLoader } from "@/components/demo/bbf/BbfIntroLoader";

export const metadata: Metadata = {
  title: "B & B Fahrzeugtechnik — Werkstatt und Autogas in Geilshausen",
  description:
    "Präsentation für B & B Fahrzeugtechnik GmbH in Rabenau-Geilshausen: Werkstatt und Autogasanlagen an der Grünberger Straße.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080808",
};

export default function BbFahrzeugtechnikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=satoshi@400,500,600,700&display=swap"
        rel="stylesheet"
      />
      <div
        className="bbf-demo min-h-dvh bg-[var(--bbf-void)] text-white antialiased"
        style={
          {
            "--bbf-void": "#070605",
            "--bbf-panel": "#120e0b",
            "--bbf-steel": "#0c0a09",
            "--bbf-red": "#ff4d00",
            "--bbf-red-hot": "#ff7a33",
            "--bbf-silver": "#b8bcc4",
            "--bbf-muted": "#8a8f98",
            "--bbf-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
            "--font-bbf-display": "'Clash Display', 'Satoshi', sans-serif",
            "--font-bbf-sans": "'Satoshi', sans-serif",
          } as React.CSSProperties
        }
      >
        <style>{`
          body:has(.bbf-demo) header:not([data-bbf-nav]),
          body:has(.bbf-demo) footer,
          body:has(.bbf-demo) [data-demo-chat-widget],
          body:has(.bbf-demo) nextjs-portal {
            display: none !important;
          }
          .bbf-demo {
            font-family: var(--font-bbf-sans);
            overflow-x: clip;
          }
          .bbf-demo h1,
          .bbf-demo h2,
          .bbf-demo h3,
          .bbf-demo .font-bbf-display {
            font-family: var(--font-bbf-display);
          }
          .bbf-demo ::selection {
            background: color-mix(in srgb, var(--bbf-red) 55%, transparent);
            color: #fff;
          }
          .bbf-poster {
            font-size: min(12.5rem, 18.4vw);
            line-height: 0.8;
            letter-spacing: -0.055em;
          }
          .bbf-phone {
            font-size: min(10rem, 22vw);
            line-height: 0.82;
            letter-spacing: -0.05em;
          }
          @keyframes bbf-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .bbf-marquee {
            animation: bbf-marquee 14s linear infinite;
            will-change: transform;
          }
          @keyframes bbf-ken {
            from { transform: scale(1.12); }
            to { transform: scale(1); }
          }
          .bbf-ken {
            animation: bbf-ken 14s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          @keyframes bbf-breathe {
            0%, 100% { transform: scale(1.06); }
            50% { transform: scale(1.12); }
          }
          .bbf-breathe {
            animation: bbf-breathe 16s ease-in-out infinite;
          }
          @keyframes bbf-ember {
            0%, 100% { text-shadow: 0 0 0 transparent; }
            50% { text-shadow: 0 0 22px rgba(255, 77, 0, 0.85); }
          }
          .bbf-ember {
            animation: bbf-ember 3.4s ease-in-out infinite;
          }
          @keyframes bbf-drift {
            0%, 100% { transform: translate3d(-6%, 8%, 0) scale(1); }
            50% { transform: translate3d(10%, -8%, 0) scale(1.18); }
          }
          .bbf-glow {
            animation: bbf-drift 18s ease-in-out infinite;
          }
          @keyframes bbf-pulse {
            0%, 100% { opacity: 0.35; transform: scale(0.85); }
            50% { opacity: 1; transform: scale(1); }
          }
          .bbf-pulse {
            animation: bbf-pulse 2.2s ease-in-out infinite;
          }
          html.bbf-cursor,
          html.bbf-cursor * {
            cursor: none !important;
          }
          .bbf-cursor-ring svg {
            overflow: visible;
          }
          .bbf-cursor-ring circle {
            fill: transparent;
            stroke: var(--bbf-red);
            stroke-width: 1.4;
          }
          .bbf-cursor-ring path {
            fill: none;
            stroke: var(--bbf-red);
            stroke-width: 1.4;
            stroke-linecap: round;
          }
          .bbf-cursor-ring[data-hot="1"] circle {
            fill: color-mix(in srgb, var(--bbf-red) 22%, transparent);
          }
          @media (pointer: coarse), (prefers-reduced-motion: reduce) {
            html.bbf-cursor,
            html.bbf-cursor * {
              cursor: auto !important;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .bbf-marquee,
            .bbf-ken,
            .bbf-breathe,
            .bbf-ember,
            .bbf-glow,
            .bbf-pulse { animation: none; }
          }
        `}</style>
        <BbfCursor />
        <BbfIntroLoader />
        <BbfLenis>{children}</BbfLenis>
      </div>
    </>
  );
}
