import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Latest CHWRI news and insights on health research Ghana—programme updates, field stories, and community health impact from Walewale and across the country.",
  openGraph: {
    title: "News & Insights | CHWRI",
    description:
      "Latest CHWRI news and insights on health research Ghana—programme updates, field stories, and community health impact from Walewale and across the country.",
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
