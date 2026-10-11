import type { Metadata } from "next";
import { AaLegal } from "@/components/demo/bas/AaLegal";
import { AA_COOKIES } from "@/components/demo/bas/aa-legal";

export const metadata: Metadata = {
  title: "Cookies | Braun Automobil Service",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return <AaLegal title="Cookies" blocks={AA_COOKIES} />;
}
