import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const DEFAULTS = {
  company_name: "MedPharma Alliance International",
  description: "Ghanaian health-tech / e-pharmacy. Customers order acute & chronic medication via the mCare app or call center; we deliver. Main site: medpharma.care. Product: mcare.medpharma.care.",
  audience: "Ghanaians (esp. Accra) living with chronic conditions (diabetes, hypertension, asthma); HR/benefits managers at banks, insurers, and corporates.",
  tone: "Trustworthy, warm, locally rooted, expert, action-oriented. No fearmongering. No medical claims.",
  keywords: "best health tech company in Ghana, online pharmacy Ghana, medication delivery Accra, e-pharmacy Ghana, chronic care app Ghana, mCare app",
  services: "On-demand medication delivery, chronic care subscription, B2B2C partnerships with banks/insurers/corporates, customer service line 030 290 9731.",
  competitors: "mPharma, Bloom Healthcare, OnePharma, local independent pharmacies.",
};

export default function Brand() {
  const [form, setForm] = useState<any>(DEFAULTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("brand_context").select("*").maybeSingle();
      if (data) setForm({ ...DEFAULTS, ...data });
      setLoading(false);
    })();
  }, []);

  const save = async () => {
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return;
    const payload = { ...form, user_id: u.user.id };
    delete payload.id; delete payload.updated_at;
    const { error } = await supabase.from("brand_context").upsert(payload, { onConflict: "user_id" });
    if (error) return toast.error(error.message);
    toast.success("Brand context saved — every AI draft will now use this");
  };

  if (loading) return <div className="p-12 text-muted-foreground">Loading…</div>;

  return (
    <>
      <PageHeader
        title="Brand Context"
        subtitle="This is fed into every AI draft so blocks are on-brand, on-tone, and on-target. Edit anytime."
      />
      <div className="max-w-3xl mx-auto p-6">
        <Card className="p-6 shadow-card space-y-4">
          <Field label="Company name" value={form.company_name} onChange={(v) => setForm({ ...form, company_name: v })} />
          <Field label="What we do (1–3 lines)" value={form.description} onChange={(v) => setForm({ ...form, description: v })} multiline />
          <Field label="Target audience" value={form.audience} onChange={(v) => setForm({ ...form, audience: v })} multiline />
          <Field label="Voice & tone" value={form.tone} onChange={(v) => setForm({ ...form, tone: v })} multiline />
          <Field label="Priority SEO keywords" value={form.keywords} onChange={(v) => setForm({ ...form, keywords: v })} multiline />
          <Field label="Services / offerings" value={form.services} onChange={(v) => setForm({ ...form, services: v })} multiline />
          <Field label="Competitors" value={form.competitors} onChange={(v) => setForm({ ...form, competitors: v })} multiline />
          <Button onClick={save} className="w-full gradient-primary text-primary-foreground hover:opacity-90">Save brand context</Button>
        </Card>
      </div>
    </>
  );
}

function Field({ label, value, onChange, multiline }: any) {
  return (
    <div>
      <Label className="text-xs">{label}</Label>
      {multiline
        ? <Textarea value={value || ""} onChange={(e) => onChange(e.target.value)} rows={3} />
        : <Input value={value || ""} onChange={(e) => onChange(e.target.value)} />}
    </div>
  );
}