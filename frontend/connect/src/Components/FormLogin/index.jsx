import { loginSchema } from "./loginSchema.js";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../providers/UserContext.jsx";
import { Link } from "react-router-dom";
import { StyledForm } from "./StyledFormLogin.js";

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
        <StyledForm onSubmit={handleSubmit(submit)}>
            <label htmlFor="email">e-mail</label>
            <input
                type="email"
                placeholder="Digite aqui seu email"
                name="email"
                autoComplete="username"
                {...register("email")}
            />
            <span className="errorWarn">{errors.email?.message}</span>
            <label htmlFor="password">senha</label>
            <input
                type="password"
                placeholder="Digite aqui sua senha"
                name="password"
                autoComplete="current-password"
                {...register("password")}
            />
            <span className="errorWarn">{errors.password?.message}</span>
            <div>
                <button className="link" type="submit">Login</button>
                <p>ou</p>
                <Link to={"/registerPage"} className="link">cadastre-se</Link>
            </div>
        </StyledForm>
    );
};