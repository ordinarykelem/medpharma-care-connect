import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger, useSidebar,
} from "@/components/ui/sidebar";
import { Activity, Target, Coffee, BarChart3, FileText, Megaphone, MapPin, CheckSquare, Settings, LogOut, Palette, HeartPulse, Video } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const nav = [
  { to: "/", label: "Mission Control", icon: Target, end: true },
  { to: "/today", label: "Today", icon: Coffee },
  { to: "/report", label: "Boss Report", icon: BarChart3 },
  { to: "/content/fullife", label: "FulLife — Designer Plan", icon: HeartPulse },
  { to: "/content/medpharma", label: "MedPharma — Designer Plan", icon: Palette },
  { to: "/content/fullife-q4", label: "FulLife — Q4 2026 Plan", icon: HeartPulse },
  { to: "/content/medpharma-q4", label: "MedPharma — Q4 2026 Plan", icon: Palette },
  { to: "/seo", label: "SEO Drafts", icon: FileText },
  { to: "/social", label: "Social Drafts", icon: Megaphone },
  { to: "/gbp", label: "GBP & GSC Drafts", icon: MapPin },
  { to: "/videos", label: "Video Factory (AI)", icon: Video },
  { to: "/scripts", label: "Master Scripts", icon: FileText },
  { to: "/canva-kit", label: "Canva Copy-Paste Kit", icon: Palette },
  { to: "/tasks", label: "Action Tracker", icon: CheckSquare },
  { to: "/brand", label: "Brand Context", icon: Settings },
];

function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname } = useLocation();
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-sidebar text-sidebar-foreground">
        <div className="p-4 flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg gradient-warm shadow-soft shrink-0">
            <Activity className="h-4 w-4 text-accent-foreground" />
          </div>
          {!collapsed && (
            <div className="leading-tight">
              <div className="font-display font-semibold text-sm">MedPharma</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-sidebar-foreground/60">Mission Control</div>
            </div>
          )}
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map((item) => {
                const active = item.end ? pathname === item.to : pathname.startsWith(item.to);
                return (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton asChild isActive={active}>
                      <NavLink to={item.to} end={item.end} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {!collapsed && <span>{item.label}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default function AppShell() {
  const { user, loading } = useAuth();
  const nav = useNavigate();
  if (loading) return <div className="min-h-screen grid place-items-center text-muted-foreground">Loading…</div>;
  if (!user) {
    nav("/auth", { replace: true });
    return null;
  }
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center justify-between border-b border-border px-4 sticky top-0 bg-background/80 backdrop-blur z-10">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <span className="text-xs text-muted-foreground hidden sm:inline">Signed in as {user.email}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => supabase.auth.signOut()}>
              <LogOut className="h-4 w-4 mr-1" /> Sign out
            </Button>
          </header>
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}