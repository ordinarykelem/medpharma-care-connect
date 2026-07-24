import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Copy, ArrowLeft, Check, Code2, MapPin, Megaphone, ExternalLink, GitBranch, ScrollText, Loader2, Sparkles, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { Mission, MissionStep, StepKind } from "@/lib/types";
import { aiDraft } from "@/lib/aiDraft";

const KIND_META: Record<StepKind, { label: string; icon: any; tint: string }> = {
  copy_paste: { label: "Copy & paste", icon: Copy, tint: "bg-primary/10 text-primary border-primary/20" },
  dev_ticket: { label: "Hand to dev team", icon: Code2, tint: "bg-accent/10 text-accent border-accent/20" },
  publish:    { label: "Publish",        icon: Megaphone, tint: "bg-success/10 text-success border-success/20" },
  external:   { label: "External step",  icon: ExternalLink, tint: "bg-muted text-foreground border-border" },
  decision:   { label: "Decision",       icon: ScrollText, tint: "bg-warning/10 text-warning border-warning/20" },
};

export default function MissionDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const [mission, setMission] = useState<Mission | null>(null);
  const [steps, setSteps] = useState<MissionStep[]>([]);
  const [busy, setBusy] = useState(false);

  const load = async () => {
    if (!id) return;
    const { data: m } = await supabase.from("missions").select("*").eq("id", id).maybeSingle();
    setMission(m as Mission);
    const { data: s } = await supabase.from("mission_steps").select("*").eq("mission_id", id).order("position");
    setSteps((s || []) as MissionStep[]);
  };
  useEffect(() => { load(); }, [id]);

  const toggleDone = async (s: MissionStep) => {
    const next = s.status === "done" ? "todo" : "done";
    await supabase.from("mission_steps").update({
      status: next,
      done_at: next === "done" ? new Date().toISOString() : null,
    }).eq("id", s.id);
    load();
  };

  const updateProof = async (sid: string, proof_link: string) => {
    await supabase.from("mission_steps").update({ proof_link }).eq("id", sid);
  };

  const regenerate = async () => {
    if (!mission) return;
    if (!confirm("Replace all steps with a fresh AI-generated playbook?")) return;
    setBusy(true);
    try {
      const raw = await aiDraft("mission_playbook", { keyword: mission.keyword, painPoint: mission.notes || "" });
      const cleaned = raw.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();
      const parsed = JSON.parse(cleaned);
      await supabase.from("mission_steps").delete().eq("mission_id", mission.id);
      const { data: u } = await supabase.auth.getUser();
      const newSteps = (parsed.steps || []).map((s: any, i: number) => ({
        mission_id: mission.id, user_id: u.user!.id, position: i,
        kind: s.kind || "copy_paste", title: s.title || `Step ${i + 1}`,
        instructions: s.instructions || "", body: s.body || "",
        where_to_paste: s.where_to_paste || "", owner: s.owner || "me",
        status: "todo", estimated_minutes: s.estimated_minutes || 5,
      }));
      await supabase.from("mission_steps").insert(newSteps);
      if (parsed.goal) await supabase.from("missions").update({ goal: parsed.goal }).eq("id", mission.id);
      toast.success("Playbook refreshed");
      load();
    } catch (e: any) { toast.error(e.message); }
    finally { setBusy(false); }
  };

  const deleteMission = async () => {
    if (!mission) return;
    if (!confirm(`Delete mission "${mission.keyword}" and all its steps?`)) return;
    await supabase.from("missions").delete().eq("id", mission.id);
    nav("/");
  };

  if (!mission) return <div className="p-12 text-center text-muted-foreground">Loading…</div>;

  const done = steps.filter((s) => s.status === "done").length;
  const pct = steps.length ? Math.round((done / steps.length) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <NavLink to="/" className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3 mr-1" /> All missions
      </NavLink>

      <header className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-2">Ranking mission</div>
            <h1 className="text-4xl font-display font-semibold leading-tight">"{mission.keyword}"</h1>
            {mission.goal && <p className="text-muted-foreground mt-2 max-w-2xl leading-relaxed">{mission.goal}</p>}
          </div>
          <div className="flex gap-2 shrink-0">
            <Button size="sm" variant="outline" onClick={regenerate} disabled={busy}>
              {busy ? <Loader2 className="h-3 w-3 mr-1 animate-spin" /> : <Sparkles className="h-3 w-3 mr-1" />}
              Regenerate
            </Button>
            <Button size="sm" variant="ghost" onClick={deleteMission} className="text-destructive">
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <Card className="p-4 shadow-paper">
          <div className="flex items-center gap-4">
            <div className="text-xs text-muted-foreground">Progress</div>
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full gradient-primary transition-all" style={{ width: `${pct}%` }} />
            </div>
            <div className="text-sm font-medium tabular-nums">{done}/{steps.length} steps</div>
          </div>
        </Card>
      </header>

      <ol className="space-y-4">
        {steps.map((s, i) => {
          const meta = KIND_META[s.kind] || KIND_META.copy_paste;
          const Icon = meta.icon;
          const isDone = s.status === "done";
          return (
            <li key={s.id}>
              <Card className={`shadow-paper transition-all ${isDone ? "opacity-70" : ""}`}>
                <div className="p-5 border-b border-border">
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => toggleDone(s)}
                      className={`mt-1 grid h-6 w-6 place-items-center rounded-full border-2 transition-all shrink-0 ${
                        isDone ? "bg-success border-success text-white" : "border-border hover:border-primary"
                      }`}
                      aria-label="Mark done"
                    >
                      {isDone && <Check className="h-3.5 w-3.5" />}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-xs text-muted-foreground tabular-nums">Step {i + 1}</span>
                        <Badge variant="outline" className={`text-[10px] uppercase tracking-wider ${meta.tint}`}>
                          <Icon className="h-2.5 w-2.5 mr-1" />{meta.label}
                        </Badge>
                        <Badge variant="outline" className="text-[10px]">{s.owner === "me" ? "you" : s.owner.replace("_", " ")}</Badge>
                        {s.estimated_minutes ? (
                          <span className="text-[10px] text-muted-foreground">~{s.estimated_minutes} min</span>
                        ) : null}
                      </div>
                      <h3 className={`font-display text-lg font-semibold leading-snug ${isDone ? "line-through" : ""}`}>{s.title}</h3>
                      {s.instructions && <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.instructions}</p>}
                    </div>
                  </div>
                </div>

                {(s.body || s.where_to_paste) && (
                  <div className="p-5 bg-secondary/40 space-y-3">
                    {s.where_to_paste && (
                      <div className="flex items-center gap-2 text-xs">
                        <MapPin className="h-3 w-3 text-primary" />
                        <span className="text-muted-foreground">Paste here:</span>
                        <span className="font-medium">{s.where_to_paste}</span>
                      </div>
                    )}
                    {s.body && (
                      <div className="relative">
                        <pre className="text-xs bg-card border rounded-md p-4 overflow-auto max-h-80 whitespace-pre-wrap font-mono leading-relaxed">{s.body}</pre>
                        <Button
                          size="sm"
                          className="absolute top-2 right-2 h-7"
                          onClick={() => { navigator.clipboard.writeText(s.body || ""); toast.success("Copied - go paste it"); }}
                        >
                          <Copy className="h-3 w-3 mr-1" /> Copy
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-4 flex items-center gap-2 border-t border-border">
                  <GitBranch className="h-3 w-3 text-muted-foreground shrink-0" />
                  <Input
                    placeholder="Paste proof URL (post link, screenshot, deploy URL…)"
                    defaultValue={s.proof_link || ""}
                    onBlur={(e) => updateProof(s.id, e.target.value)}
                    className="h-7 text-xs border-0 bg-transparent focus-visible:ring-0 px-1"
                  />
                  {s.proof_link && (
                    <a href={s.proof_link} target="_blank" rel="noreferrer" className="text-primary shrink-0">
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </Card>
            </li>
          );
        })}
      </ol>

      {steps.length === 0 && (
        <Card className="p-12 text-center text-sm text-muted-foreground border-dashed">
          No steps yet. Click <strong className="text-foreground">Regenerate</strong> to build the playbook.
        </Card>
      )}
    </div>
  );
}
