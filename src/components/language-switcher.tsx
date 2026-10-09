import Link from "next/link";

import { EstoniaFlag, UnitedKingdomFlag } from "@/components/flags";
import { getDictionary, LOCALES, localePath, type Locale } from "@/lib/i18n";

const FLAG: Record<Locale, React.ComponentType<{ className?: string }>> = {
  et: EstoniaFlag,
  en: UnitedKingdomFlag,
};

export function LanguageSwitcher({ locale, className = "" }: { locale: Locale; className?: string }) {
  const dict = getDictionary(locale);

  return (
    <div className={`flex items-center gap-1 sm:gap-1.5 ${className}`}>
      {LOCALES.map((loc) => {
        const active = loc === locale;
        const Flag = FLAG[loc];
        return (
          <Link
            key={loc}
            href={localePath(loc)}
            aria-label={dict.languageSwitcher[loc]}
            aria-current={active ? "true" : undefined}
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-opacity sm:h-8 sm:w-8 ${
              active ? "border-accent opacity-100" : "border-line-strong opacity-50 hover:opacity-90"
            }`}
          >
            <Flag className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" />
          </Link>
        );
      })}
    </div>
  );
}
