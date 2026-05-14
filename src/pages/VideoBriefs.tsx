import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Video, Search, Brain, Heart, Activity, ShieldCheck, Zap, Ghost } from "lucide-react";
import { VIDEO_BRIEFS, type VideoBrief } from "@/lib/videoBriefs";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const CATEGORY_ICONS: Record<string, any> = {
  "Condition Deep-Dive": Activity,
  "Myth Buster": Ghost,
  "Health Tip": Brain,
  "Routine Adherence": Heart,
  "App Feature": ShieldCheck,
  "Seasonal": Zap,
};

const POLL_INTERVAL_MS = 20_000;
const POLL_MAX_ATTEMPTS = 75;
const RETRYABLE_UPSTREAM_STATUSES = new Set([403, 408, 409, 425, 429, 500, 502, 503, 504]);
let nextStatusCheckAt = 0;

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const waitForStatusSlot = async () => {
  const now = Date.now();
  const scheduledAt = Math.max(now, nextStatusCheckAt);
  nextStatusCheckAt = scheduledAt + POLL_INTERVAL_MS;
  const delay = scheduledAt - now;
  if (delay > 0) await wait(delay);
};

const getApiMessage = (data: any) =>
  data?.error?.message || data?.message || data?.error || `Upstream ${data?.upstream_status || "error"}`;

const isRetryableApiResponse = (data: any) => {
  const message = String(getApiMessage(data)).toLowerCase();
  return (
    data?.retryable === true ||
    RETRYABLE_UPSTREAM_STATUSES.has(Number(data?.upstream_status)) ||
    message.includes("blocked") ||
    message.includes("rate") ||
    message.includes("temporarily") ||
    message.includes("too many")
  );
};

