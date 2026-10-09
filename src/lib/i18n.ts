export type Locale = "et" | "en";

export const LOCALES: Locale[] = ["et", "en"];
export const DEFAULT_LOCALE: Locale = "et";

/** Antud lehe tee vastava keele juures — kasutusel keelevahetajas. */
export const localePath = (locale: Locale) => (locale === "et" ? "/" : "/en/");

type Nav = {
  services: string;
  about: string;
  gallery: string;
  contact: string;
};

type Hours = { day: string; time: string }[];

export type Dictionary = {
  htmlLang: string;
  meta: {
    title: string;
    description: string;
  };
  nav: Nav;
  skipLink: string;
  header: {
    bookCta: string;
    openMenu: string;
    closeMenu: string;
  };
  languageSwitcher: {
    et: string;
    en: string;
  };
  hero: {
    eyebrow: string;
    headlineTop: string;
    headlineBottom: string;
    body: string;
    bookCta: string;
    servicesCta: string;
    highlights: { value: string; label: string }[];
    marquee: string[];
  };
  services: {
    eyebrow: string;
    heading: string;
    bookCta: string;
  };
  about: {
    eyebrow: string;
    headingTop: string;
    headingAccent: string;
    body: string;
    panelCaption: string;
    ownerLabel: string;
    features: { title: string; description: string }[];
  };
  owner: {
    eyebrow: string;
    headingTop: string;
    headingAccent: string;
    body: string;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    note: string;
    instagramCta: string;
  };
  contact: {
    eyebrow: string;
    headingTop: string;
    headingAccent: string;
    addressLabel: string;
    openWaze: string;
    openMaps: string;
    contactLabel: string;
    bookingLabel: string;
    bookingBody: string;
    callCta: string;
  };
  footer: {
    ctaText: string;
    ctaAccent: string;
    bookCta: string;
    instagram: string;
    contactLabel: string;
    hoursLabel: string;
    hours: Hours;
    rights: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  et: {
    htmlLang: "et",
    meta: {
      title: "The Zee Lounge | Meeste juuksur Kadriorus, Tallinnas",
      description:
        "Meeste juuksur ja habemestuudio Tallinnas, J. Vilmsi 53e (Kadriorg). Tasuta parkimine otse ukse ees. Broneeri juukselõikus või habemehooldus juba täna.",
    },
    nav: {
      services: "Teenused",
      about: "Meist",
      gallery: "Galerii",
      contact: "Kontakt",
    },
    skipLink: "Liigu sisu juurde",
    header: {
      bookCta: "Broneeri aeg",
      openMenu: "Ava menüü",
      closeMenu: "Sulge menüü",
    },
    languageSwitcher: {
      et: "Eesti keeles",
      en: "Vaheta inglise keelele",
    },
    hero: {
      eyebrow: "Meeste juuksur & habemestuudio Tallinnas",
      headlineTop: "Stiil, mis",
      headlineBottom: "peab vastu.",
      body: "Täpsed lõikused, hoolikalt kujundatud habe ja rahulik õhkkond kesklinna lähedal — kvaliteet, mis on hinnast ees.",
      bookCta: "Broneeri aeg",
      servicesCta: "Vaata teenuseid",
      highlights: [
        { value: "Kesklinnas", label: "J. Vilmsi tänaval" },
        { value: "Tasuta", label: "parkimine, helista väravale" },
        { value: "Täpne", label: "käsitöö igal külastusel" },
      ],
      marquee: ["JUUKSELÕIKUS", "HABEMEKUJUNDUS", "PEA RASEERIMINE", "FADE", "TASUTA PARKIMINE", "TALLINN"],
    },
    services: {
      eyebrow: "Hinnakiri",
      heading: "Teenused",
      bookCta: "Broneeri aeg",
    },
    about: {
      eyebrow: "Meist",
      headingTop: "Kvaliteet üle",
      headingAccent: "hinna.",
      body: "The Zee Lounge on koht, kus meeste soengud ja habemed saavad korrektse ja stiilse viimistluse. Töötame täpsuse ja tähelepanuga, et iga klient lahkuks värske ja hoolitsetud välimusega.",
      panelCaption: "Tallinn, Eesti",
      ownerLabel: "Omanik",
      features: [
        {
          title: "Täpne käsitöö",
          description: "Iga lõikus ja habemekujundus on kohandatud näojoontele ja soovitud stiilile.",
        },
        {
          title: "Premium tooted",
          description: "Kasutame ainult kvaliteetseid hooldus- ja viimistlustooteid juustele ning habemele.",
        },
        {
          title: "Tasuta parkimine",
          description:
            "Parkimine otse ukse ees on tasuta — parkla värav on lukus, helista salongi ette ja avame selle sulle.",
        },
        {
          title: "Rahulik õhkkond",
          description: "Aega ei kiirustata — iga klient saab meistri täieliku tähelepanu.",
        },
      ],
    },
    owner: {
      eyebrow: "Meister",
      headingTop: "Tutvu",
      headingAccent: "omanikuga.",
      body: "The Zee Lounge on üles ehitatud ühe inimese kire ja täpsuse peale. Iga klient saab isikliku ja hoolika teeninduse.",
    },
    gallery: {
      eyebrow: "Galerii",
      heading: "Meie tööd",
      note: "Pilguheit meie salongi ja töödesse.",
      instagramCta: "Vaata rohkem töid Instagramis",
    },
    contact: {
      eyebrow: "Asukoht",
      headingTop: "Leia meid",
      headingAccent: "üles.",
      addressLabel: "Aadress",
      openWaze: "Ava Waze'is →",
      openMaps: "Ava Google Mapsis →",
      contactLabel: "Kontakt",
      bookingLabel: "Aja broneerimine",
      bookingBody: "Helista või kirjuta e-mailile, et broneerida sobiv aeg.",
      callCta: "Helista",
    },
    footer: {
      ctaText: "Aeg värske lõikuse jaoks?",
      ctaAccent: "Broneeri koht.",
      bookCta: "Broneeri aeg",
      instagram: "Instagram ↗",
      contactLabel: "Kontakt",
      hoursLabel: "Lahtiolekuajad",
      hours: [{ day: "Esmaspäev – Pühapäev", time: "12:00 – 22:00" }],
      rights: "Kõik õigused kaitstud.",
    },
  },
  en: {
    htmlLang: "en",
    meta: {
      title: "The Zee Lounge | Men's Barber in Kadriorg, Tallinn",
      description:
        "Men's barber and grooming studio in Tallinn, J. Vilmsi 53e (Kadriorg). Free parking right at the door. Book a haircut or beard trim today.",
    },
    nav: {
      services: "Services",
      about: "About",
      gallery: "Gallery",
      contact: "Contact",
    },
    skipLink: "Skip to content",
    header: {
      bookCta: "Book appointment",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    languageSwitcher: {
      et: "Switch to Estonian",
      en: "In English",
    },
    hero: {
      eyebrow: "Men's barber & grooming studio in Tallinn",
      headlineTop: "Style that",
      headlineBottom: "holds strong.",
      body: "Precise cuts, carefully shaped beards, and a calm atmosphere close to the city centre — quality that comes before price.",
      bookCta: "Book appointment",
      servicesCta: "View services",
      highlights: [
        { value: "City centre", label: "on J. Vilmsi street" },
        { value: "Free", label: "parking, call to open the gate" },
        { value: "Precise", label: "craftsmanship, every visit" },
      ],
      marquee: ["HAIRCUT", "BEARD STYLING", "HEAD SHAVE", "FADE", "FREE PARKING", "TALLINN"],
    },
    services: {
      eyebrow: "Price list",
      heading: "Services",
      bookCta: "Book appointment",
    },
    about: {
      eyebrow: "About",
      headingTop: "Quality over",
      headingAccent: "price.",
      body: "The Zee Lounge is a place where men's haircuts and beards get a precise, stylish finish. We work with care and attention so every client leaves looking fresh and well-groomed.",
      panelCaption: "Tallinn, Estonia",
      ownerLabel: "Owner",
      features: [
        {
          title: "Precise craftsmanship",
          description: "Every cut and beard style is tailored to your face shape and desired look.",
        },
        {
          title: "Premium products",
          description: "We use only quality grooming and finishing products for hair and beard.",
        },
        {
          title: "Free parking",
          description:
            "Free parking right at the door — the gate is locked, so call the salon ahead and we'll open it for you.",
        },
        {
          title: "Calm atmosphere",
          description: "No rushing — every client gets the barber's full attention.",
        },
      ],
    },
    owner: {
      eyebrow: "Barber",
      headingTop: "Meet the",
      headingAccent: "owner.",
      body: "The Zee Lounge is built on one person's passion and precision. Every client gets personal, careful service.",
    },
    gallery: {
      eyebrow: "Gallery",
      heading: "Our work",
      note: "A look inside our salon and our work.",
      instagramCta: "See more of our work on Instagram",
    },
    contact: {
      eyebrow: "Location",
      headingTop: "Find us",
      headingAccent: "here.",
      addressLabel: "Address",
      openWaze: "Open in Waze →",
      openMaps: "Open in Google Maps →",
      contactLabel: "Contact",
      bookingLabel: "Book a time",
      bookingBody: "Call or email us to book a time that works for you.",
      callCta: "Call",
    },
    footer: {
      ctaText: "Ready for a fresh cut?",
      ctaAccent: "Book your spot.",
      bookCta: "Book appointment",
      instagram: "Instagram ↗",
      contactLabel: "Contact",
      hoursLabel: "Opening hours",
      hours: [{ day: "Monday – Sunday", time: "12:00 – 22:00" }],
      rights: "All rights reserved.",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
