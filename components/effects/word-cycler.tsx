"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface WordCyclerProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function WordCycler({
  words,
  interval = 2200,
  className,
}: WordCyclerProps) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(t);
  }, [interval, words.length]);

  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span
      className={cn(
        "relative inline-block align-bottom whitespace-nowrap perspective-1200",
        className
      )}
      aria-live="polite"
    >
      {/* sizer keeps layout stable */}
      <span className="invisible">{longest}</span>
      {words.map((w, i) => (
        <span
          key={w}
          aria-hidden={idx !== i}
          className={cn(
            "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            idx === i
              ? "opacity-100 translate-y-0 rotate-x-0"
              : "opacity-0 -translate-y-3 [transform:rotateX(-30deg)]"
          )}
        >
          <span className="text-gradient-brand">{w}</span>
        </span>
      ))}
    </span>
  );
}
