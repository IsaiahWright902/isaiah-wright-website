import { z } from "zod";

export const sendEmailValidator = z.object({
  toEmail: z.string().email().min(1).max(255),
  name: z.string().min(1).max(255),
  subject: z.string().min(1).max(255),
  message: z.string().min(1).max(255),
});

export type SendEmailDTO = z.infer<typeof sendEmailValidator>;
