import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Events & Trainings",
  "Capacity-building events and trainings by CHWRI in Ghana—workshops strengthening skills in health research, interventions, and community health, Walewale.",
  "/events"
);

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
