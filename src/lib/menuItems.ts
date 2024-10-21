export type MenuItem = {
  title: string;
  href: string;
  subItems?: MenuItem[];
};
export const menuItems = [
  {
    title: "Koelingen",
    href: "/koelingen",
    subItems: [
      {
        title: "Glasdeurkoelkasten",
        href: "/glasdeurkoelkasten",
        subItems: [
          { title: "Ééndeurs Displaykoelingen", href: "/glasdeurkoelkasten/eendeurs-displaykoelingen" },
          { title: "Tweedeurs Displaykoelingen", href: "/glasdeurkoelkasten/tweedeurs-displaykoelingen" },
          { title: "Driedeurs+ Displaykoelingen", href: "/glasdeurkoelkasten/driedeurs-plus-displaykoelingen" },
          { title: "Tafelmodel Displaykoelingen", href: "/glasdeurkoelkasten/tafelmodel-displaykoelingen" },
          { title: "Zuinige Glasdeurkoelingen", href: "/glasdeurkoelkasten/zuinige-glasdeurkoelingen" },
        ],
      },
      {
        title: "Barkoelingen & Backbars",
        href: "/barkoelingen-backbars",
        subItems: [
          { title: "Ééndeurs Backbars", href: "/barkoelingen-backbars/eendeurs-backbars" },
          { title: "Tweedeurs Backbars", href: "/barkoelingen-backbars/tweedeurs-backbars" },
          { title: "Driedeurs Backbars", href: "/barkoelingen-backbars/driedeurs-backbars" },
          { title: "Vierdeurs Backbars", href: "/barkoelingen-backbars/vierdeurs-backbars" },
          { title: "Zuinige Backbars", href: "/barkoelingen-backbars/zuinige-backbars" },
        ],
      },
      {
        title: "Horeca Koelkasten",
        href: "/horeca-koelkasten",
        subItems: [
          { title: "Bewaarkoelingen", href: "/horeca-koelkasten/bewaarkoelingen" },
          { title: "Tafelmodel Koelkasten", href: "/horeca-koelkasten/tafelmodel-koelkasten" },
          { title: "Wijnkoelkasten", href: "/horeca-koelkasten/wijnkoelkasten" },
          { title: "Koelkisten", href: "/horeca-koelkasten/koelkisten" },
          { title: "Koelvriescombinaties", href: "/horeca-koelkasten/koelvriescombinaties" },
          { title: "Bierkoelingen", href: "/horeca-koelkasten/bierkoelingen" },
          { title: "Mini Displaykoelkasten", href: "/horeca-koelkasten/mini-displaykoelkasten" },
          { title: "Minibars", href: "/horeca-koelkasten/minibars" },
          { title: "Fun Koelkasten", href: "/horeca-koelkasten/fun-koelkasten" },
          { title: "Dry Age Koelkasten", href: "/horeca-koelkasten/dry-age-koelkasten" },
          { title: "Consumenten Koelkasten", href: "/horeca-koelkasten/consumenten-koelkasten" },
        ],
      },
      {
        title: "Glasdeurvrieskasten",
        href: "/glasdeurvrieskasten",
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
