export type MarketPage = {
  slug: string;
  targetKeywords: string[];
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  cta: string;
  internalLinks: string[];
  sections: Array<{ heading: string; paragraphs: string[] }>;
  faq: Array<{ q: string; a: string }>;
};

function createMarketPage({
  slug,
  primaryKeyword,
  secondaryKeyword,
  marketName,
  buyerRole,
  title,
  seoTitle,
}: {
  slug: string;
  primaryKeyword: string;
  secondaryKeyword?: string;
  marketName: string;
  buyerRole: "Importer" | "Supplier" | "Importer and Supplier";
  title: string;
  seoTitle: string;
}): MarketPage {
  const targetKeywords = secondaryKeyword ? [primaryKeyword, secondaryKeyword] : [primaryKeyword];
  const rolePhrase =
    buyerRole === "Importer and Supplier"
      ? "importers, wholesalers, distributors and project buyers"
      : buyerRole === "Importer"
        ? "importers, wholesalers and lighting distributors"
        : "supplier comparison, wholesale sourcing and project procurement teams";

  return {
    slug,
    targetKeywords,
    title,
    seoTitle,
    description: `Growcean supports global B2B buyers sourcing ${primaryKeyword}. Request a quote, catalog, or sample for ceiling lighting projects without unsupported claims.`,
    intro: `Growcean supports ${rolePhrase} evaluating ${primaryKeyword}${secondaryKeyword ? ` and ${secondaryKeyword}` : ""}. This market page helps buyers prepare product type, quantity, application, sample and customization details before contacting a ceiling lighting supplier.`,
    cta: "Contact Supplier",
    internalLinks: ["/products/", "/solutions/hotel-lighting/", "/solutions/apartment-lighting/", "/contact/"],
    sections: [
      {
        heading: "Ceiling Lighting Demand in This Market",
        paragraphs: [
          `${marketName} buyers may compare LED ceiling lights, flush mount ceiling lights, smart ceiling lights and decorative ceiling lamps for residential, hospitality, apartment, office and retail applications. The practical sourcing question is usually not only price, but whether a product range can match local sales channels, project requirements and installation expectations.`,
          `When evaluating ${primaryKeyword}, buyers should confirm the target customer type, preferred product style, wattage or size range, CCT expectations, control requirements and whether the order is for wholesale distribution, private-label sales or a project list.`,
        ],
      },
      {
        heading: "Products Suitable for Importers and Distributors",
        paragraphs: [
          "Growcean can discuss catalog-backed LED ceiling lights, slim flush mount lights, smart ceiling lights, dimmable options, corridor lights, waterproof ceiling lights and decorative ceiling lamps. Final suitability should be confirmed by model, application and order requirement.",
          "For importers and distributors, a balanced range may include entry-level ceiling lights, decorative models, smart-control options and project-oriented fixtures. For contractors or project buyers, room type, ceiling height, installation method and required visual style should be clarified before sample selection.",
        ],
      },
      {
        heading: "Ordering, Samples, and Project Support",
        paragraphs: [
          "Before bulk orders, buyers can request catalog review, quotation discussion and sample confirmation. Growcean does not publish unsupported fixed MOQ, price or delivery claims on this page because final terms depend on model, quantity, customization and packaging requirements.",
          "A useful inquiry should include target country, product category, estimated quantity, wattage or size preference, CCT, voltage expectation, application area, packaging needs and whether OEM or ODM discussion is required.",
        ],
      },
      {
        heading: "Questions to Confirm Before Sourcing",
        paragraphs: [
          "Ask whether the supplier can discuss the selected model, sample availability, packaging options, label requirements, mixed-model order planning, export communication and after-sales follow-up. These details help buyers compare suppliers beyond unit price.",
          "For hotel, apartment, office and retail projects, it is helpful to share drawings, room lists, application photos or a target lighting style. Growcean can then help shortlist suitable ceiling lighting options for quotation or sample discussion.",
        ],
      },
    ],
    faq: [
      {
        q: `What should I confirm before sourcing ${primaryKeyword}?`,
        a: "Confirm product category, quantity, target market, wattage or size range, CCT, voltage expectation, application area, packaging needs and whether OEM or ODM discussion is required.",
      },
      ...(secondaryKeyword
        ? [
            {
              q: `What should I confirm before sourcing ${secondaryKeyword}?`,
              a: "Use the same sourcing checklist and clarify whether the inquiry is for distribution, private-label range building, sample review or a specific project order.",
            },
          ]
        : []),
      {
        q: "Can Growcean support OEM or ODM ceiling light projects?",
        a: "Growcean can discuss OEM or ODM requirements by product model, order quantity, packaging need and project details. Final feasibility should be confirmed before quotation.",
      },
      {
        q: "Can I request samples before bulk orders?",
        a: "Yes. Buyers can discuss sample requirements before bulk orders so appearance, lighting effect, size, CCT, packaging and application fit can be reviewed.",
      },
      {
        q: "What information should I provide for a quotation?",
        a: "Share target country, product type, quantity, application, wattage or size requirements, CCT, voltage, packaging needs and any OEM or ODM request.",
      },
      {
        q: "Are these ceiling lights suitable for hotel, apartment, office, or retail projects?",
        a: "Many ceiling lighting categories can be discussed for these applications, but final model selection should be confirmed by room type, installation condition, design requirement and order details.",
      },
    ],
  };
}

export const marketPages: MarketPage[] = [
  createMarketPage({
    slug: "led-ceiling-light-manufacturer-importer-in-europe-led-lighting-supplier",
    primaryKeyword: "led ceiling light manufacturer importer in europe",
    marketName: "Europe",
    buyerRole: "Importer",
    title: "LED Ceiling Light Manufacturer Importer In Europe for Global B2B Buyers",
    seoTitle: "LED Ceiling Light Manufacturer Importer In Europe for B2B Projects | Growcean",
  }),
  createMarketPage({
    slug: "led-ceiling-light-manufacturer-supplier-in-europe-led-lighting-supplier",
    primaryKeyword: "led ceiling light manufacturer supplier in europe",
    marketName: "Europe",
    buyerRole: "Supplier",
    title: "LED Ceiling Light Manufacturer Supplier In Europe for Global B2B Buyers",
    seoTitle: "LED Ceiling Light Manufacturer Supplier In Europe for B2B Projects | Growcean",
  }),
  createMarketPage({
    slug: "malaysia-led-lighting-supplier",
    primaryKeyword: "led ceiling light manufacturer supplier in malaysia",
    secondaryKeyword: "led ceiling light manufacturer importer in malaysia",
    marketName: "Malaysia",
    buyerRole: "Importer and Supplier",
    title: "LED Ceiling Light Manufacturer Supplier In Malaysia for Global B2B Buyers",
    seoTitle: "LED Ceiling Light Manufacturer Supplier In Malaysia for B2B Projects | Growcean",
  }),
  createMarketPage({
    slug: "philippines-led-lighting-supplier",
    primaryKeyword: "led ceiling light manufacturer supplier in philippines",
    secondaryKeyword: "led ceiling light manufacturer importer in philippines",
    marketName: "Philippines",
    buyerRole: "Importer and Supplier",
    title: "LED Ceiling Light Manufacturer Supplier In Philippines for Global B2B Buyers",
    seoTitle: "LED Ceiling Light Manufacturer Supplier In Philippines for B2B Projects | Growcean",
  }),
];

export function getMarketPage(slug: string) {
  return marketPages.find((page) => page.slug === slug);
}
