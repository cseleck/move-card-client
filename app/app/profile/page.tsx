"use client";

import Link from "next/link";
import {
  Bell,
  Briefcase,
  ChevronRight,
  Home,
  KeyRound,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Plane,
  Shield,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";
import { SectionTitle } from "@/components/shared/section-title";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { mockFavoritePlaces, mockUser } from "@/lib/mock-data";

const PLACE_ICON = {
  home: Home,
  work: Briefcase,
  airport: Plane,
  shop: ShoppingBag,
  other: MapPin,
};

const SETTINGS = [
  {
    icon: Shield,
    title: "Seguridad",
    desc: "Contraseña, sesiones activas y autenticación en 2 pasos",
  },
  {
    icon: Bell,
    title: "Notificaciones",
    desc: "Push, email y SMS para viajes, promos y avisos",
  },
  {
    icon: KeyRound,
    title: "Privacidad",
    desc: "Datos compartidos, ubicación y permisos",
  },
];

export default function ProfilePage() {
  return (
    <div>
      <PageHeader
        title="Mi perfil"
        description="Administra tus datos personales, lugares favoritos y preferencias de la cuenta."
      />

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Profile card */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6 text-center">
            <Avatar className="h-20 w-20 mx-auto ring-4 ring-brand-100">
              <AvatarFallback className="bg-gradient-to-br from-brand-400 to-brand-600 text-white text-xl font-semibold">
                {mockUser.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </AvatarFallback>
            </Avatar>
            <h2 className="font-semibold text-lg tracking-tight mt-4">{mockUser.name}</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Cliente desde {mockUser.memberSince}</p>
            <Badge variant="gold" className="mt-3">
              <Sparkles className="h-3 w-3 mr-1" /> {mockUser.cardLevel}
            </Badge>

            <Separator className="my-5" />

            <div className="space-y-3 text-left text-sm">
              <Field icon={Mail} label="Correo" value={mockUser.email} />
              <Field icon={Phone} label="Teléfono" value={mockUser.phone} />
            </div>

            <Button variant="outline" className="w-full mt-5">Editar perfil</Button>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-5">
          {/* Favorites */}
          <div>
            <SectionTitle
              title="Lugares favoritos"
              hint="Accesos rápidos para pedir viaje en segundos"
            />
            <Card>
              <CardContent className="p-2">
                <ul className="divide-y">
                  {mockFavoritePlaces.map((p) => {
                    const Icon = PLACE_ICON[p.icon] ?? MapPin;
                    return (
                      <li
                        key={p.id}
                        className="flex items-center gap-3 px-3 py-3 hover:bg-muted/40 transition-colors rounded-2xl"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{p.label}</div>
                          <div className="text-xs text-muted-foreground truncate">{p.address}</div>
                        </div>
                        <button
                          className="text-muted-foreground hover:text-foreground rounded-xl p-1"
                          aria-label={`Editar ${p.label}`}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Settings */}
          <div>
            <SectionTitle title="Configuración" hint="Tu cuenta a tu manera" />
            <div className="space-y-3">
              {SETTINGS.map(({ icon: Icon, title, desc }) => (
                <button
                  key={title}
                  className={cn(
                    "w-full flex items-center gap-3 rounded-3xl border bg-card p-4 text-left transition-all hover:shadow-md hover:-translate-y-0.5"
                  )}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm">{title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{desc}</div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>

          <Button variant="outline" className="w-full text-destructive border-destructive/30 hover:bg-destructive/5" asChild>
            <Link href="/">
              <LogOut className="h-4 w-4" /> Cerrar sesión
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-muted-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
    </div>
  );
}
