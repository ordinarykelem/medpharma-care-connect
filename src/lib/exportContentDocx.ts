import {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType, PageBreak,
} from "docx";
import { saveAs } from "file-saver";
import type { ContentPlan, ContentBrief } from "./contentPlans";

const BORDER = { style: BorderStyle.SINGLE, size: 4, color: "D0D7DE" };
const CELL_BORDERS = { top: BORDER, bottom: BORDER, left: BORDER, right: BORDER };

const text = (s: string, opts: any = {}) => new TextRun({ text: s, font: "Calibri", ...opts });
const para = (children: any[], opts: any = {}) => new Paragraph({ children, ...opts });

function metaRow(label: string, value: string) {
  return new TableRow({
    children: [
      new TableCell({
        borders: CELL_BORDERS, width: { size: 2400, type: WidthType.DXA },
        shading: { fill: "F5F1E8", type: ShadingType.CLEAR },
        margins: { top: 100, bottom: 100, left: 140, right: 140 },
        children: [para([text(label, { bold: true, size: 20 })])],
      }),
      new TableCell({
        borders: CELL_BORDERS, width: { size: 6960, type: WidthType.DXA },
        margins: { top: 100, bottom: 100, left: 140, right: 140 },
        children: [para([text(value, { size: 20 })])],
      }),
    ],
  });
}

function briefBlock(b: ContentBrief): any[] {
  const blocks: any[] = [];

  blocks.push(para([text(b.title, { bold: true, size: 30, color: "1A7F3C" })], {
    spacing: { before: 360, after: 120 },
  }));

  const metaTable = new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [2400, 6960],
    rows: [
      metaRow("Date", b.date + (b.occasion ? `  ·  ${b.occasion}` : "")),
      metaRow("Week", b.week),
      metaRow("Asset type", b.assetType),
      metaRow("Format", b.format),
      metaRow("Platforms", b.platforms.join(" · ")),
      metaRow("Audience", b.audience),
      metaRow("Hook", b.hook),
    ],
  });
  blocks.push(metaTable);

  // Slides or body
  if (b.slides && b.slides.length) {
    blocks.push(para([text("Slide-by-slide content", { bold: true, size: 22 })],
      { spacing: { before: 240, after: 80 } }));
    b.slides.forEach((s) => {
      blocks.push(para([text(s.title, { bold: true, size: 20 })], { spacing: { before: 120, after: 40 } }));
      s.body.split("\n").forEach((line) => {
        if (line.trim()) blocks.push(para([text(line, { size: 20 })]));
      });
    });
  } else if (b.body) {
    blocks.push(para([text("Content", { bold: true, size: 22 })], { spacing: { before: 240, after: 80 } }));
    b.body.split("\n").forEach((line) => {
      blocks.push(para(line.trim() ? [text(line, { size: 20 })] : [text("")]));
    });
  }

  blocks.push(para([text("Design direction", { bold: true, size: 22 })],
    { spacing: { before: 240, after: 80 } }));
  blocks.push(para([text(b.designDirection, { size: 20 })]));

  blocks.push(para([text("Call to action (must appear on artwork)", { bold: true, size: 22 })],
    { spacing: { before: 240, after: 80 } }));
  blocks.push(para([text(b.cta, { size: 20 })]));

  if (b.caption) {
    blocks.push(para([text("Suggested social caption (for the marketing team to post)", { bold: true, size: 22 })],
      { spacing: { before: 240, after: 80 } }));
    blocks.push(para([text(b.caption, { size: 20, italics: true })]));
  }

  if (b.hashtags && b.hashtags.length) {
    blocks.push(para([text("Hashtags", { bold: true, size: 22 })], { spacing: { before: 200, after: 60 } }));
    blocks.push(para([text(b.hashtags.join("  "), { size: 20, color: "0F4FA8" })]));
  }

  return blocks;
}

export async function exportPlanToDocx(plan: ContentPlan, quarter?: string) {
  const isQ4 = quarter === "q4" || plan.productNote.includes("Q4 2026");
  const dateRange = isQ4 ? "October · November · December 2026" : "Late May → June → July → August 2026";
  const fileSlug = isQ4 ? "Q4_OctDec2026" : "MayAug2026";
  const children: any[] = [];

  // Cover
  children.push(para([text("MedPharma  ·  Graphic Designer Brief", { size: 18, color: "6B6B6B" })]));
  children.push(para([text(`${plan.brand} — ${isQ4 ? "Q4 2026" : "May–Aug 2026"} Content Plan`, { bold: true, size: 56, color: "1A7F3C" })],
    { spacing: { before: 80, after: 60 } }));
  children.push(para([text(dateRange, { size: 24, color: "6B6B6B" })],
    { spacing: { after: 240 } }));
  children.push(para([text(plan.productNote, { size: 22 })], { spacing: { after: 240 } }));

  // Rules
  children.push(para([text("Non-negotiable rules", { bold: true, size: 26, color: "1A7F3C" })],
    { spacing: { before: 200, after: 100 } }));
  plan.rules.forEach((r) => {
    children.push(new Paragraph({
      children: [text("•  ", { bold: true }), text(r, { size: 22 })],
      spacing: { after: 60 },
      indent: { left: 200 },
    }));
  });

  children.push(para([text("Quick reference", { bold: true, size: 26, color: "1A7F3C" })],
    { spacing: { before: 240, after: 100 } }));
  children.push(para([text(`Call line: ${plan.callLine}`, { size: 22 })]));
  children.push(para([text(`App link:  ${plan.appLink}`, { size: 22 })]));

  children.push(new Paragraph({ children: [new PageBreak()] }));

  // Briefs grouped by week
  const byWeek = new Map<string, ContentBrief[]>();
  plan.briefs.forEach((b) => {
    if (!byWeek.has(b.week)) byWeek.set(b.week, []);
    byWeek.get(b.week)!.push(b);
  });

  let first = true;
  for (const [week, briefs] of byWeek) {
    if (!first) children.push(new Paragraph({ children: [new PageBreak()] }));
    first = false;
    children.push(para([text(week, { bold: true, size: 32, color: "1A7F3C" })],
      { heading: HeadingLevel.HEADING_1, spacing: { after: 200 } }));
    briefs.forEach((b) => briefBlock(b).forEach((bl) => children.push(bl)));
  }

  // Designer checklist
  children.push(new Paragraph({ children: [new PageBreak()] }));
  children.push(para([text("Final designer checklist", { bold: true, size: 32, color: "1A7F3C" })],
    { spacing: { after: 160 } }));
  [
    "Black/African models in every lifestyle shot.",
    "No emojis on the artwork.",
    "Use established brand templates for lockup and CTA placement.",
    "Both call line and app link present on every asset.",
    "Export each asset at the EXACT format listed in its brief — no cropping shortcuts.",
    "Send a low-res preview JPG before exporting the full set.",
  ].forEach((c) => {
    children.push(new Paragraph({
      children: [text("☐  ", { bold: true }), text(c, { size: 22 })],
      spacing: { after: 80 }, indent: { left: 200 },
    }));
  });

  const doc = new Document({
    creator: "MedPharma Marketing",
    title: `${plan.brand} Content Plan — ${dateRange}`,
    styles: {
      default: { document: { run: { font: "Calibri", size: 22 } } },
    },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 },
        },
      },
      children,
    }],
  });

  const blob = await Packer.toBlob(doc);
  const filename = `MedPharma_${plan.brand.replace(/ /g, "_")}_Content_Plan_${fileSlug}.docx`;
  saveAs(blob, filename);
}