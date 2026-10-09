"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
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
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href={localePath(locale)}
          className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo.jpg"
            alt="The Zee Lounge"
            fill
            sizes="(min-width: 640px) 56px, 48px"
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.ariaLabel}
              className="text-sm font-medium uppercase tracking-wide text-paper-2 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${SITE.phoneHref}`}
            className="hidden text-sm font-medium text-paper-2 hover:text-accent sm:block"
          >
            {SITE.phone}
          </a>
          <LanguageSwitcher locale={locale} />
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-solid !px-3 !py-1.5 !text-[10px] sm:!px-5 sm:!py-2.5 sm:!text-xs"
          >
            {dict.header.bookCta}
          </a>
          <button
            type="button"
            aria-label={open ? dict.header.closeMenu : dict.header.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 shrink-0 flex-col items-center justify-center gap-1.5 border border-line-strong sm:h-9 sm:w-9 md:hidden"
          >
            <span
              className={`h-px w-4 bg-paper transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-4 bg-paper transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line bg-ink px-4 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.ariaLabel}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-sm font-medium uppercase tracking-wide text-paper-2 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a href={`tel:${SITE.phoneHref}`} className="py-3 text-sm font-medium text-paper-2 hover:text-accent">
            {SITE.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
