"use client";

import { useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Crown,
  Gift,
  PiggyBank,
  Plus,
  QrCode,
  Send,
  Sparkles,
  Ticket,
  TrendingUp,
} from "lucide-react";

import { BenefitCard } from "@/components/cards/benefit-card";
import { CustomerCard } from "@/components/cards/customer-card";
import { StatCard } from "@/components/cards/stat-card";
import { CountUp } from "@/components/effects/count-up";
import { Tilt3D } from "@/components/effects/tilt-3d";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PageHeader } from "@/components/shared/page-header";
import { Progress } from "@/components/ui/progress";
import { QRMock } from "@/components/shared/qr-mock";
import { SectionTitle } from "@/components/shared/section-title";
import { Separator } from "@/components/ui/separator";
import { cn, formatCurrency, formatNumber } from "@/lib/utils";
import {
  mockBenefits,
  mockCustomerCard,
  mockMovements,
  mockUser,
} from "@/lib/mock-data";
import type { CardMovement } from "@/types";

const MOVEMENT_ICON: Record<CardMovement["type"], React.ComponentType<{ className?: string }>> = {
  topup: Plus,
  ride: ArrowUpRight,
  cashback: PiggyBank,
  coupon: Ticket,
};

const MOVEMENT_TONE: Record<CardMovement["type"], string> = {
  topup: "bg-emerald-100 text-emerald-700",
  ride: "bg-neutral-100 text-neutral-700",
  cashback: "bg-brand-100 text-brand-700",
  coupon: "bg-amber-100 text-amber-700",
};

