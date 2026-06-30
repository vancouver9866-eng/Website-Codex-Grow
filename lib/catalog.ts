import catalog from "./catalog-products.json";
import { type Locale, locales } from "./i18n";

export type ProductOption = {
  size: string;
  power: string;
  space: string;
};

export type Product = {
  id: string;
  page: number;
  series: string;
  source_series_name: string;
  category: string;
  model: string;
  name: string;
  slug: string;
  wattage: string;
  size: string[];
  size_options: ProductOption[];
  material: string;
  space_range: string;
  features: string[];
  voltage: string;
  color_options: string[];
  style: string;
  ra: string;
  blue_light: string;
  warranty: string;
  certifications: string[];
  applications: string[];
  images: string[];
  catalog_pdf: string;
  raw_text: string;
};

export const products = catalog.products as Product[];

export const categoryDefinitions = [
  {
    slug: "ceiling-lights",
    name: "Ceiling Lights",
    description: "Core LED ceiling lights for residential and project buyers.",
  },
  {
    slug: "corridor-lights",
    name: "Corridor Lights",
    description: "Compact corridor, aisle and passage lights for circulation spaces.",
  },
  {
    slug: "waterproof-lights",
    name: "Waterproof Lights",
    description: "Waterproof and three-proof ceiling lights for practical applications.",
  },
  {
    slug: "decorative-lights",
    name: "Decorative Lights",
    description: "Vintage, cloud, star, moon, bamboo and iron art decorative ceiling lights.",
  },
  {
    slug: "package-sets",
    name: "Package Sets",
    description: "Whole-house lighting packages and matched product sets.",
  },
] as const;

export type CategorySlug = (typeof categoryDefinitions)[number]["slug"];

export type CategorySeoContent = {
  h1: string;
  intro: string[];
  applications: string[];
  customization: string[];
  faqs: Array<{ q: string; a: string }>;
  cta: string;
};

