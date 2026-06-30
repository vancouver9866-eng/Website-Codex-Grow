import Image from "next/image";
import { ArrowRight, Download, MessageCircle, PackageCheck } from "lucide-react";
import {
  catalogCopy,
  categoryNameByLocale,
  getRelatedProducts,
  isRtl,
  localizedPath,
  type Product,
} from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";
import { CatalogProductCard } from "./product-card";
import { TrustBadges } from "@/components/sections/TrustBadges";

export function ProductDetail({ product, locale }: { product: Product; locale: Locale }) {
  const copy = catalogCopy[locale];
  const related = getRelatedProducts(product);
  const whatsappText = encodeURIComponent(`Hello Growcean, I want a quotation for ${product.model} ${product.name}.`);
  const faqs = productFaq(product, locale);
  const productTitle = locale === "en" ? `${product.name} LED Ceiling Light for Wholesale and Project Buyers` : product.name;
  const safe = (value?: string) => value && value.trim() ? value : "To be confirmed";
  const cct = product.color_options.length ? product.color_options.join(", ") : "To be confirmed";
  const dimming = product.style || "To be confirmed";

  return (
    <main className="catalog-page" dir={isRtl(locale) ? "rtl" : "ltr"}>
      <section className="catalog-hero product-detail-hero">
        <div className="container product-detail-grid">
          <div>
            <p className="catalog-eyebrow">{categoryNameByLocale[locale][product.category]} · {product.series}</p>
            <h1>{productTitle}</h1>
            <p className="catalog-lead">{product.model} is positioned for importers, wholesalers, distributors and project buyers who need clear product data, customization discussion and reliable quotation support.</p>
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
                  <tr><th>Model</th><td>{product.model}</td></tr>
                  <tr><th>Product Type</th><td>{categoryNameByLocale[locale][product.category] ?? product.category}</td></tr>
                  <tr><th>Application</th><td>{product.applications.join(", ") || "To be confirmed"}</td></tr>
                  <tr><th>Wattage</th><td>{safe(product.wattage)}</td></tr>
                  <tr><th>Size</th><td>{product.size.join(", ") || "To be confirmed"}</td></tr>
                  <tr><th>CCT</th><td>{cct}</td></tr>
                  <tr><th>Dimming</th><td>{dimming}</td></tr>
                  <tr><th>Series</th><td>{product.series}</td></tr>
                  <tr><th>{copy.material}</th><td>{safe(product.material)}</td></tr>
                  <tr><th>Voltage</th><td>{safe(product.voltage)}</td></tr>
                  <tr><th>MOQ</th><td>To be confirmed</td></tr>
                  <tr><th>Customization</th><td>Size, wattage, CCT, dimming, logo and packaging requirements can be confirmed by model and quantity.</td></tr>
                  <tr><th>CRI / RA</th><td>{product.ra || "To be confirmed"}</td></tr>
                  <tr><th>Blue light</th><td>{product.blue_light || "To be confirmed"}</td></tr>
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

      <section className="section product-trust-strip-section">
        <div className="container">
          <TrustBadges compact />
          <div className="product-market-cta">
            <div>
              <h2>Need this model for your market?</h2>
              <p>Send us your target wattage, size, voltage, quantity, and market. We will help match the suitable configuration.</p>
            </div>
            <a className="button" href="#product-inquiry">Get Quote</a>
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
            <p className="section-label">CUSTOMIZATION & WHOLESALE</p>
            <h2>Confirm the details that matter before production</h2>
            <p className="catalog-body-copy">Growcean can discuss target size, wattage, CCT, dimming, packaging, logo, label, manual and market requirements for wholesale or project orders. Commercial terms such as MOQ, sample availability and packaging feasibility are confirmed by model and quantity.</p>
            <ul className="category-check-list">
              <li>OEM / private-label packaging discussion</li>
              <li>Wattage, size and CCT requirement confirmation</li>
              <li>Application matching for home, hotel, apartment, office or corridor projects</li>
              <li>Sample and bulk-order details confirmed before production</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section catalog-section">
        <div className="container product-detail-layout">
          <div>
            <p className="section-label">{copy.faq}</p>
            <h2>Buyer questions before quotation</h2>
          </div>
          <div className="catalog-faq-list">
            {faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
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
          <div><p className="section-label light">{product.model}</p><h2>{copy.quote}</h2><p>Send us your target size, wattage, CCT, quantity and market requirements. Our team will help you select suitable ceiling light models for your project or wholesale range.</p></div>
          <div className="catalog-cta-panel">
            <a className="button" href={`https://wa.me/8615602224748?text=${whatsappText}`}>{copy.whatsapp}</a>
            <a className="button button-outline" href="mailto:mike@growcean.com">{copy.quote}</a>
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
    ["What wattage and size options are available?", product.size_options.length ? `${model} includes catalog size and wattage options shown in the specification table. Final configuration should be confirmed by quantity and market requirement.` : "Wattage and size should be confirmed by model before quotation."],
    ["Can CCT, logo or packaging be customized?", "CCT, logo, label, manual and packaging requirements can be discussed for OEM or private-label orders. Final feasibility is confirmed by model and quantity."],
    ["What is the MOQ for this product?", "MOQ is not fixed on this page because it depends on model, customization and packaging requirements. Send your target quantity for confirmation."],
    ["Are samples available before bulk orders?", "Sample availability can be confirmed by model. Samples are recommended when buyers need to verify size, finish, light effect or packaging before production."],
    ["Which applications are suitable?", `${model} can be evaluated for ${product.applications.join(", ") || "home, hotel, apartment, office or project applications"} after confirming wattage, size and installation requirements.`],
    ["Can this light be used with 220V?", `${model} is listed with ${product.voltage}. Wide voltage or market-specific voltage should be confirmed before production.`],
  ];
  if (locale === "es") return common.map(([q, a]) => ({ q, a }));
  if (locale === "fr") return common.map(([q, a]) => ({ q, a }));
  if (locale === "ar") return common.map(([q, a]) => ({ q, a }));
  if (locale === "ru") return common.map(([q, a]) => ({ q, a }));
  return common.map(([q, a]) => ({ q, a }));
}
