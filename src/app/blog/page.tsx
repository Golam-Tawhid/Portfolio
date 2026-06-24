import type { Metadata } from "next";
import BlogListPage from "@/components/pages/BlogListPage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on web development, AI, machine learning, and software engineering by G.T. Fahad.",
};

export default function BlogPage() {
  return <BlogListPage />;
}
