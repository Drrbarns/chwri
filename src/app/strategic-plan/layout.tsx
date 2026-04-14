import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Strategic Plan 2025–2030",
  "CHWRI's five-year strategic roadmap for implementation research, health systems strengthening, quality improvement, innovation, and community wellbeing across Ghana and sub-Saharan Africa.",
  "/strategic-plan"
);

export default function StrategicPlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
