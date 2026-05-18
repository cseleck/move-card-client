import { ChevronRight, Gift } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Coupon } from "@/types";

interface PromoCardProps {
  coupon: Coupon;
  onApply?: () => void;
}

export function PromoCard({ coupon, onApply }: PromoCardProps) {
  return (
    <Card className="group relative overflow-hidden border-brand-100 bg-gradient-to-br from-brand-50 to-white dark:from-brand-500/10 dark:to-transparent hover-lift shimmer-wrap">
      <div className="absolute -top-10 -right-8 h-32 w-32 rounded-full bg-brand-200/40 blur-3xl animate-float-slow" />
      <CardContent className="relative p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-glow-brand shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Gift className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="default" className="text-[10px]">{coupon.discount}</Badge>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                {coupon.code}
              </span>
            </div>
            <h3 className="text-sm font-semibold leading-tight">{coupon.title}</h3>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{coupon.description}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[11px] text-muted-foreground">Vence {coupon.expiresAt}</span>
              {onApply && (
                <button
                  onClick={onApply}
                  className="inline-flex items-center gap-0.5 text-xs font-semibold text-brand-600 hover:text-brand-700"
                >
                  Aplicar <ChevronRight className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
