"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const TiltCard = dynamic(
  () => import("@/components/motion/TiltCard").then((m) => m.TiltCard),
  { ssr: false }
);
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { blogPosts, getAllTags } from "@/lib/data/blog";

const BackgroundCanvas = dynamic(
  () =>
    import("@/components/effects/BackgroundCanvas").then((m) => m.BackgroundCanvas),
  { ssr: false }
);

export default function BlogListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const allTags = getAllTags();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <>
      <BackgroundCanvas />
      <Navbar showBackToPortfolioButton showOnlyBackToPortfolioButton />
      <main id="main" className="min-h-screen pb-16 pt-28">
        <div className="container-site py-10">
          <header className="mb-8 text-center">
            <h1 className="section-heading mb-4">Blog</h1>
            <h2 className="sr-only">All articles</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Thoughts, tutorials, and insights about web development, AI, and
              technology.
            </p>
          </header>

          <div className="mb-8 flex flex-col gap-4 md:flex-row">
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="md:flex-1"
              aria-label="Search articles"
            />
            <p className="text-sm text-muted-foreground md:self-center">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(null)}
              className="rounded-full"
            >
              All Posts
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="py-12 text-center">
              <h2 className="text-xl font-semibold">No articles found</h2>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your search or filters.
              </p>
              <Button
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTag(null);
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <TiltCard
                  key={post.id}
                  className="flex h-full flex-col overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={75}
                    />
                    <Badge className="absolute right-2 top-2 bg-background/80 backdrop-blur-sm">
                      {post.date}
                    </Badge>
                  </div>
                  <CardHeader>
                    <h2 className="line-clamp-2 text-lg font-semibold leading-none tracking-tight">
                      {post.title}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Button
                          key={tag}
                          type="button"
                          variant="outline"
                          size="sm"
                          className="h-auto rounded-full px-2.5 py-0.5 text-xs font-semibold"
                          onClick={() =>
                            setSelectedTag(selectedTag === tag ? null : tag)
                          }
                        >
                          {tag}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="group w-full justify-between"
                      asChild
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read Article
                        <ArrowRight className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </TiltCard>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
