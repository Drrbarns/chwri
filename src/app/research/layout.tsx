import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "CHWRI generates evidence through community-informed health research in Ghana—rigorous studies shaping policy and community health outcomes from Walewale.",
  openGraph: {
    title: "Research | CHWRI",
    description:
      "CHWRI generates evidence through community-informed health research in Ghana—rigorous studies shaping policy and community health outcomes from Walewale.",
  },
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
