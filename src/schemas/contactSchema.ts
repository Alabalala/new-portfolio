import { z } from "zod";

export const contactSchema = z.object({
    name: z.string()
    .trim()
    .min(1, "❗Name shouldn't be empty")
    .min(3, "❗Name should be longer than 3 characters."),
    email: z.string().email("❗Invalidad email address"),
    message: z.string()
    .trim()
    .min(1, "❗Message shouldn't be empty")
    .min(10, "❗Message must be longer than 10 characters"),
  });