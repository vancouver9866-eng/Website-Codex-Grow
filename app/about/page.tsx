import type { Metadata } from "next";
import Image from "next/image";
import { FactoryGallerySection } from "@/components/sections/FactoryGallerySection";

export const metadata: Metadata = {
  title: "About Growcean Lighting | B2B Lighting Export Support",
  description:
    "Learn how Growcean Lighting supports international B2B buyers with lighting sourcing, selected manufacturing partners, quality control and export communication.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="factory-page">
      <section className="catalog-hero">
        <div className="container">
          <p className="catalog-eyebrow">ABOUT GROWCEAN LIGHTING</p>
          <h1>From China’s Lighting Supply Chain to Global Markets</h1>
          <p className="catalog-lead">Growcean Lighting is a China-based lighting export brand serving international B2B buyers. We work with selected manufacturing partners and focus on product sourcing, quality control, export communication, and long-term supply support.</p>
          <div className="catalog-category-pills"><a href="/factory-tour">Factory Tour</a><a href="/quality-control">Quality Control</a><a href="/#inquiry">Contact Us</a></div>
        </div>
      </section>
      <section className="section catalog-section">
        <div className="container product-detail-layout">
          <div>
            <p className="section-label">B2B LIGHTING EXPORT BRAND</p>
            <h2>Practical sourcing support without overstated claims</h2>
            <p className="catalog-body-copy">Growcean Lighting helps importers, wholesalers, distributors and project buyers compare ceiling lights, corridor lights, waterproof lights, decorative lighting and package sets. We use accurate B2B communication, partner-factory coordination and Growcean-supervised QC steps to support export-ready lighting solutions.</p>
            <p className="catalog-body-copy">Our role is to clarify buyer requirements, coordinate product information, support customization discussion and prepare practical follow-up for sample and bulk orders.</p>
          </div>
          <div className="about-image-card">
            <Image src="/images/factory-optimized/growcean-lighting-qc-inspection-1200.webp" alt="Growcean-supervised lighting quality inspection" fill sizes="(max-width: 900px) 92vw, 42vw" />
          </div>
        </div>
      </section>
      <section className="section factory-gallery-section">
        <div className="container">
          <div className="section-heading centered narrow">
            <p className="section-label">SUPPLY CHAIN IMAGES</p>
            <h2>Workshop, production, QC and packaging references</h2>
            <p>These images support buyer understanding of selected manufacturing partners, partner facilities and Growcean-supervised quality communication.</p>
          </div>
          <FactoryGallerySection mode="full" groups={["production", "quality", "packaging", "showroom"]} />
        </div>
      </section>
    </main>
  );
}
