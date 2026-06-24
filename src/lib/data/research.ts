export interface ResearchItem {
  title: string;
  description: string;
  status: "Ongoing" | "Submitted" | "Published" | "Completed";
  venue?: string;
  year: string;
  area: string;
}

export const researchInterests = [
  "Visual Speech Recognition",
  "Self-Supervised Learning",
  "Computer Vision",
  "Biomedical Signal Processing",
  "Wearable Sensor Analytics",
  "Fall Detection Systems",
];

export const researchAreas = [
  "AI/ML",
  "Computer Vision",
  "NLP",
  "Health Informatics",
  "Biomedical Engineering",
];

export const researchItems: ResearchItem[] = [
  {
    title:
      "Adaptive Self-Supervision for Cross-Language Generalization in Multilingual Conformer-Based Visual Speech Recognition",
    description:
      "Undergraduate thesis exploring self-supervised learning techniques to improve robustness and transferability in multilingual VSR models across resource-constrained languages.",
    status: "Ongoing",
    venue: "Undergraduate Thesis",
    year: "2024 – 2025",
    area: "Computer Vision / NLP",
  },
  {
    title:
      "The Evolving Paradigm of Vision-Based Fall Detection: A Systematic Review of Methods, Trends, and Challenges",
    description:
      "Comprehensive review analyzing 100 recent architectural studies evaluating CNNs, Transformers, and lightweight networks across diverse, privacy-aware datasets.",
    status: "Completed",
    venue: "Systematic Review",
    year: "2025",
    area: "Computer Vision",
  },
  {
    title:
      "A Multimodal Framework for Attention Monitoring and Stress Detection Using Wearable Sensors and Computer Vision in Academic Settings",
    description:
      "Data-driven experimentation at BIOSE integrating computer vision with wearable physiological sensors to monitor stress indicators in academic environments.",
    status: "Completed",
    venue: "BIOSE Research",
    year: "2024",
    area: "Health Informatics / ML",
  },
];
