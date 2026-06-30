import type { Metadata } from "next";
import { Boxes, ClipboardCheck, Lightbulb, PackageCheck, ShieldCheck } from "lucide-react";
import { CertificateDisclaimer } from "@/components/sections/CertificateDisclaimer";
import { FactoryGallerySection } from "@/components/sections/FactoryGallerySection";
import { QualityControlProcess } from "@/components/sections/QualityControlProcess";

export const metadata: Metadata = {
  title: "Quality Control | LED Lighting Inspection & Export Packaging | Growcean Lighting",
  description:
    "Learn how Growcean Lighting manages product selection, quality checking, packaging inspection, and export support for global lighting buyers.",
  alternates: { canonical: "/quality-control" },
};

const checkItems = ["Product appearance", "Light output", "Color temperature", "Driver and wiring", "Accessories", "Quantity", "Packaging", "Labeling"];
const reliability = ["Flicker-free driver options", "High CRI options", "RG0 low blue light options", "Smart dimming options", "2-year warranty options", "IP65 waterproof options for selected waterproof ceiling lights"];
const faqs = [
  { q: "Are the certificates issued under Growcean name?", a: "Some certificates may be issued to manufacturing partner factories. Growcean coordinates product sourcing, quality communication, inspection, and export service." },
  { q: "Can Growcean support OEM packaging?", a: "Yes, OEM packaging and labeling can be discussed based on order quantity and product model." },
  { q: "Do you inspect products before shipment?", a: "Pre-shipment inspection can include appearance, lighting effect, accessories, quantity, packaging, and labeling checks." },
  { q: "Do you support different voltage requirements?", a: "Some products can be customized for wide voltage depending on model and order requirements." },
  { q: "What warranty do you offer?", a: "Many catalog models offer 2-year warranty options. Final warranty depends on product model and order terms." },
];

export default function QualityControlPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main className="factory-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="catalog-hero">
        <div className="container">
          <p className="catalog-eyebrow">QUALITY CONTROL</p>
          <h1>Quality Control for Export Lighting Orders</h1>
          <p className="catalog-lead">Growcean Lighting combines selected manufacturing resources with practical inspection steps to support stable B2B lighting supply.</p>
          <div className="catalog-category-pills"><a href="/factory-tour">Factory Tour</a><a href="/#inquiry">Get a Quote</a></div>
        </div>
      </section>
      <section className="section catalog-section">
        <div className="container product-detail-layout">
          <div className="category-quote-panel">
            <p className="section-label">WHAT WE CHECK</p>
            <div className="qc-check-grid">
              {checkItems.map((item) => <span key={item}><ClipboardCheck size={17} />{item}</span>)}
            </div>
          </div>
          <div className="category-quote-panel">
            <p className="section-label">PRODUCT RELIABILITY HIGHLIGHTS</p>
            <div className="qc-check-grid">
              {reliability.map((item) => <span key={item}><ShieldCheck size={17} />{item}</span>)}
            </div>
          </div>
        </div>
      </section>
      <section className="section factory-gallery-section">
        <div className="container">
          <div className="section-heading centered narrow">
            <p className="section-label">INSPECTION, PACKAGING & SHIPMENT</p>
            <h2>Practical checks before export delivery</h2>
            <p>Quality-control images focus on light-on checking, packaging, shipment preparation and showroom sample confirmation.</p>
          </div>
          <FactoryGallerySection mode="full" groups={["quality", "packaging", "showroom"]} />
        </div>
      </section>
      <QualityControlProcess compact />
      <section className="section catalog-section">
        <div className="container product-detail-layout">
          <div>
            <p className="section-label">WARRANTY MESSAGE</p>
            <h2>Warranty terms confirmed by product model</h2>
            <p className="catalog-body-copy">Most catalog products are supplied with a 2-year warranty. Warranty terms may vary depending on product model and order requirements.</p>
            <CertificateDisclaimer />
          </div>
          <div>
            <p className="section-label">BUYER FAQ</p>
            <div className="catalog-faq-list">
              {faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
            </div>
          </div>
        </div>
      </section>
      <section className="pd-inquiry">
        <div className="container pd-inquiry-grid">
          <div>
            <p className="section-label light">EXPORT LIGHTING SUPPORT</p>
            <h2>Want QC details for your lighting order?</h2>
            <p>Send your target product type, quantity, packaging request and destination market. Growcean will help prepare practical inspection and quotation communication.</p>
          </div>
          <div className="catalog-cta-panel">
            <a className="button" href="/#inquiry"><Lightbulb size={18} />Request QC Support</a>
            <a className="button button-outline" href="/factory-tour"><Boxes size={18} />View Factory Tour</a>
            <a className="button button-outline" href="/products"><PackageCheck size={18} />View Products</a>
          </div>
        </div>
      </section>
    </main>
  );
}
