import { createContactSchema } from "./CreateContactSchema.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ContactsContext } from "../../providers/ContactsContext.jsx";
import { StyledCreateForm } from "./StyledFormCreate.js";

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
        <StyledCreateForm onSubmit={handleSubmit(submit)}>
            <label htmlFor="fullName">Nome</label>
            <input
                type="text"
                placeholder="Digite o nome do seu contato."
                id="fullName"
                autoComplete="username"
                {...register("fullName")}
            />
            <span className="errorWarn">{errors.fullName?.message}</span>
            <label htmlFor="email">E-mail</label>
            <input
                type="email"
                placeholder="Digite aqui o email do seu contato."
                id="email"
                {...register("email")}
            />
            <span className="errorWarn">{errors.email?.message}</span>
            <label htmlFor="phoneNumber">Telefone</label>            
            <input
                type="text"
                placeholder="Digite o número de telefone."
                id="phoneNumber"
                {...register("phoneNumber")}
            />
            <span className="errorWarn">{errors.phoneNumber?.message}</span>
            <label htmlFor="nickName">Apelido</label>  
            <input
                type="text"
                placeholder="Digite o apelido."
                id="nickName"
                {...register("nickName")}
            />
            <span className="errorWarn">{errors.nickName?.message}</span>
            <button type="submit">Criar contato</button>
        </StyledCreateForm>
    );
};