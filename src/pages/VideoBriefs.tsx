import { useEffect, useRef, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Video, Search, Brain, Heart, Activity, ShieldCheck, Zap, Ghost, Loader2, Music, Download, Sparkles } from "lucide-react";
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

const SIMULATED_VIDEOS: Record<string, string> = {
  "Condition Deep-Dive": "/video_downloads/V-003.mp4", 
  "Myth Buster": "/video_downloads/V-002.mp4",
  "Health Tip": "/video_downloads/V-031.mp4",
  "Routine Adherence": "/video_downloads/V-003.mp4",
  "App Feature": "/video_downloads/V-079.mp4",
  "Seasonal": "/video_downloads/V-031.mp4",
};

const SIMULATED_AUDIOS = [
  "/video_downloads/V-003.mp4" 
];

function VideoBriefCard({ b, isDemoMode, setIsDemoMode }: { b: VideoBrief; isDemoMode: boolean; setIsDemoMode: (v: boolean) => void }) {
  const Icon = CATEGORY_ICONS[b.category] ?? Video;
  const storageKey = `magnific-task-${b.id}`;
  const urlKey = `magnific-url-${b.id}`;
  const voiceKey = `magnific-voice-${b.id}`;
  
  const [status, setStatus] = useState<"idle" | "generating" | "success" | "error">(
    () => (localStorage.getItem(urlKey) ? "success" : "idle")
  );
  const [voiceStatus, setVoiceStatus] = useState<"idle" | "generating" | "success" | "error">(
    () => (localStorage.getItem(voiceKey) ? "success" : "idle")
  );
  const [videoUrl, setVideoUrl] = useState<string | null>(() => localStorage.getItem(urlKey));
  const [voiceUrl, setVoiceUrl] = useState<string | null>(() => localStorage.getItem(voiceKey));
  const [taskId, setTaskId] = useState<string | null>(() => localStorage.getItem(storageKey));
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const resumeStartedRef = useRef(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Exporter & Unified batch status states
  const [isGeneratingComplete, setIsGeneratingComplete] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  // Auto-wipe obsolete cached external URLs to ensure fresh same-origin local assets are loaded
  useEffect(() => {
    const cachedVid = localStorage.getItem(urlKey);
    if (cachedVid && (cachedVid.includes("mixkit") || cachedVid.includes("magnific.com"))) {
      localStorage.removeItem(urlKey);
      localStorage.removeItem(voiceKey);
      setVideoUrl(null);
      setVoiceUrl(null);
      setStatus("idle");
      setVoiceStatus("idle");
    }
  }, [urlKey, voiceKey]);

  const copyKling = () => {
    const { startScene, endScene } = (() => {
      const scenes = b.visuals.split("->").map(s => s.trim());
      return {
        startScene: scenes[0] || b.visuals,
        endScene: scenes[scenes.length - 1] || "",
      };
    })();

    const klingPrompt = `Starting with the uploaded reference image as the first frame showing: ${startScene}.
Action & Motion: Precise motion control. The video animates seamlessly to show: ${endScene}.
Settings: 9:16 vertical ratio, 14 seconds duration, 720p resolution, Scene: Video.
Narration & Audio Context: The video aligns with the voiceover: "${b.core}". Background audio should include subtle ambient sounds matching this context.
Style: Cinematic 3D animation, photorealistic, professional lighting, highly detailed textures, smooth natural camera movement.`;

    navigator.clipboard.writeText(klingPrompt);
    toast.success(`Kling 3.0 Motion Control Prompt copied!`);
  };

  const copySeedance = () => {
    const { startScene, endScene } = (() => {
      const scenes = b.visuals.split("->").map(s => s.trim());
      return {
        startScene: scenes[0] || b.visuals,
        endScene: scenes[scenes.length - 1] || "",
      };
    })();

    const seedancePrompt = `@image 1 Starting with the first frame showing: ${startScene}.
Action & Motion: The camera smoothly pans and transitions to show: ${endScene}.
Settings: 14 seconds duration, 9:16 vertical aspect ratio, 720p resolution, sound ON.
Narration & Audio Context: The video aligns with the voiceover: "${b.core}". Background audio should include subtle ambient sounds matching this context.
Style: Smooth fluid motion, highly realistic animation, cinematic lighting, 4K texture detail, photorealistic.`;

    navigator.clipboard.writeText(seedancePrompt);
    toast.success(`Seedance 2.0 Fast Prompt copied!`);
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
    const start = Date.now();
    let retryableErrors = 0;
    for (let i = 0; i < POLL_MAX_ATTEMPTS; i++) {
      await waitForStatusSlot();
      setElapsed(Math.floor((Date.now() - start) / 1000));
      const { data, error } = await supabase.functions.invoke("magnific-video", {
        body: { action: "status", task_id: id, model: "wan-2-5-t2v-1080p" },
      });
      if (error) throw new Error(error.message);
      if (data?.ok === false) {
        if (isRetryableApiResponse(data) && retryableErrors < 12) {
          retryableErrors += 1;
          setErrorMessage(`Magnific is temporarily limiting status checks. Waiting before retry ${retryableErrors}/12…`);
          await wait(Math.min(60_000, POLL_INTERVAL_MS * retryableErrors));
          continue;
        }
        throw new Error(getApiMessage(data));
      }
      setErrorMessage(null);
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
    throw new Error("Timed out after 25 minutes — check your Magnific account tasks");
  };

  const triggerGeneration = async () => {
    setStatus("generating");
    setVideoUrl(null);
    setErrorMessage(null);
    setElapsed(0);

    if (isDemoMode) {
      const interval = setInterval(() => {
        setElapsed(prev => prev + 1);
      }, 1000);
      await wait(3000);
      clearInterval(interval);
      const video = SIMULATED_VIDEOS[b.category] || SIMULATED_VIDEOS["Condition Deep-Dive"];
      setVideoUrl(video);
      setStatus("success");
      localStorage.setItem(urlKey, video);
      toast.success(`Simulated visuals ready for ${b.id}!`);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke("magnific-video", {
        body: {
          action: "generate",
          model: "wan-2-5-t2v-1080p",
          prompt: b.aiPrompt,
          script: b.core, 
          category: b.category,
          language: b.language,
          aspect_ratio: "9:16",
          duration: 14, 
        },
      });
      if (error) throw new Error(error.message);
      if (data?.ok === false || data?.error) {
        const msg = typeof data?.error === "string" 
          ? data.error 
          : (data?.error?.message || data?.message || data?.upstream_body?.message || `Upstream Error: ${data?.upstream_status || "Unknown"}`);
        throw new Error(msg);
      }
      const id = data?.id || data?.task_id || data?.data?.id || data?.data?.task_id;
      if (!id) {
        const url = pickVideoUrl(data);
        if (url) { setVideoUrl(url); setStatus("success"); toast.success("Video ready!"); return; }
        throw new Error("No task_id returned");
      }
      setTaskId(id);
      localStorage.setItem(storageKey, id);
      nextStatusCheckAt = Math.max(nextStatusCheckAt, Date.now() + POLL_INTERVAL_MS);
      toast.success(`Generation started — polling for ${b.id}`);
      await pollTask(id);
    } catch (err: any) {
      console.error("Video Generation Error:", err);
      setStatus("error");
      setErrorMessage(err.message || "Unknown error");
      toast.error(`Failed: ${err.message || "Unknown error"}`);

      // Auto-fallback helper
      if (err.message.includes("401") || err.message.includes("Unauthorized") || err.message.includes("non-2xx") || err.message.includes("API_KEY")) {
        toast.warning("Auto-switched to Interactive Demo Studio so you can preview everything without API Keys!", { duration: 8000 });
        setIsDemoMode(true);
      }
    }
  };

  const playBrowserVoice = () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(b.core);
    utterance.rate = 0.85; 
    utterance.pitch = 1.0;
    const voices = window.speechSynthesis.getVoices();
    const narratorVoice = voices.find(v => v.name.includes("Google") && v.lang.startsWith("en")) || voices[0];
    if (narratorVoice) utterance.voice = narratorVoice;
    window.speechSynthesis.speak(utterance);
    toast.info("Playing browser voice preview...");
  };

  const triggerVoiceover = async () => {
    setVoiceStatus("generating");
    setVoiceUrl(null);
    playBrowserVoice();

    if (isDemoMode) {
      await wait(2000);
      const audio = SIMULATED_AUDIOS[0];
      setVoiceUrl(audio);
      setVoiceStatus("success");
      localStorage.setItem(voiceKey, audio);
      toast.success(`Simulated Voiceover ready for ${b.id}!`);
      return;
    }

    try {
      const resp = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/magnific-video`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${(await supabase.auth.getSession()).data.session?.access_token || ""}`,
        },
        body: JSON.stringify({
          action: "generate",
          model: "elevenlabs-tts",
          prompt: b.core,
        }),
      });

      if (!resp.ok) {
        const error = await resp.json();
        throw new Error(error.error || "Voiceover generation failed");
      }

      const blob = await resp.blob();
      const url = URL.createObjectURL(blob);
      setVoiceUrl(url);
      setVoiceStatus("success");
      localStorage.setItem(voiceKey, url);
      toast.success(`Professional Voiceover ready for ${b.id}!`);
    } catch (err: any) {
      console.error("Voiceover Error:", err);
      setVoiceStatus("error");
      if (err.message.includes("ELEVENLABS_API_KEY")) {
        toast.error("ELEVENLABS_API_KEY missing in Supabase. Falling back to Browser Voice.");
      } else {
        toast.error(`Professional Voiceover failed: ${err.message}`);
      }
    }
  };

  // Unified Dual-Trigger Flow
  const generateCompleteVideo = async () => {
    setIsGeneratingComplete(true);
    setErrorMessage(null);
    
    if (isDemoMode) {
      toast.info("Launching simulated high-fidelity AI generation...", { duration: 3000 });
      
      setStatus("generating");
      setVoiceStatus("generating");
      setElapsed(0);
      
      const interval = setInterval(() => {
        setElapsed(prev => prev + 1);
      }, 1000);

      await wait(3000); 
      clearInterval(interval);
      
      const video = SIMULATED_VIDEOS[b.category] || SIMULATED_VIDEOS["Condition Deep-Dive"];
      setVideoUrl(video);
      setStatus("success");
      localStorage.setItem(urlKey, video);

      await wait(1500); 
      
      const audio = SIMULATED_AUDIOS[0];
      setVoiceUrl(audio);
      setVoiceStatus("success");
      localStorage.setItem(voiceKey, audio);
      
      setIsGeneratingComplete(false);
      toast.success("Simulated AI Video & Voiceover compiled successfully!");
      return;
    }

    toast.info("Launching simultaneous AI Video & Voiceover synthesis...", { duration: 4000 });
    
    // Fire both tasks in parallel
    const videoPromise = triggerGeneration();
    const voicePromise = triggerVoiceover();

    try {
      await Promise.all([videoPromise, voicePromise]);
    } catch (err) {
      console.error("Complete video generation error:", err);
    } finally {
      setIsGeneratingComplete(false);
    }
  };

  // Real-Time Browser-Native Audio/Video Merger Exporter
  const exportUnifiedVideo = async () => {
    if (!videoUrl) {
      toast.error("Video URL is missing. Please generate the video first.");
      return;
    }

    setIsExporting(true);
    setExportProgress(0);
    toast.info("Initializing silent rendering engine...", { duration: 3000 });

    let localVideoUrl = videoUrl;
    let localVoiceUrl = voiceUrl;
    const objectUrlsToCleanup: string[] = [];

    try {
      // 1. Pre-fetch assets only if they are external HTTP/HTTPS URLs to bypass CORS constraints
      const isExternalVideo = videoUrl.startsWith("http") && !videoUrl.includes(window.location.host) && !videoUrl.startsWith("blob:");
      if (isExternalVideo) {
        setExportProgress(5);
        const resp = await fetch(videoUrl);
        if (!resp.ok) throw new Error("Failed to pre-fetch video file.");
        const vBlob = await resp.blob();
        localVideoUrl = URL.createObjectURL(vBlob);
        objectUrlsToCleanup.push(localVideoUrl);
      }

      const isExternalVoice = voiceUrl && voiceUrl.startsWith("http") && !voiceUrl.includes(window.location.host) && !voiceUrl.startsWith("blob:");
      if (isExternalVoice) {
        setExportProgress(10);
        const resp = await fetch(voiceUrl);
        if (!resp.ok) throw new Error("Failed to pre-fetch voiceover audio file.");
        const aBlob = await resp.blob();
        localVoiceUrl = URL.createObjectURL(aBlob);
        objectUrlsToCleanup.push(localVoiceUrl);
      }

      setExportProgress(15);

      // 2. Instantiate hidden rendering elements
      const tempVideo = document.createElement("video");
      const tempAudio = document.createElement("audio");

      tempVideo.src = localVideoUrl;
      tempVideo.muted = false;
      tempVideo.volume = 0.25; // Duck ambient sounds to 25%
      tempVideo.playsInline = true;

      const hasVoice = !!localVoiceUrl;
      if (hasVoice) {
        tempAudio.src = localVoiceUrl;
        tempAudio.muted = false;
        tempAudio.volume = 1.0; // Max crisp voiceover
      }

      // Wait for elements to be ready
      await new Promise<void>((resolve, reject) => {
        tempVideo.onloadedmetadata = () => resolve();
        tempVideo.onerror = () => reject(new Error("Failed to load video metadata."));
      });

      if (hasVoice) {
        await new Promise<void>((resolve, reject) => {
          tempAudio.onloadedmetadata = () => resolve();
          tempAudio.onerror = () => reject(new Error("Failed to load audio metadata."));
        });
      }

      tempVideo.currentTime = 0;
      if (hasVoice) tempAudio.currentTime = 0;

      // 3. Setup Web Audio API mixing node
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const dest = audioCtx.createMediaStreamDestination();

      const videoAudioSource = audioCtx.createMediaElementSource(tempVideo);
      videoAudioSource.connect(dest);

      let voiceAudioSource;
      if (hasVoice) {
        voiceAudioSource = audioCtx.createMediaElementSource(tempAudio);
        voiceAudioSource.connect(dest);
      }

      // 4. Capture Visual Track & Mix Audio Tracks
      const videoStream = (tempVideo as any).captureStream 
        ? (tempVideo as any).captureStream() 
        : (tempVideo as any).mozCaptureStream();

      const combinedTracks = [
        ...videoStream.getVideoTracks(),
        ...dest.stream.getAudioTracks()
      ];

      const combinedStream = new MediaStream(combinedTracks);

      // 5. Setup MediaRecorder
      let mimeType = "video/webm;codecs=vp9,opus";
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = "video/webm";
      }

      const recorder = new MediaRecorder(combinedStream, {
        mimeType,
        videoBitsPerSecond: 3000000 
      });

      const chunks: Blob[] = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      const duration = tempVideo.duration || 14;

      // Progress Tracker
      const progressInterval = setInterval(() => {
        const percent = Math.min(99, 15 + Math.round((tempVideo.currentTime / duration) * 80));
        setExportProgress(percent);
      }, 250);

      recorder.onstop = () => {
        clearInterval(progressInterval);
        setExportProgress(100);

        const videoBlob = new Blob(chunks, { type: "video/webm" });
        const finalUrl = URL.createObjectURL(videoBlob);

        const a = document.createElement("a");
        a.href = finalUrl;
        a.download = `medpharma-care-connect-${b.id}.webm`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Cleanup
        setTimeout(() => {
          URL.revokeObjectURL(finalUrl);
          objectUrlsToCleanup.forEach(url => URL.revokeObjectURL(url));
          audioCtx.close();
          setIsExporting(false);
          toast.success("Complete unified video successfully compiled and downloaded!");
        }, 1000);
      };

      // 6. Play and Record
      recorder.start();
      await tempVideo.play();
      if (hasVoice) await tempAudio.play();

      tempVideo.onended = () => {
        recorder.stop();
        if (hasVoice) tempAudio.pause();
      };

      // Safety timeout
      setTimeout(() => {
        if (recorder.state === "recording") {
          recorder.stop();
          tempVideo.pause();
          if (hasVoice) tempAudio.pause();
        }
      }, (duration + 3) * 1000);

    } catch (err: any) {
      console.error("Export Error:", err);
      objectUrlsToCleanup.forEach(url => URL.revokeObjectURL(url));
      setIsExporting(false);
      toast.error(`Merger failed: ${err.message || "Unknown error"}`);
    }
  };

  const syncPlayback = () => {
    if (!videoRef.current || !audioRef.current) return;
    
    // Balanced audio ducking
    videoRef.current.volume = 0.25;
    audioRef.current.volume = 1.0;

    videoRef.current.onplay = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
    };
    
    videoRef.current.onpause = () => {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
    };
    
    videoRef.current.onseeking = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = videoRef.current!.currentTime;
      }
    };

    videoRef.current.onvolumechange = () => {
      if (audioRef.current && videoRef.current) {
        audioRef.current.muted = videoRef.current.muted;
        audioRef.current.volume = videoRef.current.muted ? 0 : 1.0;
      }
    };
  };

  useEffect(() => {
    syncPlayback();
  }, [videoUrl, voiceUrl]);

  useEffect(() => {
    if (!taskId || videoUrl || resumeStartedRef.current) return;
    resumeStartedRef.current = true;
    setStatus("generating");
    pollTask(taskId).catch((err) => {
      console.error("Video Generation Error:", err);
      setStatus("error");
      setErrorMessage(err.message || "Unknown error");
      toast.error(`Failed: ${err.message || "Unknown error"}`);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isCurrentlyGenerating = status === "generating" || voiceStatus === "generating" || isGeneratingComplete;

  return (
    <Card className="overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group relative">
      
      {/* Exporter Progress HUD overlay */}
      {isExporting && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/85 backdrop-blur-md p-6 text-center space-y-4 transition-all duration-300">
          <div className="relative flex items-center justify-center">
            <Loader2 className="h-16 w-16 text-primary animate-spin" />
            <div className="absolute text-xs font-semibold text-white">{exportProgress}%</div>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white tracking-wide">Compiling Complete AI Video</h4>
            <p className="text-[10px] text-muted-foreground max-w-[200px] leading-relaxed">
              Mixing background effects (25% volume) + voiceover (100% volume) into a single un-fragmented video file...
            </p>
          </div>
          <div className="w-full bg-secondary/50 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-primary to-violet-600 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${exportProgress}%` }}
            />
          </div>
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-[10px] uppercase tracking-wider border-primary/20 text-primary font-mono">
                {b.id}
              </Badge>
              <Badge 
                variant={status === "success" && voiceStatus === "success" ? "default" : "secondary"} 
                className="text-[10px] font-normal"
              >
                {status === "generating" || voiceStatus === "generating" 
                  ? "Generating..." 
                  : status === "success" && voiceStatus === "success" 
                  ? "Ready to Export" 
                  : b.category}
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
          <div className="relative group/video rounded-lg overflow-hidden border border-primary/20 bg-black aspect-[9/16]">
            <video
              ref={videoRef}
              src={videoUrl}
              controls
              className="w-full h-full object-cover"
            />
            {voiceUrl && (
              <div className="absolute top-2 right-2 flex gap-1">
                <Badge variant="default" className="bg-emerald-600 border-none text-[8px] tracking-wider uppercase flex items-center gap-1 py-0.5 shadow-md">
                  <Sparkles className="h-2 w-2 animate-pulse" />
                  Synced Commercial Audio
                </Badge>
              </div>
            )}
          </div>
        )}

        {voiceUrl && (
          <div className="space-y-1 bg-primary/5 p-2.5 rounded-lg border border-primary/10">
            <div className="text-[9px] uppercase tracking-widest text-primary font-bold flex items-center gap-1.5">
              <Music className="h-3 w-3" />
              Professional Ghanaian Voiceover Track
            </div>
            <audio ref={audioRef} src={voiceUrl} controls className="w-full h-8 mt-1.5" />
          </div>
        )}

        {/* Real-time Multi-task Generation Status Board */}
        {isCurrentlyGenerating && (
          <div className="p-3.5 rounded-lg bg-card border border-primary/20 space-y-3 shadow-inner bg-gradient-to-b from-card to-background">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <Loader2 className="h-3 w-3 animate-spin" />
              Generation Progress Dashboard
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-border/20">
                <span className="text-foreground/75 flex items-center gap-2">
                  🎬 Cinematic Visuals (WAN 2.5)
                </span>
                {status === "generating" ? (
                  <Badge variant="outline" className="text-[9px] text-amber-500 border-amber-500/30 animate-pulse bg-amber-500/5 font-mono">
                    Polling {Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, "0")}
                  </Badge>
                ) : status === "success" ? (
                  <Badge variant="default" className="text-[9px] bg-emerald-600 border-none font-semibold">Ready</Badge>
                ) : status === "error" ? (
                  <Badge variant="destructive" className="text-[9px]">Failed</Badge>
                ) : (
                  <Badge variant="outline" className="text-[9px] text-muted-foreground bg-secondary/20 font-mono">Queued...</Badge>
                )}
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-foreground/75 flex items-center gap-2">
                  🎙️ Ghanaian Accent voiceover (11Labs)
                </span>
                {voiceStatus === "generating" ? (
                  <Badge variant="outline" className="text-[9px] text-amber-500 border-amber-500/30 animate-pulse bg-amber-500/5">
                    Synthesizing...
                  </Badge>
                ) : voiceStatus === "success" ? (
                  <Badge variant="default" className="text-[9px] bg-emerald-600 border-none font-semibold">Ready</Badge>
                ) : voiceStatus === "error" ? (
                  <Badge variant="outline" className="text-[9px] text-orange-500 border-orange-500/30 bg-orange-500/5">Browser Voice</Badge>
                ) : (
                  <Badge variant="outline" className="text-[9px] text-muted-foreground bg-secondary/20 font-normal">Queued...</Badge>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Script (14s)</div>
          <p className="text-xs text-foreground/80 leading-relaxed italic border-l-2 border-primary/30 pl-3">
            {b.core}
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Visual Direction</div>
          <p className="text-xs text-foreground/70">{b.visuals}</p>
        </div>

        <div className="pt-2 flex flex-col gap-2">
          {errorMessage && (
            <div className="rounded-md border border-destructive/20 bg-destructive/10 px-3 py-2 text-[10px] leading-relaxed text-destructive font-mono">
              {errorMessage}
            </div>
          )}

          {/* MASTER ONE-CLICK COMPLETE AI VIDEO BUTTON */}
          <Button 
            variant="default" 
            size="sm" 
            className="w-full text-[11px] font-bold h-10 shadow-lg bg-gradient-to-r from-primary to-violet-600 hover:from-primary/95 hover:to-violet-600/95 shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-2 border-none"
            onClick={generateCompleteVideo}
            disabled={isCurrentlyGenerating}
          >
            {isCurrentlyGenerating ? (
              <Loader2 className="h-4 w-4 animate-spin text-white" />
            ) : (
              <Sparkles className="h-4 w-4 text-amber-300 fill-amber-300 animate-pulse" />
            )}
            {isCurrentlyGenerating
              ? `Generating assets...`
              : videoUrl && voiceUrl
              ? "⚡ Regenerate Complete Video"
              : "⚡ Generate Complete Video & Voiceover"}
          </Button>

          {/* SINGLE-FILE COMPLETE DOWNLOAD BUTTON */}
          {videoUrl && (
            <Button
              variant="default"
              size="sm"
              className="w-full text-[11px] font-bold h-9 bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-900/10 transition-all flex items-center justify-center gap-2 border-none"
              onClick={exportUnifiedVideo}
              disabled={isExporting}
            >
              <Download className="h-4 w-4" />
              Download Complete Video (Visual + Voice)
            </Button>
          )}

          <div className="flex gap-2">
            <Button 
              variant="secondary"
              size="sm" 
              className="flex-1 text-[10px] h-8 hover:bg-secondary/80"
              onClick={triggerGeneration}
              disabled={isCurrentlyGenerating}
            >
              🎬 Visual Only
            </Button>
            <Button 
              variant="secondary"
              size="sm" 
              className="flex-1 text-[10px] h-8 hover:bg-secondary/80"
              onClick={triggerVoiceover}
              disabled={isCurrentlyGenerating}
            >
              🎙️ Voice Only
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="px-3 h-8 border-primary/20 text-primary hover:bg-primary/5"
              onClick={playBrowserVoice}
              title="Test script with browser voice"
            >
              🔊
            </Button>
          </div>
          
          <div className="pt-2 flex flex-col gap-2 border-t border-border/20">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Model Prompts</div>
            <div className="flex flex-col gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-[10px] h-8 justify-between hover:bg-primary/10 hover:text-primary transition-colors border-primary/20"
                onClick={copyKling}
              >
                <span>Copy Kling 3.0 Prompt</span>
                <span className="text-[10px] opacity-70 border px-1.5 py-0.5 rounded-sm">Text-to-Video</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-[10px] h-8 justify-between hover:bg-primary/10 hover:text-primary transition-colors border-primary/20"
                onClick={copySeedance}
              >
                <span>Copy Seedance 2.0 Prompt</span>
                <span className="text-[10px] opacity-70 border px-1.5 py-0.5 rounded-sm">Image-to-Video</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function VideoBriefs() {
  const [search, setSearch] = useState("");
  const [isDemoMode, setIsDemoMode] = useState(true); 

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
        subtitle="14-second high-impact videos with native voiceover co-generation. Powered by WAN 2.5."
      />

      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search condition, category, ID..."
                className="pl-10 bg-card/50 border-border/40 h-11 text-xs"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            {/* Interactive Demo vs Live API Switcher */}
            <div className="flex items-center bg-card/65 backdrop-blur-md border border-border/30 p-1 rounded-xl gap-1 shrink-0 shadow-inner w-full sm:w-auto">
              <Button
                variant={isDemoMode ? "default" : "ghost"}
                size="sm"
                className={`text-[10px] font-bold h-9 rounded-lg px-3 flex-1 sm:flex-initial flex items-center justify-center gap-1.5 transition-all duration-300 ${isDemoMode ? "bg-gradient-to-r from-primary to-violet-600 border-none shadow-md shadow-primary/20 text-white" : "text-muted-foreground hover:text-foreground"}`}
                onClick={() => {
                  setIsDemoMode(true);
                  toast.success("Interactive Demo Studio activated! Enjoy seamless zero-config generations.");
                }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                Demo Studio
              </Button>
              <Button
                variant={!isDemoMode ? "default" : "ghost"}
                size="sm"
                className={`text-[10px] font-bold h-9 rounded-lg px-3 flex-1 sm:flex-initial flex items-center justify-center gap-1.5 transition-all duration-300 ${!isDemoMode ? "bg-primary border-none text-white" : "text-muted-foreground hover:text-foreground"}`}
                onClick={() => {
                  setIsDemoMode(false);
                  toast.info("Switched to Live API mode. Ensure your Supabase Secrets are configured!");
                }}
              >
                <Zap className="h-3.5 w-3.5" />
                Live API
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Activity className="h-3 w-3 text-primary animate-pulse" />
            <span>Studio Engine: Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((b) => (
            <VideoBriefCard key={b.id} b={b} isDemoMode={isDemoMode} setIsDemoMode={setIsDemoMode} />
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
