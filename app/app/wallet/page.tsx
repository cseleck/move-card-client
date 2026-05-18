"use client";

import { useState } from "react";
import { CreditCard, Plus, Sparkles, Wallet } from "lucide-react";

import { PaymentMethodCard } from "@/components/cards/payment-method-card";
import { PromoCard } from "@/components/cards/promo-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/shared/page-header";
import { SectionTitle } from "@/components/shared/section-title";
import { formatCurrency } from "@/lib/utils";
import {
  mockCoupons,
  mockCustomerCard,
  mockPaymentMethods,
} from "@/lib/mock-data";

export default function WalletPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <PageHeader
        title="Wallet"
        description="Métodos de pago, saldo MoveCard y promociones disponibles."
        action={
          <Button onClick={() => setOpen(true)} className="hidden sm:inline-flex">
            <Plus className="h-4 w-4" /> Agregar método
          </Button>
        }
      />

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-6">
          {/* Saldo MoveCard */}
          <Card className="overflow-hidden border-transparent bg-gradient-to-br from-neutral-900 to-brand-700 text-white">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-300" />
                  <span className="text-xs uppercase tracking-widest text-white/60">Saldo MoveCard</span>
                </div>
                <span className="rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 px-2.5 py-0.5 text-[11px] font-semibold text-amber-950">
                  Gold
                </span>
              </div>
              <div>
                <div className="text-3xl font-semibold tracking-tight">
                  {formatCurrency(mockCustomerCard.balance)}
                </div>
                <div className="text-xs text-white/60 mt-1 font-mono tracking-[0.25em]">
                  **** {mockCustomerCard.number}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <Button size="sm" className="bg-white text-neutral-900 hover:bg-white/90">
                  <Plus className="h-3.5 w-3.5" /> Recargar
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Transferir
                </Button>
              </div>
            </CardContent>
          </Card>

          <div>
            <SectionTitle
              title="Métodos de pago"
              hint="Selecciona la tarjeta predeterminada para tus viajes"
            />
            <div className="grid sm:grid-cols-2 gap-3.5">
              {mockPaymentMethods.map((m) => (
                <PaymentMethodCard key={m.id} method={m} onRemove={() => {}} />
              ))}
              <button
                onClick={() => setOpen(true)}
                className="rounded-3xl border-2 border-dashed flex items-center justify-center gap-2 p-6 text-sm font-medium text-muted-foreground hover:text-brand-600 hover:border-brand-300 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Agregar tarjeta
              </button>
            </div>
          </div>

          <div>
            <SectionTitle title="Promociones y cupones" hint="Activos en tu cuenta" />
            <div className="grid sm:grid-cols-2 gap-3.5">
              {mockCoupons.map((c) => (
                <PromoCard key={c.id} coupon={c} onApply={() => {}} />
              ))}
            </div>
          </div>
        </div>

        {/* Side */}
        <div className="space-y-5">
          <Card>
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Wallet className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold tracking-tight">Resumen del mes</h3>
                  <p className="text-xs text-muted-foreground">Mayo 2026</p>
                </div>
              </div>
              <ul className="text-sm space-y-2.5">
                <Row label="Gastado en viajes" value={formatCurrency(184250)} />
                <Row label="Cashback recibido" value={formatCurrency(8540)} positive />
                <Row label="Cupones aplicados" value={formatCurrency(12100)} positive />
                <Row label="Recargas" value={formatCurrency(200000)} />
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50/60 to-brand-50/60 border-brand-100">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-white">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold tracking-tight">Recarga automática</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Activa la recarga automática cuando tu saldo baje de $30.000.
                    Nunca pierdas un viaje.
                  </p>
                  <Button size="sm" className="mt-3">Activar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Add card dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Agregar método de pago</DialogTitle>
            <DialogDescription>
              Los datos se almacenan de forma segura y encriptada.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-3.5">
            <div className="space-y-2">
              <Label htmlFor="card-name">Nombre en la tarjeta</Label>
              <Input id="card-name" placeholder="Como aparece en la tarjeta" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="card-number">Número</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" inputMode="numeric" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="card-exp">Vencimiento</Label>
                <Input id="card-exp" placeholder="MM/AA" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="card-cvc">CVC</Label>
                <Input id="card-cvc" placeholder="123" inputMode="numeric" />
              </div>
            </div>
          </form>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Guardar tarjeta</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Row({
  label,
  value,
  positive,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <li className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={positive ? "font-semibold text-emerald-600" : "font-semibold"}>
        {value}
      </span>
    </li>
  );
}
