import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, HeartPulse, Brain, Droplets, Wind, Activity, Zap, Smartphone } from "lucide-react";
import { toast } from "sonner";

const ASSETS = [
  {
    category: "Heart Health",
    icon: HeartPulse,
    hook: "Your heart is working too hard.",
    script: "High blood pressure is silent. It strains your heart every second. Check your numbers weekly - it's the only way to know.",
  },
  {
    category: "Diabetes",
    icon: Brain,
    hook: "Your body's fuel sensor.",
    script: "Diabetes means your body's sugar sensor needs a bit of help. Routine medication keeps the balance steady so you can keep moving.",
  },
  {
    category: "Kidney Care",
    icon: Droplets,
    hook: "Your body's master filter.",
    script: "Your kidneys filter everything you consume. High blood pressure and sugar can clog the system. Routine medication keeps the filters clear.",
  },
  {
    category: "Asthma / Lungs",
    icon: Wind,
    hook: "Free your breath!",
    script: "If your lungs dey tight, no wait for attack before you look for your inhaler. Daily adherence keeps the air flowing free.",
  },
  {
    category: "Hypertension (Stress)",
    icon: Activity,
    hook: "Stress is a heart issue.",
    script: "Constant stress raises your blood pressure. 5 minutes of deep breathing today protects your heart for years. Breathe in.",
  },
  {
    category: "Medication Adherence",
    icon: Zap,
    hook: "Is your medicine 'too heavy'?",
    script: "Taking half your dose because it's 'strong' doesn't help. It only makes the sickness stronger. Take exactly what the doctor ordered.",
  },
];

const BACK_SIDE = {
  title: "Want to know more?",
  cta: "Scan to download the MedPharma App today on Google Play Store or the App Store and get a discount on your next order.",
};

export default function CanvaKit() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <div className="min-h-screen pb-20">
      <PageHeader
        title="Canva Copy-Paste Kit"
        subtitle="ATM-sized health cards for medication delivery packages. Optimized for quick copy-pasting into your Canva designs."
      />

      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                Back Side Design (Static)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Headline</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard(BACK_SIDE.title, "Headline")}>
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-sm font-bold">{BACK_SIDE.title}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">CTA Text</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => copyToClipboard(BACK_SIDE.cta, "CTA Text")}>
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">{BACK_SIDE.cta}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/40 bg-card/50">
            <CardHeader>
              <CardTitle className="text-sm">Design Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-border/40 pb-2">
                <span className="text-muted-foreground">Dimensions</span>
                <span className="font-semibold">3.375" x 2.125" (ATM Card)</span>
              </div>
              <div className="flex justify-between border-b border-border/40 pb-2">
                <span className="text-muted-foreground">Primary Color</span>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#065F46]" />
                  <span className="font-mono">#065F46 (Emerald Green)</span>
                </div>
              </div>
              <div className="flex justify-between border-b border-border/40 pb-2">
                <span className="text-muted-foreground">Safe Margin</span>
                <span className="font-semibold">0.125" (all sides)</span>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {ASSETS.map((asset) => (
            <Card key={asset.category} className="group hover:border-primary/40 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-[10px] font-normal uppercase tracking-wider">
                    {asset.category}
                  </Badge>
                  <asset.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-sm leading-tight">{asset.hook}</CardTitle>
                  <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0" onClick={() => copyToClipboard(asset.hook, "Hook")}>
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="relative group/copy">
                  <p className="text-xs text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-3 py-1">
                    {asset.script}
                  </p>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="absolute -right-2 -top-2 h-7 px-2 opacity-0 group-hover/copy:opacity-100 transition-opacity shadow-sm"
                    onClick={() => copyToClipboard(asset.script, "Script")}
                  >
                    <Copy className="h-3 w-3 mr-1" /> Copy Script
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
