import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ContactsContext } from "../../providers/ContactsContext.jsx";
import { updateContactSchema } from "./UpdateContactSchema.js";
import { StyledUpdateForm } from "./StyledFormUpdate.js";

export const UpdateContactForm = () => {
    const { updateContact, handleContact } = useContext(ContactsContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(updateContactSchema),
    });

    const submit = (formData) => {
        const handleContacId = handleContact.id
        updateContact(handleContacId, formData);
    };

    return (
        <StyledUpdateForm onSubmit={handleSubmit(submit)}>
            <input
                type="text"
                defaultValue={handleContact.fullName}
                name="fullName"
                autoComplete="username"
                {...register("fullName")}
            />
            <span>{errors.fullName?.message}</span>
            <input
                type="email"
                defaultValue={handleContact.email}
                name="email"
                {...register("email")}
            />
            <span>{errors.email?.message}</span>
            <input
                type="text"
                defaultValue={handleContact.phoneNumber}
                name="phoneNumber"
                {...register("phoneNumber")}
            />
            <span>{errors.phoneNumber?.message}</span>
            <input
                type="text"
                defaultValue={handleContact.nickName}
                name="nickName"
                {...register("nickName")}
            />
            <span>{errors.nickName?.message}</span>
            <button type="submit">editar contato</button>
        </StyledUpdateForm>
    );
};