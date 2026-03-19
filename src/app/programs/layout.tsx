import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs & Projects",
  description:
    "Health research and intervention programmes by CHWRI in Ghana—flagship projects advancing community health, wellbeing, and equity from our Walewale centre.",
  openGraph: {
    title: "Programs & Projects | CHWRI",
    description:
      "Health research and intervention programmes by CHWRI in Ghana—flagship projects advancing community health, wellbeing, and equity from our Walewale centre.",
  },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
