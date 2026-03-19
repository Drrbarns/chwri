import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact CHWRI in Walewale, Ghana—reach our team for health research, partnerships, interventions, and community health enquiries across Northern Ghana.",
  openGraph: {
    title: "Contact Us | CHWRI",
    description:
      "Contact CHWRI in Walewale, Ghana—reach our team for health research, partnerships, interventions, and community health enquiries across Northern Ghana.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
