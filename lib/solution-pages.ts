export type SolutionPage = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  lead: string;
  image: string;
  primaryKeyword: string;
  relatedKeywords: string[];
  buyerNeeds: string[];
  productMix: string[];
  process: string[];
  faqs: Array<{ q: string; a: string }>;
};

export const solutionPages: SolutionPage[] = [
  {
    slug: "apartment-lighting",
    title: "Apartment Lighting Solutions for B2B Projects",
    seoTitle: "Apartment Lighting Solutions for B2B Projects | Growcean",
    seoDescription:
      "Apartment lighting sourcing support for importers, wholesalers and project buyers. Compare LED ceiling lights, flush mount lights and decorative options.",
    eyebrow: "APARTMENT LIGHTING PROJECTS",
    lead:
      "Growcean helps apartment lighting buyers compare practical LED ceiling lights, flush mount ceiling lights, corridor lights and decorative ceiling lamps for residential projects, wholesale programs and private-label sourcing.",
    image: "/images/catalog-products-clean/page-001.jpg",
    primaryKeyword: "apartment lighting solutions",
    relatedKeywords: [
      "led ceiling lights for apartments",
      "flush mount ceiling lights for residential projects",
      "apartment ceiling light supplier",
      "commercial apartment lighting sourcing",
    ],
    buyerNeeds: [
      "Ceiling light models that match room size, ceiling height and apartment interior style",
      "Practical wattage, CCT and size confirmation before bulk ordering",
      "Options for bedrooms, living rooms, corridors and compact utility areas",
      "Clear communication for samples, packaging, labels and export quotation details",
    ],
    productMix: [
      "Slim LED ceiling lights for bedrooms and living rooms",
      "Flush mount ceiling lights for low-profile residential interiors",
      "Corridor lights for repeated hallway applications",
      "Decorative ceiling lamps for differentiated apartment collections",
    ],
    process: [
      "Share apartment room types, quantity, target style and market requirement",
      "Shortlist catalog models by size, wattage, CCT, shape and installation type",
      "Confirm samples for brightness, appearance, packaging and label details",
      "Prepare quotation discussion for wholesale, project or private-label orders",
    ],
    faqs: [
      {
        q: "Can Growcean support apartment lighting projects?",
        a: "Yes. Growcean can help B2B buyers compare ceiling lights, flush mount lights, corridor lights and decorative options for apartment projects or wholesale ranges.",
      },
      {
        q: "What should I send for an apartment lighting quote?",
        a: "Send room type, quantity, preferred style, wattage or room size, CCT, voltage, packaging needs and destination market.",
      },
      {
        q: "Are samples recommended for apartment lighting orders?",
        a: "Samples are recommended when buyers need to confirm brightness, size, finish, installation appearance or retail packaging before bulk order.",
      },
    ],
  },
  {
    slug: "hotel-lighting",
    title: "Hotel Lighting for Hospitality Projects",
    seoTitle: "Hotel Lighting for Hospitality Projects | Growcean",
    seoDescription:
      "Growcean shares practical B2B lighting guidance on hotel lighting for experience driven hospitality projects. Contact us for catalogs, samples, quotes, or project lighting discussions.",
    eyebrow: "HOTEL LIGHTING PROJECTS",
    lead:
      "Growcean supports international project buyers sourcing ceiling lighting for hotel rooms, corridors, lobby-adjacent spaces, apartment-style units and renovation projects. The goal is to help buyers prepare clear model, sample, packaging and quotation requirements without unsupported project claims.",
    image: "/images/catalog-products-clean/page-050.jpg",
    primaryKeyword: "hotel lighting for experience driven hospitality projects",
    relatedKeywords: [
      "hotel lighting for hospitality projects",
      "commercial lighting fixtures for hotels",
      "decorative lighting for hotel rooms",
      "led lighting supplier for hospitality projects",
    ],
    buyerNeeds: [
      "Ceiling lighting choices that support guest room comfort, corridor visibility and consistent renovation planning",
      "Product options for standard rooms, apartment-style units, corridors and lobby-adjacent spaces",
      "Clear wattage, size, CCT, finish and sample confirmation before bulk order discussion",
      "OEM or ODM packaging and label questions prepared before quotation",
    ],
    productMix: [
      "LED ceiling lights for guest rooms and apartment-style hotel units",
      "Corridor lights for repeated hallway and circulation spaces",
      "Decorative ceiling lamps for suites, lobbies, dining areas and showrooms",
      "Package sets when buyers need room-by-room lighting combinations",
    ],
    process: [
      "Share hotel area list, room quantity, target style and budget level",
      "Shortlist catalog models by application, size, wattage and visual finish",
      "Confirm samples for decorative effect, brightness and installation appearance",
      "Discuss OEM packaging, labels, manuals and order follow-up requirements",
    ],
    faqs: [
      {
        q: "What should buyers confirm about hotel lighting for experience driven hospitality projects?",
        a: "Buyers should confirm room type, installation area, preferred visual style, wattage or size expectation, CCT, voltage, quantity, sample needs, packaging requirements and project schedule.",
      },
      {
        q: "Can Growcean discuss OEM or ODM requirements?",
        a: "Yes. OEM or ODM requirements such as logo, packaging, labeling, manual, CCT, voltage or product range planning can be discussed by model, quantity and feasibility.",
      },
      {
        q: "Can I request a catalog or samples before bulk orders?",
        a: "Yes. Catalog review and sample confirmation are recommended when hotel buyers need to compare appearance, brightness, finish, installation effect or packaging details.",
      },
      {
        q: "What information is needed for a quotation?",
        a: "Share room list, quantity, application area, wattage or size, CCT, voltage, preferred style, packaging needs, target market and expected sample requirements.",
      },
      {
        q: "How should project buyers compare LED ceiling lighting options?",
        a: "Compare by application area, installation style, size, wattage, CCT, dimming or smart-control needs, sample appearance, packaging requirements and quotation terms.",
      },
    ],
  },
  {
    slug: "retail-lighting",
    title: "Retail Lighting Solutions for B2B Buyers",
    seoTitle: "Retail Lighting Solutions for B2B Buyers | Growcean",
    seoDescription:
      "Retail lighting sourcing support for showrooms, stores and distributor product ranges. Discuss LED ceiling lights, decorative fixtures, catalogs, samples and quotes.",
    eyebrow: "RETAIL LIGHTING PROJECTS",
    lead:
      "Growcean helps retail lighting buyers compare LED ceiling lights, decorative ceiling lamps, flush mount fixtures and commercial lighting options for stores, showrooms and wholesale product ranges.",
    image: "/images/factory-optimized/growcean-lighting-showroom-selection-wall-1200.webp",
    primaryKeyword: "retail lighting solutions",
    relatedKeywords: [
      "retail ceiling lighting supplier",
      "commercial lighting for retail spaces",
      "LED ceiling lights for showrooms",
      "decorative lighting for retail buyers",
    ],
    buyerNeeds: [
      "Lighting models that support product display, customer comfort and store atmosphere",
      "Ceiling light options for showrooms, retail chains, distributor displays and renovation projects",
      "Sample confirmation for visual effect, brightness, color appearance and fixture finish",
      "OEM packaging, labeling and catalog discussion for wholesale or private-label programs",
    ],
    productMix: [
      "LED ceiling lights for general retail illumination",
      "Flush mount ceiling lights for clean low-profile store interiors",
      "Decorative ceiling lamps for display areas and differentiated retail collections",
      "Smart or dimmable ceiling light options when control requirements are confirmed by model",
    ],
    process: [
      "Share retail space type, fixture quantity, ceiling height and target lighting style",
      "Compare catalog models by wattage, size, CCT, appearance and installation method",
      "Request samples when visual effect, finish or packaging needs confirmation",
      "Discuss quotation, OEM packaging, labels, manuals and export requirements",
    ],
    faqs: [
      {
        q: "Can Growcean support retail lighting projects?",
        a: "Yes. Growcean can help B2B buyers compare LED ceiling lights, flush mount lights and decorative ceiling lamps for retail spaces, showrooms and distributor product ranges.",
      },
      {
        q: "What should I send for a retail lighting quote?",
        a: "Send store type, application area, quantity, wattage or size expectation, CCT, voltage, preferred design style, packaging needs and destination market.",
      },
      {
        q: "Can I request catalog or samples first?",
        a: "Yes. Catalog review and samples are useful when buyers need to compare visual effect, brightness, finish, installation appearance or packaging details.",
      },
    ],
  },
  {
    slug: "restaurant-lighting",
    title: "Restaurant Lighting for Dining Areas, Bars and Commercial Interiors",
    seoTitle: "Restaurant Lighting Sourcing Support | Growcean",
    seoDescription:
      "Restaurant lighting sourcing support for dining areas, bars and commercial interiors. Compare decorative fixtures, LED ceiling lights and B2B quote options.",
    eyebrow: "RESTAURANT LIGHTING PROJECTS",
    lead:
      "Growcean helps restaurant lighting buyers compare decorative fixtures, LED ceiling lights and commercial fixture packages for dining areas, bars, hospitality venues and retail interiors.",
    image: "/images/factory-optimized/growcean-decorative-pendant-light-display-1200.webp",
    primaryKeyword: "chandelier manufacturer for restaurants",
    relatedKeywords: [
      "restaurant lighting manufacturer",
      "commercial lighting fixtures for restaurants",
      "decorative lighting supplier for dining areas",
      "pendant lights wholesale for restaurants",
    ],
    buyerNeeds: [
      "Warm, visually distinctive lighting that supports the restaurant atmosphere",
      "Practical model options for dining areas, counters, bars and service corridors",
      "Sample confirmation for finish, scale and light effect",
      "Stable B2B communication for quantity, packaging and shipping requirements",
    ],
    productMix: [
      "Decorative ceiling lamps for dining and feature areas",
      "LED ceiling lights for functional back-of-house or general lighting",
      "Corridor and compact fixtures for circulation spaces",
      "Custom packaging or private-label discussion for distributor programs",
    ],
    process: [
      "Share restaurant style, ceiling height, target atmosphere and fixture quantity",
      "Choose decorative and functional lighting models by room or zone",
      "Review samples for visual effect, material finish and brightness",
      "Confirm quotation, packaging, order timeline and export details",
    ],
    faqs: [
      {
        q: "Can Growcean provide lighting for restaurant projects?",
        a: "Yes. Growcean can support restaurant and hospitality buyers with decorative ceiling lamps, LED ceiling lights and related fixture options.",
      },
      {
        q: "Are pendant lights available for restaurant use?",
        a: "Growcean's catalog is strongest in ceiling and decorative fixtures. Pendant-style requirements can be discussed by design direction, quantity and sourcing feasibility.",
      },
      {
        q: "Should restaurants request samples first?",
        a: "Samples are recommended because restaurant lighting depends strongly on visual scale, finish and the actual light atmosphere.",
      },
    ],
  },
];

export function getSolutionPage(slug: string) {
  return solutionPages.find((page) => page.slug === slug);
}
