import { SYN, SYN_IMG } from "@/components/demo/syn/syn-config";

export type SynPiece = {
  slug: string;
  name: string;
  price: number;
  sizes: string[];
  bestseller?: boolean;
  image: string;
  hover?: string;
  tag: string;
};

export const SYN_MENU = [
  { href: `${SYN.base}/collections`, n: "01", label: "Collections" },
  { href: `${SYN.base}#campaign`, n: "02", label: "Campaign" },
  { href: `${SYN.base}/who-we-are`, n: "03", label: "Who we are" },
  { href: `${SYN.base}/contact`, n: "04", label: "Contact" },
  { href: `${SYN.base}/shop`, n: "05", label: "Shop all" },
  { href: `${SYN.base}/shop?sale=1`, n: "06", label: "Sale" },
] as const;

export const SYN_CATS = [
  { slug: "new-drop", label: "NEW DROP", count: 7, image: SYN_IMG.spark },
  { slug: "sale", label: "SALE", count: 4, image: SYN_IMG.silk },
  { slug: "accessories", label: "ACCESSORIES", count: 9, image: SYN_IMG.velvet },
  { slug: "bodies", label: "Bodys", count: 5, image: SYN_IMG.knit },
  { slug: "bottoms", label: "BOTTOMS", count: 5, image: SYN_IMG.pants },
  { slug: "coats", label: "Coats", count: 3, image: SYN_IMG.furHang },
  { slug: "corsets", label: "corsets", count: 7, image: SYN_IMG.velvet },
  { slug: "dresses", label: "dresses", count: 25, image: SYN_IMG.sunna },
  { slug: "jackets", label: "JACKETS", count: 4, image: SYN_IMG.blazer },
  { slug: "skirts", label: "Skirts", count: 6, image: SYN_IMG.silk },
  { slug: "special", label: "SPECIAL EDITION", count: 6, image: SYN_IMG.furNight },
  { slug: "tops", label: "Tops", count: 8, image: SYN_IMG.knitBody },
] as const;

export const SYN_HERO_CARDS = [
  { title: "NEW DROP", image: SYN_IMG.spark, hover: SYN_IMG.furNight },
  { title: "QUARPA CAPSULE", image: SYN_IMG.velvet, hover: SYN_IMG.walk },
  { title: "LIFE FORCE", image: SYN_IMG.knitBody, hover: SYN_IMG.knit },
  { title: "BERLIN VIBES", image: SYN_IMG.walk, hover: SYN_IMG.street },
  { title: "BEAUTY WILL SAVE THE WORLD", image: SYN_IMG.furNight, hover: SYN_IMG.sunna },
] as const;

export const SYN_PIECES: SynPiece[] = [
  {
    slug: "sunna-dress",
    name: "SUNNA DRESS",
    price: 538.99,
    sizes: ["S", "M", "L"],
    bestseller: true,
    image: SYN_IMG.sunna,
    hover: SYN_IMG.knitBody,
    tag: "(life force)",
  },
  {
    slug: "velvet-witch",
    name: "Velvet Witch Corset",
    price: 398.99,
    sizes: ["One Size"],
    bestseller: true,
    image: SYN_IMG.velvet,
    hover: SYN_IMG.spark,
    tag: "(Berlin)",
  },
  {
    slug: "velvet-bra-top",
    name: "Velvet Bra Top",
    price: 74.99,
    sizes: ["S", "M"],
    image: SYN_IMG.velvet,
    hover: SYN_IMG.blazer,
    tag: "(Berlin)",
  },
  {
    slug: "mesh-dress",
    name: "Mesh Dress",
    price: 189.99,
    sizes: ["S", "M", "L"],
    bestseller: true,
    image: SYN_IMG.spark,
    hover: SYN_IMG.silk,
    tag: "(Berlin)",
  },
  {
    slug: "spark-mini",
    name: "Sparkling Mini Dress",
    price: 179.99,
    sizes: ["S", "M"],
    bestseller: true,
    image: SYN_IMG.spark,
    hover: SYN_IMG.lips,
    tag: "(Berlin)",
  },
  {
    slug: "faux-fur-top",
    name: "Faux Fur Top",
    price: 223.99,
    sizes: ["One Size"],
    bestseller: true,
    image: SYN_IMG.furHang,
    hover: SYN_IMG.furNight,
    tag: "(Berlin)",
  },
  {
    slug: "knit-dress",
    name: "KNIT DRESS",
    price: 249.99,
    sizes: ["S", "M"],
    bestseller: true,
    image: SYN_IMG.knit,
    hover: SYN_IMG.knitBody,
    tag: "(new drop)",
  },
  {
    slug: "architecture-trousers",
    name: "Architecture Trousers",
    price: 410.4,
    sizes: ["XS", "S", "M", "L"],
    bestseller: true,
    image: SYN_IMG.pants,
    hover: SYN_IMG.blazer,
    tag: "(life force)",
  },
  {
    slug: "yellow-bodysuit",
    name: "Slimming bodysuit yellow",
    price: 421.2,
    sizes: ["S", "M"],
    bestseller: true,
    image: SYN_IMG.sunna,
    hover: SYN_IMG.silk,
    tag: "(Berlin)",
  },
  {
    slug: "faux-fur-coat",
    name: "Faux Fur Coat",
    price: 899,
    sizes: ["One Size"],
    bestseller: true,
    image: SYN_IMG.furNight,
    hover: SYN_IMG.furHang,
    tag: "(new drop)",
  },
  {
    slug: "lurex-mini",
    name: "LUREX Mini Dress",
    price: 172.8,
    sizes: ["S", "M"],
    bestseller: true,
    image: SYN_IMG.spark,
    hover: SYN_IMG.walk,
    tag: "(Berlin)",
  },
  {
    slug: "silk-oversize",
    name: "Oversize SILK Dress",
    price: 275.4,
    sizes: ["S", "M", "L"],
    bestseller: true,
    image: SYN_IMG.silk,
    hover: SYN_IMG.sunna,
    tag: "(Berlin)",
  },
];

export const SYN_TAGS = [
  "(life force)",
  "(Berlin)",
  "(Berlin)",
  "(Berlin)",
  "(new drop)",
  "(life force)",
  "(Berlin)",
  "(SS_“25)",
  "(UA)",
];

export function getSynPiece(slug: string) {
  return SYN_PIECES.find((p) => p.slug === slug);
}

export function formatEur(n: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(n);
}
