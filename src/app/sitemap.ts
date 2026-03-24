import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.prasadventures.com";
  return [
    { url: base,                        lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/virtual-space`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
