"use client";

import { useEffect, useRef, useState } from "react";
import { useAaMediaQuery } from "@/components/demo/aa/useAaMediaQuery";

export function AaAudio() {
  const reduce = useAaMediaQuery("(prefers-reduced-motion: reduce)");
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodes = useRef<{ osc: OscillatorNode; noise: AudioBufferSourceNode; gain: GainNode } | null>(null);

  useEffect(() => {
    return () => {
      nodes.current?.gain.disconnect();
      ctxRef.current?.close();
    };
  }, []);

  async function toggle() {
    if (reduce) return;
    const ctx = ctxRef.current ?? new AudioContext();
    ctxRef.current = ctx;
    if (ctx.state === "suspended") await ctx.resume();

    if (on) {
      nodes.current?.gain.gain.exponentialRampToValueAtTime(
        0.0001,
        ctx.currentTime + 0.4,
      );
      setOn(false);
      return;
    }

    if (!nodes.current) {
      const gain = ctx.createGain();
      gain.gain.value = 0.0001;
      gain.connect(ctx.destination);

      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = 72;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 240;
      osc.connect(filter);
      filter.connect(gain);
      osc.start();

      const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.15;
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;
      const nf = ctx.createBiquadFilter();
      nf.type = "bandpass";
      nf.frequency.value = 180;
      nf.Q.value = 0.7;
      noise.connect(nf);
      nf.connect(gain);
      noise.start();
      nodes.current = { osc, noise, gain };
    }

    nodes.current.gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 0.6);
    setOn(true);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed bottom-4 left-4 z-[85] flex h-8 items-end gap-[3px] px-1 text-[var(--aa-tan)]"
      aria-pressed={on}
      aria-label={on ? "Ofenklang aus" : "Ofenklang an"}
    >
      {[0.35, 0.7, 1, 0.55, 0.85].map((h, i) => (
        <span
          key={i}
          className="w-px bg-current"
          style={{
            height: `${10 + h * 10}px`,
            animation: on ? `aa-eq 1.${i + 2}s ease-in-out ${i * 0.12}s infinite` : "none",
            opacity: on ? 1 : 0.45,
          }}
        />
      ))}
    </button>
  );
}
