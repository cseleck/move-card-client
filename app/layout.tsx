import type { Metadata } from "next";
import "./globals.css";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "OfficeRide — Movilidad urbana premium",
  description:
    "Plataforma de movilidad urbana moderna. Pide tu viaje, disfruta beneficios y administra tu OfficeRide cliente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans">
        <ScrollProgress />
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
