import { defaultMetadata } from "@/lib/seo/metadata";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/Providers";
import { StructuredData } from "@/components/seo/StructuredData";
import { absoluteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preload" href="/profile.png" as="image" type="image/png" />
        <link rel="author" href={absoluteUrl("/llms-full.txt")} />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM full profile" />
        <link rel="author" type="text/plain" href="/humans.txt" />
      </head>
      <body className="min-h-screen antialiased">
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
