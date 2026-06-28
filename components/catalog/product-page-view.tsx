import { notFound } from "next/navigation";
import { ProductDetail, productFaq } from "@/components/catalog/product-detail";
import { getProduct, getRelatedProducts, localizedPath, productMetaDescription } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";

export function ProductPageView({ slug, locale }: { slug: string; locale: Locale }) {
  const product = getProduct(slug);
  if (!product) notFound();
  const faqs = productFaq(product, locale);
  const related = getRelatedProducts(product, 6);
  const url = `https://growcean.com${localizedPath(`/product/${product.slug}`, locale)}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      sku: product.model,
      brand: { "@type": "Brand", name: "Growcean" },
      image: product.images.map((image) => `https://growcean.com${image}`),
      description: productMetaDescription(product, locale),
      category: product.category,
      material: product.material || undefined,
      offers: {
        "@type": "Offer",
        url,
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        seller: { "@type": "Organization", name: "Growcean" },
      },
      isRelatedTo: related.map((item) => ({ "@type": "Product", name: item.name, sku: item.model, url: `https://growcean.com${localizedPath(`/product/${item.slug}`, locale)}` })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ProductDetail product={product} locale={locale} />
    </>
  );
}
