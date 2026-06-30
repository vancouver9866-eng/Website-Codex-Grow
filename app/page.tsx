import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Box,
  Check,
  ChevronRight,
  CircleGauge,
  Globe2,
  Headphones,
  Hotel,
  House,
  Layers3,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Palette,
  Ruler,
  SlidersHorizontal,
  Sparkles,
  SunMedium,
  Wifi,
  Zap,
} from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { InquiryForm } from "@/components/inquiry-form";
import { MegaNavigation } from "@/components/mega-navigation";
import { MobileMenu } from "@/components/mobile-menu";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ProductVideoShowcase } from "@/components/product-video-showcase";
import { FactoryTrustSection } from "@/components/sections/FactoryTrustSection";
import { QualityControlProcess } from "@/components/sections/QualityControlProcess";
import { SocialLinks } from "@/components/social-links";
import { getTranslations, type Locale } from "@/lib/i18n";
import { categoryDefinitions, categoryNameByLocale, localizedPath, products as catalogProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Growcean | B2B LED Ceiling Lights & Custom Lighting Solutions",
  description:
    "Growcean supplies customizable LED ceiling lights, flush mount lights, smart ceiling lights and decorative lighting solutions for importers, wholesalers, distributors and project buyers worldwide.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      fr: "/fr",
      ar: "/ar",
      ru: "/ru",
      "x-default": "/",
    },
  },
};

const products = [
  {
    name: "LED Ceiling Lights",
    text: "High-efficiency lighting in versatile sizes for residential and project use.",
    image: "/images/ultra-thin.jpg",
    href: "/products/ultra-thin-led-ceiling-light",
  },
  {
    name: "Flush Mount Lights",
    text: "Slim surface-mounted designs made for clean, low-profile interiors.",
    image: "/images/flush-mount.jpg",
    href: "/products/flush-mount-lights",
  },
  {
    name: "Smart Ceiling Lights",
    text: "Optional remote, app and adjustable lighting configurations.",
    image: "/images/smart.jpg",
    href: "/products/smart-ceiling-lights",
  },
  {
    name: "Modern Ceiling Lamps",
    text: "Decorative forms and finishes for homes, hotels and showrooms.",
    image: "/images/modern.jpg",
    href: "/products/modern-ceiling-lamps",
  },
  {
    name: "Vintage & Wood Styles",
    text: "Warm finishes designed for distinctive regional and retail collections.",
    image: "/images/vintage.jpg",
    href: "/products/vintage-wood-styles",
  },
];

const customOptions = [
  { icon: Ruler, title: "Size & Shape", text: "Multiple dimensions and round, square or rectangular formats." },
  { icon: Zap, title: "Wattage", text: "Power configurations matched to room size and market needs." },
  { icon: SunMedium, title: "CCT", text: "Warm, neutral and cool white options where available." },
  { icon: SlidersHorizontal, title: "Dimming", text: "Three-color changing or stepless dimming configurations." },
  { icon: Wifi, title: "Smart Control", text: "Remote and app-control options subject to model confirmation." },
  { icon: Box, title: "Brand & Packaging", text: "Logo, label, manual and packaging support for private-label projects." },
];

const applications = [
  { icon: House, label: "Home", image: "/images/hero-scene.jpg" },
  { icon: Hotel, label: "Hotel", image: "/images/catalog-products-clean/page-050.jpg" },
  { icon: Layers3, label: "Apartment", image: "/images/ultra-thin.jpg" },
  { icon: CircleGauge, label: "Office", image: "/images/smart.jpg" },
];

const process = [
  { icon: MessageCircle, title: "Inquiry & Consultation", text: "Share your market, product and application requirements." },
  { icon: Lightbulb, title: "Product Selection", text: "We shortlist suitable models, sizes and lighting options." },
  { icon: Palette, title: "Customization Review", text: "Confirm branding, specifications, packaging and sample details." },
  { icon: PackageCheck, title: "Sample & Order Follow-up", text: "Coordinate samples, order updates, packing and export documents." },
  { icon: Globe2, title: "Delivery Coordination", text: "Support shipping communication and keep your team informed." },
  { icon: Headphones, title: "Ongoing Support", text: "Stay connected for repeat orders and new product requirements." },
];

