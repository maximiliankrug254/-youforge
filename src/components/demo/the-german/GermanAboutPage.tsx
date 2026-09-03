import { GERMAN_ABOUT } from "@/components/demo/the-german/german-content";
import { germanAsset } from "@/components/demo/the-german/german-config";
import { GERMAN_FOUNDERS, GERMAN_TEAM } from "@/components/demo/the-german/german-team";
import { GermanPageHero } from "@/components/demo/the-german/GermanPageHero";
import { GermanReveal } from "@/components/demo/the-german/GermanReveal";
import { GermanScaleImg } from "@/components/demo/the-german/GermanMotion";

export function GermanAboutPage() {
  const a = GERMAN_ABOUT;

  return (
    <>
      <GermanPageHero title={a.heroTitle} image={a.heroImage} alt={a.heroAlt} crumb="About us" />

      <section className="tg-section" id="our-vision">
        <div className="tg-container" style={{ padding: "120px 0 60px" }}>
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
                  <GermanScaleImg src={a.visionImage} alt={a.visionImageAlt} from={1} to={1.25} />
                </div>
              </div>
            </GermanReveal>
            <GermanReveal delay={0.08}>
              <span className="tg-suptitle">{a.visionEyebrow}</span>
              <h2 className="tg-h2 tg-upper" style={{ margin: "24px 0" }}>
                {a.visionTitle}
              </h2>
              <p className="tg-body" style={{ marginBottom: 32 }}>
                {a.visionText}
              </p>
              <ul className="tg-icon-list">
                {a.visionLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>
                      <img src={germanAsset("icons/list.svg")} alt="" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </GermanReveal>
          </div>
        </div>
        <style>{`
          @media (max-width: 992px) {
            .tg-about-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <section className="tg-section" id="founders">
        <div className="tg-container" style={{ padding: "0 0 60px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 380px))",
              gap: "40px",
              justifyContent: "center",
            }}
            className="tg-founders"
          >
            {GERMAN_FOUNDERS.map((person, i) => (
              <GermanReveal key={person.id} delay={i * 0.1}>
                <article className="tg-founder-card">
                  <div className="tg-treat-media" style={{ marginBottom: 24 }}>
                    <img src={person.photo} alt={person.name} />
                  </div>
                  <h3 className="tg-h4 tg-upper" style={{ marginBottom: 16 }}>
                    {person.name}
                    <br />
                    {person.title}
                  </h3>
                  <p className="tg-body">{person.bio}</p>
                </article>
              </GermanReveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .tg-founders { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <section className="tg-section" id="our-team">
        <div className="tg-container tg-center" style={{ padding: "30px 0" }}>
          <GermanReveal>
            <span className="tg-suptitle">{a.teamEyebrow}</span>
            <h2 className="tg-h2 tg-upper" style={{ margin: "24px 0" }}>
              {a.teamTitle}
            </h2>
            <p className="tg-body" style={{ maxWidth: 850, margin: "0 auto" }}>
              {a.teamText}
            </p>
          </GermanReveal>
        </div>
      </section>

      <section className="tg-section">
        <div className="tg-container" style={{ padding: "0 0 90px" }}>
          <div
            className="tg-team-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "30px",
            }}
          >
            {GERMAN_TEAM.map((person, i) => (
              <GermanReveal key={person.id} delay={(i % 4) * 0.05}>
                <article className="tg-team-card">
                  <img src={person.photo} alt={person.name} loading="lazy" />
                  <h3 className="tg-h5 tg-upper" style={{ margin: "16px 0 6px" }}>
                    {person.name}
                  </h3>
                  <p className="tg-body" style={{ margin: 0 }}>
                    {person.role}
                  </p>
                </article>
              </GermanReveal>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 992px) {
            .tg-team-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          }
          @media (max-width: 520px) {
            .tg-team-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
