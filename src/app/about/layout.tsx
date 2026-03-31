import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "About CHWRI",
  "Learn about the Centre for Health & Wellbeing Research and Interventions — our vision, mission, values, and commitment to improving health outcomes in Ghana through research and community-centred interventions.",
  "/about"
);

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
