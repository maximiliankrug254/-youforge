import { getLaneLenis, LANE_SCROLL_EASE } from "@/components/demo/lane/lane-lenis";

export function scrollToLanePanel(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const desktop = window.matchMedia("(min-width: 480px)").matches;
  const xScroller = document.querySelector(".lane-shell");
  if (desktop && xScroller instanceof HTMLElement) {
    const left =
      el.getBoundingClientRect().left -
      xScroller.getBoundingClientRect().left +
      xScroller.scrollLeft;
    const lenis = getLaneLenis();
    if (lenis) {
      lenis.scrollTo(left, {
        duration: 0.95,
        easing: LANE_SCROLL_EASE,
      });
    } else {
      xScroller.scrollTo({ left, behavior: "smooth" });
    }
    return;
  }

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
