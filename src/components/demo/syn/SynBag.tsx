"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getSynPiece, type SynPiece } from "@/components/demo/syn/syn-content";

type Line = { slug: string; qty: number };
type Drawer = "menu" | "cats" | "search" | "bag" | "fav" | null;
type Toast = "bag" | "fav" | null;

type Ctx = {
  lines: Line[];
  favs: string[];
  drawer: Drawer;
  setDrawer: (d: Drawer) => void;
  add: (slug: string) => void;
  remove: (slug: string) => void;
  toggleFav: (slug: string) => void;
  count: number;
  total: number;
  items: { piece: SynPiece; qty: number }[];
  favItems: SynPiece[];
  booted: boolean;
  boot: () => void;
  toast: Toast;
  clearToast: () => void;
};

const C = createContext<Ctx | null>(null);

export function SynBagProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [favs, setFavs] = useState<string[]>([]);
  const [drawer, setDrawer] = useState<Drawer>(null);
  const [booted, setBooted] = useState(false);
  const [toast, setToast] = useState<Toast>(null);

  const boot = useCallback(() => setBooted(true), []);
  const clearToast = useCallback(() => setToast(null), []);

  const add = useCallback((slug: string) => {
    setLines((prev) => {
      const f = prev.find((l) => l.slug === slug);
      if (f) return prev.map((l) => (l.slug === slug ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { slug, qty: 1 }];
    });
    setToast("bag");
    setDrawer("bag");
  }, []);

  const remove = useCallback((slug: string) => {
    setLines((prev) => prev.filter((l) => l.slug !== slug));
  }, []);

  const toggleFav = useCallback((slug: string) => {
    setFavs((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      if (!prev.includes(slug)) setToast("fav");
      return next;
    });
  }, []);

  const items = useMemo(
    () =>
      lines
        .map((l) => {
          const piece = getSynPiece(l.slug);
          return piece ? { piece, qty: l.qty } : null;
        })
        .filter((x): x is { piece: SynPiece; qty: number } => Boolean(x)),
    [lines],
  );

  const favItems = useMemo(
    () => favs.map((slug) => getSynPiece(slug)).filter((p): p is SynPiece => Boolean(p)),
    [favs],
  );

  const count = items.reduce((n, i) => n + i.qty, 0);
  const total = items.reduce((n, i) => n + i.piece.price * i.qty, 0);

  const value = useMemo(
    () => ({
      lines,
      favs,
      drawer,
      setDrawer,
      add,
      remove,
      toggleFav,
      count,
      total,
      items,
      favItems,
      booted,
      boot,
      toast,
      clearToast,
    }),
    [
      lines,
      favs,
      drawer,
      add,
      remove,
      toggleFav,
      count,
      total,
      items,
      favItems,
      booted,
      boot,
      toast,
      clearToast,
    ],
  );

  return <C.Provider value={value}>{children}</C.Provider>;
}

export function useSyn() {
  const ctx = useContext(C);
  if (!ctx) throw new Error("useSyn");
  return ctx;
}
