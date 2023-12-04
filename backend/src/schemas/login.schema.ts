import { z } from "zod";
import { clientReturnSchema } from "./client.schema";

const loginSchema = z.object({
    email: z.string().max(45).email(),
    password: z.string().max(120),
});

const loginReturnSchema = z.object({
    token: z.string(),
    client: clientReturnSchema,
});

export { loginSchema, loginReturnSchema };