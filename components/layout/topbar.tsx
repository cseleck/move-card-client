"use client";

import Link from "next/link";
import { Bell, CreditCard, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { mockUser } from "@/lib/mock-data";
import { MobileNavList } from "@/components/layout/mobile-nav-list";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/80 backdrop-blur-md px-4 lg:px-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
          <SheetHeader className="px-6 pt-6">
            <SheetTitle className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
                <CreditCard className="h-5 w-5" />
              </div>
              OfficeRide
            </SheetTitle>
          </SheetHeader>
          <div className="px-3 py-4">
            <MobileNavList />
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/app" className="lg:hidden flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
          <CreditCard className="h-4.5 w-4.5" />
        </div>
        <span className="font-semibold tracking-tight">OfficeRide</span>
      </Link>

      <div className="hidden md:flex flex-1 max-w-md mx-auto lg:mx-0">
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar destinos, viajes o cupones"
            className="pl-10 bg-muted/40 border-transparent focus-visible:bg-background"
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative" aria-label="Notificaciones">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-brand-500 animate-pulse-slow" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-2xl hover:bg-muted/60 p-1.5 transition-colors">
              <Avatar className="h-9 w-9 ring-2 ring-brand-100">
                <AvatarFallback className="bg-gradient-to-br from-brand-400 to-brand-600 text-white font-semibold">
                  {mockUser.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:flex flex-col items-start">
                <span className="text-sm font-medium leading-none">
                  {mockUser.name.split(" ").slice(0, 2).join(" ")}
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">Cliente Gold</span>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="flex flex-col">
              <span>{mockUser.name}</span>
              <span className="text-xs font-normal text-muted-foreground mt-0.5">{mockUser.email}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/app/profile">Mi perfil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/app/wallet">Wallet</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/app/card">
                OfficeRide
                <Badge variant="gold" className="ml-auto text-[10px]">Gold</Badge>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/">Cerrar sesión</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
