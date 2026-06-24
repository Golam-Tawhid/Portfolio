import type { Metadata } from "next";
import BlogListPage from "@/components/pages/BlogListPage";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Blog — Engineering & AI Articles",
  description:
    "Technical articles by G.T. Fahad on Next.js, NestJS, TypeScript, machine learning, computer vision, and software engineering.",
  path: "/blog",
  keywords: [
    "G.T. Fahad blog",
    "software engineering blog",
    "AI ML articles",
    "Next.js NestJS",
    "computer vision",
  ],
});

export default function BlogPage() {
  return <BlogListPage />;
}
