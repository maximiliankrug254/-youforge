import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full";

  const variants = {
    primary:
      "bg-accent text-background hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "border border-border bg-surface/50 text-foreground hover:bg-surface-hover hover:border-muted/30",
    ghost:
      "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5 hover:border-foreground/40",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:");

    if (isExternal) {
      const isMailto = href.startsWith("mailto:");
      return (
        <a
          href={href}
          className={classes}
          {...(!isMailto && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
