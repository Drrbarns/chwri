import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Health Systems Strengthening",
  "Building resilient health systems in Ghana with CHWRI—evidence-led policy, training, and community health strengthening from Walewale across Northern Ghana.",
  "/health-systems-strengthening"
);

export default function HealthSystemsStrengtheningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
