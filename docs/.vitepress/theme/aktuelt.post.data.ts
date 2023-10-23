import { createContentLoader } from "vitepress";
import { formatDistance } from "date-fns";
import { nb } from "date-fns/locale";
import type { Post } from "./theme-types";

const pattern = "/aktuelt/posts/**/*.md";

const data = [] as Post[];
export { data };

export default createContentLoader(pattern, {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        author: frontmatter.author ?? "Styret",
        url,
        excerpt: frontmatter.utdrag,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time);
  },
});

function formatDate(raw: string) {
  const date = new Date(raw);
  return {
    raw: date.toISOString().split("T")[0],
    time: +date,
    formatted: date.toLocaleDateString("nb-NO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    since: "Opprettet: " + formatDistance(date, new Date(), { addSuffix: true, locale: nb }),
  };
}
