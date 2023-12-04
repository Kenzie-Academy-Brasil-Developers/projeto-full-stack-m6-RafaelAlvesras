import { Request, Response } from "express";
import contactServices from "../services/contact.services";
import {
    ContactRead,
    ContactReturn,
} from "../interfaces/contact.interface";
import AppError from "../errors/App.error";
import { repositoryClient } from "../repositories";

const create = async (req: Request, res: Response): Promise<Response> => {
    const clientId = res.locals.decoded.sub;
    const client = await repositoryClient.findOne({ where: { id: clientId } });
    console.log(clientId);
    if (!client) {
        throw new AppError("Client not found", 404);
    }

    const contactPayload = { ...req.body, client: clientId };

    const contact: ContactReturn = await contactServices.create(contactPayload);

    return res.status(201).json(contact);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    try {
        const clientId = res.locals.decoded.sub;
        const contacts: ContactRead = await contactServices.read(clientId);

        return res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const partialUpdate = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { contactId } = req.params;
    const clientId = res.locals.decoded.sub;

    const { body } = req;

    const contact: ContactReturn = await contactServices.partialUpdate(
        clientId,
        contactId,
        body
    );

    return res.status(200).json(contact);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
    const { contactId } = req.params;
    const clientId = res.locals.decoded.sub;
    await contactServices.destroy(clientId, contactId);

    return res.status(204).json();
};
export default { create, read, destroy, partialUpdate };
