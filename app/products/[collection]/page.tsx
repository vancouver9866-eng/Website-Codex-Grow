import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionDetail } from "@/components/catalog/collection-detail";
import { getCollectionHeroProduct, getProductCollection, productCollections } from "@/lib/product-collections";

export function generateStaticParams() {
  return productCollections.map((collection) => ({ collection: collection.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ collection: string }> }): Promise<Metadata> {
  const { collection: slug } = await params;
  const collection = getProductCollection(slug);
  if (!collection) return {};
  const hero = getCollectionHeroProduct(collection);
  const title = collection.seoTitle ?? `${collection.title} | Growcean Lighting`;
  const description =
    collection.seoDescription ??
    `${collection.description} Featured catalog model ${hero?.model ?? ""} with Growcean B2B sourcing, OEM/ODM and export inquiry support.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${slug}`,
      languages: {
        en: `/products/${slug}`,
        es: `/es/products/${slug}`,
        fr: `/fr/products/${slug}`,
        ar: `/ar/products/${slug}`,
        ru: `/ru/products/${slug}`,
        "x-default": `/products/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      images: hero?.images ?? [],
    },
  };
}

export default async function ProductCollectionPage({ params }: { params: Promise<{ collection: string }> }) {
  const { collection: slug } = await params;
  const collection = getProductCollection(slug);
  if (!collection) notFound();
  return <CollectionDetail collection={collection} locale="en" />;
}