export const categorySeoContent: Record<CategorySlug, CategorySeoContent> = {
  "ceiling-lights": {
    h1: "Wholesale LED Ceiling Lights for B2B Projects",
    intro: [
      "Growcean supplies LED ceiling lights for importers, wholesalers, distributors and project buyers looking for reliable, customizable lighting products. Our ceiling light range covers slim designs, decorative finishes, multiple wattage options, CCT choices and packaging customization for different residential, hotel, apartment and commercial applications.",
      "For B2B sourcing teams, the buying decision is rarely about one single fixture. Buyers need a stable product range, clear specification confirmation, sample communication, packaging options and models that can match local market preferences. Growcean helps buyers compare ceiling light shapes, power options, materials, recommended room areas and visible finish details before quotation, so procurement teams can shortlist suitable products with fewer back-and-forth messages.",
      "Use this category to review ceiling lights for wholesale distribution, private-label programs, project supply and room-by-room lighting packages. Final wattage, size, CCT, dimming, smart control and packaging details should be confirmed by model, quantity and destination market before production.",
      "When planning a ceiling light order, buyers should share target room size, preferred shape, expected price level, packaging style and local sales channel. This helps Growcean recommend practical models instead of sending a generic catalog list. The goal is to support importers and distributors with clearer model selection, safer sample confirmation and product ranges that can be sold repeatedly in their own markets.",
    ],
    applications: ["Residential rooms", "Hotels", "Apartments", "Offices", "Showrooms", "Wholesale product ranges"],
    customization: ["Size and shape selection", "Wattage configuration by room area", "CCT requirement confirmation", "Dimming or smart-control options by model", "Logo, label, manual and packaging support", "Market-specific product range planning"],
    faqs: [
      { q: "What wattage options are available?", a: "Available wattage depends on the selected model and size. Many catalog ceiling light families include multiple wattage options, and Growcean can help match wattage to room area and market requirements." },
      { q: "Can you customize CCT, packaging or logo?", a: "Yes. CCT, logo, label, manual and packaging requirements can be discussed for OEM or private-label orders. Final feasibility is confirmed by model and quantity." },
      { q: "What is the MOQ for wholesale ceiling lights?", a: "MOQ is confirmed by product model, customization level and packaging requirements. Send your target model, quantity and market so the team can provide a practical quotation." },
      { q: "Are samples available before bulk orders?", a: "Sample availability is confirmed by model. For project or wholesale orders, samples help verify size, light effect, finish and packaging before bulk production." },
      { q: "Which ceiling lights are suitable for hotels or apartments?", a: "Slim ceiling lights, flush mount lights and decorative ceiling lamps are often used in hotels and apartments. The best option depends on room size, ceiling height, design style and target wattage." },
    ],
    cta: "Send us your target wattage, size, CCT, quantity, packaging requirement and destination market. Growcean will help you shortlist suitable LED ceiling light models for your wholesale or project order.",
  },
  "corridor-lights": {
    h1: "Corridor Lights for Wholesale and Project Lighting Buyers",
    intro: [
      "Growcean corridor lights are designed for B2B buyers sourcing compact lighting solutions for passages, aisles, hallways, apartments, hotels and commercial circulation spaces. The catalog includes multiple forms and finishes so buyers can compare output, size and installation appearance before requesting a quote.",
      "For distributors and project buyers, corridor lighting should be easy to specify, visually consistent and practical for repeat purchase. Growcean supports model selection, wattage confirmation and packaging discussion for wholesale ranges and project supply.",
      "Corridor projects often require stable visual continuity across many repeated spaces. Importers and contractors may need different lengths, shapes, light effects or color temperatures depending on whether the project is a hotel hallway, apartment corridor, office passage or residential aisle. Growcean helps buyers prepare a clearer request by confirming application area, quantity, wattage expectations, CCT requirements and packaging needs before quotation.",
      "For wholesale buyers, corridor lights can also work as a focused product line inside a larger ceiling lighting range. A practical sourcing plan should compare compact models, decorative models and simple surface-mounted options so local buyers can choose by room style and budget. Final product details, sample availability and MOQ should be confirmed by selected model and order plan.",
    ],
    applications: ["Hotel corridors", "Apartment hallways", "Office passages", "Residential aisles", "Commercial circulation areas"],
    customization: ["Length and shape selection", "Wattage confirmation", "CCT requirement", "Surface finish options by model", "Private-label packaging", "Project quantity planning"],
    faqs: [
      { q: "Can corridor lights be used in hotel projects?", a: "Yes. Corridor lights can be selected for hotels, apartments and commercial passages after confirming size, wattage and installation requirements." },
      { q: "Can I mix several corridor light models in one order?", a: "Model combinations can be discussed for project packages or wholesale ranges. Final MOQ and packing details are confirmed by order plan." },
      { q: "Do corridor lights support different CCT options?", a: "CCT availability depends on the model. Share your target color temperature and market requirements before quotation." },
      { q: "Are samples recommended?", a: "Samples are useful for checking brightness, finish and installation appearance before bulk orders." },
    ],
    cta: "Share the corridor length, target wattage, CCT, quantity and project type. Growcean will recommend suitable corridor light models for your order.",
  },
  "waterproof-lights": {
    h1: "Waterproof Ceiling Lights for Practical B2B Applications",
    intro: [
      "Growcean waterproof lights support buyers who need practical lighting products for humid or demanding application areas. These products are suitable for importers, distributors and project buyers comparing waterproof or three-proof ceiling light options for specific local market needs.",
      "Because waterproof requirements depend on the installation environment, each order should confirm product type, application area, expected protection level, wattage, size and packaging before quotation. Growcean helps buyers prepare these details clearly for sample and bulk-order discussion.",
      "Waterproof lighting procurement should avoid vague requests. A buyer should explain whether the product is intended for bathrooms, utility spaces, balconies, commercial wet areas or general practical lighting. Different environments may require different product structures and confirmation steps, so Growcean keeps the sourcing conversation focused on application, quantity, installation conditions and market expectations rather than unsupported claims.",
      "For distributors, waterproof lights can strengthen a catalog by covering use cases that standard decorative fixtures cannot address. For project buyers, the value is in matching the right model to the real environment and confirming packaging, sample and order details before production. Technical protection requirements should always be confirmed by model and project condition.",
    ],
    applications: ["Bathrooms", "Utility spaces", "Balconies", "Commercial wet areas", "Project lighting supply"],
    customization: ["Wattage and size confirmation", "Application-based model selection", "CCT requirement", "Packaging and label support", "Market documentation discussion"],
    faqs: [
      { q: "Where can waterproof ceiling lights be used?", a: "They can be considered for humid or practical application areas after confirming the model and installation environment." },
      { q: "Can Growcean confirm the suitable model for my project?", a: "Yes. Send the application area, quantity, target wattage and market requirements for model selection support." },
      { q: "Is packaging customization available?", a: "Private-label packaging can be discussed based on model and order quantity." },
      { q: "Should I request samples first?", a: "Samples are recommended when the application environment or market requirement is specific." },
    ],
    cta: "Tell us the application area, target wattage, size, quantity and market. Growcean will help confirm suitable waterproof lighting options.",
  },
  "decorative-lights": {
    h1: "Decorative Ceiling Lamps for Wholesale Lighting Ranges",
    intro: [
      "Growcean decorative ceiling lamps help importers, wholesalers and distributors build differentiated lighting ranges for homes, hotels, apartments, showrooms and retail programs. The category includes modern, vintage, cloud, star, moon, bamboo and iron art styles that can support market-specific product positioning.",
      "Decorative products require careful visual confirmation. Buyers should compare product shape, finish, room style, wattage, size and packaging expectations before sampling. Growcean supports private-label and project discussions without overstating technical details that must be confirmed by model.",
      "For B2B buyers, decorative ceiling lamps are often selected to create a clear retail story or project style instead of only meeting a basic lighting function. A distributor may need several shapes and finishes for different price points, while a hotel or apartment buyer may prefer a more consistent visual family. Growcean helps buyers review the catalog by style, application, visible finish and packaging requirement.",
      "Because decorative appearance can strongly affect customer acceptance, samples are especially useful before bulk orders. Buyers should share target market, preferred design direction, expected wattage, room type and whether OEM packaging is needed. Growcean can then help narrow the range and confirm which product options are practical for quotation and follow-up.",
    ],
    applications: ["Living rooms", "Bedrooms", "Children's rooms", "Hotels", "Apartments", "Showrooms"],
    customization: ["Visual style selection", "Color and finish confirmation", "Wattage and size planning", "CCT by model", "Logo and packaging discussion", "Range building for local markets"],
    faqs: [
      { q: "Can decorative lamps be used for private-label programs?", a: "Yes. Logo, label and packaging support can be discussed by model, quantity and market requirement." },
      { q: "Can I choose different shapes in one range?", a: "Yes, Growcean can help buyers build a range across modern, vintage, cloud, moon or other decorative styles." },
      { q: "Are product images enough for final confirmation?", a: "Images help shortlisting, but samples are recommended before bulk orders when finish and appearance are important." },
      { q: "Can decorative lamps be used in hotels?", a: "Many decorative ceiling lamps are suitable for hotel rooms or apartments after confirming size, brightness and design style." },
    ],
    cta: "Send your preferred style, target market, quantity, wattage and packaging requirements. Growcean will help build a decorative ceiling lamp range.",
  },
  "package-sets": {
    h1: "Ceiling Light Package Sets for Whole-House and Project Supply",
    intro: [
      "Growcean package sets are built for buyers who need matched ceiling lighting combinations for whole-house retail programs, apartment projects, hotel rooms or distributor product bundles. Package buying helps simplify model selection across living rooms, bedrooms, dining areas, corridors and other spaces.",
      "For B2B orders, package configuration should be confirmed by room type, preferred style, wattage, size, CCT, packaging and target market. Growcean supports product matching and export communication so buyers can prepare a clearer quotation request.",
      "Package sets are useful when a buyer wants to sell or install a coordinated lighting solution rather than individual models. Importers may use package sets for retail bundles, while project buyers may use them for repeated apartments, hotel rooms or whole-house supply. The key is to define each room, the desired light style, target brightness level and whether the package should include private-label packaging.",
      "Growcean can help organize a package plan by combining ceiling lights, corridor lights and decorative options where suitable. Final model selection, quantity, sample terms and packaging structure are confirmed after the buyer shares room requirements and market positioning. This reduces random model selection and makes quotation more useful for real procurement decisions.",
    ],
    applications: ["Whole-house lighting", "Apartment packages", "Hotel room packages", "Distributor bundles", "Retail product sets"],
    customization: ["Room-by-room model matching", "Package composition", "Wattage and CCT planning", "Private-label packaging", "Manual and label support"],
    faqs: [
      { q: "Can Growcean help build a whole-house lighting set?", a: "Yes. Share room types, target style, budget range and quantity so the team can suggest suitable combinations." },
      { q: "Can package sets include different product categories?", a: "Yes, package sets may combine ceiling lights, corridor lights and decorative models depending on project requirements." },
      { q: "Is OEM packaging available for package sets?", a: "Packaging customization can be discussed based on package structure, quantity and brand requirements." },
      { q: "Are package sets suitable for apartments or hotels?", a: "Yes. Package sets are useful when buyers need consistent lighting across repeated rooms or units." },
    ],
    cta: "Send your room list, target style, quantity, CCT and packaging requirements. Growcean will help plan a practical ceiling light package set.",
  },
};

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategory(slug: string) {
  return categoryDefinitions.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.category === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((item) => item.slug !== product.slug && (item.series === product.series || item.category === product.category))
    .slice(0, limit);
}

