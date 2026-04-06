import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const prompts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/prompts" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]),
    genre: z.string(),
    mood: z.string(),
    instruments: z.array(z.string()).default([]),
    suno_model: z.string().default("v4"),
    prompt: z.string(),
    negative_prompt: z.string().default(""),
    rating: z.number().min(1).max(5).optional(),
    starred: z.boolean().default(false),
    suno_url: z.string().url().optional(),
    created: z.coerce.date(),
    updated: z.coerce.date(),
  }),
});

const templates = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/templates" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    genre: z.string(),
    mood: z.string(),
    prompt_template: z.string(),
    negative_prompt_template: z.string().default(""),
    variables: z.array(z.string()).default([]),
    created: z.coerce.date(),
    updated: z.coerce.date(),
  }),
});

export const collections = { prompts, templates };
