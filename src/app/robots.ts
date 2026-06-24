import type { MetadataRoute } from "next";
import { absoluteUrl, SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/blog", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/blog", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/", "/blog", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/blog", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
