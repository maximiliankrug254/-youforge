import { FadeIn } from "@/components/animations/FadeIn";

export function WebsiteCheckTeaser() {
  return (
    <section className="border-t border-border px-6 py-24 lg:px-8">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Kostenloser Website-Check</p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Wie gut findet Google deine Website?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Adresse eingeben und in unter einer Minute die Note und die drei wichtigsten Baustellen sehen. Ohne Anmeldung.
          </p>
          <form action="/website-check" method="get" className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
            <label htmlFor="teaser-url" className="sr-only">
              Adresse deiner Website
            </label>
            <input
              id="teaser-url"
              name="url"
              type="text"
              inputMode="url"
              autoComplete="url"
              required
              placeholder="malermeister-muster.de"
              className="w-full flex-1 rounded-full border border-border bg-background px-6 py-4 text-foreground placeholder:text-muted/50 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-medium text-background transition-all hover:scale-[1.02] hover:bg-accent-hover active:scale-[0.98]"
            >
              Prüfen →
            </button>
          </form>
        </div>
      </FadeIn>
    </section>
  );
}
