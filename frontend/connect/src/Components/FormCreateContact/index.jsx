import { createContactSchema } from "./CreateContactSchema.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ContactsContext } from "../../providers/ContactsContext.jsx";

export const CreateContactForm = () => {
    const { createContact } = useContext(ContactsContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(createContactSchema),
    });

    const submit = async (formData) => {
        createContact(formData);
    };
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input
                type="text"
                placeholder="Digite o nome do seu contato."
                name="fullName"
                autoComplete="username"
                {...register("fullName")}
            />
            <span>{errors.fullName?.message}</span>
            <input
                type="email"
                placeholder="Digite aqui o email do seu contato."
                name="email"
                {...register("email")}
            />
            <span>{errors.email?.message}</span>
            <input
                type="text"
                placeholder="Digite o número de telefone."
                name="phoneNumber"
                {...register("phoneNumber")}
            />
            <span>{errors.phoneNumber?.message}</span>
            <input
                type="text"
                placeholder="Digite o apelido."
                name="nickName"
                {...register("nickName")}
            />
            <span>{errors.nickName?.message}</span>
            <button type="submit">Criar contato</button>
        </form>
    );
};