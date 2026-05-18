"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  Car,
  ChevronRight,
  Crown,
  Home,
  MapPin,
  Plane,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";

import { PromoCard } from "@/components/cards/promo-card";
import { CountUp } from "@/components/effects/count-up";
import { LiveTicker } from "@/components/effects/live-ticker";
import { Tilt3D } from "@/components/effects/tilt-3d";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapMock } from "@/components/shared/map-mock";
import { QuickActionButton } from "@/components/shared/quick-action-button";
import { SectionTitle } from "@/components/shared/section-title";
import { TripStatusCard } from "@/components/shared/trip-status-card";
import { cn, formatCurrency } from "@/lib/utils";
import { mockCoupons, mockUser } from "@/lib/mock-data";

const TIERS = [
  {
    id: "economy",
    label: "Económico",
    desc: "Hasta 4 pasajeros",
    price: 18500,
    eta: "3 min",
    icon: Car,
  },
  {
    id: "comfort",
    label: "Comfort",
    desc: "Más espacio · 4★+",
    price: 24200,
    eta: "5 min",
    icon: Zap,
  },
  {
    id: "executive",
    label: "Ejecutivo",
    desc: "Premium · 4.9★+",
    price: 36800,
    eta: "7 min",
    icon: Crown,
  },
];

const QUICK = [
  { label: "Casa", icon: Home },
  { label: "Trabajo", icon: Briefcase },
  { label: "Aeropuerto", icon: Plane },
  { label: "Centro", icon: Building2 },
];

