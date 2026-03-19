import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications & Reports",
  description:
    "Research papers, policy briefs, and reports from CHWRI—health research Ghana outputs informing practice, policy, and community health across Walewale and Ghana.",
  openGraph: {
    title: "Publications & Reports | CHWRI",
    description:
      "Research papers, policy briefs, and reports from CHWRI—health research Ghana outputs informing practice, policy, and community health across Walewale and Ghana.",
  },
};

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
