import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Growcean | B2B Ceiling Lighting Solutions",
  description:
    "Customizable LED ceiling lights and responsive export support for importers, wholesalers, distributors and project buyers.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
