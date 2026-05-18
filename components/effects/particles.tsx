"use client";

import { useMemo } from "react";

import { cn } from "@/lib/utils";

interface ParticlesProps {
  count?: number;
  className?: string;
  color?: string;
}

export function Particles({
  count = 40,
  className,
  color = "rgba(255,122,0,0.55)",
}: ParticlesProps) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const seed = (i + 1) * 9301;
        const r = (s: number) => ((Math.sin(s) + 1) / 2);
        const left = r(seed) * 100;
        const top = r(seed * 2) * 100;
        const size = 2 + r(seed * 3) * 4;
        const delay = r(seed * 4) * 5;
        const dur = 2 + r(seed * 5) * 4;
        const drift = ["animate-drift-1", "animate-drift-2", "animate-drift-3"][i % 3];
        return { left, top, size, delay, dur, drift };
      }),
    [count]
  );

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {items.map((p, i) => (
        <span
          key={i}
          className={cn("absolute rounded-full animate-twinkle", p.drift)}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: color,
            boxShadow: `0 0 ${p.size * 4}px ${color}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
