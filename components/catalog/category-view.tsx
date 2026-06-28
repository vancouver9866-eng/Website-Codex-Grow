import { notFound } from "next/navigation";
import { ProductListing } from "@/components/catalog/product-listing";
import { categoryNameByLocale, getCategory, getProductsByCategory, localizedPath } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";

export function CategoryView({ slug, locale }: { slug: string; locale: Locale }) {
  const category = getCategory(slug);
  if (!category) notFound();
  const items = getProductsByCategory(slug);
  return (
    <main className="catalog-page">
      <section className="catalog-hero">
        <div className="container">
          <p className="catalog-eyebrow">GROWCEAN CATEGORY</p>
          <h1>{categoryNameByLocale[locale][slug] ?? category.name}</h1>
          <p className="catalog-lead">{category.description} Filter {items.length} SKU records by wattage, size, material and recommended space.</p>
          <div className="catalog-category-pills"><a href={localizedPath("/products", locale)}>All products</a></div>
        </div>
      </section>
      <section className="section catalog-section"><div className="container"><ProductListing products={items} locale={locale} /></div></section>
    </main>
  );
}
