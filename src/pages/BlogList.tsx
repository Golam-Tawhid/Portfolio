
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
// import Navbar from "../components/layout/Navbar";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  tags: string[];
  slug: string;
}

const ALL_BLOG_POSTS: BlogPost[] = [
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
  },
  {
    id: 4,
    title: "Mastering Git: Beyond the Basics",
    excerpt: "Take your Git skills to the next level with advanced techniques for managing your code and collaborating with teams.",
    coverImage: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    date: "April 29, 2024",
    tags: ["Git", "DevOps", "Productivity"],
    slug: "mastering-git-beyond-the-basics"
  },
  {
    id: 5,
    title: "State Management in React with Context API",
    excerpt: "Learn how to effectively manage global state in React applications using the built-in Context API.",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "April 15, 2024",
    tags: ["React", "JavaScript", "State Management"],
    slug: "state-management-in-react-with-context-api"
  },
  {
    id: 6,
    title: "Building a REST API with Node.js and Express",
    excerpt: "A comprehensive guide to creating scalable and maintainable REST APIs using Node.js and Express.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    date: "March 30, 2024",
    tags: ["Node.js", "Express", "API", "Backend"],
    slug: "building-a-rest-api-with-nodejs-and-express"
  }
];

// Extract all unique tags from blog posts
const ALL_TAGS = Array.from(
  new Set(ALL_BLOG_POSTS.flatMap(post => post.tags))
).sort();

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Filter posts based on search term and selected tag
  const filteredPosts = ALL_BLOG_POSTS.filter((post) => {
    const matchesSearch = 
      searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = 
      selectedTag === null || 
      post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });
  
  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };
  
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="container-wide py-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Thoughts, tutorials, and insights about web development, design, and technology.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-2/3">
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="w-full md:w-1/3 flex items-center justify-end">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredPosts.length} of {ALL_BLOG_POSTS.length} articles
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-8 overflow-auto pb-4">
            <div className="flex gap-2 flex-nowrap">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
                className="rounded-full whitespace-nowrap"
              >
                All Posts
              </Button>
              {ALL_TAGS.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTagClick(tag)}
                  className="rounded-full whitespace-nowrap"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold mb-2">No articles found</h2>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button onClick={() => { setSearchTerm(""); setSelectedTag(null); }}>
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
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
                        <Badge 
                          key={tag} 
                          variant="outline"
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            handleTagClick(tag);
                          }}
                        >
                          {tag}
                        </Badge>
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
          )}
        </div>
      </div>
    </>
  );
};

export default BlogList;
