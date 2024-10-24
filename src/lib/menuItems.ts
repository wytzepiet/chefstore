export type MenuItem = {
  title: string;
  href: string;
  imageUrl?: string;
  subItems?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    title: "Koelingen",
    href: "/koelingen",
    imageUrl:
      "https://images.chefstore.nl/media/catalog/category/7489_5180.jpg?v=1600070175&tr=w-140,h-140,q-80,c-at_max",
    subItems: [
      {
        title: "Glasdeurkoelkasten",
        href: "/glasdeurkoelkasten",
        imageUrl:
          "https://images.chefstore.nl/media/catalog/category/combisteel-7526.0010-00-b-7c9e.jpg?v=1642342939&tr=w-140,h-140,q-80,c-at_max",
        subItems: [
          {
            title: "Ééndeurs Displaykoelingen",
            href: "/glasdeurkoelkasten/eendeurs-displaykoelingen",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/combisteel-7526.0005-00-b-44d5.jpg?v=1709035103&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Tweedeurs Displaykoelingen",
            href: "/glasdeurkoelkasten/tweedeurs-displaykoelingen",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/combisteel-7526.0010-00-b-7c9e_1.jpg?v=1709035118&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Driedeurs+ Displaykoelingen",
            href: "/glasdeurkoelkasten/driedeurs-plus-displaykoelingen",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/combisteel-7526.0015-00-b-dcd8_1.jpg?v=1709035125&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Tafelmodel Displaykoelingen",
            href: "/glasdeurkoelkasten/tafelmodel-displaykoelingen",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/7013_2570.jpg?v=1609169162&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Zuinige Glasdeurkoelingen",
            href: "/glasdeurkoelkasten/zuinige-glasdeurkoelingen",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/S4k33Q68ZX.png?v=1666707208&tr=w-140,h-140,q-80,c-at_max",
          },
        ],
      },
      {
        title: "Barkoelingen & Backbars",
        href: "/barkoelingen-backbars",
        imageUrl:
          "https://images.chefstore.nl/media/catalog/category/gastronoble-CB932-00-b-8bcc.jpg?v=1599918798&tr=w-140,h-140,q-80,c-at_max",
        subItems: [
          {
            title: "Ééndeurs Backbars",
            href: "/barkoelingen-backbars/eendeurs-backbars",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/c1-865-bk-nl-hu_gevuld_1_large_.jpg?v=1608071882&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Tweedeurs Backbars",
            href: "/barkoelingen-backbars/tweedeurs-backbars",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/7455_1305.jpg?v=1608071904&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Driedeurs Backbars",
            href: "/barkoelingen-backbars/driedeurs-backbars",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/c3slide-865-bk-nl-hu_f_1_700_1_1.jpg?v=1608071921&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Vierdeurs Backbars",
            href: "/barkoelingen-backbars/vierdeurs-backbars",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/gastronoble-CS103-00-b-233c.jpg?v=1608071940&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Zuinige Backbars",
            href: "/barkoelingen-backbars/zuinige-backbars",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/S4k33Q68ZX_2.png?v=1666708285&tr=w-140,h-140,q-80,c-at_max",
          },
        ],
      },
      {
        title: "Horeca Koelkasten",
        href: "/horeca-koelkasten",
        imageUrl:
          "https://images.chefstore.nl/media/catalog/category/7489_5180.jpg?v=1600070175&tr=w-140,h-140,q-80,c-at_max",
        subItems: [
          {
            title: "Bewaarkoelingen",
            href: "/horeca-koelkasten/bewaarkoelingen",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/gastronoble-U634-00-b-408b.jpg?v=1679658082&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Tafelmodel Koelkasten",
            href: "/horeca-koelkasten/tafelmodel-koelkasten",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/7450_0550.jpg?v=1599918814&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Wijnkoelkasten",
            href: "/horeca-koelkasten/wijnkoelkasten",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/domest-GCWK150-00-b-a5a3.jpg?v=1599920024&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Koelkisten",
            href: "/horeca-koelkasten/koelkisten",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/gastronoble-CT330-00-b-154a.jpg?v=1599920857&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Koelvriescombinaties",
            href: "/horeca-koelkasten/koelvriescombinaties",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/323-1225.jpg?v=1589283403&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Bierkoelingen",
            href: "/horeca-koelkasten/bierkoelingen",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/7489_5330.jpg?v=1599918937&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Mini Displaykoelkasten",
            href: "/horeca-koelkasten/mini-displaykoelkasten",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/BMA0050_CI.jpg?v=1589283403&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Minibars",
            href: "/horeca-koelkasten/minibars",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/SM301.jpg?v=1589285558&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Fun Koelkasten",
            href: "/horeca-koelkasten/fun-koelkasten",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/afbeelding_kk50-oxford_1.jpg?v=1589285558&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Dry Age Koelkasten",
            href: "/horeca-koelkasten/dry-age-koelkasten",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/dry_age_kasten.JPG?v=1587469446&tr=w-140,h-140,q-80,c-at_max",
          },
          {
            title: "Consumenten Koelkasten",
            href: "/horeca-koelkasten/consumenten-koelkasten",
            imageUrl:
              "https://images.chefstore.nl/media/catalog/category/kgc270-45-4.1a+_v2.jpg?v=1600070330&tr=w-140,h-140,q-80,c-at_max",
          },
        ],
      },
      {
        title: "Glasdeurvrieskasten",
        href: "/glasdeurvrieskasten",
        imageUrl:
          "https://images.chefstore.nl/media/catalog/category/7455_2420.JPG?v=1589281687&tr=w-140,h-140,q-80,c-at_max",
        subItems: [
          { title: "Ééndeurs Glasdeurvriezers", href: "/glasdeurvrieskasten/eendeurs-glasdeurvriezers" },
          { title: "Tweedeurs Glasdeurvriezers", href: "/glasdeurvrieskasten/tweedeurs-glasdeurvriezers" },
          { title: "Driedeurs+ Glasdeurvriezers", href: "/glasdeurvrieskasten/driedeurs-plus-glasdeurvriezers" },
          { title: "Tafelmodel Glasdeurvriezers", href: "/glasdeurvrieskasten/tafelmodel-glasdeurvriezers" },
          { title: "Zuinige Glasdeurvriezers", href: "/glasdeurvrieskasten/zuinige-glasdeurvriezers" },
        ],
      },
      {
        title: "Horeca Vriezers",
        href: "/horeca-vriezers",
        subItems: [
          { title: "Bewaarvriezers", href: "/horeca-vriezers/bewaarvriezers" },
          { title: "Koelvriescombinaties", href: "/horeca-vriezers/koelvriescombinaties" },
          { title: "Mini Vrieskasten", href: "/horeca-vriezers/mini-vrieskasten" },
          { title: "Vrieskisten", href: "/horeca-vriezers/vrieskisten" },
          { title: "Consumenten Vriezers", href: "/horeca-vriezers/consumenten-vriezers" },
        ],
      },
      {
        title: "Koelwerkbanken & Saladettes",
        href: "/koelwerkbanken-saladettes",
        subItems: [
          { title: "Koelwerkbanken", href: "/koelwerkbanken-saladettes/koelwerkbanken" },
          { title: "Saladettes", href: "/koelwerkbanken-saladettes/saladettes" },
          { title: "Vrieswerkbanken", href: "/koelwerkbanken-saladettes/vrieswerkbanken" },
          { title: "Gekoelde Onderkasten", href: "/koelwerkbanken-saladettes/gekoelde-onderkasten" },
        ],
      },
      {
        title: "Koelvitrines - Vriesvitrines",
        href: "/koelvitrines-vriesvitrines",
        subItems: [
          { title: "Koeltoonbanken", href: "/koelvitrines-vriesvitrines/koeltoonbanken" },
          { title: "Opzetvitrines", href: "/koelvitrines-vriesvitrines/opzetvitrines" },
          { title: "Koelvitrines", href: "/koelvitrines-vriesvitrines/koelvitrines" },
          {
            title: "Chocolade - Patisserie - Gastronomie vitrines",
            href: "/koelvitrines-vriesvitrines/chocolade-patisserie-gastronomie-vitrines",
          },
          { title: "Gekoelde Platen en Kuipen", href: "/koelvitrines-vriesvitrines/gekoelde-platen-kuipen" },
          { title: "Schepijsvitrines", href: "/koelvitrines-vriesvitrines/schepijsvitrines" },
          { title: "Sushi Vitrines", href: "/koelvitrines-vriesvitrines/sushi-vitrines" },
          { title: "Tapasvitrines", href: "/koelvitrines-vriesvitrines/tapasvitrines" },
          { title: "Visvitrines", href: "/koelvitrines-vriesvitrines/visvitrines" },
          { title: "Wandkoelingen", href: "/koelvitrines-vriesvitrines/wandkoelingen" },
          { title: "Koelbuffetten", href: "/koelvitrines-vriesvitrines/koelbuffetten" },
          { title: "Impulskoelers", href: "/koelvitrines-vriesvitrines/impulskoelers" },
          { title: "Vriesvitrines", href: "/koelvitrines-vriesvitrines/vriesvitrines" },
          { title: "Zelfservice Vitrines", href: "/koelvitrines-vriesvitrines/zelfservice-vitrines" },
          { title: "Neutrale Vitrines", href: "/koelvitrines-vriesvitrines/neutrale-vitrines" },
        ],
      },
      {
        title: "Koel- & Vriescellen",
        href: "/koel-vriescellen",
        subItems: [
          { title: "Koelcellen zonder motor", href: "/koel-vriescellen/koelcellen-zonder-motor" },
          { title: "Koelcellen met Motor", href: "/koel-vriescellen/koelcellen-met-motor" },
          { title: "Vriescellen met Motor", href: "/koel-vriescellen/vriescellen-met-motor" },
          { title: "Koelmotoren", href: "/koel-vriescellen/koelmotoren" },
          { title: "Vriesmotoren", href: "/koel-vriescellen/vriesmotoren" },
          { title: "Mini Koel- en Vriescellen", href: "/koel-vriescellen/mini-koel-vriescellen" },
          { title: "Wand Units", href: "/koel-vriescellen/wand-units" },
          { title: "Dak Units", href: "/koel-vriescellen/dak-units" },
          { title: "Split Units", href: "/koel-vriescellen/split-units" },
          { title: "Koelcel Rekwerk", href: "/koel-vriescellen/koelcel-rekwerk" },
        ],
      },
      {
        title: "IJsblokjesmachines",
        href: "/ijsblokjesmachines",
        subItems: [
          { title: "Mini IJsblokjesmachines", href: "/ijsblokjesmachines/mini-ijsblokjesmachines" },
          { title: "Holle IJsblokjesmachines", href: "/ijsblokjesmachines/holle-ijsblokjesmachines" },
          { title: "Volle IJsblokjesmachines", href: "/ijsblokjesmachines/volle-ijsblokjesmachines" },
          { title: "Crushed Ice Machines", href: "/ijsblokjesmachines/crushed-ice-machines" },
          { title: "IJs Opslagbunkers", href: "/ijsblokjesmachines/ijs-opslagbunkers" },
          { title: "IJsvergruizers", href: "/ijsblokjesmachines/ijsvergruizers" },
        ],
      },
      {
        title: "Koude Bereiding",
        href: "/koude-bereiding",
        subItems: [
          { title: "IJs, Sorbets, Slagroom", href: "/koude-bereiding/ijs-sorbets-slagroom" },
          { title: "Blast Chillers", href: "/koude-bereiding/blast-chillers" },
          { title: "Teppanyaki's Koud", href: "/koude-bereiding/teppanyaki-koud" },
        ],
      },
    ],
  },
  {
    title: "Apparatuur",
    href: "/apparatuur",
  },
  {
    title: "Kooklijnen",
    href: "/kooklijnen",
  },
  {
    title: "RVS",
    href: "/rvs",
  },
  {
    title: "Bar- en Tafelgerei",
    href: "/bar-en-tafelgerei",
  },
  {
    title: "Keukengerei",
    href: "/keukengerei",
  },
  {
    title: "Werkkleding",
    href: "/werkkleding",
  },
  {
    title: "Disposables",
    href: "/disposables",
  },
  {
    title: "Meubilair",
    href: "/meubilair",
  },
  {
    title: "Hygiëne",
    href: "/hygiene",
  },
  {
    title: "Onderdelen",
    href: "/onderdelen",
  },
  {
    title: "Branches",
    href: "/branches",
  },
  {
    title: "SALE",
    href: "/sale",
  },
];
