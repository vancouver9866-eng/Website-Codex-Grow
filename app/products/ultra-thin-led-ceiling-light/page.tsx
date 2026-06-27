import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Box,
  CheckCircle2,
  Eye,
  Gauge,
  House,
  Layers3,
  Lightbulb,
  PackageCheck,
  Palette,
  Ruler,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  SunMedium,
  Zap,
} from "lucide-react";
import { MegaNavigation } from "@/components/mega-navigation";
import { MobileMenu } from "@/components/mobile-menu";
import { ProductConfigurator } from "@/components/product-configurator";
import { ProductFaq } from "@/components/product-faq";
import { ProductInquiryForm } from "@/components/product-inquiry-form";
import { SocialLinks } from "@/components/social-links";

export const metadata: Metadata = {
  title: "2.7cm Ultra-Thin LED Ceiling Light | Growcean",
  description: "Explore Growcean model QS-XDD-2.7XB-GLQD-090 with multiple sizes, Ra ≥ 98.5, RG0 low blue light and OEM customization support.",
  alternates: {
    canonical: "/products/ultra-thin-led-ceiling-light",
  },
};

const specifications = [
  ["110 × 60 × 2.7cm", "126W", "18–25㎡"],
  ["90 × 50 × 2.7cm", "96W", "15–20㎡"],
  ["60 × 60 × 2.7cm", "72W", "12–16㎡"],
  ["50 × 50 × 2.7cm", "64W", "8–13㎡"],
  ["Ø40 × 2.7cm", "36W", "6–10㎡"],
  ["Ø50 × 2.7cm", "48W", "8–12㎡"],
  ["Ø60 × 2.7cm", "58W", "10–15㎡"],
];

