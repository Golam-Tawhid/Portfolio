
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock blog data (in a real app, you'd fetch this from an API)
const blogPosts = [
  {
    slug: "getting-started-with-react-hooks",
    title: "Getting Started with React Hooks",
    date: "June 15, 2024",
    author: "Jane Doe",
    tags: ["React", "JavaScript", "Tutorial"],
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    content: `
      <p>React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They let you "hook into" React state and lifecycle features from function components.</p>
      
      <h2>Why Hooks?</h2>
      <p>Hooks solve several problems that React developers have encountered over the years:</p>
      <ul>
        <li>It's hard to reuse stateful logic between components</li>
        <li>Complex components become hard to understand</li>
        <li>Classes can be confusing with 'this' binding</li>
      </ul>
      
      <h2>Basic Hooks</h2>
      <p>Let's look at the most common hooks:</p>
      
      <h3>useState</h3>
      <p>This hook lets you add React state to function components.</p>
      <pre><code>
      import React, { useState } from 'react';
      
      function Counter() {
        const [count, setCount] = useState(0);
        
        return (
          &lt;div&gt;
            &lt;p&gt;You clicked {count} times&lt;/p&gt;
            &lt;button onClick={() => setCount(count + 1)}&gt;
              Click me
            &lt;/button&gt;
          &lt;/div&gt;
        );
      }
      </code></pre>
      
      <h3>useEffect</h3>
      <p>This hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.</p>
      <pre><code>
      import React, { useState, useEffect } from 'react';
      
      function Example() {
        const [count, setCount] = useState(0);
        
        // Similar to componentDidMount and componentDidUpdate
        useEffect(() => {
          // Update the document title using the browser API
          document.title = "You clicked " + count + " times";
        });
        
        return (
          &lt;div&gt;
            &lt;p&gt;You clicked {count} times&lt;/p&gt;
            &lt;button onClick={() => setCount(count + 1)}&gt;
              Click me
            &lt;/button&gt;
          &lt;/div&gt;
        );
      }
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>Hooks are a powerful addition to React that make it easier to work with state and side effects in functional components. They enable better code reuse, more logical code organization, and simpler components overall.</p>
    `
  },
  {
    slug: "building-responsive-layouts-with-tailwind-css",
    title: "Building Responsive Layouts with Tailwind CSS",
    date: "May 28, 2024",
    author: "Jane Doe",
    tags: ["CSS", "Tailwind", "Web Design"],
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    content: `
      <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. In this article, we'll explore how to create responsive layouts using Tailwind's responsive design features.</p>
      
      <h2>Introduction to Tailwind's Responsive Design System</h2>
      <p>Tailwind makes responsive design straightforward with its mobile-first breakpoint system. Instead of writing custom media queries, you can use responsive utility classes that take effect at specific breakpoints.</p>
      
      <h2>Responsive Breakpoints</h2>
      <p>Tailwind includes five default breakpoints:</p>
      <ul>
        <li><code>sm</code>: 640px and up</li>
        <li><code>md</code>: 768px and up</li>
        <li><code>lg</code>: 1024px and up</li>
        <li><code>xl</code>: 1280px and up</li>
        <li><code>2xl</code>: 1536px and up</li>
      </ul>
      
      <h2>Creating a Responsive Layout</h2>
      <p>Here's how to create a simple responsive layout that changes from a single column on mobile to multiple columns on larger screens:</p>
      
      <pre><code>
      &lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;
        &lt;div class="bg-blue-100 p-4 rounded"&gt;Item 1&lt;/div&gt;
        &lt;div class="bg-blue-100 p-4 rounded"&gt;Item 2&lt;/div&gt;
        &lt;div class="bg-blue-100 p-4 rounded"&gt;Item 3&lt;/div&gt;
        &lt;div class="bg-blue-100 p-4 rounded"&gt;Item 4&lt;/div&gt;
        &lt;div class="bg-blue-100 p-4 rounded"&gt;Item 5&lt;/div&gt;
        &lt;div class="bg-blue-100 p-4 rounded"&gt;Item 6&lt;/div&gt;
      &lt;/div&gt;
      </code></pre>
      
      <p>In this example, we have:</p>
      <ul>
        <li>1 column on mobile (default)</li>
        <li>2 columns on medium screens (md:grid-cols-2)</li>
        <li>3 columns on large screens (lg:grid-cols-3)</li>
      </ul>
      
      <h2>Responsive Typography</h2>
      <p>You can also make your typography responsive using the same pattern:</p>
      
      <pre><code>
      &lt;h1 class="text-2xl md:text-3xl lg:text-4xl font-bold"&gt;
        Responsive Heading
      &lt;/h1&gt;
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>Tailwind's responsive utilities make it simple to build layouts that look great on any device. By following the mobile-first approach and utilizing the responsive utility classes, you can create flexible designs without writing custom media queries.</p>
    `
  },
  {
    slug: "introduction-to-typescript-for-javascript-developers",
    title: "Introduction to TypeScript for JavaScript Developers",
    date: "May 12, 2024",
    author: "Jane Doe",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    content: `
      <p>TypeScript has been gaining massive popularity in the JavaScript ecosystem. In this article, we'll explore what TypeScript is and how it can benefit JavaScript developers.</p>
      
      <h2>What is TypeScript?</h2>
      <p>TypeScript is a strongly typed programming language that builds on JavaScript. It adds static type definitions, which can help catch errors early during development rather than at runtime.</p>
      
      <h2>Why Use TypeScript?</h2>
      <ul>
        <li><strong>Type Safety</strong>: Catch type-related bugs at compile time</li>
        <li><strong>Better IDE Support</strong>: Enhanced autocompletion, navigation, and refactoring</li>
        <li><strong>Improved Readability</strong>: Types serve as documentation</li>
        <li><strong>Better Scalability</strong>: Makes it easier to maintain large codebases</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To install TypeScript globally:</p>
      <pre><code>npm install -g typescript</code></pre>
      
      <p>Create a simple TypeScript file (app.ts):</p>
      <pre><code>
      function greet(name: string): string {
        return "Hello, " + name + "!";
      }
      
      console.log(greet("TypeScript"));
      </code></pre>
      
      <p>Compile it to JavaScript:</p>
      <pre><code>tsc app.ts</code></pre>
      
      <h2>Basic Types</h2>
      <p>TypeScript supports several basic types:</p>
      
      <pre><code>
      // Basic types
      let isDone: boolean = false;
      let decimal: number = 6;
      let color: string = "blue";
      let list: number[] = [1, 2, 3];
      let x: [string, number] = ["hello", 10]; // Tuple
      
      // Enum
      enum Color {Red, Green, Blue}
      let c: Color = Color.Green;
      
      // Any
      let notSure: any = 4;
      notSure = "maybe a string";
      notSure = false;
      
      // Void
      function warnUser(): void {
        console.log("This is a warning message");
      }
      
      // Null and Undefined
      let u: undefined = undefined;
      let n: null = null;
      </code></pre>
      
      <h2>Interfaces</h2>
      <p>Interfaces are a powerful way to define contracts in your code:</p>
      
      <pre><code>
      interface User {
        name: string;
        id: number;
        email?: string; // Optional property
        readonly createdAt: Date; // Read-only property
      }
      
      function createUser(user: User): User {
        return user;
      }
      
      const newUser = createUser({
        name: "John",
        id: 1,
        createdAt: new Date()
      });
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>TypeScript offers significant advantages for JavaScript developers, especially for larger projects or teams. By adding static type checking, it helps catch bugs early, improves code quality, and enhances the development experience with better tooling and documentation.</p>
    `
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    if (post) {
      document.title = `${post.title} - Jane Doe's Blog`;
    }
    
    return () => {
      document.title = "Jane Doe - Portfolio";
    };
  }, [post]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-20">
      <div className="container-wide py-10">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
        
        <div className="mx-auto max-w-3xl">
          <div className="aspect-video rounded-lg overflow-hidden mb-6">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground">By {post.author}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{post.date}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="border-t border-border mt-12 pt-6">
            <h3 className="text-lg font-bold mb-4">Share this article</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Twitter</Button>
              <Button variant="outline" size="sm">LinkedIn</Button>
              <Button variant="outline" size="sm">Facebook</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
