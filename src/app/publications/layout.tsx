import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Publications & Reports",
  "Research papers, policy briefs, and reports from CHWRI—health research Ghana outputs informing practice, policy, and community health across Walewale and Ghana.",
  "/publications"
);

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
