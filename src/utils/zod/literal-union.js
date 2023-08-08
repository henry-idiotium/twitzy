import { z } from 'zod';

export const literalUnion = (...literals) => z.union(literals.map((l) => z.literal(l)));
