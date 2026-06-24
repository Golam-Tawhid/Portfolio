export const SITE_URL = "https://gtfahad.tech";
export const SITE_NAME = "G.T. Fahad";
export const SITE_TITLE = "G.T. Fahad — Founding Engineer & Software Engineer";
export const SITE_DESCRIPTION =
  "Portfolio of G.T. Fahad (Md Golam Tawhid Fahad)—Founding Engineer at ClassTablet, Junior Software Engineer at Nyntax, CS Graduate at BRAC University. Full-stack, AI/ML, and computer vision.";
export const SITE_KEYWORDS = [
  "G.T. Fahad",
  "Golam Tawhid Fahad",
  "Md Golam Tawhid Fahad",
  "Software Engineer Bangladesh",
  "Full-Stack Developer",
  "AI ML Engineer",
  "ClassTablet",
  "Nyntax",
  "BRAC University",
  "Computer Vision",
  "Visual Speech Recognition",
  "NestJS",
  "Next.js",
  "TypeScript",
  "Dhaka Software Engineer",
];

export const SOCIAL = {
  github: "https://github.com/Golam-Tawhid",
  linkedin: "https://www.linkedin.com/in/g-t-fahad",
  email: "tawhidfahad199@gmail.com",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
