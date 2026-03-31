import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Our Work",
  "Explore CHWRI's comprehensive health research and intervention workstreams in Ghana—evidence-led programmes strengthening community health from Walewale.",
  "/our-work"
);

export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
