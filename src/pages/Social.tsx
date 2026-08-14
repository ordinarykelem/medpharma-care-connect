import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockComposer } from "@/components/BlockComposer";
import { BlockLibrary } from "@/components/BlockLibrary";

const platforms = ["LinkedIn", "Facebook", "Instagram", "TikTok"] as const;

export default function Social() {
  const [refresh, setRefresh] = useState(0);
  const bump = () => setRefresh((x) => x + 1);
  return (
    <>
      <PageHeader
        title="Social Media Planner"
        subtitle="Draft 3 caption variants per platform with image briefs and post times. Approve, then schedule in your tool of choice."
      />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <Tabs defaultValue="LinkedIn">
          <TabsList>{platforms.map((p) => <TabsTrigger key={p} value={p}>{p}</TabsTrigger>)}</TabsList>
          {platforms.map((p) => (
            <TabsContent key={p} value={p} className="mt-4">
              <BlockComposer
                blockType="social_post" platform={p}
                title={`${p} post`}
                description={`Three on-brand ${p} caption variants tailored to ${p}'s tone, length, and hashtag etiquette.`}
                fields={[
                  { key: "topic", label: "What's the post about?", type: "textarea",
                    placeholder: "World Diabetes Day awareness · highlight free chronic medication delivery in Accra" },
                  { key: "cta", label: "Desired CTA", placeholder: "Download MedPharma app / Call 030 290 9731 / Visit medpharma.care" },
                ]}
                onSaved={bump}
              />
            </TabsContent>
          ))}
        </Tabs>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Social Library</h3>
          <BlockLibrary blockTypes={["social_post"]} refreshKey={refresh} />
        </div>
      </div>
    </>
  );
}