import type { Metadata, Viewport } from "next";
import { JenLenis } from "@/components/demo/jen/JenLenis";
import { JenIntroLoader } from "@/components/demo/jen/JenIntroLoader";

export const metadata: Metadata = {
  title: "Dachservice Otto Jennebach — Gießen | Living Demo",
  description:
    "Dachbeschichtung, Reinigung und Versiegelung in Gießen — die preiswerte Alternative zur Neueindeckung. 10 Jahre Garantie.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0c0f12",
};

export default function JenDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&f[]=satoshi@400,500,600,700&display=swap"
        rel="stylesheet"
      />
      <div
        className="jen-demo min-h-dvh bg-[var(--jen-ink)] text-white antialiased"
        style={
          {
            "--jen-ink": "#0c0f12",
            "--jen-slate": "#14191e",
            "--jen-panel": "#1a2128",
            "--jen-mist": "#f1f3f4",
            "--jen-stone": "#e6e9eb",
            "--jen-accent": "#c2703e",
            "--jen-accent-hot": "#d4834f",
            "--jen-bronze": "#c9a07a",
            "--jen-muted": "#66717a",
            "--jen-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
            "--font-jen-display": "'Cabinet Grotesk', 'Satoshi', sans-serif",
            "--font-jen-sans": "'Satoshi', sans-serif",
          } as React.CSSProperties
        }
      >
        <style>{`
          body:has(.jen-demo) header,
          body:has(.jen-demo) footer,
          body:has(.jen-demo) [data-demo-chat-widget] {
            display: none !important;
          }
          .jen-demo {
            font-family: var(--font-jen-sans);
            overflow-x: clip;
          }
          .jen-demo ::selection {
            background: color-mix(in srgb, var(--jen-accent) 40%, transparent);
            color: #fff;
          }
          .jen-demo h1,
          .jen-demo h2,
          .jen-demo h3,
          .jen-demo h4,
          .jen-demo .font-jen-display {
            font-family: var(--font-jen-display);
          }
          @keyframes jen-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .jen-marquee {
            animation: jen-marquee 42s linear infinite;
            will-change: transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .jen-marquee { animation: none; }
          }
        `}</style>
        <JenIntroLoader />
        <JenLenis>{children}</JenLenis>
      </div>
    </>
  );
}
