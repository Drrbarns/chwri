import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Get Involved",
  "Partner, volunteer, or support CHWRI—join health research Ghana collaborations, community health programmes, and wellbeing initiatives based in Walewale.",
  "/get-involved"
);

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
