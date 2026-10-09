import { getDictionary, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const mapQuery = encodeURIComponent(SITE.address);

export function ContactSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section id="kontakt" className="border-b border-line bg-ink-raised py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{dict.contact.eyebrow}</p>
          <h2 className="mt-3 font-display text-5xl text-paper sm:text-6xl">
            {dict.contact.headingTop} <span className="italic text-accent">{dict.contact.headingAccent}</span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="border border-line">
            <iframe
              title="The Zee Lounge — map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-80 w-full grayscale invert-[0.9] contrast-125 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-between gap-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {dict.contact.addressLabel}
                </p>
                <p className="mt-2 text-paper">{SITE.address}</p>
                <div className="mt-3 flex flex-col gap-1 text-sm">
                  <a
                    href={`https://waze.com/ul?q=${mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper-2 hover:text-accent"
                  >
                    {dict.contact.openWaze}
                  </a>
                  <a
                    href={`https://maps.google.com/?q=${mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper-2 hover:text-accent"
                  >
                    {dict.contact.openMaps}
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {dict.contact.contactLabel}
                </p>
                <p className="mt-2">
                  <a href={`tel:${SITE.phoneHref}`} className="text-paper hover:text-accent">
                    {SITE.phone}
                  </a>
                </p>
                <p className="mt-1">
                  <a href={`mailto:${SITE.email}`} className="text-paper hover:text-accent">
                    {SITE.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="border border-line-strong p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {dict.contact.bookingLabel}
              </p>
              <p className="mt-2 text-sm text-paper-2">{dict.contact.bookingBody}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={`tel:${SITE.phoneHref}`} className="btn-pill-solid">
                  {dict.contact.callCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
