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
        "group relative overflow-hidden flex flex-col items-center gap-2 rounded-2xl border bg-card p-3 text-center transition-all duration-300 hover:border-brand-300 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        className
      )}
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-100/0 transition-all duration-500 group-hover:from-brand-50/60 group-hover:to-brand-100/40" />
      <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white group-hover:shadow-glow-brand group-hover:scale-110 dark:bg-brand-500/15 dark:text-brand-300">
        <Icon className="h-5 w-5" />
      </span>
      <span className="relative z-10 text-xs font-medium leading-tight">{label}</span>
    </button>
  );
}
