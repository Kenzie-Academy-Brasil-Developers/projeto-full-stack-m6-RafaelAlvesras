import { registerSchema } from "./RegisterSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../providers/UserContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const FormRegister = () => {
    const { registerClient } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const submit = async (formData) => {
        registerClient(formData);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input
                type="text"
                placeholder="Digite aqui seu nome"
                name="fullName"
                autoComplete="username"
                {...register("fullName")}
            />
            <span>{errors.fullName?.message}</span>
            <input
                type="email"
                placeholder="Digite aqui seu email"
                name="email"
                {...register("email")}
            />
            <span>{errors.email?.message}</span>
            <input
                type="password"
                placeholder="Digite aqui sua senha"
                name="password"
                autoComplete="current-password"
                {...register("password")}
            />
            <span>{errors.password?.message}</span>
            <input
                type="text"
                placeholder="seu número de telefone"
                name="phoneNumber"
                {...register("phoneNumber")}
            />
            <span>{errors.phone?.message}</span>
            <button type="submit">Cadastrar</button>
            <p>ou</p>
            <Link to={"/"}>Home</Link>
        </form>
    );
};