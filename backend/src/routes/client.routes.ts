import { verifyIdExists } from './../middlewares/verifyIdExists.middleware';
import { Router } from "express";
import {
  clientCreateSchema,
  clientUpdateSchema,
} from "../schemas/client.schema";
import clientControllers from "../controllers/client.controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { verifyEmailExists } from "../middlewares/verifyEmailExists.middleware";
import { validateToken } from '../middlewares/validateToken.middleware';
import verifyClientId from '../middlewares/verifyClientId.middleware';
import verifyContactId from '../middlewares/verifyContactId.middleware';

export const clientRouter: Router = Router();

clientRouter.post(
  "",
  validateBody(clientCreateSchema),
  verifyEmailExists,
  clientControllers.create
);

clientRouter.get("", clientControllers.read);

clientRouter.use("/:id", verifyIdExists);

clientRouter.patch(
  "/:id",
  validateBody(clientUpdateSchema),
  validateToken,
  verifyClientId,
  verifyEmailExists,
  clientControllers.partialUpdate
);

clientRouter.delete(
  "/:id",
  validateToken,
  verifyContactId,
  clientControllers.destroy
);