export function localizedPath(path: string, locale: Locale) {
  if (locale === "en") return path;
  return `/${locale}${path === "/" ? "" : path}`;
}

export function getLocaleFromParam(locale?: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : "en";
}

export function isRtl(locale: Locale) {
  return locale === "ar";
}

export const categoryNameByLocale: Record<Locale, Record<string, string>> = {
  en: {
    "ceiling-lights": "Ceiling Lights",
    "corridor-lights": "Corridor Lights",
    "waterproof-lights": "Waterproof Lights",
    "decorative-lights": "Decorative Lights",
    "package-sets": "Package Sets",
  },
  es: {
    "ceiling-lights": "Luces de techo",
    "corridor-lights": "Luces de pasillo",
    "waterproof-lights": "Luces impermeables",
    "decorative-lights": "Luces decorativas",
    "package-sets": "Paquetes completos",
  },
  fr: {
    "ceiling-lights": "Plafonniers",
    "corridor-lights": "Luminaires de couloir",
    "waterproof-lights": "Luminaires étanches",
    "decorative-lights": "Luminaires décoratifs",
    "package-sets": "Ensembles complets",
  },
  ar: {
    "ceiling-lights": "مصابيح سقف",
    "corridor-lights": "مصابيح ممرات",
    "waterproof-lights": "مصابيح مقاومة للماء",
    "decorative-lights": "مصابيح ديكورية",
    "package-sets": "مجموعات كاملة",
  },
  ru: {
    "ceiling-lights": "Потолочные светильники",
    "corridor-lights": "Светильники для коридоров",
    "waterproof-lights": "Влагозащищенные светильники",
    "decorative-lights": "Декоративные светильники",
    "package-sets": "Комплекты освещения",
  },
};

