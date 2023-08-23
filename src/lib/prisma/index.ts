import { ExtendedPrismaClient, prismaClientSingleton } from './client-singleton';

const globalForPrisma = globalThis as unknown as { prisma: ExtendedPrismaClient };

export let prisma: ExtendedPrismaClient; // use `let` to preserve as non-nullable

if (typeof window === 'undefined') {
  prisma = !process.env.PROD
    ? (globalForPrisma.prisma ??= prismaClientSingleton()) // assign new singleton to `globalThis` if null, then assign to `prisma`
    : prismaClientSingleton();
}
