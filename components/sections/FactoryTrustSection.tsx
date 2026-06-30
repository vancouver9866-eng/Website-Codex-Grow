import { ArrowRight, BadgeCheck, Boxes, Factory, FileText, MessageCircle, PackageCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { trustCopy } from "@/lib/factoryImages";
import { FactoryGallerySection } from "./FactoryGallerySection";

const cards = [
  {
    icon: Factory,
    title: "Selected Manufacturing Partners",
    text: "We cooperate with experienced lighting manufacturing facilities in China for ceiling lights, corridor lights, waterproof lights, and decorative lighting.",
  },
  {
    icon: BadgeCheck,
    title: "Pre-Shipment Quality Control",
    text: "Each order can be checked for appearance, lighting performance, accessories, packaging, and quantity before shipment.",
  },
  {
    icon: Boxes,
    title: "Export-Ready Packaging",
    text: "Products are packed for international transportation, helping reduce damage risk during long-distance shipping.",
  },
  {
    icon: FileText,
    title: "Technical Product Data",
    text: "Many Growcean lighting products support flicker-free drivers, high CRI, RG0 low blue light, smart dimming options, and 2-year warranty.",
  },
  {
    icon: PackageCheck,
    title: "OEM / ODM Support",
    text: "We support customized models, voltage options, packaging, labeling, and project-based sourcing for B2B buyers.",
  },
];

export function FactoryTrustSection({ locale = "en" }: { locale?: Locale }) {
  const copy = trustCopy[locale];
  const whatsappText = encodeURIComponent("Hello Growcean, I want to learn about factory capability, quality control and lighting quotation.");

  return (
    <section className="section factory-trust-section" id="factory-capability">
      <div className="container">
        <div className="factory-trust-header">
          <div>
            <p className="section-label">{copy.label}</p>
            <h2>{copy.title}</h2>
          </div>
          <p>{copy.subtitle}</p>
        </div>
        <FactoryGallerySection mode="homepage" />
        <div className="factory-trust-cards">
          {cards.map(({ icon: Icon, title, text }) => (
            <div className="factory-trust-card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="factory-trust-actions">
          <a className="button" href="/factory-tour">{copy.factoryTour} <ArrowRight size={18} /></a>
          <a className="button button-outline-blue" href="#inquiry">{copy.quote}</a>
          <a className="button button-ghost-blue" href={`https://wa.me/8615602224748?text=${whatsappText}`}><MessageCircle size={18} />{copy.whatsapp}</a>
        </div>
      </div>
    </section>
  );
}
