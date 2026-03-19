import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore CHWRI's comprehensive health research and intervention workstreams in Ghana—evidence-led programmes strengthening community health from Walewale.",
  openGraph: {
    title: "Our Work | CHWRI",
    description:
      "Explore CHWRI's comprehensive health research and intervention workstreams in Ghana—evidence-led programmes strengthening community health from Walewale.",
  },
};

export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
