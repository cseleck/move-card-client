"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface LiveTickerProps {
  base: number;
  jitter?: number;
  intervalMs?: number;
  label: string;
  className?: string;
}

export function LiveTicker({
  base,
  jitter = 12,
  intervalMs = 1800,
  label,
  className,
}: LiveTickerProps) {
  const [value, setValue] = useState(base);

  useEffect(() => {
    const t = setInterval(() => {
      setValue((v) => {
        const drift = Math.floor((Math.random() - 0.45) * jitter);
        return Math.max(0, v + drift);
      });
    }, intervalMs);
    return () => clearInterval(t);
  }, [jitter, intervalMs]);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-emerald-200/60 bg-emerald-50/80 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-emerald-700 shadow-sm animate-tick-pulse",
        className
      )}
    >
      <span className="relative flex h-2 w-2 text-emerald-500 live-dot" />
      <span className="tabular-nums font-semibold">
        {value.toLocaleString("es-CO")}
      </span>
      <span className="text-emerald-700/80">{label}</span>
    </div>
  );
}
