import {
  GERMAN,
  GERMAN_BASE,
  GERMAN_PDF,
  germanWhatsAppUrl,
} from "@/components/demo/the-german/german-config";

export type GermanHeaderAction = {
  href: string;
  label: string;
  external?: boolean;
  primary?: boolean;
};

export const GERMAN_HEADER_ACTIONS: GermanHeaderAction[] = [
  {
    href: germanWhatsAppUrl(),
    label: "Book appointment",
    external: true,
    primary: true,
  },
  {
    href: `${GERMAN_BASE}/dental-care-bali`,
    label: "Explore Dental",
  },
  {
    href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali`,
    label: "Skin Services",
  },
  {
    href: GERMAN.social.instagram,
    label: "Instagram",
    external: true,
  },
  {
    href: "#contact",
    label: "CONTACT US",
  },
];

export type GermanNavChild = {
  href: string;
  label: string;
  external?: boolean;
};

export type GermanNavItem = {
  href: string;
  label: string;
  children: GermanNavChild[];
};

export const GERMAN_NAV: GermanNavItem[] = [
  {
    href: `${GERMAN_BASE}/dental-care-bali`,
    label: "Dental Care",
    children: [
      { href: `${GERMAN_BASE}/dental-care-bali#preventive-care`, label: "Preventive Care" },
      { href: `${GERMAN_BASE}/dental-care-bali#restorative-dentistry`, label: "Restorative Dentistry" },
      { href: `${GERMAN_BASE}/dental-care-bali#implants-oral-surgery`, label: "Implants & Oral Surgery" },
      { href: `${GERMAN_BASE}/dental-care-bali#root-canal-treatment`, label: "Root Canal Treatment" },
      { href: `${GERMAN_BASE}/dental-care-bali#crowns-veneers-prosthetics`, label: "Crowns, Veneers & Prosthetics" },
      { href: `${GERMAN_BASE}/dental-care-bali#smile-aesthetics`, label: "Smile Aesthetics" },
      { href: `${GERMAN_BASE}/dental-care-bali#diagnostics-imaging`, label: "Diagnostics & Imaging" },
      { href: GERMAN_PDF.dental.href, label: "Dental Treatment Menu & Pricing", external: true },
    ],
  },
  {
    href: `${GERMAN_BASE}/orthodontics-bali`,
    label: "Orthodontics",
    children: [
      { href: `${GERMAN_BASE}/orthodontics-bali#fixed-appliances`, label: "Fixed Appliances" },
      { href: `${GERMAN_BASE}/orthodontics-bali#clear-aligners`, label: "Clear Aligners" },
      { href: `${GERMAN_BASE}/orthodontics-bali#retention-systems`, label: "Retention Systems" },
      { href: `${GERMAN_BASE}/orthodontics-bali#digital-planning`, label: "Digital Planning" },
      { href: GERMAN_PDF.dental.href, label: "Orthodontics Menu & Pricing", external: true },
    ],
  },
  {
    href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali`,
    label: "Dermatology",
    children: [
      { href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali#anti-aging-injectables`, label: "Anti-Aging & Injectables" },
      { href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali#facial-contouring`, label: "Facial Contouring" },
      { href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali#skin-quality-regeneration`, label: "Skin Quality & Regeneration" },
      { href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali#skin-treatments-peels`, label: "Skin Treatments & Peels" },
      { href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali#laser-treatments`, label: "Laser Treatments" },
      { href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali#pico-laser`, label: "Pico Laser" },
      { href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali#co2-laser`, label: "CO₂ Laser" },
      { href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali#acne-medical-dermatology`, label: "Acne & Medical Dermatology" },
      { href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali#body-contouring-metabolic-support`, label: "Body Contouring & Metabolic Support" },
      { href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali#hair-loss-therapy`, label: "Hair Loss Therapy" },
      { href: GERMAN_PDF.dermatology.href, label: "Skin Treatment Menu & Pricing", external: true },
    ],
  },
  {
    href: `${GERMAN_BASE}/technology`,
    label: "Technology",
    children: [
      { href: `${GERMAN_BASE}/technology#digital-diagnostics`, label: "Digital Diagnostics" },
      { href: `${GERMAN_BASE}/technology#clinical-equipment`, label: "Clinical Equipment" },
      { href: `${GERMAN_BASE}/technology#in-house-laboratory`, label: "In-House Laboratory" },
      { href: `${GERMAN_BASE}/technology#integrated-workflow`, label: "Integrated Workflow" },
    ],
  },
  {
    href: `${GERMAN_BASE}/about-us`,
    label: "About",
    children: [
      { href: `${GERMAN_BASE}/about-us#our-vision`, label: "Our Vision" },
      { href: `${GERMAN_BASE}/about-us#founders`, label: "Founders" },
      { href: `${GERMAN_BASE}/about-us#our-team`, label: "Our Team" },
    ],
  },
];

export const GERMAN_REDIRECTS: Record<string, string> = {
  "/index.html": GERMAN_BASE,
  "/dental-care-bali.html": `${GERMAN_BASE}/dental-care-bali`,
  "/orthodontics-bali.html": `${GERMAN_BASE}/orthodontics-bali`,
  "/skin-aesthetics-dermatology-bali.html": `${GERMAN_BASE}/skin-aesthetics-dermatology-bali`,
  "/skin-aesthetics-bali.html": `${GERMAN_BASE}/skin-aesthetics-dermatology-bali`,
  "/technology.html": `${GERMAN_BASE}/technology`,
  "/about-us.html": `${GERMAN_BASE}/about-us`,
  "/home-1.html": GERMAN_BASE,
};
