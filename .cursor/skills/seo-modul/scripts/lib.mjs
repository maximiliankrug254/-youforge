import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const SKILL_DIR = join(dirname(fileURLToPath(import.meta.url)), "..");
export const REPO_ROOT = join(SKILL_DIR, "..", "..", "..");
export const OUT_DIR = join(REPO_ROOT, ".seo");
export const REPORT_DIR = join(OUT_DIR, "berichte");

export const DEFAULT_BASE = process.env.SEO_BASE_URL?.replace(/\/$/, "") || "http://localhost:3000";
export const MOBILE = { width: 390, height: 844 };
export const VERSION = "1.0";

export const STUFEN = {
  kritisch: { label: "Kritisch", gewicht: 3 },
  wichtig: { label: "Wichtig", gewicht: 2 },
  tipp: { label: "Tipp", gewicht: 1 },
};

export const KATEGORIEN = {
  technik: "Technik",
  inhalte: "Inhalte",
  lokal: "Lokale Auffindbarkeit",
};

export const LOCAL_BUSINESS_TYPES = [
  "LocalBusiness",
  "HomeAndConstructionBusiness",
  "GeneralContractor",
  "HousePainter",
  "Plumber",
  "Electrician",
  "RoofingContractor",
  "Locksmith",
  "HVACBusiness",
  "MovingCompany",
  "ProfessionalService",
  "AutoRepair",
  "Store",
  "HomeGoodsStore",
  "FurnitureStore",
  "HardwareStore",
  "CleaningService",
];

export function ensureDirs() {
  mkdirSync(REPORT_DIR, { recursive: true });
}

export function stamp() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

export function toUrl(value, base) {
  if (/^https?:\/\//i.test(value)) return value;
  return `${base}${value.startsWith("/") ? "" : "/"}${value}`;
}

export function normalizeUrl(value) {
  const url = new URL(value);
  url.hash = "";
  if (url.pathname !== "/" && url.pathname.endsWith("/")) url.pathname = url.pathname.slice(0, -1);
  return url.href;
}

export function fold(value) {
  return (value || "")
    .normalize("NFC")
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss");
}

export function contains(haystack, needle) {
  if (!needle) return false;
  return fold(haystack).includes(fold(needle));
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function flattenJsonLd(blocks) {
  const nodes = [];
  const visit = (node) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) return node.forEach(visit);
    if (node["@graph"]) visit(node["@graph"]);
    if (node["@type"]) nodes.push(node);
  };
  blocks.forEach(visit);
  return nodes;
}

export function typesOf(node) {
  const t = node["@type"];
  return Array.isArray(t) ? t : [t];
}
