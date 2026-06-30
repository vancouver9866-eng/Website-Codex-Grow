import type { MetadataRoute } from "next";
import { categoryDefinitions, localizedPath, products } from "@/lib/catalog";
import { locales, type Locale } from "@/lib/i18n";
import { productCollections } from "@/lib/product-collections";

const siteUrl = "https://growcean.com";

function absolute(path: string) {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

function alternatesFor(path: string) {
  return {
    languages: Object.fromEntries([
      ...locales.map((locale) => [locale, absolute(localizedPath(path, locale as Locale))]),
      ["x-default", absolute(path)],
    ]),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths = [
    "/",
    "/about",
    "/factory-tour",
    "/quality-control",
    "/products",
    "/blog/how-to-choose-ceiling-lights",
    "/blog/how-to-choose-led-ceiling-lights-for-b2b-projects",
    ...productCollections.map((collection) => `/products/${collection.slug}`),
    ...categoryDefinitions.map((category) => `/category/${category.slug}`),
    ...products.map((product) => `/product/${product.slug}`),
  ];

  return staticPaths.flatMap((path) =>
    locales.map((locale) => {
      const localized = localizedPath(path, locale as Locale);
      return {
        url: absolute(localized),
        lastModified,
        changeFrequency: path.startsWith("/product/") ? "monthly" : "weekly",
        priority: path === "/" ? 1 : path.startsWith("/product/") ? 0.72 : 0.85,
        alternates: alternatesFor(path),
      } satisfies MetadataRoute.Sitemap[number];
    })
  );
}
