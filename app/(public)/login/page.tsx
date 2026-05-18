import Link from "next/link";
import { ArrowRight, CreditCard, Lock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-mesh-light" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-300/40 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl animate-float-reverse" />

      <div className="relative w-full max-w-md animate-fade-up">
        <Link href="/" className="group flex items-center justify-center gap-2.5 mb-8">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-glow-brand">
            <CreditCard className="h-5 w-5" />
            <span className="absolute -inset-1 rounded-2xl conic-ring opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-spin-slow" />
          </span>
          <span className="font-semibold tracking-tight text-lg">OfficeRide</span>
        </Link>

        <Card className="shadow-glow-brand backdrop-blur bg-white/85 dark:bg-neutral-900/75">
          <CardContent className="p-7">
            <div className="text-center mb-7">
              <h1 className="text-2xl font-semibold tracking-tight">
                Bienvenido <span className="text-gradient-brand">de vuelta</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-1.5">
                Ingresa para gestionar tus viajes y tu OfficeRide
              </p>
            </div>

            <form className="space-y-4" action="/app">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" name="email" type="email" autoComplete="email" placeholder="tu@correo.com" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link href="#" className="text-xs text-brand-600 hover:text-brand-700 font-semibold">
                    Olvidé mi contraseña
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="password" name="password" type="password" autoComplete="current-password" placeholder="••••••••" className="pl-10" required />
                </div>
              </div>

              <Button type="submit" className="w-full shadow-glow-brand hover:scale-[1.01] transition-transform" size="lg">
                Entrar <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="relative my-6">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-xs text-muted-foreground">
                o continúa con
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <GoogleIcon />
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <AppleIcon />
                Apple
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-7">
              ¿Aún no tienes cuenta?{" "}
              <Link href="/register" className="text-brand-600 hover:text-brand-700 font-semibold">
                Crea una gratis
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.28-4.74 3.28-8.07z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.99.66-2.26 1.06-3.71 1.06-2.85 0-5.27-1.92-6.13-4.51H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.87 14.14A6.55 6.55 0 0 1 5.53 12c0-.74.13-1.46.34-2.14V7.02H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.98l3.69-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.02l3.69 2.84C6.73 7.3 9.15 5.38 12 5.38z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M16.365 1.43c0 1.14-.42 2.2-1.26 3.06-.86.87-1.99 1.4-3.13 1.31-.13-1.16.41-2.32 1.23-3.13.86-.86 2.07-1.4 3.16-1.45v.21zm4.27 17.36c-.59 1.37-.88 1.98-1.64 3.18-1.06 1.68-2.56 3.77-4.42 3.79-1.66.02-2.09-1.07-4.33-1.06-2.24.01-2.71 1.08-4.37 1.06-1.86-.03-3.28-1.95-4.34-3.63-2.95-4.7-3.26-10.21-1.44-13.13 1.29-2.07 3.34-3.28 5.26-3.28 1.96 0 3.2 1.07 4.82 1.07 1.57 0 2.53-1.07 4.8-1.07 1.71 0 3.52.93 4.8 2.54-4.22 2.31-3.53 8.35.86 10.53z" />
    </svg>
  );
}
