import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Trainings",
  description:
    "Capacity-building events and trainings by CHWRI in Ghana—workshops strengthening skills in health research, interventions, and community health, Walewale.",
  openGraph: {
    title: "Events & Trainings | CHWRI",
    description:
      "Capacity-building events and trainings by CHWRI in Ghana—workshops strengthening skills in health research, interventions, and community health, Walewale.",
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
