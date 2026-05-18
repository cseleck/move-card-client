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
        "relative overflow-hidden rounded-3xl text-white shadow-xl shadow-brand-500/20",
        size === "lg" ? "aspect-[16/10] sm:aspect-[2/1]" : "aspect-[16/10]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900 to-brand-700" />
      <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 1px, transparent 1.2px), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.08) 1px, transparent 1.2px)",
          backgroundSize: "24px 24px, 32px 32px",
        }}
      />

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-7">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70">
              <Sparkles className="h-3.5 w-3.5 text-brand-300" />
              MoveCard · Cliente
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 px-2.5 py-0.5 text-[11px] font-semibold text-amber-950">
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
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur hover:bg-white/25 transition-colors"
              >
                <QrCode className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
