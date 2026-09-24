import type { Metadata } from "next";
import { AaLegal } from "@/components/demo/stelzer/AaLegal";
import { AA_COOKIES } from "@/components/demo/stelzer/aa-legal";

export const metadata: Metadata = {
  title: "Cookies | Stelzer & Heßelmann",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return <AaLegal title="Cookies" blocks={AA_COOKIES} />;
}
