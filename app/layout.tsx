import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { headers } from "next/headers";
import { GoogleAnalytics } from "@/components/google-analytics";
import { MicrosoftClarity } from "@/components/microsoft-clarity";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growcean.com"),
  title: "Growcean Lighting | China Lighting Sourcing & Quality-Control Partner",
  description:
    "Growcean Lighting helps global buyers source ceiling lights, decorative lights, corridor lights and waterproof lights from selected manufacturing partners in China with quality-control and export support.",
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const pathname = requestHeaders.get("x-pathname") ?? "";
  const locale = pathname.split("/").filter(Boolean)[0];
  const htmlLang = ["es", "fr", "ar", "ru"].includes(locale) ? locale : "en";
  const htmlDir = htmlLang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={htmlLang} dir={htmlDir}>
      <body className={`${manrope.variable} ${inter.variable}`}>
        {children}
        <WhatsAppFloat />
        <GoogleAnalytics />
        <MicrosoftClarity />
      </body>
    </html>
  );
}
