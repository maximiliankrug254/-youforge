type Phase = "boot" | "holding" | "done";
type Listener = (phase: Phase) => void;
type ReadyListener = (ready: boolean) => void;

let phase: Phase = "boot";
let heroReady = false;
const listeners = new Set<Listener>();
const readyListeners = new Set<ReadyListener>();

export function getAnaIntroPhase() {
  return phase;
}

export function isAnaHeroReady() {
  return heroReady;
}

export function setAnaIntroPhase(next: Phase) {
  if (phase === next) return;
  if (phase === "done") return;
  if (phase === "holding" && next === "boot") return;
  phase = next;
  listeners.forEach((fn) => fn(phase));
}

export function setAnaHeroReady(ready: boolean) {
  if (heroReady === ready) return;
  heroReady = ready;
  readyListeners.forEach((fn) => fn(heroReady));
}

export function subscribeAnaIntro(fn: Listener) {
  listeners.add(fn);
  fn(phase);
  return () => {
    listeners.delete(fn);
  };
}

export function subscribeAnaHeroReady(fn: ReadyListener) {
  readyListeners.add(fn);
  fn(heroReady);
  return () => {
    readyListeners.delete(fn);
  };
}

export function resetAnaIntroGate() {
  phase = "boot";
  heroReady = false;
}
