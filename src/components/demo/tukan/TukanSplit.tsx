export function TukanSplit({ children }: { children: string }) {
  return (
    <span className="tukan-split">
      <span>{children}</span>
      <span aria-hidden>{children}</span>
    </span>
  );
}
