"use client";

import { useMemo, useState } from "react";
import { Car, Inbox, MapPin, Receipt, Star } from "lucide-react";

import { RideCard, STATUS_LABEL, TIER_LABEL } from "@/components/cards/ride-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EmptyState } from "@/components/shared/empty-state";
import { PageHeader } from "@/components/shared/page-header";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { formatCurrency } from "@/lib/utils";
import { mockRides } from "@/lib/mock-data";
import type { Ride, RideStatus } from "@/types";

const FILTERS: { key: RideStatus | "all"; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "completed", label: "Completados" },
  { key: "in_progress", label: "En curso" },
  { key: "cancelled", label: "Cancelados" },
];

export default function RidesPage() {
  const [active, setActive] = useState<string>("all");
  const [selected, setSelected] = useState<Ride | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? mockRides : mockRides.filter((r) => r.status === active)),
    [active]
  );

  return (
    <div>
      <PageHeader
        title="Mis viajes"
        description="Revisa tu historial completo, descarga recibos y vuelve a pedir rutas frecuentes."
        action={
          <Button variant="outline" className="hidden sm:inline-flex">
            <Receipt className="h-4 w-4" /> Descargar resumen
          </Button>
        }
      />

      <Tabs value={active} onValueChange={setActive}>
        <TabsList className="h-auto p-1 flex-wrap gap-1 bg-muted/60">
          {FILTERS.map((f) => (
            <TabsTrigger key={f.key} value={f.key}>
              {f.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {FILTERS.map((f) => (
          <TabsContent key={f.key} value={f.key} className="mt-5">
            {filtered.length === 0 ? (
              <EmptyState
                icon={Inbox}
                title="Sin viajes por aquí"
                description="Cuando tengas viajes con este estado, los verás listados aquí."
                action={<Button>Pedir un viaje</Button>}
              />
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3.5">
                {filtered.map((ride) => (
                  <RideCard key={ride.id} ride={ride} onClick={() => setSelected(ride)} />
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-md">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Receipt className="h-4.5 w-4.5 text-brand-500" />
                  Recibo del viaje
                </DialogTitle>
                <DialogDescription>
                  {selected.date} · {selected.time} · {TIER_LABEL[selected.tier]}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-2xl border p-3">
                  <Avatar className="h-11 w-11">
                    <AvatarFallback className="bg-gradient-to-br from-brand-400 to-brand-600 text-white">
                      {selected.driver.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm truncate">{selected.driver.name}</div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      {selected.driver.rating} · {selected.driver.vehicle}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Placa</div>
                    <div className="font-mono text-xs font-semibold">{selected.driver.plate}</div>
                  </div>
                </div>

                <div className="rounded-2xl border p-4 space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                    <div>
                      <div className="text-xs text-muted-foreground">Origen</div>
                      <div className="font-medium">{selected.origin}</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" />
                    <div>
                      <div className="text-xs text-muted-foreground">Destino</div>
                      <div className="font-medium">{selected.destination}</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-muted/50 p-4 space-y-2 text-sm">
                  <Row label="Tarifa base" value={formatCurrency(selected.cost * 0.85)} />
                  <Row label="Tiempo y distancia" value={`${selected.distanceKm} km · ${selected.durationMin}m`} />
                  <Row label="Descuento MoveCard" value="-10%" highlight />
                  <Separator />
                  <Row
                    label="Total"
                    value={selected.status === "cancelled" ? "—" : formatCurrency(selected.cost)}
                    bold
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant={STATUS_LABEL[selected.status].variant}>
                    {STATUS_LABEL[selected.status].label}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <MapPin className="h-3.5 w-3.5" /> Repetir
                    </Button>
                    <Button variant="dark" size="sm">
                      <Car className="h-3.5 w-3.5" /> Soporte
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Row({
  label,
  value,
  highlight,
  bold,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  bold?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span
        className={
          (highlight ? "text-emerald-600 " : "") + (bold ? "font-semibold" : "font-medium")
        }
      >
        {value}
      </span>
    </div>
  );
}
