"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, Home, LifeBuoy, Sparkles, User, Wallet } from "lucide-react";

import { cn } from "@/lib/utils";

const items = [
  { label: "Inicio", href: "/app", icon: Home },
  { label: "Mis viajes", href: "/app/rides", icon: Car },
  { label: "MoveCard", href: "/app/card", icon: Sparkles },
  { label: "Wallet", href: "/app/wallet", icon: Wallet },
  { label: "Perfil", href: "/app/profile", icon: User },
  { label: "Soporte", href: "/app/support", icon: LifeBuoy },
];

export function MobileNavList() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-1">
      {items.map(({ label, href, icon: Icon }) => {
        const active =
          pathname === href || (href !== "/app" && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-medium transition-colors",
              active
                ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon className={cn("h-4.5 w-4.5", active && "text-brand-600")} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
