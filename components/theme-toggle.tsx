"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  variant?: "ghost" | "outline";
}

export function ThemeToggle({ className, variant = "ghost" }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = mounted ? resolvedTheme ?? theme : undefined;
  const isDark = current === "dark";

  return (
    <Button
      variant={variant}
      size="icon"
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn("relative overflow-hidden", className)}
    >
      <Sun
        className={cn(
          "h-5 w-5 transition-all duration-500",
          mounted && isDark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 transition-all duration-500",
          mounted && isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        )}
      />
    </Button>
  );
}
