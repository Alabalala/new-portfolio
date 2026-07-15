import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      image: z.string(),
      color: z.string().optional(),
      tags: z.array(z.string()).optional(),
      link: z.string().url().optional(),
      summary: z.string().optional(),
      blog: z.boolean().optional(),
      date: z.date(),
      locale: z.string(),
    }),
  }),
  blogs: defineCollection({
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      date: z.date(),
      cover: z.string().optional(),
      locale: z.string().optional(),
    }),
  }),
};
