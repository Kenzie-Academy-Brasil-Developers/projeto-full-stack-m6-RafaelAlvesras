import { z } from "zod";
import {
    clientCreateSchema,
    clientReadSchema,
    clientReturnSchema,
} from "../schemas/client.schema";
import { DeepPartial } from "typeorm";
import Client from "../entities/Client.entity";

type ClientCreate = z.infer<typeof clientCreateSchema>;
type ClientRead = z.infer<typeof clientReadSchema>;
type ClientReturn = z.infer<typeof clientReturnSchema>;
type ClientUpdate = DeepPartial<Client>;

export { ClientCreate, ClientRead, ClientUpdate, ClientReturn };