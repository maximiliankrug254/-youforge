import { legalConfig, siteConfig } from "@/lib/constants";
import { productionSiteUrl } from "@/lib/site-url";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${productionSiteUrl}/#organisation`,
    name: siteConfig.name,
    legalName: legalConfig.company,
    url: productionSiteUrl,
    logo: `${productionSiteUrl}/apple-icon`,
    image: `${productionSiteUrl}/opengraph-image`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: legalConfig.street,
      addressLocality: "Sheridan",
      addressRegion: "WY",
      postalCode: "82801",
      addressCountry: "US",
    },
    areaServed: ["Deutschland", "Österreich", "Schweiz"].map((name) => ({ "@type": "Country", name })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: ["de", "en"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
