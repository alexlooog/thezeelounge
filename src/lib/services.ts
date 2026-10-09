import type { Locale } from "@/lib/i18n";

/**
 * Teenused ja hinnad — vastavalt salongi ametlikule hinnakirjale (Altegio
 * broneerimislehelt). Kirjeldused ja kestused samast allikast, tõlgitud
 * inglise keelde. Vene keel jäetakse teadlikult välja, sait on ainult
 * eesti/inglise.
 */
type LocalizedText = { et: string; en: string };

type Service = {
  name: LocalizedText;
  price: string;
  duration: string;
  description: LocalizedText;
};

type ServiceGroup = {
  id: string;
  title: LocalizedText;
  services: Service[];
};

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "soengud",
    title: { et: "Soengud", en: "Haircuts" },
    services: [
      {
        name: { et: "Juukselõikus", en: "Haircut" },
        price: "35 €",
        duration: "1 h",
        description: {
          et: "Individuaalne lõikus vastavalt pea kujule, stiilile ja elustiilile. Kasutame ainult premium-klassi kosmeetikat. Teenus sisaldab juuste pesu ja viimistlust. Lõikus teostatakse masinate ja kääridega, et saavutada täpne ja puhas tulemus.",
          en: "A cut tailored to your head shape, style, and lifestyle. We use only premium-grade products. Includes a wash and finish, done with clippers and scissors for a precise, clean result.",
        },
      },
      {
        name: { et: "Masinalõikus", en: "Clipper cut" },
        price: "20 €",
        duration: "30 min",
        description: {
          et: "(Fade ei kuulu teenuse hulka.) Lühike ja korrektne lõikus masinaga, kasutades 1–2 otsikut. Sobib neile, kes hindavad lihtsust ja puhast välimust ilma liigsete detailideta. Minimaalne aeg – maksimaalne mugavus. Sisaldab kontuuri korrigeerimist ja kerget viimistlust.",
          en: "(Fade not included.) A short, clean clipper cut using 1–2 guards. Great for those who value simplicity and a clean look without extra detail. Minimal time, maximum comfort — includes outline touch-up and light finishing.",
        },
      },
      {
        name: { et: "Lapse juukselõikus (5–12 a)", en: "Kids' haircut (5–12 y)" },
        price: "30 €",
        duration: "45 min",
        description: {
          et: "Korrektne ja mugav lõikus lastele. Meister arvestab lapse juuste struktuuri ja pea kuju, luues stiilse ja samas mugava tulemuse. Erilist tähelepanu pööratakse sellele, et protsess kulgeks kergelt ja stressivabalt sõbraliku õhkkonna saatel. Sisaldab lõplikku viimistlust.",
          en: "A neat, comfortable cut for kids. The barber considers your child's hair type and head shape for a stylish yet comfortable result, keeping the process easy and stress-free in a friendly atmosphere. Includes final finishing.",
        },
      },
      {
        name: { et: "Pikad juuksed (ainult käärid)", en: "Long hair (scissors only)" },
        price: "40 €",
        duration: "1 h",
        description: {
          et: "Individuaalne lõikus neile, kes eelistavad pikemaid soenguid. Valime lõike, mis rõhutab näojooni ja sobib üldise stiiliga, säilitades loomulikkuse ja kerguse. Sisaldab konsultatsiooni, lõikust, viimistlust ja soovitusi juuksehoolduseks. Kasutatakse professionaalseid premium-klassi tooteid.",
          en: "A tailored cut for those who prefer longer hairstyles, chosen to highlight your features and suit your overall style while staying natural and light. Includes consultation, cutting, finishing, and care advice, with professional premium-grade products.",
        },
      },
      {
        name: { et: "Pea raseerimine 0-ks", en: "Head shave" },
        price: "30 €",
        duration: "45 min",
        description: {
          et: "Juuste täielik eemaldamine masinaga ja shaver'iga. Turvaline ja täpne, ilma ohtliku habemenoata. Tulemuseks on ideaalselt sile nahk ja värskuse tunne.",
          en: "Complete hair removal with clippers and a shaver. Safe and precise, without a straight razor — the result is perfectly smooth skin and a fresh feeling.",
        },
      },
    ],
  },
  {
    id: "habe",
    title: { et: "Habe ja hooldus", en: "Beard & grooming" },
    services: [
      {
        name: { et: "Habeme korrigeerimine", en: "Beard design" },
        price: "25 €",
        duration: "30 min",
        description: {
          et: "Habeme hooldus: kuju korrigeerimine masinaga ja shaver'iga, kontuuride vormistamine. Kasutatakse tipptasemel hooldustooteid.",
          en: "Beard care: shape correction with clippers and a shaver, plus outline styling. Top-quality grooming products used.",
        },
      },
      {
        name: { et: "Habeme korrigeerimine XL", en: "Beard design XL" },
        price: "30 €",
        duration: "45 min",
        description: {
          et: "Sügavam töö mahuka ja tugevalt kasvanud habemega. Meister korrigeerib pikkust ja kuju, puhastab jooned ning loob korrektse ja hoolitsetud välimuse. Kasutatakse masinat, kääre ja shaver'it täpsete kontuuride jaoks. Lõpetuseks – hooldustooted habeme ja naha pehmendamiseks.",
          en: "More thorough work for a fuller, thicker beard. The barber corrects length and shape, cleans up the lines, and creates a neat, well-groomed look using clippers, scissors, and a shaver for precise outlines. Finished with products to soften the beard and skin.",
        },
      },
      {
        name: { et: "Täielik habeme raseerimine", en: "Beard shave 0" },
        price: "15 €",
        duration: "20 min",
        description: {
          et: "Täielik habeme ja vuntside eemaldamine trimmeri ja shaver'iga. Puhas ja korrektne tulemus ilma ohtliku habemenoata. Sisaldab naha lõppviimistlust värskuse ja mugavuse tagamiseks.",
          en: "Complete removal of beard and moustache with a trimmer and shaver. A clean, precise result without a straight razor, finished with skin care for freshness and comfort.",
        },
      },
      {
        name: { et: "Märgraseerimine", en: "Wet shave" },
        price: "35 €",
        duration: "45 min",
        description: {
          et: "Traditsiooniline märgraseerimine kuuma rätiku ja habemenoaga. Sisaldab eelhooldust naha pehmendamiseks ning järelhooldust, mis jätab naha sileda ja värske.",
          en: "A traditional wet shave with hot towel and straight razor. Includes pre-shave skin preparation and post-shave care for a smooth, fresh finish.",
        },
      },
    ],
  },
  {
    id: "kombo",
    title: { et: "Kombopaketid", en: "Combo packages" },
    services: [
      {
        name: { et: "Juukselõikus + habeme korrigeerimine", en: "Haircut + beard" },
        price: "50 €",
        duration: "1 h",
        description: {
          et: "Täisteenus neile, kes soovivad terviklikku hooldust oma stiilile. Alustame meeste soenguga koos viimistluse ja detailide täpse töötlemisega, seejärel habeme kujundamine trimmeri ja shaver'iga. Kõik ühes külastuses – tulemuseks värske ja hoolitsetud välimus.",
          en: "A full service for those who want complete care for their style. We start with a men's haircut and precise finishing, followed by beard shaping with a trimmer and shaver — all in one visit, for a fresh, well-groomed look.",
        },
      },
      {
        name: { et: "Masinalõikus + habeme korrigeerimine", en: "Clipper cut + beard" },
        price: "40 €",
        duration: "45 min",
        description: {
          et: "Lühike masinalõikus 1–2 otsikuga koos habeme kujundamisega. Hea valik neile, kes eelistavad minimalismi ja puhtaid jooni. Lõpuks lisatakse hooldusvahend juustele ja habemele.",
          en: "A short clipper cut with 1–2 guards, paired with beard shaping. A great choice for those who prefer minimalism and clean lines, finished with a grooming product for hair and beard.",
        },
      },
      {
        name: { et: "Juukselõikus + habeme korrigeerimine XL", en: "Haircut + beard XL" },
        price: "60 €",
        duration: "1 h",
        description: {
          et: "Täiskompleks neile, kellel on mahukas ja tugevasti kasvanud habe. Sisaldab kaasaegset meeste soengut koos viimistlusega ja XL-formaadis habeme kujundamist: trimmeri ja shaver'i töö, pikkuse ja kuju korrigeerimine, kontuuride täpne töötlemine. Üks visiit – ja täielik välimuse uuendus.",
          en: "A full package for those with a fuller, thicker beard. Includes a modern men's haircut with finishing and XL-format beard shaping — trimmer and shaver work, length and shape correction, precise outline detailing. One visit, a complete refresh.",
        },
      },
      {
        name: { et: "Isa + Poeg", en: "Father + son" },
        price: "55 €",
        duration: "1 h 30 min",
        description: {
          et: "Ühine soeng isale ja pojale ühe meistri juures. Isa saab kaasaegse meeste soengu viimistlusega, poeg aga mugava ja stiilse lõikuse. Kõik toimub sõbralikus ja rahulikus õhkkonnas, ilma kiirustamata. Suurepärane viis koos aega veeta ja lahkuda värske välimusega.",
          en: "A shared haircut for father and son with the same barber. Dad gets a modern haircut with finishing, while the son gets a comfortable, stylish cut — all in a friendly, relaxed atmosphere, no rushing. A great way to spend time together and leave looking fresh.",
        },
      },
    ],
  },
];

export function getServiceGroups(locale: Locale) {
  return SERVICE_GROUPS.map((group) => ({
    id: group.id,
    title: group.title[locale],
    services: group.services.map((service) => ({
      name: service.name[locale],
      price: service.price,
      duration: service.duration,
      description: service.description[locale],
    })),
  }));
}

/** Madalaim ja kõrgeim hind üle kõigi teenuste — kasutusel JSON-LD priceRange väljas. */
export function getPriceRange() {
  const prices = SERVICE_GROUPS.flatMap((group) =>
    group.services.map((service) => Number(service.price.replace(/[^\d]/g, ""))),
  );
  return { min: Math.min(...prices), max: Math.max(...prices) };
}
