import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogBriefPage, { generateMetadata as generateEnglishMetadata } from "@/app/blog/[slug]/page";
import { blogBriefPages, getBlogBriefPage } from "@/lib/blog-brief-pages";
import { isLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return ["es", "fr", "ar", "ru"].flatMap((locale) => blogBriefPages.map((page) => ({ locale, slug: page.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en" || !getBlogBriefPage(slug)) return {};
  return generateEnglishMetadata({ params: Promise.resolve({ slug }) });
}

export default async function LocalizedBlogBriefPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "en" || !getBlogBriefPage(slug)) notFound();
  return <BlogBriefPage params={Promise.resolve({ slug })} />;
}
