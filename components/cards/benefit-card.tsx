import {
  Headphones,
  Percent,
  Ticket,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Benefit } from "@/types";

const ICONS: Record<string, LucideIcon> = {
  Percent,
  Zap,
  Headphones,
  Ticket,
};

interface BenefitCardProps {
  benefit: Benefit;
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = ICONS[benefit.icon] ?? Ticket;
  return (
    <Card className="h-full transition-all hover:shadow-md hover:-translate-y-0.5">
      <CardContent className="p-5">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 text-brand-600 dark:from-brand-500/20 dark:to-brand-500/10 dark:text-brand-300">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-sm font-semibold leading-tight">{benefit.title}</h3>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          {benefit.description}
        </p>
      </CardContent>
    </Card>
  );
}
