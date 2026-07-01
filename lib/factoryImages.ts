import type { Locale } from "./i18n";

export type FactoryImageGroup = "production" | "quality" | "packaging" | "workshop" | "showroom";

export type FactoryImage = {
  id: string;
  group: FactoryImageGroup;
  src: string;
  alt: string;
  caption: string;
  description: string;
  width: number;
  height: number;
};

const image = (id: string, group: FactoryImageGroup, base: string, alt: string, caption: string, description: string, width = 1200, height = 900): FactoryImage => ({
  id,
  group,
  src: `/images/factory-optimized/${base}-1200.webp`,
  alt,
  caption,
  description,
  width,
  height,
});

export const factoryImages: FactoryImage[] = [
  image("export-packaging", "packaging", "growcean-lighting-export-packaging", "Export cartons prepared for Growcean Lighting B2B lighting orders", "Packaging", "Export packaging prepared for international B2B orders.", 1200, 1600),
  image("shipment-loading", "packaging", "growcean-lighting-shipment-loading", "Lighting cartons loaded for export shipment preparation", "Warehouse", "Organized storage and shipment preparation for global delivery.", 1600, 1200),
  image("qc-inspection", "quality", "growcean-lighting-qc-inspection", "LED ceiling light powered on during quality inspection", "Quality Inspection", "Visual inspection, lighting test, and pre-shipment checking before delivery.", 1200, 900),
  image("assembly-check", "production", "growcean-led-ceiling-light-assembly-check", "Lighting product assembly and light-on checking process", "Production Line", "Lighting products assembled under structured production processes.", 1200, 900),
  image("application-display", "showroom", "growcean-lighting-application-display", "Growcean lighting product displayed in an interior application scene", "Showroom", "Product samples and lighting designs for buyer selection.", 1200, 860),
  image("decorative-showroom", "showroom", "growcean-decorative-lighting-showroom", "Decorative lighting showroom scene for buyer selection", "Showroom", "Product samples and lighting designs for buyer selection.", 1200, 856),
  image("balcony-application", "showroom", "growcean-balcony-lighting-application", "Decorative lighting installed in balcony application scene", "Showroom", "Product samples and lighting designs for buyer selection.", 900, 1192),
  image("pendant-display", "showroom", "growcean-decorative-pendant-light-display", "Decorative pendant lighting product display", "Showroom", "Product samples and lighting designs for buyer selection.", 1200, 1066),
  image("showroom-wall", "showroom", "growcean-lighting-showroom-wall", "Wall display of ceiling light samples in partner showroom", "Showroom", "Product samples and lighting designs for buyer selection.", 1200, 900),
  image("product-display", "showroom", "growcean-ceiling-light-product-display", "Ceiling light product display wall for buyer comparison", "Showroom", "Product samples and lighting designs for buyer selection.", 1200, 900),
  image("sample-showroom", "showroom", "growcean-lighting-sample-showroom", "Lighting sample showroom with ceiling lamp display wall", "Showroom", "Product samples and lighting designs for buyer selection.", 1200, 900),
];

export const homepageFactoryImages = [
  factoryImages.find((item) => item.id === "assembly-check")!,
  factoryImages.find((item) => item.id === "export-packaging")!,
  factoryImages.find((item) => item.id === "shipment-loading")!,
];

export const factoryGroups: Array<{ key: FactoryImageGroup; label: string }> = [
  { key: "production", label: "Production" },
  { key: "quality", label: "Quality Control" },
  { key: "packaging", label: "Packaging & Shipment" },
  { key: "workshop", label: "Factory / Workshop" },
  { key: "showroom", label: "Showroom / Product Display" },
];

export const trustCopy: Record<Locale, {
  label: string;
  title: string;
  subtitle: string;
  factoryTour: string;
  qualityControl: string;
  manufacturingPartners: string;
  preShipmentInspection: string;
  exportPackaging: string;
  quote: string;
  whatsapp: string;
}> = {
  en: {
    label: "SUPPLY CHAIN TRUST",
    title: "Reliable Lighting Supply, Built on Controlled Quality",
    subtitle: "Growcean Lighting works with selected manufacturing partners and follows a structured quality control process to deliver export-ready lighting solutions for global buyers.",
    factoryTour: "Factory Tour",
    qualityControl: "Quality Control",
    manufacturingPartners: "Manufacturing Partners",
    preShipmentInspection: "Pre-Shipment Inspection",
    exportPackaging: "Export Packaging",
    quote: "Request a Quote",
    whatsapp: "Contact via WhatsApp",
  },
  es: {
    label: "CONFIANZA EN SUMINISTRO",
    title: "Suministro de iluminación confiable con calidad controlada",
    subtitle: "Growcean Lighting trabaja con socios de fabricación seleccionados y sigue un proceso estructurado de control de calidad para entregar soluciones de iluminación listas para exportación.",
    factoryTour: "Recorrido de fábrica",
    qualityControl: "Control de calidad",
    manufacturingPartners: "Socios de fabricación",
    preShipmentInspection: "Inspección antes del envío",
    exportPackaging: "Embalaje para exportación",
    quote: "Solicitar cotización",
    whatsapp: "Contactar por WhatsApp",
  },
  fr: {
    label: "CONFIANCE SUPPLY CHAIN",
    title: "Un approvisionnement fiable, basé sur une qualité contrôlée",
    subtitle: "Growcean Lighting travaille avec des partenaires de fabrication sélectionnés et suit un processus structuré de contrôle qualité pour livrer des solutions d’éclairage prêtes à l’export.",
    factoryTour: "Visite de l’usine",
    qualityControl: "Contrôle qualité",
    manufacturingPartners: "Partenaires de fabrication",
    preShipmentInspection: "Inspection avant expédition",
    exportPackaging: "Emballage export",
    quote: "Demander un devis",
    whatsapp: "Contacter via WhatsApp",
  },
  ar: {
    label: "الثقة في سلسلة التوريد",
    title: "توريد إضاءة موثوق قائم على جودة مضبوطة",
    subtitle: "تعمل Growcean Lighting مع شركاء تصنيع مختارين وتتبع عملية منظمة لمراقبة الجودة لتقديم حلول إضاءة جاهزة للتصدير للمشترين العالميين.",
    factoryTour: "جولة في المصنع",
    qualityControl: "مراقبة الجودة",
    manufacturingPartners: "شركاء التصنيع",
    preShipmentInspection: "الفحص قبل الشحن",
    exportPackaging: "تغليف التصدير",
    quote: "طلب عرض سعر",
    whatsapp: "تواصل عبر واتساب",
  },
  ru: {
    label: "ДОВЕРИЕ К ПОСТАВКАМ",
    title: "Надежные поставки освещения с контролируемым качеством",
    subtitle: "Growcean Lighting работает с выбранными производственными партнерами и использует структурированный процесс контроля качества для экспортных поставок.",
    factoryTour: "Тур по фабрике",
    qualityControl: "Контроль качества",
    manufacturingPartners: "Производственные партнеры",
    preShipmentInspection: "Предотгрузочная инспекция",
    exportPackaging: "Экспортная упаковка",
    quote: "Запросить цену",
    whatsapp: "Связаться в WhatsApp",
  },
};
