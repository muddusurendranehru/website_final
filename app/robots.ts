import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/private/", "/_next/", "/static/"],
    },
    sitemap: "https://www.homahealthcarecenter.in/sitemap.xml",
  }
}
