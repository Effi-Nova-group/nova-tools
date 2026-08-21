import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    tag: z.string(),
    readTime: z.string(),
    date: z.string(),
    lead: z.string(),
    image: z.string(),
    keywords: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { blog };
