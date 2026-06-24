import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/Providers";
import { JsonLd } from "@/components/JsonLd";
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

export const metadata: Metadata = {
  title: {
    default: "G.T. Fahad — Founding Engineer & Software Engineer",
    template: "%s | G.T. Fahad",
  },
  description:
    "Portfolio of G.T. Fahad — Founding Engineer at ClassTablet, Junior Software Engineer at Nyntax, CS Graduate @ BRAC University. Full-stack, computer vision, and ML.",
  keywords: [
    "G.T. Fahad",
    "Software Engineer",
    "Full-Stack",
    "ClassTablet",
    "Nyntax",
    "Computer Vision",
    "Machine Learning",
    "BRAC University",
  ],
  authors: [{ name: "G.T. Fahad" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "G.T. Fahad — Software Engineer & AI/ML Researcher",
    description:
      "Building impactful products, intelligent systems, and research-driven solutions.",
    siteName: "G.T. Fahad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "G.T. Fahad — Software Engineer & AI/ML Researcher",
    description:
      "Building impactful products, intelligent systems, and research-driven solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
      <body className="min-h-screen antialiased">
        <JsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
