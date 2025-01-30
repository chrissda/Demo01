import prisma from '@prisma/client';

export const connection = new prisma.PrismaClient({ log: ["query"] });