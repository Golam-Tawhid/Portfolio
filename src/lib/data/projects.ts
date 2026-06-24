export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  category: string;
  featured: boolean;
  size: "large" | "medium" | "small";
  metrics: { label: string; value: string }[];
}

export const projects: ProjectItem[] = [
  {
    id: "silent-speech",
    title: "Silent Speech Recognition",
    description:
      "Lip-reading system using computer vision and deep learning to convert visual speech into text with TensorFlow and OpenCV.",
    image: "/projects/silent-speech.svg",
    tags: ["TensorFlow", "OpenCV", "Python", "Deep Learning"],
    demoUrl: "#",
    repoUrl: "https://github.com/Golam-Tawhid",
    category: "AI/ML",
    featured: true,
    size: "large",
    metrics: [
      { label: "Modality", value: "Visual" },
      { label: "Stack", value: "CV + DL" },
    ],
  },
  {
    id: "tasky",
    title: "Tasky (Task Management & Archival System)",
    description:
      "Secure full-stack enterprise platform with RBAC, administrative dashboards, automated task workflows, and secure data archiving.",
    image: "/projects/archival.svg",
    tags: ["Flask", "React", "MongoDB"],
    demoUrl: "#",
    repoUrl: "https://github.com/Golam-Tawhid",
    category: "Web App",
    featured: true,
    size: "medium",
    metrics: [
      { label: "Auth", value: "RBAC" },
      { label: "Stack", value: "Full-stack" },
    ],
  },
  {
    id: "readventure",
    title: "ReadVenture",
    description:
      "Book exchange platform with swapping, wishlists, user reviews, and search-based discovery built on Django.",
    image: "/projects/readventure.svg",
    tags: ["Django", "Bootstrap", "MySQL"],
    demoUrl: "#",
    repoUrl: "https://github.com/Golam-Tawhid",
    category: "Web App",
    featured: true,
    size: "medium",
    metrics: [
      { label: "Features", value: "Swap + Reviews" },
      { label: "DB", value: "MySQL" },
    ],
  },
  {
    id: "atrial-fibrillation",
    title: "Early Detection of Atrial Fibrillation",
    description:
      "Extracted and analyzed ECG signals from MIT-BIH dataset using classical ML and 1D CNN models for physiological trend detection.",
    image: "/projects/silent-speech.svg",
    tags: ["Machine Learning", "1D CNN", "ECG", "Python"],
    demoUrl: "#",
    repoUrl: "https://github.com/Golam-Tawhid",
    category: "AI/ML",
    featured: true,
    size: "large",
    metrics: [
      { label: "Dataset", value: "MIT-BIH" },
      { label: "Models", value: "ML + CNN" },
    ],
  },
  {
    id: "torko-ai",
    title: "Torko AI (Argumentative Chatbot)",
    description:
      "AI conversational platform integrating a responsive React UI with Google Gemini LLM backend processing.",
    image: "/projects/classtablet.svg",
    tags: ["React", "Flask", "MongoDB", "Gemini AI"],
    demoUrl: "#",
    repoUrl: "https://github.com/Golam-Tawhid",
    category: "AI/ML",
    featured: false,
    size: "small",
    metrics: [{ label: "LLM", value: "Gemini" }],
  },
  {
    id: "secure-diary",
    title: "SecureDiary",
    description:
      "Privacy-centric application with cryptographic algorithms for end-to-end encrypted user data storage and secure authentication.",
    image: "/projects/archival.svg",
    tags: ["Flask", "Encryption", "Security"],
    demoUrl: "#",
    repoUrl: "https://github.com/Golam-Tawhid",
    category: "Security",
    featured: false,
    size: "small",
    metrics: [{ label: "Focus", value: "E2E Encrypt" }],
  },
  {
    id: "cosmic-runner",
    title: "Cosmic Runner",
    description:
      "Fast-paced 2D endless runner with obstacle generation, enemy interactions, scoring, and health bar mechanics.",
    image: "/projects/cosmic-runner.svg",
    tags: ["Pygame", "Python"],
    demoUrl: "#",
    repoUrl: "https://github.com/Golam-Tawhid",
    category: "Game",
    featured: false,
    size: "small",
    metrics: [{ label: "Genre", value: "Arcade" }],
  },
];
