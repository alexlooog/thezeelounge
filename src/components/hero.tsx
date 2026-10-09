import { getDictionary, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const words = [...dict.hero.marquee, ...dict.hero.marquee];

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="grain-panel absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-4 pb-16 pt-24 sm:px-6 sm:pt-32 lg:pt-40">
        {/*
          Eyebrow + headline live in a single <h1> (not a <p> + <h1>) so the
          page's H1 actually contains the "meeste juuksur ... Tallinnas"
          keyword phrase for SEO, without changing anything visually.
        */}
        <h1 className="max-w-4xl text-paper">
          <span className="mb-6 flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-10 bg-accent" />
            {dict.hero.eyebrow}
          </span>
          <span className="block font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.98]">
            {dict.hero.headlineTop}
            <br />
            <span className="italic text-accent">{dict.hero.headlineBottom}</span>
          </span>
        </h1>

        <p className="mt-8 max-w-lg text-base leading-relaxed text-paper-2 sm:text-lg">{dict.hero.body}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              locale === "et"
                ? "Broneeri aeg The Zee Lounge meeste juuksuris Tallinnas"
                : "Book an appointment at The Zee Lounge men's barber in Tallinn"
            }
            className="btn-pill-solid"
          >
            {dict.hero.bookCta}
          </a>
          <a
            href="#teenused"
            aria-label={
              locale === "et"
                ? "Teenused ja hinnad Tallinna kesklinnas"
                : "Services and prices in central Tallinn"
            }
            className="btn-pill-outline"
          >
            {dict.hero.servicesCta}
          </a>
        </div>

        <div className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-line pt-8">
          {dict.hero.highlights.map((item) => (
            <div key={item.value}>
              <p className="font-display text-2xl text-paper sm:text-3xl">{item.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative border-t border-line bg-ink-raised py-3">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="flex items-center gap-10 text-sm font-semibold uppercase tracking-widest text-paper-2"
            >
              {word}
              <span className="text-accent">✂</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
