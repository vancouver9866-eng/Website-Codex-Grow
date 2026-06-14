import { notFound } from "next/navigation";
import { GrowceanHome } from "../page";
import { isLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return ["en", "es"].map((locale) => ({ locale }));
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <GrowceanHome locale={locale} />;
}
