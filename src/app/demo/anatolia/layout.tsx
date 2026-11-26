import type { Metadata, Viewport } from "next";
import { AnaLenis } from "@/components/demo/anatolia/AnaLenis";
import { AnaNav } from "@/components/demo/anatolia/AnaNav";
import { AnaIntroLoader } from "@/components/demo/anatolia/AnaIntroLoader";
import { AnaScrollProgress } from "@/components/demo/anatolia/AnaScrollProgress";
import { AnaGrain } from "@/components/demo/anatolia/AnaGrain";
import { AnaDust } from "@/components/demo/anatolia/AnaDust";
import { AnaCursor } from "@/components/demo/anatolia/AnaCursor";
import { ANA_DEMO } from "@/components/demo/anatolia/ana-config";
import { ANA_FILM } from "@/components/demo/anatolia/ana-content";

export const metadata: Metadata = {
  title: `${ANA_DEMO.brand.full} | Living Demo`,
  description:
    "Straßenbau, Gartenbau und Terrassenbau in Essen und Umgebung — Living Demo von YouForge für Anatolia Straßen- und GaLaBau GmbH.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1f1c17",
};

export default function AnatoliaDemoLayout({
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
      <link rel="preload" href={ANA_FILM.excavator} as="video" type="video/mp4" />
      <div
        className="ana-demo min-h-dvh bg-[var(--ana-paper)] text-[var(--ana-ink)] antialiased"
        style={
          {
            "--ana-ink": "#1f1c17",
            "--ana-stone": "#2e2a24",
            "--ana-paper": "#f7f4ed",
            "--ana-paper-deep": "#ebe6db",
            "--ana-amber": "#efb825",
            "--ana-amber-deep": "#c99214",
            "--ana-mist": "#bbb6aa",
            "--ana-muted": "#756f66",
            "--ana-radius": "1.15rem",
            "--ana-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
            "--font-ana-display": "'Clash Display', 'Arial Narrow', sans-serif",
            "--font-ana-sans": "'Satoshi', system-ui, sans-serif",
          } as React.CSSProperties
        }
      >
        <style>{`
          body:has(.ana-demo) header:not([data-ana-nav]),
          body:has(.ana-demo) footer,
          body:has(.ana-demo) [data-demo-chat-widget] {
            display: none !important;
          }
          html.ana-cursor, html.ana-cursor * {
            cursor: none !important;
          }
          .ana-demo {
            font-family: var(--font-ana-sans);
            overflow-x: clip;
          }
          .ana-demo h1,
          .ana-demo h2,
          .ana-demo h3,
          .ana-demo h4,
          .ana-demo .font-ana-display {
            font-family: var(--font-ana-display);
          }
          .ana-demo ::selection {
            background: color-mix(in srgb, var(--ana-amber) 45%, transparent);
            color: #1f1c17;
          }
          .ana-demo :focus-visible {
            outline: 2px solid var(--ana-amber);
            outline-offset: 3px;
          }
          .ana-media {
            border-radius: var(--ana-radius);
            overflow: hidden;
          }
          .ana-soft-fade {
            pointer-events: none;
            position: absolute;
            inset: 0;
            z-index: 2;
            background:
              linear-gradient(180deg, var(--ana-ink) 0%, transparent 18%, transparent 78%, var(--ana-ink) 100%),
              linear-gradient(90deg, var(--ana-ink) 0%, transparent 12%, transparent 88%, var(--ana-ink) 100%);
            opacity: 0.72;
          }
          .ana-soft-fade-paper {
            pointer-events: none;
            position: absolute;
            inset: 0;
            z-index: 2;
            background:
              linear-gradient(180deg, var(--ana-paper) 0%, transparent 14%, transparent 86%, var(--ana-paper) 100%);
            opacity: 0.9;
          }
          @keyframes ana-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .ana-marquee {
            animation: ana-marquee 32s linear infinite;
            will-change: transform;
          }
          @keyframes ana-pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.45; transform: scale(0.85); }
          }
          .ana-pulse {
            animation: ana-pulse 1.8s ease-in-out infinite;
          }
          @keyframes ana-dust {
            0% { transform: translate3d(0, 12px, 0); opacity: 0; }
            15% { opacity: 0.7; }
            85% { opacity: 0.35; }
            100% { transform: translate3d(18px, -110vh, 0); opacity: 0; }
          }
          .ana-dust {
            animation-name: ana-dust;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .ana-marquee, .ana-pulse, .ana-dust { animation: none; }
          }
        `}</style>
        <AnaScrollProgress />
        <AnaGrain />
        <AnaDust />
        <AnaCursor />
        <AnaIntroLoader />
        <AnaNav />
        <AnaLenis>{children}</AnaLenis>
      </div>
    </>
  );
}
