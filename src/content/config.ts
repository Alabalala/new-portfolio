import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      image: z.string(),
      color: z.string().optional(),
      tags: z.array(z.string()).optional(),
      link: z.string().url().optional(),
      date: z.date(),
      locale: z.string(),
    }),
  }),
};
