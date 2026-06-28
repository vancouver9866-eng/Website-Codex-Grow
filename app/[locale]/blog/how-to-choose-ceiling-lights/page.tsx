import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import BlogPage from "../../../blog/how-to-choose-ceiling-lights/page";

export function generateStaticParams() {
  return ["es", "fr", "ar", "ru"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") return {};
  return {
    title: "How to Choose Ceiling Lights | Growcean Buyer Guide",
    description: "A practical B2B guide to choosing LED ceiling lights by wattage, room size, CRI, RG0 low blue light, control method and supplier support.",
    alternates: {
      canonical: `/${locale}/blog/how-to-choose-ceiling-lights`,
      languages: {
        en: "/blog/how-to-choose-ceiling-lights",
        es: "/es/blog/how-to-choose-ceiling-lights",
        fr: "/fr/blog/how-to-choose-ceiling-lights",
        ar: "/ar/blog/how-to-choose-ceiling-lights",
        ru: "/ru/blog/how-to-choose-ceiling-lights",
        "x-default": "/blog/how-to-choose-ceiling-lights",
      },
    },
  };
}

export default async function LocalizedBlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <BlogPage />;
}
