import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { repositoryClient } from "../repositories";
import AppError from "../errors/App.error";
import Client from "../entities/Client.entity";
import { LoginRequest, LoginReturn } from "../interfaces/login.interface";
import { loginReturnSchema } from "../schemas/login.schema";

const clientRepository = repositoryClient;

const createLoginToken = async (payload: LoginRequest): Promise<LoginReturn> => {
  try {
    const client: Client | null = await clientRepository.findOne({
      where: { email: payload.email },
    });

    if (!client || !(await compare(payload.password, client.password))) {
      throw new AppError("Invalid credentials", 401);
    }

    const token: string = sign(
      { email: client.email, id: client.id },
      process.env.SECRET_KEY!,
      {
        subject: client.id.toString(),
        expiresIn: process.env.EXPIRES_IN!,
      }
    );

    return loginReturnSchema.parse({ token, client });
  } catch (error) {
    throw new AppError("Error creating login token", 500);
  }
};

export default { createLoginToken };