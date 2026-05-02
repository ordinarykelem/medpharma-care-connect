import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2, ExternalLink, Sparkles, Loader2 } from "lucide-react";
import { TASK_STATUSES, PRIORITIES, CATEGORIES, type TaskStatus } from "@/lib/types";
import { toast } from "sonner";
import { aiDraft } from "@/lib/aiDraft";

const statusLabel: Record<TaskStatus, string> = {
  todo: "To Do", in_progress: "In Progress", done: "Done", blocked: "Blocked",
};
const statusColor: Record<TaskStatus, string> = {
  todo: "border-muted",
  in_progress: "border-accent/50",
  done: "border-success/50",
  blocked: "border-destructive/50",
};
const priColor: Record<string, string> = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-warning/20 text-warning",
  high: "bg-destructive/20 text-destructive",
};

const STARTER_PLAN = [
  { title: "Verify and fully complete Google Business Profile", category: "gbp", priority: "high",
    description: "Add website link, hours, services, products, photos (10+), and primary category 'Pharmacy'. Profile strength must hit 100%." },
  { title: "Reply to all 8 existing Google reviews", category: "gbp", priority: "high",
    description: "Use the Review Reply drafter for each. Personalize and acknowledge issues for low-star reviews." },
  { title: "Fix GSC 'Not indexed' pages on medpharma.care", category: "gsc", priority: "high",
    description: "Pull the Pages report, list all 'Discovered – currently not indexed' URLs, run them through GSC Fix drafter." },
  { title: "Submit fresh sitemaps for both domains", category: "gsc", priority: "high",
    description: "Generate sitemap.xml for medpharma.care and mcare.medpharma.care, submit in GSC, monitor coverage." },
  { title: "Publish 4 SEO articles targeting 'best health tech company in Ghana'", category: "seo", priority: "high",
    description: "Use SEO Workshop. Topics: 'Best Health Tech Companies in Ghana 2026', 'How E-Pharmacy is Transforming Chronic Care in Ghana', 'Online Pharmacy Accra: Complete Guide', 'Why Ghanaian Banks Trust MedPharma for Staff Healthcare'." },
  { title: "Add Organization + LocalBusiness JSON-LD to homepage", category: "seo", priority: "medium",
    description: "Use Schema drafter, hand to dev team. Validate with Rich Results Test." },
  { title: "Launch weekly social cadence across all 4 platforms", category: "social", priority: "medium",
    description: "Use Social Planner to draft a content calendar. Minimum 3 posts/week per platform." },
  { title: "Outreach pack for 5 new corporate/insurance partners", category: "partnerships", priority: "medium",
    description: "Draft email + one-pager highlighting B2B2C model and existing bank partnerships." },
  { title: "App Store + Play Store listing optimization (ASO)", category: "app_growth", priority: "high",
    description: "Optimize mCare title, subtitle, description, screenshots, keywords. Target 'pharmacy Ghana', 'medication delivery'." },
];

