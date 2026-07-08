import Image from "next/image";
import { ArrowRight, CheckCircle2, Download, MessageCircle } from "lucide-react";
import { CatalogProductCard } from "@/components/catalog/product-card";
import { ProductListing } from "@/components/catalog/product-listing";
import { catalogCopy, localizedPath } from "@/lib/catalog";
import { createWhatsAppLink } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";
import { getCollectionHeroProduct, getCollectionProducts, type ProductCollection } from "@/lib/product-collections";

export function CollectionDetail({ collection, locale = "en" }: { collection: ProductCollection; locale?: Locale }) {
  const copy = catalogCopy[locale];
  const items = getCollectionProducts(collection);
  const hero = getCollectionHeroProduct(collection);
  const whatsappHref = createWhatsAppLink(`Hello Growcean Lighting, I want more information about ${collection.title}. My target market is [country].`);
  const ctaLabel = collection.ctaLabel ?? copy.whatsapp;

  return (
    <main className="catalog-page">
      <section className="catalog-hero product-detail-hero">
        <div className="container product-detail-grid">
          <div>
            <p className="catalog-eyebrow">{collection.eyebrow}</p>
            <h1>{collection.title}</h1>
            <p className="catalog-lead">{collection.description}</p>
            <div className="catalog-actions">
              <a className="button" href="#collection-inquiry">{ctaLabel} <ArrowRight size={18} /></a>
              <a className="button button-outline-dark" href={whatsappHref} target="_blank" rel="noreferrer" data-event="whatsapp_click"><MessageCircle size={18} />{copy.whatsapp}</a>
              <a className="button button-outline-dark" href="#collection-skus">{copy.viewProduct}</a>
              <a className="button button-ghost" href="/Growcean-Product-Catalog.pdf"><Download size={18} />{copy.download}</a>
            </div>
          </div>
          {hero ? (
            <div className="product-detail-image">
              <Image src={hero.images[0]} alt={`${hero.model} ${hero.name}`} fill sizes="(max-width: 900px) 92vw, 42vw" priority />
            </div>
          ) : null}
        </div>
      </section>

      {collection.contentSections?.length ? (
        <section className="section catalog-section">
          <div className="container collection-seo-content">
            {collection.contentSections.map((section) => (
              <article className="collection-seo-card" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </article>
            ))}
            {collection.internalLinks?.length ? (
              <nav className="collection-internal-links" aria-label="Related Growcean pages">
                {collection.internalLinks.map((link) => (
                  <a href={localizedPath(link.href.replace(/\/$/, ""), locale)} key={link.href}>{link.label} <ArrowRight size={15} /></a>
                ))}
              </nav>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="section catalog-section">
        <div className="container product-detail-layout">
          <div>
            <p className="section-label">Featured Catalog Model</p>
            <h2>{hero?.model}</h2>
            <div className="spec-table-wrap">
              <table className="spec-table">
                <tbody>
                  <tr><th>Product</th><td>{hero?.name}</td></tr>
                  <tr><th>Series</th><td>{hero?.series}</td></tr>
                  <tr><th>Wattage</th><td>{hero?.wattage || "Confirm by model"}</td></tr>
                  <tr><th>Size</th><td>{hero?.size.join(", ") || "Confirm by model"}</td></tr>
                  <tr><th>Material</th><td>{hero?.material || "Confirm by model"}</td></tr>
                  <tr><th>Voltage</th><td>{hero?.voltage || "220V"}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="section-label">Collection Advantages</p>
            <div className="catalog-feature-grid one-col">
              {collection.features.map((feature) => <div className="catalog-feature" key={feature}><CheckCircle2 /><span>{feature}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section catalog-feature-band">
        <div className="container">
          <div className="section-heading">
            <div><p className="section-label">Application Scenes</p><h2>Built for sourcing programs, not just display</h2></div>
            <a className="text-link" href={localizedPath("/blog/how-to-choose-ceiling-lights", locale)}>{copy.blogLink} <ArrowRight size={16} /></a>
          </div>
          <div className="application-chip-grid">{collection.applications.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="section catalog-section" id="collection-skus">
        <div className="container">
          <div className="section-heading">
            <div><p className="section-label">Selected SKU</p><h2>{collection.title} Catalog Products</h2></div>
            <p>These SKU records are selected from the uploaded Growcean catalog package and can be filtered by wattage, size, material and recommended space.</p>
          </div>
          <ProductListing products={items} locale={locale} />
        </div>
      </section>

      <section className="section catalog-section">
        <div className="container product-detail-layout">
          <div>
            <p className="section-label">FAQ</p>
            <div className="catalog-faq-list">
              {collection.faq.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
            </div>
          </div>
          <div id="collection-inquiry">
            <p className="section-label">B2B INQUIRY</p>
            <h2>Send your ceiling lighting requirements</h2>
            <p className="catalog-body-copy">Tell Growcean your target product type, quantity, wattage or size, CCT, voltage, application, packaging needs and destination market. We will help shortlist suitable catalog models for sample or quotation discussion.</p>
            <div className="catalog-actions compact">
              <a className="button" href={whatsappHref} target="_blank" rel="noreferrer" data-event="whatsapp_click"><MessageCircle size={18} />{ctaLabel}</a>
              <a className="button button-outline-dark" href="/Growcean-Product-Catalog.pdf"><Download size={18} />Get Catalog</a>
            </div>
            <p className="section-label related-products-label">Related Products</p>
            <div className="catalog-card-grid two-col">
              {items.slice(0, 2).map((product) => <CatalogProductCard key={product.id} product={product} locale={locale} />)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
