import Link from "next/link";
import {
  GERMAN,
  GERMAN_BASE,
  germanAsset,
  germanMailto,
  germanWhatsAppChat,
} from "@/components/demo/the-german/german-config";
import { GermanParallaxImg } from "@/components/demo/the-german/GermanMotion";
import { GermanClock } from "@/components/demo/the-german/GermanClock";

export function GermanFooter() {
  return (
    <footer className="tg-footer" id="contact">
      <GermanParallaxImg
        src={germanAsset("home/footer.jpg")}
        alt=""
        className="tg-footer-bg"
        from="-25%"
        to="23%"
      />
      <div className="tg-hero-overlay" />
      <div className="tg-container tg-footer-inner" style={{ padding: "120px 0 90px" }}>
        <div className="tg-footer-grid">
          <div>
            <span className="tg-suptitle" style={{ color: "#fff" }}>
              THE GERMAN
              <br />
              Dental &amp; Skin Aesthetics
            </span>
            <p className="tg-body" style={{ color: "rgba(255,255,255,0.7)", marginTop: 28 }}>
              {GERMAN.contact.street},
              <br />
              {GERMAN.contact.locality}, {GERMAN.contact.region}
              <br />
              <a href={germanWhatsAppChat()}>
                WhatsApp/Phone: {GERMAN.contact.phoneDisplay}
              </a>
              <br />
              <a href={germanMailto()}>email address: {GERMAN.contact.email}</a>
            </p>
          </div>
          <Link href={GERMAN_BASE} className="tg-footer-logo">
            <img
              src={germanAsset("branding/logo-light.png")}
              alt={GERMAN.brand.logoAlt}
              style={{ width: "100%", maxWidth: 360, height: "auto" }}
            />
          </Link>
        </div>
      </div>
      <div className="tg-container-fluid">
        <div className="tg-footer-bottom">
          <p style={{ margin: 0 }}>{GERMAN.copyright}</p>
          <GermanClock showStatus />
        </div>
      </div>
    </footer>
  );
}
