import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Keils Bäder-ABZ · Meister-Fachbetrieb in Staufenberg/Treis",
  },
  description:
    "Ich bin Ingolf Keil, Meister-Fachbetrieb in Staufenberg/Treis. Keils Bäder-ABZ: Badausstattung, Sanitär, Heizung, Solar und BARRISOL Spanndecken.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b1620",
};

export default function KeilsDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="keils-demo min-h-dvh bg-[var(--keils-ink)] text-[var(--keils-porcelain)] antialiased"
      style={
        {
          "--keils-ink": "#0b1620",
          "--keils-ink-2": "#122433",
          "--keils-porcelain": "#eef2f5",
          "--keils-mist": "#b7c5d1",
          "--keils-water": "#3a9bb5",
          "--keils-muted": "#7f90a0",
          "--keils-line": "rgba(238,242,245,0.14)",
          "--keils-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
        } as React.CSSProperties
      }
    >
      <link
        href="https://api.fontshare.com/v2/css?f[]=gambarino@400&f[]=satoshi@400,500,700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        body:has(.keils-demo) > header,
        body:has(.keils-demo) header:not(.keils-bar),
        body:has(.keils-demo) > footer,
        body:has(.keils-demo) footer:not(.keils-foot),
        body:has(.keils-demo) [data-demo-chat-widget] {
          display: none !important;
        }
        .keils-demo {
          font-family: 'Satoshi', system-ui, sans-serif;
          overflow-x: clip;
        }
        .keils-demo h1,
        .keils-demo h2,
        .keils-demo h3,
        .keils-demo .font-keils-display {
          font-family: 'Gambarino', Georgia, serif;
        }
        .keils-demo ::selection {
          background: color-mix(in srgb, var(--keils-water) 55%, transparent);
          color: #fff;
        }
        .keils-demo :focus-visible {
          outline: 2px solid var(--keils-water);
          outline-offset: 3px;
        }
        .keils-demo section[id] {
          scroll-margin-top: 5rem;
        }
        @keyframes keils-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .keils-marquee {
          animation: keils-marquee 46s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .keils-row {
          transition: background-color 0.4s var(--keils-ease), color 0.4s var(--keils-ease);
        }
        .keils-row:hover {
          color: var(--keils-water);
        }
        .keils-ref-mask {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent);
        }
        .keils-ref-track {
          animation: keils-marquee 55s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        @media (prefers-reduced-motion: reduce) {
          .keils-marquee,
          .keils-ref-track { animation: none; }
          .keils-row { transition: none; }
        }
      `}</style>
      {children}
    </div>
  );
}
