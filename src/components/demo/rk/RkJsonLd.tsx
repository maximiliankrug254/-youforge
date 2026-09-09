import { RK_CONTACT } from "@/components/demo/rk/rk-contact";

export function RkJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: RK_CONTACT.legalName,
    image: "https://www.raumkontrast-baumann.de/partner_files/www.raumkontrast-baumann.de/Bilder/Logo/Logo_klein.png",
    telephone: RK_CONTACT.phoneDisplay,
    email: RK_CONTACT.email,
    url: "https://www.raumkontrast-baumann.de/",
    foundingDate: String(RK_CONTACT.since),
    address: {
      "@type": "PostalAddress",
      streetAddress: RK_CONTACT.addressLine1,
      postalCode: "83737",
      addressLocality: "Irschenberg",
      addressCountry: "DE",
    },
    areaServed: RK_CONTACT.region,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: RK_CONTACT.hours,
    },
    sameAs: [RK_CONTACT.facebook, RK_CONTACT.instagram],
    knowsAbout: [
      "Markisen",
      "Sonnenschutz",
      "Plissee",
      "ZIP-Screen",
      "Raumausstattung",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
