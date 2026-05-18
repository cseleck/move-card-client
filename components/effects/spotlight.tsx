"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  variant?: "default" | "soft";
}

export function Spotlight({ className, variant = "default" }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const target = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      target.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };
      if (raf.current == null) {
        raf.current = requestAnimationFrame(apply);
      }
    };

    const apply = () => {
      raf.current = null;
      if (!target.current || !ref.current) return;
      ref.current.style.setProperty("--mx", `${target.current.x}%`);
      ref.current.style.setProperty("--my", `${target.current.y}%`);
    };

    const parent = el.parentElement;
    parent?.addEventListener("mousemove", onMove);
    return () => {
      parent?.removeEventListener("mousemove", onMove);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        variant === "soft" ? "spotlight-soft" : "spotlight",
        className
      )}
    />
  );
}
