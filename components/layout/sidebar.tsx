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
  { label: "MoveCard", href: "/app/card", icon: Sparkles, highlight: true },
  { label: "Wallet", href: "/app/wallet", icon: Wallet },
  { label: "Perfil", href: "/app/profile", icon: User },
  { label: "Soporte", href: "/app/support", icon: LifeBuoy },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-72 lg:border-r lg:bg-background lg:px-6 lg:py-8">
      <Link href="/app" className="flex items-center gap-2.5 mb-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-md shadow-brand-500/30">
          <CreditCard className="h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold tracking-tight">MoveCard</span>
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
                "group flex items-center gap-3 rounded-2xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
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

      <div className="mt-auto rounded-3xl border bg-gradient-to-br from-neutral-900 to-neutral-800 p-5 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-brand-400" />
          <span className="text-sm font-semibold">Invita y gana</span>
        </div>
        <p className="text-xs text-neutral-300 leading-relaxed mb-3">
          Comparte tu código y recibe $10.000 en saldo por cada amigo que se una.
        </p>
        <button className="w-full rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold py-2 transition-colors">
          Compartir código
        </button>
      </div>
    </aside>
  );
}
