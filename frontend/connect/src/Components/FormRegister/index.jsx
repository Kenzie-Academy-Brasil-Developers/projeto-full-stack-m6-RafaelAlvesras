import { registerSchema } from "./RegisterSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../providers/UserContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StyledForm } from "./StyledFormRegister.js";

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
        <StyledForm onSubmit={handleSubmit(submit)}>
            <input
                type="text"
                placeholder="Digite aqui seu nome"
                name="fullName"
                autoComplete="username"
                {...register("fullName")}
            />
            <span className="errorWarn">{errors.fullName?.message}</span>
            <input
                type="email"
                placeholder="Digite aqui seu email"
                name="email"
                {...register("email")}
            />
            <span className="errorWarn">{errors.email?.message}</span>
            <input
                type="password"
                placeholder="Digite aqui sua senha"
                name="password"
                autoComplete="current-password"
                {...register("password")}
            />
            <span className="errorWarn">{errors.password?.message}</span>
            <input
                type="text"
                placeholder="seu número de telefone"
                name="phoneNumber"
                {...register("phoneNumber")}
            />
            <span className="errorWarn">{errors.phoneNumber?.message}</span>
            <div>
                <button className="link" type="submit">Cadastrar</button>
                <p>ou</p>
                <Link className="link" to={"/"}>Home</Link>
            </div>
        </StyledForm>
    );
};