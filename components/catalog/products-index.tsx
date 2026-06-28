import { ProductListing } from "@/components/catalog/product-listing";
import { catalogCopy, categoryDefinitions, localizedPath, products } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";

export function ProductsIndex({ locale }: { locale: Locale }) {
  const copy = catalogCopy[locale];
  return (
    <main className="catalog-page">
      <section className="catalog-hero">
        <div className="container">
          <p className="catalog-eyebrow">GROWCEAN PRODUCT DATABASE</p>
          <h1>{copy.allProducts}</h1>
          <p className="catalog-lead">107 catalog-backed SKU pages generated from the Growcean PDF, with wattage, size, material and space filters for B2B sourcing.</p>
          <div className="catalog-category-pills">
            {categoryDefinitions.map((category) => <a key={category.slug} href={localizedPath(`/category/${category.slug}`, locale)}>{category.name}</a>)}
          </div>
        </div>
      </section>
      <section className="section catalog-section">
        <div className="container"><ProductListing products={products} locale={locale} /></div>
      </section>
    </main>
  );
}
