import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    number: z.string(),
    audience: z.array(z.string()),
    deliverables: z.array(z.string()),
    timeline: z.string(),
    featured: z.boolean().default(false),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    market: z.string(),
    summary: z.string(),
    order: z.number(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    topic: z.string(),
    readingTime: z.string(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({ name: z.string(), role: z.string(), bio: z.string() }),
});

export const collections = { services, cases, insights, authors };
