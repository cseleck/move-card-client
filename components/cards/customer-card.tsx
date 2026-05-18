"use client";

import { QrCode, Sparkles, Wifi } from "lucide-react";

import { cn, formatCurrency } from "@/lib/utils";
import type { CustomerCardData, User } from "@/types";

interface CustomerCardProps {
  data: CustomerCardData;
  user: User;
  size?: "default" | "lg";
  onShowQR?: () => void;
  className?: string;
}

export function CustomerCard({
  data,
  user,
  size = "default",
  onShowQR,
  className,
}: CustomerCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl text-white shadow-glow-brand shimmer-wrap transition-transform duration-500 hover:-translate-y-1",
        size === "lg" ? "aspect-[16/10] sm:aspect-[2/1]" : "aspect-[16/10]",
        className
      )}
    >
      {/* Animated premium gradient */}
      <div className="absolute inset-0 bg-premium-animated" />

      {/* Decorative blurred blobs */}
      <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-500/50 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-400/30 blur-3xl animate-float" />

      {/* Subtle conic ring on hover */}
      <div className="absolute -inset-8 conic-ring opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-spin-slow" />

      {/* Dotted texture */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18) 1px, transparent 1.2px), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.10) 1px, transparent 1.2px)",
          backgroundSize: "24px 24px, 32px 32px",
        }}
      />

      {/* Hairline highlight on top */}
      <div className="absolute top-0 inset-x-10 h-px hairline-glow" />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70">
              <Sparkles className="h-3.5 w-3.5 text-brand-300 animate-pulse-slow" />
              OfficeRide · Cliente
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-[length:200%_100%] animate-gradient-fast px-2.5 py-0.5 text-[11px] font-semibold text-amber-950 shadow-glow-gold">
                {data.level}
              </span>
              <span className="text-[11px] text-white/60">desde {user.memberSince}</span>
            </div>
          </div>
          <Wifi className="h-5 w-5 text-white/60 rotate-90" />
        </div>

        <div>
          <div className="font-mono text-base sm:text-lg tracking-[0.3em] text-white/90 mb-1">
            •••• •••• •••• {data.number}
          </div>
          <div className="flex items-end justify-between gap-3">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/50">Titular</div>
              <div className="text-sm font-semibold mt-0.5 truncate max-w-[180px] sm:max-w-none">
                {user.name}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-widest text-white/50">Saldo</div>
              <div className="text-base sm:text-lg font-semibold mt-0.5">
                {formatCurrency(data.balance)}
              </div>
            </div>
            {onShowQR && (
              <button
                onClick={onShowQR}
                aria-label="Ver QR de la tarjeta"
                className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur transition-all hover:bg-white/25 hover:scale-105 active:scale-95"
              >
                <QrCode className="h-5 w-5" />
                <span className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
