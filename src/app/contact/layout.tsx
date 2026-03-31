import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Contact Us",
  "Contact CHWRI in Walewale, Ghana—reach our team for health research, partnerships, interventions, and community health enquiries across Northern Ghana.",
  "/contact"
);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
