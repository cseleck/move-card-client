"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: "slow" | "normal";
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  reverse = false,
  speed = "normal",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden mask-fade-x",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-6 pr-6",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
