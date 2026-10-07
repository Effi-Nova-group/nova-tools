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

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      client: z.string(),
      sector: z.string(),
      title: z.string(),
      subtitle: z.string(),
      // Some studies ship without a brand logo or a campaign screenshot.
      logo: image().optional(),
      heroImage: image().optional(),
      stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      featured: z.boolean().default(false),
      publishedAt: z.coerce.date(),
      metaTitle: z.string(),
      metaDescription: z.string(),
      ctaHeading: z.string(),
      ctaBody: z.string(),
    }),
});

export const collections = { blog, caseStudies };
