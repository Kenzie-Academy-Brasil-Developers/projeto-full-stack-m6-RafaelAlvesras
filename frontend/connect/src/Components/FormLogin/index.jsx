import { loginSchema } from "./LoginSchema";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../providers/UserContext.jsx";
import { Link } from "react-router-dom";

export const FormLogin = () => {

    const { loginClient } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const submit = async (formData) => {
        await loginClient(formData);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input
                type="email"
                placeholder="Digite aqui seu email"
                name="email"
                autoComplete="username"
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
            <button type="submit">Login</button>
            <p>ou</p>
            <Link to={"/registerPage"}>cadastre-se</Link>
        </form>
    );
};