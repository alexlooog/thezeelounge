/**
 * Ettevõtte andmed — keelest sõltumatud faktid.
 *
 * Aadress ja telefon on üle võetud praeguselt saidilt (nordbarberstudio.ee),
 * kuna tegu on sama füüsilise salongi rebrändiga. E-post ja lahtiolekuajad
 * (vt lib/i18n.ts) on siin ainult mõistlikud vaikeväärtused —
 * kontrolli ja täpsusta need enne avalikustamist.
 */
export const SITE = {
  name: "The Zee Lounge",
  legalName: "The Zee Lounge",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://thezeelounge.ee",

  email: "info@thezeelounge.ee",
  phone: "+372 5590 1114",
  phoneHref: "+3725590114",
  address: "J. Vilmsi 53e, Tallinn",
  streetAddress: "J. Vilmsi 53e",
  postalCode: "10115",
  // Naaberaadressilt (sama tänav/maja, J. Vilmsi 53e) — piisavalt täpne
  // kaardimärgise jaoks; kontrolli üle, kui soovid millimeetritäpsust.
  geo: { latitude: 59.431255, longitude: 24.780603 },

  bookingUrl: "https://thezeelounge-booking.altegio.me/",
  instagram: "https://www.instagram.com/the_zee_lounge/",

  ogImage: "/og/cover.jpg",
} as const;
