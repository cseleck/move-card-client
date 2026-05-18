"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export function Tilt3D({
  children,
  className,
  intensity = 10,
  glare = true,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const target = useRef<{ x: number; y: number; gx: number; gy: number } | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    target.current = {
      x: (py - 0.5) * -intensity * 2,
      y: (px - 0.5) * intensity * 2,
      gx: px * 100,
      gy: py * 100,
    };
    if (raf.current == null) raf.current = requestAnimationFrame(apply);
  };

  const apply = () => {
    raf.current = null;
    const el = ref.current;
    if (!el || !target.current) return;
    el.style.setProperty("--tx", `${target.current.x}deg`);
    el.style.setProperty("--ty", `${target.current.y}deg`);
    el.style.setProperty("--gx", `${target.current.gx}%`);
    el.style.setProperty("--gy", `${target.current.gy}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tx", "0deg");
    el.style.setProperty("--ty", "0deg");
  };

  return (
    <div
      className={cn("perspective-1200", className)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div ref={ref} className="tilt-card transform-3d relative">
        {children}
        {glare && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.35), transparent 45%)",
              mixBlendMode: "overlay",
            }}
          />
        )}
      </div>
    </div>
  );
}
