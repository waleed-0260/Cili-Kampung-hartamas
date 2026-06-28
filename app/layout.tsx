import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cili Kampung Hartamas | Authentic Malay Cuisine",
    template: "%s | Cili Kampung",
  },
  description:
    "Authentic homemade Malay cuisine rooted in Langkawi kitchen traditions. Stone-pounded sambal, slow-cooked dishes, and heartfelt hospitality — JAKIM-certified halal across all outlets.",
  keywords: [
    "Malaysian restaurant",
    "halal restaurant KL",
    "Malay food Hartamas",
    "Cili Kampung",
    "authentic Malay cuisine",
    "sambal petai",
  ],
  openGraph: {
    title: "Cili Kampung Hartamas",
    description:
      "Kampung spirit, modern table. Authentic Malay cuisine in the heart of Hartamas, KL.",
    siteName: "Cili Kampung",
    locale: "en_MY",
    type: "website",
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
      className={`${fraunces.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
