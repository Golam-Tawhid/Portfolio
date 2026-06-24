import { profile } from "@/lib/data/profile";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    alternateName: profile.name,
    jobTitle: profile.roles,
    email: profile.email,
    telephone: profile.phone,
    url: "https://gtfahad.dev",
    sameAs: [profile.social.github, profile.social.linkedin],
    description: profile.tagline,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.school,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
