import type { Metadata } from "next";

import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export function buildMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: dict.meta.title,
      template: `%s — ${SITE.name}`,
    },
    description: dict.meta.description,
    openGraph: {
      type: "website",
      locale: locale === "et" ? "et_EE" : "en_US",
      siteName: SITE.name,
      url: `${SITE.url}${localePath(locale)}`,
      title: dict.meta.title,
      description: dict.meta.description,
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: dict.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [SITE.ogImage],
    },
    alternates: {
      canonical: localePath(locale),
      languages: { et: "/", en: "/en/", "x-default": "/" },
    },
    // Favicon/apple-icon tulevad automaatselt app/icon.jpg ja app/apple-icon.jpg
    // failikonventsioonist, mitte siit — vt src/app/icon.jpg.
  };
}
