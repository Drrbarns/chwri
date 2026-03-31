import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Research",
  "CHWRI generates evidence through community-informed health research in Ghana—rigorous studies shaping policy and community health outcomes from Walewale.",
  "/research"
);

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
