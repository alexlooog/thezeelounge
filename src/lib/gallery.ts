import type { Locale } from "@/lib/i18n";

/** Salongi ja tööde päris fotod. */
type LocalizedText = { et: string; en: string };

type GalleryPhoto = {
  src: string;
  alt: LocalizedText;
};

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/gallery/meeste-juukseloikus-fade-tallinn.webp",
    alt: {
      et: "Meeste juukselõikus ja fade-viimistlus kääridega The Zee Lounge'is Tallinnas",
      en: "Men's fade haircut detailing with scissors at The Zee Lounge in Tallinn",
    },
  },
  {
    src: "/gallery/valmis-fade-juukseloikus-tallinn.webp",
    alt: {
      et: "Valmis fade-lõikus meeste juuksurisalongis Tallinnas",
      en: "Finished fade haircut at a men's barbershop in Tallinn",
    },
  },
  {
    src: "/gallery/juukseloikus-kaaridega-tallinn.webp",
    alt: {
      et: "Täpne juukselõikus kääridega The Zee Lounge'is, Tallinn",
      en: "Precise scissor haircut detailing at The Zee Lounge, Tallinn",
    },
  },
];

export function getGalleryPhotos(locale: Locale) {
  return GALLERY_PHOTOS.map((photo) => ({ src: photo.src, alt: photo.alt[locale] }));
}
