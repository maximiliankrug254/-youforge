/**
 * Firmeneintrag und FAQ für Google und KI-Suchen (JSON-LD).
 * Ziel im Kundenprojekt: src/components/seo/LocalBusinessJsonLd.tsx
 * Einbau: <LocalBusinessJsonLd /> im Root-Layout, <FaqJsonLd /> auf der Seite mit dem sichtbaren FAQ.
 */
import { SEO } from "@/lib/seo/seo-config";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": SEO.typ,
    "@id": `${SEO.website}/#firma`,
    name: SEO.firma,
    url: SEO.website,
    telephone: SEO.telefon,
    email: SEO.email,
    image: new URL(SEO.bild, SEO.website).href,
    logo: new URL(SEO.logo, SEO.website).href,
    address: {
      "@type": "PostalAddress",
      streetAddress: SEO.adresse.strasse,
      postalCode: SEO.adresse.plz,
      addressLocality: SEO.adresse.ort,
      addressCountry: SEO.adresse.land,
    },
    geo: { "@type": "GeoCoordinates", latitude: SEO.geo.lat, longitude: SEO.geo.lng },
    areaServed: SEO.einsatzgebiet.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: SEO.oeffnungszeiten.map((z) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: z.tage,
      opens: z.von,
      closes: z.bis,
    })),
    makesOffer: SEO.leistungen.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
    sameAs: SEO.profile,
  };
  return <JsonLd data={data} />;
}

export function FaqJsonLd({ fragen = SEO.faq }: { fragen?: ReadonlyArray<{ frage: string; antwort: string }> }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fragen.map((f) => ({
      "@type": "Question",
      name: f.frage,
      acceptedAnswer: { "@type": "Answer", text: f.antwort },
    })),
  };
  return <JsonLd data={data} />;
}
