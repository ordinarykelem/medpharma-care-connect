export type BlockType =
  | "seo_blog"
  | "meta_tags"
  | "social_post"
  | "gbp_post"
  | "review_reply"
  | "gsc_fix"
  | "schema_markup";

export const BLOCK_TYPES: { value: BlockType; label: string; category: string; emoji: string }[] = [
  { value: "seo_blog", label: "SEO Blog Post", category: "SEO", emoji: "📝" },
  { value: "meta_tags", label: "Page Meta + Schema", category: "SEO", emoji: "🏷️" },
  { value: "schema_markup", label: "JSON-LD Schema", category: "SEO", emoji: "🧬" },
  { value: "social_post", label: "Social Media Post", category: "Social", emoji: "📣" },
  { value: "gbp_post", label: "Google Business Post", category: "GBP", emoji: "📍" },
  { value: "review_reply", label: "Review Reply", category: "GBP", emoji: "⭐" },
  { value: "gsc_fix", label: "Search Console Fix", category: "GSC", emoji: "🔧" },
];

export const STATUSES = ["draft", "in_review", "approved", "published"] as const;
export type Status = typeof STATUSES[number];

export const TASK_STATUSES = ["todo", "in_progress", "done", "blocked"] as const;
export type TaskStatus = typeof TASK_STATUSES[number];

export const PRIORITIES = ["low", "medium", "high"] as const;
export type Priority = typeof PRIORITIES[number];

export const CATEGORIES = ["seo", "social", "gbp", "gsc", "partnerships", "app_growth"] as const;