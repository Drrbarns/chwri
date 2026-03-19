import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interventions",
  description:
    "Evidence-based health interventions and community programmes by CHWRI in Ghana—translating research into action for stronger community health in Walewale.",
  openGraph: {
    title: "Interventions | CHWRI",
    description:
      "Evidence-based health interventions and community programmes by CHWRI in Ghana—translating research into action for stronger community health in Walewale.",
  },
};

export default function InterventionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
