import type { Metadata, Viewport } from "next";
import { NovusLenis } from "@/components/demo/novus/NovusLenis";
import { NovusIntroLoader } from "@/components/demo/novus/NovusIntroLoader";
import { NovusScrollProgress } from "@/components/demo/novus/NovusScrollProgress";

export const metadata: Metadata = {
  title: "Novus Hair & Colour Artists — Alsfeld | Living Demo",
  description:
    "Junges Colour-Artist-Team in der Alten Molkerei Alsfeld. Balayage, CalligraphyCut, Makeup, Bräute — too much is never enough.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0908",
};

export default function NovusDemoLayout({
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
        className="novus-demo min-h-dvh bg-[var(--novus-stone)] text-[var(--novus-ink)] antialiased"
        style={
          {
            "--novus-ink": "#0a0908",
            "--novus-panel": "#161412",
            "--novus-stone": "#efeae3",
            "--novus-gold": "#c9a66b",
            "--novus-gold-hot": "#d4b57d",
            "--novus-gold-deep": "#9a7a45",
            "--novus-muted": "#6b645c",
            "--novus-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
            "--font-novus-display": "'Clash Display', 'Satoshi', sans-serif",
            "--font-novus-sans": "'Satoshi', sans-serif",
          } as React.CSSProperties
        }
      >
        <style>{`
          body:has(.novus-demo) header,
          body:has(.novus-demo) footer,
          body:has(.novus-demo) [data-demo-chat-widget] {
            display: none !important;
          }
          .novus-demo {
            font-family: var(--font-novus-sans);
            overflow-x: clip;
          }
          .novus-demo h1,
          .novus-demo h2,
          .novus-demo h3,
          .novus-demo h4,
          .novus-demo .font-novus-display {
            font-family: var(--font-novus-display);
          }
          .novus-demo ::selection {
            background: color-mix(in srgb, var(--novus-gold) 45%, transparent);
            color: #fff;
          }
          @keyframes novus-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .novus-marquee {
            animation: novus-marquee 38s linear infinite;
            will-change: transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .novus-marquee { animation: none; }
          }
        `}</style>
        <NovusScrollProgress />
        <NovusIntroLoader />
        <NovusLenis>{children}</NovusLenis>
      </div>
    </>
  );
}
