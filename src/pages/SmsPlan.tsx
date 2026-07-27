import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check, MessageSquare } from "lucide-react";
import { toast } from "sonner";

/* ─── DATA ──────────────────────────────────────────────────────────── */
const SMS_CAMPAIGNS = [
  {
    id: "aug-1",
    month: "August",
    date: "August 15",
    title: "Mid-Month Health Check",
    target: "General Audience",
    copy: "Hello [Name]! Health is wealth. Don't wait until you're sick to get care. Get vitamins and fast doctor consults. Download our app: onelink.to/vhzcxh",
  },
  {
    id: "aug-2",
    month: "August",
    date: "August 20",
    title: "World Mosquito Day",
    target: "Malaria Prevention",
    copy: "[Name], protect your family from Malaria this rainy season. Order repellent, nets, and rapid tests delivered today! Download our app: onelink.to/vhzcxh",
  },
  {
    id: "aug-3",
    month: "August",
    date: "August 28",
    title: "Payday & End of Month",
    target: "Routine Medication",
    copy: "Hello [Name], payday is here! Stock up on your routine medications before the month ends. Fast, secure delivery. Download our app: onelink.to/vhzcxh",
  },
  {
    id: "sep-1",
    month: "September",
    date: "September 5",
    title: "Back-to-School Prep",
    target: "Parents & Family",
    copy: "[Name], the kids are back to school! Ensure they are protected with daily multivitamins and a first-aid kit. Download our app: onelink.to/vhzcxh",
  },
  {
    id: "sep-2",
    month: "September",
    date: "September 25",
    title: "World Pharmacists Day",
    target: "General Audience",
    copy: "[Name], celebrate World Pharmacist Day with us! Chat with a verified MedPharma pharmacist online for free today. Download our app: onelink.to/vhzcxh",
  },
  {
    id: "sep-3",
    month: "September",
    date: "September 29",
    title: "World Heart Day",
    target: "Hypertension / BP",
    copy: "Hello [Name]! Today is World Heart Day. Stress and diet affect your BP. Book an instant doctor consult from home. Download our app: onelink.to/vhzcxh",
  },
  {
    id: "oct-1",
    month: "October",
    date: "October 10",
    title: "World Mental Health Day",
    target: "General Audience",
    copy: "Hi [Name]. Mental health is health. If stress is overwhelming you, talk to our licensed therapists confidentially. Download our app: onelink.to/vhzcxh",
  },
  {
    id: "oct-2",
    month: "October",
    date: "October 15",
    title: "Breast Cancer Awareness",
    target: "Women's Health",
    copy: "[Name], Pink October is here! Early detection saves lives. Book a doctor consult for a clinical breast exam today. Download our app: onelink.to/vhzcxh",
  },
  {
    id: "oct-3",
    month: "October",
    date: "October 28",
    title: "End of Month Refill",
    target: "Routine Medication",
    copy: "Hello [Name]! Payday is here. Secure your monthly medications with FulLife automatic refills before they run out. Download our app: onelink.to/vhzcxh",
  },
  {
    id: "nov-1",
    month: "November",
    date: "November 5",
    title: "Movember / Men's Health",
    target: "Men's Health",
    copy: "[Name], take charge of your health this Movember! Book your routine prostate and wellness checks directly with us. Download our app: onelink.to/vhzcxh",
  },
  {
    id: "nov-2",
    month: "November",
    date: "November 14",
    title: "World Diabetes Day",
    target: "Diabetic Patients",
    copy: "Hi [Name]. Managing sugar levels is easier with support. Order test strips and insulin directly to your doorstep. Download our app: onelink.to/vhzcxh",
  },
  {
    id: "nov-3",
    month: "November",
    date: "November 27",
    title: "Black Friday Health Deals",
    target: "General Audience",
    copy: "[Name], Black Friday is here! Get massive discounts on first aid kits and multivitamins this weekend only. download our app: onelink.to/vhzcxh",
  },
  {
    id: "dec-1",
    month: "December",
    date: "December 1",
    title: "World AIDS Day",
    target: "General Audience",
    copy: "Hello [Name]. Know your status! Book confidential and safe lab tests from the comfort of your own home today. download our app: onelink.to/vhzcxh",
  },
  {
    id: "dec-2",
    month: "December",
    date: "December 15",
    title: "Festive Season Prep",
    target: "General Audience",
    copy: "[Name], the holidays are here! Stay energized and hydrated. Stock up on rehydration salts and daily vitamins. download our app: onelink.to/vhzcxh",
  },
  {
    id: "dec-3",
    month: "December",
    date: "December 28",
    title: "New Year Resolutions",
    target: "Fitness / Wellness",
    copy: "Hi [Name]! Ready for a healthy new year? Start your fitness journey with doctor-approved wellness supplements. download our app: onelink.to/vhzcxh",
  }
];

