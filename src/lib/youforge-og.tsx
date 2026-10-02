import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

const lime = "#c8ff00";
const background = "#050505";

export const ogImageSize = {
  width: 1200,
  height: 630,
} as const;

export function createYouForgeOgImage() {
  const title = siteConfig.name.toUpperCase();
  const tagline = siteConfig.tagline;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `radial-gradient(circle at 50% 40%, #1a1a1a 0%, ${background} 50%, #000 100%)`,
          position: "relative",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 48,
            borderRadius: 24,
            border: "1px solid rgba(200, 255, 0, 0.14)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: 520,
            height: 520,
            marginLeft: -260,
            marginTop: -180,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,255,0,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontSize: 108,
              fontWeight: 800,
              letterSpacing: "0.22em",
              color: lime,
              textTransform: "uppercase",
              textShadow: "0 0 48px rgba(200, 255, 0, 0.4)",
              lineHeight: 1,
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 36,
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.72)",
              letterSpacing: "0.02em",
              lineHeight: 1.35,
              maxWidth: 720,
            }}
          >
            {tagline}
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(200, 255, 0, 0.55)",
            }}
          >
            Digitalagentur · DACH
          </div>
        </div>
      </div>
    ),
    ogImageSize
  );
}

export const websiteCheckOgAlt = "Kostenloser Website-Check von YouForge: Wie gut findet Google deine Website?";

export function createWebsiteCheckOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 96px",
          background: `radial-gradient(circle at 30% 40%, #1a1a1a 0%, ${background} 55%, #000 100%)`,
          position: "relative",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 48,
            borderRadius: 24,
            border: "1px solid rgba(200, 255, 0, 0.14)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 600 }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: lime,
            }}
          >
            Kostenloser Website-Check
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 62,
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            Wie gut findet Google deine Website?
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              color: "rgba(255, 255, 255, 0.72)",
              lineHeight: 1.35,
            }}
          >
            Note von 0 bis 100 und deine drei wichtigsten Baustellen. Ohne Anmeldung.
          </div>
          <div
            style={{
              marginTop: 36,
              fontSize: 22,
              fontWeight: 600,
              color: "rgba(200, 255, 0, 0.7)",
            }}
          >
            you-forge.de/website-check
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 340,
            padding: "40px 32px",
            borderRadius: 28,
            border: "1px solid rgba(255, 255, 255, 0.12)",
            background: "rgba(255, 255, 255, 0.04)",
          }}
        >
          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            Deine Note
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", marginTop: 12 }}>
            <div style={{ fontSize: 120, fontWeight: 800, color: lime, lineHeight: 1 }}>?</div>
            <div style={{ fontSize: 40, color: "rgba(255, 255, 255, 0.5)", marginLeft: 8, marginBottom: 12 }}>/100</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 28, gap: 12, width: "100%" }}>
            {["Handy", "Ladezeit", "Google-Eintrag"].map((punkt) => (
              <div
                key={punkt}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 22,
                  color: "rgba(255, 255, 255, 0.8)",
                  paddingBottom: 10,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span>{punkt}</span>
                <div style={{ display: "flex", alignItems: "center", color: lime }}>
                  <div
                    style={{
                      width: 8,
                      height: 15,
                      marginRight: 12,
                      marginTop: -4,
                      borderRight: `3px solid ${lime}`,
                      borderBottom: `3px solid ${lime}`,
                      transform: "rotate(45deg)",
                    }}
                  />
                  geprüft
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    ogImageSize
  );
}
