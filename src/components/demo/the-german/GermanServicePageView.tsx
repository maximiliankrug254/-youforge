import type { GermanServicePage } from "@/components/demo/the-german/german-services";
import { GermanLink } from "@/components/demo/the-german/GermanLink";
import { GermanPageHero } from "@/components/demo/the-german/GermanPageHero";
import { GermanReveal } from "@/components/demo/the-german/GermanReveal";

export function GermanServicePageView({ page }: { page: GermanServicePage }) {
  return (
    <>
      <GermanPageHero
        title={page.heroTitle}
        image={page.heroImage}
        alt={page.heroAlt}
        crumb={page.breadcrumb}
      />

      <section className="tg-section">
        <div className="tg-container tg-center" style={{ padding: "90px 0 60px" }}>
          <GermanReveal>
            <span className="tg-suptitle">{page.introEyebrow}</span>
            <h2 className="tg-h2 tg-upper" style={{ margin: "24px 0" }}>
              {page.introTitle.split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <p className="tg-body" style={{ maxWidth: 860, margin: "0 auto" }}>
              {page.introText}
            </p>
            {page.introCta && (
              <div style={{ marginTop: 40 }}>
                <GermanLink
                  href={page.introCta.href}
                  external={page.introCta.external}
                  title={page.introCta.title}
                >
                  {page.introCta.label}
                </GermanLink>
              </div>
            )}
          </GermanReveal>
        </div>
      </section>

      <section className="tg-section">
        {page.treatments.map((item) => (
          <article key={item.id} id={item.id} className="tg-chapter">
            <div className="tg-chapter-media">
              <img src={item.image} alt={item.imageAlt} title={item.imageTitle} />
            </div>
            <div className="tg-chapter-copy">
              <h3 className="tg-h3 tg-upper" style={{ marginBottom: 24 }}>
                {item.title}
              </h3>
              {item.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="tg-body" style={{ marginBottom: 16 }}>
                  {p}
                </p>
              ))}
              {item.cta && (
                <div style={{ marginTop: 24 }}>
                  <GermanLink href={item.cta.href} external={item.cta.external} title={item.cta.title}>
                    {item.cta.label}
                  </GermanLink>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