/* ─── COMPONENT ─────────────────────────────────────────────────────── */
function SmsCard({ campaign }: { campaign: typeof SMS_CAMPAIGNS[0] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(campaign.copy);
    setCopied(true);
    toast.success("SMS Copy copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const charCount = campaign.copy.length;
  // Mnotify segments are usually 160 characters long.
  const segmentCount = Math.ceil(charCount / 160);

  return (
    <Card className="hover:shadow-md transition-shadow relative overflow-hidden group border-muted/60">
      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs bg-muted/50">
            {campaign.date}
          </Badge>
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">
            {campaign.target}
          </Badge>
        </div>
        <CardTitle className="text-lg mt-2">{campaign.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted/40 p-4 rounded-lg text-sm leading-relaxed border border-border/50 text-foreground font-medium relative mb-4">
          {campaign.copy}
        </div>
        <div className="flex items-center justify-between text-xs">
          <div className="text-muted-foreground">
            <span className={charCount > 160 ? "text-orange-500 font-semibold" : ""}>
              {charCount} chars
            </span>{" "}
            • {segmentCount} SMS segment{segmentCount > 1 ? "s" : ""}
          </div>
          <Button variant="secondary" size="sm" onClick={handleCopy} className="h-8 shadow-sm">
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-1 text-green-600" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-1" /> Copy for Mnotify
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ─── MAIN PAGE ─────────────────────────────────────────────────────── */
export default function SmsMarketingPlan() {
  const augustCampaigns = SMS_CAMPAIGNS.filter(c => c.month === "August");
  const septemberCampaigns = SMS_CAMPAIGNS.filter(c => c.month === "September");
  const octoberCampaigns = SMS_CAMPAIGNS.filter(c => c.month === "October");
  const novemberCampaigns = SMS_CAMPAIGNS.filter(c => c.month === "November");
  const decemberCampaigns = SMS_CAMPAIGNS.filter(c => c.month === "December");

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/50">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <MessageSquare className="h-6 w-6 text-blue-600" />
          </div>
          <h1 className="text-3xl font-display font-bold text-card-foreground tracking-tight mb-3">
            SMS Marketing Plan
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Q3 & Q4 2026 targeted bulk SMS campaigns for Mnotify deployment. Optimized for character count and high conversion.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        <section>
          <h2 className="text-2xl font-bold font-display flex items-center gap-2 mb-6 text-foreground">
            August 2026 Campaigns
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {augustCampaigns.map(c => (
              <SmsCard key={c.id} campaign={c} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-display flex items-center gap-2 mb-6 text-foreground">
            September 2026 Campaigns
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {septemberCampaigns.map(c => (
              <SmsCard key={c.id} campaign={c} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-display flex items-center gap-2 mb-6 text-foreground">
            October 2026 Campaigns
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {octoberCampaigns.map(c => (
              <SmsCard key={c.id} campaign={c} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-display flex items-center gap-2 mb-6 text-foreground">
            November 2026 Campaigns
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {novemberCampaigns.map(c => (
              <SmsCard key={c.id} campaign={c} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-display flex items-center gap-2 mb-6 text-foreground">
            December 2026 Campaigns
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {decemberCampaigns.map(c => (
              <SmsCard key={c.id} campaign={c} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
