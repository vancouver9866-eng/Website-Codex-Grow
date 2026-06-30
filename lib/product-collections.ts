import { products, type Product } from "./catalog";

export type ProductCollection = {
  slug: string;
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  eyebrow: string;
  description: string;
  heroModel: string;
  productPages: number[];
  features: string[];
  applications: string[];
  faq: Array<{ q: string; a: string }>;
};

export const productCollections: ProductCollection[] = [
  {
    slug: "led-lighting",
    title: "LED Lighting Manufacturer",
    seoTitle: "LED Lighting Manufacturer and Supplier | Growcean",
    seoDescription:
      "Growcean supplies LED lighting for B2B projects, wholesale buyers and commercial spaces. Compare ceiling light ranges, OEM options and request a quote.",
    eyebrow: "LED LIGHTING MANUFACTURER",
    description:
      "LED lighting selections for importers, wholesalers, distributors and project buyers who need stable product ranges, OEM/ODM support and export-ready quotation communication. This collection focuses on ceiling light models that can support commercial projects, retail programs and private-label sourcing.",
    heroModel: "QS-XDD-2.7XB-080",
    productPages: [1, 2, 4, 7, 8, 9, 11, 12, 23, 27, 28, 29],
    features: ["Factory-direct LED ceiling light supply", "Multiple wattage, size and shape options", "OEM/ODM packaging and label support", "Model selection for wholesale and project buyers"],
    applications: ["Wholesale distribution", "Commercial interiors", "Apartments", "Hotels", "Retail lighting programs"],
    faq: [
      { q: "Is Growcean an LED lighting manufacturer or supplier?", a: "Growcean supports B2B LED lighting sourcing through selected manufacturing partners, catalog-backed model selection, OEM/ODM communication and export order follow-up." },
      { q: "Can LED lighting be customized for private-label orders?", a: "Logo, label, manual and packaging customization can be discussed by model, order quantity and market requirement." },
      { q: "Which LED lighting models should I request first?", a: "Share your target market, quantity, wattage, installation style and price level. Growcean can shortlist practical LED ceiling light models for sampling and quotation." },
    ],
  },
  {
    slug: "commercial-lighting-fixtures",
    title: "Commercial Lighting Fixtures",
    seoTitle: "Commercial Lighting Fixtures Manufacturer | Growcean",
    seoDescription:
      "Commercial lighting fixtures for project buyers, wholesalers and importers. Review Growcean ceiling lights, corridor lights and decorative fixtures before requesting a quote.",
    eyebrow: "COMMERCIAL LIGHTING FIXTURES",
    description:
      "Commercial lighting fixture options for hotels, apartments, offices, retail showrooms and distribution programs. This range helps buyers compare LED ceiling lights, corridor lights, decorative fixtures and practical package choices before submitting a clear project inquiry.",
    heroModel: "QS-XDD-XBCFG-092",
    productPages: [8, 9, 11, 12, 13, 15, 27, 28, 29, 30, 57, 84],
    features: ["Commercial-grade product range planning", "Ceiling, corridor and decorative fixture options", "Specification confirmation before quotation", "Wholesale and project order support"],
    applications: ["Hotels", "Apartments", "Offices", "Retail stores", "Commercial corridors", "Distributor product lines"],
    faq: [
      { q: "What commercial lighting fixtures can Growcean supply?", a: "Growcean can help buyers compare ceiling lights, corridor lights, waterproof lights, decorative fixtures and package sets from the catalog." },
      { q: "Can one inquiry include several fixture types?", a: "Yes. Project and wholesale buyers can share a room list or product range plan so Growcean can recommend practical model combinations." },
      { q: "Are these fixtures suitable for project procurement?", a: "They can be selected for commercial projects after confirming wattage, size, CCT, voltage, quantity and installation requirements by model." },
    ],
  },
  {
    slug: "pendant-lights",
    title: "Pendant Lights and Decorative Fixtures",
    seoTitle: "Pendant Lights Manufacturer and Wholesale Supplier | Growcean",
    seoDescription:
      "Pendant lights and decorative lighting fixtures for hospitality, retail and commercial interiors. Request Growcean catalog options and B2B quotation support.",
    eyebrow: "PENDANT & DECORATIVE LIGHTING",
    description:
      "Decorative lighting selections for buyers searching pendant-style, statement and visual fixture options for hospitality, retail and commercial interiors. The catalog is strongest in decorative ceiling lamps and can support buyers who need coordinated visual families, private-label packaging and project sourcing support.",
    heroModel: "QS-XDD-TWNGD-085",
    productPages: [24, 31, 32, 48, 49, 50, 51, 52, 53, 54, 55, 56],
    features: ["Decorative fixture families for visual differentiation", "Useful options for hotels, showrooms and retail collections", "Finish, size and packaging confirmation by model", "Private-label and wholesale range support"],
    applications: ["Hotels", "Restaurants", "Retail showrooms", "Apartments", "Decorative product collections"],
    faq: [
      { q: "Does Growcean supply pendant lights?", a: "Growcean's current catalog focuses on ceiling and decorative lighting. Pendant-style or decorative fixture needs can be discussed by target design, quantity and project requirement." },
      { q: "Can decorative lighting be used for hotel or restaurant projects?", a: "Yes, selected decorative fixtures can support hospitality interiors after confirming size, brightness, style and sample details." },
      { q: "Can I build a decorative lighting range for wholesale?", a: "Yes. Growcean can help buyers shortlist several visual families for private-label or distributor programs." },
    ],
  },
  {
    slug: "outdoor-wall-lights",
    title: "Outdoor Wall Lights and Waterproof Fixtures",
    seoTitle: "Outdoor Wall Lights Manufacturer | Growcean",
    seoDescription:
      "Outdoor wall lights and waterproof fixture sourcing support for B2B buyers. Discuss application, protection needs, quantity and quotation with Growcean.",
    eyebrow: "OUTDOOR & WATERPROOF FIXTURE SOURCING",
    description:
      "Waterproof and practical lighting options for buyers who search outdoor wall lights, balcony lights or damp-area fixtures. Growcean helps B2B buyers clarify the actual application environment, protection expectations, model feasibility and order requirements before quotation.",
    heroModel: "QS-XDD-FSYZ-029",
    productPages: [82, 86, 87, 88, 89, 85, 71, 73, 76, 77],
    features: ["Waterproof and practical fixture options", "Application-based model confirmation", "Balcony, damp-area and corridor use cases", "Packaging and documentation discussion by order"],
    applications: ["Balconies", "Bathrooms", "Utility spaces", "Commercial damp areas", "Outdoor-adjacent corridors"],
    faq: [
      { q: "Can Growcean support outdoor wall light inquiries?", a: "Growcean can discuss outdoor-adjacent and waterproof fixture needs, then confirm suitable catalog models or sourcing feasibility by application." },
      { q: "What information is needed for waterproof lighting?", a: "Share installation area, protection expectation, wattage, quantity, voltage, CCT and destination market before quotation." },
      { q: "Are samples recommended?", a: "Yes. Samples are useful when protection, brightness and installation environment matter." },
    ],
  },
  {
    slug: "chandeliers",
    title: "Chandelier Manufacturer for Hospitality Projects",
    seoTitle: "Chandelier Manufacturer for Hospitality Projects | Growcean",
    seoDescription:
      "Custom chandelier and decorative lighting sourcing for hotels, restaurants and commercial interiors. Discuss style, quantity, packaging and project quotation.",
    eyebrow: "HOSPITALITY DECORATIVE LIGHTING",
    description:
      "Decorative lighting support for buyers searching chandelier manufacturers for hotels, restaurants and commercial interiors. Growcean can help clarify style direction, catalog alternatives, sample needs, packaging expectations and order communication for hospitality lighting projects.",
    heroModel: "QS-XDD-SJXK-070",
    productPages: [31, 32, 48, 50, 52, 53, 54, 55, 56, 98, 99],
    features: ["Hospitality-oriented decorative fixture selection", "Hotel and restaurant visual style support", "Sample confirmation before bulk order", "OEM packaging and project communication"],
    applications: ["Hotel guest rooms", "Hotel public areas", "Restaurants", "Showrooms", "Commercial decorative interiors"],
    faq: [
      { q: "Can Growcean help with chandelier-style project lighting?", a: "Yes. Growcean can discuss chandelier-style and decorative fixture needs, then recommend catalog-backed options or confirm sourcing feasibility." },
      { q: "What should I send for a hotel chandelier inquiry?", a: "Send room type, target style, size expectation, quantity, finish preference, budget level and project timeline." },
      { q: "Can samples be reviewed before production?", a: "Sample review is recommended for decorative project lighting where finish, scale and visual effect matter." },
    ],
  },
  {
    slug: "flush-mount-lights",
    title: "Flush Mount Lights",
    eyebrow: "LOW-PROFILE CEILING LIGHTS",
    description:
      "Slim surface-mounted ceiling lights for clean interiors, apartment projects, retail programs and private-label distribution. Selected from Growcean catalog models with side-lighting, seamless and ultra-thin structures.",
    heroModel: "QS-XDD-XBCFG-092",
    productPages: [8, 57, 84, 1, 7],
    features: ["Low-profile surface-mounted structure", "Clean seamless ceiling appearance", "Multiple size and wattage options", "OEM finish and packaging support"],
    applications: ["Living room", "Bedroom", "Apartment", "Office", "Retail projects"],
    faq: [
      { q: "Are flush mount lights suitable for low ceilings?", a: "Yes. The selected catalog models are surface-mounted and low-profile, making them suitable for apartments, bedrooms and compact interiors." },
      { q: "Can voltage be customized?", a: "Catalog models are mainly listed as 220V. Wide-voltage or market-specific voltage should be confirmed before sampling." },
      { q: "Can Growcean support private-label packaging?", a: "Yes. Logo, label, manual and packaging support can be discussed by MOQ and model." },
    ],
  },
  {
    slug: "smart-ceiling-lights",
    title: "Smart Ceiling Lights",
    eyebrow: "APP / REMOTE / SCENE CONTROL",
    description:
      "Smart ceiling light selections with remote control, APP control, wall control, Mi Home, Tmall or XiaoAi configuration where listed in the catalog. Built for buyers who need adjustable lighting programs and differentiated retail offers.",
    heroModel: "QS-XDD-LG-050",
    productPages: [4, 1, 3, 5, 8, 9],
    features: ["Remote, APP or wall-control options", "Scene lighting and adjustable modes", "RG0 low blue light on listed models", "OEM/ODM control configuration support"],
    applications: ["Living room", "Bedroom", "Dining room", "Smart home retail", "Project showrooms"],
    faq: [
      { q: "Which smart platforms are supported?", a: "Catalog entries include remote control, APP, Mi Home, Tmall and XiaoAi on selected models. Final compatibility is confirmed by configuration." },
      { q: "Can smart control be customized for export markets?", a: "Yes. Control method, voltage and remote-control requirements should be confirmed before quotation." },
      { q: "Do smart models support dimming?", a: "Selected models include dimming or scene-control features. Confirm the exact function by SKU and order quantity." },
    ],
  },
  {
    slug: "modern-ceiling-lamps",
    title: "Modern Ceiling Lamps",
    eyebrow: "DECORATIVE MODERN SERIES",
    description:
      "Modern decorative ceiling lamps including cloud, star, moon, meteor, pumpkin, cookie, wave and sculptural ceiling-light families. Designed for homes, hotels, showrooms and regional retail collections.",
    heroModel: "QS-XDD-YDTY",
    productPages: [31, 32, 33, 34, 48, 50, 51, 52, 53, 54, 55, 56],
    features: ["Decorative visual forms for retail differentiation", "Multiple shapes for room-by-room matching", "Project and showroom friendly appearance", "Catalog-backed size and wattage references"],
    applications: ["Home", "Hotel", "Showroom", "Retail store", "Apartment"],
    faq: [
      { q: "Can modern ceiling lamps be used in hotel projects?", a: "Yes. Decorative forms are suitable for hotel rooms, apartments and showroom projects, subject to size and lighting-output confirmation." },
      { q: "Are different shapes available?", a: "Yes. The catalog includes cloud, star, moon, wave, pumpkin, cookie and other decorative forms." },
      { q: "Can finishes be customized?", a: "Finish customization depends on SKU, MOQ and production feasibility." },
    ],
  },
  {
    slug: "vintage-wood-styles",
    title: "Vintage & Wood Styles",
    eyebrow: "WARM FINISH DECORATIVE LIGHTING",
    description:
      "Vintage, walnut, bamboo shadow, solid wood and medieval-style ceiling lights for warmer interiors and distinctive regional collections. These products support differentiated retail programs and private-label sourcing.",
    heroModel: "QS-XDD-GLQD-HTM-XBCFG-092",
    productPages: [5, 6, 10, 19, 20, 21, 25, 26, 35, 36, 38, 39, 41],
    features: ["Warm walnut and wood-style finishes", "Vintage and medieval decorative language", "Private-label retail collection support", "High-CRI and RG0 features on selected models"],
    applications: ["Bedroom", "Dining room", "Boutique hotel", "Warm home interiors", "Retail collections"],
    faq: [
      { q: "Are walnut or wood finishes available?", a: "Yes. The catalog includes walnut-colored, bamboo shadow, solid wood and vintage-style models." },
      { q: "Are these models suitable for private-label retail?", a: "Yes. They are useful for regional retail differentiation and private-label packaging programs." },
      { q: "Can the color tone be adjusted?", a: "Color and finish changes should be confirmed by SKU, sample review and order quantity." },
    ],
  },
];

export function getProductCollection(slug: string) {
  return productCollections.find((collection) => collection.slug === slug);
}

export function getCollectionProducts(collection: ProductCollection): Product[] {
  const byPage = collection.productPages
    .map((page) => products.find((product) => product.page === page))
    .filter(Boolean) as Product[];
  return byPage.length ? byPage : products.filter((product) => product.category === "decorative-lights").slice(0, 8);
}

export function getCollectionHeroProduct(collection: ProductCollection) {
  return products.find((product) => product.model === collection.heroModel) ?? getCollectionProducts(collection)[0];
}
