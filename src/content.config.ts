import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  excerpt: z.string(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional().default(false),
  pinned: z.boolean().optional().default(false),
  coverImage: z.string().optional(),
});

const photography = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/photography' }),
  schema: baseSchema.extend({
    camera: z.string().optional(),
    location: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

const code = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/code' }),
  schema: baseSchema.extend({
    tech: z.array(z.string()).optional(),
    repo: z.string().url().optional(),
    coverImage: z.string().optional(),
  }),
});

const life = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/life' }),
  schema: baseSchema,
});

const art = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/art' }),
  schema: baseSchema.extend({
    medium: z.string().optional(),
    tools: z.array(z.string()).optional(),
  }),
});

export const collections = { photography, code, life, art };
