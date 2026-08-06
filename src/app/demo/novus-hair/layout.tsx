import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weiterleitung…",
  robots: { index: false, follow: false },
};

export default function NovusHairRedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
