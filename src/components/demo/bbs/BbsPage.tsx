"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  BBS,
  BBS_DEFAULT_PHOTO,
  BBS_SERVICES,
  type BbsService,
} from "@/components/demo/bbs/bbs-content";
import { useGpfMediaQuery } from "@/components/demo/gpf/useGpfMediaQuery";

const EASE = [0.16, 1, 0.3, 1] as const;

function LenisGate({ children }: { children: React.ReactNode }) {
  const fine = useGpfMediaQuery("(pointer: fine)");
  const reduce = useGpfMediaQuery("(prefers-reduced-motion: reduce)");
  if (!fine || reduce) return <>{children}</>;
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, wheelMultiplier: 0.9 }}>
      {children}
    </ReactLenis>
  );
}

function Line({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className ?? ""}`}
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function ServiceStage() {
  const reduce = useReducedMotion();
  const firstWithPhoto = BBS_SERVICES.findIndex((s) => s.photo);
  const [active, setActive] = useState(firstWithPhoto >= 0 ? firstWithPhoto : 0);
  const current = BBS_SERVICES[active];
  const photo = current.photo ?? BBS_DEFAULT_PHOTO;

  function select(service: BbsService, index: number) {
    if (!service.photo) return;
    setActive(index);
  }

  return (
    <section id="leistungen" className="bg-[var(--bbs-ink)] text-[var(--bbs-stone)]">
      <div className="mx-auto max-w-[1500px] px-5 pb-8 pt-20 sm:px-8 lg:pt-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-[var(--bbs-heat)]">
          Leistungsspektrum
        </p>
        <h2 className="mt-4 max-w-[16ch] text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.95] tracking-[-0.04em]">
          Diese Arbeiten übernehme ich.
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1500px] gap-0 border-t border-[var(--bbs-line)] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
        <ol>
          {BBS_SERVICES.map((service, index) => {
            const hasPhoto = Boolean(service.photo);
            const isActive = index === active && hasPhoto;
            return (
              <li key={service.name} className="border-b border-[var(--bbs-line)]">
                <button
                  type="button"
                  disabled={!hasPhoto}
                  onMouseEnter={() => select(service, index)}
                  onFocus={() => select(service, index)}
                  onClick={() => select(service, index)}
                  className={`bbs-row flex w-full min-w-0 items-baseline gap-5 px-5 py-5 text-left sm:gap-8 sm:px-8 sm:py-7 ${
                    isActive ? "bg-[rgba(228,87,46,0.12)] text-[var(--bbs-heat)]" : ""
                  } ${hasPhoto ? "cursor-pointer" : "cursor-default opacity-70"}`}
                  aria-pressed={isActive}
                >
                  <span className="w-8 shrink-0 text-[11px] tabular-nums tracking-[0.2em] text-[var(--bbs-heat)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 hyphens-auto font-bbs-display text-[clamp(1.5rem,3.6vw,3.4rem)] leading-[0.95] tracking-[-0.04em]">
                    {service.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="relative min-h-[52vh] border-t border-[var(--bbs-line)] bg-[var(--bbs-ink-2)] lg:min-h-full lg:border-l lg:border-t-0">
          <div className="sticky top-0 h-[min(72vh,720px)] overflow-hidden lg:h-full lg:min-h-[720px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={photo.src}
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={92}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                  aria-hidden
                />
                <p className="absolute inset-x-0 bottom-0 px-5 pb-6 font-bbs-display text-[clamp(1.6rem,3vw,2.6rem)] tracking-[-0.03em] text-white sm:px-8">
                  {current.name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BbsPage() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <LenisGate>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[var(--bbs-heat)]"
        style={{ scaleX: barScale }}
        aria-hidden
      />
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-[var(--bbs-stone)] focus:px-3 focus:py-2 focus:text-[var(--bbs-ink)]"
      >
        Zum Inhalt
      </a>

      <header
        className={`bbs-bar fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-[var(--bbs-ink)]/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#anfang" className="font-bbs-display text-2xl leading-none tracking-[-0.04em]">
            BBS
            <span className="sr-only"> {BBS.name}</span>
          </a>
          <nav
            aria-label="Abschnitte"
            className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.28em] md:flex"
          >
            <a href="#leistungen" className="hover:text-[var(--bbs-heat)]">
              Leistungen
            </a>
            <a href="#kontakt" className="hover:text-[var(--bbs-heat)]">
              Kontakt
            </a>
          </nav>
          <a
            href={`tel:${BBS.phoneTel}`}
            className="text-sm font-medium tracking-wide hover:text-[var(--bbs-heat)]"
          >
            {BBS.phoneDisplay}
          </a>
        </div>
      </header>

      <div id="inhalt">
        <section
          id="anfang"
          className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--bbs-ink)] lg:grid lg:min-h-[100svh] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
        >
          <div className="relative z-10 flex flex-col justify-between px-5 pb-10 pt-28 sm:px-8 lg:min-h-[100svh] lg:px-12 lg:pb-14 lg:pt-32">
            <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-[var(--bbs-heat)]">
              {BBS.role}
              <span className="mx-3 inline-block h-1 w-1 rounded-full bg-[var(--bbs-sand)] align-middle" />
              <span className="whitespace-nowrap text-[var(--bbs-sand)]">{BBS.city}</span>
            </p>

            <div className="my-10 lg:my-0">
              <h1 className="text-[var(--bbs-stone)]">
                <Line
                  delay={0.08}
                  className="text-[clamp(1.35rem,2.8vw,2rem)] font-medium tracking-[-0.02em] text-[var(--bbs-sand)]"
                >
                  Ich bin
                </Line>
                <Line
                  delay={0.18}
                  className="mt-1 text-[clamp(5.6rem,24vw,11rem)] leading-[0.78] tracking-[-0.06em]"
                >
                  {BBS.firstName}.
                </Line>
              </h1>
              <p className="mt-6 max-w-[18ch] text-[clamp(1.35rem,3vw,2.1rem)] leading-[1.2] tracking-[-0.02em] text-[var(--bbs-stone)]/85">
                {BBS.slogan}. Seit {BBS.since} mein Betrieb.
              </p>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-6">
              <div className="relative hidden h-28 w-44 overflow-hidden sm:block lg:h-32 lg:w-52">
                <Image
                  src="/demo/bbs-bauservice/haende.jpg"
                  alt="Hände beim Setzen von Kalksandsteinen mit Kelle und Mörtel"
                  fill
                  sizes="208px"
                  className="object-cover"
                />
              </div>
              <a
                href={`tel:${BBS.phoneTel}`}
                className="group ml-auto inline-flex flex-col items-end gap-2"
              >
                <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--bbs-muted)]">
                  Anrufen
                </span>
                <span className="font-bbs-display text-[clamp(1.6rem,3.5vw,2.6rem)] leading-none tracking-[-0.03em] text-[var(--bbs-heat)] transition-colors group-hover:text-[var(--bbs-stone)]">
                  {BBS.phoneDisplay}
                </span>
              </a>
            </div>
          </div>

          <div className="relative min-h-[48vh] lg:min-h-full">
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: EASE }}
            >
              <Image
                src="/demo/bbs-bauservice/hero-abend.jpg"
                alt="Rohbau am Abend mit Arbeitslicht und Ziegelstapeln"
                fill
                priority
                quality={92}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-center"
              />
            </motion.div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--bbs-ink)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[var(--bbs-ink)] lg:via-transparent lg:to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-5 left-5 right-5 sm:hidden">
              <div className="relative h-24 overflow-hidden border border-white/20">
                <Image
                  src="/demo/bbs-bauservice/haende.jpg"
                  alt="Hände beim Setzen von Kalksandsteinen mit Kelle und Mörtel"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <div
          className="overflow-hidden border-y border-[var(--bbs-line)] bg-[var(--bbs-ink)] py-4 text-[var(--bbs-stone)]"
          aria-hidden
        >
          <div className="bbs-marquee flex w-max">
            {[0, 1].map((copy) => (
              <p key={copy} className="flex shrink-0 items-center">
                {BBS_SERVICES.map((service) => (
                  <span
                    key={`${copy}-${service.name}`}
                    className="inline-flex items-center gap-8 px-4 font-bbs-display text-[clamp(2.4rem,6vw,5rem)] leading-none tracking-[-0.04em] text-transparent"
                    style={{ WebkitTextStroke: "1.25px rgba(243,238,230,0.55)" }}
                  >
                    {service.name}
                    <span className="h-2 w-2 rounded-full bg-[var(--bbs-heat)]" />
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>

        <section className="relative overflow-hidden bg-[var(--bbs-stone)] text-[var(--bbs-ink)]">
          <p
            className="pointer-events-none absolute -left-[0.08em] top-6 font-bbs-display text-[28vw] leading-none tracking-[-0.07em] text-[var(--bbs-ink)]/[0.06]"
            aria-hidden
          >
            {BBS.since}
          </p>
          <div className="relative mx-auto max-w-[1100px] px-5 py-24 sm:px-8 lg:py-36">
            <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-[var(--bbs-heat)]">
              Seit {BBS.since}
            </p>
            <h2 className="mt-6 max-w-[14ch] text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.95] tracking-[-0.04em]">
              Ich bin seit {BBS.since} selbstständig.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--bbs-ink)]/75 sm:text-xl">
              Ich arbeite für Architekten, für Kommunen und für private Bauherren.
            </p>
          </div>
        </section>

        <ServiceStage />

        <section id="kontakt" className="relative bg-[var(--bbs-ink)] text-[var(--bbs-stone)]">
          <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:py-28">
            <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-[var(--bbs-heat)]">
              Kontakt
            </p>
            <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-end">
              <div>
                <h2 className="max-w-[12ch] text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.045em]">
                  So erreichen Sie mich.
                </h2>
                <a
                  href={`tel:${BBS.phoneTel}`}
                  className="mt-8 inline-block font-bbs-display text-[clamp(2.4rem,7vw,6rem)] leading-none tracking-[-0.04em] text-[var(--bbs-heat)]"
                >
                  {BBS.phoneDisplay}
                </a>
                <address className="mt-12 grid gap-8 not-italic sm:grid-cols-2">
                  <p className="text-lg leading-relaxed">
                    {BBS.name}
                    <br />
                    {BBS.owner}, {BBS.role}
                    <br />
                    {BBS.street}
                    <br />
                    {BBS.postalCode} {BBS.city}
                  </p>
                  <p className="text-lg leading-relaxed">
                    Telefax {BBS.faxDisplay}
                    <br />
                    <a className="underline underline-offset-4" href={`mailto:${BBS.email}`}>
                      {BBS.email}
                    </a>
                    <br />
                    <a
                      className="underline underline-offset-4"
                      href={BBS.mapsHref}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Route in Google Maps
                    </a>
                  </p>
                </address>
              </div>
              <div className="overflow-hidden border border-[var(--bbs-line)] bg-[var(--bbs-ink-2)]">
                <iframe
                  title={`Karte: ${BBS.street}, ${BBS.city}`}
                  src={BBS.mapEmbedSrc}
                  className="h-[min(52vh,420px)] w-full border-0 grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bbs-foot border-t border-[var(--bbs-line)] bg-[var(--bbs-ink-2)] px-5 pb-28 pt-10 text-sm leading-relaxed text-[var(--bbs-muted)] sm:px-8 sm:pb-10">
        <div className="mx-auto grid max-w-[1500px] gap-8 sm:grid-cols-2">
          <div>
            <p className="font-medium text-[var(--bbs-stone)]">Impressum</p>
            <p className="mt-2">
              {BBS.name}
              <br />
              {BBS.owner}, Inhaber
              <br />
              {BBS.street}
              <br />
              {BBS.postalCode} {BBS.city}
              <br />
              Telefon {BBS.phoneDisplay}
              <br />
              Telefax {BBS.faxDisplay}
              <br />
              E-Mail {BBS.email}
            </p>
            <p className="mt-2">Einzelunternehmen, gegründet {BBS.since}.</p>
          </div>
          <p className="sm:text-right">
            Diese Seite ist eine Demo von{" "}
            <a
              className="text-[var(--bbs-stone)] underline underline-offset-4"
              href="https://you-forge.de"
            >
              YouForge
            </a>
            . Sie ist nicht die bestehende Website des Betriebs.
          </p>
        </div>
      </footer>

      <a
        href={`tel:${BBS.phoneTel}`}
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-between rounded-full bg-[var(--bbs-stone)] px-5 py-3.5 text-[var(--bbs-ink)] shadow-[0_16px_40px_rgba(0,0,0,0.35)] sm:hidden"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.22em]">Anrufen</span>
        <span className="font-bbs-display text-xl tracking-[-0.03em]">{BBS.phoneDisplay}</span>
      </a>
    </LenisGate>
  );
}
