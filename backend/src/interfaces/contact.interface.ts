import { z } from "zod";
import { contactCreateSchema, contactReturnSchema, contactReadSchema } from "../schemas/contact.schema";
import { DeepPartial } from "typeorm";
import Contact from "../entities/Contact.entity";

type ContactCreate = z.infer<typeof contactCreateSchema>;
type ContactRead = z.infer<typeof contactReadSchema>;
type ContactReturn = z.infer<typeof contactReturnSchema>;
type ContactUpdate = DeepPartial<Contact>;

export { ContactReturn, ContactCreate, ContactRead, ContactUpdate };