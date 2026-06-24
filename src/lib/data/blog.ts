export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  tags: string[];
  slug: string;
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React's powerful hooks to manage state and side effects in your functional components.",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: "June 15, 2024",
    tags: ["React", "JavaScript", "Tutorial"],
    slug: "getting-started-with-react-hooks",
    author: "G.T. Fahad",
    content: `
      <p>React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class.</p>
      <h2>Why Hooks?</h2>
      <p>Hooks solve several problems that React developers have encountered over the years:</p>
      <ul>
        <li>It's hard to reuse stateful logic between components</li>
        <li>Complex components become hard to understand</li>
        <li>Classes can be confusing with 'this' binding</li>
      </ul>
      <h2>Basic Hooks</h2>
      <h3>useState</h3>
      <p>This hook lets you add React state to function components.</p>
      <h3>useEffect</h3>
      <p>This hook lets you perform side effects in function components.</p>
      <h2>Conclusion</h2>
      <p>Hooks are a powerful addition to React that make it easier to work with state and side effects in functional components.</p>
    `,
  },
  {
    id: 2,
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt:
      "Discover how to create beautiful, responsive user interfaces using the utility-first CSS framework.",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    date: "May 28, 2024",
    tags: ["CSS", "Tailwind", "Web Design"],
    slug: "building-responsive-layouts-with-tailwind-css",
    author: "G.T. Fahad",
    content: `
      <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML.</p>
      <h2>Responsive Breakpoints</h2>
      <ul>
        <li><code>sm</code>: 640px and up</li>
        <li><code>md</code>: 768px and up</li>
        <li><code>lg</code>: 1024px and up</li>
      </ul>
      <h2>Conclusion</h2>
      <p>Tailwind's responsive utilities make it simple to build layouts that look great on any device.</p>
    `,
  },
  {
    id: 3,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt:
      "A beginner-friendly guide to TypeScript and how it improves your JavaScript development workflow.",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    date: "May 12, 2024",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    slug: "introduction-to-typescript-for-javascript-developers",
    author: "G.T. Fahad",
    content: `
      <p>TypeScript has been gaining massive popularity in the JavaScript ecosystem.</p>
      <h2>What is TypeScript?</h2>
      <p>TypeScript is a strongly typed programming language that builds on JavaScript.</p>
      <h2>Why Use TypeScript?</h2>
      <ul>
        <li><strong>Type Safety</strong>: Catch type-related bugs at compile time</li>
        <li><strong>Better IDE Support</strong>: Enhanced autocompletion and refactoring</li>
      </ul>
      <h2>Conclusion</h2>
      <p>TypeScript offers significant advantages for JavaScript developers, especially for larger projects or teams.</p>
    `,
  },
  {
    id: 4,
    title: "Mastering Git: Beyond the Basics",
    excerpt:
      "Take your Git skills to the next level with advanced techniques for managing your code and collaborating with teams.",
    coverImage: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    date: "April 29, 2024",
    tags: ["Git", "DevOps", "Productivity"],
    slug: "mastering-git-beyond-the-basics",
    author: "G.T. Fahad",
    content: `<p>Advanced Git workflows help teams ship faster with fewer conflicts.</p>`,
  },
  {
    id: 5,
    title: "State Management in React with Context API",
    excerpt:
      "Learn how to effectively manage global state in React applications using the built-in Context API.",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "April 15, 2024",
    tags: ["React", "JavaScript", "State Management"],
    slug: "state-management-in-react-with-context-api",
    author: "G.T. Fahad",
    content: `<p>Context API provides a lightweight alternative to external state libraries for many applications.</p>`,
  },
  {
    id: 6,
    title: "Building a REST API with Node.js and Express",
    excerpt:
      "A comprehensive guide to creating scalable and maintainable REST APIs using Node.js and Express.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    date: "March 30, 2024",
    tags: ["Node.js", "Express", "API", "Backend"],
    slug: "building-a-rest-api-with-nodejs-and-express",
    author: "G.T. Fahad",
    content: `<p>Express remains a pragmatic choice for building REST APIs with Node.js.</p>`,
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllTags() {
  return Array.from(new Set(blogPosts.flatMap((post) => post.tags))).sort();
}
