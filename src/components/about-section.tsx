import Image from "next/image";

import { getDictionary, type Locale } from "@/lib/i18n";

export function AboutSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section id="meist" className="border-b border-line bg-ink-raised py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 aspect-4/5 border border-line lg:order-1">
            <Image
              src="/gallery/the-zee-lounge-juuksurisalong-kadriorg-tallinn.webp"
              alt={
                locale === "et"
                  ? "The Zee Lounge'i juuksurisalong Kadriorus, Tallinnas"
                  : "The Zee Lounge barbershop in Kadriorg, Tallinn"
              }
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <p className="font-display text-5xl italic text-accent">The Zee Lounge</p>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-paper-2">{dict.about.panelCaption}</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{dict.about.eyebrow}</p>
            <h2 className="mt-3 font-display text-5xl leading-[1.05] text-paper sm:text-6xl">
              {dict.about.headingTop} <span className="italic text-accent">{dict.about.headingAccent}</span>
            </h2>
            <p className="mt-6 max-w-md text-paper-2">{dict.about.body}</p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {dict.about.features.map((feature) => (
                <div key={feature.title}>
                  <div className="mb-3 h-px w-8 bg-accent" />
                  <h3 className="font-display text-xl text-paper">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
