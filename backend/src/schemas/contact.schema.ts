import { z } from "zod";

const contactSchema = z.object({
    id: z.string(),
    fullName: z.string().max(45),
    nickName: z.string().max(45),
    email: z.string().max(45).email(),
    createdAt: z.string(),
    phoneNumber: z.string().max(45),
});

const contactCreateSchema = contactSchema.omit({
    id: true,
    createdAt: true,
    client: true,
});

const contactReturnSchema = contactSchema;
const contactReadSchema = contactReturnSchema.array();
const contactUpdateSchema = contactSchema.omit({ id: true }).partial();

export {
    contactCreateSchema,
    contactReadSchema,
    contactReturnSchema,
    contactUpdateSchema,
};