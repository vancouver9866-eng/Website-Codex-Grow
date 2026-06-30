"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  Building2,
  ChevronDown,
  CircleGauge,
  FileText,
  Globe2,
  Headphones,
  Hotel,
  House,
  Layers3,
  Lightbulb,
  PackageCheck,
  Palette,
  Ruler,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import { getTranslations, type Locale } from "@/lib/i18n";

type MenuKey = "products" | "custom" | "applications" | "resources" | "about";

const menuKeys: MenuKey[] = ["products", "custom", "applications", "resources", "about"];

const productLinks = [
  { title: "LED Lighting", text: "Manufacturer and supplier range for B2B buyers", image: "/images/ultra-thin.jpg", href: "/products/led-lighting" },
  { title: "Commercial Fixtures", text: "Ceiling and corridor fixtures for projects", image: "/images/flush-mount.jpg", href: "/products/commercial-lighting-fixtures" },
  { title: "Pendant & Decorative", text: "Visual fixture families for hospitality", image: "/images/modern.jpg", href: "/products/pendant-lights" },
  { title: "Outdoor & Waterproof", text: "Practical waterproof fixture sourcing", image: "/images/factory-optimized/growcean-balcony-lighting-application-768.webp", href: "/products/outdoor-wall-lights" },
];

const menuContent = {
  custom: {
    title: "Build a range for your market",
    text: "Coordinate specifications, sampling, branding and packaging through one clear project path.",
    links: [
      { icon: Ruler, title: "Product Customization", text: "Size, wattage, CCT and lighting controls", href: "/#custom" },
      { icon: Palette, title: "Private Label", text: "Logo, labels, manuals and packaging", href: "/#custom" },
      { icon: PackageCheck, title: "Samples & Follow-up", text: "Confirm details before the main order", href: "/#about" },
      { icon: Boxes, title: "Wholesale Programs", text: "Focused ranges for distributors and retailers", href: "/#products" },
    ],
  },
  applications: {
    title: "Choose lighting by project",
    text: "Start from the room, project type and buyer requirement instead of browsing an endless catalog.",
    links: [
      { icon: House, title: "Residential", text: "Home and apartment lighting", href: "/#applications" },
      { icon: Hotel, title: "Hotel Lighting", text: "Guest-room and public-area solutions", href: "/solutions/hotel-lighting" },
      { icon: CircleGauge, title: "Office", text: "Clean, comfortable workplace lighting", href: "/#applications" },
      { icon: ShoppingBag, title: "Restaurant & Retail", text: "Lighting for dining, stores and showrooms", href: "/solutions/restaurant-lighting" },
    ],
  },
  resources: {
    title: "Make sourcing decisions faster",
    text: "Use practical product information and direct communication to clarify your next project.",
    links: [
      { icon: FileText, title: "Product Catalog", text: "Download the current ceiling-light range", href: "/Growcean-Product-Catalog.pdf" },
      { icon: BookOpen, title: "B2B Buyer Guide", text: "How to choose LED ceiling lights", href: "/blog/how-to-choose-led-ceiling-lights-for-b2b-projects" },
      { icon: Lightbulb, title: "Selection Support", text: "Compare styles and suitable configurations", href: "/#inquiry" },
      { icon: Globe2, title: "Export Coordination", text: "Discuss destination and order requirements", href: "/#inquiry" },
    ],
  },
  about: {
    title: "A responsive partner for global buyers",
    text: "Growcean supports product sourcing, OEM coordination and export project follow-up from Guangzhou.",
    links: [
      { icon: Building2, title: "About Growcean", text: "Company positioning and service approach", href: "/#about" },
      { icon: Layers3, title: "How We Work", text: "A clear six-step buyer support process", href: "/#about" },
      { icon: Headphones, title: "Talk with Michael", text: "Direct communication for your project", href: "/#resources" },
      { icon: Sparkles, title: "Why Growcean", text: "Practical support without inflated claims", href: "/#about" },
    ],
  },
};

export function MegaNavigation({ locale = "en" }: { locale?: Locale }) {
  const [active, setActive] = useState<MenuKey | null>(null);
  const t = getTranslations(locale);

  function closeMenu() {
    setActive(null);
  }

  return (
    <div className="mega-nav-wrap">
      <nav className="desktop-nav" aria-label="Primary navigation">
        {menuKeys.map((key, index) => (
          <button
            className={active === key ? "active" : ""}
            key={key}
            aria-expanded={active === key}
            aria-controls="mega-menu-panel"
            onMouseEnter={() => setActive(key)}
            onFocus={() => setActive(key)}
            onClick={() => setActive(key)}
          >
            {t.nav[index]}
            <ChevronDown size={14} />
          </button>
        ))}
      </nav>

      {active ? (
        <div
          className="mega-panel"
          id="mega-menu-panel"
        >
          <div className="mega-panel-glow" aria-hidden="true" />
          <button className="mega-close" aria-label="Close menu" onClick={closeMenu}>
            <X size={17} />
          </button>
          {active === "products" ? (
            <div className="mega-products">
              <div className="mega-intro">
                <span>PRODUCT COLLECTIONS</span>
                <h2>Ceiling lights for wholesale and project needs</h2>
                <p>Compare focused product families, then ask us to confirm the right specifications for your market.</p>
                <a href="/#products" onClick={closeMenu}>View all products <ArrowUpRight size={16} /></a>
              </div>
              <div className="mega-product-grid">
                {productLinks.map((product) => (
                  <a href={product.href} className="mega-product" key={product.title} onClick={closeMenu}>
                    <div className="mega-product-image">
                      <Image src={product.image} alt={`${product.title} product collection`} fill sizes="170px" />
                    </div>
                    <div>
                      <h3>{product.title}</h3>
                      <p>{product.text}</p>
                    </div>
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="mega-standard">
              <div className="mega-intro">
                <span>{active === "custom" ? "OEM & ODM" : active.toUpperCase()}</span>
                <h2>{menuContent[active].title}</h2>
                <p>{menuContent[active].text}</p>
                <a href="/#inquiry" onClick={closeMenu}>Start a conversation <ArrowUpRight size={16} /></a>
              </div>
              <div className="mega-link-grid">
                {menuContent[active].links.map(({ icon: Icon, title, text, href }) => (
                  <a href={href} className="mega-link" key={title} onClick={closeMenu}>
                    <div className="mega-icon"><Icon size={20} /></div>
                    <div><h3>{title}</h3><p>{text}</p></div>
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </div>
          )}
          <div className="mega-footer">
            <span>Growcean · B2B ceiling lighting support</span>
            <a href="/#inquiry" onClick={closeMenu}>Get a tailored recommendation <ArrowUpRight size={14} /></a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
