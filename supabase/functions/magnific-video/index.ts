import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const BASE = "https://api.magnific.com";

// Map a "model" key to its Magnific endpoint.
// All are async: POST returns task_id, GET /{task_id} returns status + result.
const MODEL_ENDPOINTS: Record<string, string> = {
  "wan-2-5-t2v-1080p": "/v1/ai/text-to-video/wan-2-5-t2v-1080p",
  "ltx-2-pro": "/v1/ai/text-to-video/ltx-2-pro",
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
        return new Response(JSON.stringify({ error: "task_id required" }), {
          status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const resp = await fetch(`${BASE}${endpoint}/${taskId}`, {
        headers: { "x-magnific-api-key": apiKey },
      });
      const data = await resp.json().catch(() => ({}));
      return new Response(JSON.stringify(data), {
        status: resp.status, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // generate
    const payload: Record<string, unknown> = {
      prompt: body.prompt,
      aspect_ratio: body.aspect_ratio || "9:16",
      duration: body.duration || 5,
    };
    if (body.resolution) payload.resolution = body.resolution;

    const resp = await fetch(`${BASE}${endpoint}`, {
      method: "POST",
      headers: {
        "x-magnific-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await resp.json().catch(() => ({}));
    return new Response(JSON.stringify(data), {
      status: resp.status, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});