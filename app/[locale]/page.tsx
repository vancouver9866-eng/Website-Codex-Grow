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
      title: "Growcean Lighting | Socio de abastecimiento y control de calidad en China",
      description:
        "Growcean Lighting ayuda a compradores globales a abastecer luces de techo, luminarias decorativas, luces de pasillo y soluciones de iluminación interior desde socios de fabricación seleccionados en China.",
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
    title: "Growcean Lighting | China Lighting Sourcing & Quality-Control Partner",
    description:
      "Growcean Lighting helps global buyers source ceiling lights, decorative lights, corridor lights, and indoor lighting solutions from selected manufacturing partners in China with quality-control and export support.",
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
