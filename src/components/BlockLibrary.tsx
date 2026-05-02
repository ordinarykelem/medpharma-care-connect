import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MarkdownView } from "@/components/MarkdownView";
import { STATUSES, type BlockType } from "@/lib/types";
import { toast } from "sonner";
import { Copy, Trash2, Eye } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const statusColor: Record<string, string> = {
  draft: "bg-muted text-muted-foreground",
  in_review: "bg-warning/20 text-warning",
  approved: "bg-primary/20 text-primary",
  published: "bg-success/20 text-success",
};

export function BlockLibrary({ blockTypes, refreshKey }: { blockTypes?: BlockType[]; refreshKey?: number }) {
  const [rows, setRows] = useState<any[]>([]);
  const [open, setOpen] = useState<any | null>(null);

  const load = async () => {
    let q = supabase.from("content_blocks").select("*").order("created_at", { ascending: false });
    if (blockTypes && blockTypes.length) q = q.in("block_type", blockTypes);
    const { data } = await q;
    setRows(data || []);
  };
  useEffect(() => { load(); }, [refreshKey]);

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("content_blocks").update({ status }).eq("id", id);
    load();
  };
  const remove = async (id: string) => {
    if (!confirm("Delete this block?")) return;
    await supabase.from("content_blocks").delete().eq("id", id);
    load();
  };
  const copy = (t: string) => { navigator.clipboard.writeText(t); toast.success("Copied"); };

  if (!rows.length) {
    return <p className="text-sm text-muted-foreground text-center py-8">No saved blocks yet. Draft one above.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {rows.map((r) => (
        <Card key={r.id} className="p-4 shadow-card hover:border-primary/40 transition">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="min-w-0">
              <h4 className="font-medium text-sm truncate">{r.title}</h4>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                {r.block_type.replace("_", " ")} {r.platform ? `· ${r.platform}` : ""}
              </p>
            </div>
            <Badge className={`${statusColor[r.status]} text-[10px] shrink-0`}>{r.status.replace("_", " ")}</Badge>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-3 mb-3">{r.content?.slice(0, 180)}</p>
          <div className="flex items-center justify-between gap-2">
            <Select value={r.status} onValueChange={(v) => updateStatus(r.id, v)}>
              <SelectTrigger className="h-7 text-xs flex-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                {STATUSES.map((s) => <SelectItem key={s} value={s}>{s.replace("_", " ")}</SelectItem>)}
              </SelectContent>
            </Select>
            <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => setOpen(r)}><Eye className="h-3 w-3" /></Button>
            <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => copy(r.content)}><Copy className="h-3 w-3" /></Button>
            <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive" onClick={() => remove(r.id)}><Trash2 className="h-3 w-3" /></Button>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2">{formatDistanceToNow(new Date(r.created_at), { addSuffix: true })}</p>
        </Card>
      ))}

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-auto">
          <DialogHeader><DialogTitle>{open?.title}</DialogTitle></DialogHeader>
          {open && (
            <>
              <div className="flex items-center gap-2 mb-2">
                <Badge className={statusColor[open.status]}>{open.status}</Badge>
                <Badge variant="outline">{open.block_type}</Badge>
                {open.platform && <Badge variant="outline">{open.platform}</Badge>}
                <Button size="sm" variant="outline" className="ml-auto" onClick={() => copy(open.content)}>
                  <Copy className="h-3 w-3 mr-1" /> Copy all
                </Button>
              </div>
              <MarkdownView>{open.content || ""}</MarkdownView>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}