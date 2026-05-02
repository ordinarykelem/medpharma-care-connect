import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownView({ children }: { children: string }) {
  return (
    <div className="prose prose-invert prose-sm max-w-none
      prose-headings:font-semibold prose-headings:text-foreground
      prose-h2:text-base prose-h2:mt-6 prose-h2:mb-2
      prose-h3:text-sm prose-h3:mt-4
      prose-p:text-foreground/85
      prose-strong:text-foreground
      prose-code:text-primary prose-code:bg-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-secondary prose-pre:border prose-pre:border-border
      prose-a:text-primary
      prose-li:text-foreground/85">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}