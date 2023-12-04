import { z } from "zod";

export const registerSchema = z
    .object({
        fullName: z
            .string()
            .min(1, { message: 'Digite seu nome.' })
            .min(2, "O nome precisa conter pelo menos 2 caracteres."),
        email: z
            .string()
            .min(1, { message: "O e-mail é obrigatório" })
            .email("O e-mail fornecido é inválido"),
        password: z
            .string()
            .min(1, { message: "A senha é obrigatória" })
            .min(8, "A senha deve ter no mínimo 8 caracteres")
            .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
            .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
            .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
            .regex(
                /^(?=.*\d).+$/,
                "A senha deve conter pelo menos um caractere especial"
            ),
            phoneNumber: z.string().min(1, { message: "insira o número de telefone" })
    })