export default function CardPage() {
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <div>
      <PageHeader
        title="OfficeRide Cliente"
        description="Tu tarjeta digital premium: saldo, puntos, beneficios y cashback en un solo lugar."
        action={
          <Badge variant="gold" className="hidden sm:inline-flex h-7 px-3 text-xs">
            <Crown className="h-3 w-3 mr-1" /> Nivel Gold
          </Badge>
        }
      />

      <div className="grid lg:grid-cols-5 gap-5">
        {/* Card + actions */}
        <div className="lg:col-span-3 space-y-5">
          <Tilt3D intensity={11} className="animate-fade-up">
            <CustomerCard
              data={mockCustomerCard}
              user={mockUser}
              size="lg"
              onShowQR={() => setQrOpen(true)}
            />
          </Tilt3D>

          {/* Actions */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <ActionTile icon={Plus} label="Recargar" tone="brand" />
            <ActionTile icon={QrCode} label="Ver QR" onClick={() => setQrOpen(true)} />
            <ActionTile icon={Send} label="Transferir" />
            <ActionTile icon={Gift} label="Beneficios" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <StatCard
              label="Saldo disponible"
              value={
                <CountUp
                  to={mockCustomerCard.balance}
                  format={(n) => formatCurrency(n)}
                />              }
              hint="Recargado el 13 May"
              icon={PiggyBank}
              tone="brand"
            />
            <StatCard
              label="Puntos acumulados"
              value={
                <CountUp
                  to={mockCustomerCard.points}
                  format={(n) => formatNumber(Math.round(n))}
                />              }
              hint="Cada $1.000 = 1 punto"
              icon={Sparkles}
            />
            <StatCard
              label="Cashback total"
              value={
                <CountUp
                  to={mockCustomerCard.cashback}
                  format={(n) => formatCurrency(n)}
                />              }
              hint="3% en cada viaje"
              icon={TrendingUp}
            />
            <StatCard
              label="Cupones activos"
              value={<CountUp to={4} /> as unknown as string}
              hint="Renovación 31 May"
              icon={Ticket}
            />
          </div>

          {/* Progress to next level */}
          <Card className="relative overflow-hidden text-white border-transparent shimmer-wrap shadow-glow-dark">
            <div className="absolute inset-0 bg-premium-animated" />
            <div className="absolute -top-20 -right-10 h-60 w-60 rounded-full bg-brand-500/40 blur-3xl animate-float-slow" />
            <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-amber-400/25 blur-3xl animate-float" />
            <CardContent className="relative p-6 space-y-4 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/60">Próximo nivel</div>
                  <div className="text-lg font-semibold tracking-tight mt-0.5 flex items-center gap-2">
                    <Crown className="h-4.5 w-4.5 text-amber-300 animate-pulse-slow" />
                    <span className="text-gradient-gold">{mockCustomerCard.nextLevel}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold">{mockCustomerCard.progressToNext}%</div>
                  <div className="text-xs text-white/60">para subir de nivel</div>
                </div>
              </div>
              <Progress value={mockCustomerCard.progressToNext} className="bg-white/15" />
              <p className="text-xs text-white/60 leading-relaxed">
                Suma <strong>3.260 puntos</strong> más este mes para desbloquear OfficeRide <strong>Plus</strong>:
                cashback del 5%, prioridad VIP y conductores premium garantizados.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 space-y-5">
          <div>
            <SectionTitle title="Beneficios OfficeRide" hint="Aprovéchalos en cada viaje" />
            <div className="grid grid-cols-2 gap-3">
              {mockBenefits.map((b) => (
                <BenefitCard key={b.id} benefit={b} />
              ))}
            </div>
          </div>

          <div>
            <SectionTitle title="Movimientos recientes" href="/app/wallet" hrefLabel="Ver wallet" />
            <Card>
              <CardContent className="p-2">
                <ul className="divide-y">
                  {mockMovements.map((m) => {
                    const Icon = MOVEMENT_ICON[m.type];
                    const positive = m.amount >= 0;
                    return (
                      <li
                        key={m.id}
                        className="flex items-center gap-3 px-3 py-3 transition-colors hover:bg-muted/40 rounded-2xl"
                      >
                        <div
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-2xl shrink-0",
                            MOVEMENT_TONE[m.type]
                          )}
                        >
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{m.description}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{m.date}</div>
                        </div>
                        <div
                          className={cn(
                            "text-sm font-semibold tabular-nums shrink-0 flex items-center gap-0.5",
                            positive ? "text-emerald-600" : "text-foreground"
                          )}
                        >
                          {positive ? (
                            <ArrowDownLeft className="h-3.5 w-3.5" />
                          ) : (
                            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                          )}
                          {formatCurrency(Math.abs(m.amount))}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* QR Dialog */}
      <Dialog open={qrOpen} onOpenChange={setQrOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <QrCode className="h-4.5 w-4.5 text-brand-500" />
              Tu código OfficeRide
            </DialogTitle>
            <DialogDescription>
              Escanéalo para validar beneficios o pagar en el viaje.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center pt-2 pb-1">
            <div className="rounded-3xl bg-gradient-to-br from-neutral-900 to-brand-700 p-6 mb-4">
              <QRMock size={220} />
            </div>
            <div className="text-center space-y-1">
              <div className="text-sm font-semibold">{mockUser.name}</div>
              <div className="text-xs text-muted-foreground font-mono tracking-widest">
                **** {mockCustomerCard.number}
              </div>
              <Badge variant="gold" className="mt-2 text-xs">
                <Crown className="h-3 w-3 mr-1" /> Nivel {mockCustomerCard.level}
              </Badge>
            </div>
            <Separator className="my-5" />
            <div className="grid grid-cols-3 gap-3 w-full text-center">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Saldo</div>
                <div className="text-sm font-semibold mt-0.5">{formatCurrency(mockCustomerCard.balance)}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Puntos</div>
                <div className="text-sm font-semibold mt-0.5">{formatNumber(mockCustomerCard.points)}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Cashback</div>
                <div className="text-sm font-semibold mt-0.5">{formatCurrency(mockCustomerCard.cashback)}</div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ActionTile({
  icon: Icon,
  label,
  tone = "default",
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  tone?: "default" | "brand";
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden flex items-center gap-3 rounded-2xl border p-3.5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        tone === "brand" && "border-transparent shimmer-wrap shadow-glow-brand text-white"
      )}
    >
      {tone === "brand" && <span className="absolute inset-0 bg-brand-animated" />}
      <span
        className={cn(
          "relative z-10 flex h-10 w-10 items-center justify-center rounded-xl shrink-0 transition-colors",
          tone === "brand"
            ? "bg-white/15 text-white backdrop-blur"
            : "bg-brand-50 text-brand-600 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white"
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="relative z-10 text-sm font-semibold">{label}</span>
    </button>
  );
}
