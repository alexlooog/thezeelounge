import Image from "next/image";

import { getDictionary, type Locale } from "@/lib/i18n";

export function OwnerSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-[minmax(0,24rem)_1fr] sm:items-center lg:gap-16">
          <div className="mx-auto w-full max-w-96 shrink-0 border border-line-strong bg-ink-raised sm:mx-0">
            <div className="relative aspect-3/4">
              <Image
                src="/team/the-zee-lounge-omanik-juuksur-tallinn.webp"
                alt={
                  locale === "et"
                    ? "The Zee Lounge'i omanik ja juuksur Tallinnas"
                    : "The Zee Lounge owner and barber in Tallinn"
                }
                fill
                sizes="24rem"
                className="object-cover"
              />
            </div>
            <p className="border-t border-line-strong px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {dict.about.ownerLabel}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{dict.owner.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] text-paper sm:text-5xl">
              {dict.owner.headingTop} <span className="italic text-accent">{dict.owner.headingAccent}</span>
            </h2>
            <p className="mt-6 max-w-md text-paper-2">{dict.owner.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
