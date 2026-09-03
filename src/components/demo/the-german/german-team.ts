import { germanAsset } from "@/components/demo/the-german/german-config";

export type GermanTeamMember = {
  id: string;
  name: string;
  title: string;
  role: string;
  photo: string;
  bio?: string;
  group: "founder" | "clinical" | "operations" | "assistants" | "security";
};

export const GERMAN_FOUNDERS: GermanTeamMember[] = [
  {
    id: "dr-michael-trolle",
    name: "Founder Dr. Michael Trolle",
    title: "Dental Trainer",
    role: "Founder · Dental Trainer",
    photo: germanAsset("team/dr-michael-trolle.jpg"),
    group: "founder",
    bio: "Founder with over 20 years of experience in dental care and clinic management in Germany. He established and led a successful dental practice for many years, with a strong focus on implantology and prosthetic dentistry. He brings German clinical standards and systems into the clinic, ensuring high-quality care, structured treatment planning, and continuous team training.",
  },
  {
    id: "nina-trolle",
    name: "Founder Nina Trolle",
    title: "Master of Science",
    role: "Founder · Master of Science",
    photo: germanAsset("team/nina-trolle.jpg"),
    group: "founder",
    bio: "Expertise in healthcare administration, strategic operations, quality management, and the optimization of clinical processes to enhance patient care and organizational performance.",
  },
];

export const GERMAN_TEAM: GermanTeamMember[] = [
  {
    id: "dr-stephanie",
    name: "Dr. Stephanie",
    title: "Dermatologist",
    role: "Dermatologist",
    photo: germanAsset("team/dr-stephanie.jpg"),
    group: "clinical",
  },
  {
    id: "dr-anggie",
    name: "Dentist Dr. Anggie, MARS",
    title: "Dentist",
    role: "Dentist",
    photo: germanAsset("team/dr-anggie.jpg"),
    group: "clinical",
  },
  {
    id: "dr-citra",
    name: "Dentist Dr. Citra",
    title: "Dentist",
    role: "Dentist",
    photo: germanAsset("team/dr-citra.jpg"),
    group: "clinical",
  },
  {
    id: "dr-putri",
    name: "Dr. Putri",
    title: "Radiologist",
    role: "Radiologist",
    photo: germanAsset("team/dr-putri.jpg"),
    group: "clinical",
  },
  {
    id: "amir",
    name: "Amir",
    title: "Dental Technician (Laboratory)",
    role: "Dental Technician (Laboratory)",
    photo: germanAsset("team/amir.jpg"),
    group: "clinical",
  },
  {
    id: "dr-felix",
    name: "Dr. Felix",
    title: "Orthodontist",
    role: "Orthodontist",
    photo: germanAsset("team/dr-felix.jpg"),
    group: "clinical",
  },
  {
    id: "hendra",
    name: "Hendra",
    title: "Operational Manager",
    role: "Operational Manager",
    photo: germanAsset("team/hendra.jpg"),
    group: "operations",
  },
  {
    id: "kaz",
    name: "Kaz",
    title: "Receptionist",
    role: "Receptionist",
    photo: germanAsset("team/kaz.jpg"),
    group: "operations",
  },
  {
    id: "farrell",
    name: "Farrell",
    title: "Receptionist",
    role: "Receptionist",
    photo: germanAsset("team/farrell.jpg"),
    group: "operations",
  },
  {
    id: "ayu",
    name: "Ayu",
    title: "Receptionist",
    role: "Receptionist",
    photo: germanAsset("team/ayu.jpg"),
    group: "operations",
  },
  {
    id: "icha",
    name: "Icha",
    title: "Dental Assistant",
    role: "Dental Assistant",
    photo: germanAsset("team/icha.jpg"),
    group: "assistants",
  },
  {
    id: "uma",
    name: "Uma",
    title: "Dental Assistant",
    role: "Dental Assistant",
    photo: germanAsset("team/uma.jpg"),
    group: "assistants",
  },
  {
    id: "iza",
    name: "Iza",
    title: "Dental Assistant",
    role: "Dental Assistant",
    photo: germanAsset("team/iza.jpg"),
    group: "assistants",
  },
  {
    id: "dilla",
    name: "Dilla",
    title: "Dental Assistant",
    role: "Dental Assistant",
    photo: germanAsset("team/dilla.jpg"),
    group: "assistants",
  },
  {
    id: "deo",
    name: "Deo",
    title: "Derma Assistant",
    role: "Derma Assistant",
    photo: germanAsset("team/deo.jpg"),
    group: "assistants",
  },
  {
    id: "eka",
    name: "Eka",
    title: "Derma Assistant",
    role: "Derma Assistant",
    photo: germanAsset("team/eka.jpg"),
    group: "assistants",
  },
  {
    id: "security",
    name: "Ketut, Panggah & Dwik",
    title: "Security Team",
    role: "Security Team",
    photo: germanAsset("team/securities.jpg"),
    group: "security",
  },
];

/** Dr. Itha is present in source HTML but commented out on the live site — not shown. */
