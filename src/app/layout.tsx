import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chwri.org"),
  title: {
    default:
      "CHWRI | Centre for Health & Wellbeing Research and Interventions",
    template: "%s | CHWRI",
  },
  description:
    "CHWRI is a multidisciplinary health and wellbeing hub based in Walewale, Ghana, dedicated to improving health outcomes through innovative research and practical interventions.",
  keywords: [
    "health research Ghana",
    "wellbeing interventions Ghana",
    "public health research centre Ghana",
    "health systems strengthening Ghana",
    "community health interventions Ghana",
    "research and policy health Ghana",
    "CHWRI",
    "Centre for Health and Wellbeing Research",
    "Walewale Ghana",
  ],
  openGraph: {
    title: "CHWRI | Centre for Health & Wellbeing Research and Interventions",
    description:
      "Advancing health outcomes and quality of life through innovative research and evidence-based interventions in Ghana and beyond.",
    url: "https://www.chwri.org",
    siteName: "CHWRI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHWRI | Centre for Health & Wellbeing Research and Interventions",
    description:
      "Advancing health outcomes and quality of life through innovative research and evidence-based interventions in Ghana and beyond.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
