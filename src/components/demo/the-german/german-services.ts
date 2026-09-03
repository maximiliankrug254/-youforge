import { GERMAN_BASE, GERMAN_PDF, germanAsset } from "@/components/demo/the-german/german-config";

export type GermanTreatment = {
  id: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imageTitle?: string;
  reverse?: boolean;
  cta?: {
    href: string;
    label: string;
    title?: string;
    external?: boolean;
  };
};

export type GermanServicePage = {
  slug: string;
  href: string;
  navLabel: string;
  heroTitle: string;
  heroImage: string;
  heroAlt: string;
  breadcrumb: string;
  introEyebrow: string;
  introTitle: string;
  introText: string;
  introCta?: {
    href: string;
    label: string;
    title?: string;
    external?: boolean;
  };
  treatments: GermanTreatment[];
};

export const GERMAN_PILLARS = [
  {
    href: `${GERMAN_BASE}/dental-care-bali`,
    icon: germanAsset("icons/dental.svg"),
    title: "Dental Care",
    text: "Precision dentistry at the highest standard — from endodontics to implants, supported by advanced 3D imaging and our fully integrated in-house laboratory.",
  },
  {
    href: `${GERMAN_BASE}/orthodontics-bali`,
    icon: germanAsset("icons/orthodontics.svg"),
    title: "Orthodontics",
    text: "Aesthetic and functional orthodontic care for all ages — digitally planned and delivered with controlled, gentle, and predictable tooth movement.",
  },
  {
    href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali`,
    icon: germanAsset("icons/dermatology.svg"),
    title: "Dermatology",
    text: "Medically guided aesthetic treatments performed by our dermatologist — focused on natural, balanced results without exaggeration.",
  },
  {
    href: `${GERMAN_BASE}/technology`,
    icon: germanAsset("icons/technology.svg"),
    title: "Technology",
    text: "State-of-the-art 3D imaging, digital workflows, and integrated data management that ensure safe, precise, and consistently predictable outcomes.",
  },
] as const;

export const GERMAN_ADVANTAGES = [
  {
    title: "Consultation & Diagnostics",
    text: "We begin with a clear assessment supported by advanced digital imaging to understand your needs precisely.",
  },
  {
    title: "Personalized Treatment Plan",
    text: "Your specialist creates a tailored plan focused on safety, natural results, and long-term health.",
  },
  {
    title: "Seamless Treatment Experience",
    text: "We coordinate every step — scheduling, treatment, communication — for a calm and efficient journey.",
  },
  {
    title: "Ongoing Care & Support",
    text: "We remain by your side with dedicated follow-ups and long-term monitoring to ensure lasting results.",
  },
] as const;

export const GERMAN_GALLERY = [
  { src: germanAsset("home/cover-01.jpg"), title: "Modern architecture", variant: "square" as const },
  { src: germanAsset("home/cover-02.jpg"), title: "Advanced Technology", variant: "square" as const },
  { src: germanAsset("home/cover-03.jpg"), title: "Beauty and Precision in Every Aspect", variant: "long" as const },
  { src: germanAsset("home/cover-04.jpg"), title: "Exceptional Comfort", variant: "square" as const },
  { src: germanAsset("home/cover-05.jpg"), title: "We Offer Every Comfort for Our Guests", variant: "square" as const },
  { src: germanAsset("home/cover-06.jpg"), title: "Feel at Home from the Moment You Arrive", variant: "long" as const },
];

export const GERMAN_DENTAL: GermanServicePage = {
  slug: "dental-care-bali",
  href: `${GERMAN_BASE}/dental-care-bali`,
  navLabel: "Dental Care",
  heroTitle: "Dental Care",
  heroImage: germanAsset("dental/header-dentistry.jpg"),
  heroAlt: "Dental Care in Bali",
  breadcrumb: "Dental Care",
  introEyebrow: "Dental Care in Bali",
  introTitle: "Precision Dentistry.\nLong-Term Oral Health.",
  introText:
    "At THE GERMAN – Dental & Skin Aesthetics, every dental treatment is guided by precision, advanced diagnostics, and minimally invasive concepts. From preventive care to complex oral rehabilitation, our approach combines German clinical standards with digital technology and aesthetic excellence.",
  introCta: {
    href: GERMAN_PDF.dental.href,
    label: "Treatment Menu & Pricing",
    title: "Dental Treatment Menu and Pricing in Bali",
    external: true,
  },
  treatments: [
    {
      id: "preventive-care",
      title: "Preventive Care",
      image: germanAsset("dental/preventive-dentistry-bali.jpg"),
      imageAlt: "Preventive Dental Care Bali",
      paragraphs: [
        "Preventive dentistry focuses on maintaining long-term oral health through regular examinations, professional cleanings, digital diagnostics, and early intervention. Structured preventive care reduces future complications while preserving natural teeth and healthy gums.",
      ],
    },
    {
      id: "restorative-dentistry",
      title: "Restorative Dentistry",
      reverse: true,
      image: germanAsset("dental/restorative-dentistry-bali.jpg"),
      imageAlt: "Restorative Dentistry Bali",
      paragraphs: [
        "Modern restorative dentistry rebuilds damaged teeth using advanced adhesive materials and digital precision. Treatments are designed to restore strength, functionality, and natural aesthetics while preserving as much healthy tooth structure as possible.",
      ],
    },
    {
      id: "implants-oral-surgery",
      title: "Implants & Oral Surgery",
      image: germanAsset("dental/dental-implants-bali-canggu.jpg"),
      imageAlt: "Dental Implants Bali",
      paragraphs: [
        "Implant procedures are digitally planned using advanced 3D diagnostics to achieve accurate implant positioning and minimally invasive surgery. Our integrated workflows support predictable healing, stable function, and highly aesthetic restorations.",
      ],
    },
    {
      id: "root-canal-treatment",
      title: "Root Canal Treatment",
      reverse: true,
      image: germanAsset("dental/endodontics-root-canal-treatment-bali.jpg"),
      imageAlt: "Root Canal Treatment Bali",
      paragraphs: [
        "Root canal treatments are performed with magnification, rotary systems, and digital imaging to preserve natural teeth with maximum precision. This approach supports comfortable treatment, controlled disinfection, and reliable long-term outcomes.",
      ],
    },
    {
      id: "crowns-veneers-prosthetics",
      title: "Crowns, Veneers & Prosthetics",
      image: germanAsset("dental/dental-crowns-bridges-bali-dental-clinic.jpg"),
      imageAlt: "Crowns Veneers Prosthetics Bali",
      paragraphs: [
        "High-quality crowns, veneers, and prosthetic restorations are produced through fully digital workflows in collaboration with our in-house laboratory. Every restoration is individually crafted to achieve optimal fit, durability, and natural aesthetics.",
      ],
    },
    {
      id: "smile-aesthetics",
      title: "Smile Aesthetics",
      reverse: true,
      image: germanAsset("dental/smile-aesthetics-bali.jpg"),
      imageAlt: "Smile Aesthetics Bali",
      paragraphs: [
        "Smile aesthetic treatments combine facial harmony, tooth proportions, and natural color concepts to create balanced and refined results. Digital planning allows patients to visualize outcomes before treatment begins.",
      ],
    },
    {
      id: "diagnostics-imaging",
      title: "Diagnostics & Imaging",
      image: germanAsset("dental/digital-diagnostics-dental-clinic-bali.jpg"),
      imageAlt: "Digital Diagnostics Bali",
      paragraphs: [
        "Accurate diagnostics are the foundation of modern dentistry. Advanced imaging systems, intraoral scanners, and digital treatment planning provide detailed clinical information that supports safe, efficient, and highly predictable care.",
      ],
    },
  ],
};

export const GERMAN_ORTHO: GermanServicePage = {
  slug: "orthodontics-bali",
  href: `${GERMAN_BASE}/orthodontics-bali`,
  navLabel: "Orthodontics",
  heroTitle: "Orthodontics at THE GERMAN",
  heroImage: germanAsset("orthodontics/header-orthodontics.jpg"),
  heroAlt: "Orthodontics at THE GERMAN in Bali",
  breadcrumb: "Orthodontics",
  introEyebrow: "Orthodontics in Bali",
  introTitle: "Aligned Function.\nConfident Smiles.",
  introText:
    "Orthodontics at THE GERMAN – Dental & Skin Aesthetics focuses on more than straight teeth. Our treatments aim to improve facial harmony, bite function, and long-term dental stability through precise planning and controlled tooth movement.",
  introCta: {
    href: GERMAN_PDF.dental.href,
    label: "Explore Our Treatments",
    title: "Orthodontic Treatments and Pricing in Bali",
    external: true,
  },
  treatments: [
    {
      id: "fixed-appliances",
      title: "Fixed Appliances",
      reverse: true,
      image: germanAsset("orthodontics/orthodontic-braces-treatment-bali.jpg"),
      imageAlt: "Traditional fixed orthodontic braces treatment for precise teeth alignment in Bali",
      imageTitle: "Fixed Appliances - Orthodontic Braces Bali",
      paragraphs: [
        "Traditional fixed orthodontic appliances allow highly controlled and detailed movement of individual teeth. They are particularly effective for complex corrections and ensure accurate alignment and balanced occlusion.",
      ],
    },
    {
      id: "clear-aligners",
      title: "Clear Aligners",
      image: germanAsset("orthodontics/clear-aligners-orthodontics-bali.jpg"),
      imageAlt: "Clear aligner orthodontic treatment for discreet teeth correction in Bali",
      imageTitle: "Clear Aligners - Orthodontics Bali",
      paragraphs: [
        "Clear aligner therapy offers a discreet and flexible solution for orthodontic correction. These transparent, removable trays gradually guide teeth into their ideal position while allowing patients to maintain their daily routines comfortably.",
      ],
    },
    {
      id: "retention-systems",
      title: "Retention Systems",
      reverse: true,
      image: germanAsset("orthodontics/orthodontic-retainers-after-braces-bali.jpg"),
      imageAlt: "Customized orthodontic retainers used after braces treatment for long-term teeth alignment in Bali",
      imageTitle: "Retention Systems - Orthodontics Bali",
      paragraphs: [
        "Maintaining the achieved results is an essential part of orthodontic treatment. Customized retention systems stabilize the teeth after active treatment and help preserve alignment and function over the long term.",
      ],
    },
    {
      id: "digital-planning",
      title: "Digital Planning",
      image: germanAsset("orthodontics/digital-orthodontic-treatment-planning-bali.jpg"),
      imageAlt: "Digital orthodontic treatment planning with advanced dental technology for accurate results in Bali",
      imageTitle: "Digital Planning - Orthodontics Bali",
      paragraphs: [
        "Advanced imaging and digital analysis allow us to evaluate jaw relationships, tooth positions, and facial proportions before treatment begins. This structured planning ensures predictable results and efficient treatment progress.",
      ],
    },
  ],
};

export const GERMAN_DERMA: GermanServicePage = {
  slug: "skin-aesthetics-dermatology-bali",
  href: `${GERMAN_BASE}/skin-aesthetics-dermatology-bali`,
  navLabel: "Dermatology",
  heroTitle: "Dermatology & Skin Aesthetics",
  heroImage: germanAsset("dermatology/header-skin-aesthetics.jpg"),
  heroAlt: "Facial & Skin Aesthetics Bali",
  breadcrumb: "Dermatology",
  introEyebrow: "Skin Aesthetics in Bali",
  introTitle: "Medical Precision.\nNatural Beauty.",
  introText:
    "At THE GERMAN – Dental & Skin Aesthetics, skin treatments are performed with clinical precision and dermatological expertise. Every procedure aims to restore healthy skin structure and natural balance while respecting the individual characteristics of each face.",
  introCta: {
    href: GERMAN_PDF.dermatology.href,
    label: "Skin Treatment Menu & Pricing",
    title: "Skin Aesthetic Treatments and Pricing in Bali",
    external: true,
  },
  treatments: [
    {
      id: "anti-aging-injectables",
      title: "Anti-Aging & Injectables",
      reverse: true,
      image: germanAsset("dermatology/injectable-therapies-bali-botox-fillers.jpg"),
      imageAlt: "Anti-aging injectables and facial rejuvenation treatments in Bali",
      imageTitle: "Anti-Aging & Injectables Bali",
      paragraphs: [
        "Injectable treatments are designed to soften dynamic facial lines, restore volume loss, and support balanced facial rejuvenation without compromising natural expression. Treatments may include botulinum toxin, hyaluronic acid fillers, skin boosters, and regenerative injectables tailored to individual anatomy and aesthetic goals.",
        "Every procedure follows a conservative and medically guided approach focused on facial harmony, skin quality, and long-term natural results rather than exaggerated changes.",
      ],
    },
    {
      id: "facial-contouring",
      title: "Facial Contouring",
      image: germanAsset("dermatology/facial-contouring-bali.jpg"),
      imageAlt: "Facial contouring and jawline enhancement treatments in Bali",
      imageTitle: "Facial Contouring Bali",
      paragraphs: [
        "Facial contouring treatments are performed to refine proportions, improve definition, and restore structural balance of the face. Areas such as the jawline, chin, cheeks, temples, and lips can be enhanced using advanced injectable techniques and individualized planning.",
        "Treatment concepts are carefully adapted to facial anatomy, skin condition, and natural movement patterns to achieve elegant and subtle enhancement.",
      ],
    },
    {
      id: "skin-quality-regeneration",
      title: "Skin Quality & Regeneration",
      reverse: true,
      image: germanAsset("dermatology/prp-regenerative-skin-treatment-bali.jpg"),
      imageAlt: "Skin regeneration and PRP therapy in Bali",
      imageTitle: "Skin Quality & Regeneration Bali",
      paragraphs: [
        "Regenerative dermatology focuses on improving skin health through stimulation of collagen production, hydration, and cellular renewal. Treatments such as PRP, mesotherapy, skin boosters, and microneedling support long-term improvement of texture, elasticity, and skin vitality.",
        "These therapies are suitable for dull skin, early aging changes, enlarged pores, and uneven texture while promoting healthier and stronger skin structure over time.",
      ],
    },
    {
      id: "skin-treatments-peels",
      title: "Skin Treatments & Peels",
      image: germanAsset("dermatology/chemical-peels-bali.jpg"),
      imageAlt: "Medical skin treatments and chemical peels in Bali",
      imageTitle: "Skin Treatments & Peels Bali",
      paragraphs: [
        "Medical skin treatments and professional peels help improve texture, pigmentation irregularities, acne scars, fine lines, and sun-damaged skin. Depending on the indication, superficial to advanced peeling systems are selected to safely stimulate controlled skin renewal.",
        "Treatment protocols are individually adjusted according to skin sensitivity, recovery expectations, and long-term dermatological goals.",
      ],
    },
    {
      id: "laser-treatments",
      title: "Laser Treatments",
      reverse: true,
      image: germanAsset("dermatology/laser-skin-treatment-bali.jpg"),
      imageAlt: "Laser skin rejuvenation treatments in Bali",
      imageTitle: "Laser Treatments Bali",
      paragraphs: [
        "Modern laser systems are used to improve pigmentation, skin texture, acne scarring, enlarged pores, and visible signs of aging. Treatments are selected according to skin type, indication, and downtime preferences.",
        "Laser-based therapies allow precise and controlled skin remodeling while supporting collagen regeneration and smoother skin appearance.",
      ],
    },
    {
      id: "pico-laser",
      title: "Pico Laser",
      image: germanAsset("dermatology/pico-laser-bali.jpg"),
      imageAlt: "Pico laser pigmentation and skin rejuvenation treatment in Bali",
      imageTitle: "Pico Laser Bali",
      paragraphs: [
        "Pico laser technology delivers ultra-short energy pulses to target pigmentation, acne scars, uneven skin tone, and signs of photoaging with minimal thermal damage. The treatment supports collagen stimulation and gradual skin refinement while reducing recovery time.",
        "Pico laser procedures are commonly used for melasma, pigmentation correction, skin brightening, tattoo removal, and scar improvement.",
      ],
    },
    {
      id: "co2-laser",
      title: "CO₂ Laser",
      reverse: true,
      image: germanAsset("dermatology/co2-laser-bali.jpg"),
      imageAlt: "CO2 laser resurfacing treatment in Bali",
      imageTitle: "CO2 Laser Bali",
      paragraphs: [
        "Fractional CO₂ laser resurfacing is an advanced dermatological treatment used to improve deeper wrinkles, acne scars, skin laxity, and uneven texture. By creating controlled micro-injuries within the skin, collagen remodeling and tissue renewal are stimulated.",
        "Treatment intensity and recovery protocols are individually customized to balance effectiveness, comfort, and healing time.",
      ],
    },
    {
      id: "acne-medical-dermatology",
      title: "Acne & Medical Dermatology",
      image: germanAsset("dermatology/acne-medical-dermatology-bali.jpg"),
      imageAlt: "Acne and medical dermatology treatment in Bali",
      imageTitle: "Acne & Medical Dermatology Bali",
      paragraphs: [
        "Medical dermatology treatments address active acne, inflammation, pigmentation disorders, rosacea, sensitive skin conditions, and chronic skin concerns. Therapy concepts combine clinical evaluation with individualized treatment planning.",
        "Depending on diagnosis and skin condition, treatments may include medical facials, topical therapy, laser applications, chemical peels, and regenerative procedures.",
      ],
    },
    {
      id: "body-contouring-metabolic-support",
      title: "Body Contouring & Metabolic Support",
      reverse: true,
      image: germanAsset("dermatology/body-contouring-bali.jpg"),
      imageAlt: "Body contouring and metabolic support treatments in Bali",
      imageTitle: "Body Contouring Bali",
      paragraphs: [
        "Non-surgical body contouring treatments are designed to support body definition, skin tightening, and localized fat reduction. Technologies may include radiofrequency, injectables, and regenerative approaches depending on individual goals.",
        "Metabolic support programs focus on medically guided wellness concepts that may assist with weight management, lifestyle optimization, and overall physical balance.",
      ],
    },
    {
      id: "hair-loss-therapy",
      title: "Hair Loss Therapy",
      image: germanAsset("dermatology/hair-loss-therapy-bali.jpg"),
      imageAlt: "Hair restoration and hair loss therapy in Bali",
      imageTitle: "Hair Loss Therapy Bali",
      paragraphs: [
        "Hair restoration therapies are aimed at improving scalp health, supporting follicular activity, and reducing progressive hair thinning. Treatment options may include PRP therapy, regenerative scalp treatments, mesotherapy, and individualized medical support concepts.",
        "Every treatment plan is adapted according to the cause and progression of hair loss while focusing on natural and sustainable improvement.",
      ],
    },
    {
      id: "skin-treatment-menu-pricing",
      title: "Skin Treatment Menu & Pricing",
      reverse: true,
      image: germanAsset("dermatology/skin-treatment-menu-bali.jpg"),
      imageAlt: "Dermatology treatment pricing and consultation information in Bali",
      imageTitle: "Skin Treatment Menu & Pricing Bali",
      paragraphs: [
        "A detailed overview of available dermatology and aesthetic treatments, including consultation information and pricing, is available in our digital treatment menu.",
      ],
      cta: {
        href: GERMAN_PDF.dermatology.href,
        label: "Open Skin Treatment Menu & Pricing",
        title: "Skin Treatment Menu and Pricing in Bali",
        external: true,
      },
    },
  ],
};

export const GERMAN_TECH: GermanServicePage = {
  slug: "technology",
  href: `${GERMAN_BASE}/technology`,
  navLabel: "Technology",
  heroTitle: "Advanced Technology",
  heroImage: germanAsset("technology/header-technology.jpg"),
  heroAlt: "Advanced technology at THE GERMAN Clinic Bali",
  breadcrumb: "Technology",
  introEyebrow: "Our Technology",
  introTitle: "Advanced Technology.\nPrecise Care.",
  introText:
    "At THE GERMAN – Dental & Skin Aesthetics, technology is more than equipment — it’s the foundation of precision, safety, and predictability. Every clinical decision is supported by state-of-the-art diagnostics, digital workflows, and integrated systems, ensuring excellence at every step.",
  treatments: [
    {
      id: "digital-diagnostics",
      title: "Digital Diagnostics",
      reverse: true,
      image: germanAsset("technology/digital-diagnostics.jpg"),
      imageAlt: "Advanced CBCT 3D dental diagnostics technology used at a modern dental clinic in Bali",
      imageTitle: "Digital Dental Diagnostics – CBCT Imaging",
      paragraphs: [
        "Our clinic uses advanced 3D CBCT imaging to visualize complex anatomical structures with unparalleled clarity. From root canal treatment to implant planning, these high-resolution images allow for precise, minimally invasive procedures with predictable outcomes.",
      ],
    },
    {
      id: "clinical-equipment",
      title: "Clinical Equipment",
      image: germanAsset("technology/clinical-equipment.jpg"),
      imageAlt: "Modern dental treatment room with advanced clinical equipment in a dental clinic in Bali",
      imageTitle: "Advanced Dental Clinical Equipment",
      paragraphs: [
        "Each treatment room is equipped with ergonomic dental units, advanced lighting, and fully integrated hygiene systems, meeting the highest international standards. Digital interfaces allow seamless workflow management while maintaining full sterilization compliance. Every detail is designed to maximize patient comfort and operator efficiency.",
      ],
    },
    {
      id: "in-house-laboratory",
      title: "In-House Laboratory",
      reverse: true,
      image: germanAsset("technology/in-house-laboratory.jpg"),
      imageAlt: "In-house dental laboratory for crowns, bridges and implant restorations in Bali",
      imageTitle: "In-House Dental Laboratory",
      paragraphs: [
        "Our in-house dental laboratory combines cutting-edge digital design with meticulous craftsmanship. Dentists and technicians collaborate in real time, ensuring rapid turnaround, precise fits, and perfect aesthetics. Crowns, bridges, and implant restorations are crafted with precision, following our principle: perfection through precision.",
      ],
    },
    {
      id: "integrated-workflow",
      title: "Integrated Data & Workflow",
      image: germanAsset("technology/integrated-data-workflow.jpg"),
      imageAlt: "Integrated digital workflow and patient data system at a modern dental clinic in Bali",
      imageTitle: "Integrated Digital Dental Workflow",
      paragraphs: [
        "We operate with a fully digital clinical management system, linking patient data, imaging, and treatment documentation. This integrated platform ensures data security, traceability, and efficient interdisciplinary collaboration, reflecting our commitment to transparent, modern, and medically structured care.",
      ],
    },
  ],
};

export const GERMAN_PAGES = [GERMAN_DENTAL, GERMAN_ORTHO, GERMAN_DERMA, GERMAN_TECH] as const;
