import { Locate, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

interface MapMockProps {
  className?: string;
  showRoute?: boolean;
  driverLabel?: string;
}

export function MapMock({ className, showRoute = true, driverLabel }: MapMockProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800",
        className
      )}
    >
      {/* grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* roads */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 inset-x-0 h-3 bg-white/80 dark:bg-neutral-700/40" />
        <div className="absolute top-2/3 inset-x-0 h-2 bg-white/60 dark:bg-neutral-700/30" />
        <div className="absolute inset-y-0 left-1/4 w-3 bg-white/80 dark:bg-neutral-700/40" />
        <div className="absolute inset-y-0 right-1/3 w-2 bg-white/60 dark:bg-neutral-700/30" />
      </div>

      {/* parks */}
      <div className="absolute top-6 right-8 h-16 w-20 rounded-2xl bg-emerald-200/70 dark:bg-emerald-900/30" />
      <div className="absolute bottom-10 left-10 h-12 w-24 rounded-2xl bg-emerald-200/70 dark:bg-emerald-900/30" />

      {/* route */}
      {showRoute && (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 240"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M40 180 C 110 180, 130 120, 200 120 S 320 80, 360 60"
            stroke="#ff7a00"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="2 8"
            fill="none"
          />
          <path
            d="M40 180 C 110 180, 130 120, 200 120 S 320 80, 360 60"
            stroke="#ff7a00"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.25"
          />
        </svg>
      )}

      {/* origin pin */}
      <div className="absolute left-[10%] bottom-[22%]">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-brand-500/30 animate-pulse-slow" />
          <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/40">
            <Locate className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>

      {/* destination pin */}
      <div className="absolute right-[10%] top-[20%]">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg">
          <MapPin className="h-4 w-4" />
        </div>
      </div>

      {/* driver chip */}
      {driverLabel && (
        <div className="absolute top-4 left-4 rounded-2xl bg-background/90 backdrop-blur px-3 py-2 shadow-md border text-xs flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-slow" />
          {driverLabel}
        </div>
      )}
    </div>
  );
}
