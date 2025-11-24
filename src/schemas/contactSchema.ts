import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(3, "nameMinLength"),
  email: z.string().email("emailInvalid"),
  message: z.string().trim().min(10, "messageMinLength"),
});
