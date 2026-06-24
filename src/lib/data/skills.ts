export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "C", "C++", "Bash", "Solidity"],
  },
  {
    id: "web-backend",
    label: "Web & Backend",
    skills: ["NestJS", "Node.js", "Fastify", "Django", "Flask", "Next.js", "React", "REST APIs"],
  },
  {
    id: "databases",
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "SQLite", "Drizzle ORM", "SQLAlchemy"],
  },
  {
    id: "ai-ml",
    label: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "Computer Vision", "Deep Learning", "OpenCV"],
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda)", "Docker", "GitHub Actions", "Turborepo", "Git"],
  },
  {
    id: "security",
    label: "Security",
    skills: ["OWASP ZAP", "Nmap", "Wireshark", "Cryptography", "Network Security"],
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["VS Code", "Postman", "Jupyter", "Figma", "LaTeX", "Playwright", "Vitest"],
  },
];