export const catalogCopy: Record<Locale, {
  products: string;
  categories: string;
  allProducts: string;
  filters: string;
  wattage: string;
  size: string;
  material: string;
  space: string;
  specs: string;
  features: string;
  applications: string;
  faq: string;
  related: string;
  quote: string;
  whatsapp: string;
  download: string;
  reset: string;
  viewProduct: string;
  blogLink: string;
}> = {
  en: {
    products: "Products",
    categories: "Product Categories",
    allProducts: "All catalog products",
    filters: "Filters",
    wattage: "Wattage",
    size: "Size",
    material: "Material",
    space: "Space",
    specs: "Specifications",
    features: "Features",
    applications: "Application scenes",
    faq: "FAQ",
    related: "Related products",
    quote: "Get quotation",
    whatsapp: "WhatsApp inquiry",
    download: "Download catalog PDF",
    reset: "Reset filters",
    viewProduct: "View product",
    blogLink: "How to choose ceiling lights",
  },
  es: {
    products: "Productos",
    categories: "Categorías",
    allProducts: "Todos los productos del catálogo",
    filters: "Filtros",
    wattage: "Potencia",
    size: "Tamaño",
    material: "Material",
    space: "Espacio",
    specs: "Especificaciones",
    features: "Características",
    applications: "Aplicaciones",
    faq: "Preguntas frecuentes",
    related: "Productos relacionados",
    quote: "Solicitar cotización",
    whatsapp: "Consulta por WhatsApp",
    download: "Descargar catálogo PDF",
    reset: "Restablecer filtros",
    viewProduct: "Ver producto",
    blogLink: "Cómo elegir luces de techo",
  },
  fr: {
    products: "Produits",
    categories: "Catégories",
    allProducts: "Tous les produits du catalogue",
    filters: "Filtres",
    wattage: "Puissance",
    size: "Taille",
    material: "Matériau",
    space: "Espace",
    specs: "Spécifications",
    features: "Caractéristiques",
    applications: "Applications",
    faq: "FAQ",
    related: "Produits associés",
    quote: "Demander un devis",
    whatsapp: "Demande WhatsApp",
    download: "Télécharger le catalogue PDF",
    reset: "Réinitialiser",
    viewProduct: "Voir le produit",
    blogLink: "Comment choisir des plafonniers",
  },
  ar: {
    products: "المنتجات",
    categories: "الفئات",
    allProducts: "كل منتجات الكتالوج",
    filters: "الفلاتر",
    wattage: "القدرة",
    size: "المقاس",
    material: "المادة",
    space: "المساحة",
    specs: "المواصفات",
    features: "الميزات",
    applications: "الاستخدامات",
    faq: "الأسئلة الشائعة",
    related: "منتجات ذات صلة",
    quote: "طلب عرض سعر",
    whatsapp: "استفسار واتساب",
    download: "تحميل الكتالوج",
    reset: "إعادة الضبط",
    viewProduct: "عرض المنتج",
    blogLink: "كيفية اختيار مصابيح السقف",
  },
  ru: {
    products: "Продукты",
    categories: "Категории",
    allProducts: "Все товары каталога",
    filters: "Фильтры",
    wattage: "Мощность",
    size: "Размер",
    material: "Материал",
    space: "Площадь",
    specs: "Характеристики",
    features: "Преимущества",
    applications: "Применение",
    faq: "FAQ",
    related: "Похожие товары",
    quote: "Получить расчет",
    whatsapp: "Запрос в WhatsApp",
    download: "Скачать каталог PDF",
    reset: "Сбросить фильтры",
    viewProduct: "Смотреть товар",
    blogLink: "Как выбрать потолочные светильники",
  },
};

