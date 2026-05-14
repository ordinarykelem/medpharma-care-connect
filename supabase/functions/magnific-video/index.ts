import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const BASE = "https://api.magnific.com";
const RETRYABLE_UPSTREAM_STATUSES = new Set([403, 408, 409, 425, 429, 500, 502, 503, 504]);

const parseUpstreamResponse = async (resp: Response) => {
  const text = await resp.text();
  let data: any;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }

  const message = String(data?.error?.message || data?.message || data?.error || "").toLowerCase();
  console.log(`Magnific Upstream Status: ${resp.status}`);
  return {
    ok: resp.ok,
    upstream_status: resp.status,
    upstream_body: data,
    retry_after: resp.headers.get("retry-after"),
    retryable:
      RETRYABLE_UPSTREAM_STATUSES.has(resp.status) ||
      message.includes("blocked") ||
      message.includes("rate") ||
      message.includes("temporarily") ||
      message.includes("too many"),
    ...data,
  };
};

// Map a "model" key to its Magnific endpoint.
// All are async: POST returns task_id, GET /{task_id} returns status + result.
const MODEL_ENDPOINTS: Record<string, string> = {
  "wan-2-5-t2v-1080p": "/v1/ai/text-to-video/wan-2-5-t2v-1080p",
  "ltx-2-pro": "/v1/ai/text-to-video/ltx-2-pro",
  "kling-v3-std": "/v1/ai/video/kling-v3-std",
  "elevenlabs-tts": "/v1/ai/audio/text-to-speech",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const apiKey = Deno.env.get("MAGNIFIC_API_KEY");
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "MAGNIFIC_API_KEY not configured" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const action = body.action || "generate";
    const model = body.model || "wan-2-5-t2v-1080p";
    const endpoint = MODEL_ENDPOINTS[model];
    if (!endpoint) {
      return new Response(JSON.stringify({ error: `Unknown model: ${model}` }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "status") {
      const taskId = body.task_id;
      if (!taskId) {
        return new Response(JSON.stringify({ ok: false, error: "task_id required" }), {
          status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const resp = await fetch(`${BASE}${endpoint}/${taskId}`, {
        headers: { "x-magnific-api-key": apiKey },
      });
      const data = await parseUpstreamResponse(resp);
      return new Response(
        JSON.stringify(data),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // generate
    // Build prompt with native voiceover instruction for Kling 2.6 Pro
    const isKling = model.includes("kling");
    const finalPrompt = isKling && body.script 
      ? `Voiceover Script: "${body.script}". Visual Direction: ${body.prompt}` 
      : body.prompt;

    const payload: Record<string, unknown> = {
      prompt: finalPrompt,
      aspect_ratio: body.aspect_ratio || "9:16",
      duration: Number(body.duration || 10),
      sound: true, // Enable native audio co-generation (supported by Kling 2.6 Pro)
      enable_prompt_expansion: body.enable_prompt_expansion ?? true,
    };

    // Special handling for Voiceover
    if (model === "elevenlabs-tts") {
      payload.text = body.prompt; // Map prompt to text for TTS
      payload.voice_id = body.voice_id || "ghanaian-male-01"; // Placeholder for Ghanaian voice
      delete payload.aspect_ratio;
      delete payload.duration;
    }
    if (body.negative_prompt) payload.negative_prompt = String(body.negative_prompt);
    if (body.resolution) payload.resolution = body.resolution;

    const resp = await fetch(`${BASE}${endpoint}`, {
      method: "POST",
      headers: {
        "x-magnific-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await parseUpstreamResponse(resp);
    return new Response(
      JSON.stringify(data),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: (e as Error).message }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});