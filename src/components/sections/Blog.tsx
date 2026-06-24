"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogPosts } from "@/lib/data/blog";

export default function Blog() {
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <SectionShell
      id="blog"
      title="Blog"
      subtitle="Thoughts on engineering, AI, and building products that matter."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {previewPosts.map((post, index) => (
          <ScrollReveal key={post.id} delay={index * 0.08}>
            <TiltCard className="flex h-full flex-col overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <Badge className="absolute right-2 top-2 bg-background/80 backdrop-blur-sm">
                  {post.date}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group w-full justify-between" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read Article
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button size="lg" asChild>
          <Link href="/blog">
            View All Posts
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      </div>
    </SectionShell>
  );
}
