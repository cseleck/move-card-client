import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  hint?: string;
  icon?: LucideIcon;
  tone?: "default" | "brand" | "dark";
}

export function StatCard({ label, value, hint, icon: Icon, tone = "default" }: StatCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden",
        tone === "brand" && "border-transparent bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-500/10 dark:to-brand-500/5",
        tone === "dark" && "border-transparent bg-gradient-to-br from-neutral-900 to-neutral-800 text-white"
      )}
    >
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <span
            className={cn(
              "text-xs font-medium uppercase tracking-wider",
              tone === "dark" ? "text-white/60" : "text-muted-foreground"
            )}
          >
            {label}
          </span>
          {Icon && (
            <div
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-xl",
                tone === "brand" && "bg-white/70 text-brand-600",
                tone === "dark" && "bg-white/10 text-brand-300",
                tone === "default" && "bg-muted text-muted-foreground"
              )}
            >
              <Icon className="h-4.5 w-4.5" />
            </div>
          )}
        </div>
        <div className="text-2xl font-semibold tracking-tight">{value}</div>
        {hint && (
          <div
            className={cn(
              "text-xs mt-1",
              tone === "dark" ? "text-white/60" : "text-muted-foreground"
            )}
          >
            {hint}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
