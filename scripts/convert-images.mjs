import { existsSync, unlinkSync } from "node:fs";
import path from "node:path";

import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..", "public");

const CONVERSIONS = [
  { from: "gallery/fade-detailing.jpg", to: "gallery/meeste-juukseloikus-fade-tallinn.webp" },
  { from: "gallery/finished-fade.jpg", to: "gallery/valmis-fade-juukseloikus-tallinn.webp" },
  { from: "gallery/scissor-closeup.jpg", to: "gallery/juukseloikus-kaaridega-tallinn.webp" },
  {
    from: "gallery/salon-interior-1.jpg",
    to: "gallery/the-zee-lounge-juuksurisalong-kadriorg-tallinn.webp",
  },
  { from: "team/owner.jpg", to: "team/the-zee-lounge-omanik-juuksur-tallinn.webp" },
];

for (const { from, to } of CONVERSIONS) {
  const fromPath = path.join(ROOT, from);
  const toPath = path.join(ROOT, to);
  if (!existsSync(fromPath)) {
    console.error(`missing source: ${from}`);
    continue;
  }
  await sharp(fromPath).webp({ quality: 82 }).toFile(toPath);
  unlinkSync(fromPath);
  console.log(`${from} -> ${to}`);
}
