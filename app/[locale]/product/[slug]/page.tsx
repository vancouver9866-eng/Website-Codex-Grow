import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocaleFromParam, getProduct, productMetaDescription, productSeoTitle, products } from "@/lib/catalog";
import { isLocale } from "@/lib/i18n";
import { ProductPageView } from "@/components/catalog/product-page-view";

export function generateStaticParams() {
  return ["es", "fr", "ar", "ru"].flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!isLocale(locale) || locale === "en" || !product) return {};
  return {
    title: productSeoTitle(product, getLocaleFromParam(locale)),
    description: productMetaDescription(product, getLocaleFromParam(locale)),
    alternates: {
      canonical: `/${locale}/product/${slug}`,
      languages: {
        en: `/product/${slug}`,
        es: `/es/product/${slug}`,
        fr: `/fr/product/${slug}`,
        ar: `/ar/product/${slug}`,
        ru: `/ru/product/${slug}`,
        "x-default": `/product/${slug}`,
      },
    },
    openGraph: {
      title: productSeoTitle(product, getLocaleFromParam(locale)),
      description: productMetaDescription(product, getLocaleFromParam(locale)),
      images: product.images,
    },
  };
}

export default async function LocalizedProductPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <ProductPageView slug={slug} locale={getLocaleFromParam(locale)} />;
}
