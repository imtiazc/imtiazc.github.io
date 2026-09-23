import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    period: z.string(),
    summary: z.string(),
    // Headline metrics shown on the card and at the top of the case study.
    metrics: z.array(z.object({ value: z.coerce.string(), label: z.string() })).default([]),
    stack: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, writing };
