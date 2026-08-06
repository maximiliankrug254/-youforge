import type { Metadata, Viewport } from "next";
import { AureaLenis } from "@/components/demo/aurea/AureaLenis";
import { AureaIntroLoader } from "@/components/demo/aurea/AureaIntroLoader";
import { AureaScrollProgress } from "@/components/demo/aurea/AureaScrollProgress";
import { AureaGrain } from "@/components/demo/aurea/AureaGrain";

export const metadata: Metadata = {
  title: "Aurea — Colour Atelier | Living Demo by YouForge",
  description:
    "Living Demo: Premium Salon-Website auf Apple/Porsche-Niveau. Gebaut von YouForge — so kann euer Salon online wirken.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080807",
};

export default function AureaDemoLayout({
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
        className="aurea-demo min-h-dvh bg-[var(--aurea-bone)] text-[var(--aurea-ink)] antialiased"
        style={
          {
            "--aurea-ink": "#080807",
            "--aurea-panel": "#141311",
            "--aurea-bone": "#f0ebe4",
            "--aurea-copper": "#b8956c",
            "--aurea-copper-hot": "#c9a87d",
            "--aurea-copper-deep": "#8f7349",
            "--aurea-muted": "#6a645c",
            "--aurea-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
            "--font-aurea-display": "'Clash Display', 'Satoshi', sans-serif",
            "--font-aurea-sans": "'Satoshi', sans-serif",
          } as React.CSSProperties
        }
      >
        <style>{`
          body:has(.aurea-demo) header,
          body:has(.aurea-demo) footer,
          body:has(.aurea-demo) [data-demo-chat-widget] {
            display: none !important;
          }
          .aurea-demo {
            font-family: var(--font-aurea-sans);
            overflow-x: clip;
          }
          .aurea-demo h1,
          .aurea-demo h2,
          .aurea-demo h3,
          .aurea-demo h4,
          .aurea-demo .font-aurea-display {
            font-family: var(--font-aurea-display);
          }
          .aurea-demo ::selection {
            background: color-mix(in srgb, var(--aurea-copper) 40%, transparent);
            color: #fff;
          }
          @keyframes aurea-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .aurea-marquee {
            animation: aurea-marquee 28s linear infinite;
            will-change: transform;
          }
          @keyframes aurea-filmstrip {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .aurea-filmstrip {
            animation: aurea-filmstrip 48s linear infinite;
            will-change: transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .aurea-marquee,
            .aurea-filmstrip { animation: none; }
          }
        `}</style>
        <AureaScrollProgress />
        <AureaGrain />
        <AureaIntroLoader />
        <AureaLenis>{children}</AureaLenis>
      </div>
    </>
  );
}
