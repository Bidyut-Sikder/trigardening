import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Hero from "@/components/home/Hero";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TriGardening | Online Plant Shop in Bangladesh",
  description: "Buy indoor plants, outdoor plants, seeds, fertilizers, and gardening tools online. Fast delivery, affordable price, and healthy plants guaranteed.",
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
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
