/**
 * Blogi postituste andmed. Praegu üks näidispostitus, mis tõestab, et
 * struktuur (nimekiri + üksikpostituse mall) töötab — asenda/täienda
 * päriste artiklitega, kui neid kirjutatakse.
 */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "kuidas-valida-sobiv-habemestiil",
    title: "Kuidas valida endale sobiv habemestiil",
    excerpt:
      "Lühike juhend habemestiili valimiseks vastavalt näokujule — millele tasub tähelepanu pöörata enne järgmist salongikülastust.",
    date: "2026-08-01",
    content: [
      "Õige habemestiil sõltub eelkõige näokujust — see, mis näeb hea välja ümmargusel näol, ei pruugi sobida piklikule näole. Enne otsuse tegemist tasub oma näokuju hinnata: kas lõualuu on terav või ümar, kas nägu on pigem lai või pikk.",
      "Ümarama näokujuga meestele sobivad tavaliselt nurgelisemad habemestiilid, mis lisavad näole struktuuri. Piklikuma näoga meestel tasub aga vältida liiga pikka habet, mis nägu veelgi piklikumaks venitab — siin toimib paremini lühem, tihedam vorm.",
      "Habeme hooldus on vähemalt sama oluline kui esialgne kujundus. Regulaarne korrigeerimine iga 3-4 nädala tagant hoiab joonte teravana ja väldib lohaka väljanägemise tekkimist kasvamise käigus.",
      "Kui kahtled, milline stiil sulle sobib, on kõige lihtsam lahendus tulla kohapeale ja lasta meistril hinnata sinu näokuju ning juuksestruktuuri — professionaalne pilk säästab palju katse-eksitusega kaotatud aega.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
