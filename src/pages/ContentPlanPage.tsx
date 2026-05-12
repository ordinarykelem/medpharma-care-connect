import { useMemo, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Calendar, Layers, Megaphone, FileText, Smartphone, Image as ImageIcon } from "lucide-react";
import { PLAN_BY_BRAND, type ContentBrief } from "@/lib/contentPlans";
import { exportPlanToDocx } from "@/lib/exportContentDocx";
import { toast } from "sonner";

const ICON_FOR: Record<string, any> = {
  "Educational Carousel": Layers,
  "Square Flyer": ImageIcon,
  "Story / WhatsApp Status": Smartphone,
  "LinkedIn PDF Document": FileText,
  "Newsletter Header": Megaphone,
  "TikTok Photo Set": Smartphone,
};

function BriefCard({ b }: { b: ContentBrief }) {
  const Icon = ICON_FOR[b.assetType] ?? FileText;
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{b.date}</span>
              {b.occasion && (
                <>
                  <span>·</span>
                  <Badge variant="secondary" className="font-normal">{b.occasion}</Badge>
                </>
              )}
            </div>
            <CardTitle className="text-lg leading-snug">{b.title}</CardTitle>
          </div>
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary">
            <Icon className="h-5 w-5 text-foreground/70" />
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-2">
          <Badge variant="outline">{b.assetType}</Badge>
          <Badge variant="outline" className="font-mono text-[10px]">{b.format}</Badge>
          {b.platforms.map((p) => (
            <Badge key={p} variant="secondary" className="font-normal">{p}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Hook</div>
          <div className="italic text-foreground/85">"{b.hook}"</div>
        </div>
        {b.slides && b.slides.length > 0 && (
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Slides ({b.slides.length})
            </div>
            <ol className="space-y-1.5 text-foreground/80">
              {b.slides.map((s) => (
                <li key={s.title} className="border-l-2 border-border pl-3">
                  <div className="font-semibold text-foreground">{s.title}</div>
                  <div className="whitespace-pre-line text-xs text-foreground/70">{s.body}</div>
                </li>
              ))}
            </ol>
          </div>
        )}
        {b.body && !b.slides && (
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Content</div>
            <div className="whitespace-pre-line text-foreground/80 text-xs">{b.body}</div>
          </div>
        )}
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Design direction</div>
          <div className="text-foreground/80 text-xs">{b.designDirection}</div>
        </div>
        <div className="rounded-md bg-secondary/60 px-3 py-2">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">CTA on artwork</div>
          <div className="text-xs font-medium">{b.cta}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ContentPlanPage() {
  const { brand } = useParams<{ brand: string }>();
  const plan = brand ? PLAN_BY_BRAND[brand] : undefined;
  const [downloading, setDownloading] = useState(false);

  const grouped = useMemo(() => {
    if (!plan) return [];
    const map = new Map<string, ContentBrief[]>();
    plan.briefs.forEach((b) => {
      if (!map.has(b.week)) map.set(b.week, []);
      map.get(b.week)!.push(b);
    });
    return Array.from(map.entries());
  }, [plan]);

  if (!plan) return <Navigate to="/" replace />;

  const handleDownload = async () => {
    try {
      setDownloading(true);
      await exportPlanToDocx(plan);
      toast.success("Brief downloaded — forward to your designer.");
    } catch (e: any) {
      toast.error(e?.message ?? "Failed to generate document");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <PageHeader
        title={`${plan.brand} — Designer Content Plan`}
        subtitle="Late May → June → July 2026. Every brief is hand-off ready for your external graphic designer. Click download to get the full Word doc."
      />
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-border bg-card p-5">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              {plan.briefs.length} briefs · {grouped.length} weeks · ready to send
            </div>
            <div className="text-sm text-foreground/80 mt-1 max-w-2xl">{plan.productNote}</div>
          </div>
          <Button onClick={handleDownload} disabled={downloading} size="lg" className="shrink-0">
            <Download className="h-4 w-4 mr-2" />
            {downloading ? "Preparing…" : "Download brief (.docx)"}
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Non-negotiable rules for the designer</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5 text-sm text-foreground/85 list-disc pl-5">
              {plan.rules.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </CardContent>
        </Card>

        {grouped.map(([week, briefs]) => (
          <section key={week} className="space-y-3">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{week}</h3>
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">{briefs.length} asset{briefs.length === 1 ? "" : "s"}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {briefs.map((b) => <BriefCard key={b.id} b={b} />)}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}