import Image from "next/image";
import { ArrowRight, Download, MessageCircle, PackageCheck } from "lucide-react";
import {
  catalogCopy,
  categoryNameByLocale,
  getRelatedProducts,
  isRtl,
  localizedPath,
  productLongDescription,
  type Product,
} from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";
import { CatalogProductCard } from "./product-card";

export function ProductDetail({ product, locale }: { product: Product; locale: Locale }) {
  const copy = catalogCopy[locale];
  const related = getRelatedProducts(product);
  const whatsappText = encodeURIComponent(`Hello Growcean, I want a quotation for ${product.model} ${product.name}.`);
  const faqs = productFaq(product, locale);

  return (
    <main className="catalog-page" dir={isRtl(locale) ? "rtl" : "ltr"}>
      <section className="catalog-hero product-detail-hero">
        <div className="container product-detail-grid">
          <div>
            <p className="catalog-eyebrow">{categoryNameByLocale[locale][product.category]} · {product.series}</p>
            <h1>{product.name}</h1>
            <p className="catalog-lead">{productLongDescription(product, locale)}</p>
            <div className="catalog-actions">
              <a className="button" href={`https://wa.me/8615602224748?text=${whatsappText}`}><MessageCircle size={18} />{copy.whatsapp}</a>
              <a className="button button-outline-dark" href="#product-inquiry">{copy.quote}</a>
              <a className="button button-ghost" href="/Growcean-Product-Catalog.pdf"><Download size={18} />{copy.download}</a>
            </div>
          </div>
          <div className="product-detail-image">
            <Image src={product.images[0]} alt={`${product.model} ${product.name}`} fill sizes="(max-width: 900px) 92vw, 42vw" priority />
          </div>
        </div>
      </section>

      <section className="section catalog-section">
        <div className="container product-detail-layout">
          <div>
            <p className="section-label">{copy.specs}</p>
            <h2>{product.model}</h2>
            <div className="spec-table-wrap">
              <table className="spec-table">
                <tbody>
                  <tr><th>Series</th><td>{product.series}</td></tr>
                  <tr><th>{copy.material}</th><td>{product.material || "Confirm by model"}</td></tr>
                  <tr><th>Voltage</th><td>{product.voltage}</td></tr>
                  <tr><th>Color</th><td>{product.color_options.join(", ") || "Confirm by model"}</td></tr>
                  <tr><th>Control</th><td>{product.style || "Confirm by model"}</td></tr>
                  <tr><th>CRI / RA</th><td>{product.ra || "High CRI"}</td></tr>
                  <tr><th>Blue light</th><td>{product.blue_light || "RG0 low blue light when listed"}</td></tr>
                  <tr><th>Certifications</th><td>{product.certifications.join(", ")}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="section-label">{copy.wattage} / {copy.size}</p>
            <div className="spec-table-wrap">
              <table className="spec-table">
                <thead><tr><th>{copy.size}</th><th>{copy.wattage}</th><th>{copy.space}</th></tr></thead>
                <tbody>
                  {product.size_options.length ? product.size_options.map((option) => (
                    <tr key={`${option.size}-${option.power}-${option.space}`}><td>{option.size}</td><td>{option.power}</td><td>{option.space}</td></tr>
                  )) : <tr><td colSpan={3}>Confirm project configuration with Growcean.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section catalog-feature-band">
        <div className="container">
          <div className="section-heading">
            <div><p className="section-label">{copy.features}</p><h2>Engineering details for B2B buyers</h2></div>
            <a className="text-link" href={localizedPath("/blog/how-to-choose-ceiling-lights", locale)}>{copy.blogLink} <ArrowRight size={16} /></a>
          </div>
          <div className="catalog-feature-grid">
            {product.features.map((feature) => <div className="catalog-feature" key={feature}><PackageCheck /><span>{feature}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section catalog-section">
        <div className="container product-detail-layout">
          <div>
            <p className="section-label">{copy.applications}</p>
            <div className="application-chip-grid">
              {product.applications.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div>
            <p className="section-label">{copy.faq}</p>
            <div className="catalog-faq-list">
              {faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
            </div>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="section catalog-section">
          <div className="container">
            <div className="section-heading"><div><p className="section-label">{copy.related}</p><h2>{product.series}</h2></div></div>
            <div className="catalog-card-grid">
              {related.map((item) => <CatalogProductCard key={item.id} product={item} locale={locale} />)}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pd-inquiry" id="product-inquiry">
        <div className="container pd-inquiry-grid">
          <div><p className="section-label light">{product.model}</p><h2>{copy.quote}</h2><p>Share destination market, quantity, target voltage and packaging requirements. Growcean will confirm product feasibility, MOQ and sample terms.</p></div>
          <div className="catalog-cta-panel">
            <a className="button" href={`https://wa.me/8615602224748?text=${whatsappText}`}>{copy.whatsapp}</a>
            <a className="button button-outline" href="mailto:Vancouver9866@gmail.com">{copy.quote}</a>
            <a className="button button-outline" href="/Growcean-Product-Catalog.pdf">{copy.download}</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export function productFaq(product: Product, locale: Locale) {
  const model = product.model;
  const common = [
    ["Can this light be used with 220V?", `${model} is listed with ${product.voltage}. Wide voltage or market-specific voltage should be confirmed before production.`],
    ["Does it support smart control?", product.style ? `The catalog lists: ${product.style}. Final smart-control configuration is confirmed by model, quantity and destination market.` : "Smart control availability should be confirmed by model before quotation."],
    ["Is the driver flicker free?", "Where listed, Growcean uses constant current no-flicker driver solutions and can confirm the driver configuration before sample order."],
    ["What is the warranty?", `The catalog warranty is ${product.warranty || "2 years"}.`],
    ["Can Growcean ship to Latin America or Spain?", "Yes. Growcean supports export communication for Mexico, Chile, Peru, Colombia, Spain and other B2B markets."],
  ];
  if (locale === "es") return common.map(([q, a]) => ({ q, a }));
  if (locale === "fr") return common.map(([q, a]) => ({ q, a }));
  if (locale === "ar") return common.map(([q, a]) => ({ q, a }));
  if (locale === "ru") return common.map(([q, a]) => ({ q, a }));
  return common.map(([q, a]) => ({ q, a }));
}