export default function DashboardPage() {
  const [selectedTier, setSelectedTier] = useState("comfort");
  const tier = TIERS.find((t) => t.id === selectedTier)!;

  return (
    <div className="grid lg:grid-cols-3 gap-5">
      {/* Left column */}
      <div className="lg:col-span-2 space-y-5">
        <div className="flex items-center justify-between gap-4 animate-fade-up flex-wrap">
          <div>
            <p className="text-sm text-muted-foreground">¡Hola de nuevo!</p>
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              {mockUser.name.split(" ")[0]}, <span className="text-gradient-brand">¿a dónde vamos?</span>
            </h1>
          </div>
          <LiveTicker base={142} jitter={6} intervalMs={2400} label="conductores cerca" />
        </div>

        {/* Map + destination input */}
        <Card className="overflow-hidden animate-fade-up delay-100 hover-lift">
          <MapMock className="h-56 sm:h-72 rounded-b-none border-0" driverLabel="3 conductores cerca" />
          <CardContent className="p-5 space-y-4">
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 rounded-2xl border bg-muted/30 px-4 py-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 rounded-full bg-brand-500/40 animate-ping-soft" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-brand-500 ring-4 ring-brand-100" />
                </span>
                <div className="text-sm">
                  <div className="text-xs text-muted-foreground">Ubicación actual</div>
                  <div className="font-medium">Calle 93 #12-45, Bogotá</div>
                </div>
                <Badge variant="success" className="ml-auto">GPS</Badge>
              </div>

              <div className="relative group">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-brand-500" />
                <Input
                  placeholder="¿A dónde vas?"
                  className="pl-10 h-12 text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
              {QUICK.map((q) => (
                <QuickActionButton key={q.label} label={q.label} icon={q.icon} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tiers */}
        <div className="animate-fade-up delay-200">
          <SectionTitle title="Elige tu viaje" hint="Precios estimados según distancia y demanda" />
          <div className="grid sm:grid-cols-3 gap-3">
            {TIERS.map((t) => {
              const Icon = t.icon;
              const active = selectedTier === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTier(t.id)}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl border p-4 text-left transition-all duration-300",
                    active
                      ? "border-brand-500 bg-gradient-to-br from-brand-50/80 via-white to-amber-50/60 shadow-glow-brand scale-[1.02]"
                      : "bg-card hover:border-brand-300 hover:-translate-y-0.5 hover:shadow-md"
                  )}
                >
                  {active && (
                    <span className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-300/30 blur-3xl" />
                  )}
                  <div className="relative flex items-start justify-between mb-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-300",
                        active
                          ? "bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-glow-brand"
                          : "bg-muted text-muted-foreground group-hover:bg-brand-50 group-hover:text-brand-600"
                      )}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    {active && <Badge variant="default">Seleccionado</Badge>}
                  </div>
                  <div className="relative font-semibold tracking-tight">{t.label}</div>
                  <div className="relative text-xs text-muted-foreground mt-0.5">{t.desc}</div>
                  <div className="relative flex items-end justify-between mt-3">
                    <span className={cn("text-sm font-semibold", active && "text-brand-700")}>
                      {formatCurrency(t.price)}
                    </span>
                    <span className="text-[11px] text-muted-foreground">{t.eta}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Price + CTA */}
        <Tilt3D intensity={5} glare={false} className="animate-fade-up delay-300">
          <Card className="relative overflow-hidden text-white border-transparent shimmer-wrap shadow-glow-dark">
            <div className="absolute inset-0 bg-premium-animated" />
            <div className="absolute -top-20 -right-10 h-60 w-60 rounded-full bg-brand-500/40 blur-3xl animate-float-slow" />
            <CardContent className="relative p-5 flex flex-col sm:flex-row sm:items-center gap-4 z-10">
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-white/60">Precio estimado</div>
                <div className="text-2xl font-semibold tracking-tight mt-0.5">
                  <CountUp
                    key={tier.id}
                    to={tier.price}
                    duration={900}
                    format={(n) => formatCurrency(n)}
                  />
                </div>
                <div className="text-xs text-white/60 mt-1">{tier.label} · llega en {tier.eta} · paga con OfficeRide</div>
              </div>
              <Button
                size="lg"
                className="sm:w-auto w-full shadow-glow-brand animate-glow-pulse hover:scale-[1.03] transition-transform"
              >
                Solicitar viaje <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </Tilt3D>
      </div>

      {/* Right column */}
      <div className="space-y-5">
        <div className="animate-fade-up delay-100">
          <TripStatusCard
            driverName="Mateo Herrera"
            vehicle="Kia Cerato Blanco"
            plate="GTH-781"
            rating={4.9}
            etaMin={4}
          />
        </div>

        <Card className="overflow-hidden border-brand-100 animate-fade-up delay-200 hover-lift">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 to-brand-50/60 pointer-events-none" />
          <CardContent className="relative p-5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge variant="gold" className="mb-2 shadow-glow-gold">Gold</Badge>
                <h3 className="font-semibold tracking-tight">Tu OfficeRide</h3>
                <p className="text-xs text-muted-foreground mt-1">Saldo y beneficios al alcance</p>
              </div>
              <Sparkles className="h-5 w-5 text-brand-500 animate-pulse-slow" />
            </div>
            <div className="relative overflow-hidden rounded-2xl text-white p-4 mb-3 shimmer-wrap shadow-glow-dark">
              <div className="absolute inset-0 bg-premium-animated" />
              <div className="relative z-10">
                <div className="text-[10px] uppercase tracking-widest text-white/60">Saldo</div>
                <div className="text-xl font-semibold mt-0.5">$124.350</div>
                <div className="font-mono text-xs tracking-[0.25em] text-white/70 mt-2">**** 4829</div>
              </div>
            </div>
            <Button variant="dark" className="w-full" asChild>
              <Link href="/app/card">
                Ver mi OfficeRide <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="animate-fade-up delay-300">
          <SectionTitle title="Promoción activa" />
          <PromoCard coupon={mockCoupons[0]} />
        </div>

        <Card className="animate-fade-up delay-500 hover-lift">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold tracking-tight">Tu próximo viaje</h3>
              <Badge variant="info">Programado</Badge>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex flex-col items-center">
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                  <span className="my-1 w-px flex-1 h-5 bg-gradient-to-b from-brand-300 to-neutral-300" />
                  <span className="h-2 w-2 rounded-full bg-neutral-900" />
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground text-xs">Sábado · 09:30</div>
                  <div className="font-medium">Casa → Aeropuerto El Dorado</div>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              <MapPin className="h-4 w-4" /> Editar viaje
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
