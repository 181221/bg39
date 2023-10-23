import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sameiet",
  titleTemplate: "BG 39",
  description:
    "Velkommen til Sameiet i Bjerregaards gate 39. På vår nettside finner du informasjon om sameiet, våre tjenester, og viktig informasjon for beboere. Vi jobber for å skape et trygt og trivelig bomiljø. Utforsk våre ressurser og hold deg oppdatert om fellesprosjekter og arrangementer. Sammen gjør vi sameiet til et flott sted å bo.",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { property: "og:title", content: "Sameiet - BG39" }],
    ["meta", { property: "og:url", content: "https://www.bg39.no" }],
    ["meta", { property: "og:image", content: "https://www.bg39.no/husikon.svg" }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:description", content: "Velkommen til Sameiet i Bjerregaards gate 39" }],
    [
      "meta",
      {
        name: "keywords",
        content: "BG39, BG 39, bjerregaardsgate39, bjerregaards gate 39, sameiet bjerregaards gate 39, Sameiet Bjerregaardsgt. 39, sameie",
      },
    ],
    ["meta", { name: "author", content: "Styret" }],
  ],
  locales: {
    root: {
      lang: "no-NO", // Norwegian Bokmål
      label: "Norsk",
    },
  },
  sitemap: {
    hostname: "https://bg39.no",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebarMenuLabel: "Meny",
    returnToTopLabel: "Gå til toppen",
    darkModeSwitchLabel: "Utseende",
    search: {
      provider: "local",
      options: {
        translations: {
          modal: {
            backButtonTitle: "Tilbakestill",
            noResultsText: "Ingen resultater funnet for",
            footer: { closeText: "Lukk", navigateText: "Naviger", selectText: "Velg" },
          },
          button: { buttonText: "Søk" },
        },
      },
    },
    lastUpdated: {
      text: "Sist oppdatert",
      formatOptions: { year: "numeric", month: "long", day: "numeric" },
    },
    outline: {
      label: "På denne siden",
      level: "deep",
    },
    docFooter: {
      next: "Neste side",
      prev: "Forrige side",
    },
    nav: [
      { text: "Hjem", link: "/" },
      { text: "Beboerguide", link: "/beboerguide/ny-beboer" },
      { text: "Aktuelt", link: "/aktuelt/index" },
      { text: "Kontakt", link: "/kontakt" },
    ],

    sidebar: [
      {
        text: "Beboerguide",
        items: [
          { text: "Ny beboer", link: "/beboerguide/ny-beboer" },
          { text: "Avfall og søppel", link: "/beboerguide/avfall-og-soppel" },
          { text: "Fyring og varmtvann", link: "/beboerguide/fyring-og-varmtvann" },
        ],
      },
      {
        text: "Husordensregler og vedtekter",
        items: [
          { text: "Husordensregler", link: "/beboerguide/husordensregler" },
          { text: "Vedlikeholdsplikt", link: "/beboerguide/seksjonseierens-vedlikeholdsplikt" },
          { text: "Vedtekter", link: "/beboerguide/vedtekter" },
        ],
      },
      {
        text: "HMS",
        items: [
          { text: "Brannvern", link: "/beboerguide/brannvern" },
          { text: "Branninstruks", link: "/beboerguide/branninstruks" },
          { text: "Generelt om HMS", link: "/beboerguide/hms" },
        ],
      },
      {
        text: "Kontakt",
        items: [{ text: "Kontaktinformasjon", link: "/kontakt" }],
      },
    ],
  },
});
