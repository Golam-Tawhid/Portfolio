
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  tags: string[];
  slug: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React's powerful hooks to manage state and side effects in your functional components.",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: "June 15, 2024",
    tags: ["React", "JavaScript", "Tutorial"],
    slug: "getting-started-with-react-hooks"
  },
  {
    id: 2,
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt: "Discover how to create beautiful, responsive user interfaces using the utility-first CSS framework.",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    date: "May 28, 2024",
    tags: ["CSS", "Tailwind", "Web Design"],
    slug: "building-responsive-layouts-with-tailwind-css"
  },
  {
    id: 3,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt: "A beginner-friendly guide to TypeScript and how it improves your JavaScript development workflow.",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    date: "May 12, 2024",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    slug: "introduction-to-typescript-for-javascript-developers"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="section bg-secondary/50">
      <div className="container-wide">
        <h2 className="section-heading">Latest Blog Posts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Card key={post.id} className="overflow-hidden card-hover">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {post.date}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between group" asChild>
                  <Link to={`/blog/${post.slug}`}>
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <Link to="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
