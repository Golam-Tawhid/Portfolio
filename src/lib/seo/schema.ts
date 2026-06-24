import { blogPosts } from "@/lib/data/blog";
import { profile } from "@/lib/data/profile";
import { faqItems } from "@/lib/seo/faq";
import { absoluteUrl, SITE_NAME, SITE_URL, SOCIAL } from "@/lib/site";

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;
const profilePageId = `${SITE_URL}/#profilepage`;

export function buildPersonSchema() {
  return {
    "@type": "Person",
    "@id": personId,
    name: profile.fullName,
    alternateName: [profile.name, "Golam Tawhid Fahad", "G.T. Fahad"],
    givenName: "Golam Tawhid",
    familyName: "Fahad",
    jobTitle: profile.roles,
    description: profile.tagline,
    email: profile.email,
    telephone: profile.phone,
    url: SITE_URL,
    image: absoluteUrl("/profile.png"),
    sameAs: [SOCIAL.github, SOCIAL.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "Machine Learning",
      "Computer Vision",
      "Visual Speech Recognition",
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.school,
      url: "https://www.bracu.ac.bd",
    },
    worksFor: [
      { "@type": "Organization", name: "ClassTablet" },
      { "@type": "Organization", name: "Nyntax" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Official portfolio of G.T. Fahad—software engineer, AI/ML researcher, and founding engineer.",
    publisher: { "@id": personId },
    inLanguage: "en",
  };
}

export function buildProfilePageSchema() {
  return {
    "@type": "ProfilePage",
    "@id": profilePageId,
    url: SITE_URL,
    name: `${profile.name} — Portfolio`,
    description: profile.tagline,
    mainEntity: { "@id": personId },
    isPartOf: { "@id": websiteId },
    inLanguage: "en",
  };
}

export function buildFaqSchema() {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    url: absoluteUrl("/#faq"),
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildHomeGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonSchema(),
      buildWebSiteSchema(),
      buildProfilePageSchema(),
      buildFaqSchema(),
    ],
  };
}

export function buildBlogPostingSchema(post: (typeof blogPosts)[number]) {
  const published = post.publishedAt ?? post.date;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: published,
    dateModified: published,
    author: {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    url: absoluteUrl(`/blog/${post.slug}`),
    keywords: post.tags.join(", "),
    inLanguage: "en",
    isPartOf: {
      "@type": "Blog",
      name: `${profile.name} Blog`,
      url: absoluteUrl("/blog"),
    },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
