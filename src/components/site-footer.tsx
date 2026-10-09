import Image from "next/image";

import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const dict = getDictionary(locale);
  const navItems = [
    {
      href: "#teenused",
      label: dict.nav.services,
      ariaLabel:
        locale === "et" ? "Teenused ja hinnad Tallinna kesklinnas" : "Services and prices in central Tallinn",
    },
    { href: "#meist", label: dict.nav.about },
    { href: "#galerii", label: dict.nav.gallery },
    {
      href: "#kontakt",
      label: dict.nav.contact,
      ariaLabel: locale === "et" ? "Vaata asukohta Kadriorus" : "See our location in Kadriorg",
    },
    ...(locale === "et" ? [{ href: "/blogi/", label: "Blogi" }] : []),
  ];

  return (
    <footer className="border-t border-line bg-ink-sunk">
      <div className="grain-panel border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 sm:py-20 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-display text-3xl leading-tight text-paper sm:text-4xl">
            {dict.footer.ctaText} <span className="italic text-accent">{dict.footer.ctaAccent}</span>
          </p>
          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-pill-solid shrink-0">
            {dict.footer.bookCta}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="relative h-20 w-20">
              <Image src="/brand/logo.jpg" alt="The Zee Lounge" fill sizes="80px" className="object-contain" />
            </div>
            <p className="mt-3 max-w-xs text-sm text-paper-2">{dict.hero.eyebrow}</p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-paper-2 hover:text-accent"
            >
              {dict.footer.instagram}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {dict.footer.contactLabel}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-paper-2">
              <li>{SITE.address}</li>
              <li>
                <a href={`tel:${SITE.phoneHref}`} className="hover:text-accent">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {dict.footer.hoursLabel}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-paper-2">
              {dict.footer.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-6">
                  <span>{h.day}</span>
                  <span className="text-paper">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs text-paper-2 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.legalName}. {dict.footer.rights}
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} aria-label={item.ariaLabel} className="hover:text-accent">
                {item.label}
              </a>
            ))}
            <span className="flex items-center gap-2 border-l border-line pl-6">
              <a
                href={localePath("et")}
                aria-current={locale === "et" ? "true" : undefined}
                className={locale === "et" ? "text-accent" : "hover:text-accent"}
              >
                ET
              </a>
              <span className="text-paper-2">/</span>
              <a
                href={localePath("en")}
                aria-current={locale === "en" ? "true" : undefined}
                className={locale === "en" ? "text-accent" : "hover:text-accent"}
              >
                EN
              </a>
            </span>
          </nav>
        </div>
        <p className="mt-3 text-xs text-paper-2">
          Lehe valmistas{" "}
          <a
            href="https://veebiloog.ee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            veebiloog.ee
          </a>
        </p>
      </div>
    </footer>
  );
}
