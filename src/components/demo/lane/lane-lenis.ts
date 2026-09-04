import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLaneLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLaneLenis() {
  return instance;
}

export const LANE_SCROLL_EASE = (t: number) => 1 - (1 - t) ** 3;
