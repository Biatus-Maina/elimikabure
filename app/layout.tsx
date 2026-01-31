import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "elimikabure - Free Education for Every African Child",
  description:
    "Discover scholarships, free courses, study materials, and educational opportunities. Making quality education accessible to every Kenyan and African student.",
  keywords: [
    "education",
    "scholarships",
    "free courses",
    "Kenya",
    "Africa",
    "students",
    "learning",
    "study materials",
  ],
  authors: [{ name: "elimikabure Team" }],
  openGraph: {
    title: "elimikabure - Free Education for Every African Child",
    description:
      "Discover scholarships, free courses, study materials, and educational opportunities. Making quality education accessible to every Kenyan and African student.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "elimikabure - Free Education for Every African Child",
    description:
      "Discover scholarships, free courses, study materials, and educational opportunities. Making quality education accessible to every Kenyan and African student.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBar />
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
