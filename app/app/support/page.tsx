"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ChevronDown,
  Headphones,
  MessageCircle,
  Package,
  Phone,
  Search,
  Send,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/shared/page-header";
import { SectionTitle } from "@/components/shared/section-title";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { mockFaqs, mockTickets } from "@/lib/mock-data";
import type { SupportTicket } from "@/types";

const STATUS_LABEL: Record<SupportTicket["status"], { label: string; variant: "info" | "warning" | "success" }> = {
  open: { label: "Abierto", variant: "info" },
  in_review: { label: "En revisión", variant: "warning" },
  resolved: { label: "Resuelto", variant: "success" },
};

const CONTACTS = [
  {
    icon: MessageCircle,
    title: "Chat en vivo",
    desc: "Respuesta en ~2 min",
    action: "Iniciar chat",
  },
  {
    icon: Phone,
    title: "Llamada directa",
    desc: "Atención 24/7",
    action: "Llamar",
  },
  {
    icon: AlertTriangle,
    title: "Reportar problema",
    desc: "Cobros o incidentes",
    action: "Crear reporte",
  },
  {
    icon: Package,
    title: "Objeto perdido",
    desc: "Te conectamos con el conductor",
    action: "Reportar",
  },
];

export default function SupportPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div>
      <PageHeader
        title="Soporte"
        description="Estamos para ayudarte. Encuentra respuestas o contáctanos directamente."
        action={
          <Badge variant="success" className="hidden sm:inline-flex">
            <Headphones className="h-3 w-3 mr-1" /> Soporte activo 24/7
          </Badge>
        }
      />

      {/* Search */}
      <Card className="mb-5">
        <CardContent className="p-5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted-foreground" />
            <Input
              placeholder="Busca por palabra clave: cobro, conductor, recibo..."
              className="pl-11 h-12 text-base"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          {/* Contacts */}
          <div>
            <SectionTitle title="Cómo prefieres contactarnos" />
            <div className="grid sm:grid-cols-2 gap-3.5">
              {CONTACTS.map(({ icon: Icon, title, desc, action }) => (
                <Card key={title} className="transition-all hover:shadow-md hover:-translate-y-0.5">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold tracking-tight text-sm">{title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                        <Button size="sm" variant="soft" className="mt-3">
                          {action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <SectionTitle title="Preguntas frecuentes" hint="Lo más buscado por nuestros clientes" />
            <Card>
              <CardContent className="p-2">
                <ul className="divide-y">
                  {mockFaqs.map((f, idx) => {
                    const open = openIdx === idx;
                    return (
                      <li key={f.q}>
                        <button
                          className="w-full flex items-start justify-between gap-3 px-3 py-4 text-left hover:bg-muted/40 transition-colors rounded-2xl"
                          onClick={() => setOpenIdx(open ? null : idx)}
                          aria-expanded={open}
                        >
                          <span className="font-medium text-sm">{f.q}</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-muted-foreground shrink-0 mt-0.5 transition-transform",
                              open && "rotate-180"
                            )}
                          />
                        </button>
                        {open && (
                          <p className="px-3 pb-4 text-sm text-muted-foreground leading-relaxed">
                            {f.a}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Ticket form */}
          <div>
            <SectionTitle title="Crear un ticket" hint="Te respondemos en menos de 24 horas" />
            <Card>
              <CardContent className="p-5 space-y-3.5">
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="Describe brevemente el problema" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ride">Viaje relacionado (opcional)</Label>
                  <Input id="ride" placeholder="Selecciona un viaje" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" rows={4} placeholder="Cuéntanos los detalles..." />
                </div>
                <Button className="w-full sm:w-auto">
                  <Send className="h-4 w-4" /> Enviar ticket
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tickets sidebar */}
        <div>
          <SectionTitle title="Tus tickets" hint="Historial de conversaciones" />
          <div className="space-y-3">
            {mockTickets.map((t) => {
              const s = STATUS_LABEL[t.status];
              return (
                <Card key={t.id} className="transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        #{t.id} · {t.createdAt}
                      </span>
                      <Badge variant={s.variant} className="text-[10px]">{s.label}</Badge>
                    </div>
                    <h3 className="font-semibold text-sm leading-tight">{t.subject}</h3>
                    <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{t.preview}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
