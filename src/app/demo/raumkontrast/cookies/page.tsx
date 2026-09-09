import type { Metadata } from "next";
import { RkLegalPage } from "@/components/demo/rk/RkLegalPage";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Cookie-Hinweis der Living Demo Raumkontrast Baumann — nur technisch notwendige Speicherung.",
};

export default function CookiesRoute() {
  return <RkLegalPage slug="cookies" />;
}