export default function Tasks() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState<any>({ title: "", description: "", category: "seo", priority: "medium", status: "todo", due_date: "" });

  const load = async () => {
    const { data } = await supabase.from("action_items").select("*").order("created_at", { ascending: false });
    setTasks(data || []);
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!form.title.trim()) return;
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return;
    const { error } = await supabase.from("action_items").insert({
      ...form, user_id: u.user.id, due_date: form.due_date || null,
    });
    if (error) return toast.error(error.message);
    toast.success("Action added");
    setForm({ title: "", description: "", category: "seo", priority: "medium", status: "todo", due_date: "" });
    setOpen(false); load();
  };

  const update = async (id: string, patch: any) => {
    await supabase.from("action_items").update(patch).eq("id", id);
    load();
  };
  const remove = async (id: string) => {
    if (!confirm("Delete?")) return;
    await supabase.from("action_items").delete().eq("id", id);
    load();
  };

  const seedPlan = async () => {
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return;
    const rows = STARTER_PLAN.map((t) => ({ ...t, user_id: u.user!.id, status: "todo" as const }));
    const { error } = await supabase.from("action_items").insert(rows);
    if (error) return toast.error(error.message);
    toast.success(`Loaded ${rows.length} starter actions`);
    load();
  };

  const aiSuggest = async () => {
    setBusy(true);
    try {
      const txt = await aiDraft("seo_blog", {
        topic: "Generate a 7-item action plan (titles only, one per line, no numbers, no markdown) of the highest-impact next moves to grow MedPharma Ghana — mix of SEO, GBP, social, partnerships. Return ONLY the list.",
        keywords: "", audience: "",
      });
      const titles = txt.split("\n").map((l) => l.replace(/^[-*\d.\s]+/, "").trim()).filter((l) => l.length > 8 && l.length < 140).slice(0, 7);
      const { data: u } = await supabase.auth.getUser();
      const rows = titles.map((title) => ({ title, status: "todo" as const, priority: "medium" as const, category: "seo", user_id: u.user!.id }));
      await supabase.from("action_items").insert(rows);
      toast.success(`Added ${rows.length} AI suggestions`);
      load();
    } catch (e: any) { toast.error(e.message); }
    finally { setBusy(false); }
  };

  const filtered = filter === "all" ? tasks : tasks.filter((t) => t.status === filter);
  const counts = TASK_STATUSES.reduce((acc, s) => ({ ...acc, [s]: tasks.filter((t) => t.status === s).length }), {} as Record<string, number>);

  return (
    <>
      <PageHeader
        title="Action Tracker"
        subtitle="Show your boss exactly what's been planned, what's in progress, and what's done — with proof."
        actions={
          <div className="flex gap-2">
            {tasks.length === 0 && (
              <Button variant="outline" size="sm" onClick={seedPlan}>Load starter plan</Button>
            )}
            <Button variant="outline" size="sm" onClick={aiSuggest} disabled={busy}>
              {busy ? <Loader2 className="h-3 w-3 mr-1 animate-spin" /> : <Sparkles className="h-3 w-3 mr-1" />} AI suggest
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="gradient-primary text-primary-foreground hover:opacity-90"><Plus className="h-3 w-3 mr-1" /> New action</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>New action item</DialogTitle></DialogHeader>
                <div className="space-y-3">
                  <div><Label>Title</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
                  <div><Label>Description</Label><Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} /></div>
                  <div className="grid grid-cols-3 gap-2">
                    <div><Label className="text-xs">Category</Label>
                      <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div><Label className="text-xs">Priority</Label>
                      <Select value={form.priority} onValueChange={(v) => setForm({ ...form, priority: v })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{PRIORITIES.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div><Label className="text-xs">Due date</Label><Input type="date" value={form.due_date} onChange={(e) => setForm({ ...form, due_date: e.target.value })} /></div>
                  </div>
                  <Button onClick={save} className="w-full">Add action</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        }
      />
      <div className="max-w-7xl mx-auto p-6 space-y-4">
        <div className="flex gap-2 flex-wrap">
          <FilterChip label={`All · ${tasks.length}`} active={filter === "all"} onClick={() => setFilter("all")} />
          {TASK_STATUSES.map((s) => (
            <FilterChip key={s} label={`${statusLabel[s]} · ${counts[s] ?? 0}`} active={filter === s} onClick={() => setFilter(s)} />
          ))}
        </div>

        {!filtered.length && (
          <Card className="p-12 text-center text-sm text-muted-foreground">
            No actions {filter === "all" ? "yet" : `in ${statusLabel[filter as TaskStatus]}`}.
            {tasks.length === 0 && (<> Click <strong className="text-foreground">Load starter plan</strong> to get the recommended 9-step playbook.</>)}
          </Card>
        )}

        <div className="grid gap-2">
          {filtered.map((t) => (
            <Card key={t.id} className={`p-4 shadow-card border-l-4 ${statusColor[t.status as TaskStatus]}`}>
              <div className="flex items-start gap-3">
                <Select value={t.status} onValueChange={(v) => update(t.id, { status: v })}>
                  <SelectTrigger className="h-8 w-32 text-xs"><SelectValue /></SelectTrigger>
                  <SelectContent>{TASK_STATUSES.map((s) => <SelectItem key={s} value={s}>{statusLabel[s]}</SelectItem>)}</SelectContent>
                </Select>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-medium text-sm">{t.title}</h4>
                    <Badge className={`${priColor[t.priority]} text-[10px]`}>{t.priority}</Badge>
                    {t.category && <Badge variant="outline" className="text-[10px]">{t.category}</Badge>}
                    {t.due_date && <span className="text-[10px] text-muted-foreground">due {t.due_date}</span>}
                  </div>
                  {t.description && <p className="text-xs text-muted-foreground mt-1">{t.description}</p>}
                  <div className="mt-2 flex items-center gap-2">
                    <Input
                      placeholder="Add proof link (post URL, GBP screenshot, deploy URL…)"
                      value={t.proof_link || ""}
                      onChange={(e) => setTasks((arr) => arr.map((x) => x.id === t.id ? { ...x, proof_link: e.target.value } : x))}
                      onBlur={(e) => update(t.id, { proof_link: e.target.value })}
                      className="h-7 text-xs"
                    />
                    {t.proof_link && (
                      <a href={t.proof_link} target="_blank" rel="noreferrer" className="text-primary"><ExternalLink className="h-3.5 w-3.5" /></a>
                    )}
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive shrink-0" onClick={() => remove(t.id)}>
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

function FilterChip({ label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs border transition ${
        active ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"
      }`}
    >{label}</button>
  );
}