import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Phantom Hill | Idaho Investment Portfolio",
  description: "Private investment entity focused on hospitality, ranch, and real estate holdings in Idaho's Sun Valley and Sawtooth Valley regions.",
  keywords: ["Idaho", "Sun Valley", "investment", "real estate", "Sawtooth Valley", "ranch"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
