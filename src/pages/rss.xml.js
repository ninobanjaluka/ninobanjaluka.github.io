import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { filterSrCompanions } from "../utils/posts";

export async function GET(context) {
  const photography = filterSrCompanions(await getCollection('photography', ({ data }) => !data.draft))
    .map(p => ({ ...p, href: `/photography/${p.id}` }));
  const code = filterSrCompanions(await getCollection('code', ({ data }) => !data.draft))
    .map(p => ({ ...p, href: `/code/${p.id}` }));
  const art = filterSrCompanions(await getCollection('art', ({ data }) => !data.draft))
    .map(p => ({ ...p, href: `/art/${p.id}` }));
  const life = filterSrCompanions(await getCollection('life', ({ data }) => !data.draft))
    .map(p => ({ ...p, href: `/life/${p.id}` }));

  const allPosts = [...photography, ...code, ...art, ...life].sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: "nino — photography, code, art & life",
    description: "Photography, coding adventures, art and life in Banja Luka.",
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: post.href,
    })),
  });
}
