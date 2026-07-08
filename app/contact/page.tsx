import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { BuyerTrustMiniBlock } from "@/components/sections/BuyerTrustMiniBlock";
import { SafeBuyingSection } from "@/components/sections/SafeBuyingSection";
import { createWhatsAppLink, growceanEmail, growceanWhatsAppDisplay } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact Growcean Lighting | Request a B2B Lighting Quote",
  description:
    "Contact Growcean Lighting, a China lighting sourcing and quality-control partner for ceiling lights, decorative lights, corridor lights, waterproof lights and project lighting support.",
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
  const whatsappHref = createWhatsAppLink("Hello Growcean Lighting, I am looking for lighting products from China. Please recommend suitable models.");

  return (
    <main className="catalog-page">
      <section className="catalog-hero product-detail-hero">
        <div className="container product-detail-grid">
          <div>
            <p className="catalog-eyebrow">CONTACT GROWCEAN</p>
            <h1>Looking for lighting products from China?</h1>
            <p className="catalog-lead">
              Tell us your target market, quantity idea, preferred style, or reference photos. Growcean will help recommend suitable lighting models and explain the next steps clearly.
            </p>
            <BuyerTrustMiniBlock />
            <div className="catalog-actions">
              <a className="button" href={whatsappHref} target="_blank" rel="noreferrer" data-event="whatsapp_click"><MessageCircle size={18} />Contact on WhatsApp</a>
              <a className="button button-outline-dark" href={`mailto:${growceanEmail}`}><Mail size={18} />{growceanEmail}</a>
            </div>
          </div>
          <div className="category-quote-panel">
            <p className="section-label">B2B CONTACT DETAILS</p>
            <h2>Talk to Growcean</h2>
            <p>Use this contact page for model recommendation, catalog requests, sample discussion, export packaging questions and project lighting quotation support.</p>
            <div className="contact-detail-list">
              <span><MessageCircle size={18} /> WhatsApp: {growceanWhatsAppDisplay}</span>
              <span><Mail size={18} /> {growceanEmail}</span>
              <span><MapPin size={18} /> 2nd Floor, Jinyue Building, No. 183 Nanzhou Road, Haizhu District, Guangzhou, Guangdong, China</span>
            </div>
            <BuyerTrustMiniBlock />
          </div>
        </div>
      </section>

      <section className="section catalog-section">
        <div className="container product-detail-layout">
          <div>
            <p className="section-label">WHAT TO SEND</p>
            <h2>Help us recommend the right lighting options</h2>
            <ul className="category-check-list">
              <li>Your target market, for example Mexico, Chile, Peru, Colombia, Spain or another country</li>
              <li>Your quantity idea. MOQ starts from 50 pcs for many standard lighting models</li>
              <li>Your preferred style: ceiling lights, decorative lights, corridor lights, waterproof lights or project lighting</li>
              <li>Reference photos if you already have a style direction</li>
              <li>Whether you want catalog, sample discussion, quotation or project lighting plan first</li>
            </ul>
          </div>
          <div>
            <p className="section-label">INQUIRY FORM</p>
            <InquiryForm />
          </div>
        </div>
      </section>

      <SafeBuyingSection compact />
    </main>
  );
}
