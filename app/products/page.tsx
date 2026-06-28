import type { Metadata } from "next";
import { ProductsIndex } from "@/components/catalog/products-index";

export const metadata: Metadata = {
  title: "Growcean Product Catalog | Ceiling Lights Manufacturer",
  description: "Browse Growcean LED ceiling lights, corridor lights, waterproof lights, decorative lights and package sets from the full catalog.",
  alternates: {
    canonical: "/products",
    languages: {
      en: "/products",
      es: "/es/products",
      fr: "/fr/products",
      ar: "/ar/products",
      ru: "/ru/products",
      "x-default": "/products",
    },
  },
};

export default function ProductsPage() {
  return <ProductsIndex locale="en" />;
}
