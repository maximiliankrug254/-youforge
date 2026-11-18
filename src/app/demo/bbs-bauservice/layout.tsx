import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "BBS-Bauservice · Maurermeister in Allendorf (Lumda)",
  },
  description:
    "Ich bin Bernd Schäfer, Maurermeister in Allendorf (Lumda). BBS-Bauservice führe ich seit 1996. Abbruch, Rohbau, Schornsteinsanierung, Altbausanierung, Kanalarbeiten, Hofbefestigungen, Garten- und Landschaftsbau, Zaunanlagen.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#12110f",
};

export default function BbsDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="bbs-demo min-h-dvh bg-[var(--bbs-ink)] text-[var(--bbs-stone)] antialiased"
      style={
        {
          "--bbs-ink": "#12110f",
          "--bbs-ink-2": "#1c1a17",
          "--bbs-stone": "#f3eee6",
          "--bbs-sand": "#e4dcd0",
          "--bbs-heat": "#e4572e",
          "--bbs-muted": "#a3988c",
          "--bbs-line": "rgba(243,238,230,0.14)",
          "--bbs-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
        } as React.CSSProperties
      }
    >
      <link
        href="https://api.fontshare.com/v2/css?f[]=zodiak@400,500,700,800&f[]=satoshi@400,500,700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        body:has(.bbs-demo) header:not(.bbs-bar),
        body:has(.bbs-demo) footer:not(.bbs-foot),
        body:has(.bbs-demo) [data-demo-chat-widget] {
          display: none !important;
        }
        .bbs-demo {
          font-family: 'Satoshi', system-ui, sans-serif;
          overflow-x: clip;
        }
        .bbs-demo h1,
        .bbs-demo h2,
        .bbs-demo .font-bbs-display {
          font-family: 'Zodiak', Georgia, serif;
        }
        .bbs-demo ::selection {
          background: color-mix(in srgb, var(--bbs-heat) 55%, transparent);
          color: #fff;
        }
        .bbs-demo :focus-visible {
          outline: 2px solid var(--bbs-heat);
          outline-offset: 3px;
        }
        .bbs-demo section[id] {
          scroll-margin-top: 5rem;
        }
        @keyframes bbs-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .bbs-marquee {
          animation: bbs-marquee 32s linear infinite;
          will-change: transform;
        }
        .bbs-row {
          transition: background-color 0.45s var(--bbs-ease), color 0.45s var(--bbs-ease), transform 0.45s var(--bbs-ease);
        }
        .bbs-row:not(:disabled):hover {
          background: rgba(228, 87, 46, 0.12);
          color: var(--bbs-heat);
        }
        .bbs-row:not(:disabled):hover span:last-child {
          transform: translateX(0.45rem);
        }
        .bbs-row span:last-child {
          transition: transform 0.7s var(--bbs-ease);
        }
        @media (prefers-reduced-motion: reduce) {
          .bbs-marquee { animation: none; }
          .bbs-row, .bbs-row span:last-child { transition: none; }
        }
      `}</style>
      {children}
    </div>
  );
}
