import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import BlogPage from "../../../blog/how-to-choose-led-ceiling-lights-for-b2b-projects/page";

const slug = "how-to-choose-led-ceiling-lights-for-b2b-projects";

export function generateStaticParams() {
  return ["es", "fr", "ar", "ru"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") return {};
  return {
    title: "How to Choose LED Ceiling Lights for B2B Projects | Growcean Lighting",
    description:
      "Learn how to choose LED ceiling lights for wholesale, apartment, hotel and project use. Compare CRI, RG0, flicker-free drivers, wattage, size, smart control and supplier checks.",
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        en: `/blog/${slug}`,
        es: `/es/blog/${slug}`,
        fr: `/fr/blog/${slug}`,
        ar: `/ar/blog/${slug}`,
        ru: `/ru/blog/${slug}`,
        "x-default": `/blog/${slug}`,
      },
    },
  };
}

export default async function LocalizedLedCeilingLightB2BBlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <BlogPage />;
}
