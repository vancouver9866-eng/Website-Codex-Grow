import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketPageRoute, { generateMetadata as generateEnglishMetadata } from "@/app/markets/[slug]/page";
import { isLocale } from "@/lib/i18n";
import { getMarketPage, marketPages } from "@/lib/market-pages";

export function generateStaticParams() {
  return ["es", "fr", "ar", "ru"].flatMap((locale) =>
    marketPages.map((page) => ({ locale, slug: page.slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en" || !getMarketPage(slug)) return {};
  return generateEnglishMetadata({ params: Promise.resolve({ slug }) });
}

export default async function LocalizedMarketPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en" || !getMarketPage(slug)) notFound();
  return <MarketPageRoute params={Promise.resolve({ slug })} />;
}
