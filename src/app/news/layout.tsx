import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "News & Insights",
  "Latest CHWRI news and insights on health research Ghana—programme updates, field stories, and community health impact from Walewale and across the country.",
  "/news"
);

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
