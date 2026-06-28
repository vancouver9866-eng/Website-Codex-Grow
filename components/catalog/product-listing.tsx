"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { catalogCopy, type Product } from "@/lib/catalog";
import { CatalogProductCard } from "./product-card";

function unique(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).sort();
}

export function ProductListing({ products, locale }: { products: Product[]; locale: Locale }) {
  const copy = catalogCopy[locale];
  const [wattage, setWattage] = useState("");
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [space, setSpace] = useState("");

  const filters = useMemo(() => ({
    wattage: unique(products.flatMap((p) => p.size_options.map((o) => o.power))),
    size: unique(products.flatMap((p) => p.size)),
    material: unique(products.map((p) => p.material).filter(Boolean)),
    space: unique(products.flatMap((p) => p.size_options.map((o) => o.space))),
  }), [products]);

  const filtered = products.filter((product) => {
    return (!wattage || product.size_options.some((option) => option.power === wattage))
      && (!size || product.size.includes(size))
      && (!material || product.material === material)
      && (!space || product.size_options.some((option) => option.space === space));
  });

  return (
    <div className="catalog-listing">
      <aside className="catalog-filters" aria-label={copy.filters}>
        <h2>{copy.filters}</h2>
        <Filter label={copy.wattage} value={wattage} values={filters.wattage} onChange={setWattage} />
        <Filter label={copy.size} value={size} values={filters.size} onChange={setSize} />
        <Filter label={copy.material} value={material} values={filters.material} onChange={setMaterial} />
        <Filter label={copy.space} value={space} values={filters.space} onChange={setSpace} />
        <button className="catalog-reset" type="button" onClick={() => { setWattage(""); setSize(""); setMaterial(""); setSpace(""); }}>
          {copy.reset}
        </button>
      </aside>
      <div>
        <p className="catalog-count">{filtered.length} / {products.length} SKU</p>
        <div className="catalog-card-grid">
          {filtered.map((product) => <CatalogProductCard key={product.id} product={product} locale={locale} />)}
        </div>
      </div>
    </div>
  );
}

function Filter({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return (
    <label className="catalog-filter">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">All</option>
        {values.map((item) => <option value={item} key={item}>{item}</option>)}
      </select>
    </label>
  );
}
