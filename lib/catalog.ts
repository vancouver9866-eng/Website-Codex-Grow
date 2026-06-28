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
  return `${product.name} | Growcean Lighting`;
}

export function productMetaDescription(product: Product, locale: Locale) {
  const tech = [product.ra, product.blue_light, product.wattage, product.style].filter(Boolean).join(" / ");
  const base = `${product.model} ${product.name}. ${tech}. OEM/ODM lighting supply from Growcean.`;
  if (locale === "es") return `${product.model} ${product.name}. ${tech}. Fabricación OEM/ODM y cotización por WhatsApp.`;
  if (locale === "fr") return `${product.model} ${product.name}. ${tech}. Fabrication OEM/ODM et demande de devis.`;
  if (locale === "ar") return `${product.model} ${product.name}. ${tech}. تصنيع OEM/ODM واستفسار عبر واتساب.`;
  if (locale === "ru") return `${product.model} ${product.name}. ${tech}. OEM/ODM поставка и запрос цены.`;
  return base;
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
