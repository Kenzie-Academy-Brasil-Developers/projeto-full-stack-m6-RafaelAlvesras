
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import loginRouter from "./routes/login.routes";
import { clientRouter } from "./routes/client.routes";
import { contactRouter } from "./routes/contact.routes";
import cors from "cors"
import { handleErrors } from "./middlewares/handleErrors.middleware";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/login", loginRouter);
app.use("/clients", clientRouter);
app.use("/contacts", contactRouter);
app.use(handleErrors);

export default app;
