import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Factory, Globe2, PackageCheck, Plane, ShieldCheck, Truck } from "lucide-react";
import { AdsLeadForm } from "@/components/ads-lead-form";

export const metadata: Metadata = {
  title: "LED Ceiling Lights Manufacturer | Get Quote",
  description: "Google Ads landing page for LED ceiling light inquiries from importers, wholesalers and project buyers.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const advantages = [
  { icon: Factory, title: "Factory Price", text: "Direct sourcing support for importers and wholesalers." },
  { icon: Truck, title: "Fast Delivery", text: "Clear sampling and order follow-up for urgent programs." },
  { icon: PackageCheck, title: "OEM/ODM Support", text: "Logo, packaging, labels and market-ready product ranges." },
  { icon: Plane, title: "Global Shipping", text: "Export coordination for Mexico, Chile, Peru, Colombia and Spain." },
  { icon: ShieldCheck, title: "Professional Manufacturer", text: "Ceiling light supplier focused on practical B2B orders." },
];

export default function AdsLedCeilingLightsPage() {
  return (
    <main className="ads-page">
      <section className="ads-hero">
        <div className="ads-shell ads-hero-grid">
          <div className="ads-hero-copy">
            <Image src="/images/growcean-logo.png" alt="Growcean" width={180} height={48} priority />
            <p className="ads-eyebrow">B2B LED CEILING LIGHT SUPPLIER</p>
            <h1>LED Ceiling Lights Manufacturer</h1>
            <p className="ads-value">Factory-direct ceiling lights for importers, wholesalers and project buyers.</p>
            <div className="ads-selling-points">
              <span><CheckCircle2 /> OEM/ODM support</span>
              <span><CheckCircle2 /> Fast quotation</span>
              <span><CheckCircle2 /> Global export support</span>
            </div>
            <a className="ads-primary-button ads-hero-button" href="#quote">Get Quote</a>
          </div>
          <div className="ads-hero-form" id="quote">
            <h2>Get Price & Catalog</h2>
            <p>Send your contact details. We will reply with suitable models, MOQ and quotation options.</p>
            <AdsLeadForm compact />
          </div>
        </div>
      </section>

      <section className="ads-section">
        <div className="ads-shell">
          <div className="ads-section-heading">
            <p className="ads-eyebrow">WHY BUYERS CHOOSE GROWCEAN</p>
            <h2>Simple sourcing support for LED ceiling lights</h2>
          </div>
          <div className="ads-advantage-grid">
            {advantages.map(({ icon: Icon, title, text }) => (
              <div className="ads-advantage" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <a className="ads-inline-cta" href="#final-inquiry">Send requirements now</a>
        </div>
      </section>

      <section className="ads-section ads-product-section">
        <div className="ads-shell ads-product-grid">
          <div>
            <p className="ads-eyebrow">PRODUCT APPLICATION</p>
            <h2>Ceiling lights for homes, hotels, apartments and corridor projects</h2>
            <p>
              Growcean supplies LED ceiling lights for wholesale programs, private-label orders and project sourcing. Choose from
              ultra-thin lights, flush mount lights, smart ceiling lights, decorative styles and corridor lighting options.
            </p>
            <p>
              Tell us your target market, quantity and preferred style. We will recommend suitable models and prepare quotation
              details for your order.
            </p>
            <a className="ads-secondary-button" href="#final-inquiry">Contact Us</a>
          </div>
          <div className="ads-product-image">
            <Image src="/images/catalog-products-clean/page-050.jpg" alt="LED ceiling light application for B2B sourcing" fill sizes="(max-width: 800px) 92vw, 40vw" />
          </div>
        </div>
      </section>

      <section className="ads-trust">
        <div className="ads-shell ads-trust-grid">
          <div><Globe2 /><strong>Export Markets</strong><span>Mexico · Chile · Peru · Colombia · Spain</span></div>
          <div><ShieldCheck /><strong>Certifications</strong><span>CE · RoHS · market documents by order</span></div>
          <div><Factory /><strong>B2B Experience</strong><span>OEM, wholesale and project order support</span></div>
        </div>
      </section>

      <section className="ads-final-cta" id="final-inquiry">
        <div className="ads-shell ads-final-grid">
          <div>
            <p className="ads-eyebrow">FAST RESPONSE</p>
            <h2>Send Your LED Ceiling Light Inquiry Now</h2>
            <p>Share your quantity, target country and preferred style. Growcean will reply with product suggestions, catalog and quotation details.</p>
            <ul>
              <li><CheckCircle2 /> Catalog and model recommendation</li>
              <li><CheckCircle2 /> MOQ and price discussion</li>
              <li><CheckCircle2 /> OEM/ODM and packaging support</li>
            </ul>
          </div>
          <AdsLeadForm />
        </div>
      </section>
    </main>
  );
}
