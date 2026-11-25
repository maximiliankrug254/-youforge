"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  KEILS,
  KEILS_GALLERY,
  KEILS_SERVICES,
} from "@/components/demo/keils/keils-content";
import { useGpfMediaQuery } from "@/components/demo/gpf/useGpfMediaQuery";

const EASE = [0.16, 1, 0.3, 1] as const;


function LenisGate({ children }: { children: React.ReactNode }) {
  const fine = useGpfMediaQuery("(pointer: fine)");
  const reduce = useGpfMediaQuery("(prefers-reduced-motion: reduce)");
  if (!fine || reduce) return <>{children}</>;
  return (
    <ReactLenis root options={{ lerp: 0.07, smoothWheel: true, wheelMultiplier: 0.85 }}>
      {children}
    </ReactLenis>
  );
}

function ImageReveal({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.3"],
  });
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(16% 20% 16% 20%)", "inset(0% 0% 0% 0%)"],
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1.14, 1]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-[var(--keils-ink-2)] ${className ?? ""}`}>
      <motion.div className="absolute inset-0" style={reduce ? undefined : { clipPath: clip }}>
        <motion.div className="absolute inset-0" style={reduce ? undefined : { scale }}>
          <Image src={src} alt={alt} fill quality={92} sizes="(max-width:1024px) 100vw, 55vw" className="object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}

function ServiceCinema() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = KEILS_SERVICES[active];

  return (
    <section id="leistungen" className="bg-[var(--keils-ink)] text-[var(--keils-porcelain)]">
      <div className="mx-auto max-w-[1600px] px-5 pt-24 sm:px-8 lg:px-12 lg:pt-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[var(--keils-water)]">
          Leistungsspektrum
        </p>
        <h2 className="mt-5 max-w-[14ch] text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.92] tracking-[-0.045em]">
          Diese Arbeiten übernehme ich.
        </h2>
      </div>

      <div className="mt-14 hidden lg:grid lg:min-h-[100svh] lg:grid-cols-[minmax(280px,0.38fr)_minmax(0,0.62fr)]">
        <ol className="border-t border-[var(--keils-line)]">
          {KEILS_SERVICES.map((service, index) => {
            const isActive = index === active;
            return (
              <li key={service.name} className="border-b border-[var(--keils-line)]">
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`keils-row flex w-full items-baseline gap-5 px-8 py-6 text-left transition-colors ${
                    isActive ? "bg-white/[0.04] text-[var(--keils-water)]" : "text-[var(--keils-porcelain)]"
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="w-8 text-[11px] tabular-nums tracking-[0.22em] text-[var(--keils-water)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-keils-display text-[clamp(1.6rem,2.4vw,2.5rem)] leading-[0.95] tracking-[-0.04em]">
                    {service.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="relative min-h-[100svh] border-l border-t border-[var(--keils-line)]">
          <div className="sticky top-0 h-[100svh] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.photo.src}
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <Image
                  src={current.photo.src}
                  alt={current.photo.alt}
                  fill
                  quality={92}
                  sizes="62vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-10 xl:p-14">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-white/50">
                    {String(active + 1).padStart(2, "0")} — {String(KEILS_SERVICES.length).padStart(2, "0")}
                  </p>
                  <p className="mt-4 font-keils-display text-[clamp(2.4rem,4vw,4rem)] tracking-[-0.04em] text-white">
                    {current.name}
                  </p>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75 xl:text-lg">
                    {current.line}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-4 px-5 pb-20 sm:px-8 lg:hidden">
        {KEILS_SERVICES.map((service, index) => (
          <article key={service.name} className="overflow-hidden border border-[var(--keils-line)]">
            <div className="relative aspect-[5/4]">
              <Image
                src={service.photo.src}
                alt={service.photo.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] tracking-[0.28em] text-[var(--keils-water)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-keils-display text-[1.85rem] leading-none tracking-[-0.03em]">
                  {service.name}
                </h3>
              </div>
            </div>
            <p className="bg-[var(--keils-ink-2)] px-5 py-4 text-sm leading-relaxed text-[var(--keils-mist)]">
              {service.line}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ReferenceScroll() {
  return (
    <section id="referenzen" className="overflow-hidden bg-[var(--keils-porcelain)] text-[var(--keils-ink)]">
      <div className="mx-auto max-w-[1600px] px-5 pb-10 pt-24 sm:px-8 lg:px-12 lg:pb-12 lg:pt-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[var(--keils-water)]">
          Referenzen
        </p>
        <h2 className="mt-4 max-w-[14ch] text-[clamp(2.4rem,5vw,4rem)] leading-[0.95] tracking-[-0.04em]">
          Ausgeführte Arbeiten.
        </h2>
      </div>

      <div className="keils-ref-mask pb-20 lg:pb-28">
        <div className="keils-ref-track flex w-max">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5"
              aria-hidden={copy > 0}
            >
              {KEILS_GALLERY.map((shot, index) => (
                <figure
                  key={`${copy}-${shot.src}`}
                  className="w-[68vw] shrink-0 sm:w-[38vw] lg:w-[26vw] xl:w-[20vw]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--keils-ink)]/5">
                    <Image
                      src={shot.src}
                      alt={copy === 0 ? shot.alt : ""}
                      fill
                      sizes="(min-width:1280px) 20vw, (min-width:1024px) 26vw, (min-width:640px) 38vw, 68vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-3 text-[12px] text-[var(--keils-ink)]/55">
                    <span className="tabular-nums tracking-[0.2em] text-[var(--keils-water)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate text-right">{shot.alt}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function KeilsPage() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <LenisGate>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[var(--keils-water)]"
        style={{ scaleX: barScale }}
        aria-hidden
      />

      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-[var(--keils-porcelain)] focus:px-3 focus:py-2 focus:text-[var(--keils-ink)]"
      >
        Zum Inhalt
      </a>

      <header
        className={`keils-bar fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-[var(--keils-ink)]/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#anfang" className="font-keils-display text-[1.7rem] leading-none tracking-[-0.04em]">
            Keils
            <span className="sr-only"> {KEILS.name}</span>
          </a>
          <nav
            aria-label="Abschnitte"
            className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-[0.28em] md:flex"
          >
            <a href="#leistungen" className="hover:text-[var(--keils-water)]">
              Leistungen
            </a>
            <a href="#referenzen" className="hover:text-[var(--keils-water)]">
              Referenzen
            </a>
            <a href="#kontakt" className="hover:text-[var(--keils-water)]">
              Kontakt
            </a>
          </nav>
          <a href={`tel:${KEILS.phoneTel}`} className="text-sm font-medium hover:text-[var(--keils-water)]">
            {KEILS.phoneDisplay}
          </a>
        </div>
      </header>

      <div id="inhalt">
        <section
          id="anfang"
          className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[var(--keils-ink)]"
        >
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { scale: 1.1 }}
              animate={reduce ? undefined : { scale: 1.02 }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            >
              <Image
                src="/demo/keils-baeder/svc-bad.jpg"
                alt="Modernes Bad mit freistehender Badewanne, Glasdusche und Doppelwaschtisch"
                fill
                priority
                quality={92}
                sizes="100vw"
                className="object-cover object-[center_30%]"
              />
            </motion.div>
            <div
              className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,16,24,0.97)_0%,rgba(8,16,24,0.9)_36%,rgba(8,16,24,0.35)_64%,rgba(8,16,24,0.55)_100%)]"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--keils-ink)] via-transparent to-black/30"
              aria-hidden
            />
          </div>

          <div className="relative z-20 flex min-h-[100svh] flex-1 flex-col justify-between px-5 pb-12 pt-28 sm:px-8 lg:px-12 lg:pb-16 lg:pt-32">
            <div>
              <p className="font-keils-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-none tracking-[-0.03em]">
                {KEILS.name}
              </p>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.36em] text-[var(--keils-water)]">
                Meister seit {KEILS.since} · {KEILS.city}
              </p>
            </div>

            <div className="max-w-[min(100%,36rem)]">
              <h1 className="[text-shadow:0_4px_40px_rgba(0,0,0,0.55)]">
                <span className="block text-[clamp(1.35rem,2.5vw,1.85rem)] font-medium text-[var(--keils-mist)]">
                  Ich bin
                </span>
                <span className="mt-2 block font-keils-display text-[clamp(5rem,15vw,10rem)] leading-[0.9] tracking-[-0.055em] text-[var(--keils-porcelain)]">
                  {KEILS.firstName}.
                </span>
              </h1>
              <p className="mt-8 max-w-[20ch] text-[clamp(1.2rem,2.3vw,1.85rem)] leading-[1.3] text-[var(--keils-porcelain)]/90">
                {KEILS.slogan}.
              </p>
            </div>

            <div className="flex flex-col gap-6 border-t border-white/20 pt-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[30ch] text-sm text-[var(--keils-mist)] sm:text-base">
                Ein-Mann-Betrieb für Heizung, Sanitär und BARRISOL Spanndecken.
              </p>
              <a href={`tel:${KEILS.phoneTel}`} className="group inline-flex flex-col sm:items-end">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--keils-muted)] group-hover:text-white">
                  Anrufen
                </span>
                <span className="mt-2 font-keils-display text-[clamp(2.2rem,5vw,3.6rem)] leading-none tracking-[-0.03em] text-[var(--keils-water)] group-hover:text-white">
                  {KEILS.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </section>

        <div
          className="relative z-10 isolate overflow-hidden border-y border-[var(--keils-line)] bg-[var(--keils-ink)] py-5 sm:py-6"
          aria-hidden
        >
          <div className="keils-marquee flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center pr-8">
                {KEILS_SERVICES.map((service) => (
                  <span
                    key={`${copy}-${service.name}`}
                    className="inline-flex items-center gap-6 px-3 font-keils-display text-[clamp(1.5rem,3.4vw,2.5rem)] leading-none tracking-[-0.03em] text-[var(--keils-porcelain)]/35"
                  >
                    {service.name}
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--keils-water)]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="relative z-0 bg-[var(--keils-porcelain)] text-[var(--keils-ink)]">
          <div className="mx-auto grid max-w-[1600px] lg:min-h-[100svh] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="flex flex-col justify-center px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
              <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[var(--keils-water)]">
                Seit {KEILS.since}
              </p>
              <h2 className="mt-6 max-w-[12ch] text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.92] tracking-[-0.045em]">
                Meister des Handwerks seit {KEILS.since}.
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--keils-ink)]/70 sm:text-xl">
                Ich führe Heizungs- und Sanitärinstallationen sowie Spenglerarbeiten fach- und
                termingerecht aus. Dazu kommt die Qualifikation als Fachverleger für Spanndecken,
                System BARRISOL — und eine Beratung, bei der wir gemeinsam die beste und
                wirtschaftlichste Lösung finden.
              </p>
            </div>
            <ImageReveal
              src="/demo/keils-baeder/svc-spanndecke.jpg"
              alt="Bad mit glänzender Lack-Spanndecke und freistehender Badewanne"
              className="min-h-[70vw] w-full sm:min-h-[55vw] lg:min-h-full"
            />
          </div>
        </section>

        <ServiceCinema />

        <ReferenceScroll />

        <section id="kontakt" className="bg-[var(--keils-ink)] text-[var(--keils-porcelain)]">
          <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[var(--keils-water)]">
              Kontakt
            </p>
            <h2 className="mt-5 max-w-[10ch] text-[clamp(3.2rem,8vw,7rem)] leading-[0.88] tracking-[-0.05em]">
              So erreichen Sie mich.
            </h2>

            <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
              <div className="flex flex-col justify-between gap-12 border-t border-[var(--keils-line)] pt-10">
                <div>
                  <a
                    href={`tel:${KEILS.phoneTel}`}
                    className="block font-keils-display text-[clamp(2.8rem,7vw,6rem)] leading-none tracking-[-0.045em] text-[var(--keils-water)] transition-colors hover:text-white"
                  >
                    {KEILS.phoneDisplay}
                  </a>
                  <p className="mt-6 text-xl text-[var(--keils-mist)]">
                    Mobil{" "}
                    <a href={`tel:${KEILS.mobileTel}`} className="underline underline-offset-4 hover:text-white">
                      {KEILS.mobileDisplay}
                    </a>
                  </p>
                </div>
                <address className="grid gap-8 not-italic text-base leading-relaxed text-[var(--keils-mist)] sm:grid-cols-2 sm:text-lg">
                  <p>
                    {KEILS.name}
                    <br />
                    {KEILS.owner}
                    <br />
                    {KEILS.street}
                    <br />
                    {KEILS.postalCode} {KEILS.city}
                  </p>
                  <p>
                    Fax {KEILS.faxDisplay}
                    <br />
                    <a href={`mailto:${KEILS.email}`} className="underline underline-offset-4 hover:text-white">
                      {KEILS.email}
                    </a>
                    <br />
                    <a
                      href={KEILS.mapsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-white"
                    >
                      Route planen
                    </a>
                  </p>
                </address>
              </div>

              <div className="min-h-[320px] overflow-hidden border border-[var(--keils-line)] lg:min-h-[480px]">
                <iframe
                  title={`Karte: ${KEILS.street}, ${KEILS.city}`}
                  src={KEILS.mapEmbedSrc}
                  className="h-full min-h-[320px] w-full border-0 grayscale contrast-125 lg:min-h-[480px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="keils-foot border-t border-[var(--keils-line)] bg-[var(--keils-ink-2)] px-5 py-12 text-sm leading-relaxed text-[var(--keils-muted)] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1600px] gap-8 sm:grid-cols-2">
          <div>
            <p className="font-medium text-[var(--keils-porcelain)]">Impressum</p>
            <p className="mt-3">
              {KEILS.name}
              <br />
              {KEILS.owner}, Inhaber
              <br />
              {KEILS.street}
              <br />
              {KEILS.postalCode} {KEILS.city}
              <br />
              Telefon {KEILS.phoneDisplay}
              <br />
              Mobil {KEILS.mobileDisplay}
              <br />
              Telefax {KEILS.faxDisplay}
              <br />
              E-Mail {KEILS.email}
            </p>
            <p className="mt-3">Ein-Mann-Betrieb. Meister seit {KEILS.since}.</p>
          </div>
          <p className="sm:text-right">
            Diese Seite ist eine Demo von{" "}
            <a className="text-[var(--keils-porcelain)] underline underline-offset-4" href="https://you-forge.de">
              YouForge
            </a>
            . Sie ist nicht die bestehende Website des Betriebs.
          </p>
        </div>
      </footer>

      <a
        href={`tel:${KEILS.phoneTel}`}
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-between bg-[var(--keils-porcelain)] px-5 py-3.5 text-[var(--keils-ink)] shadow-[0_18px_50px_rgba(0,0,0,0.45)] sm:hidden"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.22em]">Anrufen</span>
        <span className="font-keils-display text-xl tracking-[-0.03em]">{KEILS.phoneDisplay}</span>
      </a>
    </LenisGate>
  );
}
