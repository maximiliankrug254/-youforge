"use client";

import { useEffect, useRef, useState } from "react";
import { useVaultLang } from "@/components/demo/vault/VaultLang";
import { useVaultMediaQuery } from "@/components/demo/vault/useVaultMediaQuery";

export function VaultAudio() {
  const { t } = useVaultLang();
  const reduce = useVaultMediaQuery("(prefers-reduced-motion: reduce)");
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    return () => {
      gainRef.current?.disconnect();
      void ctxRef.current?.close();
    };
  }, []);

  async function toggle() {
    if (reduce) return;
    const ctx = ctxRef.current ?? new AudioContext();
    ctxRef.current = ctx;
    if (ctx.state === "suspended") await ctx.resume();

    if (!gainRef.current) {
      const gain = ctx.createGain();
      gain.gain.value = 0.0001;
      gain.connect(ctx.destination);

      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = 58;
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 180;
      osc.connect(lp);
      lp.connect(gain);
      osc.start();

      const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.12;
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 140;
      bp.Q.value = 0.55;
      noise.connect(bp);
      bp.connect(gain);
      noise.start();
      gainRef.current = gain;
    }

    const g = gainRef.current;
    if (on) {
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
      setOn(false);
      return;
    }
    g.gain.exponentialRampToValueAtTime(0.028, ctx.currentTime + 0.7);
    setOn(true);
  }

  return (
    <button
      type="button"
      onClick={() => void toggle()}
      className="fixed bottom-8 left-4 z-[85] flex items-end gap-[3px] px-1 text-[var(--vault-amber)]"
      aria-pressed={on}
      aria-label={on ? t.soundOff : t.soundOn}
    >
      {[0.35, 0.7, 1, 0.5, 0.82].map((h, i) => (
        <span
          key={i}
          className="w-px bg-current"
          style={{
            height: `${10 * h}px`,
            animation: on ? `vault-eq 1.${i + 2}s ease-in-out ${i * 0.08}s infinite` : "none",
            opacity: on ? 1 : 0.35,
          }}
        />
      ))}
    </button>
  );
}
