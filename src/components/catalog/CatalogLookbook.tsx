import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { CatalogFilmJump } from "@/components/catalog/CatalogFilmJump";
import { Button } from "@/components/ui/Button";
import { catalogStyles } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function CatalogLookbook() {
  return (
    <div className="bg-background pt-20">
      <header className="border-b border-border px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              Vol. 01 · {String(catalogStyles.length).padStart(2, "0")} Stile
            </p>
            <h1 className="mt-6 text-[clamp(3rem,9vw,7.5rem)] font-bold uppercase leading-[0.88] tracking-tight">
              Katalog
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
              Auftritte zum Durchblättern. Eine Branche, eine Demo. Kein
              Portfolio — ein Lookbook.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ol className="border-t border-border">
              {catalogStyles.map((style, i) => (
                <li key={style.slug} className="border-b border-border">
                  <a
                    href={`#${style.slug}`}
                    className="group flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="font-mono text-[10px] tabular-nums tracking-[0.18em] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm font-medium tracking-tight transition-colors group-hover:text-accent">
                      {style.industry}
                    </span>
                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-muted/70 sm:block">
                      {style.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </header>

      <CatalogFilmJump />

      <div>
        {catalogStyles.map((style, i) => {
          const reverse = i % 2 === 1;
          return (
            <article
              key={style.slug}
              id={style.slug}
              className="scroll-mt-36 border-b border-border sm:scroll-mt-40"
            >
              <div className="mx-auto grid max-w-[92rem] lg:grid-cols-12 lg:items-stretch">
                <Link
                  href={style.href}
                  className={cn(
                    "group relative block bg-black lg:col-span-7",
                    reverse && "lg:order-2"
                  )}
                >
                  <span className="relative block aspect-[16/10] w-full">
                    <Image
                      src={style.image}
                      alt={`${style.industry} — ${style.title}`}
                      fill
                      quality={92}
                      priority={i === 0}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-contain transition duration-500 group-hover:opacity-95"
                    />
                  </span>
                  <span className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                    Living Demo
                  </span>
                </Link>

                <div
                  className={cn(
                    "flex flex-col justify-between px-6 py-12 sm:px-10 lg:col-span-5 lg:px-14 lg:py-16",
                    reverse && "lg:order-1"
                  )}
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
                      {style.industry}
                    </p>
                    <p className="mt-8 font-mono text-[clamp(3.5rem,8vw,6.5rem)] font-bold leading-none tracking-tighter text-foreground/8">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                      {style.title}
                    </h2>
                    <p className="mt-4 max-w-sm text-lg leading-relaxed text-muted">
                      {style.line}
                    </p>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      Living Demo · frei klickbar
                    </p>
                    <Link
                      href={style.href}
                      className="mt-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
                    >
                      <span className="h-px w-10 bg-accent" aria-hidden />
                      Demo öffnen →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-border pt-16 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Maßarbeit
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">
              Deine Branche ist nicht dabei.
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Dann wird sie der nächste Eintrag. Festpreis nach Briefing — du
              weißt vorher, was du zahlst.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Button href="/briefing" size="lg">
              Briefing starten →
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
