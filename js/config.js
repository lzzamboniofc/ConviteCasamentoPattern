/*
  ============================================================
  PRESETS DE TEMA E TIPOGRAFIA
  ============================================================
  Para trocar o visual inteiro do convite, altere apenas:

    themePreset: "olive"
    heroFontPreset: "formalClassic"
    fontPreset: "fashion"

  Você também pode personalizar uma cor específica em `theme`.
  Os valores de `theme` sempre sobrescrevem o preset selecionado.
*/

window.WEDDING_PRESETS = {
  themes: {
  // NEUTROS / CLÁSSICOS
  olive: { paper: "#F4F0E8", paper2: "#EDE7DC", ink: "#20221E", inkSoft: "#6D6D64", accent: "#66725B", accentDark: "#3C4938", accentWarm: "#B38F72", white: "#FFFDF8", black: "#151713" },
  champagne: { paper: "#F7F1E8", paper2: "#EFE3D4", ink: "#2A231D", inkSoft: "#74695F", accent: "#B4946D", accentDark: "#725B43", accentWarm: "#C9A879", white: "#FFFCF7", black: "#1A1714" },
  midnight: { paper: "#F1F0EC", paper2: "#E3E1DA", ink: "#1E2427", inkSoft: "#687277", accent: "#53656D", accentDark: "#26383F", accentWarm: "#B49A75", white: "#FCFBF8", black: "#101517" },
  blackGold: { paper: "#F4F1EA", paper2: "#E9E3D8", ink: "#1C1A17", inkSoft: "#716B60", accent: "#B69A63", accentDark: "#806A3E", accentWarm: "#D0B77C", white: "#FFFCF6", black: "#0E0D0B" },
  mocha: { paper: "#F5F0EA", paper2: "#E8DED4", ink: "#302720", inkSoft: "#75685E", accent: "#836A58", accentDark: "#594538", accentWarm: "#B99578", white: "#FFF9F4", black: "#1B1511" },
  ivory: { paper: "#FAF7EF", paper2: "#EFE9DC", ink: "#29261F", inkSoft: "#777166", accent: "#9A8A68", accentDark: "#675C45", accentWarm: "#C7AA7A", white: "#FFFDF8", black: "#181610" },

  // AZUIS
  navy: { paper: "#F3F5F6", paper2: "#E6EAED", ink: "#18232E", inkSoft: "#66717B", accent: "#344E67", accentDark: "#172D42", accentWarm: "#C3A879", white: "#FCFDFE", black: "#0E1821" },
  dustyBlue: { paper: "#F4F6F6", paper2: "#E7ECEE", ink: "#273136", inkSoft: "#6D787E", accent: "#8299A5", accentDark: "#526B78", accentWarm: "#C3A28A", white: "#FDFEFE", black: "#151C20" },
  azure: { paper: "#F3F7FA", paper2: "#E4EDF4", ink: "#20313D", inkSoft: "#687985", accent: "#5C8EAE", accentDark: "#39627D", accentWarm: "#C2A17F", white: "#FCFEFF", black: "#111A20" },
  royalBlue: { paper: "#F2F4F8", paper2: "#E2E7F0", ink: "#1D2940", inkSoft: "#69758B", accent: "#405D91", accentDark: "#273D65", accentWarm: "#C1A16F", white: "#FCFDFF", black: "#101624" },
  powderBlue: { paper: "#F7F9FA", paper2: "#EAF0F3", ink: "#2A343A", inkSoft: "#747E84", accent: "#A8C2D0", accentDark: "#6D8D9D", accentWarm: "#C7A98D", white: "#FFFFFF", black: "#171D21" },
  oceanBlue: { paper: "#F1F6F8", paper2: "#E1EBEF", ink: "#1D3038", inkSoft: "#64757C", accent: "#4F8296", accentDark: "#2D5A6C", accentWarm: "#BFA181", white: "#FCFEFF", black: "#0F191E" },
  petrolBlue: { paper: "#F0F4F4", paper2: "#E0E8E8", ink: "#1C2C2E", inkSoft: "#657273", accent: "#476F73", accentDark: "#294B4E", accentWarm: "#B99A78", white: "#FCFEFD", black: "#101718" },
  iceBlue: { paper: "#F6FAFB", paper2: "#E9F1F4", ink: "#28383F", inkSoft: "#718088", accent: "#94B8C7", accentDark: "#628794", accentWarm: "#C8A88C", white: "#FFFFFF", black: "#151D21" },
  slateBlue: { paper: "#F3F4F7", paper2: "#E4E6EC", ink: "#252A36", inkSoft: "#6D7180", accent: "#68779B", accentDark: "#465374", accentWarm: "#BEA080", white: "#FCFCFE", black: "#14161D" },
  denimBlue: { paper: "#F3F5F6", paper2: "#E3E8EB", ink: "#22313B", inkSoft: "#687680", accent: "#57788D", accentDark: "#385669", accentWarm: "#BE9E7C", white: "#FDFEFE", black: "#121A1F" },

  // AMARELOS / DOURADOS
  butterYellow: { paper: "#FFF9ED", paper2: "#F5ECD8", ink: "#342D20", inkSoft: "#7A705D", accent: "#D8B968", accentDark: "#9A7A2E", accentWarm: "#CFA36A", white: "#FFFDF8", black: "#1E1A11" },
  golden: { paper: "#FBF6E9", paper2: "#EFE4C9", ink: "#332B1D", inkSoft: "#756A55", accent: "#C6A14A", accentDark: "#8A6A22", accentWarm: "#D2AB65", white: "#FFFDF7", black: "#1C170E" },
  mustard: { paper: "#F9F4E8", paper2: "#ECE1C8", ink: "#332D20", inkSoft: "#786D58", accent: "#B6933F", accentDark: "#765D23", accentWarm: "#C89D62", white: "#FFFCF5", black: "#1D190F" },
  sunflower: { paper: "#FFF7E6", paper2: "#F3E6C4", ink: "#352D1B", inkSoft: "#7D7051", accent: "#D0A52D", accentDark: "#916D0D", accentWarm: "#D5A96F", white: "#FFFDF7", black: "#20190A" },
  honey: { paper: "#FCF6EA", paper2: "#EEE1CC", ink: "#342B1F", inkSoft: "#796956", accent: "#C0914D", accentDark: "#825F2B", accentWarm: "#D1A16B", white: "#FFFDF8", black: "#1E170F" },
  amber: { paper: "#FBF4E7", paper2: "#EDDEC6", ink: "#352A1D", inkSoft: "#7B6952", accent: "#C7863D", accentDark: "#85531D", accentWarm: "#D09A63", white: "#FFFDF7", black: "#1F160D" },
  vanilla: { paper: "#FFFAF0", paper2: "#F4EDD9", ink: "#302C22", inkSoft: "#777064", accent: "#D1BC7A", accentDark: "#927C42", accentWarm: "#CFA77C", white: "#FFFFFF", black: "#1B1811" },
  antiqueGold: { paper: "#F8F3E8", paper2: "#EAE0C9", ink: "#302A20", inkSoft: "#726858", accent: "#AA8A52", accentDark: "#6F5933", accentWarm: "#C19A68", white: "#FFFCF6", black: "#1B1710" },

  // VERMELHOS / VINHOS
  wine: { paper: "#F7F1F1", paper2: "#ECE0E1", ink: "#302224", inkSoft: "#78676A", accent: "#7B3542", accentDark: "#4B1F29", accentWarm: "#B79078", white: "#FFF9F9", black: "#1A1113" },
  marsala: { paper: "#F6F0ED", paper2: "#E9DEDA", ink: "#322521", inkSoft: "#776762", accent: "#8B4D46", accentDark: "#5A302C", accentWarm: "#C09B7E", white: "#FFF9F6", black: "#1C1412" },
  crimson: { paper: "#F8F1F2", paper2: "#EDE0E2", ink: "#312124", inkSoft: "#79666A", accent: "#963E4D", accentDark: "#61232F", accentWarm: "#B98F79", white: "#FFF9FA", black: "#1A1013" },
  ruby: { paper: "#F8F1F2", paper2: "#EADDE0", ink: "#311F23", inkSoft: "#786367", accent: "#A13247", accentDark: "#6A1B2D", accentWarm: "#BA8E74", white: "#FFF9FA", black: "#1A0F12" },
  garnet: { paper: "#F6F0F1", paper2: "#E7DCDD", ink: "#302124", inkSoft: "#746367", accent: "#76313A", accentDark: "#4B1C23", accentWarm: "#B18C76", white: "#FFF9F9", black: "#190F11" },
  brickRed: { paper: "#F8F0ED", paper2: "#EADCD6", ink: "#34241F", inkSoft: "#7A675F", accent: "#A55342", accentDark: "#6D3328", accentWarm: "#C09072", white: "#FFF9F6", black: "#1E1411" },
  cherry: { paper: "#F9F1F3", paper2: "#ECDDE1", ink: "#321F24", inkSoft: "#79636A", accent: "#A83D56", accentDark: "#6D2034", accentWarm: "#BB8F7B", white: "#FFF9FB", black: "#1A0F13" },
  oxblood: { paper: "#F5F0F0", paper2: "#E5DADA", ink: "#2D2021", inkSoft: "#716162", accent: "#682D33", accentDark: "#41191E", accentWarm: "#AA876F", white: "#FCF8F8", black: "#160E0F" },
  roseRed: { paper: "#FAF2F3", paper2: "#EFE0E3", ink: "#332226", inkSoft: "#7C666B", accent: "#B25A69", accentDark: "#7A3544", accentWarm: "#C2947E", white: "#FFF9FA", black: "#1C1114" },
  cranberry: { paper: "#F8F1F2", paper2: "#E9DDE0", ink: "#302125", inkSoft: "#74646A", accent: "#873C50", accentDark: "#592235", accentWarm: "#B38C78", white: "#FFF9FA", black: "#190F12" },

  // VERDES
  sage: { paper: "#F4F4EF", paper2: "#E8E9DF", ink: "#252A24", inkSoft: "#70766B", accent: "#87927A", accentDark: "#55604D", accentWarm: "#BBA58A", white: "#FDFDF9", black: "#151814" },
  emerald: { paper: "#F1F5F2", paper2: "#E0E9E3", ink: "#172A22", inkSoft: "#627069", accent: "#2F6B55", accentDark: "#174432", accentWarm: "#C0A36E", white: "#FAFDFB", black: "#0C1712" },

  // ROSAS
  blush: { paper: "#F8F1F0", paper2: "#F0E3E2", ink: "#302526", inkSoft: "#7A6668", accent: "#B38488", accentDark: "#744F54", accentWarm: "#C49A82", white: "#FFFBFA", black: "#1B1516" },
  mauve: { paper: "#F7F1F3", paper2: "#EBE0E4", ink: "#31262B", inkSoft: "#796970", accent: "#9A7180", accentDark: "#674957", accentWarm: "#B9937E", white: "#FFF9FB", black: "#1B1417" },
  roseGold: { paper: "#FAF3F1", paper2: "#EFE2DE", ink: "#352824", inkSoft: "#7C6963", accent: "#B87C70", accentDark: "#835349", accentWarm: "#D2A18B", white: "#FFFDFC", black: "#1E1513" },
  antiqueRose: { paper: "#F8F2F1", paper2: "#ECE1DF", ink: "#332726", inkSoft: "#7B6B69", accent: "#A97874", accentDark: "#704C49", accentWarm: "#C09B82", white: "#FFFBFA", black: "#1C1514" },

  // TERRACOTA
  terracotta: { paper: "#F5EEE7", paper2: "#E9DDD1", ink: "#30231D", inkSoft: "#75655B", accent: "#A7654D", accentDark: "#6D3F31", accentWarm: "#C08A69", white: "#FFF9F5", black: "#1D1511" },

  // ROXOS
  lavender: { paper: "#F6F3F8", paper2: "#EAE4EF", ink: "#2D2732", inkSoft: "#756C7B", accent: "#927EA3", accentDark: "#62516F", accentWarm: "#C2A08F", white: "#FEFCFF", black: "#19151D" },
  plum: { paper: "#F6F1F5", paper2: "#E9DFE7", ink: "#30252F", inkSoft: "#766974", accent: "#7F5878", accentDark: "#53364E", accentWarm: "#BE987E", white: "#FFF9FE", black: "#1A141A" },
  aubergine: { paper: "#F4F0F3", paper2: "#E5DDE3", ink: "#2D222C", inkSoft: "#716570", accent: "#63445F", accentDark: "#3B2939", accentWarm: "#B8957D", white: "#FCF9FC", black: "#171116" },
  violet: { paper: "#F7F3F8", paper2: "#EAE3ED", ink: "#2E2731", inkSoft: "#746C78", accent: "#866E92", accentDark: "#594463", accentWarm: "#BE9B86", white: "#FEFCFF", black: "#19151B" },
  orchid: { paper: "#F8F3F7", paper2: "#EDE2EA", ink: "#332831", inkSoft: "#7A6A76", accent: "#A17498", accentDark: "#704F69", accentWarm: "#C39A84", white: "#FFF9FE", black: "#1C151A" },
  amethyst: { paper: "#F6F3F8", paper2: "#E8E3EE", ink: "#2B2833", inkSoft: "#706D7A", accent: "#756B96", accentDark: "#4F466E", accentWarm: "#B99A83", white: "#FDFBFF", black: "#17151D" },
  mulberry: { paper: "#F6F1F4", paper2: "#E8DDE4", ink: "#30242C", inkSoft: "#746770", accent: "#80526B", accentDark: "#543247", accentWarm: "#B8927C", white: "#FFF9FC", black: "#191216" },
  dustyPurple: { paper: "#F6F4F7", paper2: "#E9E5EC", ink: "#2F2B33", inkSoft: "#75717A", accent: "#8A7D91", accentDark: "#5D5365", accentWarm: "#BBA08A", white: "#FEFDFF", black: "#19171C" },
  deepPurple: { paper: "#F3F0F4", paper2: "#E2DCE5", ink: "#2B232E", inkSoft: "#6B626F", accent: "#5D4068", accentDark: "#38243F", accentWarm: "#B28E78", white: "#FCF9FD", black: "#161118" },

  // VIBRANTES
  electricBlue: { paper: "#F3F8FF", paper2: "#E1ECFA", ink: "#16243A", inkSoft: "#5C6E86", accent: "#1E73E8", accentDark: "#0F49A8", accentWarm: "#F2A65A", white: "#FFFFFF", black: "#0C1420" },
  hotPink: { paper: "#FFF3F8", paper2: "#F9E0EC", ink: "#3A1E2D", inkSoft: "#815C70", accent: "#E83E8C", accentDark: "#A91F61", accentWarm: "#F3A76B", white: "#FFFFFF", black: "#211019" },
  vibrantCoral: { paper: "#FFF4F1", paper2: "#F9E1DB", ink: "#3A241E", inkSoft: "#84655C", accent: "#EF6A5B", accentDark: "#B94335", accentWarm: "#F4B067", white: "#FFFFFF", black: "#21130F" },
  tropicalTeal: { paper: "#F0FAF9", paper2: "#DCEFEB", ink: "#16332F", inkSoft: "#587971", accent: "#1E9C8A", accentDark: "#12675D", accentWarm: "#F0AD5D", white: "#FFFFFF", black: "#0B1C19" },
  vividPurple: { paper: "#F8F3FF", paper2: "#EADFFA", ink: "#2E1E3F", inkSoft: "#735F84", accent: "#8E44D6", accentDark: "#5B2993", accentWarm: "#E6A15F", white: "#FFFFFF", black: "#181020" },

  // ESCUROS / VIBRANTES
  electricNavy: { paper: "#EDF2F8", paper2: "#DCE5F0", ink: "#111B2D", inkSoft: "#5D6A7D", accent: "#2864D7", accentDark: "#0A2E73", accentWarm: "#E4A94F", white: "#FFFFFF", black: "#07101F" },
  rubyNight: { paper: "#F5ECEF", paper2: "#E9D6DD", ink: "#2E141C", inkSoft: "#765660", accent: "#C4264E", accentDark: "#70152C", accentWarm: "#D99A63", white: "#FFF9FB", black: "#17080D" },
  emeraldNight: { paper: "#EDF4F1", paper2: "#DCE9E3", ink: "#102820", inkSoft: "#587167", accent: "#15936A", accentDark: "#075038", accentWarm: "#D2A257", white: "#FBFFFD", black: "#061812" },
  royalPurpleNight: { paper: "#F2EEF7", paper2: "#E2DAED", ink: "#24152F", inkSoft: "#695775", accent: "#8144CF", accentDark: "#482073", accentWarm: "#DA9F59", white: "#FEFBFF", black: "#120A18" },
  midnightMagenta: { paper: "#F6EDF3", paper2: "#E9D9E4", ink: "#2A1522", inkSoft: "#735767", accent: "#C33284", accentDark: "#71184A", accentWarm: "#E3A066", white: "#FFF9FD", black: "#160A11" },
  deepTeal: { paper: "#ECF5F4", paper2: "#D8E9E7", ink: "#102928", inkSoft: "#577372", accent: "#168B89", accentDark: "#075453", accentWarm: "#E0A45E", white: "#FBFFFF", black: "#061817" },
  cobaltGold: { paper: "#EEF2F9", paper2: "#DDE5F2", ink: "#13203A", inkSoft: "#5C6A84", accent: "#2954C8", accentDark: "#142E78", accentWarm: "#DDB34F", white: "#FFFFFF", black: "#091020" },
  darkCoral: { paper: "#F8EEEB", paper2: "#ECD9D4", ink: "#311914", inkSoft: "#765B55", accent: "#DD5546", accentDark: "#8C2C22", accentWarm: "#F0A451", white: "#FFF9F7", black: "#190C09" }

},

  fonts: {
    fashion: {
      display: '"Bodoni Moda", Georgia, serif',
      body: '"Manrope", Arial, sans-serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    editorial: {
      display: '"Cormorant Garamond", Georgia, serif',
      body: '"Manrope", Arial, sans-serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    romantic: {
      display: '"Bodoni Moda", Georgia, serif',
      body: '"Montserrat", Arial, sans-serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    classic: {
      display: '"Playfair Display", Georgia, serif',
      body: '"Source Sans 3", Arial, sans-serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    modern: {
      display: '"DM Serif Display", Georgia, serif',
      body: '"Inter", Arial, sans-serif',
      ui: '"Inter", Arial, sans-serif'
    },
    poppins: {
      display: '"Poppins", Arial, sans-serif',
      body: '"Poppins", Arial, sans-serif',
      ui: '"Poppins", Arial, sans-serif'
    },
    roboto: {
      display: '"Roboto", Arial, sans-serif',
      body: '"Roboto", Arial, sans-serif',
      ui: '"Roboto", Arial, sans-serif'
    },
    clean: {
      display: '"Poppins", Arial, sans-serif',
      body: '"Roboto", Arial, sans-serif',
      ui: '"Poppins", Arial, sans-serif'
    },
    timeless: {
      display: '"EB Garamond", Georgia, serif',
      body: '"Lora", Georgia, serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    luxury: {
      display: '"Cormorant", Georgia, serif',
      body: '"Libre Baskerville", Georgia, serif',
      ui: '"Manrope", Arial, sans-serif'
    },
    royal: {
      display: '"Cinzel", Georgia, serif',
      body: '"Lora", Georgia, serif',
      ui: '"Montserrat", Arial, sans-serif'
    },
    signature: {
      display: '"Great Vibes", cursive',
      body: '"Cormorant Garamond", Georgia, serif',
      ui: '"Manrope", Arial, sans-serif'
    },
    handwritten: {
      display: '"Allura", cursive',
      body: '"Lora", Georgia, serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    paris: {
      display: '"Parisienne", cursive',
      body: '"Libre Baskerville", Georgia, serif',
      ui: '"Manrope", Arial, sans-serif'
    },
    intimate: {
      display: '"Sacramento", cursive',
      body: '"Montserrat", Arial, sans-serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    garden: {
      display: '"Cormorant Infant", Georgia, serif',
      body: '"Lora", Georgia, serif',
      ui: '"Manrope", Arial, sans-serif'
    },
    refined: {
      display: '"Marcellus", Georgia, serif',
      body: '"Manrope", Arial, sans-serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    magazine: {
      display: '"Prata", Georgia, serif',
      body: '"Montserrat", Arial, sans-serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    couture: {
      display: '"Italiana", Georgia, serif',
      body: '"Manrope", Arial, sans-serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    pinyon: {
      display: '"Pinyon Script", cursive',
      body: '"Cormorant Garamond", Georgia, serif',
      ui: '"Manrope", Arial, sans-serif'
    },
    saint: {
      display: '"Mrs Saint Delafield", cursive',
      body: '"Cormorant Garamond", Georgia, serif',
      ui: '"Manrope", Arial, sans-serif'
    },
    monteCarlo: {
      display: '"MonteCarlo", cursive',
      body: '"Cormorant Garamond", Georgia, serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    italianno: {
      display: '"Italianno", cursive',
      body: '"Lora", Georgia, serif',
      ui: '"Manrope", Arial, sans-serif'
    },
    imperial: {
      display: '"Imperial Script", cursive',
      body: '"Cormorant Garamond", Georgia, serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    tangerine: {
      display: '"Tangerine", cursive',
      body: '"Cormorant Garamond", Georgia, serif',
      ui: '"Manrope", Arial, sans-serif'
    },
    formalClassic: {
      display: '"Petit Formal Script", cursive',
      body: '"EB Garamond", Georgia, serif',
      ui: '"Manrope", Arial, sans-serif'
    },
    pinyonClassic: {
      display: '"Pinyon Script", cursive',
      body: '"EB Garamond", Georgia, serif',
      ui: '"Manrope", Arial, sans-serif'
    },
    monsieur: {
      display: '"Monsieur La Doulaise", cursive',
      body: '"Cormorant Garamond", Georgia, serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    alexBrush: {
      display: '"Alex Brush", cursive',
      body: '"Libre Baskerville", Georgia, serif',
      ui: '"Manrope", Arial, sans-serif'
    },
    rochester: {
      display: '"Rochester", cursive',
      body: '"Cormorant Garamond", Georgia, serif',
      ui: '"DM Sans", Arial, sans-serif'
    },
    traditionalWedding: {
      display: '"Petit Formal Script", cursive',
      body: '"EB Garamond", Georgia, serif',
      ui: '"Montserrat", Arial, sans-serif'
    },
    newIcon: {
      display: '"New Icon Script", "Pinyon Script", cursive',
      body: '"Cormorant Garamond", Georgia, serif',
      ui: '"Manrope", Arial, sans-serif'
    }
  }
};

