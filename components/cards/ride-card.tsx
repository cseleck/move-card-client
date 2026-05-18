"use client";

import { Car, Clock, MapPin, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn, formatCurrency } from "@/lib/utils";
import type { Ride } from "@/types";

const STATUS_LABEL: Record<Ride["status"], { label: string; variant: "success" | "destructive" | "info" }> = {
  completed: { label: "Completado", variant: "success" },
  cancelled: { label: "Cancelado", variant: "destructive" },
  in_progress: { label: "En curso", variant: "info" },
};

const TIER_LABEL: Record<Ride["tier"], string> = {
  economy: "Económico",
  comfort: "Comfort",
  executive: "Ejecutivo",
};

interface RideCardProps {
  ride: Ride;
  onClick?: () => void;
}

export function RideCard({ ride, onClick }: RideCardProps) {
  const status = STATUS_LABEL[ride.status];
  return (
    <Card
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden hover-lift",
        onClick && "cursor-pointer"
      )}
    >
      <span className="pointer-events-none absolute inset-x-0 -top-px h-px hairline-glow opacity-0 group-hover:opacity-100 transition-opacity" />
      <CardContent className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{ride.date}</span>
            <span>·</span>
            <span>{ride.time}</span>
          </div>
          <Badge variant={status.variant}>{status.label}</Badge>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex flex-col items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-500 ring-4 ring-brand-100" />
              <span className="my-1 w-px flex-1 h-6 bg-gradient-to-b from-brand-300 to-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-900" />
            </div>
            <div className="flex-1 space-y-2">
              <div>
                <div className="text-xs text-muted-foreground">Origen</div>
                <div className="text-sm font-medium leading-tight">{ride.origin}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Destino</div>
                <div className="text-sm font-medium leading-tight">{ride.destination}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-muted-foreground shrink-0">
              <Car className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">{ride.driver.name}</div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span>{ride.driver.rating}</span>
                <span>·</span>
                <span className="truncate">{TIER_LABEL[ride.tier]}</span>
              </div>
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-sm font-semibold">
              {ride.status === "cancelled" ? "—" : formatCurrency(ride.cost)}
            </div>
            <div className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{ride.distanceKm} km · {ride.durationMin}m</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export { TIER_LABEL, STATUS_LABEL };