function VideoBriefCard({ b }: { b: VideoBrief }) {
  const Icon = CATEGORY_ICONS[b.category] ?? Video;
  const storageKey = `magnific-task-${b.id}`;
  const urlKey = `magnific-url-${b.id}`;
  const [status, setStatus] = useState<"idle" | "generating" | "success" | "error">(
    () => (localStorage.getItem(urlKey) ? "success" : "idle")
  );
  const [videoUrl, setVideoUrl] = useState<string | null>(() => localStorage.getItem(urlKey));
  const [taskId, setTaskId] = useState<string | null>(() => localStorage.getItem(storageKey));
  const [elapsed, setElapsed] = useState(0);

  const copyPrompt = () => {
    navigator.clipboard.writeText(b.aiPrompt);
    toast.success(`AI Prompt for ${b.id} copied!`);
  };

  const pickVideoUrl = (d: any): string | null => {
    return (
      d?.video?.url ||
      d?.result?.video?.url ||
      d?.data?.video?.url ||
      d?.data?.generated?.[0] ||
      d?.generated?.[0] ||
      d?.output?.[0] ||
      d?.url ||
      null
    );
  };

  const pollTask = async (id: string) => {
    // Poll for up to 20 minutes (1080p can take 5–15 min)
    const start = Date.now();
    for (let i = 0; i < 240; i++) {
      await new Promise((r) => setTimeout(r, 5000));
      setElapsed(Math.floor((Date.now() - start) / 1000));
      const { data, error } = await supabase.functions.invoke("magnific-video", {
        body: { action: "status", task_id: id, model: "wan-2-5-t2v-1080p" },
      });
      if (error) throw new Error(error.message);
      if (data?.ok === false) {
        throw new Error(data?.error?.message || data?.error || data?.message || `Upstream ${data?.upstream_status || ""}`);
      }
      const s = (data?.status || data?.data?.status || "").toUpperCase();
      const url = pickVideoUrl(data);
      if (url) {
        setVideoUrl(url);
        setStatus("success");
        localStorage.setItem(urlKey, url);
        localStorage.removeItem(storageKey);
        toast.success(`Video ready for ${b.id}!`);
        return;
      }
      if (s === "FAILED" || s === "ERROR") {
        throw new Error(data?.error?.message || "Generation failed");
      }
    }
    throw new Error("Timed out after 20 minutes — check Magnific dashboard");
  };

  const triggerGeneration = async () => {
    setStatus("generating");
    setVideoUrl(null);
    try {
      const { data, error } = await supabase.functions.invoke("magnific-video", {
        body: {
          action: "generate",
          model: "wan-2-5-t2v-1080p",
          prompt: b.aiPrompt,
          aspect_ratio: "9:16",
          duration: 5,
        },
      });
      if (error) throw new Error(error.message);
      if (data?.ok === false || data?.error) {
        const msg = typeof data?.error === "string" ? data.error : (data?.error?.message || data?.message || `Upstream ${data?.upstream_status || ""}`);
        throw new Error(msg || "API error");
      }
      const id = data?.id || data?.task_id || data?.data?.id || data?.data?.task_id;
      if (!id) {
        // Maybe it returned the URL directly (sync)
        const url = pickVideoUrl(data);
        if (url) { setVideoUrl(url); setStatus("success"); toast.success("Video ready!"); return; }
        throw new Error("No task_id returned");
      }
      setTaskId(id);
      localStorage.setItem(storageKey, id);
      toast.success(`Generation started — polling for ${b.id}`);
      await pollTask(id);
    } catch (err: any) {
      console.error("Video Generation Error:", err);
      setStatus("error");
      toast.error(`Failed: ${err.message || "Unknown error"}`);
    }
  };

  // Resume polling on mount if a task was in flight
  useEffect(() => {
    if (taskId && !videoUrl && status !== "generating") {
      setStatus("generating");
      pollTask(taskId).catch((err) => {
        console.error(err);
        setStatus("error");
        toast.error(`Failed: ${err.message}`);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-[10px] uppercase tracking-wider border-primary/20 text-primary">
                {b.id}
              </Badge>
              <Badge 
                variant={status === "success" ? "default" : "secondary"} 
                className="text-[10px] font-normal"
              >
                {status === "generating" ? "Generating..." : status === "success" ? "Sent to AI" : b.category}
              </Badge>
            </div>
            <CardTitle className="text-base leading-tight group-hover:text-primary transition-colors">
              {b.hook}
            </CardTitle>
          </div>
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {videoUrl && (
          <video
            src={videoUrl}
            controls
            className="w-full rounded-lg border border-primary/20"
          />
        )}
        <div className="space-y-2">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Script (15s)</div>
          <p className="text-xs text-foreground/80 leading-relaxed italic border-l-2 border-primary/30 pl-3">
            {b.core}
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Visual Direction</div>
          <p className="text-xs text-foreground/70">{b.visuals}</p>
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <Button 
            variant="default" 
            size="sm" 
            className="w-full text-[10px] font-semibold h-9 shadow-lg shadow-primary/20"
            onClick={triggerGeneration}
            disabled={status === "generating"}
          >
            {status === "generating" ? (
              <Zap className="h-3 w-3 mr-2 animate-pulse text-amber-300" />
            ) : (
              <Video className="h-3 w-3 mr-2" />
            )}
            {status === "generating"
              ? `Generating… ${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, "0")} (5–15 min)`
              : videoUrl
              ? "Regenerate"
              : "Trigger AI Generation"}
          </Button>
          {videoUrl && (
            <Button
              variant="outline"
              size="sm"
              className="w-full text-[10px] h-8"
              onClick={() => window.open(videoUrl, "_blank")}
            >
              Download / Open Video
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full text-[9px] h-7 text-muted-foreground hover:text-primary"
            onClick={copyPrompt}
          >
            Copy Prompt & Keywords
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function VideoBriefs() {
  const [search, setSearch] = useState("");

  const filtered = VIDEO_BRIEFS.filter(
    (b) =>
      b.hook.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Video Factory — AI Generation"
        subtitle="15-second high-impact videos for Diabetes, Hypertension, and Routine Care. Use the prompts below with Kling-v2 or Mystic."
      />

      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by condition, category, or ID..."
              className="pl-10 bg-card/50 border-border/40 h-11"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Activity className="h-3 w-3" />
            <span>Target: 100 videos/month</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((b) => (
            <VideoBriefCard key={b.id} b={b} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center space-y-3">
            <Video className="h-12 w-12 text-muted-foreground/30 mx-auto" />
            <div className="text-muted-foreground">No briefs found matching your search.</div>
          </div>
        )}
      </div>
    </div>
  );
}
