import { createContentLoader } from "vitepress";
import { formatDistance } from "date-fns";
import { nb } from "date-fns/locale";
import type { Post } from "./theme-types";

const pattern = "/.vitepress/aktuelt/posts/**/*.md";

const data = [] as Post[];
export { data };

const unionLineBreaks = (utdrag: string) => {
  let formattedContent = utdrag.replace(/\n/g, "\n\n");
  formattedContent = formattedContent.replace(/\n\s*\n/g, "\n\n");
  return formattedContent;
};

export default createContentLoader(pattern, {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        author: frontmatter.author ?? "Styret",
        url,
        excerpt: unionLineBreaks(frontmatter.utdrag),
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time);
  },
});

function formatDate(raw: string) {
  const date = new Date(raw);
  const withoutTime = new Date(date.toISOString());
  return {
    raw: withoutTime,
    time: +date,
    formatted: withoutTime.toLocaleDateString("nb-NO"),
    since: formatDistance(withoutTime, new Date(), { addSuffix: true, locale: nb }),
  };
}
