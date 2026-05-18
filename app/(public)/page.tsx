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
import { ThemeToggle } from "@/components/theme-toggle";
import { CountUp } from "@/components/effects/count-up";
import { LiveTicker } from "@/components/effects/live-ticker";
import { Marquee } from "@/components/effects/marquee";
import { Particles } from "@/components/effects/particles";
import { Spotlight } from "@/components/effects/spotlight";
import { Tilt3D } from "@/components/effects/tilt-3d";
import { WordCycler } from "@/components/effects/word-cycler";

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
    title: "Beneficios OfficeRide",
    desc: "Sube de nivel, gana cashback y desbloquea cupones cada mes.",
  },
];

const payments = [
  { label: "Tarjeta crédito/débito", icon: CreditCard },
  { label: "Saldo OfficeRide", icon: Sparkles },
  { label: "Cupones y promos", icon: Gift },
  { label: "Pago en efectivo", icon: Banknote },
];

const CITIES = [
  "Bogotá",
  "Medellín",
  "Cali",
  "Cartagena",
  "Barranquilla",
  "Bucaramanga",
  "Pereira",
  "Manizales",
  "Santa Marta",
  "Cúcuta",
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Global background mesh + aurora */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-mesh-light" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-soft opacity-60 [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.6),transparent_70%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full aurora-blob opacity-40 animate-aurora" />
        <div className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full aurora-blob opacity-30 animate-aurora [animation-delay:-6s]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-black/5 dark:border-white/5 glass">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-glow-brand">
              <CreditCard className="h-4.5 w-4.5" />
              <span className="absolute -inset-1 rounded-2xl conic-ring opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-spin-slow" />
            </span>
            <span className="font-semibold tracking-tight text-lg">OfficeRide</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#benefits" className="hover:text-foreground transition-colors">Beneficios</a>
            <a href="#card" className="hover:text-foreground transition-colors">OfficeRide</a>
            <a href="#safety" className="hover:text-foreground transition-colors">Seguridad</a>
            <a href="#pay" className="hover:text-foreground transition-colors">Pagos</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
              <Link href="/login">Entrar</Link>
            </Button>
            <Button size="sm" asChild className="shadow-glow-brand animate-glow-pulse">
              <Link href="/register">Crear cuenta</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Spotlight follows cursor inside the hero */}
        <Spotlight />
        <Particles count={36} className="opacity-70" />

        <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-brand-300/40 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute top-40 -left-32 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl animate-float-reverse" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-6xl px-4 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-32 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5 animate-fade-up flex-wrap">
              <Badge variant="soft" className="shadow-sm">
                <Sparkles className="h-3 w-3 mr-1.5 animate-pulse-slow" />
                Nuevo · OfficeRide Gold
              </Badge>
              <LiveTicker base={5234} jitter={20} label="viajes activos ahora" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance animate-fade-up delay-100">
              Muévete por la ciudad de forma{" "}
              <WordCycler
                words={["rápida", "segura", "simple", "premium"]}
                interval={2400}
              />
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mt-5 max-w-lg leading-relaxed animate-fade-up delay-200">
              Una experiencia de movilidad pensada para clientes que valoran su tiempo.
              Pide tu viaje, gana cashback y desbloquea beneficios premium con OfficeRide.
            </p>
            <div className="flex flex-wrap gap-3 mt-7 animate-fade-up delay-300">
              <Button
                size="lg"
                asChild
                className="shadow-glow-brand animate-glow-pulse hover:scale-[1.04] transition-transform"
              >
                <Link href="/app">
                  Pedir viaje <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:bg-brand-50"
              >
                <Link href="#card">Ver beneficios</Link>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md animate-fade-up delay-500">
              <HeroStat
                value={<CountUp to={150000} format={(n) => Math.round(n / 1000).toString()} />}
                suffix="k+"
                label="Clientes"
              />
              <HeroStat
                value={<CountUp to={4.9} decimals={1} duration={1800} />}
                suffix=" / 5"
                label="Rating"
                icon={<Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />}
              />
              <HeroStat
                value={<CountUp to={24} />}
                suffix="/7"
                label="Soporte"
              />
            </div>
          </div>

          <div className="animate-fade-up delay-300">
            <Tilt3D intensity={9}>
              <PhoneMock />
            </Tilt3D>
          </div>
        </div>

        {/* hairline divider */}
        <div className="relative h-px max-w-5xl mx-auto hairline-glow" />
      </section>

      {/* Cities marquee */}
      <section className="relative py-8 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm border-y border-black/5 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse-slow" />
              Operando en
            </div>
            <Marquee className="flex-1" speed="slow">
              {CITIES.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand-600 transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 text-brand-500" />
                  {c}
                  <span className="mx-3 h-1 w-1 rounded-full bg-muted-foreground/40" />
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12 animate-fade-up">
            <Badge variant="soft" className="mb-3">Beneficios</Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Todo lo que necesitas para moverte mejor
            </h2>
            <p className="text-muted-foreground mt-3">
              Diseñamos cada detalle para que cada viaje sea predecible, cómodo y rentable.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <Tilt3D
                key={title}
                intensity={6}
                glare={false}
                className="animate-fade-up"
              >
                <Card
                  className="group relative h-full overflow-hidden hover-lift bg-white/70 dark:bg-neutral-900/60 backdrop-blur"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-100/0 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  <CardContent className="relative p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 text-brand-600 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-glow-brand group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold tracking-tight">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              </Tilt3D>
            ))}
          </div>

          {/* Big stats row */}
          <div className="mt-14 grid sm:grid-cols-3 gap-4">
            <BigStat
              value={<CountUp to={2400000} format={(n) => Math.round(n / 1000).toLocaleString("es-CO")} />}
              suffix="k+"
              label="Viajes completados"
            />
            <BigStat
              value={<CountUp to={3.2} decimals={1} duration={1800} />}
              suffix=" min"
              label="ETA promedio"
            />
            <BigStat
              value={<CountUp to={98.4} decimals={1} duration={1800} />}
              suffix="%"
              label="Viajes sin incidentes"
            />
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-50/30 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
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
              ].map(({ icon: Icon, label }, i) => (
                <li
                  key={label}
                  className="flex items-center gap-3 animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 shadow-sm">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <Tilt3D intensity={7}>
            <Card className="relative overflow-hidden text-white border-transparent shimmer-wrap shadow-glow-dark animate-scale-in">
              <div className="absolute inset-0 bg-premium-animated" />
              <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl animate-float-slow" />
              <CardContent className="relative p-8 space-y-5 z-10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping-soft" />
                    <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
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
                    <div
                      key={k}
                      className="rounded-2xl bg-white/5 border border-white/10 p-3 text-xs font-medium text-center backdrop-blur transition-all hover:bg-white/10 hover:-translate-y-0.5"
                    >
                      {k}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Tilt3D>
        </div>
      </section>

      {/* Payments */}
      <section id="pay" className="relative py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 text-center">
          <Badge variant="soft" className="mb-3 animate-fade-up">Métodos de pago</Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl mx-auto animate-fade-up delay-100">
            Paga como prefieras, viaje a viaje
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto animate-fade-up delay-200">
            Combina saldo OfficeRide, tarjetas y cupones. Tú decides cómo pagar cada vez.
          </p>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {payments.map(({ label, icon: Icon }, i) => (
              <Tilt3D
                key={label}
                intensity={8}
                glare={false}
                className="animate-fade-up"
              >
                <div
                  className="group rounded-3xl border bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-5 flex flex-col items-center gap-3 hover-lift"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white group-hover:shadow-glow-brand group-hover:scale-110 transition-all duration-500 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              </Tilt3D>
            ))}
          </div>
        </div>
      </section>

      {/* OfficeRide section */}
      <section id="card" className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <Badge variant="gold" className="mb-3 shadow-glow-gold">OfficeRide Cliente</Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Una tarjeta digital que <span className="text-gradient-brand">viaja contigo</span>
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
              ].map(({ icon: Icon, label }, i) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-3.5 hover-lift animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600 shadow-sm">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button
                size="lg"
                asChild
                className="shadow-glow-brand animate-glow-pulse hover:scale-[1.04] transition-transform"
              >
                <Link href="/app/card">
                  Conoce OfficeRide <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="animate-scale-in delay-200">
            <Tilt3D intensity={14}>
              <CardShowcase />
            </Tilt3D>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl p-10 lg:p-14 text-white shadow-glow-dark shimmer-wrap">
            <div className="absolute inset-0 bg-premium-animated" />
            <Particles count={28} color="rgba(255,200,120,0.7)" />
            <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl animate-float-slow" />
            <div className="absolute -bottom-16 -left-10 h-60 w-60 rounded-full bg-amber-400/30 blur-3xl animate-float" />
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-center z-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Listos cuando lo estés.
                </h3>
                <p className="text-white/70 mt-2 max-w-lg">
                  Crea tu cuenta gratis y pide tu primer viaje con un cupón de bienvenida.
                </p>
              </div>
              <div className="flex gap-3">
                <Button size="lg" asChild className="shadow-glow-brand animate-glow-pulse">
                  <Link href="/register">Crear cuenta</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href="/app">Ir a la app</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/70 dark:bg-neutral-900/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-glow-brand">
                <CreditCard className="h-4.5 w-4.5" />
              </span>
              <span className="font-semibold tracking-tight">OfficeRide</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              Movilidad urbana premium para clientes exigentes. Una plataforma, infinitas rutas.
            </p>
          </div>
          {[
            { title: "Producto", items: ["Pedir viaje", "OfficeRide", "Wallet", "Cupones"] },
            { title: "Compañía", items: ["Sobre nosotros", "Ciudades", "Carreras", "Prensa"] },
            { title: "Soporte", items: ["Ayuda", "Seguridad", "Contacto", "Términos"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold mb-3 text-sm">{col.title}</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {col.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-brand-600 transition-colors">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t">
          <div className="mx-auto max-w-6xl px-4 lg:px-8 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} OfficeRide. Todos los derechos reservados.</span>
            <span>Hecho con cuidado para clientes premium.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroStat({
  value,
  suffix,
  label,
  icon,
}: {
  value: React.ReactNode;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-white/60 dark:bg-neutral-900/50 backdrop-blur p-3.5">
      <div className="text-xl font-semibold tracking-tight flex items-center gap-1.5">
        {icon}
        {value}
        {suffix && <span className="text-muted-foreground/70 text-base">{suffix}</span>}
      </div>
      <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-0.5">
        {label}
      </div>
    </div>
  );
}

function BigStat({
  value,
  suffix,
  label,
}: {
  value: React.ReactNode;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 hover-lift">
      <div className="absolute -top-12 -right-8 h-32 w-32 rounded-full bg-brand-100/60 blur-3xl" />
      <div className="relative text-3xl sm:text-4xl font-semibold tracking-tight">
        <span className="text-gradient-brand">{value}</span>
        {suffix && <span className="text-foreground/80">{suffix}</span>}
      </div>
      <div className="relative text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-4 bg-gradient-to-br from-brand-200/40 via-amber-100/50 to-transparent blur-3xl animate-pulse-slow" />
      <div className="relative rounded-[2.5rem] border bg-neutral-900 p-3 shadow-glow-dark animate-float-slow">
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
              <path
                d="M30 200 C 100 200, 110 100, 200 100 S 260 40, 290 30"
                stroke="#ff7a00"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                className="route-dash"
              />
            </svg>
            <div className="absolute left-6 bottom-10">
              <span className="absolute -inset-2 rounded-full bg-brand-500/30 animate-ping-soft" />
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 ring-4 ring-brand-100 text-white shadow-glow-brand">
                <MapPin className="h-3.5 w-3.5" />
              </span>
            </div>
            <div className="absolute right-6 top-10 h-7 w-7 rounded-full bg-neutral-900 ring-4 ring-neutral-200 flex items-center justify-center text-white animate-float-slow">
              <MapPin className="h-3.5 w-3.5" />
            </div>
          </div>
          <div className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Llega en ~4 min</span>
              <Badge variant="success" className="animate-tick-pulse">En camino</Badge>
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
      <div className="absolute -inset-6 bg-gradient-to-br from-amber-200/50 via-brand-200/40 to-transparent blur-3xl animate-pulse-slow" />
      <div className="relative aspect-[16/10] rounded-3xl overflow-hidden text-white shadow-glow-brand shimmer-wrap group">
        <div className="absolute inset-0 bg-premium-animated" />
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-500/50 blur-3xl animate-float-slow" />
        <div className="absolute -inset-8 conic-ring opacity-30 animate-spin-slow" />
        <div className="relative z-10 h-full p-7 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/70">
                <Sparkles className="h-3 w-3 text-brand-300 animate-pulse-slow" />
                OfficeRide · Cliente
              </div>
              <div className="mt-3">
                <span className="rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-[length:200%_100%] animate-gradient-fast px-2.5 py-0.5 text-[11px] font-semibold text-amber-950 shadow-glow-gold">
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
