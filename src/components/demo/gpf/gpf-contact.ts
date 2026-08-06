import { GPF_DEMO } from "@/components/demo/gpf/gpf-config";

const { brand, contact, business } = GPF_DEMO;

export const GPF_CONTACT = {
  brand: brand.full,
  short: brand.short,
  legalName: brand.legalName,
  owner: contact.ownerLabel,
  tagline: brand.tagline,
  phoneTel: contact.phoneTel,
  phoneDisplay: contact.phoneDisplay,
  email: contact.email,
  addressLine1: contact.addressLine1,
  addressLine2: contact.addressLine2,
  address: `${contact.addressLine1}, ${contact.addressLine2}`,
  region: business.regionLabel,
  profession: brand.profession,
  since: business.since,
  radiusKm: business.radiusKm,
  travelRate: business.travelRate,
  travelFrom: business.travelFrom,
  hours: contact.hours,
  navSubtitle: brand.navSubtitle,
  whatsapp: `https://wa.me/${contact.phoneTel.replace(/\D/g, "")}?text=${contact.whatsappText}`,
} as const;
