"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, Home, Sparkles, User, Wallet } from "lucide-react";

import { cn } from "@/lib/utils";

const items = [
  { label: "Inicio", href: "/app", icon: Home },
  { label: "Viajes", href: "/app/rides", icon: Car },
  { label: "Card", href: "/app/card", icon: Sparkles, emphasis: true },
  { label: "Wallet", href: "/app/wallet", icon: Wallet },
  { label: "Perfil", href: "/app/profile", icon: User },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 border-t glass">
      <ul className="grid grid-cols-5 px-2 py-1.5">
        {items.map(({ label, href, icon: Icon, emphasis }) => {
          const active =
            pathname === href || (href !== "/app" && pathname.startsWith(href));
          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 px-1 py-2 rounded-2xl transition-colors",
                  active && "text-brand-600",
                  !active && "text-muted-foreground hover:text-foreground"
                )}
                aria-current={active ? "page" : undefined}
              >
                {emphasis ? (
                  <span
                    className={cn(
                      "relative flex h-12 w-12 -mt-6 items-center justify-center rounded-full transition-all duration-300 shadow-glow-brand",
                      active
                        ? "bg-gradient-to-br from-brand-500 to-brand-600 text-white scale-110"
                        : "bg-gradient-to-br from-brand-400 to-brand-600 text-white"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {active && (
                      <span className="absolute -inset-2 rounded-full conic-ring opacity-60 animate-spin-slow" />
                    )}
                  </span>
                ) : (
                  <Icon className="h-5 w-5" />
                )}
                <span className="text-[11px] font-medium">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
