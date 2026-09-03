import { GERMAN_BASE, GERMAN_PDF, germanAsset } from "@/components/demo/the-german/german-config";

export const GERMAN_HOME = {
  hero: {
    eyebrow: "German Precision. Bali Calm.",
    h1Before: "Because",
    h1Accent: "your smile",
    h1After: "deserves\nperfection!",
    book: "Book your appointment!",
    exploreDental: "Explore Dental",
    exploreSkin: "and Skin Services",
    instagram: "Join Us on Instagram",
    image: germanAsset("home/hero.jpg"),
    imageAlt: "THE GERMAN Dental & Skin Aesthetics clinic in Bali",
  },
  about: {
    eyebrow: "About us",
    title: "Excellence in Every Detail",
    text: "At THE GERMAN – Dental & Skin Aesthetics, we blend German clinical accuracy with a refined, natural approach to beauty. Our team delivers dentistry and facial treatments guided by structure, science, and a commitment to long-term health.",
    book: "Book Appointment",
    image: germanAsset("home/clinic.jpg"),
    imageAlt: "The German dental and skin aesthetics clinic in Bali",
    years: 20,
    yearsLabel: "Years",
    yearsText: "of successful work in Germany",
  },
  advantages: {
    eyebrow: "Our Advantages",
    title: "We Take Care of Everything\nfor You!",
    text: "From your first message to your final follow-up, our team ensures a smooth, structured, and fully supported experience.\nSo you can relax — while we handle every detail with precision and care.",
  },
};

export const GERMAN_ABOUT = {
  heroTitle: "About us",
  heroImage: germanAsset("about/header.jpg"),
  heroAlt: "About THE GERMAN clinic in Bali",
  visionEyebrow: "Our Vision – we Are THE GERMAN",
  visionTitle: "German Dental and Skin Aesthetics in Bali",
  visionText:
    "We combine German medical standards with the calm natural beauty of Bali. Our clinic offers precise dentistry and modern facial aesthetics in a structured, patient-focused environment — guided by medical integrity, advanced technology, and aesthetic harmony.",
  visionImage: germanAsset("about/clinic.jpg"),
  visionImageAlt: "Dentist in Bali, Orthodontics Bali, Skin Aesthetics Bali",
  visionLinks: [
    { href: `${GERMAN_BASE}/dental-care-bali`, label: "Dentist in Bali" },
    { href: `${GERMAN_BASE}/orthodontics-bali`, label: "Orthodontics Bali" },
    { href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali`, label: "Skin Aesthetics Bali" },
  ],
  teamEyebrow: "Meet Our Experts",
  teamTitle: "The Team Behind THE GERMAN",
  teamText:
    "Our multidisciplinary team combines expertise in dentistry, orthodontics, dermatology, aesthetic medicine, and patient care. Every treatment is supported by collaborative planning, modern technology, and a commitment to precision and natural results.",
};

export const GERMAN_SEO = {
  home: {
    title: "German Dentist in Bali | THE GERMAN – Dental & Skin Aesthetics",
    description:
      "German precision dentistry and facial aesthetics in Bali. Advanced technology, in-house dental laboratory, orthodontics and implantology in a modern clinic.",
  },
  dental: {
    title: "Dental Care in Bali | THE GERMAN Clinic",
    description:
      "Advanced dental care in Bali with German precision. Preventive dentistry, implants, smile aesthetics, prosthetics, root canal treatments and digital diagnostics at THE GERMAN Clinic.",
  },
  ortho: {
    title: "Orthodontics in Bali | Braces & Clear Aligners",
    description:
      "Modern orthodontic treatments in Bali including braces, clear aligners, and digital planning. Achieve a healthy bite and confident smile with precision orthodontics.",
  },
  derma: {
    title: "Facial Aesthetics in Bali | Medical Skin & Anti-Aging Treatments",
    description:
      "Medical skin aesthetics in Bali including botulinum toxin, fillers, PRP, microneedling and HIFU treatments for natural and balanced results.",
  },
  tech: {
    title: "Advanced Dental Technology in Bali | THE GERMAN Clinic",
    description:
      "3D CBCT imaging, digital workflows, an integrated in-house laboratory and clinical equipment at THE GERMAN – Dental & Skin Aesthetics in Bali.",
  },
  about: {
    title: "About THE GERMAN - Dental & Skin Aesthetics | German Precision in Bali",
    description:
      "Discover THE GERMAN - Dental & Skin Aesthetics in Bali. German precision dentistry, skin aesthetics, advanced technology, and a serene, patient-focused clinic environment.",
  },
};

export { GERMAN_PDF };
