import Link from "next/link";
import { ArrowRight, CreditCard, Lock, Mail, Phone, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/40 via-white to-brand-50/40 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2.5 mb-8">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-md shadow-brand-500/30">
            <CreditCard className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight text-lg">OfficeRide</span>
        </Link>

        <Card className="shadow-xl shadow-brand-500/5">
          <CardContent className="p-7">
            <div className="text-center mb-7">
              <h1 className="text-2xl font-semibold tracking-tight">Crea tu cuenta</h1>
              <p className="text-sm text-muted-foreground mt-1.5">
                Empieza gratis y recibe tu cupón de bienvenida
              </p>
            </div>

            <form className="space-y-4" action="/app">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="name" name="name" placeholder="María García" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" name="email" type="email" autoComplete="email" placeholder="tu@correo.com" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="phone" name="phone" type="tel" placeholder="+57 300 000 0000" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="password" name="password" type="password" autoComplete="new-password" placeholder="Mínimo 8 caracteres" className="pl-10" required />
                </div>
              </div>

              <label className="flex items-start gap-3 mt-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-input text-brand-500 focus:ring-brand-500"
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  Acepto los{" "}
                  <a href="#" className="text-brand-600 hover:text-brand-700 font-semibold">términos y condiciones</a>
                  {" "}y la{" "}
                  <a href="#" className="text-brand-600 hover:text-brand-700 font-semibold">política de privacidad</a>.
                </span>
              </label>

              <Button type="submit" size="lg" className="w-full mt-2">
                Crear cuenta <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              ¿Ya tienes cuenta?{" "}
              <Link href="/login" className="text-brand-600 hover:text-brand-700 font-semibold">
                Inicia sesión
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
