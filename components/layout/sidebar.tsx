"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Car,
  CreditCard,
  Home,
  LifeBuoy,
  Sparkles,
  User,
  Wallet,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const nav = [
  { label: "Inicio", href: "/app", icon: Home },
  { label: "Mis viajes", href: "/app/rides", icon: Car },
  { label: "OfficeRide", href: "/app/card", icon: Sparkles, highlight: true },
  { label: "Wallet", href: "/app/wallet", icon: Wallet },
  { label: "Perfil", href: "/app/profile", icon: User },
  { label: "Soporte", href: "/app/support", icon: LifeBuoy },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-72 lg:border-r lg:bg-background/80 lg:backdrop-blur-md lg:px-6 lg:py-8">
      <Link href="/app" className="group flex items-center gap-2.5 mb-10">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-glow-brand">
          <CreditCard className="h-5 w-5" />
          <span className="absolute -inset-1 rounded-2xl conic-ring opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-spin-slow" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold tracking-tight">OfficeRide</span>
          <span className="text-xs text-muted-foreground">Cliente · Gold</span>
        </div>
      </Link>

      <nav className="flex flex-col gap-1">
        {nav.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            (item.href !== "/app" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-3 rounded-2xl px-3.5 py-2.5 text-sm font-medium transition-all duration-300",
                active
                  ? "bg-gradient-to-r from-brand-50 to-amber-50/40 text-brand-700 shadow-sm dark:from-brand-500/15 dark:to-amber-500/5 dark:text-brand-300"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-gradient-to-b from-brand-400 to-brand-600 shadow-glow-brand" />
              )}
              <Icon
                className={cn(
                  "h-4.5 w-4.5 transition-colors",
                  active ? "text-brand-600" : "text-muted-foreground group-hover:text-foreground"
                )}
              />
              <span className="flex-1">{item.label}</span>
              {item.highlight && !active && (
                <Badge variant="soft" className="text-[10px]">Nuevo</Badge>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="relative mt-auto rounded-3xl border overflow-hidden shimmer-wrap p-5 text-white shadow-glow-dark">
        <div className="absolute inset-0 bg-premium-animated" />
        <div className="absolute -top-12 -right-8 h-32 w-32 rounded-full bg-brand-500/40 blur-3xl animate-float-slow" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-brand-300 animate-pulse-slow" />
            <span className="text-sm font-semibold">Invita y gana</span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed mb-3">
            Comparte tu código y recibe $10.000 en saldo por cada amigo que se una.
          </p>
          <button className="w-full rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 hover:from-brand-500 hover:to-brand-700 text-white text-xs font-semibold py-2 transition-all shadow-glow-brand hover:scale-[1.02] active:scale-[0.98]">
            Compartir código
          </button>
        </div>
      </div>
    </aside>
  );
}
