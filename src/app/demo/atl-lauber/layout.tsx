import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nicht verfügbar",
  robots: { index: false, follow: false },
};

export default function AtlLauberOfflineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
