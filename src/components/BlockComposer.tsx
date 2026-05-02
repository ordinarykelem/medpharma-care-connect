import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MarkdownView } from "@/components/MarkdownView";
import { aiDraft } from "@/lib/aiDraft";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Sparkles, Save, Copy, Loader2 } from "lucide-react";
import type { BlockType } from "@/lib/types";
import { STATUSES } from "@/lib/types";

type Field = { key: string; label: string; type?: "text" | "textarea" | "select"; options?: string[]; placeholder?: string };

export function BlockComposer({
  blockType, platform, title, description, fields, onSaved,
}: {
  blockType: BlockType;
  platform?: string;
  title: string;
  description: string;
  fields: Field[];
  onSaved?: () => void;
}) {
  const [input, setInput] = useState<Record<string, string>>({});
  const [titleInput, setTitleInput] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<typeof STATUSES[number]>("draft");
  const [busy, setBusy] = useState(false);

  const generate = async () => {
    if (!titleInput.trim()) return toast.error("Give the block a title first");
    setBusy(true);
    try {
      const out = await aiDraft(blockType, { ...input, platform });
      setContent(out);
      toast.success("Draft ready");
    } catch (e: any) {
      toast.error(e.message || "Failed to draft");
    } finally {
      setBusy(false);
    }
  };

  const save = async () => {
    if (!titleInput.trim() || !content.trim()) return toast.error("Need title and content");
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return;
    const { error } = await supabase.from("content_blocks").insert({
      user_id: u.user.id, title: titleInput, block_type: blockType, platform: platform ?? null,
      brief: JSON.stringify(input), content, status,
    });
    if (error) return toast.error(error.message);
    toast.success("Saved to library");
    setContent(""); setTitleInput(""); setInput({});
    onSaved?.();
  };

  const copy = () => { navigator.clipboard.writeText(content); toast.success("Copied"); };

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <Card className="p-5 shadow-card">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-semibold">{title}</h3>
          <Badge variant="secondary" className="text-xs">{platform || blockType}</Badge>
        </div>
        <p className="text-xs text-muted-foreground mb-4">{description}</p>
        <div className="space-y-3">
          <div>
            <Label className="text-xs">Block title (internal)</Label>
            <Input value={titleInput} onChange={(e) => setTitleInput(e.target.value)} placeholder="e.g. June – Diabetes awareness post" />
          </div>
          {fields.map((f) => (
            <div key={f.key}>
              <Label className="text-xs">{f.label}</Label>
              {f.type === "textarea" ? (
                <Textarea
                  value={input[f.key] || ""}
                  onChange={(e) => setInput({ ...input, [f.key]: e.target.value })}
                  placeholder={f.placeholder} rows={3}
                />
              ) : f.type === "select" ? (
                <Select value={input[f.key] || ""} onValueChange={(v) => setInput({ ...input, [f.key]: v })}>
                  <SelectTrigger><SelectValue placeholder={f.placeholder ?? "Choose"} /></SelectTrigger>
                  <SelectContent>
                    {f.options!.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  value={input[f.key] || ""}
                  onChange={(e) => setInput({ ...input, [f.key]: e.target.value })}
                  placeholder={f.placeholder}
                />
              )}
            </div>
          ))}
          <Button onClick={generate} disabled={busy} className="w-full gradient-primary text-primary-foreground hover:opacity-90">
            {busy ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Drafting…</> : <><Sparkles className="h-4 w-4 mr-2" /> Draft with AI</>}
          </Button>
        </div>
      </Card>

      <Card className="p-5 shadow-card flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Output</h3>
          <div className="flex items-center gap-2">
            <Select value={status} onValueChange={(v: any) => setStatus(v)}>
              <SelectTrigger className="h-8 w-32 text-xs"><SelectValue /></SelectTrigger>
              <SelectContent>
                {STATUSES.map((s) => <SelectItem key={s} value={s}>{s.replace("_", " ")}</SelectItem>)}
              </SelectContent>
            </Select>
            <Button size="sm" variant="outline" onClick={copy} disabled={!content}><Copy className="h-3 w-3" /></Button>
            <Button size="sm" onClick={save} disabled={!content}><Save className="h-3 w-3 mr-1" /> Save</Button>
          </div>
        </div>
        <div className="flex-1 min-h-[400px] rounded-md border border-border bg-secondary/30 p-4 overflow-auto">
          {content
            ? <MarkdownView>{content}</MarkdownView>
            : <p className="text-xs text-muted-foreground italic">Your AI-drafted, hand-off-ready block will appear here.</p>}
        </div>
      </Card>
    </div>
  );
}