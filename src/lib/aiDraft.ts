import { supabase } from "@/integrations/supabase/client";

export async function aiDraft(block_type: string, input: Record<string, any>) {
  const { data: brand } = await supabase.from("brand_context").select("*").maybeSingle();
  const brandStr = brand
    ? `Company: ${brand.company_name}\nDescription: ${brand.description ?? ""}\nAudience: ${brand.audience ?? ""}\nTone: ${brand.tone ?? ""}\nKeywords: ${brand.keywords ?? ""}\nServices: ${brand.services ?? ""}`
    : "";

  const { data, error } = await supabase.functions.invoke("ai-draft", {
    body: { block_type, input, brand_context: brandStr },
  });
  if (error) throw new Error(error.message);
  if ((data as any)?.error) throw new Error((data as any).error);
  return (data as { content: string }).content;
}