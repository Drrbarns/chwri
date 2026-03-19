import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Collaborative health partnerships with CHWRI in Ghana—uniting institutions and communities for research, interventions, and community health in Walewale.",
  openGraph: {
    title: "Partnerships | CHWRI",
    description:
      "Collaborative health partnerships with CHWRI in Ghana—uniting institutions and communities for research, interventions, and community health in Walewale.",
  },
};

export default function PartnershipsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
