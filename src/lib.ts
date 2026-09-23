import { getCollection } from 'astro:content';

// Drafts are visible under `npm run dev` but never in a production build.
export async function getPosts() {
  const posts = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getWork() {
  const work = await getCollection('work');
  return work.sort((a, b) => a.data.order - b.data.order);
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
