import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Partnerships",
  "Collaborative health partnerships with CHWRI in Ghana—uniting institutions and communities for research, interventions, and community health in Walewale.",
  "/partnerships"
);

export default function PartnershipsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
