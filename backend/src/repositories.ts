import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import Client from "./entities/Client.entity";
import Contact from "./entities/Contact.entity";

const repositoryClient: Repository<Client> = AppDataSource.getRepository(Client);
const repositoryContact: Repository<Contact> = AppDataSource.getRepository(Contact);

export { repositoryClient, repositoryContact };