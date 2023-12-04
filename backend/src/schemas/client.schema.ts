import { z } from "zod";
import { contactReadSchema } from "./contact.schema";
const clientSchema = z.object({
    id: z.string(),
    fullName: z.string().max(45),
    email: z.string().max(45).email(),
    password: z.string().max(120),
    createdAt: z.string(),
    phoneNumber: z.string().max(45),
});

const clientCreateSchema = clientSchema.omit({
    id: true,
    createdAt: true,
});

const clientReturnSchema = clientSchema.omit({ password: true })
const clientReadSchema = clientReturnSchema.extend({
    contacts: contactReadSchema,
}).array();
const clientUpdateSchema = clientSchema.omit({ id: true }).partial();

export {
    clientCreateSchema,
    clientReadSchema,
    clientReturnSchema,
    clientUpdateSchema,
};