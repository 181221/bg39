export interface Post {
  title: string;
  author: string;
  url: string;
  date: {
    raw: string;
    time: number;
    formatted: string;
    since: string;
  };
  excerpt: string | undefined;
}
