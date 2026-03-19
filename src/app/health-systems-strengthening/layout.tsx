import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Systems Strengthening",
  description:
    "Building resilient health systems in Ghana with CHWRI—evidence-led policy, training, and community health strengthening from Walewale across Northern Ghana.",
  openGraph: {
    title: "Health Systems Strengthening | CHWRI",
    description:
      "Building resilient health systems in Ghana with CHWRI—evidence-led policy, training, and community health strengthening from Walewale across Northern Ghana.",
  },
};

export default function HealthSystemsStrengtheningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
