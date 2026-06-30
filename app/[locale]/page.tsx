import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GrowceanHome } from "../page";
import { isLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return ["es", "fr", "ar", "ru"].map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") return {};
  if (locale === "es") {
    return {
      title: "LED Lighting Manufacturer and Supplier | Growcean",
      description:
        "Growcean is an LED lighting manufacturer and supplier for importers, wholesalers, distributors and project buyers sourcing ceiling lights, commercial fixtures and OEM lighting support.",
      alternates: {
        canonical: "/es",
        languages: {
          en: "/",
          es: "/es",
          "x-default": "/",
        },
      },
    };
  }

  return {
    title: "LED Lighting Manufacturer and Supplier | Growcean",
    description:
      "Growcean is an LED lighting manufacturer and supplier for importers, wholesalers, distributors and project buyers sourcing ceiling lights, commercial fixtures and OEM lighting support.",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/",
        es: "/es",
        fr: "/fr",
        ar: "/ar",
        ru: "/ru",
        "x-default": "/",
      },
    },
  };
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <GrowceanHome locale={locale} />;
}
