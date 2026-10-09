import Image from "next/image";

import { getGalleryPhotos } from "@/lib/gallery";
import { getDictionary, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export function GallerySection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const photos = getGalleryPhotos(locale);

  return (
    <section id="galerii" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{dict.gallery.eyebrow}</p>
            <h2 className="mt-3 font-display text-5xl text-paper sm:text-6xl">{dict.gallery.heading}</h2>
          </div>
          <p className="max-w-sm text-sm text-paper-2">{dict.gallery.note}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photos.map((photo) => (
            <div key={photo.src} className="group relative aspect-square overflow-hidden border border-line">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 font-display text-sm text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {photo.alt}
              </span>
            </div>
          ))}

          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex aspect-square flex-col items-center justify-center gap-3 border border-line bg-ink-raised text-center transition-colors hover:border-accent"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 text-paper-2 transition-colors group-hover:text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
            </svg>
            <span className="max-w-[10rem] px-4 font-display text-sm text-paper-2 transition-colors group-hover:text-accent">
              {dict.gallery.instagramCta}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
