import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface QuickActionButtonProps {
  label: string;
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export function QuickActionButton({ label, icon: Icon, onClick, className }: QuickActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group flex flex-col items-center gap-2 rounded-2xl border bg-card p-3 text-center transition-all hover:border-brand-200 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        className
      )}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-500/15 dark:text-brand-300">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-xs font-medium leading-tight">{label}</span>
    </button>
  );
}
