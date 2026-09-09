import { RK_DEMO } from "@/components/demo/rk/rk-config";

const { brand, contact, business } = RK_DEMO;

export const RK_CONTACT = {
  brand: brand.full,
  short: brand.short,
  legalName: brand.legalName,
  owner: brand.owner,
  tagline: brand.tagline,
  phoneTel: contact.phoneTel,
  phoneDisplay: contact.phoneDisplay,
  email: contact.email,
  addressLine1: contact.addressLine1,
  addressLine2: contact.addressLine2,
  address: `${contact.addressLine1}, ${contact.addressLine2}`,
  hours: contact.hours,
  region: business.regionLabel,
  profession: brand.profession,
  since: business.since,
  trailerSqm: business.trailerSqm,
  navSubtitle: brand.navSubtitle,
  facebook: contact.facebook,
  instagram: contact.instagram,
  whatsapp: `https://wa.me/${contact.phoneTel.replace(/\D/g, "")}?text=${contact.whatsappText}`,
} as const;
