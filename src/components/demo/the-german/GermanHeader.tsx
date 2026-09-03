"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GERMAN, GERMAN_BASE, germanAsset } from "@/components/demo/the-german/german-config";
import { GERMAN_NAV } from "@/components/demo/the-german/german-nav";
import { GermanClock } from "@/components/demo/the-german/GermanClock";
import { GermanMagnetic } from "@/components/demo/the-german/GermanMagnetic";

export function GermanHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenItem(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      role="banner"
      className={`tg-header${scrolled || open ? " is-scrolled" : ""}${open ? " is-open" : ""}`}
    >
      <div className="tg-header-inner">
        <Link href={GERMAN_BASE} className="tg-logo" aria-label={GERMAN.brand.full}>
          <img
            src={germanAsset("branding/logo-light.png")}
            alt={GERMAN.brand.logoAlt}
            width={220}
            height={48}
          />
        </Link>

        <nav className={`tg-nav${open ? " is-open" : ""}`} aria-label="Primary">
          <ul className="tg-nav-list">
            {GERMAN_NAV.map((item) => {
              const current =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              const expanded = openItem === item.label;
              return (
                <li
                  key={item.label}
                  className={`tg-nav-item${current ? " is-current" : ""}${expanded ? " is-open" : ""}`}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (open && item.children.length) {
                        e.preventDefault();
                        setOpenItem(expanded ? null : item.label);
                      }
                    }}
                    aria-expanded={open ? expanded : undefined}
                    aria-haspopup={item.children.length ? "true" : undefined}
                  >
                    {item.label}
                  </Link>
                  {item.children.length > 0 && (
                    <ul className="tg-dropdown">
                      {item.children.map((child) => (
                        <li key={child.href + child.label}>
                          <a
                            href={child.href}
                            {...(child.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <a href="#contact" className="tg-btn tg-btn-mobile">
            CONTACT US
          </a>
        </nav>

        <div className="tg-header-actions">
          <GermanClock className="tg-header-clock" />
          <GermanMagnetic strength={8}>
            <a href="#contact" className="tg-btn">
              CONTACT US
            </a>
          </GermanMagnetic>
          <button
            type="button"
            className={`tg-menu-btn${open ? " is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
    </div>
  );
}
