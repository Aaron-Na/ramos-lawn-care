import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramos Lawn Care Services | Atlanta Landscaping & Lawn Maintenance",
  description:
    "Professional lawn care and landscaping services in Atlanta. Mowing, trimming, patio installation, fence installation, and more. Licensed & insured.",
  keywords: [
    "lawn care Atlanta",
    "landscaping Atlanta",
    "lawn mowing",
    "patio installation",
    "fence installation",
    "mulch installation",
  ],
  openGraph: {
    title: "Ramos Lawn Care Services | Atlanta",
    description:
      "Professional lawn care and landscaping services in Atlanta. Quality service & your satisfaction is our goal.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
