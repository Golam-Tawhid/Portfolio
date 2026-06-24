import { buildHomeGraphSchema } from "@/lib/seo/schema";

export function StructuredData() {
  const schema = buildHomeGraphSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
