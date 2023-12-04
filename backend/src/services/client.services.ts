import Client from "../entities/Client.entity";
import {
  ClientCreate,
  ClientRead,
  ClientReturn,
  ClientUpdate,
} from "../interfaces/client.interface";
import { repositoryClient } from "../repositories";
import {
  clientReadSchema,
  clientReturnSchema,
} from "../schemas/client.schema";

const create = async (payload: ClientCreate): Promise<ClientReturn> => {
  const client: Client = repositoryClient.create(payload);
  await repositoryClient.save(client);

  return clientReturnSchema.parse(client);
};

const read = async (): Promise<ClientRead> => {
  const clients = await repositoryClient.find({ relations: ["contacts"] });
  return clientReadSchema.parse(clients);
};

const partialUpdate = async (
  client: Client,
  payload: ClientUpdate
): Promise<ClientReturn> => {
  const updatedClient = await repositoryClient.save({ ...client, ...payload });

  return clientReturnSchema.parse(updatedClient);
};

const destroy = async (client: Client): Promise<void> => {
  await repositoryClient.softRemove(client);
};

export default { create, read, destroy, partialUpdate };