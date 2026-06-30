import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categorySeoContent, getCategory, getLocaleFromParam } from "@/lib/catalog";
import { isLocale } from "@/lib/i18n";
import { CategoryView } from "@/components/catalog/category-view";

export function generateStaticParams() {
  return ["es", "fr", "ar", "ru"].flatMap((locale) =>
    ["ceiling-lights", "corridor-lights", "waterproof-lights", "decorative-lights", "package-sets"].map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const category = getCategory(slug);
  if (!isLocale(locale) || locale === "en" || !category) return {};
  const seo = categorySeoContent[category.slug];
  return {
    title: `${seo.h1} | Growcean Lighting`,
    description: seo.intro[0],
    alternates: {
      canonical: `/${locale}/category/${slug}`,
      languages: {
        en: `/category/${slug}`,
        es: `/es/category/${slug}`,
        fr: `/fr/category/${slug}`,
        ar: `/ar/category/${slug}`,
        ru: `/ru/category/${slug}`,
        "x-default": `/category/${slug}`,
      },
    },
  };
}

export default async function LocalizedCategoryPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <CategoryView slug={slug} locale={getLocaleFromParam(locale)} />;
}
