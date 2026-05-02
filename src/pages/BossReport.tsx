import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Trophy, Target } from "lucide-react";
import type { Mission, MissionStep } from "@/lib/types";

export default function BossReport() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [steps, setSteps] = useState<MissionStep[]>([]);

  useEffect(() => {
    (async () => {
      const { data: m } = await supabase.from("missions").select("*").order("priority");
      const { data: s } = await supabase.from("mission_steps").select("*").order("position");
      setMissions((m || []) as Mission[]);
      setSteps((s || []) as MissionStep[]);
    })();
  }, []);

  const total = steps.length;
  const done = steps.filter((s) => s.status === "done").length;
  const inProgress = steps.filter((s) => s.status === "in_progress").length;
  const withProof = steps.filter((s) => s.proof_link).length;

  const recentDone = steps
    .filter((s) => s.status === "done" && s.done_at)
    .sort((a, b) => (b.done_at! > a.done_at! ? 1 : -1))
    .slice(0, 10);

  const missionMap = Object.fromEntries(missions.map((m) => [m.id, m]));

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <header>
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-2">Executive summary</div>
        <h1 className="text-4xl font-display font-semibold">What we shipped this week</h1>
        <p className="text-muted-foreground mt-2">Hand this view to leadership. Print-friendly.</p>
      </header>

      <div className="grid sm:grid-cols-4 gap-3">
        <Stat icon={Target} label="Active missions" value={missions.filter((m) => m.status === "active").length} />
        <Stat icon={CheckCircle2} label="Steps completed" value={done} accent />
        <Stat icon={Clock} label="In progress" value={inProgress} />
        <Stat icon={Trophy} label="With proof attached" value={withProof} accent />
      </div>

      <section>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Mission scoreboard</h2>
        <div className="grid gap-2">
          {missions.map((m) => {
            const ms = steps.filter((s) => s.mission_id === m.id);
            const d = ms.filter((s) => s.status === "done").length;
            const pct = ms.length ? Math.round((d / ms.length) * 100) : 0;
            return (
              <Card key={m.id} className="p-4 shadow-paper">
                <div className="flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-medium">"{m.keyword}"</span>
                      {m.priority === "high" && <Badge className="bg-accent/15 text-accent border-0 text-[9px] uppercase">priority</Badge>}
                    </div>
                    <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full gradient-primary" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <div className="text-right tabular-nums">
                    <div className="text-2xl font-display font-semibold">{pct}%</div>
                    <div className="text-[10px] text-muted-foreground">{d}/{ms.length} steps</div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Recent wins</h2>
        <div className="space-y-2">
          {recentDone.length === 0 ? (
            <Card className="p-6 text-sm text-muted-foreground border-dashed">No completed steps yet.</Card>
          ) : recentDone.map((s) => (
            <Card key={s.id} className="p-3 shadow-paper">
              <div className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{s.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {missionMap[s.mission_id]?.keyword} · {new Date(s.done_at!).toLocaleDateString()}
                    {s.proof_link && <> · <a href={s.proof_link} target="_blank" rel="noreferrer" className="text-primary underline">proof</a></>}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ icon: Icon, label, value, accent }: any) {
  return (
    <Card className={`p-4 shadow-paper ${accent ? "border-primary/30" : ""}`}>
      <Icon className={`h-4 w-4 mb-2 ${accent ? "text-primary" : "text-muted-foreground"}`} />
      <div className="text-3xl font-display font-semibold tabular-nums">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </Card>
  );
}
