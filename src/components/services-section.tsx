import { getDictionary, type Locale } from "@/lib/i18n";
import { getServiceGroups } from "@/lib/services";
import { SITE } from "@/lib/site";

export function ServicesSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const groups = getServiceGroups(locale);

  return (
    <section id="teenused" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {dict.services.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl text-paper sm:text-6xl">{dict.services.heading}</h2>
          </div>
          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-pill-outline">
            {dict.services.bookCta}
          </a>
        </div>

        <div className="grid gap-16 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.id}>
              <h3 className="mb-6 font-display text-3xl italic text-accent">{group.title}</h3>
              <ul className="space-y-6">
                {group.services.map((service) => (
                  <li key={service.name} className="border-b border-line pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-medium text-paper">
                        {service.name} <span className="text-xs font-normal text-paper-2">· {service.duration}</span>
                      </span>
                      <span className="shrink-0 font-display text-xl text-accent">{service.price}</span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-paper-2">{service.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
