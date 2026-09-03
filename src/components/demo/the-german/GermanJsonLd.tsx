import { GERMAN } from "@/components/demo/the-german/german-config";
import { getSiteUrl } from "@/lib/site-url";

export function GermanJsonLd() {
  const url = `${getSiteUrl()}/demo/the-german`;
  const data = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
    name: GERMAN.brand.full,
    alternateName: GERMAN.brand.alternateName,
    url,
    logo: `${url}/images/branding/logo-light.png`,
    image: `${url}/images/home/hero.jpg`,
    description:
      "German-standard dental and aesthetic clinic in Bali offering advanced dentistry, dental care, implantology, orthodontics, dermatology and facial aesthetics using digital workflows and modern medical technology.",
    telephone: GERMAN.contact.phoneDisplay,
    email: GERMAN.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: GERMAN.contact.street,
      addressLocality: GERMAN.contact.locality,
      addressRegion: GERMAN.contact.region,
      addressCountry: GERMAN.contact.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GERMAN.contact.geo.lat,
      longitude: GERMAN.contact.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...GERMAN.hours.days],
        opens: GERMAN.hours.opens,
        closes: GERMAN.hours.closes,
      },
    ],
    medicalSpecialty: [
      "Dentistry",
      "Dental Care",
      "Implantology",
      "Orthodontics",
      "Restorative Dentistry",
      "Endodontics",
      "Cosmetic Dentistry",
      "Dermatology",
      "Aesthetic Medicine",
    ],
    hasMap: `https://www.google.com/maps?q=${GERMAN.contact.geo.lat},${GERMAN.contact.geo.lng}`,
    sameAs: [GERMAN.social.instagram],
    department: [
      { "@type": "MedicalSpecialty", name: "Dental Care" },
      { "@type": "MedicalSpecialty", name: "Orthodontics" },
      { "@type": "MedicalSpecialty", name: "Dermatology & Aesthetics" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
