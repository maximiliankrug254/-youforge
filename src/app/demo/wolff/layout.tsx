import type { Metadata, Viewport } from "next";
import { WolffLenis } from "@/components/demo/wolff/WolffLenis";
import { WolffIntroLoader } from "@/components/demo/wolff/WolffIntroLoader";
import { WolffScrollProgress } from "@/components/demo/wolff/WolffScrollProgress";
import { WolffGrain } from "@/components/demo/wolff/WolffGrain";
import { WolffDust } from "@/components/demo/wolff/WolffDust";
import { WolffCursor } from "@/components/demo/wolff/WolffCursor";

export const metadata: Metadata = {
  title: "WOLFF — Herrenbarber | Living Demo by YouForge",
  description:
    "Living Demo: Herrenbarber im 1970er-Herrenzimmer. Schnitt, Rasur, Haltung — gebaut von YouForge.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#120b08",
};

export default function WolffDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        href="https://api.fontshare.com/v2/css?f[]=melodrama@400,500,600,700,400i,500i,700i&f[]=switzer@400,500,600,700&display=swap"
        rel="stylesheet"
      />
      <div
        className="wolff-demo min-h-dvh bg-[var(--wolff-ink)] text-[var(--wolff-cream)] antialiased"
        style={
          {
            "--wolff-ink": "#120b08",
            "--wolff-panel": "#1a100c",
            "--wolff-wood": "#3a2418",
            "--wolff-cream": "#e6d3b4",
            "--wolff-brass": "#c4923a",
            "--wolff-brass-hot": "#d4a84e",
            "--wolff-rust": "#a33c24",
            "--wolff-burgundy": "#4a1c1e",
            "--wolff-muted": "#9a8470",
            "--wolff-ease": "cubic-bezier(0.22, 1, 0.32, 1)",
            "--font-wolff-display": "'Melodrama', 'Times New Roman', serif",
            "--font-wolff-sans": "'Switzer', 'Helvetica Neue', sans-serif",
          } as React.CSSProperties
        }
      >
        <style>{`
          body:has(.wolff-demo) header,
          body:has(.wolff-demo) footer,
          body:has(.wolff-demo) [data-demo-chat-widget] {
            display: none !important;
          }
          .wolff-demo {
            font-family: var(--font-wolff-sans);
            overflow-x: clip;
          }
          .wolff-demo h1,
          .wolff-demo h2,
          .wolff-demo h3,
          .wolff-demo h4,
          .wolff-demo .font-wolff-display {
            font-family: var(--font-wolff-display);
          }
          .wolff-demo .font-wolff-sans {
            font-family: var(--font-wolff-sans);
          }
          .wolff-demo ::selection {
            background: color-mix(in srgb, var(--wolff-brass) 45%, transparent);
            color: #fff;
          }
          @keyframes wolff-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .wolff-marquee {
            animation: wolff-marquee 22s linear infinite;
            will-change: transform;
          }
          @keyframes wolff-strip {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .wolff-strip {
            animation: wolff-strip 34s linear infinite;
            will-change: transform;
          }
          @keyframes wolff-grain-shift {
            0% { transform: translate3d(0,0,0); }
            25% { transform: translate3d(-3%, 2%, 0); }
            50% { transform: translate3d(2%, -4%, 0); }
            75% { transform: translate3d(-2%, 3%, 0); }
            100% { transform: translate3d(0,0,0); }
          }
          .wolff-grain {
            animation: wolff-grain-shift 1.4s steps(4) infinite;
          }
          @keyframes wolff-flicker {
            0%, 100% { opacity: 0.18; }
            7% { opacity: 0.28; }
            12% { opacity: 0.16; }
            18% { opacity: 0.32; }
            40% { opacity: 0.2; }
            61% { opacity: 0.3; }
            72% { opacity: 0.17; }
            88% { opacity: 0.26; }
          }
          .wolff-flicker {
            animation: wolff-flicker 4.6s ease-in-out infinite;
          }
          @keyframes wolff-steam {
            0% { transform: translate3d(-8%, 18%, 0) scale(0.85); opacity: 0; }
            18% { opacity: 0.45; }
            100% { transform: translate3d(10%, -55%, 0) scale(1.35); opacity: 0; }
          }
          .wolff-steam {
            animation: wolff-steam 5.2s ease-out infinite;
          }
          @keyframes wolff-vinyl {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .wolff-vinyl {
            animation: wolff-vinyl 7.5s linear infinite;
          }
          html.wolff-cursor,
          html.wolff-cursor * {
            cursor: none !important;
          }
          @media (prefers-reduced-motion: reduce) {
            .wolff-marquee,
            .wolff-strip,
            .wolff-flicker,
            .wolff-steam,
            .wolff-vinyl,
            .wolff-grain { animation: none; }
            html.wolff-cursor,
            html.wolff-cursor * {
              cursor: auto !important;
            }
          }
        `}</style>
        <WolffScrollProgress />
        <WolffGrain />
        <WolffDust />
        <WolffCursor />
        <WolffIntroLoader />
        <WolffLenis>{children}</WolffLenis>
      </div>
    </>
  );
}
