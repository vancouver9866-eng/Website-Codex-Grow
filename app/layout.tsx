import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { headers } from "next/headers";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growcean.com"),
  title: "Growcean | B2B Ceiling Lighting Solutions",
  description:
    "Customizable LED ceiling lights and responsive export support for importers, wholesalers, distributors and project buyers.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const pathname = requestHeaders.get("x-pathname") ?? "";
  const htmlLang = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";

  return (
    <html lang={htmlLang}>
      <body className={manrope.variable}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
