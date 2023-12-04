import Contact from "../entities/Contact.entity";
import { repositoryContact } from "../repositories";
import {
  contactReadSchema,
  contactReturnSchema,
} from "../schemas/contact.schema";
import {
  ContactCreate,
  ContactRead,
  ContactReturn,
  ContactUpdate,
} from "../interfaces/contact.interface";
import AppError from "../errors/App.error";

const create = async (payload: ContactCreate): Promise<ContactReturn> => {
  const contact: Contact = repositoryContact.create(payload);
  await repositoryContact.save(contact);

  return contactReturnSchema.parse(contact);
};

const read = async (clientId: string): Promise<ContactRead> => {
  const contacts = await repositoryContact.find({
    where: { client: { id: clientId } },
    relations: ["client"],
  });
  return contactReadSchema.parse(contacts);
};

const partialUpdate = async (
  clientId: string,
  contactId: string,
  payload: ContactUpdate
): Promise<ContactReturn> => {
  const contact = await repositoryContact.findOneBy({
    id: contactId,
    client: { id: clientId },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  const updatedContact = await repositoryContact.save({ ...contact, ...payload });

  return contactReturnSchema.parse(updatedContact);
};

const destroy = async (clientId: string, contactId: string): Promise<void> => {
  const contact = await repositoryContact.findOneBy({
    id: contactId,
    client: { id: clientId },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  await repositoryContact.remove(contact);
};

export default { create, read, destroy, partialUpdate };