export function GrowceanHome({ locale = "en" }: { locale?: Locale }) {
  const t = getTranslations(locale);
  return (
    <main>
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#top" aria-label="Growcean home">
            <Image src="/images/growcean-logo.png" alt="Growcean" width={190} height={50} priority />
          </a>
          <MegaNavigation locale={locale} />
          <LanguageSwitcher locale={locale} />
          <a className="button button-small desktop-cta" href="#inquiry">{t.quote}</a>
          <MobileMenu locale={locale} />
        </div>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/images/hero-scene.jpg"
          alt="Growcean ceiling lights in a modern interior"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <h1>{t.heroTitle}</h1>
          <p className="hero-lead">{t.heroLead}</p>
          <p className="hero-copy">{t.heroCopy}</p>
          <div className="hero-actions">
            <a className="button" href="#inquiry">{t.quote} <ArrowRight size={18} /></a>
            <a className="button button-outline" href="#products">{t.viewProducts}</a>
          </div>
        </div>
        <div className="wave" aria-hidden="true" />
      </section>

      <ProductVideoShowcase locale={locale} />

      <section className="section catalog-home-section" id="catalog">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">PDF CATALOG DATABASE</p>
              <h2>Lighting Catalog Built for B2B Sourcing</h2>
            </div>
            <p>Browse Growcean ceiling lights, corridor lights, waterproof lights, decorative styles and whole-house packages by wattage, size, material and recommended space.</p>
          </div>
          <div className="catalog-home-categories">
            {categoryDefinitions.map((category) => (
              <a href={localizedPath(`/category/${category.slug}`, locale)} key={category.slug}>
                <span>{categoryNameByLocale[locale][category.slug]}</span>
                <small>{catalogProducts.filter((product) => product.category === category.slug).length} SKU</small>
              </a>
            ))}
          </div>
          <div className="catalog-home-products">
            {catalogProducts.slice(0, 8).map((product) => (
              <a href={localizedPath(`/product/${product.slug}`, locale)} key={product.id}>
                <strong>{product.name}</strong>
                <span>{product.model}</span>
              </a>
            ))}
          </div>
          <a className="button catalog-home-button" href={localizedPath("/products", locale)}>View full product database</a>
        </div>
      </section>

      <section className="section home-insights-section" id="insights">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">BUYER INSIGHTS</p>
              <h2>Practical guides for lighting sourcing decisions</h2>
            </div>
            <p>Use engineering parameters, application scenes and shipment checks to choose the right ceiling light range before requesting a quote.</p>
          </div>
          <a className="home-blog-card" href={localizedPath("/blog/how-to-choose-led-ceiling-lights-for-b2b-projects", locale)}>
            <div className="home-blog-image">
              <Image src="/images/hero-scene.jpg" alt="LED ceiling light buyer guide for B2B sourcing" fill sizes="(max-width: 900px) 92vw, 34vw" />
            </div>
            <div className="home-blog-body">
              <span>Featured buyer guide</span>
              <h3>How to Choose LED Ceiling Lights for B2B Projects</h3>
              <p>Compare CRI, RG0 low blue light, flicker-free drivers, wattage, size, smart control and supplier checks for wholesale and project sourcing.</p>
              <strong>Read the guide <ArrowRight size={17} /></strong>
            </div>
          </a>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="container">
          <div className="section-heading centered">
            <p className="section-label">{t.productLabel}</p>
            <h2>{t.productTitle}</h2>
            <p>{t.productIntro}</p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <a className="product-card" href={localizedPath(product.href, locale)} key={product.name}>
                <div className="product-image">
                  <Image src={product.image} alt={t.products[index][0]} fill sizes="(max-width: 700px) 90vw, 20vw" />
                </div>
                <div className="product-body">
                  <h3>{t.products[index][0]}</h3>
                  <p>{t.products[index][1]}</p>
                  <span>{t.explore} <ChevronRight size={16} /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FactoryTrustSection locale={locale} />

      <QualityControlProcess compact />

      <section className="section custom-section" id="custom">
        <div className="container custom-layout">
          <div className="custom-copy">
            <p className="section-label">{t.customLabel}</p>
            <h2>{t.customTitle}</h2>
            <p>{t.customIntro}</p>
            <ul className="check-list">
              {t.checks.map((item) => <li key={item}><Check size={17} /> {item}</li>)}
            </ul>
            <a className="text-link" href="#inquiry">{t.discuss} <ArrowRight size={17} /></a>
          </div>
          <div className="custom-options">
            {customOptions.map(({ icon: Icon }, index) => (
              <div className="custom-item" key={t.customOptions[index][0]}>
                <Icon />
                <div><h3>{t.customOptions[index][0]}</h3><p>{t.customOptions[index][1]}</p></div>
              </div>
            ))}
          </div>
          <div className="product-spotlight">
            <Image src="/images/smart.jpg" alt="Smart ceiling light product range" fill sizes="30vw" />
            <div className="spotlight-note">
              <Sparkles size={18} />
              <span>{t.multipleStyles}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section applications-section" id="applications">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">{t.applicationsLabel}</p>
              <h2>{t.applicationsTitle}</h2>
            </div>
            <p>{t.applicationsIntro}</p>
          </div>
          <div className="application-grid">
            {applications.map(({ icon: Icon, image }, index) => (
              <a className="application-card" href="#inquiry" key={t.applications[index]}>
                <Image src={image} alt={t.applications[index]} fill sizes="20vw" />
                <div className="application-overlay"><Icon /><span>{t.applications[index]}</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" id="about">
        <div className="container">
          <div className="section-heading centered narrow">
            <p className="section-label">{t.processLabel}</p>
            <h2>{t.processTitle}</h2>
            <p>{t.processIntro}</p>
          </div>
          <div className="process-grid">
            {process.map(({ icon: Icon }, index) => (
              <div className="process-step" key={t.process[index][0]}>
                <div className="process-number">{String(index + 1).padStart(2, "0")}</div>
                <Icon />
                <h3>{t.process[index][0]}</h3>
                <p>{t.process[index][1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section founder-section" id="resources">
        <div className="container founder-layout">
          <div className="founder-photo">
            <Image src="/images/founder-michael.jpg" alt="Michael, Growcean contact" fill sizes="35vw" />
          </div>
          <div className="founder-copy">
            <p className="section-label">{t.contactLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p className="quote">
              “My role is to help buyers clarify requirements, compare suitable lighting
              options and keep each export project moving with fewer communication gaps.”
            </p>
            <p>
              Michael supports international inquiries for Guangzhou Wortianlan Business
              Co., Ltd., with a focus on product sourcing, OEM coordination and project follow-up.
            </p>
            <a className="text-link" href="#inquiry">{t.talk} <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div>
            <p className="section-label">{t.faqLabel}</p>
            <h2>{t.faqTitle}</h2>
            <p>{t.faqIntro}</p>
            <a className="catalog-link" href="/Growcean-Product-Catalog.pdf" download>
              <PackageCheck size={20} /> {t.catalog}
            </a>
          </div>
          <FaqList locale={locale} />
        </div>
      </section>

      <section className="inquiry-section" id="inquiry">
        <div className="container inquiry-layout">
          <div className="inquiry-copy">
            <p className="section-label light">{t.inquiryLabel}</p>
            <h2>{t.inquiryTitle}</h2>
            <p>{t.inquiryIntro}</p>
            <div className="contact-list">
              <a href="https://wa.me/8615602224748"><MessageCircle /> WhatsApp: +86 156 0222 4748</a>
              <a href="mailto:mike@growcean.com"><Mail /> mike@growcean.com</a>
              <span>
                <MapPin />
                2nd Floor, Jinyue Building, No. 183 Nanzhou Road,
                Haizhu District, Guangzhou, Guangdong, China
              </span>
            </div>
            <div className="osm-map-card">
              <iframe
                title="Growcean office location on OpenStreetMap"
                src="https://www.openstreetmap.org/export/embed.html?bbox=113.275%2C23.045%2C113.305%2C23.075&layer=mapnik&marker=23.06%2C113.29"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="osm-map-caption">
                <div>
                  <strong>{t.office}</strong>
                  <span>23.06° N, 113.29° E</span>
                </div>
                <a
                  href="https://www.openstreetmap.org/?mlat=23.06&mlon=113.29#map=16/23.06/113.29"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.map}
                </a>
              </div>
            </div>
          </div>
          <InquiryForm locale={locale} />
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Image src="/images/growcean-logo.png" alt="Growcean" width={190} height={50} />
            <p>{t.footerText}</p>
            <SocialLinks />
          </div>
          <div><h3>Products</h3><a href="#products">LED Ceiling Lights</a><a href="#products">Flush Mount Lights</a><a href="#products">Smart Ceiling Lights</a></div>
          <div><h3>Solutions</h3><a href="#custom">OEM & Custom</a><a href="#applications">Applications</a><a href="/Growcean-Product-Catalog.pdf">Product Catalog</a></div>
          <div><h3>Company</h3><a href="#about">About Growcean</a><a href={localizedPath("/blog/how-to-choose-led-ceiling-lights-for-b2b-projects", locale)}>Buyer Guide</a><a href="#inquiry">Contact Us</a></div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Guangzhou Wortianlan Business Co., Ltd.</span>
          <span>Growcean · LIGHTING THE FUTURE.</span>
        </div>
      </footer>
    </main>
  );
}

export default function Home() {
  return <GrowceanHome locale="en" />;
}