export default function UltraThinProductPage() {
  return (
    <main className="product-page">
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="/" aria-label="Growcean home"><Image src="/images/growcean-logo.png" alt="Growcean" width={190} height={50} priority /></a>
          <MegaNavigation />
          <a className="button button-small desktop-cta" href="#product-inquiry">Get a Quote</a>
          <MobileMenu />
        </div>
      </header>

      <div className="container pd-breadcrumb"><a href="/">Home</a><span>/</span><a href="/#products">Ceiling Lights</a><span>/</span><strong>Ultra-Thin Ceiling Lights</strong></div>
      <section className="container pd-hero"><ProductConfigurator /></section>

      <nav className="pd-anchor"><div className="container">{["Overview","Specifications","Customization","Applications","FAQ"].map((item)=><a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div></nav>

      <section className="pd-story" id="overview">
        <div className="container pd-story-grid">
          <div className="pd-story-image"><Image src="/images/product-ultra-thin/application.jpg" alt="Ultra-thin ceiling light application" fill sizes="55vw" /></div>
          <div className="pd-story-copy"><p className="section-label">PRODUCT OVERVIEW</p><h2>Designed to disappear into the ceiling, built to improve the light</h2><p>The 2.7cm profile keeps interiors visually clean while the high color-rendering configuration supports comfortable everyday spaces.</p>
            <div className="pd-benefits">
              <Benefit icon={Layers3} title="2.7cm Ultra-Thin" text="A low-profile form for modern residential interiors." />
              <Benefit icon={Sparkles} title="Ra ≥ 98.5" text="High color rendering as listed for this catalog model." />
              <Benefit icon={Eye} title="RG0 Low Blue Light" text="Eye-care positioning with flicker-free driver design." />
              <Benefit icon={ShieldCheck} title="Isolated Driver" text="New upgraded isolated driving power supply." />
            </div>
          </div>
        </div>
      </section>

      <section className="section pd-spec-section" id="specifications">
        <div className="container pd-spec-grid">
          <div><p className="section-label">SPECIFICATIONS</p><h2>Choose the size by room and project requirement</h2><p>Power and recommended room size below are transcribed from the supplied product catalog.</p>
            <dl className="pd-core-specs"><div><dt>Material</dt><dd>Iron + aluminum + rhombic crystal plate</dd></div><div><dt>CRI</dt><dd>Ra ≥ 98.5</dd></div><div><dt>Voltage</dt><dd>220V; customization subject to confirmation</dd></div><div><dt>Finish</dt><dd>White; custom options by order</dd></div></dl>
          </div>
          <div className="pd-table-wrap"><table><thead><tr><th>Size</th><th>Power</th><th>Recommended area</th></tr></thead><tbody>{specifications.map(row=><tr key={row[0]}>{row.map(cell=><td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="section pd-custom" id="customization">
        <div className="container"><div className="section-heading"><div><p className="section-label">OEM & ODM</p><h2>Configure a ceiling-light range for your market</h2></div><p>Customization is discussed against target market, quantity and model feasibility.</p></div>
          <div className="pd-custom-grid">
            <Custom icon={Ruler} title="Size & Shape" text="Select standard catalog dimensions or discuss project requirements." />
            <Custom icon={Zap} title="Wattage" text="Match power to size, room area and buyer expectations." />
            <Custom icon={SunMedium} title="CCT" text="Discuss warm, neutral or cool-white configurations." />
            <Custom icon={SlidersHorizontal} title="Control" text="Standard, three-color or customized control options." />
            <Custom icon={Palette} title="Finish & Brand" text="Confirm finish, logo, label and instruction artwork." />
            <Custom icon={Box} title="Packaging" text="Coordinate private-label box and export packing requirements." />
          </div>
        </div>
      </section>

      <section className="section pd-applications" id="applications">
        <div className="container pd-app-grid">
          <div><p className="section-label">APPLICATIONS</p><h2>One product family, multiple interior formats</h2><p>Use rectangular models for larger shared spaces and compact square or round models for bedrooms, studies and smaller rooms.</p><a className="text-link" href="#product-inquiry">Discuss your application <ArrowRight size={17} /></a></div>
          {[["Living Room",House,"18–25㎡ options"],["Dining Room",Lightbulb,"Clean high-CRI lighting"],["Bedroom",SunMedium,"Compact round and square sizes"],["Study",Gauge,"Comfort-focused everyday light"]].map(([title,Icon,text])=><div className="pd-app-card" key={String(title)}><Icon size={25}/><h3>{String(title)}</h3><p>{String(text)}</p></div>)}
        </div>
      </section>

      <section className="section pd-process">
        <div className="container"><div className="section-heading centered narrow"><p className="section-label">ORDER PATH</p><h2>Confirm the important details before production</h2><p>A practical process for samples, specifications and export follow-up.</p></div>
          <div className="pd-process-grid">{[["01","Requirement review",Lightbulb],["02","Specification confirmation",CheckCircle2],["03","Sample review",PackageCheck],["04","Order follow-up",Gauge],["05","Packing & export",Box]].map(([n,t,Icon])=><div key={String(n)}><span>{String(n)}</span><Icon/><h3>{String(t)}</h3></div>)}</div>
        </div>
      </section>

      <section className="section pd-faq-section" id="faq"><div className="container pd-faq-grid"><div><p className="section-label">BUYER FAQ</p><h2>Questions to confirm before requesting a quote</h2><p>Final commercial and technical details depend on size, configuration, quantity and destination market.</p></div><ProductFaq /></div></section>

      <section className="section pd-related"><div className="container"><div className="section-heading"><div><p className="section-label">RELATED PRODUCTS</p><h2>Compare other Growcean collections</h2></div><a className="text-link" href="/#products">View product range <ArrowRight size={17}/></a></div>
        <div className="pd-related-grid">{[["Smart Ceiling Light","/images/smart.jpg"],["Modern Decorative Light","/images/modern.jpg"],["Vintage Wood-Finish Light","/images/vintage.jpg"]].map(([name,src])=><a href="#product-inquiry" key={name}><div><Image src={src} alt={name} fill loading="eager" sizes="33vw"/></div><h3>{name}</h3><span>Request details <ArrowRight size={14}/></span></a>)}</div>
      </div></section>

      <section className="pd-inquiry" id="product-inquiry"><div className="container pd-inquiry-grid"><div><p className="section-label light">MODEL QS-XDD-2.7XB-GLQD-090</p><h2>Request pricing, MOQ and sample terms</h2><p>Share your market and expected quantity. We will confirm suitable specifications and available customization.</p><ul><li><CheckCircle2/>Product-specific response</li><li><CheckCircle2/>Specification confirmation</li><li><CheckCircle2/>Sample and packaging discussion</li></ul></div><ProductInquiryForm /></div></section>

      <footer className="footer">
        <div className="container pd-footer-social">
          <div><strong>Connect with Growcean</strong><span>Product updates and international lighting insights</span></div>
          <SocialLinks />
        </div>
        <div className="container footer-bottom"><span>© 2026 Guangzhou Wortianlan Business Co., Ltd.</span><a href="/">Back to Growcean homepage</a></div>
      </footer>
    </main>
  );
}

function Benefit({icon:Icon,title,text}:{icon:typeof Layers3;title:string;text:string}) { return <div><Icon/><h3>{title}</h3><p>{text}</p></div>; }
function Custom({icon:Icon,title,text}:{icon:typeof Layers3;title:string;text:string}) { return <div className="pd-custom-card"><Icon/><h3>{title}</h3><p>{text}</p></div>; }
