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
Goal: rank for "best health tech company in Ghana", "online pharmacy Ghana", "medication delivery Accra"; drive app downloads and order volume.
`.trim();

const SYSTEM = `You are the senior digital marketing strategist for MedPharma Alliance International, a Ghanaian health-tech e-pharmacy.
Voice: trustworthy, warm, expert, locally rooted (Ghana / Accra), action-oriented.
Always produce work that a developer or social manager can ship without rewriting.
Use specific Ghana / Accra references where natural. Never invent medical claims.
Output clean Markdown unless the user asks for HTML/JSON.`;

const PROMPT_BY_TYPE: Record<string, (input: any, brand: string) => string> = {
  seo_blog: ({ topic, keywords, audience }, brand) => `${brand}

Draft a complete SEO blog brief AND the full article (1100-1500 words) targeting:
Topic: ${topic}
Primary keywords: ${keywords || "best health tech company in Ghana, online pharmacy Ghana"}
Audience: ${audience || "Ghanaians managing chronic conditions; HR managers at banks/insurers"}

Return Markdown with these sections:
## SEO Brief
- Target URL slug
- Primary keyword + 4-6 secondary keywords
- Meta title (<60 chars)
- Meta description (<155 chars)
- Suggested internal links
- Featured snippet target (1 paragraph or list)

## Article Outline
H1, H2s, H3s

## Full Article
Publish-ready Markdown. Include FAQ section (3-5 Q&A) at the end. Use Ghana context. Mention MedPharma's mCare app naturally with one CTA paragraph.`,

  meta_tags: ({ topic, url }, brand) => `${brand}

For the page: ${url || topic}
Generate optimized on-page SEO assets the dev team can paste directly:

## Title Tag (<60 chars)
## Meta Description (<155 chars)
## OG Title / OG Description / OG Image alt text
## Twitter Card title + description
## H1
## 5 H2 suggestions
## JSON-LD schema (Organization + Service if relevant) — full <script type="application/ld+json"> block
## Canonical URL recommendation
## 3 alt-text suggestions for hero/section images`,

  social_post: ({ platform, topic, cta }, brand) => `${brand}

Write 3 distinct ${platform || "LinkedIn"} post variants about: ${topic}
CTA: ${cta || "download mCare app or call our pharmacy line"}

Tailor length, tone, and hashtags to ${platform || "LinkedIn"}:
- LinkedIn: 150-220 words, professional, hook in line 1, 5-7 hashtags
- Facebook: 80-130 words, friendly, emoji-light, 3-5 hashtags
- Instagram: 100-150 words, warm + visual, line breaks, 8-15 hashtags
- TikTok: caption + 30-second video script with on-screen text cues, trending hooks

## Variant 1 / Variant 2 / Variant 3
End each with: Suggested image/video brief + best posting time (Ghana time GMT).`,

  gbp_post: ({ topic, offer }, brand) => `${brand}

Draft 3 Google Business Profile post variants for MedPharma (Accra). Topic: ${topic}
${offer ? `Offer/CTA: ${offer}` : ""}

Each variant: 100-300 chars, action-oriented, includes one CTA button suggestion (Call now / Learn more / Order online), and a 1-line image brief.`,

  review_reply: ({ rating, review }, brand) => `${brand}

Draft 2 professional Google review reply variants.
Star rating: ${rating}
Review text: """${review}"""

Tone: warm, accountable, never defensive. If negative, acknowledge + offer a private channel (030 290 9731 / care@medpharma.care). Keep under 90 words. Mention MedPharma by name once.`,

  gsc_fix: ({ issue, urls }, brand) => `${brand}

Google Search Console issue to resolve: ${issue}
Affected URLs (sample): ${urls || "n/a"}

Produce a developer-ready ticket:
## Summary
## Likely Root Cause
## Step-by-step Fix (numbered, code snippets where relevant — htaccess, robots.txt, meta tags, redirects, schema)
## Acceptance Criteria
## How to Validate in GSC after deploy`,

  schema_markup: ({ pageType, details }, brand) => `${brand}

Generate production-ready JSON-LD for: ${pageType}
Details: ${details || "use sensible MedPharma defaults"}

Return:
## JSON-LD
\`\`\`html
<script type="application/ld+json"> ... </script>
\`\`\`
## Where to place it
## Validation steps`,
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

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: userPrompt },
        ],
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