import Link from "next/link";
import {
  RK_LEGAL_AS_OF,
  RK_LEGAL_DOCS,
  RK_LEGAL_LINKS,
  type RkLegalDoc,
} from "@/components/demo/rk/rk-legal";
import { RkFooterInner } from "@/components/demo/rk/RkContact";
import { RK_BASE } from "@/components/demo/rk/rk-config";

export function RkLegalPage({ slug }: { slug: RkLegalDoc["slug"] }) {
  const doc = RK_LEGAL_DOCS[slug];

  return (
    <main className="relative">
      <article className="mx-auto max-w-3xl px-6 pb-20 pt-28 lg:px-8 lg:pt-32">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--rk-purple)]">
          Rechtliches · Stand {RK_LEGAL_AS_OF}
        </p>
        <h1 className="mt-4 font-rk-display text-4xl uppercase tracking-wide text-[var(--rk-ink)] sm:text-5xl">
          {doc.title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-[var(--rk-muted)]">
          {doc.lead}
        </p>

        <nav
          aria-label="Rechtliche Seiten"
          className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-b border-[var(--rk-ink)]/10 pb-6 text-sm"
        >
          {RK_LEGAL_LINKS.map((link) => {
            const active = link.href === `${RK_BASE}/${slug}`;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "font-semibold text-[var(--rk-purple)]"
                    : "text-[var(--rk-muted)] transition-colors hover:text-[var(--rk-purple)]"
                }
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-12 space-y-10">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-rk-display text-xl uppercase tracking-wide text-[var(--rk-ink)] sm:text-2xl">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[var(--rk-muted)] sm:text-[15px]"
                >
                  {p}
                </p>
              ))}
              {section.list ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[var(--rk-muted)] sm:text-[15px]">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.afterList?.map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[var(--rk-muted)] sm:text-[15px]"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-14 text-xs leading-relaxed text-[var(--rk-muted)]/80">
          Living Demo von{" "}
          <a
            href="https://youforge.de"
            className="underline-offset-2 hover:underline"
          >
            YouForge
          </a>
          . Kein Ersatz der Live-Website.
        </p>
      </article>

      <section className="bg-[var(--rk-purple-ink)] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <RkFooterInner className="mt-0 border-t-0 pt-0" />
        </div>
      </section>
    </main>
  );
}
