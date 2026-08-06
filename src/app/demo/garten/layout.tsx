import type { Metadata, Viewport } from "next";
import { GpfLenis } from "@/components/demo/gpf/GpfLenis";
import { GpfNav } from "@/components/demo/gpf/GpfNav";
import { GpfIntroLoader } from "@/components/demo/gpf/GpfIntroLoader";
import { GpfScrollProgress } from "@/components/demo/gpf/GpfScrollProgress";
import { GPF_DEMO } from "@/components/demo/gpf/gpf-config";

export const metadata: Metadata = {
  title: `${GPF_DEMO.brand.full} | Living Demo`,
  description:
    "Gartenpflege, Baumarbeiten und Landschaftsbau — Konzept-Demo von YouForge. Rasen, Hecken, Terrassen, Zäune aus einer Hand.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0f1511",
};

export default function GartenDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        href="https://api.fontshare.com/v2/css?f[]=zodiak@400,500,700,800&f[]=satoshi@400,500,600,700&display=swap"
        rel="stylesheet"
      />
      <div
        className="gpf-demo min-h-dvh bg-[var(--gpf-paper)] text-[var(--gpf-ink)] antialiased"
        style={
          {
            "--gpf-ink": "#0f1511",
            "--gpf-panel": "#17201a",
            "--gpf-paper": "#f5f3ec",
            "--gpf-paper-deep": "#e9e5d8",
            "--gpf-accent": "#5d8a3a",
            "--gpf-accent-hot": "#7cae4c",
            "--gpf-sand": "#c8b189",
            "--gpf-muted": "#6a6a5e",
            "--gpf-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
            "--font-gpf-display": "'Zodiak', Georgia, serif",
            "--font-gpf-sans": "'Satoshi', system-ui, sans-serif",
          } as React.CSSProperties
        }
      >
        <style>{`
          body:has(.gpf-demo) header,
          body:has(.gpf-demo) footer,
          body:has(.gpf-demo) [data-demo-chat-widget] {
            display: none !important;
          }
          .gpf-demo {
            font-family: var(--font-gpf-sans);
            overflow-x: clip;
          }
          .gpf-demo h1,
          .gpf-demo h2,
          .gpf-demo h3,
          .gpf-demo h4,
          .gpf-demo blockquote,
          .gpf-demo .font-gpf-display {
            font-family: var(--font-gpf-display);
          }
          .gpf-demo ::selection {
            background: color-mix(in srgb, var(--gpf-accent) 45%, transparent);
            color: #fff;
          }
          .gpf-demo :focus-visible {
            outline: 2px solid var(--gpf-accent-hot);
            outline-offset: 3px;
          }
          @keyframes gpf-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .gpf-marquee {
            animation: gpf-marquee 44s linear infinite;
            will-change: transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .gpf-marquee { animation: none; }
          }
        `}</style>
        <GpfScrollProgress />
        <GpfIntroLoader />
        <GpfNav />
        <GpfLenis>{children}</GpfLenis>
      </div>
    </>
  );
}
