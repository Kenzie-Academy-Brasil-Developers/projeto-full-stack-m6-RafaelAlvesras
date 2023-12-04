import { Request, Response } from "express";
import { LoginReturn } from "../interfaces/login.interface";
import loginServices from "../services/login.services";

export const loginController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const login: LoginReturn = await loginServices.createLoginToken(req.body);
    return res.status(200).json(login);
};

export default { loginController };