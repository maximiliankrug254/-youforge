"use client";

import Image from "next/image";
import { RkPageHero } from "@/components/demo/rk/RkPageHero";
import { RkReveal } from "@/components/demo/rk/RkReveal";
import { RkContact } from "@/components/demo/rk/RkContact";
import { RK_PRODUCT_PAGES } from "@/components/demo/rk/rk-content";

export function RkProduktPage({ slug }: { slug: string }) {
  const page = RK_PRODUCT_PAGES[slug];
  if (!page) return null;

  return (
    <main className="relative pb-20 lg:pb-0">
      <RkPageHero
        kicker={page.kicker}
        title={page.title}
        text={page.lead}
        image={page.image}
        alt={page.alt}
      />

      <section className="bg-[var(--rk-paper)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-12">
          <RkReveal className="space-y-5 text-[1.08rem] leading-[1.8] text-[var(--rk-muted)] lg:col-span-6">
            {page.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </RkReveal>
          <RkReveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
              Leistung
            </p>
            <ul className="mt-6 space-y-0 border-t border-black/10">
              {page.points.map((point) => (
                <li
                  key={point}
                  className="border-b border-black/10 py-4 text-[1.02rem] leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
          </RkReveal>
        </div>
      </section>

      {page.sections.length ? (
        <section className="bg-[var(--rk-paper-deep)] px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[1480px] gap-10 sm:grid-cols-2">
            {page.sections.map((section, i) => (
              <RkReveal key={section.title} delay={0.05 * i} className="border-t border-black/10 pt-6">
                <h2 className="font-rk-display text-[1.85rem] uppercase tracking-[0.01em] text-[var(--rk-purple)]">
                  {section.title}
                </h2>
                <p className="mt-4 text-[1.05rem] leading-[1.75] text-[var(--rk-muted)]">
                  {section.text}
                </p>
              </RkReveal>
            ))}
          </div>
        </section>
      ) : null}

      <section className="bg-[var(--rk-paper)] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1480px]">
          <RkReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[var(--rk-purple)]">
              Impressionen
            </p>
            <h2 className="font-rk-display mt-4 text-[clamp(2rem,4vw,3.2rem)] uppercase">
              Stoffe, Flächen, Details.
            </h2>
          </RkReveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {page.gallery.map((item, i) => (
              <RkReveal
                key={item.caption + i}
                delay={0.04 * i}
                className={i === 0 ? "col-span-2 lg:col-span-2" : ""}
              >
                <figure className="relative overflow-hidden">
                  <div
                    className={`relative ${i === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes={
                        i === 0
                          ? "(max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 1024px) 50vw, 33vw"
                      }
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--rk-purple-ink)]/75 to-transparent p-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                    {item.caption}
                  </figcaption>
                </figure>
              </RkReveal>
            ))}
          </div>
        </div>
      </section>

      <RkContact />
    </main>
  );
}
