import { Request, Response, NextFunction } from "express";
import { repositoryContact } from "../repositories";
import AppError from '../errors/App.error';

const verifyContactId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const clientId = res.locals.decoded.sub;
        const { contactId } = req.params;

        const contact = await repositoryContact.findOneBy({
            id: contactId,
            client: { id: clientId },
        });

        if (!contact) {
            throw new AppError("Contact not found or permition denied", 404);
        }

        res.locals.contact = contact;

        next();
    } catch (error) {
        next(error);
    }
};

export default verifyContactId;