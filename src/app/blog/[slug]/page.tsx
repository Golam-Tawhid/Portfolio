import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BackgroundCanvas } from "@/components/effects/BackgroundCanvas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPost } from "@/lib/data/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
} from "@/lib/seo/schema";
import { pageMetadata } from "@/lib/seo/metadata";
import { absoluteUrl } from "@/lib/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article Not Found" };

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
    ogImage: post.coverImage,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <>
      <JsonLd data={buildBlogPostingSchema(post)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <BackgroundCanvas />
      <Navbar showBackToPortfolioButton showOnlyBackToPortfolioButton />
      <main id="main" className="min-h-screen pb-16 pt-28">
        <article className="container-site py-10">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/blog">
              <ArrowLeft data-icon="inline-start" />
              Back to Blog
            </Link>
          </Button>

          <div className="mx-auto max-w-3xl">
            <div className="relative mb-6 aspect-video overflow-hidden rounded-xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            <header className="mb-8">
              <h1 className="font-heading text-3xl font-bold md:text-4xl">
                {post.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <span className="text-muted-foreground">
                  By{" "}
                  <a
                    href={absoluteUrl("/")}
                    rel="author"
                    className="text-primary hover:underline"
                  >
                    {post.author}
                  </a>
                </span>
                <span className="text-muted-foreground">·</span>
                <time
                  dateTime={post.publishedAt ?? post.date}
                  className="text-muted-foreground"
                >
                  {post.date}
                </time>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </header>

            <div
              className="prose prose-lg prose-invert max-w-none prose-headings:font-heading prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
