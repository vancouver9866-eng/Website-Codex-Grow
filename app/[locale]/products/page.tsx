import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocaleFromParam } from "@/lib/catalog";
import { isLocale, type Locale } from "@/lib/i18n";
import { ProductsIndex } from "@/components/catalog/products-index";

export function generateStaticParams() {
  return ["es", "fr", "ar", "ru"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") return {};
  return {
    title: "Growcean Product Catalog | LED Ceiling Lights",
    description: "Browse Growcean catalog products by wattage, size, material and application space.",
    alternates: {
      canonical: `/${locale}/products`,
      languages: {
        en: "/products",
        es: "/es/products",
        fr: "/fr/products",
        ar: "/ar/products",
        ru: "/ru/products",
        "x-default": "/products",
      },
    },
  };
}

export default async function LocalizedProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <ProductsIndex locale={getLocaleFromParam(locale) as Locale} />;
}
