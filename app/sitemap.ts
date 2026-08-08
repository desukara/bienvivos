import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://www.bienvivos.com/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          es: "https://www.bienvivos.com/",
          en: "https://www.eastokyo.com/",
        },
      },
    },
    {
      url: "https://www.eastokyo.com/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://www.eastokyo.com/",
          es: "https://www.bienvivos.com/",
        },
      },
    },
  ];
}
