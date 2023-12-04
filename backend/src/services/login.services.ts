import { sign } from "jsonwebtoken";
import AppError from "../errors/App.error";
import { compare } from "bcryptjs";
import { repositoryClient } from "../repositories";
import Client from "../entities/Client.entity";
import { LoginRequest, LoginReturn } from "../interfaces/login.interface";
import { loginReturnSchema } from "../schemas/login.schema";
const clientRepo = repositoryClient;

const create = async (payload: LoginRequest): Promise<LoginReturn> => {
  const client: Client | null = await clientRepo.findOne({
    where: { email: payload.email },
  });

  if (!client) {
    throw new AppError("Invalid credentials", 401);
  }
  const samePassword: boolean = await compare(
    payload.password,
    client.password
  );

  if (!samePassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { email: client.email },
    process.env.SECRET_KEY!,
    {
      subject: client.id.toString(),
      expiresIn: process.env.EXPIRES_IN!,
    }
  );
  return loginReturnSchema.parse({ token, client })
};

export default { create };