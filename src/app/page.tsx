import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: "G.T. Fahad — Founding Engineer & Software Engineer",
  description:
    "Official portfolio of G.T. Fahad—Founding Engineer at ClassTablet, Software Engineer at Nyntax, CS Graduate at BRAC University. Full-stack, AI/ML, computer vision, Dhaka Bangladesh.",
});

export default function Page() {
  return <HomePage />;
}
