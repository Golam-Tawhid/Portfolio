export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  location?: string;
  description: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Junior Software Engineer",
    organization: "Nyntax",
    duration: "Feb 2026 – Present",
    location: "Dhaka, Bangladesh (On-site)",
    description:
      "Design, develop, and maintain high-performance software systems with a focus on reliable code execution, scalability, and maintainability.",
    highlights: [
      "Collaborate with product, design, and QA to translate requirements into secure, clean codebases",
      "Troubleshoot complex bugs and optimize database queries for performance",
      "Apply modern development practices to enhance engineering workflows",
    ],
  },
  {
    role: "Founding Engineer",
    organization: "ClassTablet",
    duration: "Dec 2025 – Present",
    location: "Mirpur DOHS, Dhaka (Hybrid)",
    description:
      "Multi-tenant management platform for students, teachers, and parents, designing and shipping end-to-end product flows across a TypeScript monorepo.",
    highlights: [
      "Next.js dashboard + NestJS/Fastify API with PostgreSQL (Drizzle), Redis, and better-auth",
      "Classrooms, assignments, attendance, live sessions (Amazon IVS), payments, and parent dashboards",
      "Sentry observability, BullMQ background jobs, AWS S3/CloudFront, Playwright/Vitest/Jest testing",
    ],
  },
  {
    role: "Research Member",
    organization: "BIOSE, BRAC University",
    duration: "June 2024 – Dec 2025",
    location: "Dhaka, Bangladesh",
    description:
      "Conducted interdisciplinary research integrating biomedical science, engineering, and computational analysis.",
    highlights: [
      "Applied data analysis and computational tools for experiment design and validation",
      "Collaborated with cross-functional research teams on structured insights",
      "Documented methodologies and results for internal reports and publications",
    ],
  },
  {
    role: "Census Enumerator",
    organization: "Bangladesh Bureau of Statistics (BBS)",
    duration: "June 2022",
    location: "Dhaka, Bangladesh",
    description:
      "Conducted structured in-person interviews for the national census with strict data integrity and confidentiality standards.",
    highlights: [
      "Interviewed 300+ individuals with over 99% data accuracy",
      "Completed intensive training in communication and field data collection",
      "Maintained professionalism handling sensitive demographic information",
    ],
  },
];
