import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { Coffee, Clock, ArrowRight, Sparkles } from "lucide-react";
import type { MissionStep, Mission } from "@/lib/types";

export default function Today() {
  const [items, setItems] = useState<(MissionStep & { mission: Mission })[]>([]);

  useEffect(() => {
    (async () => {
      const { data: missions } = await supabase.from("missions").select("*");
      const { data: steps } = await supabase
        .from("mission_steps").select("*")
        .eq("status", "todo").order("position").limit(50);
      const map = Object.fromEntries((missions || []).map((m: any) => [m.id, m]));
      const enriched = (steps || [])
        .filter((s: any) => map[s.mission_id])
        .sort((a: any, b: any) => {
          const pa = map[a.mission_id]?.priority === "high" ? 0 : 1;
          const pb = map[b.mission_id]?.priority === "high" ? 0 : 1;
          if (pa !== pb) return pa - pb;
          return (a.estimated_minutes || 5) - (b.estimated_minutes || 5);
        })
        .slice(0, 5)
        .map((s: any) => ({ ...s, mission: map[s.mission_id] }));
      setItems(enriched);
    })();
  }, []);

  const totalMin = items.reduce((sum, s) => sum + (s.estimated_minutes || 5), 0);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <header className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-medium">
          <Coffee className="h-3 w-3" /> Today
        </div>
        <h1 className="text-4xl font-display font-semibold">Five things. {totalMin} minutes.</h1>
        <p className="text-muted-foreground">
          Do these in order. Each one moves a real ranking mission forward. Coffee first if you must.
        </p>
      </header>

      {items.length === 0 ? (
        <Card className="p-12 text-center border-dashed">
          <Sparkles className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
          <p className="text-sm text-muted-foreground mb-4">Nothing queued. Either everything is done or you don't have missions yet.</p>
          <NavLink to="/"><Button>Open Mission Control</Button></NavLink>
        </Card>
      ) : (
        <ol className="space-y-3">
          {items.map((s, i) => (
            <NavLink key={s.id} to={`/missions/${s.mission_id}`}>
              <Card className="p-5 shadow-paper hover:shadow-soft hover:border-primary/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="font-display text-3xl font-semibold text-primary/30 leading-none w-8 shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-[10px]">{s.mission.keyword}</Badge>
                      <span className="text-[10px] text-muted-foreground inline-flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5" />{s.estimated_minutes || 5} min
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-snug">{s.title}</h3>
                    {s.instructions && <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{s.instructions}</p>}
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                </div>
              </Card>
            </NavLink>
          ))}
        </ol>
      )}
    </div>
  );
}
