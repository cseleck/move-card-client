import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  hint?: string;
  href?: string;
  hrefLabel?: string;
  className?: string;
}

export function SectionTitle({ title, hint, href, hrefLabel = "Ver todo", className }: SectionTitleProps) {
  return (
    <div className={cn("flex items-end justify-between mb-3", className)}>
      <div>
        <h2 className="text-base font-semibold tracking-tight">{title}</h2>
        {hint && <p className="text-xs text-muted-foreground mt-0.5">{hint}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-0.5 text-xs font-semibold text-brand-600 hover:text-brand-700"
        >
          {hrefLabel}
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
