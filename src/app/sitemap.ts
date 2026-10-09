import type { MetadataRoute } from "next";

import { BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/en/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/blogi/`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE.url}/blogi/${post.slug}/`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
