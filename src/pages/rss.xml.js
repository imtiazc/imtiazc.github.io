import rss from '@astrojs/rss';
import { SITE } from '../site';
import { getPosts } from '../lib';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: `${SITE.name} — Writing`,
    description: SITE.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.summary,
      link: `/writing/${p.id}/`,
    })),
  });
}
