import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BG39",
  description: "BG39 nettside",
  locales: {
    root: {
      lang: "no-NO", // Norwegian Bokmål
      label: "Norsk",
    },
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
      { text: "Beboerguide", link: "/innlegg/ny-beboer.md" },
      { text: "Husordensregler og vedtekter", link: "/innlegg/ordenogvedtekter.md" },
      { text: "Aktuelt", link: "/aktuelt/index.md" },
    ],

    sidebar: [
      {
        text: "Beboerguide",
        items: [{ text: "Ny beboer", link: "/innlegg/ny-beboer.md" }],
      },
      {
        text: "Husordensregler og vedtekter",
        items: [{ text: "Husordensregler", link: "/innlegg/ordenogvedtekter" }],
      },
      {
        items: [{ text: "Kontakt oss", link: "/innlegg/kontakt" }],
      },
    ],
  },
});
