import type { Metadata, Viewport } from "next";
import { TiwoLenis } from "@/components/demo/tiwo/TiwoLenis";
import { TiwoIntroLoader } from "@/components/demo/tiwo/TiwoIntroLoader";
import { TiwoScrollProgress } from "@/components/demo/tiwo/TiwoScrollProgress";

export const metadata: Metadata = {
  title: "Fliesen Meisterbetrieb | Living Demo — YouForge",
  description:
    "White-Label Living Demo: so kann ein Fliesen-Meisterbetrieb online wirken. Bad, Terrasse, Naturstein — präzise und modern.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0f14",
};

export default function FliesenDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        href="https://api.fontshare.com/v2/css?f[]=synonym@500,600,700&f[]=satoshi@400,500,600,700&display=swap"
        rel="stylesheet"
      />
      <div
        className="tiwo-demo min-h-dvh bg-[var(--tiwo-mist)] text-[var(--tiwo-ink)] antialiased"
        style={
          {
            "--tiwo-ink": "#0b0f14",
            "--tiwo-panel": "#141a1f",
            "--tiwo-mist": "#eef2f4",
            "--tiwo-accent": "#1f6b5c",
            "--tiwo-accent-hot": "#278574",
            "--tiwo-bronze": "#7d948c",
            "--tiwo-muted": "#5c686f",
            "--tiwo-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
            "--font-tiwo-display": "'Synonym', 'Satoshi', sans-serif",
            "--font-tiwo-sans": "'Satoshi', sans-serif",
          } as React.CSSProperties
        }
      >
        <style>{`
          body:has(.tiwo-demo) header,
          body:has(.tiwo-demo) footer,
          body:has(.tiwo-demo) [data-demo-chat-widget] {
            display: none !important;
          }
          .tiwo-demo {
            font-family: var(--font-tiwo-sans);
            overflow-x: clip;
          }
          .tiwo-demo h1,
          .tiwo-demo h2,
          .tiwo-demo h3,
          .tiwo-demo h4,
          .tiwo-demo .font-tiwo-display {
            font-family: var(--font-tiwo-display);
          }
          .tiwo-demo ::selection {
            background: color-mix(in srgb, var(--tiwo-accent) 45%, transparent);
            color: #fff;
          }
          @keyframes tiwo-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .tiwo-marquee {
            animation: tiwo-marquee 36s linear infinite;
            will-change: transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .tiwo-marquee { animation: none; }
          }
        `}</style>
        <TiwoScrollProgress />
        <TiwoIntroLoader />
        <TiwoLenis>{children}</TiwoLenis>
      </div>
    </>
  );
}
