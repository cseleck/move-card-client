import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <Sidebar />
      <div className="lg:pl-72">
        <Topbar />
        <main className="px-4 pt-6 pb-24 lg:px-8 lg:pb-12">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>
      </div>
      <MobileBottomNav />
    </div>
  );
}
