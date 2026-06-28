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
      title: "Growcean | Soluciones B2B de iluminación de techo",
      description:
        "Luces LED de techo personalizables y soporte de exportación para importadores, mayoristas, distribuidores y compradores de proyectos.",
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
    title: "Growcean | B2B Ceiling Lighting Solutions",
    description:
      "Customizable LED ceiling lights and export support for importers, wholesalers, distributors and project buyers.",
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
