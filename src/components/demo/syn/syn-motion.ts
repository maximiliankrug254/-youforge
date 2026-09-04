export const SYN_EASE = [0.75, 0, 0.25, 1] as const;

const JAG_X = [0, 6, 12, 18, 25, 32, 39, 46, 54, 61, 68, 75, 82, 89, 95, 100];
const JAG_A = [0, 2.4, -1.6, 2.8, -2.1, 1.7, -2.6, 2.2, -1.4, 2.5, -1.9, 1.6, -2.3, 1.8, -1.5, 0];

/** Grayscale layer covers the top; jagged tear at `y` percent from the top. */
export function tearClip(y: number) {
  const line = JAG_X.map((x, i) => `${x}% ${(y + JAG_A[i]).toFixed(2)}%`);
  return `polygon(0% 0%, 100% 0%, ${[...line].reverse().join(", ")})`;
}
