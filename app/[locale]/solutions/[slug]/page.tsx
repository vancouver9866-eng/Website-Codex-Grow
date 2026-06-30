import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionPage, { generateMetadata as generateEnglishMetadata } from "@/app/solutions/[slug]/page";
import { isLocale } from "@/lib/i18n";
import { getSolutionPage, solutionPages } from "@/lib/solution-pages";

export function generateStaticParams() {
  return ["es", "fr", "ar", "ru"].flatMap((locale) => solutionPages.map((page) => ({ locale, slug: page.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en" || !getSolutionPage(slug)) return {};
  return generateEnglishMetadata({ params: Promise.resolve({ slug }) });
}

export default async function LocalizedSolutionPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en" || !getSolutionPage(slug)) notFound();
  return <SolutionPage params={Promise.resolve({ slug })} />;
}
