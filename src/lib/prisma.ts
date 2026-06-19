import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  // If DATABASE_URL is missing, we provide a placeholder to prevent build errors
  // but this will still fail at runtime if the DB is actually needed.
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
