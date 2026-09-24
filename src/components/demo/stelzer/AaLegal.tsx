import Link from "next/link";
import { AaAmbient } from "@/components/demo/stelzer/AaAmbient";
import { AaFooter } from "@/components/demo/stelzer/AaFooter";
import { AA_LEGAL_NOTE, type AaLegalBlock } from "@/components/demo/stelzer/aa-legal";

export function AaLegal({ title, blocks }: { title: string; blocks: readonly AaLegalBlock[] }) {
  return (
    <main className="relative z-10">
      <AaAmbient />
      <article className="relative z-10 mx-auto max-w-[720px] px-5 pb-24 pt-32 text-[var(--aa-ink)] sm:px-8">
        <Link href="/demo/stelzer-hesselmann" className="text-[15px] underline underline-offset-4">
          Zurück zur Startseite
        </Link>
        <h1 className="mt-8 font-aa-display text-[clamp(2.8rem,6vw,4.4rem)] leading-none tracking-[-0.03em]">
          {title}
        </h1>
        <div className="mt-12 space-y-10">
          {blocks.map((block) => (
            <section key={block.heading}>
              <h2 className="text-[13px] font-medium uppercase tracking-[0.16em] opacity-60">{block.heading}</h2>
              <div className="mt-3 space-y-3 text-[17px] leading-relaxed">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-16 border-t border-[var(--aa-ink)]/15 pt-6 text-[15px] leading-relaxed opacity-70">
          {AA_LEGAL_NOTE}
        </p>
      </article>
      <AaFooter />
    </main>
  );
}
