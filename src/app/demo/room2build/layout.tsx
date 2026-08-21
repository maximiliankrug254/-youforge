import type { Metadata, Viewport } from "next";
import { R2bLenis } from "@/components/demo/r2b/R2bLenis";
import { R2bIntroLoader } from "@/components/demo/r2b/R2bIntroLoader";
import { R2bScrollProgress } from "@/components/demo/r2b/R2bScrollProgress";
import { R2bGrain } from "@/components/demo/r2b/R2bGrain";
import { R2bNav } from "@/components/demo/r2b/R2bNav";

export const metadata: Metadata = {
  title: "Room2Build — Spekulatives Redesign | YouForge",
  description:
    "Masterpiece-Pitch von YouForge: so könnte Room2Build wirken — Atelier statt Template. Handwerk, das man sieht.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#070706",
};

export default function Room2BuildDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        href="https://api.fontshare.com/v2/css?f[]=boska@400,500,700,400italic,700italic&f[]=satoshi@400,500,600,700&display=swap"
        rel="stylesheet"
      />
      <div
        className="r2b-demo min-h-dvh bg-[var(--r2b-void)] text-[var(--r2b-bone)] antialiased"
        style={
          {
            "--r2b-void": "#070706",
            "--r2b-ink": "#0c0b0a",
            "--r2b-panel": "#12110f",
            "--r2b-bone": "#eee8de",
            "--r2b-paper": "#f6f1e8",
            "--r2b-brass": "#c4a574",
            "--r2b-brass-hot": "#d4b88a",
            "--r2b-brass-deep": "#8a6f45",
            "--r2b-muted": "#6e6860",
            "--r2b-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
            "--font-r2b-display": "'Boska', 'Times New Roman', serif",
            "--font-r2b-sans": "'Satoshi', system-ui, sans-serif",
          } as React.CSSProperties
        }
      >
        <style>{`
          body:has(.r2b-demo) header,
          body:has(.r2b-demo) footer,
          body:has(.r2b-demo) [data-demo-chat-widget] {
            display: none !important;
          }
          .r2b-demo {
            font-family: var(--font-r2b-sans);
            overflow-x: clip;
          }
          .r2b-demo h1,
          .r2b-demo h2,
          .r2b-demo h3,
          .r2b-demo h4,
          .r2b-demo blockquote,
          .r2b-demo .font-r2b-display {
            font-family: var(--font-r2b-display);
          }
          .r2b-demo ::selection {
            background: color-mix(in srgb, var(--r2b-brass) 42%, transparent);
            color: #fff;
          }
          .r2b-demo :focus-visible {
            outline: 2px solid var(--r2b-brass);
            outline-offset: 3px;
          }
          @keyframes r2b-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .r2b-marquee {
            animation: r2b-marquee 36s linear infinite;
            will-change: transform;
          }
          @keyframes r2b-filmstrip {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .r2b-filmstrip {
            animation: r2b-filmstrip 52s linear infinite;
            will-change: transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .r2b-marquee,
            .r2b-filmstrip { animation: none; }
          }
        `}</style>
        <R2bScrollProgress />
        <R2bGrain />
        <R2bIntroLoader />
        <R2bNav />
        <R2bLenis>{children}</R2bLenis>
      </div>
    </>
  );
}
