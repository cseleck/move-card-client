import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "MoveCard — Movilidad urbana premium",
  description:
    "Plataforma de movilidad urbana moderna. Pide tu viaje, disfruta beneficios y administra tu MoveCard cliente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
