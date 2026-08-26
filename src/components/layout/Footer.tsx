import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="mt-1 max-w-md text-[11px] leading-relaxed text-muted/70">
            Interaktive{" "}
            <Link href="/#ki-demo" className="text-muted underline-offset-2 hover:text-accent hover:underline">
              KI-Demo
            </Link>
            {" "}(automatisiertes System, kein Mensch). Hinweise zu Texten,
            Bildern und Demos:{" "}
            <Link href="/ki-hinweise" className="text-muted underline-offset-2 hover:text-accent hover:underline">
              KI-Inhalte
            </Link>
            {" · "}
            <Link href="/datenschutz#ki-demo" className="text-muted underline-offset-2 hover:text-accent hover:underline">
              Datenschutz
            </Link>
            .
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/ki-hinweise"
            className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
          >
            KI-Inhalte
          </Link>
          <Link
            href="/impressum"
            className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
          >
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}
