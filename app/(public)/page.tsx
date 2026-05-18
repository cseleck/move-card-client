import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Car,
  CreditCard,
  Gift,
  Headphones,
  MapPin,
  Percent,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Zap,
    title: "Tiempo real",
    desc: "Asignamos el conductor más cercano en segundos, con seguimiento en vivo del viaje.",
  },
  {
    icon: Banknote,
    title: "Precios claros",
    desc: "Tarifa estimada antes de confirmar. Sin sorpresas ni cobros ocultos.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad primero",
    desc: "Conductores verificados, botón SOS, viaje compartido y soporte 24/7.",
  },
  {
    icon: Sparkles,
    title: "Beneficios MoveCard",
    desc: "Sube de nivel, gana cashback y desbloquea cupones cada mes.",
  },
];

const payments = [
  { label: "Tarjeta crédito/débito", icon: CreditCard },
  { label: "Saldo MoveCard", icon: Sparkles },
  { label: "Cupones y promos", icon: Gift },
  { label: "Pago en efectivo", icon: Banknote },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-brand-50/30">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-transparent bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-md shadow-brand-500/30">
              <CreditCard className="h-4.5 w-4.5" />
            </span>
            <span className="font-semibold tracking-tight text-lg">MoveCard</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#benefits" className="hover:text-foreground transition-colors">Beneficios</a>
            <a href="#card" className="hover:text-foreground transition-colors">MoveCard</a>
            <a href="#safety" className="hover:text-foreground transition-colors">Seguridad</a>
            <a href="#pay" className="hover:text-foreground transition-colors">Pagos</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">Crear cuenta</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-32 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <Badge variant="soft" className="mb-5">
              <Sparkles className="h-3 w-3 mr-1.5" />
              Nuevo · MoveCard Gold
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
              Muévete por la ciudad de forma{" "}
              <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">
                rápida, segura y simple
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mt-5 max-w-lg leading-relaxed">
              Una experiencia de movilidad pensada para clientes que valoran su tiempo.
              Pide tu viaje, gana cashback y desbloquea beneficios premium con MoveCard.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Button size="lg" asChild>
                <Link href="/app">
                  Pedir viaje <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#card">Ver beneficios</Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9 / 5</span>
              </div>
              <span className="text-sm text-muted-foreground">+150.000 clientes activos</span>
            </div>
          </div>

          <PhoneMock />
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="soft" className="mb-3">Beneficios</Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Todo lo que necesitas para moverte mejor
            </h2>
            <p className="text-muted-foreground mt-3">
              Diseñamos cada detalle para que cada viaje sea predecible, cómodo y rentable.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold tracking-tight">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="py-20 bg-gradient-to-b from-white to-brand-50/40">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="soft" className="mb-3">Seguridad</Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Tu seguridad es nuestra prioridad
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg leading-relaxed">
              Verificación de identidad, monitoreo del viaje, soporte humano y herramientas
              pensadas para que viajes con tranquilidad de día y de noche.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: ShieldCheck, label: "Conductores verificados y calificados" },
                { icon: MapPin, label: "Seguimiento del viaje en tiempo real" },
                { icon: Headphones, label: "Soporte 24/7 con respuesta en minutos" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="relative overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 text-white border-transparent">
            <CardContent className="p-8 space-y-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-slow" />
                <span className="text-xs uppercase tracking-widest text-white/60">Modo seguro activo</span>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">SOS, ruta verificada y contactos de confianza</div>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  Activa alertas para tus familiares, comparte tu viaje y accede al botón SOS
                  conectado directamente con nuestro equipo de seguridad.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-2">
                {["SOS", "Compartir", "Verificación"].map((k) => (
                  <div key={k} className="rounded-2xl bg-white/5 border border-white/10 p-3 text-xs font-medium text-center">
                    {k}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payments */}
      <section id="pay" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 text-center">
          <Badge variant="soft" className="mb-3">Métodos de pago</Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
            Paga como prefieras, viaje a viaje
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Combina saldo MoveCard, tarjetas y cupones. Tú decides cómo pagar cada vez.
          </p>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {payments.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-3xl border bg-card p-5 flex flex-col items-center gap-3 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MoveCard section */}
      <section id="card" className="py-20 bg-gradient-to-b from-brand-50/40 to-white">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="gold" className="mb-3">MoveCard Cliente</Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Una tarjeta digital que viaja contigo
            </h2>
            <p className="text-muted-foreground mt-3 leading-relaxed max-w-lg">
              Saldo recargable, puntos por cada viaje, cashback automático y beneficios
              que mejoran a medida que avanzas de nivel.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                { icon: Percent, label: "10% en viajes seleccionados" },
                { icon: Zap, label: "Prioridad en horas pico" },
                { icon: Headphones, label: "Soporte preferente" },
                { icon: Gift, label: "Cupones mensuales" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 rounded-2xl border bg-card p-3.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button size="lg" asChild>
                <Link href="/app/card">
                  Conoce MoveCard <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <CardShowcase />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-10 lg:p-14 text-white">
            <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl" />
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Listos cuando lo estés.
                </h3>
                <p className="text-white/70 mt-2 max-w-lg">
                  Crea tu cuenta gratis y pide tu primer viaje con un cupón de bienvenida.
                </p>
              </div>
              <div className="flex gap-3">
                <Button size="lg" asChild>
                  <Link href="/register">Crear cuenta</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white" asChild>
                  <Link href="/app">Ir a la app</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
                <CreditCard className="h-4.5 w-4.5" />
              </span>
              <span className="font-semibold tracking-tight">MoveCard</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              Movilidad urbana premium para clientes exigentes. Una plataforma, infinitas rutas.
            </p>
          </div>
          {[
            {
              title: "Producto",
              items: ["Pedir viaje", "MoveCard", "Wallet", "Cupones"],
            },
            {
              title: "Compañía",
              items: ["Sobre nosotros", "Ciudades", "Carreras", "Prensa"],
            },
            {
              title: "Soporte",
              items: ["Ayuda", "Seguridad", "Contacto", "Términos"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold mb-3 text-sm">{col.title}</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {col.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-foreground transition-colors">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} MoveCard. Todos los derechos reservados.</span>
            <span>Hecho con cuidado para clientes premium.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-4 bg-gradient-to-br from-brand-200/30 via-amber-100/40 to-transparent blur-3xl" />
      <div className="relative rounded-[2.5rem] border bg-neutral-900 p-3 shadow-2xl shadow-brand-500/20">
        <div className="absolute left-1/2 top-3 -translate-x-1/2 h-5 w-24 rounded-full bg-neutral-800" />
        <div className="rounded-[2rem] overflow-hidden bg-white">
          <div className="relative h-64 bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 240" preserveAspectRatio="none">
              <path d="M30 200 C 100 200, 110 100, 200 100 S 260 40, 290 30" stroke="#ff7a00" strokeWidth="4" strokeDasharray="2 8" fill="none" strokeLinecap="round" />
            </svg>
            <div className="absolute left-6 bottom-10 h-7 w-7 rounded-full bg-brand-500 ring-4 ring-brand-100 flex items-center justify-center text-white">
              <MapPin className="h-3.5 w-3.5" />
            </div>
            <div className="absolute right-6 top-10 h-7 w-7 rounded-full bg-neutral-900 ring-4 ring-neutral-200 flex items-center justify-center text-white">
              <MapPin className="h-3.5 w-3.5" />
            </div>
          </div>
          <div className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Llega en ~4 min</span>
              <Badge variant="success">En camino</Badge>
            </div>
            <div className="rounded-2xl border p-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Car className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">Mazda 3 · Gris</div>
                <div className="text-xs text-muted-foreground">JKR-487 · ★ 4.9</div>
              </div>
              <span className="font-mono text-xs font-semibold">$18.200</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button size="sm" variant="outline">Compartir</Button>
              <Button size="sm" variant="dark">Detalles</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-4 bg-gradient-to-br from-amber-200/40 via-brand-200/30 to-transparent blur-3xl" />
      <div className="relative aspect-[16/10] rounded-3xl overflow-hidden text-white shadow-2xl shadow-brand-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900 to-brand-700" />
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl" />
        <div className="relative h-full p-7 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/70">
                <Sparkles className="h-3 w-3 text-brand-300" />
                MoveCard · Cliente
              </div>
              <div className="mt-3">
                <span className="rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 px-2.5 py-0.5 text-[11px] font-semibold text-amber-950">
                  Gold
                </span>
              </div>
            </div>
            <Smartphone className="h-5 w-5 text-white/60" />
          </div>
          <div>
            <div className="font-mono text-lg tracking-[0.3em] text-white/90 mb-1">
              •••• •••• •••• 4829
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">Titular</div>
                <div className="text-sm font-semibold mt-0.5">Juan C. García</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-widest text-white/50">Saldo</div>
                <div className="text-lg font-semibold mt-0.5">$124.350</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
