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

export const clientRouter: Router = Router();

clientRouter.post(
  "",
  validateBody(clientCreateSchema),
  verifyEmailExists,
  clientControllers.createClient
);

clientRouter.get("", clientControllers.readClients);

clientRouter.use("/:id", verifyIdExists);

clientRouter.patch(
  "/:id",
  validateBody(clientUpdateSchema),
  validateToken,
  verifyEmailExists,
  clientControllers.updatePartialClient
);

clientRouter.delete(
  "/:id",
  validateToken,
  clientControllers.destroyClient
);