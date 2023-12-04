import { Request, Response } from "express";
import clientServices from "../services/client.services";
import { ClientRead, ClientReturn } from "../interfaces/client.interface";

const createClient = async (req: Request, res: Response): Promise<Response> => {
    try {
        const newClient: ClientReturn = await clientServices.create(req.body);
        return res.status(201).json(newClient);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const readClients = async (req: Request, res: Response): Promise<Response> => {
    try {
        const clients: ClientRead = await clientServices.read();
        return res.status(200).json(clients);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const updatePartialClient = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { foundClient } = res.locals;
        const { body } = req;

        const updatedClient: ClientReturn = await clientServices.partialUpdate(
            foundClient,
            body
        );

        return res.status(200).json(updatedClient);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const destroyClient = async (req: Request, res: Response): Promise<Response> => {
    try {
        const foundClient = res.locals.foundClient;
        await clientServices.destroy(foundClient);

        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
export default { createClient, readClients, destroyClient, updatePartialClient };