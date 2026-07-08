import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { FactoryGallerySection } from "@/components/sections/FactoryGallerySection";
import { QualityControlProcess } from "@/components/sections/QualityControlProcess";
import { createWhatsAppLink } from "@/lib/contact";
import { factoryImages } from "@/lib/factoryImages";

export const metadata: Metadata = {
  title: "Supply Chain View | Lighting Sourcing & Quality Control | Growcean Lighting",
  description:
    "Explore Growcean Lighting’s selected manufacturing partner facilities, production follow-up, quality control, packaging, and export preparation for B2B lighting buyers.",
  alternates: { canonical: "/factory-tour" },
};

export default function FactoryTourPage() {
  const imageSchema = factoryImages.map((image) => ({
    "@type": "ImageObject",
    contentUrl: `https://growcean.com${image.src}`,
    name: image.caption,
    description: image.description,
  }));
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Growcean Lighting",
    url: "https://growcean.com",
    logo: "https://growcean.com/images/growcean-logo.png",
    description: "China-based B2B lighting export brand working with selected manufacturing partners and supervised quality control.",
  };
  const whatsappHref = createWhatsAppLink("Hello Growcean Lighting, I want to request supply support and lighting quotation.");

  return (
    <main className="factory-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": imageSchema }) }} />
      <section className="factory-hero">
        <Image src="/images/factory-optimized/growcean-lighting-showroom-wall-1600.webp" alt="Growcean Lighting showroom wall for factory tour" fill priority sizes="100vw" />
        <div className="factory-hero-overlay" />
        <div className="container factory-hero-content">
          <p className="section-label light">SUPPLY CHAIN VIEW</p>
          <h1>Supply Chain View & Quality Control</h1>
          <p>From selected manufacturing facilities to pre-shipment inspection, Growcean focuses on reliable lighting supply for international B2B buyers.</p>
          <div className="factory-hero-actions">
            <a className="button" href="/#inquiry">Request Supply Support</a>
            <a className="button button-outline" href={whatsappHref} target="_blank" rel="noreferrer" data-event="whatsapp_click"><MessageCircle size={18} />WhatsApp Inquiry</a>
          </div>
        </div>
      </section>
      <section className="section factory-gallery-section">
        <div className="container">
          <div className="section-heading centered narrow">
            <p className="section-label">MANUFACTURING PARTNER FACILITIES</p>
            <h2>Production, inspection, packaging and product display</h2>
            <p>Images are used to show Growcean-supervised sourcing and partner-factory communication. They do not imply factory ownership.</p>
          </div>
          <FactoryGallerySection mode="full" />
        </div>
      </section>
      <QualityControlProcess />
      <section className="pd-inquiry">
        <div className="container pd-inquiry-grid">
          <div>
            <p className="section-label light">B2B LIGHTING SOURCING</p>
            <h2>Need lighting products for your market?</h2>
            <p>Share your product type, quantity, target market, wattage, CCT and packaging requirements. Growcean will help confirm suitable models and supplier communication.</p>
          </div>
          <div className="catalog-cta-panel">
            <a className="button" href="/#inquiry">Request Product Sourcing Support</a>
            <a className="button button-outline" href={whatsappHref} target="_blank" rel="noreferrer" data-event="whatsapp_click">WhatsApp Inquiry</a>
          </div>
        </div>
      </section>
    </main>
  );
}
