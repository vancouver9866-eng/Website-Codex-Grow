import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GrowceanHome } from "../page";
import { isLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return ["es"].map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
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
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
        es: "/es",
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
  if (!isLocale(locale)) notFound();
  return <GrowceanHome locale={locale} />;
}
