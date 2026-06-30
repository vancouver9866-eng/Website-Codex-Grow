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
    slug: "hotel-lighting",
    title: "Hotel Lighting Solutions from Guest Rooms to Public Areas",
    seoTitle: "Hotel Lighting Manufacturer for Hospitality Projects | Growcean",
    seoDescription:
      "Hotel lighting solutions for hospitality projects. Growcean helps buyers source LED ceiling lights, decorative fixtures and room lighting packages.",
    eyebrow: "HOTEL LIGHTING PROJECTS",
    lead:
      "Growcean supports hotel lighting buyers who need practical model selection, decorative consistency, OEM packaging discussion and export follow-up for guest rooms, corridors, apartments and hospitality public areas.",
    image: "/images/catalog-products-clean/page-050.jpg",
    primaryKeyword: "chandelier manufacturer for hotels",
    relatedKeywords: [
      "hotel lighting manufacturer",
      "commercial lighting fixtures for hotels",
      "decorative lighting for hotel rooms",
      "led lighting supplier for hospitality projects",
    ],
    buyerNeeds: [
      "A coordinated product range for guest rooms, corridors and public spaces",
      "Decorative ceiling lamps or chandelier-style fixtures that match the interior design direction",
      "Clear wattage, size, CCT and sample confirmation before bulk production",
      "Responsive communication for project timelines, packaging and export documentation",
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
        q: "Can Growcean support hotel lighting projects?",
        a: "Yes. Growcean can help hotel and hospitality buyers shortlist ceiling lights, corridor lights and decorative fixtures from the catalog, then confirm samples, quotation details and export follow-up.",
      },
      {
        q: "What information should I send for a hotel lighting quote?",
        a: "Send the room list, quantity, preferred style, wattage or brightness expectation, CCT, voltage, installation area and project timeline.",
      },
      {
        q: "Can decorative fixtures be matched across a hotel project?",
        a: "Growcean can help build a consistent visual direction by selecting related decorative ceiling lamps or chandelier-style alternatives from the catalog.",
      },
    ],
  },
  {
    slug: "restaurant-lighting",
    title: "Restaurant Lighting for Dining Areas, Bars and Commercial Interiors",
    seoTitle: "Restaurant Lighting Manufacturer and Supplier | Growcean",
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
