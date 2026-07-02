import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactPage, { metadata as englishMetadata } from "@/app/contact/page";
import { isLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return ["es", "fr", "ar", "ru"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") return {};
  return {
    ...englishMetadata,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: "/contact",
        es: "/es/contact",
        fr: "/fr/contact",
        ar: "/ar/contact",
        ru: "/ru/contact",
        "x-default": "/contact",
      },
    },
  };
}

export default async function LocalizedContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <ContactPage />;
}
