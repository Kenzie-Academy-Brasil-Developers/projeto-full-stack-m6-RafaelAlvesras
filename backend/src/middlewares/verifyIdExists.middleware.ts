import { NextFunction, Request, Response } from "express";
import Client from "../entities/Client.entity";
import { repositoryClient } from "../repositories";
import AppError from "../errors/App.error";

export const verifyIdExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const id: string = (req.params.id);
    const foundClient: Client | null = await repositoryClient.findOneBy({ id });
    if (!foundClient) throw new AppError("Client not found", 404);
    if (foundClient.deletedAt) throw new AppError("Client deleted", 404);

    res.locals = { ...res.locals, foundClient };

    return next();
};