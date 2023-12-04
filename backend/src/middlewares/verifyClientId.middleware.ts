import { Request, Response, NextFunction } from "express";
import { repositoryClient } from "../repositories";
import AppError from "../errors/App.error";

const verifyClientId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const clientId = res.locals.decoded.sub;
        const { clientProfileId } = req.params;

        const client = await repositoryClient.findOneBy({
            id: clientProfileId,
        });

        if (!client || client.id !== clientId) {
            throw new AppError(
                "Permition denied",
                403
            );
        }

        res.locals.client = client;

        next();
    } catch (error) {
        next(error);
    }
};

export default verifyClientId;