import Link from "next/link";
import { GERMAN_PILLARS } from "@/components/demo/the-german/german-services";
import { germanAsset } from "@/components/demo/the-german/german-config";
import { GermanReveal } from "@/components/demo/the-german/GermanReveal";

const COVERS: Record<string, string> = {
  "Dental Care": germanAsset("dental/header-dentistry.jpg"),
  Orthodontics: germanAsset("orthodontics/header-orthodontics.jpg"),
  Dermatology: germanAsset("dermatology/header-skin-aesthetics.jpg"),
  Technology: germanAsset("technology/header-technology.jpg"),
};

export function GermanPillars() {
  return (
    <section className="tg-section" id="services">
      <div className="tg-container" style={{ padding: "120px 0 60px" }}>
        <div className="tg-pillars">
          {GERMAN_PILLARS.map((pillar, i) => (
            <GermanReveal key={pillar.title} delay={i * 0.08}>
              <Link href={pillar.href} className="tg-icon-box tg-pillar-card">
                <img src={COVERS[pillar.title]} alt="" className="tg-pillar-cover" />
                <div className="tg-pillar-shade" />
                <div className="tg-pillar-body">
                  <div className="tg-icon" style={{ marginBottom: 30 }}>
                    <img src={pillar.icon} alt="" />
                  </div>
                  <h2 className="tg-h4 tg-upper" style={{ marginBottom: 24 }}>
                    {pillar.title}
                  </h2>
                  <p className="tg-body" style={{ margin: 0 }}>
                    {pillar.text}
                  </p>
                </div>
              </Link>
            </GermanReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
