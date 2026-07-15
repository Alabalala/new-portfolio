import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
    schema: z.object({
      title: z.string(),
      image: z.string(),
      color: z.string().optional(),
      tags: z.array(z.string()).optional(),
      link: z.url().optional(),
      summary: z.string().optional(),
      blog: z.boolean().optional(),
      date: z.coerce.date(),
      locale: z.string(),
    }),
  }),
  blogs: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      cover: z.string().optional(),
      locale: z.string().optional(),
    }),
  }),
};
