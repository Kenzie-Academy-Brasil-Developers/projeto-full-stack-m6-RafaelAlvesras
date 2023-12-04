import { z } from "zod";

export const updateContactSchema = z
    .object({
        fullName: z
            .string()
            .min(1, { message: 'Digite seu nome.' })
            .min(2, "O nome precisa conter pelo menos 2 caracteres."),
        email: z
            .string()
            .min(1, { message: "O e-mail é obrigatório" })
            .email("O e-mail fornecido é inválido"),
        phoneNumber: z.string().min(1, { message: "insira o número de telefone" }),
        nickName: z
            .string()
            .min(1, { message: 'Digite seu nome.' })
            .min(2, "O nome precisa conter pelo menos 2 caracteres."),
    })