export function WolffMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden
      fill="none"
    >
      <path
        d="M8 28.5c0-8 6.2-16.5 16-16.5s16 8.5 16 16.5c0 2.4-1.1 4.6-2.6 6.2-.7.7-1.9.4-2.2-.5l-1.4-4.2c-.3-.8-1.4-1-1.9-.3L28 34.5c-.6.8-1.8.8-2.4 0l-3.9-5.3c-.5-.7-1.6-.5-1.9.3l-1.4 4.2c-.3.9-1.5 1.2-2.2.5C9.1 33.1 8 30.9 8 28.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M18 22.5h.01M30 22.5h.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M6 40.5h36"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
}
