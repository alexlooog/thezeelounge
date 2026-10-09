import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { RootShell } from "@/components/root-shell";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata("en");

export default function EnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <RootShell locale="en">{children}</RootShell>
    </html>
  );
}
