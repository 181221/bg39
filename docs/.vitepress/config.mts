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
      { text: "Beboerguide", link: "/ny-beboer.md" },
      { text: "Husordensregler og vedtekter", link: "/ordenogvedtekter.md" },
    ],

    sidebar: [
      {
        text: "Beboerguide",
        items: [{ text: "Ny beboer", link: "/ny-beboer.md" }],
      },
      {
        text: "Husordensregler og vedtekter",
        items: [{ text: "Husordensregler", link: "/ordenogvedtekter" }],
      },
    ],
  },
});
