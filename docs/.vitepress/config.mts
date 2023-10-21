import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BG39",
  description:
    "Velkommen til Sameiet i Bjerregaards gate 39. På vår nettside finner du informasjon om sameiet, våre tjenester, og viktig informasjon for beboere. Vi jobber for å skape et trygt og trivelig bomiljø. Utforsk våre ressurser og hold deg oppdatert om fellesprosjekter og arrangementer. Sammen gjør vi sameiet til et flott sted å bo.",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { property: "og:title", content: "BG39" }],
    ["meta", { property: "og:image", content: "https://www.bg39.no/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "BG39, bjerregaardsgate39, bjerregaards gate 39, sameiet bjerregaards gate 39, Sameiet Bjerregaardsgt. 39",
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
    hostname: "https://www.bg39.no",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebarMenuLabel: "Meny",
    returnToTopLabel: "Gå til toppen",
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
      { text: "Beboerguide", link: "/beboerguide/ny-beboer.md" },
      { text: "Kontakt", link: "/kontakt.md" },
    ],

    sidebar: [
      {
        text: "Beboerguide",
        items: [
          { text: "Ny beboer", link: "/beboerguide/ny-beboer.md" },
          { text: "Avfall og søppel", link: "/beboerguide/avfall-og-søppel.md" },
          { text: "Fyring og varmtvann", link: "/beboerguide/fyring-og-varmtvann.md" },
        ],
      },
      {
        text: "Husordensregler og vedtekter",
        items: [
          { text: "Husordensregler", link: "/beboerguide/husordensregler.md" },
          { text: "Vedtekter", link: "/beboerguide/vedtekter.md" },
        ],
      },
      {
        text: "HMS",
        items: [
          { text: "Brannvern", link: "/beboerguide/brannvern.md" },
          { text: "Branninstruks", link: "/beboerguide/branninstruks.md" },
          { text: "Generelt om HMS", link: "/beboerguide/hms.md" },
        ],
      },
    ],
  },
});
