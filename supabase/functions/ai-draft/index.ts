import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const BRAND_FALLBACK = `
Company: MedPharma Alliance International (Ghana). Health-tech / e-pharmacy.
Product app: mCare (mcare.medpharma.care). Main site: medpharma.care.
What we do: customers with chronic + acute conditions order medication via app or call center; we deliver. We partner with banks, insurers, and corporates to serve their staff/members (B2B2C).
Audience: people living with chronic diseases (diabetes, hypertension, etc.), HR/benefits managers at banks & corporates, insurance partners.
Phone: 030 290 9731. Email: care@medpharma.care.
Goal: rank for "best health tech company in Ghana", "online pharmacy Ghana", "medication delivery Accra", "MedPharma", "buy medicine online Ghana"; drive app downloads and order volume.
`.trim();

const SYSTEM = `You are the head of growth for MedPharma Alliance International, a Ghanaian health-tech e-pharmacy.
Voice: trustworthy, warm, expert, locally rooted (Ghana / Accra), action-oriented. Never invent medical claims.
You produce work the marketing lead can copy-paste directly. No hedging, no "consider", no "you might want to".
When asked for ready-to-use text, return ONLY the text — no preface, no explanation, no markdown code fences unless the format requires them.`;

const PROMPT_BY_TYPE: Record<string, (input: any, brand: string) => string> = {
  mission_playbook: ({ keyword, painPoint }, brand) => `${brand}

Build a step-by-step playbook to make MedPharma rank #1 on Google for: "${keyword}"
Current pain: ${painPoint || "competitor ads sit above us; we appear too low"}

Return STRICT JSON (no prose, no code fences) shaped exactly:
{
  "goal": "One sentence describing what 'winning' this keyword looks like",
  "steps": [
    {
      "title": "Short verb-led step name (max 10 words)",
      "kind": "copy_paste | dev_ticket | publish | external | decision",
      "owner": "me | dev_team | boss | agency",
      "estimated_minutes": 5,
      "instructions": "Plain-English instructions: where to go, what to click, what to do. No fluff.",
      "where_to_paste": "The exact destination if applicable, e.g. 'Google Business Profile → Edit profile → Description' or 'medpharma.care homepage <head> tag'. Empty string if not applicable.",
      "body": "The EXACT text/copy/code/script the user should paste or send. Polished, final, brand-on. Empty string if the step is a decision or external action with nothing to paste."
    }
  ]
}

Rules:
- Generate 6 to 10 steps, ordered by impact-per-effort (highest first).
- Mix step kinds. For "${keyword}", typically include:
  * 1 GBP step (copy_paste) — exact business description / category / post body
  * 1 on-page SEO step (dev_ticket) — exact <title>, <meta description>, H1, schema for the dev team
  * 1 content step (copy_paste) — full polished blog intro or full LinkedIn post they can publish today
  * 1 Google Ads step if pain mentions ads (copy_paste) — exact headlines, descriptions, keywords, daily budget recommendation in GHS
  * 1 review/reputation step (copy_paste) — exact email/SMS template asking customers for reviews
  * 1 backlink/PR step (external) — specific Ghanaian publication to pitch + the pitch email body
  * 1 measurement step (decision) — what to check in 14 days
- For dev_ticket steps, write the body as a complete ticket: ## Summary / ## Files to change / ## Code to paste / ## Acceptance criteria.
- For Google Ads, give real Ghana-context headlines (max 30 chars each), descriptions (max 90 chars), and a daily budget in GHS.
- The "body" field must be ready to ship — not a template with [PLACEHOLDERS]. Use real MedPharma details.
- Output MUST be valid JSON parseable by JSON.parse. No trailing commas, no comments.`,

  seo_blog: ({ topic, keywords, audience }, brand) => `${brand}

Draft a complete SEO blog brief AND the full article (1100-1500 words) targeting:
Topic: ${topic}
Primary keywords: ${keywords || "best health tech company in Ghana"}
Audience: ${audience || "Ghanaians managing chronic conditions; HR managers at banks/insurers"}

Return Markdown:
## SEO Brief
- Target URL slug
- Primary keyword + 4-6 secondary keywords
- Meta title (<60 chars)
- Meta description (<155 chars)
- Suggested internal links
- Featured snippet target

## Article Outline
H1, H2s, H3s

## Full Article
Publish-ready Markdown. Include FAQ (3-5 Q&A). Use Ghana context. Mention mCare naturally with one CTA paragraph.`,

  meta_tags: ({ topic, url }, brand) => `${brand}

For the page: ${url || topic}
Generate ready-to-paste assets:

## Title Tag (<60 chars)
## Meta Description (<155 chars)
## OG Title / OG Description / OG Image alt text
## Twitter Card title + description
## H1
## 5 H2 suggestions
## JSON-LD schema — full <script type="application/ld+json"> block
## Canonical URL recommendation
## 3 alt-text suggestions`,

  social_post: ({ platform, topic, cta }, brand) => `${brand}

Write 3 distinct ${platform || "LinkedIn"} post variants about: ${topic}
CTA: ${cta || "download mCare app or call our pharmacy line"}

Tailor to ${platform}:
- LinkedIn: 150-220 words, professional, hook in line 1, 5-7 hashtags
- Facebook: 80-130 words, friendly, 3-5 hashtags
- Instagram: 100-150 words, warm, line breaks, 8-15 hashtags
- TikTok: caption + 30s video script with on-screen text cues

## Variant 1 / Variant 2 / Variant 3
End each: image/video brief + best posting time (GMT).`,

  gbp_post: ({ topic, offer }, brand) => `${brand}

Draft 3 Google Business Profile post variants. Topic: ${topic}
${offer ? `Offer/CTA: ${offer}` : ""}

Each: 100-300 chars, action-oriented, CTA button suggestion, 1-line image brief.`,

  review_reply: ({ rating, review }, brand) => `${brand}

Draft 2 Google review reply variants.
Star rating: ${rating}
Review text: """${review}"""

Warm, accountable, never defensive. If negative, acknowledge + offer private channel (030 290 9731 / care@medpharma.care). Under 90 words.`,

  gsc_fix: ({ issue, urls }, brand) => `${brand}

Google Search Console issue: ${issue}
URLs: ${urls || "n/a"}

Developer-ready ticket:
## Summary / ## Likely Root Cause / ## Step-by-step Fix (with code snippets) / ## Acceptance Criteria / ## How to Validate`,

  schema_markup: ({ pageType, details }, brand) => `${brand}

Generate JSON-LD for: ${pageType}
Details: ${details || "use sensible MedPharma defaults"}

## JSON-LD
\`\`\`html
<script type="application/ld+json"> ... </script>
\`\`\`
## Where to place / ## Validation steps`,
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { block_type, input, brand_context } = await req.json();
    const builder = PROMPT_BY_TYPE[block_type];
    if (!builder) {
      return new Response(JSON.stringify({ error: "Unknown block_type" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const brand = (brand_context && brand_context.trim()) || BRAND_FALLBACK;
    const userPrompt = builder(input || {}, brand);

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) throw new Error("LOVABLE_API_KEY not configured");

    const isJson = block_type === "mission_playbook";

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: userPrompt },
        ],
        ...(isJson ? { response_format: { type: "json_object" } } : {}),
      }),
    });

    if (resp.status === 429) {
      return new Response(JSON.stringify({ error: "Rate limit reached, try again in a minute." }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (resp.status === 402) {
      return new Response(JSON.stringify({ error: "AI credits exhausted. Add credits in Workspace → Usage." }), {
        status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!resp.ok) {
      const t = await resp.text();
      console.error("AI gateway error", resp.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await resp.json();
    const content = data.choices?.[0]?.message?.content ?? "";

    return new Response(JSON.stringify({ content }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("ai-draft error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
