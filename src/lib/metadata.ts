import type { Metadata } from "next";

const siteName = "Studio Baan";
const defaultDescription =
  "A multidisciplinary design studio creating architecture, interiors, and objects rooted in materiality, craft, and spatial experience.";

type MetadataConfig = {
  title: string;
  description?: string;
  path?: string;
};

export const baseMetadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "Studio Baan",
    "architecture",
    "interior design",
    "product design",
  ],
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
  },
};

export function buildMetadata({
  title,
  description = defaultDescription,
  path,
}: MetadataConfig): Metadata {
  const url = path ? `https://studiobaan.com${path}` : undefined;

  return {
    title,
    description,
    alternates: path
      ? {
          canonical: path,
        }
      : undefined,
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };
}
