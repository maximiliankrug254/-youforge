import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { catalogStyles } from "@/lib/catalog";

const TEASER_COUNT = 4;

export function CatalogTeaser() {
  const styles = catalogStyles.slice(0, TEASER_COUNT);

  return (
    <section className="border-t border-border px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionLabel number="07" title="KATALOG" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Website-Stile zum Durchblättern.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Ein Lookbook — keine Portfolio-Cases. Eine Branche, eine Demo.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-12">
          <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:pb-0">
            {styles.map((style) => (
              <li
                key={style.slug}
                className="w-[78vw] shrink-0 snap-start sm:w-[52vw] lg:w-auto lg:shrink"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={style.image}
                    alt={`${style.industry} — ${style.title}`}
                    fill
                    quality={88}
                    sizes="(max-width: 1024px) 78vw, 22vw"
                    className="object-contain"
                  />
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {style.industry}
                </p>
                <p className="mt-1 text-sm font-medium tracking-tight">
                  {style.title}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.16} className="mt-10">
          <Button href="/katalog" size="lg">
            Katalog öffnen →
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
