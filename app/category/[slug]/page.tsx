import type { Metadata } from "next";
import { CategoryView } from "@/components/catalog/category-view";
import { categorySeoContent, getCategory } from "@/lib/catalog";

export function generateStaticParams() {
  return ["ceiling-lights", "corridor-lights", "waterproof-lights", "decorative-lights", "package-sets"].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const seo = categorySeoContent[category.slug];
  return {
    title: `${seo.h1} | Growcean`,
    description: seo.intro[0],
    alternates: {
      canonical: `/category/${slug}`,
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

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CategoryView slug={slug} locale="en" />;
}