export function productSeoTitle(product: Product, locale: Locale) {
  if (locale === "es") return `${product.name} | Iluminación Growcean`;
  if (locale === "fr") return `${product.name} | Éclairage Growcean`;
  if (locale === "ar") return `${product.name} | إضاءة Growcean`;
  if (locale === "ru") return `${product.name} | Освещение Growcean`;
  return `${product.name} LED Ceiling Light for Wholesale and Project Buyers | Growcean`;
}

export function productMetaDescription(product: Product, locale: Locale) {
  const tech = [product.ra, product.blue_light, product.wattage, product.style].filter(Boolean).join(" / ");
  const base = `${product.model} ${product.name}. ${tech}. OEM/ODM lighting supply from Growcean.`;
  if (locale === "es") return `${product.model} ${product.name}. ${tech}. Fabricación OEM/ODM y cotización por WhatsApp.`;
  if (locale === "fr") return `${product.model} ${product.name}. ${tech}. Fabrication OEM/ODM et demande de devis.`;
  if (locale === "ar") return `${product.model} ${product.name}. ${tech}. تصنيع OEM/ODM واستفسار عبر واتساب.`;
  if (locale === "ru") return `${product.model} ${product.name}. ${tech}. OEM/ODM поставка и запрос цены.`;
  return `${product.model} ${product.name} for B2B buyers. Compare wattage, size, material, application and customization options before requesting a Growcean quotation.`;
}

