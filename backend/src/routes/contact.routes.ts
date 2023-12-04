import { Router } from "express";
import {
    contactCreateSchema,
    contactUpdateSchema,
} from "../schemas/contact.schema";
import contactControllers from "../controllers/contact.controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import verifyContactId from "../middlewares/verifyContactId.middleware";
// import { verifyIdExists } from "../middlewares/verifyIdExists.middleware";

export const contactRouter: Router = Router();

contactRouter.post(
    "",
    validateBody(contactCreateSchema),
    validateToken,
    contactControllers.createContact
);

contactRouter.get(
    "",
    validateToken,
    verifyContactId,
    contactControllers.readContact);

// contactRouter.use("/:id", verifyIdExists);

contactRouter.patch(
    "/:id",
    validateBody(contactUpdateSchema),
    validateToken,
    verifyContactId,
    contactControllers.contactPartialUpdate
);

contactRouter.delete(
    "/:id",
    validateToken,
    verifyContactId,
    contactControllers.destroyContact
);