import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhanvi | Portfolio",
  description:
    "Javascript Sleuth, lawful evil; I love solving problems with people-focus using proactive empathy",
  keywords: [
    "Engineering Manager",
    "Javascript",
    "Typescript",
    "React",
    "React Native",
  ],
  viewport: { width: "device-width", initialScale: 1 },
  metadataBase: new URL("https://dev.shuklapaksha.com"),
  alternates: {
    canonical: "/",
  },
  creator: "Bhanvi Shukla",
  openGraph: {
    type: "website",
    url: "https://dev.shuklapaksha.com",
    title: "Bhanvi | Dev Portfolio",
    description: "Javascript Sleuth, lawful evil",
    siteName: "Dev Portfolio",
    images: "/og.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "https://dev.shuklapaksha.com/og.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
