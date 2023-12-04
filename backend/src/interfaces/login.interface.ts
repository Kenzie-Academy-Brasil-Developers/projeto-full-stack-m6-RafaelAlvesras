import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";
import { ClientReturn } from "./client.interface";

export type LoginRequest = z.infer<typeof loginSchema>;
export type LoginReturn = {
    token: string;
    client: ClientReturn;
};