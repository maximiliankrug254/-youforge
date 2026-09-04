import { notFound } from "next/navigation";
import { getSynPiece, SYN_PIECES } from "@/components/demo/syn/syn-content";
import { SynPdp } from "@/components/demo/syn/SynPdp";

export function generateStaticParams() {
  return SYN_PIECES.map((p) => ({ slug: p.slug }));
}

export default async function Pdp({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getSynPiece(slug)) notFound();
  return <SynPdp slug={slug} />;
}
