import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Portfolio`,
    short_name: SITE_NAME,
    description:
      "Software engineer portfolio of G.T. Fahad — full-stack, AI/ML, and computer vision.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1120",
    theme_color: "#16213e",
    lang: "en",
    icons: [
      {
        src: "/profile.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
