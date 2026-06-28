import type { Metadata } from "next";
import { ProductPageView } from "@/components/catalog/product-page-view";
import { getProduct, productMetaDescription, products, productSeoTitle } from "@/lib/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: productSeoTitle(product, "en"),
    description: productMetaDescription(product, "en"),
    alternates: {
      canonical: `/product/${slug}`,
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
      title: productSeoTitle(product, "en"),
      description: productMetaDescription(product, "en"),
      images: product.images,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductPageView slug={slug} locale="en" />;
}
