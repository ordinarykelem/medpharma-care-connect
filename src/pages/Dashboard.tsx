import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { FileText, Megaphone, MapPin, CheckSquare, TrendingUp, Sparkles, Target, Globe, ArrowRight } from "lucide-react";
import heroGlow from "@/assets/hero-glow.jpg";

const quickActions = [
  { to: "/seo", icon: FileText, title: "SEO Workshop", desc: "Blog briefs, meta tags, schema - ready to ship" },
  { to: "/social", icon: Megaphone, title: "Social Planner", desc: "LinkedIn, Facebook, Instagram, TikTok" },
  { to: "/gbp", icon: MapPin, title: "GBP & Search Console", desc: "Posts, review replies, GSC fixes" },
  { to: "/tasks", icon: CheckSquare, title: "Action Tracker", desc: "Proof-of-execution log for your boss" },
];

export default function Dashboard() {
  const [stats, setStats] = useState({ blocks: 0, drafts: 0, approved: 0, tasks: 0, done: 0 });

  useEffect(() => {
    (async () => {
      const [blocks, tasks] = await Promise.all([
        supabase.from("content_blocks").select("status"),
        supabase.from("action_items").select("status"),
      ]);
      const b = blocks.data || []; const t = tasks.data || [];
      setStats({
        blocks: b.length,
        drafts: b.filter((x) => x.status === "draft").length,
        approved: b.filter((x) => x.status === "approved" || x.status === "published").length,
        tasks: t.length,
        done: t.filter((x) => x.status === "done").length,
      });
    })();
  }, []);

  return (
    <>
      <PageHeader
        title="Marketing Command Center"
        subtitle="Drive traffic to medpharma.care, grow FulLife downloads, and own 'best health tech company in Ghana'."
      />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <Card className="relative overflow-hidden p-8 shadow-card border-primary/20">
          <img src={heroGlow} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-primary mb-3">
              <Sparkles className="h-3.5 w-3.5" /> AI-powered marketing OS
            </div>
            <h2 className="text-3xl font-bold leading-tight mb-2">
              From <span className="text-gradient">brief to ready-to-ship</span> in under a minute.
            </h2>
            <p className="text-muted-foreground mb-5">
              Every block you draft is structured for your dev team or social manager - no rework. Save it, mark it for review, and show your boss exactly what was executed.
            </p>
            <div className="flex gap-2">
              <Button asChild className="gradient-primary text-primary-foreground hover:opacity-90">
                <NavLink to="/seo">Start an SEO block <ArrowRight className="h-4 w-4 ml-1" /></NavLink>
              </Button>
              <Button asChild variant="outline">
                <NavLink to="/brand">Set brand context</NavLink>
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <StatCard icon={FileText} label="Total blocks" value={stats.blocks} />
          <StatCard icon={Target} label="Approved / published" value={stats.approved} accent />
          <StatCard icon={CheckSquare} label="Action items" value={stats.tasks} />
          <StatCard icon={TrendingUp} label="Tasks completed" value={stats.done} accent />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Quick actions</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {quickActions.map((a) => (
              <NavLink key={a.to} to={a.to}>
                <Card className="p-5 shadow-card hover:border-primary/40 hover:-translate-y-0.5 transition-all h-full">
                  <a.icon className="h-5 w-5 text-primary mb-3" />
                  <h4 className="font-medium text-sm mb-1">{a.title}</h4>
                  <p className="text-xs text-muted-foreground">{a.desc}</p>
                </Card>
              </NavLink>
            ))}
          </div>
        </div>

        <Card className="p-6 shadow-card">
          <div className="flex items-start gap-4">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 shrink-0">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Boss's #1 goal: rank for "best health tech company in Ghana"</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The fastest path: ship 6-10 high-quality SEO articles around health-tech + Ghana, fix any GSC indexing issues, fully optimise the GBP profile, and publish weekly across LinkedIn + Facebook + Instagram + TikTok. This OS gives you a hand-off-ready block for each move.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Button asChild size="sm" variant="outline"><NavLink to="/seo">Draft SEO articles</NavLink></Button>
                <Button asChild size="sm" variant="outline"><NavLink to="/gbp">Optimise GBP</NavLink></Button>
                <Button asChild size="sm" variant="outline"><NavLink to="/tasks">Open action plan</NavLink></Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

function StatCard({ icon: Icon, label, value, accent }: any) {
  return (
    <Card className={`p-4 shadow-card ${accent ? "border-primary/30" : ""}`}>
      <Icon className={`h-4 w-4 mb-2 ${accent ? "text-primary" : "text-muted-foreground"}`} />
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </Card>
  );
}