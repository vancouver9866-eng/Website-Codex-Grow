import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "Contact Growcean Lighting | Request a B2B Lighting Quote",
  description:
    "Contact Growcean Lighting for LED ceiling lights, flush mount lights, decorative ceiling lamps, OEM/ODM discussion, catalog requests and project quotations.",
  alternates: {
    canonical: "/contact",
    languages: {
      en: "/contact",
      es: "/es/contact",
      fr: "/fr/contact",
      ar: "/ar/contact",
      ru: "/ru/contact",
      "x-default": "/contact",
    },
  },
};

export default function ContactPage() {
  const whatsappText = encodeURIComponent("Hello Growcean, I want to request a lighting quotation or catalog.");

  return (
    <main className="catalog-page">
      <section className="catalog-hero product-detail-hero">
        <div className="container product-detail-grid">
          <div>
            <p className="catalog-eyebrow">CONTACT GROWCEAN</p>
            <h1>Request a B2B Lighting Quote</h1>
            <p className="catalog-lead">
              Send your product type, target quantity, wattage or size requirement, CCT, voltage, application, packaging needs and destination market. Growcean will review your request and reply with suitable next steps.
            </p>
            <div className="catalog-actions">
              <a className="button" href={`https://wa.me/8615602224748?text=${whatsappText}`}><MessageCircle size={18} />WhatsApp Inquiry</a>
              <a className="button button-outline-dark" href="mailto:mike@growcean.com"><Mail size={18} />mike@growcean.com</a>
            </div>
          </div>
          <div className="category-quote-panel">
            <p className="section-label">B2B CONTACT DETAILS</p>
            <h2>Talk to Growcean</h2>
            <p>Use this contact page for catalog requests, sample discussion, OEM/ODM packaging questions and project lighting quotation support.</p>
            <div className="contact-detail-list">
              <span><MessageCircle size={18} /> WhatsApp: +86 156 0222 4748</span>
              <span><Mail size={18} /> mike@growcean.com</span>
              <span><MapPin size={18} /> 2nd Floor, Jinyue Building, No. 183 Nanzhou Road, Haizhu District, Guangzhou, Guangdong, China</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section catalog-section">
        <div className="container product-detail-layout">
          <div>
            <p className="section-label">WHAT TO SEND</p>
            <h2>Help us quote the right ceiling lighting options</h2>
            <ul className="category-check-list">
              <li>Product type: LED ceiling light, flush mount light, smart ceiling light, decorative ceiling lamp or corridor light</li>
              <li>Target quantity, market and application: hotel, apartment, office, retail or wholesale distribution</li>
              <li>Wattage, size, CCT, voltage, dimming or smart-control requirements</li>
              <li>OEM / ODM needs such as logo, packaging, labeling, manual or product range planning</li>
              <li>Whether you need catalog, samples, quotation or project lighting plan first</li>
            </ul>
          </div>
          <div>
            <p className="section-label">INQUIRY FORM</p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
