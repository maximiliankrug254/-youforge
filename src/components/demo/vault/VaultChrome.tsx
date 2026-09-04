export function VaultGrain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[40] opacity-[0.055] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
      aria-hidden
    />
  );
}

export function VaultGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.55]"
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(232,228,220,0.045) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(232,228,220,0.045) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        maskImage:
          "radial-gradient(ellipse at center, black 18%, transparent 78%)",
      }}
    />
  );
}
