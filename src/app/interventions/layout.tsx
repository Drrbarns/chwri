import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Interventions",
  "Evidence-based health interventions and community programmes by CHWRI in Ghana—translating research into action for stronger community health in Walewale.",
  "/interventions"
);

export default function InterventionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
