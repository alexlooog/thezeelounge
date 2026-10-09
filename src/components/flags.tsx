/**
 * Windows/Chrome ei renderda lipu-emoji't (🇪🇪/🇬🇧) pildina, vaid näitab
 * lihtsalt tähekoode "EE"/"GB". Selle vältimiseks kasutame käsitsi joonistatud
 * SVG lippe, mis näevad välja ühtemoodi igal platvormil.
 */
export function EstoniaFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <clipPath id="ee-circle">
        <circle cx="12" cy="12" r="12" />
      </clipPath>
      <g clipPath="url(#ee-circle)">
        <rect width="24" height="8" y="0" fill="#0072ce" />
        <rect width="24" height="8" y="8" fill="#000000" />
        <rect width="24" height="8" y="16" fill="#ffffff" />
      </g>
    </svg>
  );
}

export function UnitedKingdomFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <clipPath id="gb-circle">
        <circle cx="12" cy="12" r="12" />
      </clipPath>
      <g clipPath="url(#gb-circle)">
        <rect width="24" height="24" fill="#012169" />
        <line x1="0" y1="0" x2="24" y2="24" stroke="#ffffff" strokeWidth="6" />
        <line x1="0" y1="0" x2="24" y2="24" stroke="#c8102e" strokeWidth="2.4" />
        <line x1="24" y1="0" x2="0" y2="24" stroke="#ffffff" strokeWidth="6" />
        <line x1="24" y1="0" x2="0" y2="24" stroke="#c8102e" strokeWidth="2.4" />
        <rect x="9.6" y="0" width="4.8" height="24" fill="#ffffff" />
        <rect x="0" y="9.6" width="24" height="4.8" fill="#ffffff" />
        <rect x="10.8" y="0" width="2.4" height="24" fill="#c8102e" />
        <rect x="0" y="10.8" width="24" height="2.4" fill="#c8102e" />
      </g>
    </svg>
  );
}
