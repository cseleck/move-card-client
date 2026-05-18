import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          50: "#fff3e6",
          100: "#ffe4cc",
          200: "#ffc899",
          300: "#ffac66",
          400: "#ff9033",
          500: "#ff7a00",
          600: "#e66e00",
          700: "#b35600",
          800: "#803d00",
          900: "#4d2500",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shimmer-line":
          "linear-gradient(110deg, transparent 0%, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%, transparent 100%)",
      },
      transitionTimingFunction: {
        emphasized: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        "glow-brand":
          "0 10px 40px -10px rgba(255,122,0,0.45), 0 0 0 1px rgba(255,122,0,0.15)",
        "glow-gold":
          "0 10px 40px -10px rgba(245,158,11,0.5), 0 0 0 1px rgba(252,211,77,0.2)",
        "glow-dark":
          "0 20px 60px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.05)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.08)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(2deg)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(12px) rotate(-2deg)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(255,122,0,0.4), 0 10px 30px -10px rgba(255,122,0,0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px 0 rgba(255,122,0,0.6), 0 10px 40px -10px rgba(255,122,0,0.5)",
          },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        dash: {
          to: { strokeDashoffset: "-40" },
        },
        "ping-soft": {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        "ring-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-slow": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.6)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        aurora: {
          "0%, 100%": {
            transform: "translate(0%, 0%) rotate(0deg) scale(1)",
          },
          "33%": {
            transform: "translate(8%, -6%) rotate(120deg) scale(1.1)",
          },
          "66%": {
            transform: "translate(-6%, 8%) rotate(240deg) scale(0.95)",
          },
        },
        "word-up": {
          "0%": { opacity: "0", transform: "translateY(100%) rotateX(-40deg)" },
          "20%, 80%": { opacity: "1", transform: "translateY(0) rotateX(0deg)" },
          "100%": { opacity: "0", transform: "translateY(-100%) rotateX(40deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "drift-1": {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(40px, -30px)" },
        },
        "drift-2": {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(-30px, 40px)" },
        },
        "drift-3": {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(50px, 50px)" },
        },
        "tick-pulse": {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(16,185,129,0.5)" },
          "50%": { transform: "scale(1.05)", boxShadow: "0 0 0 8px rgba(16,185,129,0)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-1px, 1px)" },
          "40%": { transform: "translate(1px, -1px)" },
          "60%": { transform: "translate(-1px, -1px)" },
          "80%": { transform: "translate(1px, 1px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse-slow 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 3s linear infinite",
        float: "float 5s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "float-reverse": "float-reverse 7s ease-in-out infinite",
        "gradient-shift": "gradient-shift 15s ease infinite",
        "gradient-fast": "gradient-shift 6s ease infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "scale-in": "scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        "glow-pulse": "glow-pulse 2.6s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        dash: "dash 1.4s linear infinite",
        "ping-soft": "ping-soft 2.6s cubic-bezier(0,0,0.2,1) infinite",
        "ring-rotate": "ring-rotate 18s linear infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee-slow 60s linear infinite",
        wiggle: "wiggle 1.4s ease-in-out infinite",
        "bounce-soft": "bounce-soft 3s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.215,0.61,0.355,1) infinite",
        aurora: "aurora 18s ease-in-out infinite",
        twinkle: "twinkle 3.4s ease-in-out infinite",
        "drift-1": "drift-1 14s ease-in-out infinite",
        "drift-2": "drift-2 18s ease-in-out infinite",
        "drift-3": "drift-3 22s ease-in-out infinite",
        "tick-pulse": "tick-pulse 2s ease-in-out infinite",
        glitch: "glitch 0.4s steps(2) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
