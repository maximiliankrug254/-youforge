import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
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
