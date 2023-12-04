import { Request, Response } from "express";
import clientServices from "../services/client.services";
import { ClientRead, ClientReturn } from "../interfaces/client.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
    const client: ClientReturn = await clientServices.create(req.body);

    return res.status(201).json(client);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const clients: ClientRead = await clientServices.read();
    return res.status(200).json(clients);
};

const partialUpdate = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { foundClient } = res.locals;
    const { body } = req;

    const client: ClientReturn = await clientServices.partialUpdate(
        foundClient,
        body
    );

    return res.status(200).json(client);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await clientServices.destroy(res.locals.foundClient);

    return res.status(204).json();
};

export default { create, read, destroy, partialUpdate };