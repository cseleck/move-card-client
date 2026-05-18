import { CreditCard, Trash2, Wallet } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { PaymentMethod } from "@/types";

interface PaymentMethodCardProps {
  method: PaymentMethod;
  onRemove?: () => void;
}

export function PaymentMethodCard({ method, onRemove }: PaymentMethodCardProps) {
  const isWallet = method.type === "wallet";
  return (
    <Card
      className={cn(
        "transition-all hover:shadow-md",
        isWallet && "border-transparent bg-gradient-to-br from-neutral-900 to-neutral-800 text-white"
      )}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-2xl shrink-0",
                isWallet
                  ? "bg-brand-500 text-white"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {isWallet ? <Wallet className="h-5 w-5" /> : <CreditCard className="h-5 w-5" />}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold truncate">
                  {method.brand}
                </span>
                {method.isDefault && (
                  <Badge variant="soft" className="text-[10px]">Predeterminada</Badge>
                )}
              </div>
              <div
                className={cn(
                  "text-xs mt-0.5",
                  isWallet ? "text-white/60" : "text-muted-foreground"
                )}
              >
                {isWallet ? "Saldo en tarjeta" : `Termina en •••• ${method.last4}`}
              </div>
            </div>
          </div>
          {!isWallet && onRemove && (
            <button
              onClick={onRemove}
              className="text-muted-foreground hover:text-destructive transition-colors p-2 rounded-xl hover:bg-muted/60"
              aria-label="Eliminar método"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
