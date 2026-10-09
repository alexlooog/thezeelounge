import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Zone.eu majutuskonto on vaikimisi staatiline (FTP, ilma Node.js/PM2 toeta)
  // ja sait ei kasuta API route'e, server actioneid ega vahendajat — seega
  // täielik staatiline eksport (`out/` kaust) sobib täpselt ja ei vaja serverit.
  output: "export",
  // Vaikimisi teeks eksport lameda "en.html" faili, mis eeldab serveripoolset
  // laienduse lisamist URL-ile. trailingSlash teeb selle asemel "en/index.html",
  // mida tavaline Apache/mistahes staatiline host serveerib ilma lisaseadeteta.
  trailingSlash: true,
  images: {
    // Pildioptimeerimise server pole staatilisel hostingul saadaval.
    unoptimized: true,
  },
  // Lubab ngrok'i avaliku tunneli domeenilt tulevad dev-serveri päringud
  // (Next.js blokeerib vaikimisi arendusrežiimis muud päritolu kui localhost).
  allowedDevOrigins: ["*.ngrok-free.app", "*.ngrok-free.dev", "*.ngrok.io", "*.ngrok.app"],
};

export default nextConfig;
