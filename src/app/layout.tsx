import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import type React from "react";
import { Toaster } from "react-hot-toast";
import { LoadingProvider } from "@/components/LoadingProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`relative ${inter.variable} ${robotoCondensed.variable}`}
    >
      <body className="antialiased bg-[#EAEEFE]">
        <LoadingProvider>{children}</LoadingProvider>
        <Toaster />
      </body>
    </html>
  );
}
