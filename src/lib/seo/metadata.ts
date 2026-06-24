import type { Metadata } from "next";
import {
  absoluteUrl,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  SOCIAL,
} from "@/lib/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: `${SITE_NAME} Portfolio`,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${SITE_NAME} Portfolio`,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: absoluteUrl("/profile.png"),
        width: 1200,
        height: 1200,
        alt: `${SITE_NAME} — Software Engineer & AI/ML Researcher`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [absoluteUrl("/profile.png")],
    creator: `@${SITE_NAME.replace(/\s/g, "")}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "BD-C",
    "geo.placename": "Dhaka",
  },
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
}: {
  title?: string;
  description?: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const desc = description ?? SITE_DESCRIPTION;
  const image = ogImage ?? absoluteUrl("/profile.png");

  return {
    title,
    description: desc,
    keywords: keywords ?? SITE_KEYWORDS,
    alternates: { canonical: path },
    openGraph: {
      title: title ?? SITE_TITLE,
      description: desc,
      url,
      images: [{ url: image, alt: title ?? SITE_NAME }],
    },
    twitter: {
      title: title ?? SITE_TITLE,
      description: desc,
      images: [image],
    },
  };
}

export const sameAsLinks = [SOCIAL.github, SOCIAL.linkedin];
