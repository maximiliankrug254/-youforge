import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirect — Fliesen Demo",
  robots: { index: false, follow: false },
};

export default function TiwoFliesenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
