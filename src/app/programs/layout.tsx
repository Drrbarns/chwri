import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Programs & Projects",
  "Health research and intervention programmes by CHWRI in Ghana—flagship projects advancing community health, wellbeing, and equity from our Walewale centre.",
  "/programs"
);

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
