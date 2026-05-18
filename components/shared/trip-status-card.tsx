import { Car, Clock, Phone, Star } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TripStatusCardProps {
  driverName: string;
  vehicle: string;
  plate: string;
  rating: number;
  etaMin: number;
}

export function TripStatusCard({
  driverName,
  vehicle,
  plate,
  rating,
  etaMin,
}: TripStatusCardProps) {
  return (
    <Card className="relative overflow-hidden border-brand-100 bg-gradient-to-br from-brand-50/70 to-white dark:from-brand-500/10 dark:to-transparent hover-lift">
      <div className="pointer-events-none absolute -top-12 -right-8 h-32 w-32 rounded-full bg-brand-200/40 blur-3xl animate-float-slow" />
      <CardContent className="relative z-10 p-5">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="success" className="gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
            Conductor en camino
          </Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            ~{etaMin} min
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 ring-2 ring-brand-100">
            <AvatarFallback className="bg-gradient-to-br from-brand-400 to-brand-600 text-white font-semibold">
              {driverName.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm truncate">{driverName}</div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              {rating}
              <span>·</span>
              <span className="truncate">{vehicle}</span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Placa
            </div>
            <div className="font-mono text-sm font-semibold">{plate}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <Button variant="outline" size="sm" className="gap-1.5">
            <Phone className="h-3.5 w-3.5" />
            Llamar
          </Button>
          <Button variant="dark" size="sm" className="gap-1.5">
            <Car className="h-3.5 w-3.5" />
            Detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
