import { RaiseAgs } from './types';

import { HttpError, Status } from '@reflet/http';

/**
 * Error throwing util function for DX.
 *
 * @example
 * // provide syntactic sugar such as:
 * const user = await getUser() ?? raise('User not found');
 *      //=> user is not undefined
 */
export function raise<E extends Error>(...args: RaiseAgs<E>): never {
  if (typeof args[0] === 'function') throw args[0]();
  throw new Error(args[0], args[1]);
}

/**
 * Http error throwing util function for DX.
 *
 * @example
 * // provide syntactic sugar such as:
 * const posts = await getPost(args) ?? httpRaise('BadRequest', 'Invalid range.');
 *      //=> posts is not undefined
 */
export function httpRaise(status: keyof typeof Status.Error, message?: string) {
  return raise(() => HttpError(Status.Error[status], message));
}
