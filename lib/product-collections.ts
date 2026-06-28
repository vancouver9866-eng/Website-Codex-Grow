import { products, type Product } from "./catalog";

export type ProductCollection = {
  slug: string;
  title: string;
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
