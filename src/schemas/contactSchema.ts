import { z } from 'astro:schema';

export const contactSchema = z.object({
    name: z.string().trim().min(3, "Name is required"),
    email: z.string().email("Invalidad email address"),
    message: z.string().min(5, "Message must be longer"),
  });