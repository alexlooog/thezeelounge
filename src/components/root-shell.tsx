import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary, type Locale } from "@/lib/i18n";
import { jsonLdScriptProps } from "@/lib/json-ld";
import { getPriceRange } from "@/lib/services";
import { SITE } from "@/lib/site";

const { min: minPrice, max: maxPrice } = getPriceRange();

const barberShopJsonLd = {
  "@context": "https://schema.org",
  "@type": ["HairSalon", "BarberShop"],
  name: SITE.name,
  image: `${SITE.url}/gallery/the-zee-lounge-juuksurisalong-kadriorg-tallinn.webp`,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.streetAddress,
    addressLocality: "Tallinn",
    addressRegion: "Harjumaa",
    postalCode: SITE.postalCode,
    addressCountry: "EE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  areaServed: "EE",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "22:00",
    },
  ],
  priceRange: `€${minPrice}-€${maxPrice}`,
  amenityFeature: {
    "@type": "LocationFeatureSpecification",
    name: "Tasuta parkimine",
    value: true,
  },
};

export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const dict = getDictionary(locale);

  return (
    <body className="flex min-h-full flex-col">
      <script {...jsonLdScriptProps(barberShopJsonLd)} />
      <a
        href="#sisu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-paper focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        {dict.skipLink}
      </a>
      <SiteHeader locale={locale} />
      <main id="sisu" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} />
    </body>
  );
}
