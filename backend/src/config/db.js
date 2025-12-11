import pkg from "@prisma/client";
import dotenv from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";

dotenv.config();

const { PrismaClient } = pkg;

export const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});