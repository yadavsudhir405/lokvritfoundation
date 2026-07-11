import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Figma design uses the Inter type family across all weights.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LOKVRIT Foundation — Together for People, Progress, and Planet",
  description:
    "LOKVRIT Foundation is a not-for-profit social development organization uniting people to advance education, livelihoods, women's empowerment, and climate resilience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
