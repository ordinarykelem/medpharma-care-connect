import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockComposer } from "@/components/BlockComposer";
import { BlockLibrary } from "@/components/BlockLibrary";
import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";

export default function Gbp() {
  const [refresh, setRefresh] = useState(0);
  const bump = () => setRefresh((x) => x + 1);
  return (
    <>
      <PageHeader
        title="Google Business Profile & Search Console"
        subtitle="Draft GBP posts, reply to reviews, and turn GSC issues into developer-ready tickets."
      />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <Card className="p-4 flex gap-3 items-start border-primary/30 bg-primary/5">
          <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <p className="text-xs text-muted-foreground">
            Your GBP is at <strong className="text-foreground">2.8★ (8 reviews)</strong>. Priority moves: reply to every existing review, add the website link, photos, services, and post weekly. This page drafts all of that for you.
          </p>
        </Card>

        <Tabs defaultValue="post">
          <TabsList>
            <TabsTrigger value="post">GBP Post</TabsTrigger>
            <TabsTrigger value="review">Review Reply</TabsTrigger>
            <TabsTrigger value="gsc">GSC Fix Ticket</TabsTrigger>
          </TabsList>
          <TabsContent value="post" className="mt-4">
            <BlockComposer
              blockType="gbp_post" platform="gbp"
              title="Google Business Post"
              description="3 short, action-oriented post variants with CTA button + image brief."
              fields={[
                { key: "topic", label: "Post topic", placeholder: "Free chronic-care consultation week" },
                { key: "offer", label: "Offer / CTA (optional)", placeholder: "First delivery free for new app users" },
              ]}
              onSaved={bump}
            />
          </TabsContent>
          <TabsContent value="review" className="mt-4">
            <BlockComposer
              blockType="review_reply" platform="gbp"
              title="Review Reply"
              description="Two warm, professional reply variants. For negative reviews, includes a private channel pivot."
              fields={[
                { key: "rating", label: "Star rating", type: "select", options: ["1", "2", "3", "4", "5"] },
                { key: "review", label: "Paste the review text", type: "textarea" },
              ]}
              onSaved={bump}
            />
          </TabsContent>
          <TabsContent value="gsc" className="mt-4">
            <BlockComposer
              blockType="gsc_fix" platform="gsc"
              title="Search Console Fix"
              description="Turn any GSC issue (indexing, mobile usability, core web vitals, structured data) into a numbered dev ticket with code and acceptance criteria."
              fields={[
                { key: "issue", label: "Issue from GSC", type: "textarea",
                  placeholder: "e.g. 'Discovered - currently not indexed' on /products pages, or 'Cumulative Layout Shift > 0.25 on mobile homepage'" },
                { key: "urls", label: "Affected URLs (sample)", type: "textarea", placeholder: "https://medpharma.care/products/..." },
              ]}
              onSaved={bump}
            />
          </TabsContent>
        </Tabs>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">GBP / GSC Library</h3>
          <BlockLibrary blockTypes={["gbp_post", "review_reply", "gsc_fix"]} refreshKey={refresh} />
        </div>
      </div>
    </>
  );
}