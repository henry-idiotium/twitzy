import { Prisma, PrismaClient } from '@prisma/client';

// Set default prisma logs. More logs in debug mode.
const logOptions: Prisma.LogLevel[] = process.env.DEV
  ? ['error', 'query', 'warn', 'info']
  : ['error'];

export function prismaClientSingleton() {
  const prisma = new PrismaClient({
    log: logOptions,
  });

  return prisma.$extends({
    query: {
      $allModels: {
        async $allOperations({ operation, model, args, query }) {
          const start = performance.now();
          const result = await query(args);
          const end = performance.now();
          const time = end - start;
          console.debug(`${model}.${operation} took ${time.toFixed(2)}ms`, 'Prisma');
          return result;
        },
      },
    },

    model: {},
  });
}

export type ExtendedPrismaClient = ReturnType<typeof prismaClientSingleton>;
