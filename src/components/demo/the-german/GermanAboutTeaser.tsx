import { GERMAN_HOME } from "@/components/demo/the-german/german-content";
import { GERMAN_PDF, germanWhatsAppUrl } from "@/components/demo/the-german/german-config";
import { GermanCountUp } from "@/components/demo/the-german/GermanCountUp";
import { GermanLink } from "@/components/demo/the-german/GermanLink";
import { GermanScaleImg } from "@/components/demo/the-german/GermanMotion";
import { GermanReveal } from "@/components/demo/the-german/GermanReveal";

export function GermanAboutTeaser() {
  const { about } = GERMAN_HOME;

  return (
    <section className="tg-section">
      <div className="tg-container" style={{ padding: "0 0 30px" }}>
        <div
          className="tg-about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <GermanReveal>
            <div className="tg-illustration">
              <div className="tg-illustration-frame">
                <GermanScaleImg src={about.image} alt={about.imageAlt} from={1} to={1.3} />
              </div>
              <div className="tg-counter">
                <div className="tg-counter-num">
                  <GermanCountUp value={about.years} />
                </div>
                <h3 className="tg-h5 tg-upper tg-counter-label">
                  <span className="tg-marker">{about.yearsLabel}</span> of successful
                  <br />
                  work in Germany
                </h3>
              </div>
            </div>
          </GermanReveal>
          <GermanReveal delay={0.1}>
            <span className="tg-suptitle">{about.eyebrow}</span>
            <h2 className="tg-h2 tg-upper" style={{ margin: "24px 0" }}>
              {about.title}
            </h2>
            <p className="tg-body" style={{ marginBottom: 32 }}>
              {about.text}
            </p>
            <div className="tg-route" aria-hidden>
              <span>Germany</span>
              <svg viewBox="0 0 160 24" fill="none">
                <path
                  className="tg-route-line"
                  d="M4 12 C 40 12, 50 4, 80 12 S 120 20, 156 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="4" cy="12" r="3" fill="currentColor" />
                <circle cx="156" cy="12" r="3" fill="currentColor" />
              </svg>
              <span>Berawa</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
              <GermanLink href={germanWhatsAppUrl()} external>
                {about.book}
              </GermanLink>
              <GermanLink href={GERMAN_PDF.dental.href} external title={GERMAN_PDF.dental.title}>
                {GERMAN_PDF.dental.label}
              </GermanLink>
              <GermanLink
                href={GERMAN_PDF.dermatology.href}
                external
                title={GERMAN_PDF.dermatology.title}
              >
                {GERMAN_PDF.dermatology.label}
              </GermanLink>
            </div>
          </GermanReveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .tg-about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
