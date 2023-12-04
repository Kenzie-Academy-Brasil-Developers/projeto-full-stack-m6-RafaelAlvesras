import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: 'Digite seu email.' }),
  password: z.string().min(1, { message: 'Digite sua senha.' }),
});