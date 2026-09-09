type MarkProps = {
  className?: string;
  onDark?: boolean;
  title?: string;
};

/** Markenzeichen in Markenfarben: Lila + Limette */
export function RkMark({ className, onDark = false, title }: MarkProps) {
  const left = onDark ? "#ffffff" : "#822182";
  const right = onDark ? "rgba(255,255,255,0.45)" : "#591759";

  return (
    <svg
      viewBox="0 0 72 96"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect x="34" y="20" width="26" height="62" rx="3.5" fill={right} />
      <rect
        x="31"
        y="24"
        width="7"
        height="54"
        rx="1.5"
        fill="#9ec410"
        opacity={onDark ? 0.55 : 0.7}
      />
      <rect x="33.25" y="26" width="2.6" height="50" rx="1.3" fill="#9ec410" />
      <rect x="12" y="8" width="24" height="80" rx="3.5" fill={left} />
    </svg>
  );
}

type LogoProps = {
  onDark?: boolean;
  compact?: boolean;
  className?: string;
};

export function RkLogo({ onDark = false, compact = false, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <RkMark onDark={onDark} className={compact ? "h-8 w-auto" : "h-10 w-auto"} />
      <span
        className={`font-rk-display uppercase leading-none tracking-[0.06em] ${
          onDark ? "text-white" : "text-[var(--rk-purple)]"
        } ${compact ? "text-[1.05rem] sm:text-[1.22rem]" : "text-xl"}`}
      >
        Raumkontrast
      </span>
    </span>
  );
}
