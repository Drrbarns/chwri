import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Partner, volunteer, or support CHWRI—join health research Ghana collaborations, community health programmes, and wellbeing initiatives based in Walewale.",
  openGraph: {
    title: "Get Involved | CHWRI",
    description:
      "Partner, volunteer, or support CHWRI—join health research Ghana collaborations, community health programmes, and wellbeing initiatives based in Walewale.",
  },
};

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