window.WEDDING_CONFIG = {
  /*
    Identidade visual:
    - themePreset: cores do site inteiro.
    - heroFontPreset: tipografia exclusiva da abertura + primeira tela (hero).
    - fontPreset: tipografia usada no restante do convite e na lista de presentes.
  */
  themePreset: "vividPurple",
  heroFontPreset: "formalClassic",
  fontPreset: "poppins",

  /* Sobrescritas opcionais: deixe vazio para usar 100% do preset. */
  theme: {
    /* Exemplo de sobrescrita: accent: "#6B7A5A" */
  },

  /*
    Cores dos textos que ficam SOBRE fotografias.
    Use qualquer cor CSS (#fff, rgb, rgba, var(--...)).
    Assim, ao trocar uma foto clara/escura você não precisa procurar regras no CSS.
  */
  photoText: {
    opening: { text: "var(--white)", muted: "rgba(255,255,255,.76)", accent: "var(--accent-warm)" },
    hero: { text: "var(--white)", muted: "rgba(255,255,255,.70)", accent: "var(--accent-warm)" },
    dateBreak: { text: "var(--white)", muted: "rgba(255,255,255,.76)", accent: "var(--accent-warm)" }
  },

  couple: {
    firstName: "Liliane",
    secondName: "Igor",
    initials: "L · I",
    signature: "Com amor, Liliane & Igor"
  },

  wedding: {
    dateISO: "2027-04-03T17:00:00-03:00",
    endISO: "2027-04-03T00:00:00-03:00",
    shortDate: "03 · 04 · 27",
    longDate: "03 de Abril de 2027",
    weekday: "Sábado",
    day: "03",
    monthYear: "Abril · 2027",
    time: "17h00",
    city: "Itu · São Paulo",
    calendarTitle: "Casamento — Liliane & Igor",
    calendarDescription: "Celebração do casamento de Liliane e Igor."
  },

  opening: {
    enabled: true,
    showOncePerSession: false,
    eyebrow: "Você recebeu um convite especial",
    buttonLabel: "Abrir convite",
    mobileDragLabel: "Deslize para abrir",
    dragToOpenOnMobile: true,
    dragThreshold: 0.68,
    hint: "Uma celebração feita para compartilhar com quem amamos.",
    guestQueryParam: "convidado",
    guestPrefix: "Preparamos este convite para"
  },

  hero: {
    kicker: "Save the date",
    pretitle: "Temos a alegria de convidar você",
    image: "assets/images/hero.svg"
  },

  welcome: {
    eyebrow: "Nosso sim",
    title: "Um dia para guardar na memória. Uma história para celebrar juntos.",
    text: "Depois de tantos caminhos compartilhados, chegou o momento de abrirmos um novo capítulo. Queremos viver esse dia ao lado das pessoas que fizeram parte da nossa história — e você é uma delas."
  },

  story: {
    eyebrow: "De encontro em encontro",
    title: "O acaso virou escolha. A escolha virou casa.",
    year: "desde 2023",
    imageCaption: "nossa história, do nosso jeito",
    image: "assets/images/story.svg",
    paragraphs: [
      "Tudo começou sem grandes planos: uma conversa que durou mais do que deveria, um café que virou jantar e a sensação de que o tempo passava diferente quando estávamos juntos.",
      "Vieram viagens, mudanças, domingos preguiçosos, planos rabiscados em guardanapos e a certeza tranquila de que queríamos continuar escolhendo um ao outro. Agora, queremos celebrar essa escolha com vocês."
    ],
    quote: "Se o amor é uma soma de pequenos instantes, este será um dos nossos preferidos."
  },

  dateBreakImage: "assets/images/date-break.svg",

  events: [
    {
      title: "Cerimônia",
      time: "17h00 · chegada a partir das 16h30min",
      venue: "Paróquia São Luís Gonzaga",
      address: "R. Leonardo Piunti, 475 — São Luiz, Itu — SP",
      mapsUrl: "https://maps.app.goo.gl/cBcnP7PYY2Ed3Zdf9",
      mapsLabel: "Abrir no mapa"
    },
    {
      title: "Recepção",
      time: "19h00 · após a cerimônia",
      venue: "Paróquia São Luís Gonzaga",
      address: "R. Leonardo Piunti, 475 — São Luiz, Itu — SP",
      mapsUrl: "https://maps.app.goo.gl/cBcnP7PYY2Ed3Zdf9",
      mapsLabel: "Como chegar"
    }
  ],

  schedule: {
    note: "Os horários podem receber pequenos ajustes conforme o andamento da celebração.",
    items: [
      { time: "16:30", title: "Boas-vindas", text: "Chegue com calma, encontre seu lugar e aproveite o clima do dia." },
      { time: "17:00", title: "Cerimônia", text: "O momento em que dizemos sim diante das pessoas que amamos." },
      { time: "19:00", title: "Recepção", text: "Brindes, encontros, música e tudo o que faz uma boa celebração." },
      { time: "20:30", title: "Jantar", text: "Um menu preparado especialmente para esta noite." },
      { time: "21:00", title: "Pista aberta", text: "Sapatos confortáveis são oficialmente bem-vindos depois daqui." }
    ]
  },

  gallery: {
    title: "O amor também mora nos detalhes.",
    images: [
      { src: "assets/images/gallery-1.svg", alt: "Foto do casal", caption: "Capítulo 01" },
      { src: "assets/images/gallery-2.svg", alt: "Foto do casal", caption: "Capítulo 02" },
      { src: "assets/images/gallery-3.svg", alt: "Foto do casal", caption: "Capítulo 03" },
      { src: "assets/images/gallery-4.svg", alt: "Foto do casal", caption: "Capítulo 04" },
      { src: "assets/images/gallery-5.svg", alt: "Foto do casal", caption: "Capítulo 05" },
      { src: "assets/images/gallery-6.svg", alt: "Foto do casal", caption: "Capítulo 06" }
    ]
  },

  dressCode: {
    eyebrow: "Vista-se para celebrar",
    title: "Esporte fino",
    text: "Elegante, leve e confortável. Queremos que você se sinta à vontade para aproveitar cada momento da celebração.",
    note: "Pedimos carinho especial para que branco, off-white, champagne e tons muito claros fiquem reservados para a noiva.",
    image: "assets/images/dress-code.svg",
    palette: ["#3F4C39", "#7A8469", "#B8A58B", "#C9B8A4", "#4F3931"]
  },

  guestInfo: [
    { icon: "car", title: "Estacionamento", text: "Haverá estacionamento no local da recepção. Se for beber, considere táxi ou aplicativo." },
    { icon: "clock", title: "Pontualidade", text: "A cerimônia começa às 17h00. Recomendamos chegar com pelo menos 30 minutos de antecedência." },
    { icon: "heart", title: "Crianças", text: "Este exemplo aceita crianças. Ajuste aqui a política de convidados conforme cada casamento." },
    { icon: "camera", title: "Fotos", text: "Registre, compartilhe e marque os noivos. Durante a cerimônia, mantenha o corredor livre para a equipe de foto e vídeo." },
    { icon: "message", title: "Precisa de ajuda?", text: "Inclua aqui um telefone de cerimonialista ou pessoa de apoio para dúvidas no dia." }
  ],

  gifts: {
    eyebrow: "Se quiser nos presentear",
    title: "Sua presença já é o melhor presente.",
    text: "Mas, para quem quiser participar também dos nossos próximos sonhos, deixamos algumas opções. Esta seção pode ser removida sem afetar o restante do site.",
    links: [
      { label: "Lista de presentes", url: "presentes.html" },
    ]
  },

  faq: [
    { question: "Posso levar acompanhante?", answer: "Considere apenas os nomes indicados no convite. Caso exista acompanhante liberado, essa informação pode ser sinalizada no RSVP ou no convite personalizado." },
    { question: "Até quando preciso confirmar presença?", answer: "Pedimos que a confirmação seja feita até a data indicada na seção de RSVP. Isso nos ajuda muito com buffet, mesas e organização." },
    { question: "A cerimônia e a recepção são no mesmo local?", answer: "Neste exemplo, não. O site pode exibir um ou vários locais com botões de mapa e instruções específicas para cada etapa." },
    { question: "Vai ter estacionamento?", answer: "Sim, haverá estacionamento no local da recepção. Você também pode substituir esta resposta por informações de valet ou transporte." },
    { question: "Posso publicar fotos nas redes sociais?", answer: "Sim! Se o casal tiver uma hashtag, inclua aqui. Também é possível trocar esta resposta por um pedido de cerimônia unplugged." }
  ],

  rsvp: {
    eyebrow: "Confirmação de presença",
    title: "Você vem celebrar com a gente?",
    text: "Sua resposta é muito importante para organizarmos cada detalhe com carinho.",
    deadline: "10 de Novembro de 2027",
    buttonLabel: "Enviar confirmação",

    /* MODOS: "whatsapp", "form" ou "demo" */
    mode: "demo",

    /* Para WhatsApp: somente números, incluindo país e DDD. Ex.: 5511999999999 */
    whatsappNumber: "",

    /* Para formulário externo (Formspree etc.), use mode: "form" e cole a action abaixo. */
    formAction: "",
    successMessage: "Obrigada! Sua confirmação foi recebida.",

    collectMealPreference: true
  },

  share: {
    title: "Convite de casamento — Liliane & Igor",
    text: "Você é nosso convidado para celebrar este dia com a gente."
  },

  music: {
    enabled: true,
    file: "assets/audio/musica2.mp3",
    labelPlay: "Música",
    labelPause: "Pausar"
  },

  images: {
    rsvp: "assets/images/rsvp.svg"
  }
};
