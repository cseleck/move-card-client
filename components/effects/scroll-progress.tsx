"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? (h.scrollTop / total) * 100 : 0;
      setPct(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className={cn(
        "fixed top-0 inset-x-0 z-50 h-[3px] bg-transparent pointer-events-none",
        className
      )}
    >
      <div
        className="h-full bg-gradient-to-r from-brand-400 via-amber-400 to-brand-600 shadow-[0_0_18px_rgba(255,122,0,0.6)] transition-[width] duration-100 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
