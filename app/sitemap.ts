import type { MetadataRoute } from "next";

const siteUrl = "https://growcean.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: siteUrl,
          es: `${siteUrl}/es`,
        },
      },
    },
    {
      url: `${siteUrl}/es`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: siteUrl,
          es: `${siteUrl}/es`,
        },
      },
    },
    {
      url: `${siteUrl}/products/ultra-thin-led-ceiling-light`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
