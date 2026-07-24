import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockComposer } from "@/components/BlockComposer";
import { BlockLibrary } from "@/components/BlockLibrary";

export default function Seo() {
  const [refresh, setRefresh] = useState(0);
  const bump = () => setRefresh((x) => x + 1);

  return (
    <>
      <PageHeader
        title="SEO Workshop"
        subtitle="Draft full SEO blog posts, page meta + OG tags, and JSON-LD schema. Each block is hand-off ready for your dev team."
      />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <Tabs defaultValue="blog">
          <TabsList>
            <TabsTrigger value="blog">SEO Blog Article</TabsTrigger>
            <TabsTrigger value="meta">Page Meta + OG</TabsTrigger>
            <TabsTrigger value="schema">JSON-LD Schema</TabsTrigger>
          </TabsList>
          <TabsContent value="blog" className="mt-4">
            <BlockComposer
              blockType="seo_blog" title="SEO Blog Article"
              description="Generates a complete brief + publish-ready Markdown article with FAQ. Hand to dev or paste into your CMS."
              fields={[
                { key: "topic", label: "Topic / working title", placeholder: "Why MedPharma is the best health tech company in Ghana" },
                { key: "keywords", label: "Target keywords (comma-separated)", placeholder: "best health tech company in Ghana, online pharmacy Accra" },
                { key: "audience", label: "Audience focus", placeholder: "People with chronic conditions; HR managers" },
              ]}
              onSaved={bump}
            />
          </TabsContent>
          <TabsContent value="meta" className="mt-4">
            <BlockComposer
              blockType="meta_tags" title="Page Meta + OG + Schema"
              description="Title, description, OG, Twitter, H1, H2 ideas, JSON-LD, alt text - paste straight into <head>."
              fields={[
                { key: "topic", label: "Page topic", placeholder: "Homepage / Diabetes care service / About us" },
                { key: "url", label: "Page URL (optional)", placeholder: "https://medpharma.care/services/chronic-care" },
              ]}
              onSaved={bump}
            />
          </TabsContent>
          <TabsContent value="schema" className="mt-4">
            <BlockComposer
              blockType="schema_markup" title="JSON-LD Structured Data"
              description="Production-ready <script type='application/ld+json'> block + where to place it + how to validate."
              fields={[
                { key: "pageType", label: "Schema type", type: "select",
                  options: ["Organization", "LocalBusiness / Pharmacy", "Service", "Article", "FAQPage", "Product", "BreadcrumbList"] },
                { key: "details", label: "Specific details (optional)", type: "textarea",
                  placeholder: "e.g. service area: Accra, services: chronic medication delivery, partners: ..." },
              ]}
              onSaved={bump}
            />
          </TabsContent>
        </Tabs>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">SEO Library</h3>
          <BlockLibrary blockTypes={["seo_blog", "meta_tags", "schema_markup"]} refreshKey={refresh} />
        </div>
      </div>
    </>
  );
}