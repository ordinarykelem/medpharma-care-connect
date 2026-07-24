import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { NavLink } from "react-router-dom";
import { Plus, Sparkles, Loader2, Target, ArrowRight, Trophy, Clock } from "lucide-react";
import { aiDraft } from "@/lib/aiDraft";
import { toast } from "sonner";
import type { Mission } from "@/lib/types";
import heroImg from "@/assets/hero-pharmacist.jpg";

const SEED_KEYWORDS = [
  { keyword: "best health tech company in Ghana", priority: "high" },
  { keyword: "online pharmacy Ghana", priority: "high" },
  { keyword: "medication delivery Accra", priority: "high" },
  { keyword: "MedPharma", priority: "high" },
  { keyword: "buy medicine online Ghana", priority: "medium" },
];

export default function Missions() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [stepCounts, setStepCounts] = useState<Record<string, { total: number; done: number }>>({});
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [pain, setPain] = useState("Competitor ads sit above us; we don't appear in the top results");

  const load = async () => {
    const { data: m } = await supabase.from("missions").select("*").order("created_at", { ascending: false });
    const list = (m || []) as Mission[];
    setMissions(list);
    if (list.length) {
      const { data: steps } = await supabase
        .from("mission_steps")
        .select("mission_id,status")
        .in("mission_id", list.map((x) => x.id));
      const counts: Record<string, { total: number; done: number }> = {};
      list.forEach((mi) => (counts[mi.id] = { total: 0, done: 0 }));
      (steps || []).forEach((s: any) => {
        counts[s.mission_id].total += 1;
        if (s.status === "done") counts[s.mission_id].done += 1;
      });
      setStepCounts(counts);
    }
  };
  useEffect(() => { load(); }, []);

  const createMission = async (kw: string, painText: string, priority = "medium") => {
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return null;
    setBusy(true);
    try {
      const raw = await aiDraft("mission_playbook", { keyword: kw, painPoint: painText });
      const cleaned = raw.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
      const parsed = JSON.parse(cleaned);
      const { data: mission, error } = await supabase
        .from("missions")
        .insert({ user_id: u.user.id, keyword: kw, goal: parsed.goal, priority, status: "active" })
        .select().single();
      if (error) throw error;

      const steps = (parsed.steps || []).map((s: any, i: number) => ({
        mission_id: mission.id,
        user_id: u.user!.id,
        position: i,
        kind: s.kind || "copy_paste",
        title: s.title || `Step ${i + 1}`,
        instructions: s.instructions || "",
        body: s.body || "",
        where_to_paste: s.where_to_paste || "",
        owner: s.owner || "me",
        status: "todo",
        estimated_minutes: s.estimated_minutes || 5,
      }));
      if (steps.length) await supabase.from("mission_steps").insert(steps);
      toast.success(`Mission ready: ${kw}`);
      return mission;
    } catch (e: any) {
      toast.error(e.message || "Could not generate playbook");
      return null;
    } finally {
      setBusy(false);
    }
  };

  const addCustom = async () => {
    if (!keyword.trim()) return;
    await createMission(keyword.trim(), pain.trim());
    setKeyword(""); setOpen(false); load();
  };

  const seedAll = async () => {
    setBusy(true);
    for (const s of SEED_KEYWORDS) {
      await createMission(s.keyword, "Competitor ads sit above us; we don't appear in the top results", s.priority);
    }
    setBusy(false);
    load();
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-card shadow-soft border">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
              <span className="h-px w-8 bg-primary" /> Mission Control
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-semibold leading-[1.05] mb-4">
              Make MedPharma <span className="text-gradient italic">unmissable</span> on Google.
            </h1>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Each search your boss cares about becomes a mission with a step-by-step playbook.
              No guessing, no chasing the dev team - just copy, paste, ship, prove.
            </p>
            <div className="flex flex-wrap gap-2">
              {missions.length === 0 ? (
                <Button onClick={seedAll} disabled={busy} size="lg" className="rounded-full">
                  {busy ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Sparkles className="h-4 w-4 mr-2" />}
                  Build my 5 starter missions
                </Button>
              ) : (
                <NavLink to="/today">
                  <Button size="lg" className="rounded-full">
                    Today's actions <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </NavLink>
              )}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="rounded-full"><Plus className="h-4 w-4 mr-2" /> New mission</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader><DialogTitle>New ranking mission</DialogTitle></DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label>Target Google search</Label>
                      <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="e.g. diabetes medication delivery Accra" />
                    </div>
                    <div>
                      <Label>What's the pain right now?</Label>
                      <Textarea value={pain} onChange={(e) => setPain(e.target.value)} rows={2} />
                    </div>
                    <Button onClick={addCustom} disabled={busy || !keyword.trim()} className="w-full">
                      {busy ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Sparkles className="h-4 w-4 mr-2" />}
                      Generate playbook
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <img src={heroImg} alt="MedPharma pharmacist with mCare app" className="absolute inset-0 h-full w-full object-cover" width={1536} height={1024} />
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/60 to-transparent md:from-card/95 md:via-card/30 md:to-transparent" />
          </div>
        </div>
      </section>

      {/* Missions list */}
      <section>
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-2xl font-display font-semibold">Active missions</h2>
          <span className="text-xs text-muted-foreground">{missions.length} total</span>
        </div>

        {missions.length === 0 && (
          <Card className="p-12 text-center border-dashed">
            <Target className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
            <p className="text-sm text-muted-foreground">
              No missions yet. Click <strong className="text-foreground">Build my 5 starter missions</strong> above -
              the AI will generate a complete playbook for each of your target Google searches.
            </p>
          </Card>
        )}

        <div className="grid gap-3">
          {missions.map((m) => {
            const c = stepCounts[m.id] || { total: 0, done: 0 };
            const pct = c.total ? Math.round((c.done / c.total) * 100) : 0;
            return (
              <NavLink key={m.id} to={`/missions/${m.id}`}>
                <Card className="p-5 shadow-paper hover:shadow-soft hover:border-primary/40 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                      {pct === 100 ? <Trophy className="h-5 w-5" /> : <Target className="h-5 w-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-display text-lg font-semibold leading-tight">{m.keyword}</h3>
                        {m.priority === "high" && <Badge className="bg-accent/15 text-accent border-0 text-[10px] uppercase tracking-wider">priority</Badge>}
                      </div>
                      {m.goal && <p className="text-sm text-muted-foreground line-clamp-1">{m.goal}</p>}
                      <div className="mt-3 flex items-center gap-3">
                        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="h-full gradient-primary transition-all" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-xs text-muted-foreground tabular-nums">{c.done}/{c.total}</span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-3" />
                  </div>
                </Card>
              </NavLink>
            );
          })}
        </div>
      </section>
    </div>
  );
}
