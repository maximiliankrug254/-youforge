import { GERMAN_HOME } from "@/components/demo/the-german/german-content";
import { GERMAN_ADVANTAGES } from "@/components/demo/the-german/german-services";
import { germanAsset } from "@/components/demo/the-german/german-config";
import { GermanReveal } from "@/components/demo/the-german/GermanReveal";

export function GermanAdvantages() {
  const { advantages } = GERMAN_HOME;

  return (
    <section className="tg-section">
      <div className="tg-container" style={{ padding: "30px 0 60px" }}>
        <GermanReveal>
          <div className="tg-center" style={{ marginBottom: 72 }}>
            <span className="tg-suptitle">{advantages.eyebrow}</span>
            <h2 className="tg-h2 tg-upper" style={{ margin: "24px 0" }}>
              {advantages.title.split("\n").map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <p className="tg-body" style={{ maxWidth: 820, margin: "0 auto" }}>
              {advantages.text.split("\n").map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          </div>
        </GermanReveal>
        <div
          className="tg-adv-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "24px",
          }}
        >
          {GERMAN_ADVANTAGES.map((item, i) => (
            <GermanReveal key={item.title} delay={i * 0.06}>
              <div className="tg-icon-box tg-center">
                <h3 className="tg-h4 tg-upper" style={{ marginBottom: 24 }}>
                  {item.title}
                </h3>
                <div className="tg-icon" style={{ marginBottom: 24 }}>
                  <img src={germanAsset("icons/check.svg")} alt="" />
                </div>
                <p className="tg-body" style={{ margin: 0 }}>
                  {item.text}
                </p>
              </div>
            </GermanReveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .tg-adv-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 640px) {
          .tg-adv-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
