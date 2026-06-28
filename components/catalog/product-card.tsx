import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { catalogCopy, categoryNameByLocale, localizedPath, type Product } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";

export function CatalogProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const copy = catalogCopy[locale];

  return (
    <a className="catalog-card" href={localizedPath(`/product/${product.slug}`, locale)}>
      <div className="catalog-card-image">
        <Image src={product.images[0]} alt={`${product.model} ${product.name}`} fill sizes="(max-width: 700px) 90vw, 25vw" />
      </div>
      <div className="catalog-card-body">
        <span className="catalog-card-kicker">{categoryNameByLocale[locale][product.category] ?? product.series}</span>
        <h3>{product.name}</h3>
        <p>{product.model}</p>
        <dl>
          <div><dt>{copy.wattage}</dt><dd>{product.wattage || "By model"}</dd></div>
          <div><dt>{copy.space}</dt><dd>{product.space_range || "Project confirmation"}</dd></div>
        </dl>
        <span className="catalog-card-link">{copy.viewProduct} <ArrowRight size={15} /></span>
      </div>
    </a>
  );
}
