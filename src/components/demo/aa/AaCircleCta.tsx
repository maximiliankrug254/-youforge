"use client";

export function AaCircleCta({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="aa-circle group relative grid h-[9.5rem] w-[9.5rem] place-items-center rounded-full border border-current text-center text-[10px] font-medium uppercase leading-relaxed tracking-[0.18em] transition-transform duration-700 hover:scale-[1.04] sm:h-[11rem] sm:w-[11rem]"
    >
      <span className="relative z-10 max-w-[7.5rem]">{children}</span>
    </a>
  );
}