export function productLongDescription(product: Product, locale: Locale) {
  const name = product.name;
  const model = product.model;
  const specs = [
    product.ra ? `color rendering ${product.ra}` : "high color rendering",
    product.blue_light || "RG0 low blue light positioning",
    product.voltage,
    product.style,
  ].filter(Boolean).join(", ");
  if (locale === "es") {
    return `${name} (${model}) está diseñado para compradores B2B que necesitan una luminaria de techo moderna, estable y fácil de especificar para proyectos residenciales y comerciales. La información técnica del catálogo indica ${specs}. Su diseño ayuda a crear una iluminación cómoda para sala, dormitorio, comedor, estudio y pasillos, con opciones de tamaño y potencia que permiten adaptar la selección al área real del espacio. Growcean puede apoyar pedidos OEM/ODM, confirmación de muestras, embalaje de marca privada y comunicación de exportación para México, Chile, Perú, Colombia y España. Para proyectos con control inteligente, las versiones compatibles con control remoto, Mi Home, Tmall o XiaoAi se confirman según el modelo y la cantidad. El objetivo es reducir errores de compra: comparar especificaciones, revisar el acabado visible y solicitar una cotización clara antes de producir.`;
  }
  if (locale === "fr") {
    return `${name} (${model}) est conçu pour les acheteurs B2B recherchant un plafonnier moderne, confortable et facile à intégrer dans une gamme export. Les données du catalogue indiquent ${specs}. Les options de taille, puissance et surface couverte facilitent la sélection pour salon, chambre, salle à manger, bureau ou couloir. Growcean accompagne les projets OEM/ODM avec validation d’échantillons, emballage de marque privée et suivi export. Les versions avec télécommande, Mi Home, Tmall ou XiaoAi sont confirmées selon le modèle et la quantité.`;
  }
  if (locale === "ar") {
    return `${name} (${model}) مخصص للمشترين التجاريين الذين يحتاجون إلى مصباح سقف حديث ومريح وموثوق للمشاريع السكنية والتجارية. تشير بيانات الكتالوج إلى ${specs}. تساعد خيارات المقاس والقدرة والمساحة على اختيار المنتج المناسب لغرفة المعيشة وغرفة النوم وغرفة الطعام والمكتب والممرات. تدعم Growcean مشاريع OEM/ODM، العينات، التغليف بعلامة خاصة، ومتابعة التصدير. يتم تأكيد التحكم الذكي مثل Mi Home أو Tmall أو XiaoAi حسب الطراز والكمية.`;
  }
  if (locale === "ru") {
    return `${name} (${model}) создан для B2B-покупателей, которым нужен современный потолочный светильник с понятными характеристиками для жилых и коммерческих проектов. По данным каталога: ${specs}. Размеры, мощность и рекомендуемая площадь помогают подобрать модель для гостиной, спальни, столовой, кабинета или коридора. Growcean поддерживает OEM/ODM, образцы, упаковку под частную марку и экспортное сопровождение. Совместимость с Mi Home, Tmall, XiaoAi или пультом подтверждается по модели и объему заказа.`;
  }
  return `${name} (${model}) is built for B2B buyers who need a modern ceiling light with clear specifications and dependable export support. According to the catalog, this product offers ${specs}. The size, wattage and recommended coverage options make it easier to match the fixture to living rooms, bedrooms, dining rooms, studies and corridor spaces without guessing. Growcean supports OEM/ODM projects, sample confirmation, private-label packaging and export communication for distributors, importers and project buyers. Where smart control is listed, compatibility with remote control, Mi Home, Tmall or XiaoAi is confirmed by model and order configuration. The product page keeps the engineering data visible so your team can compare power, material, voltage, color options and application range before requesting a quotation.`;
}
