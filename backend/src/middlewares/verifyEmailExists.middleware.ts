import { NextFunction, Request, Response } from "express";
import Client from "../entities/Client.entity";
import AppError from "../errors/App.error";
import { repositoryClient } from "../repositories";

export const verifyEmailExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { email } = req.body;

    if (!email) {
        return next();
    }

    const foundClientMail: Client | null = await repositoryClient.findOneBy({ email });

    if (foundClientMail) {
        throw new AppError("Email already in use", 409);
    }

    return next();
};