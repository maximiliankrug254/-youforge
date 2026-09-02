import type { Metadata, Viewport } from "next";
import { BstLenis } from "@/components/demo/bst/BstLenis";
import { BstIntroLoader } from "@/components/demo/bst/BstIntroLoader";
import { BstProgress } from "@/components/demo/bst/BstProgress";

export const metadata: Metadata = {
  title: "Bestattungshaus Lindenhof | Living Demo",
  description:
    "Raum für Abschied. Moderne Bestattungsbegleitung — würdevoll, klar, rund um die Uhr erreichbar.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#141312",
};

export default function BestattungDemoLayout({
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
        className="bst-demo min-h-dvh bg-[var(--bst-void)] text-[var(--bst-snow)] antialiased"
        style={
          {
            "--bst-void": "#141312",
            "--bst-elevated": "#1c1b19",
            "--bst-panel": "#232220",
            "--bst-snow": "#f5f3ee",
            "--bst-fog": "#e8e5de",
            "--bst-accent": "#c9b896",
            "--bst-accent-hot": "#d8c7a6",
            "--bst-line": "rgba(245,243,238,0.12)",
            "--bst-line-dark": "rgba(20,19,18,0.1)",
            "--bst-muted": "#8f8b83",
            "--bst-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
            "--font-bst-display": "'Clash Display', 'Satoshi', sans-serif",
            "--font-bst-sans": "'Satoshi', sans-serif",
          } as React.CSSProperties
        }
      >
        <style>{`
          body:has(.bst-demo) header,
          body:has(.bst-demo) footer,
          body:has(.bst-demo) [data-demo-chat-widget] {
            display: none !important;
          }
          .bst-demo {
            font-family: var(--font-bst-sans);
            overflow-x: clip;
            background: var(--bst-void);
          }
          .bst-demo h1,
          .bst-demo h2,
          .bst-demo h3,
          .bst-demo .font-bst-display {
            font-family: var(--font-bst-display);
          }
          .bst-demo ::selection {
            background: color-mix(in srgb, var(--bst-accent) 45%, transparent);
            color: #141312;
          }
          @keyframes bst-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .bst-marquee {
            animation: bst-marquee 32s linear infinite;
            will-change: transform;
          }
          @keyframes bst-pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.55; transform: scale(0.92); }
          }
          .bst-pulse {
            animation: bst-pulse 2.4s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .bst-marquee, .bst-pulse { animation: none; }
          }
        `}</style>
        <BstIntroLoader />
        <BstProgress />
        <BstLenis>{children}</BstLenis>
      </div>
    </>
  );
}
