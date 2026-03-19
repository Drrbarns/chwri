import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CHWRI",
  description:
    "Learn about the Centre for Health & Wellbeing Research and Interventions — our vision, mission, values, and commitment to improving health outcomes in Ghana through research and community-centred interventions.",
  openGraph: {
    title: "About CHWRI | Centre for Health & Wellbeing Research and Interventions",
    description:
      "A multidisciplinary health hub in Walewale, Ghana, dedicated to bridging the gap between research and practice for better health outcomes.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
