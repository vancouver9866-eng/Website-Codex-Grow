import { notFound } from "next/navigation";
import { ProductListing } from "@/components/catalog/product-listing";
import { categoryNameByLocale, categorySeoContent, getCategory, getProductsByCategory, localizedPath } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";

export function CategoryView({ slug, locale }: { slug: string; locale: Locale }) {
  const category = getCategory(slug);
  if (!category) notFound();
  const items = getProductsByCategory(slug);
  const seo = categorySeoContent[category.slug];
  const title = locale === "en" ? seo.h1 : (categoryNameByLocale[locale][slug] ?? category.name);

  return (
    <main className="catalog-page">
      <section className="catalog-hero">
        <div className="container">
          <p className="catalog-eyebrow">GROWCEAN CATEGORY</p>
          <h1>{title}</h1>
          <p className="catalog-lead">{category.description} Filter {items.length} SKU records by wattage, size, material and recommended space.</p>
          <div className="catalog-category-pills">
            <a href={localizedPath("/products", locale)}>All products</a>
            <a href="#category-guide">Buyer guide</a>
            <a href="#category-quote">Get a Quote</a>
          </div>
        </div>
      </section>

      <section className="section catalog-section" id="category-guide">
        <div className="container category-seo-layout">
          <div className="category-seo-copy">
            <p className="section-label">B2B SOURCING GUIDE</p>
            <h2>{seo.h1}</h2>
            {seo.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <aside className="category-seo-panel">
            <p className="section-label">APPLICATIONS</p>
            <div className="application-chip-grid">
              {seo.applications.map((item) => <span key={item}>{item}</span>)}
            </div>
            <p className="section-label">CUSTOMIZATION</p>
            <ul className="category-check-list">
              {seo.customization.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section catalog-section"><div className="container"><ProductListing products={items} locale={locale} /></div></section>

      <section className="section catalog-section" id="category-quote">
        <div className="container product-detail-layout">
          <div>
            <p className="section-label">BUYER FAQ</p>
            <div className="catalog-faq-list">
              {seo.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
            </div>
          </div>
          <div className="category-quote-panel">
            <p className="section-label">GET A QUOTE</p>
            <h2>Tell us what you need for your market</h2>
            <p>{seo.cta}</p>
            <a className="button" href={localizedPath("/#inquiry", locale)}>Get a Quote</a>
          </div>
        </div>
      </section>
    </main>
  );
}
