export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  tags: string[];
  slug: string;
  author: string;
  publishedAt: string;
  content: string;
}

/** Optimized Unsplash delivery for cards and hero images. */
export function optimizeCoverImage(url: string, width = 800) {
  if (!url.includes("images.unsplash.com")) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}auto=format&fit=crop&w=${width}&q=75`;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building a Multi-Tenant Education Platform with Next.js and NestJS",
    excerpt:
      "Architectural lessons from ClassTablet: shipping classrooms, payments, live sessions, and parent dashboards across a TypeScript monorepo.",
    coverImage: optimizeCoverImage(
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    ),
    date: "March 10, 2026",
    tags: ["Next.js", "NestJS", "TypeScript", "Product"],
    slug: "multi-tenant-education-platform-nextjs-nestjs",
    author: "G.T. Fahad",
    publishedAt: "2026-03-10",
    content: `
      <p>ClassTablet is a multi-tenant management platform for students, teachers, and parents. As Founding Engineer, I helped design and ship end-to-end product flows spanning a Next.js dashboard and a NestJS + Fastify API backed by PostgreSQL (Drizzle) and Redis.</p>
      <h2>Why a monorepo?</h2>
      <p>We standardized on a Turborepo + pnpm workspace so the dashboard, API, and shared packages evolve together. Shared Zod contracts validate request/response shapes at compile time and runtime, reducing drift between frontend and backend.</p>
      <h2>Core product surfaces</h2>
      <ul>
        <li><strong>Classrooms:</strong> hub, scheduling, enrollments, assignments, quizzes, and attendance</li>
        <li><strong>Live sessions:</strong> Amazon IVS integration for playback, broadcast, and chat</li>
        <li><strong>Payments & billing:</strong> automated workflows with parent-facing dashboards</li>
        <li><strong>Notifications:</strong> web-push on the API plus email, WhatsApp, and SMS channels</li>
      </ul>
      <h2>Reliability choices</h2>
      <p>Sentry handles observability. BullMQ runs background jobs. AWS S3 and CloudFront store and serve files. Playwright and Vitest cover the app; Jest covers the API. Authentication uses better-auth with a shadcn-style UI layer on Tailwind.</p>
      <h2>Takeaway</h2>
      <p>Multi-tenant education software rewards explicit tenant boundaries, shared contracts, and observability from day one, not bolted on after launch.</p>
    `,
  },
  {
    id: 2,
    title: "Self-Supervised Learning for Multilingual Visual Speech Recognition",
    excerpt:
      "Notes from my undergraduate thesis on improving cross-language generalization in Conformer-based lip-reading models.",
    coverImage: optimizeCoverImage(
      "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    ),
    date: "February 18, 2026",
    tags: ["AI/ML", "Computer Vision", "Research", "NLP"],
    slug: "self-supervised-multilingual-visual-speech-recognition",
    author: "G.T. Fahad",
    publishedAt: "2026-02-18",
    content: `
      <p>Visual Speech Recognition (VSR) aims to decode spoken words from lip movements alone. My thesis explores <strong>adaptive self-supervision</strong> for cross-language generalization in a multilingual Conformer-based architecture.</p>
      <h2>The problem</h2>
      <p>Many languages lack large labeled VSR datasets. Models trained on high-resource languages often fail to transfer to low-resource settings where labeled visual speech data is scarce.</p>
      <h2>Approach</h2>
      <p>Self-supervised pre-training learns representations from unlabeled video before fine-tuning on limited labeled data. The Conformer architecture combines convolution and self-attention, useful for capturing both local lip dynamics and longer temporal context.</p>
      <h2>What I'm measuring</h2>
      <ul>
        <li>Cross-language transfer after self-supervised pre-training</li>
        <li>Robustness under varied lighting and speaker conditions</li>
        <li>Comparison against fully supervised baselines per language</li>
      </ul>
      <h2>Why it matters</h2>
      <p>Accessible speech interfaces shouldn't depend on whether your language has million-hour labeled corpora. Self-supervision is one path toward more equitable VSR systems.</p>
    `,
  },
  {
    id: 3,
    title: "Shared Zod Contracts and better-auth in Production APIs",
    excerpt:
      "How typed validation and modern auth reduce bugs when frontend and backend live in the same monorepo.",
    coverImage: optimizeCoverImage(
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
    ),
    date: "January 22, 2026",
    tags: ["TypeScript", "Security", "Zod", "Backend"],
    slug: "zod-contracts-better-auth-production",
    author: "G.T. Fahad",
    publishedAt: "2026-01-22",
    content: `
      <p>One of the fastest ways to ship bugs in full-stack TypeScript is letting the API schema and UI forms diverge. At ClassTablet we addressed this with shared Zod schemas and better-auth for session handling.</p>
      <h2>Shared contracts</h2>
      <p>A Zod schema defines the shape of a create-assignment payload once. The NestJS route validates incoming bodies with the same schema the React form uses client-side. When the API changes, TypeScript fails in both places until you fix them together.</p>
      <h2>Authentication</h2>
      <p>better-auth provides session management without reinventing cookie security, CSRF considerations, or password flows. Integrating it behind Fastify required careful middleware ordering but paid off in fewer auth edge cases.</p>
      <h2>Practical tips</h2>
      <ul>
        <li>Validate at the boundary; never trust client-only checks</li>
        <li>Keep error messages user-safe; log details server-side</li>
        <li>Version breaking API changes in shared packages explicitly</li>
      </ul>
      <p>Typed boundaries aren't ceremony. They're how small teams move fast without breaking production.</p>
    `,
  },
  {
    id: 4,
    title: "Detecting Atrial Fibrillation from ECG Signals with 1D CNNs",
    excerpt:
      "A walkthrough of feature extraction, classical ML baselines, and deep learning on the MIT-BIH dataset.",
    coverImage: optimizeCoverImage(
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
    ),
    date: "December 5, 2025",
    tags: ["Machine Learning", "Healthcare", "Python"],
    slug: "atrial-fibrillation-detection-ecg-1d-cnn",
    author: "G.T. Fahad",
    publishedAt: "2025-12-05",
    content: `
      <p>Atrial fibrillation (AF) is a common arrhythmia that increases stroke risk if undetected. In this project I worked with ECG segments from the MIT-BIH dataset to classify AF patterns.</p>
      <h2>Pipeline overview</h2>
      <ol>
        <li>Extract and preprocess ECG waveforms</li>
        <li>Engineer time-domain and frequency features for classical models</li>
        <li>Train a 1D CNN on raw or minimally processed segments</li>
        <li>Compare precision/recall across approaches</li>
      </ol>
      <h2>Classical vs deep learning</h2>
      <p>Random Forest and SVM baselines with hand-crafted features remain strong when data is limited and interpretability matters. 1D CNNs can learn temporal motifs directly but need careful regularization to avoid overfitting on small medical datasets.</p>
      <h2>Lessons</h2>
      <ul>
        <li>Signal quality and segment alignment dominate model choice</li>
        <li>Class imbalance requires weighted loss or resampling</li>
        <li>Clinical deployment would need rigorous external validation, not just test-set metrics</li>
      </ul>
    `,
  },
  {
    id: 5,
    title: "Shipping Payments and Messaging in a TypeScript Monorepo",
    excerpt:
      "Background jobs, outbound channels, and tenant-aware billing: patterns that kept ClassTablet reliable under load.",
    coverImage: optimizeCoverImage(
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ),
    date: "November 14, 2025",
    tags: ["DevOps", "NestJS", "AWS", "Product"],
    slug: "payments-messaging-typescript-monorepo",
    author: "G.T. Fahad",
    publishedAt: "2025-11-14",
    content: `
      <p>Payments and notifications are where "it works on my machine" dies in production. Here's how we structured these subsystems at ClassTablet.</p>
      <h2>Payments & billing</h2>
      <p>Billing workflows are tenant-scoped: each organization has its own branding, pricing context, and parent payment views. Long-running billing tasks run through BullMQ so HTTP requests stay fast and failures can retry with backoff.</p>
      <h2>Messaging architecture</h2>
      <ul>
        <li><strong>Web push:</strong> handled on the API with the web-push library</li>
        <li><strong>Email, WhatsApp, SMS:</strong> outbound adapters behind a unified notification service</li>
        <li><strong>Localization:</strong> multi-locale copy stored alongside templates</li>
      </ul>
      <h2>Observability</h2>
      <p>Sentry traces errors across the monorepo. Structured logs include tenant IDs (never raw PII) so we can diagnose failures per organization without exposing sensitive data in log aggregators.</p>
      <h2>Takeaway</h2>
      <p>Queue everything that talks to a third party. Your users' submit buttons will thank you.</p>
    `,
  },
  {
    id: 6,
    title: "A Systematic Review of Vision-Based Fall Detection",
    excerpt:
      "Summarizing 100 recent papers on CNNs, Transformers, and lightweight models for privacy-aware fall detection.",
    coverImage: optimizeCoverImage(
      "https://images.unsplash.com/photo-1581093458791-9f3c3900a058"
    ),
    date: "October 2, 2025",
    tags: ["Computer Vision", "Research", "Healthcare"],
    slug: "systematic-review-vision-based-fall-detection",
    author: "G.T. Fahad",
    publishedAt: "2025-10-02",
    content: `
      <p>Fall detection from video is an active research area with direct implications for elder care and assisted living. Our review analyzed <strong>100 recent architectural studies</strong> to map methods, trends, and open challenges.</p>
      <h2>Methods surveyed</h2>
      <ul>
        <li>Classic CNN pipelines for pose and motion features</li>
        <li>Transformer-based spatiotemporal models</li>
        <li>Lightweight networks for edge deployment on cameras and wearables</li>
      </ul>
      <h2>Key trends</h2>
      <p>Privacy-aware datasets and on-device inference are gaining traction. Researchers increasingly report latency and model size alongside accuracy, which is critical for real-time alerting systems.</p>
      <h2>Challenges that remain</h2>
      <ol>
        <li>Generalization across room layouts, lighting, and camera angles</li>
        <li>Distinguishing falls from similar motions (sitting down quickly, exercising)</li>
        <li>Ethical deployment: consent, data retention, and false alarm fatigue</li>
      </ol>
      <p>Fall detection is not just a classification problem. It's a systems problem spanning ML, hardware, and human factors.</p>
    `,
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllTags() {
  return Array.from(new Set(blogPosts.flatMap((post) => post.tags))).sort();
}
