
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>
/**
 * Model FriendRequest
 * 
 */
export type FriendRequest = $Result.DefaultSelection<Prisma.$FriendRequestPayload>
/**
 * Model Conversations
 * 
 */
export type Conversations = $Result.DefaultSelection<Prisma.$ConversationsPayload>
/**
 * Model ConversationParticipant
 * 
 */
export type ConversationParticipant = $Result.DefaultSelection<Prisma.$ConversationParticipantPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model MessageSeenLogs
 * 
 */
export type MessageSeenLogs = $Result.DefaultSelection<Prisma.$MessageSeenLogsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FriendRequestStatus: {
  pending: 'pending',
  blocked: 'blocked'
};

export type FriendRequestStatus = (typeof FriendRequestStatus)[keyof typeof FriendRequestStatus]


export const ConversationType: {
  group: 'group',
  pair: 'pair'
};

export type ConversationType = (typeof ConversationType)[keyof typeof ConversationType]

}

export type FriendRequestStatus = $Enums.FriendRequestStatus

export const FriendRequestStatus: typeof $Enums.FriendRequestStatus

export type ConversationType = $Enums.ConversationType

export const ConversationType: typeof $Enums.ConversationType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs>;

  /**
   * `prisma.friendRequest`: Exposes CRUD operations for the **FriendRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FriendRequests
    * const friendRequests = await prisma.friendRequest.findMany()
    * ```
    */
  get friendRequest(): Prisma.FriendRequestDelegate<ExtArgs>;

  /**
   * `prisma.conversations`: Exposes CRUD operations for the **Conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversations.findMany()
    * ```
    */
  get conversations(): Prisma.ConversationsDelegate<ExtArgs>;

  /**
   * `prisma.conversationParticipant`: Exposes CRUD operations for the **ConversationParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversationParticipants
    * const conversationParticipants = await prisma.conversationParticipant.findMany()
    * ```
    */
  get conversationParticipant(): Prisma.ConversationParticipantDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.messageSeenLogs`: Exposes CRUD operations for the **MessageSeenLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageSeenLogs
    * const messageSeenLogs = await prisma.messageSeenLogs.findMany()
    * ```
    */
  get messageSeenLogs(): Prisma.MessageSeenLogsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.0
   * Query Engine version: e90b936d84779543cbe0e494bc8b9d7337fad8e4
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    Friendship: 'Friendship',
    FriendRequest: 'FriendRequest',
    Conversations: 'Conversations',
    ConversationParticipant: 'ConversationParticipant',
    Message: 'Message',
    MessageSeenLogs: 'MessageSeenLogs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'profile' | 'friendship' | 'friendRequest' | 'conversations' | 'conversationParticipant' | 'message' | 'messageSeenLogs'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>,
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
          }
        }
      }
      FriendRequest: {
        payload: Prisma.$FriendRequestPayload<ExtArgs>
        fields: Prisma.FriendRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendRequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendRequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          findFirst: {
            args: Prisma.FriendRequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendRequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          findMany: {
            args: Prisma.FriendRequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>[]
          }
          create: {
            args: Prisma.FriendRequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          createMany: {
            args: Prisma.FriendRequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FriendRequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          update: {
            args: Prisma.FriendRequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          deleteMany: {
            args: Prisma.FriendRequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FriendRequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FriendRequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          aggregate: {
            args: Prisma.FriendRequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFriendRequest>
          }
          groupBy: {
            args: Prisma.FriendRequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FriendRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendRequestCountArgs<ExtArgs>,
            result: $Utils.Optional<FriendRequestCountAggregateOutputType> | number
          }
        }
      }
      Conversations: {
        payload: Prisma.$ConversationsPayload<ExtArgs>
        fields: Prisma.ConversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          findFirst: {
            args: Prisma.ConversationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          findMany: {
            args: Prisma.ConversationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>[]
          }
          create: {
            args: Prisma.ConversationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          createMany: {
            args: Prisma.ConversationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ConversationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          update: {
            args: Prisma.ConversationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          deleteMany: {
            args: Prisma.ConversationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConversationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          aggregate: {
            args: Prisma.ConversationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConversations>
          }
          groupBy: {
            args: Prisma.ConversationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConversationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationsCountArgs<ExtArgs>,
            result: $Utils.Optional<ConversationsCountAggregateOutputType> | number
          }
        }
      }
      ConversationParticipant: {
        payload: Prisma.$ConversationParticipantPayload<ExtArgs>
        fields: Prisma.ConversationParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationParticipantFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationParticipantFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>
          }
          findFirst: {
            args: Prisma.ConversationParticipantFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationParticipantFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>
          }
          findMany: {
            args: Prisma.ConversationParticipantFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>[]
          }
          create: {
            args: Prisma.ConversationParticipantCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>
          }
          createMany: {
            args: Prisma.ConversationParticipantCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ConversationParticipantDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>
          }
          update: {
            args: Prisma.ConversationParticipantUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ConversationParticipantDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationParticipantUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConversationParticipantUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>
          }
          aggregate: {
            args: Prisma.ConversationParticipantAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConversationParticipant>
          }
          groupBy: {
            args: Prisma.ConversationParticipantGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConversationParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationParticipantCountArgs<ExtArgs>,
            result: $Utils.Optional<ConversationParticipantCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      MessageSeenLogs: {
        payload: Prisma.$MessageSeenLogsPayload<ExtArgs>
        fields: Prisma.MessageSeenLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageSeenLogsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageSeenLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageSeenLogsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageSeenLogsPayload>
          }
          findFirst: {
            args: Prisma.MessageSeenLogsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageSeenLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageSeenLogsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageSeenLogsPayload>
          }
          findMany: {
            args: Prisma.MessageSeenLogsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageSeenLogsPayload>[]
          }
          create: {
            args: Prisma.MessageSeenLogsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageSeenLogsPayload>
          }
          createMany: {
            args: Prisma.MessageSeenLogsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageSeenLogsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageSeenLogsPayload>
          }
          update: {
            args: Prisma.MessageSeenLogsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageSeenLogsPayload>
          }
          deleteMany: {
            args: Prisma.MessageSeenLogsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageSeenLogsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageSeenLogsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageSeenLogsPayload>
          }
          aggregate: {
            args: Prisma.MessageSeenLogsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessageSeenLogs>
          }
          groupBy: {
            args: Prisma.MessageSeenLogsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageSeenLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageSeenLogsCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageSeenLogsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    conversationParticipants: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    conversationParticipants?: boolean | ProfileCountOutputTypeCountConversationParticipantsArgs
  }

  // Custom InputTypes

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountConversationParticipantsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ConversationParticipantWhereInput
  }



  /**
   * Count Type ConversationsCountOutputType
   */

  export type ConversationsCountOutputType = {
    messageSeenLogs: number
    participants: number
  }

  export type ConversationsCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    messageSeenLogs?: boolean | ConversationsCountOutputTypeCountMessageSeenLogsArgs
    participants?: boolean | ConversationsCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: ConversationsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMessageSeenLogsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageSeenLogsWhereInput
  }


  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ConversationParticipantWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    name: string | null
    alias: string | null
    image: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    alias: string | null
    image: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    name: number
    alias: number
    image: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    name?: true
    alias?: true
    image?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    name?: true
    alias?: true
    image?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    name?: true
    alias?: true
    image?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    name: string
    alias: string
    image: string | null
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    alias?: boolean
    image?: boolean
    conversationParticipants?: boolean | Profile$conversationParticipantsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    name?: boolean
    alias?: boolean
    image?: boolean
  }

  export type ProfileInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    conversationParticipants?: boolean | Profile$conversationParticipantsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProfilePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      conversationParticipants: Prisma.$ConversationParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      /**
       * @zod.string.uuid()
       */
      id: string
      name: string
      alias: string
      image: string | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }


  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProfileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>
    ): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    conversationParticipants<T extends Profile$conversationParticipantsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$conversationParticipantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationParticipantPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Profile model
   */ 
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly alias: FieldRef<"Profile", 'String'>
    readonly image: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile.conversationParticipants
   */
  export type Profile$conversationParticipantsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationParticipant
     */
    select?: ConversationParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationParticipantInclude<ExtArgs> | null
    where?: ConversationParticipantWhereInput
    orderBy?: ConversationParticipantOrderByWithRelationInput | ConversationParticipantOrderByWithRelationInput[]
    cursor?: ConversationParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationParticipantScalarFieldEnum | ConversationParticipantScalarFieldEnum[]
  }


  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null
  }



  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipMinAggregateOutputType = {
    userOneId: string | null
    userTwoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendshipMaxAggregateOutputType = {
    userOneId: string | null
    userTwoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendshipCountAggregateOutputType = {
    userOneId: number
    userTwoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FriendshipMinAggregateInputType = {
    userOneId?: true
    userTwoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendshipMaxAggregateInputType = {
    userOneId?: true
    userTwoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendshipCountAggregateInputType = {
    userOneId?: true
    userTwoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    userOneId: string
    userTwoId: string
    createdAt: Date
    updatedAt: Date
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userOneId?: boolean
    userTwoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    userOneId?: boolean
    userTwoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FriendshipInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {}


  export type $FriendshipPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      userOne: Prisma.$ProfilePayload<ExtArgs>
      userTwo: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      /**
       * @zod.string.uuid()
       */
      userOneId: string
      /**
       * @zod.string.uuid()
       */
      userTwoId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }


  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FriendshipFindManyArgs, 'select' | 'include'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FriendshipFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>
    ): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Friendship that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FriendshipFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>
    ): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `userOneId`
     * const friendshipWithUserOneIdOnly = await prisma.friendship.findMany({ select: { userOneId: true } })
     * 
    **/
    findMany<T extends FriendshipFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
    **/
    create<T extends FriendshipCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>
    ): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Friendships.
     *     @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     *     @example
     *     // Create many Friendships
     *     const friendship = await prisma.friendship.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FriendshipCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
    **/
    delete<T extends FriendshipDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>
    ): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FriendshipUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>
    ): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FriendshipDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FriendshipUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
    **/
    upsert<T extends FriendshipUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>
    ): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Friendship model
   */ 
  interface FriendshipFieldRefs {
    readonly userOneId: FieldRef<"Friendship", 'String'>
    readonly userTwoId: FieldRef<"Friendship", 'String'>
    readonly createdAt: FieldRef<"Friendship", 'DateTime'>
    readonly updatedAt: FieldRef<"Friendship", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }


  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }


  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }


  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }


  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }


  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
  }


  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
  }


  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
  }


  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
  }


  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
  }


  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
  }


  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
  }



  /**
   * Model FriendRequest
   */

  export type AggregateFriendRequest = {
    _count: FriendRequestCountAggregateOutputType | null
    _avg: FriendRequestAvgAggregateOutputType | null
    _sum: FriendRequestSumAggregateOutputType | null
    _min: FriendRequestMinAggregateOutputType | null
    _max: FriendRequestMaxAggregateOutputType | null
  }

  export type FriendRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type FriendRequestSumAggregateOutputType = {
    id: number | null
  }

  export type FriendRequestMinAggregateOutputType = {
    id: number | null
    requesterId: string | null
    addresseeId: string | null
    status: $Enums.FriendRequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendRequestMaxAggregateOutputType = {
    id: number | null
    requesterId: string | null
    addresseeId: string | null
    status: $Enums.FriendRequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendRequestCountAggregateOutputType = {
    id: number
    requesterId: number
    addresseeId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FriendRequestAvgAggregateInputType = {
    id?: true
  }

  export type FriendRequestSumAggregateInputType = {
    id?: true
  }

  export type FriendRequestMinAggregateInputType = {
    id?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendRequestMaxAggregateInputType = {
    id?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendRequestCountAggregateInputType = {
    id?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FriendRequestAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendRequest to aggregate.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FriendRequests
    **/
    _count?: true | FriendRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendRequestMaxAggregateInputType
  }

  export type GetFriendRequestAggregateType<T extends FriendRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendRequest[P]>
      : GetScalarType<T[P], AggregateFriendRequest[P]>
  }




  export type FriendRequestGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithAggregationInput | FriendRequestOrderByWithAggregationInput[]
    by: FriendRequestScalarFieldEnum[] | FriendRequestScalarFieldEnum
    having?: FriendRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendRequestCountAggregateInputType | true
    _avg?: FriendRequestAvgAggregateInputType
    _sum?: FriendRequestSumAggregateInputType
    _min?: FriendRequestMinAggregateInputType
    _max?: FriendRequestMaxAggregateInputType
  }

  export type FriendRequestGroupByOutputType = {
    id: number
    requesterId: string
    addresseeId: string
    status: $Enums.FriendRequestStatus
    createdAt: Date
    updatedAt: Date
    _count: FriendRequestCountAggregateOutputType | null
    _avg: FriendRequestAvgAggregateOutputType | null
    _sum: FriendRequestSumAggregateOutputType | null
    _min: FriendRequestMinAggregateOutputType | null
    _max: FriendRequestMaxAggregateOutputType | null
  }

  type GetFriendRequestGroupByPayload<T extends FriendRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>
            : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>
        }
      >
    >


  export type FriendRequestSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["friendRequest"]>

  export type FriendRequestSelectScalar = {
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FriendRequestInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {}


  export type $FriendRequestPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "FriendRequest"
    objects: {
      requester: Prisma.$ProfilePayload<ExtArgs>
      addressee: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      /**
       * @zod.string.uuid()
       */
      requesterId: string
      /**
       * @zod.string.uuid()
       */
      addresseeId: string
      status: $Enums.FriendRequestStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["friendRequest"]>
    composites: {}
  }


  type FriendRequestGetPayload<S extends boolean | null | undefined | FriendRequestDefaultArgs> = $Result.GetResult<Prisma.$FriendRequestPayload, S>

  type FriendRequestCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FriendRequestFindManyArgs, 'select' | 'include'> & {
      select?: FriendRequestCountAggregateInputType | true
    }

  export interface FriendRequestDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FriendRequest'], meta: { name: 'FriendRequest' } }
    /**
     * Find zero or one FriendRequest that matches the filter.
     * @param {FriendRequestFindUniqueArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FriendRequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestFindUniqueArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FriendRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FriendRequestFindUniqueOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FriendRequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FriendRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FriendRequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestFindFirstArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FriendRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FriendRequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FriendRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany()
     * 
     * // Get first 10 FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendRequestWithIdOnly = await prisma.friendRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FriendRequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FriendRequest.
     * @param {FriendRequestCreateArgs} args - Arguments to create a FriendRequest.
     * @example
     * // Create one FriendRequest
     * const FriendRequest = await prisma.friendRequest.create({
     *   data: {
     *     // ... data to create a FriendRequest
     *   }
     * })
     * 
    **/
    create<T extends FriendRequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestCreateArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FriendRequests.
     *     @param {FriendRequestCreateManyArgs} args - Arguments to create many FriendRequests.
     *     @example
     *     // Create many FriendRequests
     *     const friendRequest = await prisma.friendRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FriendRequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FriendRequest.
     * @param {FriendRequestDeleteArgs} args - Arguments to delete one FriendRequest.
     * @example
     * // Delete one FriendRequest
     * const FriendRequest = await prisma.friendRequest.delete({
     *   where: {
     *     // ... filter to delete one FriendRequest
     *   }
     * })
     * 
    **/
    delete<T extends FriendRequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestDeleteArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FriendRequest.
     * @param {FriendRequestUpdateArgs} args - Arguments to update one FriendRequest.
     * @example
     * // Update one FriendRequest
     * const friendRequest = await prisma.friendRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FriendRequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestUpdateArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FriendRequests.
     * @param {FriendRequestDeleteManyArgs} args - Arguments to filter FriendRequests to delete.
     * @example
     * // Delete a few FriendRequests
     * const { count } = await prisma.friendRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FriendRequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FriendRequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FriendRequests
     * const friendRequest = await prisma.friendRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FriendRequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FriendRequest.
     * @param {FriendRequestUpsertArgs} args - Arguments to update or create a FriendRequest.
     * @example
     * // Update or create a FriendRequest
     * const friendRequest = await prisma.friendRequest.upsert({
     *   create: {
     *     // ... data to create a FriendRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FriendRequest we want to update
     *   }
     * })
    **/
    upsert<T extends FriendRequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FriendRequestUpsertArgs<ExtArgs>>
    ): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestCountArgs} args - Arguments to filter FriendRequests to count.
     * @example
     * // Count the number of FriendRequests
     * const count = await prisma.friendRequest.count({
     *   where: {
     *     // ... the filter for the FriendRequests we want to count
     *   }
     * })
    **/
    count<T extends FriendRequestCountArgs>(
      args?: Subset<T, FriendRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendRequestAggregateArgs>(args: Subset<T, FriendRequestAggregateArgs>): Prisma.PrismaPromise<GetFriendRequestAggregateType<T>>

    /**
     * Group by FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendRequestGroupByArgs['orderBy'] }
        : { orderBy?: FriendRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FriendRequest model
   */
  readonly fields: FriendRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FriendRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendRequestClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FriendRequest model
   */ 
  interface FriendRequestFieldRefs {
    readonly id: FieldRef<"FriendRequest", 'Int'>
    readonly requesterId: FieldRef<"FriendRequest", 'String'>
    readonly addresseeId: FieldRef<"FriendRequest", 'String'>
    readonly status: FieldRef<"FriendRequest", 'FriendRequestStatus'>
    readonly createdAt: FieldRef<"FriendRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"FriendRequest", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FriendRequest findUnique
   */
  export type FriendRequestFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput
  }


  /**
   * FriendRequest findUniqueOrThrow
   */
  export type FriendRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput
  }


  /**
   * FriendRequest findFirst
   */
  export type FriendRequestFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }


  /**
   * FriendRequest findFirstOrThrow
   */
  export type FriendRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }


  /**
   * FriendRequest findMany
   */
  export type FriendRequestFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Filter, which FriendRequests to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }


  /**
   * FriendRequest create
   */
  export type FriendRequestCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * The data needed to create a FriendRequest.
     */
    data: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>
  }


  /**
   * FriendRequest createMany
   */
  export type FriendRequestCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FriendRequests.
     */
    data: FriendRequestCreateManyInput | FriendRequestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FriendRequest update
   */
  export type FriendRequestUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * The data needed to update a FriendRequest.
     */
    data: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>
    /**
     * Choose, which FriendRequest to update.
     */
    where: FriendRequestWhereUniqueInput
  }


  /**
   * FriendRequest updateMany
   */
  export type FriendRequestUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FriendRequests.
     */
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyInput>
    /**
     * Filter which FriendRequests to update
     */
    where?: FriendRequestWhereInput
  }


  /**
   * FriendRequest upsert
   */
  export type FriendRequestUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * The filter to search for the FriendRequest to update in case it exists.
     */
    where: FriendRequestWhereUniqueInput
    /**
     * In case the FriendRequest found by the `where` argument doesn't exist, create a new FriendRequest with this data.
     */
    create: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>
    /**
     * In case the FriendRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>
  }


  /**
   * FriendRequest delete
   */
  export type FriendRequestDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Filter which FriendRequest to delete.
     */
    where: FriendRequestWhereUniqueInput
  }


  /**
   * FriendRequest deleteMany
   */
  export type FriendRequestDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendRequests to delete
     */
    where?: FriendRequestWhereInput
  }


  /**
   * FriendRequest without action
   */
  export type FriendRequestDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
  }



  /**
   * Model Conversations
   */

  export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  export type ConversationsMinAggregateOutputType = {
    id: string | null
    type: $Enums.ConversationType | null
    owner: string | null
    theme: string | null
    emoji: string | null
    nickName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationsMaxAggregateOutputType = {
    id: string | null
    type: $Enums.ConversationType | null
    owner: string | null
    theme: string | null
    emoji: string | null
    nickName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationsCountAggregateOutputType = {
    id: number
    type: number
    owner: number
    theme: number
    emoji: number
    nickName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversationsMinAggregateInputType = {
    id?: true
    type?: true
    owner?: true
    theme?: true
    emoji?: true
    nickName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationsMaxAggregateInputType = {
    id?: true
    type?: true
    owner?: true
    theme?: true
    emoji?: true
    nickName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationsCountAggregateInputType = {
    id?: true
    type?: true
    owner?: true
    theme?: true
    emoji?: true
    nickName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversationsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to aggregate.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType
  }

  export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversations[P]>
      : GetScalarType<T[P], AggregateConversations[P]>
  }




  export type ConversationsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithAggregationInput | ConversationsOrderByWithAggregationInput[]
    by: ConversationsScalarFieldEnum[] | ConversationsScalarFieldEnum
    having?: ConversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationsCountAggregateInputType | true
    _min?: ConversationsMinAggregateInputType
    _max?: ConversationsMaxAggregateInputType
  }

  export type ConversationsGroupByOutputType = {
    id: string
    type: $Enums.ConversationType
    owner: string | null
    theme: string | null
    emoji: string | null
    nickName: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  type GetConversationsGroupByPayload<T extends ConversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
        }
      >
    >


  export type ConversationsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    owner?: boolean
    theme?: boolean
    emoji?: boolean
    nickName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messageSeenLogs?: boolean | Conversations$messageSeenLogsArgs<ExtArgs>
    participants?: boolean | Conversations$participantsArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type ConversationsSelectScalar = {
    id?: boolean
    type?: boolean
    owner?: boolean
    theme?: boolean
    emoji?: boolean
    nickName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversationsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    messageSeenLogs?: boolean | Conversations$messageSeenLogsArgs<ExtArgs>
    participants?: boolean | Conversations$participantsArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ConversationsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Conversations"
    objects: {
      messageSeenLogs: Prisma.$MessageSeenLogsPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      participants: Prisma.$ConversationParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      /**
       * @zod.string.uuid()
       */
      id: string
      type: $Enums.ConversationType
      owner: string | null
      theme: string | null
      emoji: string | null
      nickName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversations"]>
    composites: {}
  }


  type ConversationsGetPayload<S extends boolean | null | undefined | ConversationsDefaultArgs> = $Result.GetResult<Prisma.$ConversationsPayload, S>

  type ConversationsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ConversationsFindManyArgs, 'select' | 'include'> & {
      select?: ConversationsCountAggregateInputType | true
    }

  export interface ConversationsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversations'], meta: { name: 'Conversations' } }
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {ConversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConversationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationsFindUniqueArgs<ExtArgs>>
    ): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Conversations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConversationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConversationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationsFindFirstArgs<ExtArgs>>
    ): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConversationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationsWithIdOnly = await prisma.conversations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConversationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Conversations.
     * @param {ConversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     * 
    **/
    create<T extends ConversationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationsCreateArgs<ExtArgs>>
    ): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Conversations.
     *     @param {ConversationsCreateManyArgs} args - Arguments to create many Conversations.
     *     @example
     *     // Create many Conversations
     *     const conversations = await prisma.conversations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConversationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversations.
     * @param {ConversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     * 
    **/
    delete<T extends ConversationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationsDeleteArgs<ExtArgs>>
    ): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Conversations.
     * @param {ConversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConversationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationsUpdateArgs<ExtArgs>>
    ): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConversationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConversationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversations.
     * @param {ConversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
    **/
    upsert<T extends ConversationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationsUpsertArgs<ExtArgs>>
    ): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationsCountArgs>(
      args?: Subset<T, ConversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationsAggregateArgs>(args: Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>

    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationsGroupByArgs['orderBy'] }
        : { orderBy?: ConversationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversations model
   */
  readonly fields: ConversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    messageSeenLogs<T extends Conversations$messageSeenLogsArgs<ExtArgs> = {}>(args?: Subset<T, Conversations$messageSeenLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageSeenLogsPayload<ExtArgs>, T, 'findMany'> | Null>;

    participants<T extends Conversations$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Conversations$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationParticipantPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Conversations model
   */ 
  interface ConversationsFieldRefs {
    readonly id: FieldRef<"Conversations", 'String'>
    readonly type: FieldRef<"Conversations", 'ConversationType'>
    readonly owner: FieldRef<"Conversations", 'String'>
    readonly theme: FieldRef<"Conversations", 'String'>
    readonly emoji: FieldRef<"Conversations", 'String'>
    readonly nickName: FieldRef<"Conversations", 'String'>
    readonly createdAt: FieldRef<"Conversations", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversations", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Conversations findUnique
   */
  export type ConversationsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where: ConversationsWhereUniqueInput
  }


  /**
   * Conversations findUniqueOrThrow
   */
  export type ConversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where: ConversationsWhereUniqueInput
  }


  /**
   * Conversations findFirst
   */
  export type ConversationsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }


  /**
   * Conversations findFirstOrThrow
   */
  export type ConversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }


  /**
   * Conversations findMany
   */
  export type ConversationsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }


  /**
   * Conversations create
   */
  export type ConversationsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversations.
     */
    data: XOR<ConversationsCreateInput, ConversationsUncheckedCreateInput>
  }


  /**
   * Conversations createMany
   */
  export type ConversationsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationsCreateManyInput | ConversationsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Conversations update
   */
  export type ConversationsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversations.
     */
    data: XOR<ConversationsUpdateInput, ConversationsUncheckedUpdateInput>
    /**
     * Choose, which Conversations to update.
     */
    where: ConversationsWhereUniqueInput
  }


  /**
   * Conversations updateMany
   */
  export type ConversationsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationsWhereInput
  }


  /**
   * Conversations upsert
   */
  export type ConversationsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversations to update in case it exists.
     */
    where: ConversationsWhereUniqueInput
    /**
     * In case the Conversations found by the `where` argument doesn't exist, create a new Conversations with this data.
     */
    create: XOR<ConversationsCreateInput, ConversationsUncheckedCreateInput>
    /**
     * In case the Conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationsUpdateInput, ConversationsUncheckedUpdateInput>
  }


  /**
   * Conversations delete
   */
  export type ConversationsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter which Conversations to delete.
     */
    where: ConversationsWhereUniqueInput
  }


  /**
   * Conversations deleteMany
   */
  export type ConversationsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationsWhereInput
  }


  /**
   * Conversations.messageSeenLogs
   */
  export type Conversations$messageSeenLogsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSeenLogs
     */
    select?: MessageSeenLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageSeenLogsInclude<ExtArgs> | null
    where?: MessageSeenLogsWhereInput
    orderBy?: MessageSeenLogsOrderByWithRelationInput | MessageSeenLogsOrderByWithRelationInput[]
    cursor?: MessageSeenLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageSeenLogsScalarFieldEnum | MessageSeenLogsScalarFieldEnum[]
  }


  /**
   * Conversations.participants
   */
  export type Conversations$participantsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationParticipant
     */
    select?: ConversationParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationParticipantInclude<ExtArgs> | null
    where?: ConversationParticipantWhereInput
    orderBy?: ConversationParticipantOrderByWithRelationInput | ConversationParticipantOrderByWithRelationInput[]
    cursor?: ConversationParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationParticipantScalarFieldEnum | ConversationParticipantScalarFieldEnum[]
  }


  /**
   * Conversations without action
   */
  export type ConversationsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationsInclude<ExtArgs> | null
  }



  /**
   * Model ConversationParticipant
   */

  export type AggregateConversationParticipant = {
    _count: ConversationParticipantCountAggregateOutputType | null
    _min: ConversationParticipantMinAggregateOutputType | null
    _max: ConversationParticipantMaxAggregateOutputType | null
  }

  export type ConversationParticipantMinAggregateOutputType = {
    userId: string | null
    conversationId: string | null
  }

  export type ConversationParticipantMaxAggregateOutputType = {
    userId: string | null
    conversationId: string | null
  }

  export type ConversationParticipantCountAggregateOutputType = {
    userId: number
    conversationId: number
    _all: number
  }


  export type ConversationParticipantMinAggregateInputType = {
    userId?: true
    conversationId?: true
  }

  export type ConversationParticipantMaxAggregateInputType = {
    userId?: true
    conversationId?: true
  }

  export type ConversationParticipantCountAggregateInputType = {
    userId?: true
    conversationId?: true
    _all?: true
  }

  export type ConversationParticipantAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationParticipant to aggregate.
     */
    where?: ConversationParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationParticipants to fetch.
     */
    orderBy?: ConversationParticipantOrderByWithRelationInput | ConversationParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversationParticipants
    **/
    _count?: true | ConversationParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationParticipantMaxAggregateInputType
  }

  export type GetConversationParticipantAggregateType<T extends ConversationParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateConversationParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversationParticipant[P]>
      : GetScalarType<T[P], AggregateConversationParticipant[P]>
  }




  export type ConversationParticipantGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ConversationParticipantWhereInput
    orderBy?: ConversationParticipantOrderByWithAggregationInput | ConversationParticipantOrderByWithAggregationInput[]
    by: ConversationParticipantScalarFieldEnum[] | ConversationParticipantScalarFieldEnum
    having?: ConversationParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationParticipantCountAggregateInputType | true
    _min?: ConversationParticipantMinAggregateInputType
    _max?: ConversationParticipantMaxAggregateInputType
  }

  export type ConversationParticipantGroupByOutputType = {
    userId: string
    conversationId: string
    _count: ConversationParticipantCountAggregateOutputType | null
    _min: ConversationParticipantMinAggregateOutputType | null
    _max: ConversationParticipantMaxAggregateOutputType | null
  }

  type GetConversationParticipantGroupByPayload<T extends ConversationParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ConversationParticipantSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    conversationId?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationParticipant"]>

  export type ConversationParticipantSelectScalar = {
    userId?: boolean
    conversationId?: boolean
  }

  export type ConversationParticipantInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
  }


  export type $ConversationParticipantPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ConversationParticipant"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      conversation: Prisma.$ConversationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      /**
       * @zod.string.uuid()
       */
      userId: string
      /**
       * @zod.string.uuid()
       */
      conversationId: string
    }, ExtArgs["result"]["conversationParticipant"]>
    composites: {}
  }


  type ConversationParticipantGetPayload<S extends boolean | null | undefined | ConversationParticipantDefaultArgs> = $Result.GetResult<Prisma.$ConversationParticipantPayload, S>

  type ConversationParticipantCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ConversationParticipantFindManyArgs, 'select' | 'include'> & {
      select?: ConversationParticipantCountAggregateInputType | true
    }

  export interface ConversationParticipantDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversationParticipant'], meta: { name: 'ConversationParticipant' } }
    /**
     * Find zero or one ConversationParticipant that matches the filter.
     * @param {ConversationParticipantFindUniqueArgs} args - Arguments to find a ConversationParticipant
     * @example
     * // Get one ConversationParticipant
     * const conversationParticipant = await prisma.conversationParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConversationParticipantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationParticipantFindUniqueArgs<ExtArgs>>
    ): Prisma__ConversationParticipantClient<$Result.GetResult<Prisma.$ConversationParticipantPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ConversationParticipant that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConversationParticipantFindUniqueOrThrowArgs} args - Arguments to find a ConversationParticipant
     * @example
     * // Get one ConversationParticipant
     * const conversationParticipant = await prisma.conversationParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConversationParticipantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationParticipantFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationParticipantClient<$Result.GetResult<Prisma.$ConversationParticipantPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ConversationParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationParticipantFindFirstArgs} args - Arguments to find a ConversationParticipant
     * @example
     * // Get one ConversationParticipant
     * const conversationParticipant = await prisma.conversationParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConversationParticipantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationParticipantFindFirstArgs<ExtArgs>>
    ): Prisma__ConversationParticipantClient<$Result.GetResult<Prisma.$ConversationParticipantPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ConversationParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationParticipantFindFirstOrThrowArgs} args - Arguments to find a ConversationParticipant
     * @example
     * // Get one ConversationParticipant
     * const conversationParticipant = await prisma.conversationParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConversationParticipantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationParticipantFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationParticipantClient<$Result.GetResult<Prisma.$ConversationParticipantPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ConversationParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationParticipantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversationParticipants
     * const conversationParticipants = await prisma.conversationParticipant.findMany()
     * 
     * // Get first 10 ConversationParticipants
     * const conversationParticipants = await prisma.conversationParticipant.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const conversationParticipantWithUserIdOnly = await prisma.conversationParticipant.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends ConversationParticipantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationParticipantFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationParticipantPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ConversationParticipant.
     * @param {ConversationParticipantCreateArgs} args - Arguments to create a ConversationParticipant.
     * @example
     * // Create one ConversationParticipant
     * const ConversationParticipant = await prisma.conversationParticipant.create({
     *   data: {
     *     // ... data to create a ConversationParticipant
     *   }
     * })
     * 
    **/
    create<T extends ConversationParticipantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationParticipantCreateArgs<ExtArgs>>
    ): Prisma__ConversationParticipantClient<$Result.GetResult<Prisma.$ConversationParticipantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ConversationParticipants.
     *     @param {ConversationParticipantCreateManyArgs} args - Arguments to create many ConversationParticipants.
     *     @example
     *     // Create many ConversationParticipants
     *     const conversationParticipant = await prisma.conversationParticipant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConversationParticipantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationParticipantCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ConversationParticipant.
     * @param {ConversationParticipantDeleteArgs} args - Arguments to delete one ConversationParticipant.
     * @example
     * // Delete one ConversationParticipant
     * const ConversationParticipant = await prisma.conversationParticipant.delete({
     *   where: {
     *     // ... filter to delete one ConversationParticipant
     *   }
     * })
     * 
    **/
    delete<T extends ConversationParticipantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationParticipantDeleteArgs<ExtArgs>>
    ): Prisma__ConversationParticipantClient<$Result.GetResult<Prisma.$ConversationParticipantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ConversationParticipant.
     * @param {ConversationParticipantUpdateArgs} args - Arguments to update one ConversationParticipant.
     * @example
     * // Update one ConversationParticipant
     * const conversationParticipant = await prisma.conversationParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConversationParticipantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationParticipantUpdateArgs<ExtArgs>>
    ): Prisma__ConversationParticipantClient<$Result.GetResult<Prisma.$ConversationParticipantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ConversationParticipants.
     * @param {ConversationParticipantDeleteManyArgs} args - Arguments to filter ConversationParticipants to delete.
     * @example
     * // Delete a few ConversationParticipants
     * const { count } = await prisma.conversationParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConversationParticipantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationParticipantDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversationParticipants
     * const conversationParticipant = await prisma.conversationParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConversationParticipantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationParticipantUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConversationParticipant.
     * @param {ConversationParticipantUpsertArgs} args - Arguments to update or create a ConversationParticipant.
     * @example
     * // Update or create a ConversationParticipant
     * const conversationParticipant = await prisma.conversationParticipant.upsert({
     *   create: {
     *     // ... data to create a ConversationParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversationParticipant we want to update
     *   }
     * })
    **/
    upsert<T extends ConversationParticipantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationParticipantUpsertArgs<ExtArgs>>
    ): Prisma__ConversationParticipantClient<$Result.GetResult<Prisma.$ConversationParticipantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ConversationParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationParticipantCountArgs} args - Arguments to filter ConversationParticipants to count.
     * @example
     * // Count the number of ConversationParticipants
     * const count = await prisma.conversationParticipant.count({
     *   where: {
     *     // ... the filter for the ConversationParticipants we want to count
     *   }
     * })
    **/
    count<T extends ConversationParticipantCountArgs>(
      args?: Subset<T, ConversationParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversationParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationParticipantAggregateArgs>(args: Subset<T, ConversationParticipantAggregateArgs>): Prisma.PrismaPromise<GetConversationParticipantAggregateType<T>>

    /**
     * Group by ConversationParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ConversationParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversationParticipant model
   */
  readonly fields: ConversationParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversationParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationParticipantClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    conversation<T extends ConversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationsDefaultArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ConversationParticipant model
   */ 
  interface ConversationParticipantFieldRefs {
    readonly userId: FieldRef<"ConversationParticipant", 'String'>
    readonly conversationId: FieldRef<"ConversationParticipant", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ConversationParticipant findUnique
   */
  export type ConversationParticipantFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationParticipant
     */
    select?: ConversationParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ConversationParticipant to fetch.
     */
    where: ConversationParticipantWhereUniqueInput
  }


  /**
   * ConversationParticipant findUniqueOrThrow
   */
  export type ConversationParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationParticipant
     */
    select?: ConversationParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ConversationParticipant to fetch.
     */
    where: ConversationParticipantWhereUniqueInput
  }


  /**
   * ConversationParticipant findFirst
   */
  export type ConversationParticipantFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationParticipant
     */
    select?: ConversationParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ConversationParticipant to fetch.
     */
    where?: ConversationParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationParticipants to fetch.
     */
    orderBy?: ConversationParticipantOrderByWithRelationInput | ConversationParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationParticipants.
     */
    cursor?: ConversationParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationParticipants.
     */
    distinct?: ConversationParticipantScalarFieldEnum | ConversationParticipantScalarFieldEnum[]
  }


  /**
   * ConversationParticipant findFirstOrThrow
   */
  export type ConversationParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationParticipant
     */
    select?: ConversationParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ConversationParticipant to fetch.
     */
    where?: ConversationParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationParticipants to fetch.
     */
    orderBy?: ConversationParticipantOrderByWithRelationInput | ConversationParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationParticipants.
     */
    cursor?: ConversationParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationParticipants.
     */
    distinct?: ConversationParticipantScalarFieldEnum | ConversationParticipantScalarFieldEnum[]
  }


  /**
   * ConversationParticipant findMany
   */
  export type ConversationParticipantFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationParticipant
     */
    select?: ConversationParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ConversationParticipants to fetch.
     */
    where?: ConversationParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationParticipants to fetch.
     */
    orderBy?: ConversationParticipantOrderByWithRelationInput | ConversationParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversationParticipants.
     */
    cursor?: ConversationParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationParticipants.
     */
    skip?: number
    distinct?: ConversationParticipantScalarFieldEnum | ConversationParticipantScalarFieldEnum[]
  }


  /**
   * ConversationParticipant create
   */
  export type ConversationParticipantCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationParticipant
     */
    select?: ConversationParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversationParticipant.
     */
    data: XOR<ConversationParticipantCreateInput, ConversationParticipantUncheckedCreateInput>
  }


  /**
   * ConversationParticipant createMany
   */
  export type ConversationParticipantCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversationParticipants.
     */
    data: ConversationParticipantCreateManyInput | ConversationParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ConversationParticipant update
   */
  export type ConversationParticipantUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationParticipant
     */
    select?: ConversationParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversationParticipant.
     */
    data: XOR<ConversationParticipantUpdateInput, ConversationParticipantUncheckedUpdateInput>
    /**
     * Choose, which ConversationParticipant to update.
     */
    where: ConversationParticipantWhereUniqueInput
  }


  /**
   * ConversationParticipant updateMany
   */
  export type ConversationParticipantUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversationParticipants.
     */
    data: XOR<ConversationParticipantUpdateManyMutationInput, ConversationParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ConversationParticipants to update
     */
    where?: ConversationParticipantWhereInput
  }


  /**
   * ConversationParticipant upsert
   */
  export type ConversationParticipantUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationParticipant
     */
    select?: ConversationParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversationParticipant to update in case it exists.
     */
    where: ConversationParticipantWhereUniqueInput
    /**
     * In case the ConversationParticipant found by the `where` argument doesn't exist, create a new ConversationParticipant with this data.
     */
    create: XOR<ConversationParticipantCreateInput, ConversationParticipantUncheckedCreateInput>
    /**
     * In case the ConversationParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationParticipantUpdateInput, ConversationParticipantUncheckedUpdateInput>
  }


  /**
   * ConversationParticipant delete
   */
  export type ConversationParticipantDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationParticipant
     */
    select?: ConversationParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationParticipantInclude<ExtArgs> | null
    /**
     * Filter which ConversationParticipant to delete.
     */
    where: ConversationParticipantWhereUniqueInput
  }


  /**
   * ConversationParticipant deleteMany
   */
  export type ConversationParticipantDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationParticipants to delete
     */
    where?: ConversationParticipantWhereInput
  }


  /**
   * ConversationParticipant without action
   */
  export type ConversationParticipantDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationParticipant
     */
    select?: ConversationParticipantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationParticipantInclude<ExtArgs> | null
  }



  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    conversationId: string | null
    content: string | null
    fromId: string | null
    isEdited: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    conversationId: string | null
    content: string | null
    fromId: string | null
    isEdited: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    conversationId: number
    content: number
    fromId: number
    isEdited: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    conversationId?: true
    content?: true
    fromId?: true
    isEdited?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    conversationId?: true
    content?: true
    fromId?: true
    isEdited?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    conversationId?: true
    content?: true
    fromId?: true
    isEdited?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    conversationId: string
    content: string
    fromId: string
    isEdited: boolean
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    content?: boolean
    fromId?: boolean
    isEdited?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    conversationId?: boolean
    content?: boolean
    fromId?: boolean
    isEdited?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {}


  export type $MessagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      from: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      /**
       * @zod.string.uuid()
       */
      id: string
      /**
       * @zod.string.uuid()
       */
      conversationId: string
      /**
       * @zod.string.min(1).max(2000)
       */
      content: string
      /**
       * @zod.string.uuid()
       */
      fromId: string
      isEdited: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }


  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly conversationId: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly fromId: FieldRef<"Message", 'String'>
    readonly isEdited: FieldRef<"Message", 'Boolean'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
  }



  /**
   * Model MessageSeenLogs
   */

  export type AggregateMessageSeenLogs = {
    _count: MessageSeenLogsCountAggregateOutputType | null
    _min: MessageSeenLogsMinAggregateOutputType | null
    _max: MessageSeenLogsMaxAggregateOutputType | null
  }

  export type MessageSeenLogsMinAggregateOutputType = {
    conversationId: string | null
    userId: string | null
    messageId: string | null
    updatedAt: Date | null
  }

  export type MessageSeenLogsMaxAggregateOutputType = {
    conversationId: string | null
    userId: string | null
    messageId: string | null
    updatedAt: Date | null
  }

  export type MessageSeenLogsCountAggregateOutputType = {
    conversationId: number
    userId: number
    messageId: number
    updatedAt: number
    _all: number
  }


  export type MessageSeenLogsMinAggregateInputType = {
    conversationId?: true
    userId?: true
    messageId?: true
    updatedAt?: true
  }

  export type MessageSeenLogsMaxAggregateInputType = {
    conversationId?: true
    userId?: true
    messageId?: true
    updatedAt?: true
  }

  export type MessageSeenLogsCountAggregateInputType = {
    conversationId?: true
    userId?: true
    messageId?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageSeenLogsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageSeenLogs to aggregate.
     */
    where?: MessageSeenLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSeenLogs to fetch.
     */
    orderBy?: MessageSeenLogsOrderByWithRelationInput | MessageSeenLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageSeenLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSeenLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSeenLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageSeenLogs
    **/
    _count?: true | MessageSeenLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageSeenLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageSeenLogsMaxAggregateInputType
  }

  export type GetMessageSeenLogsAggregateType<T extends MessageSeenLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageSeenLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageSeenLogs[P]>
      : GetScalarType<T[P], AggregateMessageSeenLogs[P]>
  }




  export type MessageSeenLogsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageSeenLogsWhereInput
    orderBy?: MessageSeenLogsOrderByWithAggregationInput | MessageSeenLogsOrderByWithAggregationInput[]
    by: MessageSeenLogsScalarFieldEnum[] | MessageSeenLogsScalarFieldEnum
    having?: MessageSeenLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageSeenLogsCountAggregateInputType | true
    _min?: MessageSeenLogsMinAggregateInputType
    _max?: MessageSeenLogsMaxAggregateInputType
  }

  export type MessageSeenLogsGroupByOutputType = {
    conversationId: string
    userId: string
    messageId: string
    updatedAt: Date
    _count: MessageSeenLogsCountAggregateOutputType | null
    _min: MessageSeenLogsMinAggregateOutputType | null
    _max: MessageSeenLogsMaxAggregateOutputType | null
  }

  type GetMessageSeenLogsGroupByPayload<T extends MessageSeenLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageSeenLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageSeenLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageSeenLogsGroupByOutputType[P]>
            : GetScalarType<T[P], MessageSeenLogsGroupByOutputType[P]>
        }
      >
    >


  export type MessageSeenLogsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversationId?: boolean
    userId?: boolean
    messageId?: boolean
    updatedAt?: boolean
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageSeenLogs"]>

  export type MessageSeenLogsSelectScalar = {
    conversationId?: boolean
    userId?: boolean
    messageId?: boolean
    updatedAt?: boolean
  }

  export type MessageSeenLogsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationsDefaultArgs<ExtArgs>
  }


  export type $MessageSeenLogsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "MessageSeenLogs"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
      users: Prisma.$ProfilePayload<ExtArgs>
      conversation: Prisma.$ConversationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      /**
       * @zod.string.uuid()
       */
      conversationId: string
      /**
       * @zod.string.uuid()
       */
      userId: string
      /**
       * @zod.string.uuid()
       */
      messageId: string
      updatedAt: Date
    }, ExtArgs["result"]["messageSeenLogs"]>
    composites: {}
  }


  type MessageSeenLogsGetPayload<S extends boolean | null | undefined | MessageSeenLogsDefaultArgs> = $Result.GetResult<Prisma.$MessageSeenLogsPayload, S>

  type MessageSeenLogsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MessageSeenLogsFindManyArgs, 'select' | 'include'> & {
      select?: MessageSeenLogsCountAggregateInputType | true
    }

  export interface MessageSeenLogsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageSeenLogs'], meta: { name: 'MessageSeenLogs' } }
    /**
     * Find zero or one MessageSeenLogs that matches the filter.
     * @param {MessageSeenLogsFindUniqueArgs} args - Arguments to find a MessageSeenLogs
     * @example
     * // Get one MessageSeenLogs
     * const messageSeenLogs = await prisma.messageSeenLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageSeenLogsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageSeenLogsFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageSeenLogsClient<$Result.GetResult<Prisma.$MessageSeenLogsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MessageSeenLogs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageSeenLogsFindUniqueOrThrowArgs} args - Arguments to find a MessageSeenLogs
     * @example
     * // Get one MessageSeenLogs
     * const messageSeenLogs = await prisma.messageSeenLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageSeenLogsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageSeenLogsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageSeenLogsClient<$Result.GetResult<Prisma.$MessageSeenLogsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MessageSeenLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenLogsFindFirstArgs} args - Arguments to find a MessageSeenLogs
     * @example
     * // Get one MessageSeenLogs
     * const messageSeenLogs = await prisma.messageSeenLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageSeenLogsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageSeenLogsFindFirstArgs<ExtArgs>>
    ): Prisma__MessageSeenLogsClient<$Result.GetResult<Prisma.$MessageSeenLogsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MessageSeenLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenLogsFindFirstOrThrowArgs} args - Arguments to find a MessageSeenLogs
     * @example
     * // Get one MessageSeenLogs
     * const messageSeenLogs = await prisma.messageSeenLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageSeenLogsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageSeenLogsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageSeenLogsClient<$Result.GetResult<Prisma.$MessageSeenLogsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MessageSeenLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenLogsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageSeenLogs
     * const messageSeenLogs = await prisma.messageSeenLogs.findMany()
     * 
     * // Get first 10 MessageSeenLogs
     * const messageSeenLogs = await prisma.messageSeenLogs.findMany({ take: 10 })
     * 
     * // Only select the `conversationId`
     * const messageSeenLogsWithConversationIdOnly = await prisma.messageSeenLogs.findMany({ select: { conversationId: true } })
     * 
    **/
    findMany<T extends MessageSeenLogsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageSeenLogsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageSeenLogsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MessageSeenLogs.
     * @param {MessageSeenLogsCreateArgs} args - Arguments to create a MessageSeenLogs.
     * @example
     * // Create one MessageSeenLogs
     * const MessageSeenLogs = await prisma.messageSeenLogs.create({
     *   data: {
     *     // ... data to create a MessageSeenLogs
     *   }
     * })
     * 
    **/
    create<T extends MessageSeenLogsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageSeenLogsCreateArgs<ExtArgs>>
    ): Prisma__MessageSeenLogsClient<$Result.GetResult<Prisma.$MessageSeenLogsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MessageSeenLogs.
     *     @param {MessageSeenLogsCreateManyArgs} args - Arguments to create many MessageSeenLogs.
     *     @example
     *     // Create many MessageSeenLogs
     *     const messageSeenLogs = await prisma.messageSeenLogs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageSeenLogsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageSeenLogsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MessageSeenLogs.
     * @param {MessageSeenLogsDeleteArgs} args - Arguments to delete one MessageSeenLogs.
     * @example
     * // Delete one MessageSeenLogs
     * const MessageSeenLogs = await prisma.messageSeenLogs.delete({
     *   where: {
     *     // ... filter to delete one MessageSeenLogs
     *   }
     * })
     * 
    **/
    delete<T extends MessageSeenLogsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageSeenLogsDeleteArgs<ExtArgs>>
    ): Prisma__MessageSeenLogsClient<$Result.GetResult<Prisma.$MessageSeenLogsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MessageSeenLogs.
     * @param {MessageSeenLogsUpdateArgs} args - Arguments to update one MessageSeenLogs.
     * @example
     * // Update one MessageSeenLogs
     * const messageSeenLogs = await prisma.messageSeenLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageSeenLogsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageSeenLogsUpdateArgs<ExtArgs>>
    ): Prisma__MessageSeenLogsClient<$Result.GetResult<Prisma.$MessageSeenLogsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MessageSeenLogs.
     * @param {MessageSeenLogsDeleteManyArgs} args - Arguments to filter MessageSeenLogs to delete.
     * @example
     * // Delete a few MessageSeenLogs
     * const { count } = await prisma.messageSeenLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageSeenLogsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageSeenLogsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageSeenLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageSeenLogs
     * const messageSeenLogs = await prisma.messageSeenLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageSeenLogsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageSeenLogsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MessageSeenLogs.
     * @param {MessageSeenLogsUpsertArgs} args - Arguments to update or create a MessageSeenLogs.
     * @example
     * // Update or create a MessageSeenLogs
     * const messageSeenLogs = await prisma.messageSeenLogs.upsert({
     *   create: {
     *     // ... data to create a MessageSeenLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageSeenLogs we want to update
     *   }
     * })
    **/
    upsert<T extends MessageSeenLogsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageSeenLogsUpsertArgs<ExtArgs>>
    ): Prisma__MessageSeenLogsClient<$Result.GetResult<Prisma.$MessageSeenLogsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MessageSeenLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenLogsCountArgs} args - Arguments to filter MessageSeenLogs to count.
     * @example
     * // Count the number of MessageSeenLogs
     * const count = await prisma.messageSeenLogs.count({
     *   where: {
     *     // ... the filter for the MessageSeenLogs we want to count
     *   }
     * })
    **/
    count<T extends MessageSeenLogsCountArgs>(
      args?: Subset<T, MessageSeenLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageSeenLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageSeenLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageSeenLogsAggregateArgs>(args: Subset<T, MessageSeenLogsAggregateArgs>): Prisma.PrismaPromise<GetMessageSeenLogsAggregateType<T>>

    /**
     * Group by MessageSeenLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSeenLogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageSeenLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageSeenLogsGroupByArgs['orderBy'] }
        : { orderBy?: MessageSeenLogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageSeenLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageSeenLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageSeenLogs model
   */
  readonly fields: MessageSeenLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageSeenLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageSeenLogsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    conversation<T extends ConversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationsDefaultArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MessageSeenLogs model
   */ 
  interface MessageSeenLogsFieldRefs {
    readonly conversationId: FieldRef<"MessageSeenLogs", 'String'>
    readonly userId: FieldRef<"MessageSeenLogs", 'String'>
    readonly messageId: FieldRef<"MessageSeenLogs", 'String'>
    readonly updatedAt: FieldRef<"MessageSeenLogs", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MessageSeenLogs findUnique
   */
  export type MessageSeenLogsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSeenLogs
     */
    select?: MessageSeenLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageSeenLogsInclude<ExtArgs> | null
    /**
     * Filter, which MessageSeenLogs to fetch.
     */
    where: MessageSeenLogsWhereUniqueInput
  }


  /**
   * MessageSeenLogs findUniqueOrThrow
   */
  export type MessageSeenLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSeenLogs
     */
    select?: MessageSeenLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageSeenLogsInclude<ExtArgs> | null
    /**
     * Filter, which MessageSeenLogs to fetch.
     */
    where: MessageSeenLogsWhereUniqueInput
  }


  /**
   * MessageSeenLogs findFirst
   */
  export type MessageSeenLogsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSeenLogs
     */
    select?: MessageSeenLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageSeenLogsInclude<ExtArgs> | null
    /**
     * Filter, which MessageSeenLogs to fetch.
     */
    where?: MessageSeenLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSeenLogs to fetch.
     */
    orderBy?: MessageSeenLogsOrderByWithRelationInput | MessageSeenLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageSeenLogs.
     */
    cursor?: MessageSeenLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSeenLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSeenLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageSeenLogs.
     */
    distinct?: MessageSeenLogsScalarFieldEnum | MessageSeenLogsScalarFieldEnum[]
  }


  /**
   * MessageSeenLogs findFirstOrThrow
   */
  export type MessageSeenLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSeenLogs
     */
    select?: MessageSeenLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageSeenLogsInclude<ExtArgs> | null
    /**
     * Filter, which MessageSeenLogs to fetch.
     */
    where?: MessageSeenLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSeenLogs to fetch.
     */
    orderBy?: MessageSeenLogsOrderByWithRelationInput | MessageSeenLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageSeenLogs.
     */
    cursor?: MessageSeenLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSeenLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSeenLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageSeenLogs.
     */
    distinct?: MessageSeenLogsScalarFieldEnum | MessageSeenLogsScalarFieldEnum[]
  }


  /**
   * MessageSeenLogs findMany
   */
  export type MessageSeenLogsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSeenLogs
     */
    select?: MessageSeenLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageSeenLogsInclude<ExtArgs> | null
    /**
     * Filter, which MessageSeenLogs to fetch.
     */
    where?: MessageSeenLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSeenLogs to fetch.
     */
    orderBy?: MessageSeenLogsOrderByWithRelationInput | MessageSeenLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageSeenLogs.
     */
    cursor?: MessageSeenLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSeenLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSeenLogs.
     */
    skip?: number
    distinct?: MessageSeenLogsScalarFieldEnum | MessageSeenLogsScalarFieldEnum[]
  }


  /**
   * MessageSeenLogs create
   */
  export type MessageSeenLogsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSeenLogs
     */
    select?: MessageSeenLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageSeenLogsInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageSeenLogs.
     */
    data: XOR<MessageSeenLogsCreateInput, MessageSeenLogsUncheckedCreateInput>
  }


  /**
   * MessageSeenLogs createMany
   */
  export type MessageSeenLogsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageSeenLogs.
     */
    data: MessageSeenLogsCreateManyInput | MessageSeenLogsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MessageSeenLogs update
   */
  export type MessageSeenLogsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSeenLogs
     */
    select?: MessageSeenLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageSeenLogsInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageSeenLogs.
     */
    data: XOR<MessageSeenLogsUpdateInput, MessageSeenLogsUncheckedUpdateInput>
    /**
     * Choose, which MessageSeenLogs to update.
     */
    where: MessageSeenLogsWhereUniqueInput
  }


  /**
   * MessageSeenLogs updateMany
   */
  export type MessageSeenLogsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageSeenLogs.
     */
    data: XOR<MessageSeenLogsUpdateManyMutationInput, MessageSeenLogsUncheckedUpdateManyInput>
    /**
     * Filter which MessageSeenLogs to update
     */
    where?: MessageSeenLogsWhereInput
  }


  /**
   * MessageSeenLogs upsert
   */
  export type MessageSeenLogsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSeenLogs
     */
    select?: MessageSeenLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageSeenLogsInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageSeenLogs to update in case it exists.
     */
    where: MessageSeenLogsWhereUniqueInput
    /**
     * In case the MessageSeenLogs found by the `where` argument doesn't exist, create a new MessageSeenLogs with this data.
     */
    create: XOR<MessageSeenLogsCreateInput, MessageSeenLogsUncheckedCreateInput>
    /**
     * In case the MessageSeenLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageSeenLogsUpdateInput, MessageSeenLogsUncheckedUpdateInput>
  }


  /**
   * MessageSeenLogs delete
   */
  export type MessageSeenLogsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSeenLogs
     */
    select?: MessageSeenLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageSeenLogsInclude<ExtArgs> | null
    /**
     * Filter which MessageSeenLogs to delete.
     */
    where: MessageSeenLogsWhereUniqueInput
  }


  /**
   * MessageSeenLogs deleteMany
   */
  export type MessageSeenLogsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageSeenLogs to delete
     */
    where?: MessageSeenLogsWhereInput
  }


  /**
   * MessageSeenLogs without action
   */
  export type MessageSeenLogsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSeenLogs
     */
    select?: MessageSeenLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageSeenLogsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    alias: 'alias',
    image: 'image'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    userOneId: 'userOneId',
    userTwoId: 'userTwoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


  export const FriendRequestScalarFieldEnum: {
    id: 'id',
    requesterId: 'requesterId',
    addresseeId: 'addresseeId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FriendRequestScalarFieldEnum = (typeof FriendRequestScalarFieldEnum)[keyof typeof FriendRequestScalarFieldEnum]


  export const ConversationsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    owner: 'owner',
    theme: 'theme',
    emoji: 'emoji',
    nickName: 'nickName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum]


  export const ConversationParticipantScalarFieldEnum: {
    userId: 'userId',
    conversationId: 'conversationId'
  };

  export type ConversationParticipantScalarFieldEnum = (typeof ConversationParticipantScalarFieldEnum)[keyof typeof ConversationParticipantScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    content: 'content',
    fromId: 'fromId',
    isEdited: 'isEdited',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MessageSeenLogsScalarFieldEnum: {
    conversationId: 'conversationId',
    userId: 'userId',
    messageId: 'messageId',
    updatedAt: 'updatedAt'
  };

  export type MessageSeenLogsScalarFieldEnum = (typeof MessageSeenLogsScalarFieldEnum)[keyof typeof MessageSeenLogsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'FriendRequestStatus'
   */
  export type EnumFriendRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendRequestStatus'>
    


  /**
   * Reference to a field of type 'FriendRequestStatus[]'
   */
  export type ListEnumFriendRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendRequestStatus[]'>
    


  /**
   * Reference to a field of type 'ConversationType'
   */
  export type EnumConversationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationType'>
    


  /**
   * Reference to a field of type 'ConversationType[]'
   */
  export type ListEnumConversationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: UuidFilter<"Profile"> | string
    name?: StringFilter<"Profile"> | string
    alias?: StringFilter<"Profile"> | string
    image?: StringNullableFilter<"Profile"> | string | null
    conversationParticipants?: ConversationParticipantListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    image?: SortOrderInput | SortOrder
    conversationParticipants?: ConversationParticipantOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    alias?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringFilter<"Profile"> | string
    image?: StringNullableFilter<"Profile"> | string | null
    conversationParticipants?: ConversationParticipantListRelationFilter
  }, "id" | "alias">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Profile"> | string
    name?: StringWithAggregatesFilter<"Profile"> | string
    alias?: StringWithAggregatesFilter<"Profile"> | string
    image?: StringNullableWithAggregatesFilter<"Profile"> | string | null
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    userOneId?: UuidFilter<"Friendship"> | string
    userTwoId?: UuidFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    updatedAt?: DateTimeFilter<"Friendship"> | Date | string
  }

  export type FriendshipOrderByWithRelationInput = {
    userOneId?: SortOrder
    userTwoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    userOneId_userTwoId?: FriendshipUserOneIdUserTwoIdCompoundUniqueInput
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    userOneId?: UuidFilter<"Friendship"> | string
    userTwoId?: UuidFilter<"Friendship"> | string
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    updatedAt?: DateTimeFilter<"Friendship"> | Date | string
  }, "userOneId_userTwoId">

  export type FriendshipOrderByWithAggregationInput = {
    userOneId?: SortOrder
    userTwoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    userOneId?: UuidWithAggregatesFilter<"Friendship"> | string
    userTwoId?: UuidWithAggregatesFilter<"Friendship"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
  }

  export type FriendRequestWhereInput = {
    AND?: FriendRequestWhereInput | FriendRequestWhereInput[]
    OR?: FriendRequestWhereInput[]
    NOT?: FriendRequestWhereInput | FriendRequestWhereInput[]
    id?: IntFilter<"FriendRequest"> | number
    requesterId?: UuidFilter<"FriendRequest"> | string
    addresseeId?: UuidFilter<"FriendRequest"> | string
    status?: EnumFriendRequestStatusFilter<"FriendRequest"> | $Enums.FriendRequestStatus
    createdAt?: DateTimeFilter<"FriendRequest"> | Date | string
    updatedAt?: DateTimeFilter<"FriendRequest"> | Date | string
  }

  export type FriendRequestOrderByWithRelationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FriendRequestWhereInput | FriendRequestWhereInput[]
    OR?: FriendRequestWhereInput[]
    NOT?: FriendRequestWhereInput | FriendRequestWhereInput[]
    requesterId?: UuidFilter<"FriendRequest"> | string
    addresseeId?: UuidFilter<"FriendRequest"> | string
    status?: EnumFriendRequestStatusFilter<"FriendRequest"> | $Enums.FriendRequestStatus
    createdAt?: DateTimeFilter<"FriendRequest"> | Date | string
    updatedAt?: DateTimeFilter<"FriendRequest"> | Date | string
  }, "id">

  export type FriendRequestOrderByWithAggregationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FriendRequestCountOrderByAggregateInput
    _avg?: FriendRequestAvgOrderByAggregateInput
    _max?: FriendRequestMaxOrderByAggregateInput
    _min?: FriendRequestMinOrderByAggregateInput
    _sum?: FriendRequestSumOrderByAggregateInput
  }

  export type FriendRequestScalarWhereWithAggregatesInput = {
    AND?: FriendRequestScalarWhereWithAggregatesInput | FriendRequestScalarWhereWithAggregatesInput[]
    OR?: FriendRequestScalarWhereWithAggregatesInput[]
    NOT?: FriendRequestScalarWhereWithAggregatesInput | FriendRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FriendRequest"> | number
    requesterId?: UuidWithAggregatesFilter<"FriendRequest"> | string
    addresseeId?: UuidWithAggregatesFilter<"FriendRequest"> | string
    status?: EnumFriendRequestStatusWithAggregatesFilter<"FriendRequest"> | $Enums.FriendRequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"FriendRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FriendRequest"> | Date | string
  }

  export type ConversationsWhereInput = {
    AND?: ConversationsWhereInput | ConversationsWhereInput[]
    OR?: ConversationsWhereInput[]
    NOT?: ConversationsWhereInput | ConversationsWhereInput[]
    id?: UuidFilter<"Conversations"> | string
    type?: EnumConversationTypeFilter<"Conversations"> | $Enums.ConversationType
    owner?: StringNullableFilter<"Conversations"> | string | null
    theme?: StringNullableFilter<"Conversations"> | string | null
    emoji?: StringNullableFilter<"Conversations"> | string | null
    nickName?: StringNullableFilter<"Conversations"> | string | null
    createdAt?: DateTimeFilter<"Conversations"> | Date | string
    updatedAt?: DateTimeFilter<"Conversations"> | Date | string
    messageSeenLogs?: MessageSeenLogsListRelationFilter
    participants?: ConversationParticipantListRelationFilter
  }

  export type ConversationsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    owner?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    emoji?: SortOrderInput | SortOrder
    nickName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messageSeenLogs?: MessageSeenLogsOrderByRelationAggregateInput
    participants?: ConversationParticipantOrderByRelationAggregateInput
  }

  export type ConversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationsWhereInput | ConversationsWhereInput[]
    OR?: ConversationsWhereInput[]
    NOT?: ConversationsWhereInput | ConversationsWhereInput[]
    type?: EnumConversationTypeFilter<"Conversations"> | $Enums.ConversationType
    owner?: StringNullableFilter<"Conversations"> | string | null
    theme?: StringNullableFilter<"Conversations"> | string | null
    emoji?: StringNullableFilter<"Conversations"> | string | null
    nickName?: StringNullableFilter<"Conversations"> | string | null
    createdAt?: DateTimeFilter<"Conversations"> | Date | string
    updatedAt?: DateTimeFilter<"Conversations"> | Date | string
    messageSeenLogs?: MessageSeenLogsListRelationFilter
    participants?: ConversationParticipantListRelationFilter
  }, "id">

  export type ConversationsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    owner?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    emoji?: SortOrderInput | SortOrder
    nickName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversationsCountOrderByAggregateInput
    _max?: ConversationsMaxOrderByAggregateInput
    _min?: ConversationsMinOrderByAggregateInput
  }

  export type ConversationsScalarWhereWithAggregatesInput = {
    AND?: ConversationsScalarWhereWithAggregatesInput | ConversationsScalarWhereWithAggregatesInput[]
    OR?: ConversationsScalarWhereWithAggregatesInput[]
    NOT?: ConversationsScalarWhereWithAggregatesInput | ConversationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Conversations"> | string
    type?: EnumConversationTypeWithAggregatesFilter<"Conversations"> | $Enums.ConversationType
    owner?: StringNullableWithAggregatesFilter<"Conversations"> | string | null
    theme?: StringNullableWithAggregatesFilter<"Conversations"> | string | null
    emoji?: StringNullableWithAggregatesFilter<"Conversations"> | string | null
    nickName?: StringNullableWithAggregatesFilter<"Conversations"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Conversations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversations"> | Date | string
  }

  export type ConversationParticipantWhereInput = {
    AND?: ConversationParticipantWhereInput | ConversationParticipantWhereInput[]
    OR?: ConversationParticipantWhereInput[]
    NOT?: ConversationParticipantWhereInput | ConversationParticipantWhereInput[]
    userId?: UuidFilter<"ConversationParticipant"> | string
    conversationId?: UuidFilter<"ConversationParticipant"> | string
    user?: XOR<ProfileRelationFilter, ProfileWhereInput>
    conversation?: XOR<ConversationsRelationFilter, ConversationsWhereInput>
  }

  export type ConversationParticipantOrderByWithRelationInput = {
    userId?: SortOrder
    conversationId?: SortOrder
    user?: ProfileOrderByWithRelationInput
    conversation?: ConversationsOrderByWithRelationInput
  }

  export type ConversationParticipantWhereUniqueInput = Prisma.AtLeast<{
    userId_conversationId?: ConversationParticipantUserIdConversationIdCompoundUniqueInput
    AND?: ConversationParticipantWhereInput | ConversationParticipantWhereInput[]
    OR?: ConversationParticipantWhereInput[]
    NOT?: ConversationParticipantWhereInput | ConversationParticipantWhereInput[]
    userId?: UuidFilter<"ConversationParticipant"> | string
    conversationId?: UuidFilter<"ConversationParticipant"> | string
    user?: XOR<ProfileRelationFilter, ProfileWhereInput>
    conversation?: XOR<ConversationsRelationFilter, ConversationsWhereInput>
  }, "userId_conversationId">

  export type ConversationParticipantOrderByWithAggregationInput = {
    userId?: SortOrder
    conversationId?: SortOrder
    _count?: ConversationParticipantCountOrderByAggregateInput
    _max?: ConversationParticipantMaxOrderByAggregateInput
    _min?: ConversationParticipantMinOrderByAggregateInput
  }

  export type ConversationParticipantScalarWhereWithAggregatesInput = {
    AND?: ConversationParticipantScalarWhereWithAggregatesInput | ConversationParticipantScalarWhereWithAggregatesInput[]
    OR?: ConversationParticipantScalarWhereWithAggregatesInput[]
    NOT?: ConversationParticipantScalarWhereWithAggregatesInput | ConversationParticipantScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"ConversationParticipant"> | string
    conversationId?: UuidWithAggregatesFilter<"ConversationParticipant"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: UuidFilter<"Message"> | string
    conversationId?: UuidFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    fromId?: UuidFilter<"Message"> | string
    isEdited?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    fromId?: SortOrder
    isEdited?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    conversationId?: UuidFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    fromId?: UuidFilter<"Message"> | string
    isEdited?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    fromId?: SortOrder
    isEdited?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Message"> | string
    conversationId?: UuidWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    fromId?: UuidWithAggregatesFilter<"Message"> | string
    isEdited?: BoolWithAggregatesFilter<"Message"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type MessageSeenLogsWhereInput = {
    AND?: MessageSeenLogsWhereInput | MessageSeenLogsWhereInput[]
    OR?: MessageSeenLogsWhereInput[]
    NOT?: MessageSeenLogsWhereInput | MessageSeenLogsWhereInput[]
    conversationId?: UuidFilter<"MessageSeenLogs"> | string
    userId?: UuidFilter<"MessageSeenLogs"> | string
    messageId?: UuidFilter<"MessageSeenLogs"> | string
    updatedAt?: DateTimeFilter<"MessageSeenLogs"> | Date | string
    conversation?: XOR<ConversationsRelationFilter, ConversationsWhereInput>
  }

  export type MessageSeenLogsOrderByWithRelationInput = {
    conversationId?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    updatedAt?: SortOrder
    conversation?: ConversationsOrderByWithRelationInput
  }

  export type MessageSeenLogsWhereUniqueInput = Prisma.AtLeast<{
    conversationId_userId_messageId?: MessageSeenLogsConversationIdUserIdMessageIdCompoundUniqueInput
    AND?: MessageSeenLogsWhereInput | MessageSeenLogsWhereInput[]
    OR?: MessageSeenLogsWhereInput[]
    NOT?: MessageSeenLogsWhereInput | MessageSeenLogsWhereInput[]
    conversationId?: UuidFilter<"MessageSeenLogs"> | string
    userId?: UuidFilter<"MessageSeenLogs"> | string
    messageId?: UuidFilter<"MessageSeenLogs"> | string
    updatedAt?: DateTimeFilter<"MessageSeenLogs"> | Date | string
    conversation?: XOR<ConversationsRelationFilter, ConversationsWhereInput>
  }, "conversationId_userId_messageId">

  export type MessageSeenLogsOrderByWithAggregationInput = {
    conversationId?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageSeenLogsCountOrderByAggregateInput
    _max?: MessageSeenLogsMaxOrderByAggregateInput
    _min?: MessageSeenLogsMinOrderByAggregateInput
  }

  export type MessageSeenLogsScalarWhereWithAggregatesInput = {
    AND?: MessageSeenLogsScalarWhereWithAggregatesInput | MessageSeenLogsScalarWhereWithAggregatesInput[]
    OR?: MessageSeenLogsScalarWhereWithAggregatesInput[]
    NOT?: MessageSeenLogsScalarWhereWithAggregatesInput | MessageSeenLogsScalarWhereWithAggregatesInput[]
    conversationId?: UuidWithAggregatesFilter<"MessageSeenLogs"> | string
    userId?: UuidWithAggregatesFilter<"MessageSeenLogs"> | string
    messageId?: UuidWithAggregatesFilter<"MessageSeenLogs"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageSeenLogs"> | Date | string
  }

  export type ProfileCreateInput = {
    id: string
    name: string
    alias: string
    image?: string | null
    conversationParticipants?: ConversationParticipantCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    name: string
    alias: string
    image?: string | null
    conversationParticipants?: ConversationParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    conversationParticipants?: ConversationParticipantUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    conversationParticipants?: ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateManyInput = {
    id: string
    name: string
    alias: string
    image?: string | null
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FriendshipCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipUncheckedCreateInput = {
    userOneId: string
    userTwoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateInput = {
    userOneId?: StringFieldUpdateOperationsInput | string
    userTwoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateManyInput = {
    userOneId: string
    userTwoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyInput = {
    userOneId?: StringFieldUpdateOperationsInput | string
    userTwoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestCreateInput = {
    status: $Enums.FriendRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendRequestUncheckedCreateInput = {
    id?: number
    requesterId: string
    addresseeId: string
    status: $Enums.FriendRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendRequestUpdateInput = {
    status?: EnumFriendRequestStatusFieldUpdateOperationsInput | $Enums.FriendRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendRequestStatusFieldUpdateOperationsInput | $Enums.FriendRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestCreateManyInput = {
    id?: number
    requesterId: string
    addresseeId: string
    status: $Enums.FriendRequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendRequestUpdateManyMutationInput = {
    status?: EnumFriendRequestStatusFieldUpdateOperationsInput | $Enums.FriendRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendRequestStatusFieldUpdateOperationsInput | $Enums.FriendRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationsCreateInput = {
    id?: string
    type: $Enums.ConversationType
    owner?: string | null
    theme?: string | null
    emoji?: string | null
    nickName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messageSeenLogs?: MessageSeenLogsCreateNestedManyWithoutConversationInput
    participants?: ConversationParticipantCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateInput = {
    id?: string
    type: $Enums.ConversationType
    owner?: string | null
    theme?: string | null
    emoji?: string | null
    nickName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messageSeenLogs?: MessageSeenLogsUncheckedCreateNestedManyWithoutConversationInput
    participants?: ConversationParticipantUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageSeenLogs?: MessageSeenLogsUpdateManyWithoutConversationNestedInput
    participants?: ConversationParticipantUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageSeenLogs?: MessageSeenLogsUncheckedUpdateManyWithoutConversationNestedInput
    participants?: ConversationParticipantUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsCreateManyInput = {
    id?: string
    type: $Enums.ConversationType
    owner?: string | null
    theme?: string | null
    emoji?: string | null
    nickName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationParticipantCreateInput = {
    user: ProfileCreateNestedOneWithoutConversationParticipantsInput
    conversation: ConversationsCreateNestedOneWithoutParticipantsInput
  }

  export type ConversationParticipantUncheckedCreateInput = {
    userId: string
    conversationId: string
  }

  export type ConversationParticipantUpdateInput = {
    user?: ProfileUpdateOneRequiredWithoutConversationParticipantsNestedInput
    conversation?: ConversationsUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ConversationParticipantUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationParticipantCreateManyInput = {
    userId: string
    conversationId: string
  }

  export type ConversationParticipantUpdateManyMutationInput = {

  }

  export type ConversationParticipantUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    conversationId: string
    content: string
    fromId: string
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    conversationId: string
    content: string
    fromId: string
    isEdited?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageSeenLogsCreateInput = {
    updatedAt?: Date | string
    conversation: ConversationsCreateNestedOneWithoutMessageSeenLogsInput
  }

  export type MessageSeenLogsUncheckedCreateInput = {
    conversationId: string
    userId: string
    messageId: string
    updatedAt?: Date | string
  }

  export type MessageSeenLogsUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationsUpdateOneRequiredWithoutMessageSeenLogsNestedInput
  }

  export type MessageSeenLogsUncheckedUpdateInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageSeenLogsCreateManyInput = {
    conversationId: string
    userId: string
    messageId: string
    updatedAt?: Date | string
  }

  export type MessageSeenLogsUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageSeenLogsUncheckedUpdateManyInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ConversationParticipantListRelationFilter = {
    every?: ConversationParticipantWhereInput
    some?: ConversationParticipantWhereInput
    none?: ConversationParticipantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConversationParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    image?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    image?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    image?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FriendshipUserOneIdUserTwoIdCompoundUniqueInput = {
    userOneId: string
    userTwoId: string
  }

  export type FriendshipCountOrderByAggregateInput = {
    userOneId?: SortOrder
    userTwoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    userOneId?: SortOrder
    userTwoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    userOneId?: SortOrder
    userTwoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumFriendRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendRequestStatus | EnumFriendRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendRequestStatus[] | ListEnumFriendRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendRequestStatus[] | ListEnumFriendRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendRequestStatusFilter<$PrismaModel> | $Enums.FriendRequestStatus
  }

  export type FriendRequestCountOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FriendRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendRequestMinOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendRequestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumFriendRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendRequestStatus | EnumFriendRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendRequestStatus[] | ListEnumFriendRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendRequestStatus[] | ListEnumFriendRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendRequestStatusFilter<$PrismaModel>
  }

  export type EnumConversationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationType | EnumConversationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationTypeFilter<$PrismaModel> | $Enums.ConversationType
  }

  export type MessageSeenLogsListRelationFilter = {
    every?: MessageSeenLogsWhereInput
    some?: MessageSeenLogsWhereInput
    none?: MessageSeenLogsWhereInput
  }

  export type MessageSeenLogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    owner?: SortOrder
    theme?: SortOrder
    emoji?: SortOrder
    nickName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    owner?: SortOrder
    theme?: SortOrder
    emoji?: SortOrder
    nickName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    owner?: SortOrder
    theme?: SortOrder
    emoji?: SortOrder
    nickName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumConversationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationType | EnumConversationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConversationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConversationTypeFilter<$PrismaModel>
    _max?: NestedEnumConversationTypeFilter<$PrismaModel>
  }

  export type ProfileRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type ConversationsRelationFilter = {
    is?: ConversationsWhereInput
    isNot?: ConversationsWhereInput
  }

  export type ConversationParticipantUserIdConversationIdCompoundUniqueInput = {
    userId: string
    conversationId: string
  }

  export type ConversationParticipantCountOrderByAggregateInput = {
    userId?: SortOrder
    conversationId?: SortOrder
  }

  export type ConversationParticipantMaxOrderByAggregateInput = {
    userId?: SortOrder
    conversationId?: SortOrder
  }

  export type ConversationParticipantMinOrderByAggregateInput = {
    userId?: SortOrder
    conversationId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    fromId?: SortOrder
    isEdited?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    fromId?: SortOrder
    isEdited?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    fromId?: SortOrder
    isEdited?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MessageSeenLogsConversationIdUserIdMessageIdCompoundUniqueInput = {
    conversationId: string
    userId: string
    messageId: string
  }

  export type MessageSeenLogsCountOrderByAggregateInput = {
    conversationId?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageSeenLogsMaxOrderByAggregateInput = {
    conversationId?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageSeenLogsMinOrderByAggregateInput = {
    conversationId?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationParticipantCreateWithoutUserInput, ConversationParticipantUncheckedCreateWithoutUserInput> | ConversationParticipantCreateWithoutUserInput[] | ConversationParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationParticipantCreateOrConnectWithoutUserInput | ConversationParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ConversationParticipantCreateManyUserInputEnvelope
    connect?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
  }

  export type ConversationParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationParticipantCreateWithoutUserInput, ConversationParticipantUncheckedCreateWithoutUserInput> | ConversationParticipantCreateWithoutUserInput[] | ConversationParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationParticipantCreateOrConnectWithoutUserInput | ConversationParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ConversationParticipantCreateManyUserInputEnvelope
    connect?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ConversationParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationParticipantCreateWithoutUserInput, ConversationParticipantUncheckedCreateWithoutUserInput> | ConversationParticipantCreateWithoutUserInput[] | ConversationParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationParticipantCreateOrConnectWithoutUserInput | ConversationParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ConversationParticipantUpsertWithWhereUniqueWithoutUserInput | ConversationParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationParticipantCreateManyUserInputEnvelope
    set?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    disconnect?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    delete?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    connect?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    update?: ConversationParticipantUpdateWithWhereUniqueWithoutUserInput | ConversationParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationParticipantUpdateManyWithWhereWithoutUserInput | ConversationParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationParticipantScalarWhereInput | ConversationParticipantScalarWhereInput[]
  }

  export type ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationParticipantCreateWithoutUserInput, ConversationParticipantUncheckedCreateWithoutUserInput> | ConversationParticipantCreateWithoutUserInput[] | ConversationParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationParticipantCreateOrConnectWithoutUserInput | ConversationParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ConversationParticipantUpsertWithWhereUniqueWithoutUserInput | ConversationParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationParticipantCreateManyUserInputEnvelope
    set?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    disconnect?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    delete?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    connect?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    update?: ConversationParticipantUpdateWithWhereUniqueWithoutUserInput | ConversationParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationParticipantUpdateManyWithWhereWithoutUserInput | ConversationParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationParticipantScalarWhereInput | ConversationParticipantScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumFriendRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.FriendRequestStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MessageSeenLogsCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageSeenLogsCreateWithoutConversationInput, MessageSeenLogsUncheckedCreateWithoutConversationInput> | MessageSeenLogsCreateWithoutConversationInput[] | MessageSeenLogsUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageSeenLogsCreateOrConnectWithoutConversationInput | MessageSeenLogsCreateOrConnectWithoutConversationInput[]
    createMany?: MessageSeenLogsCreateManyConversationInputEnvelope
    connect?: MessageSeenLogsWhereUniqueInput | MessageSeenLogsWhereUniqueInput[]
  }

  export type ConversationParticipantCreateNestedManyWithoutConversationInput = {
    create?: XOR<ConversationParticipantCreateWithoutConversationInput, ConversationParticipantUncheckedCreateWithoutConversationInput> | ConversationParticipantCreateWithoutConversationInput[] | ConversationParticipantUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationParticipantCreateOrConnectWithoutConversationInput | ConversationParticipantCreateOrConnectWithoutConversationInput[]
    createMany?: ConversationParticipantCreateManyConversationInputEnvelope
    connect?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
  }

  export type MessageSeenLogsUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageSeenLogsCreateWithoutConversationInput, MessageSeenLogsUncheckedCreateWithoutConversationInput> | MessageSeenLogsCreateWithoutConversationInput[] | MessageSeenLogsUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageSeenLogsCreateOrConnectWithoutConversationInput | MessageSeenLogsCreateOrConnectWithoutConversationInput[]
    createMany?: MessageSeenLogsCreateManyConversationInputEnvelope
    connect?: MessageSeenLogsWhereUniqueInput | MessageSeenLogsWhereUniqueInput[]
  }

  export type ConversationParticipantUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<ConversationParticipantCreateWithoutConversationInput, ConversationParticipantUncheckedCreateWithoutConversationInput> | ConversationParticipantCreateWithoutConversationInput[] | ConversationParticipantUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationParticipantCreateOrConnectWithoutConversationInput | ConversationParticipantCreateOrConnectWithoutConversationInput[]
    createMany?: ConversationParticipantCreateManyConversationInputEnvelope
    connect?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
  }

  export type EnumConversationTypeFieldUpdateOperationsInput = {
    set?: $Enums.ConversationType
  }

  export type MessageSeenLogsUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageSeenLogsCreateWithoutConversationInput, MessageSeenLogsUncheckedCreateWithoutConversationInput> | MessageSeenLogsCreateWithoutConversationInput[] | MessageSeenLogsUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageSeenLogsCreateOrConnectWithoutConversationInput | MessageSeenLogsCreateOrConnectWithoutConversationInput[]
    upsert?: MessageSeenLogsUpsertWithWhereUniqueWithoutConversationInput | MessageSeenLogsUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageSeenLogsCreateManyConversationInputEnvelope
    set?: MessageSeenLogsWhereUniqueInput | MessageSeenLogsWhereUniqueInput[]
    disconnect?: MessageSeenLogsWhereUniqueInput | MessageSeenLogsWhereUniqueInput[]
    delete?: MessageSeenLogsWhereUniqueInput | MessageSeenLogsWhereUniqueInput[]
    connect?: MessageSeenLogsWhereUniqueInput | MessageSeenLogsWhereUniqueInput[]
    update?: MessageSeenLogsUpdateWithWhereUniqueWithoutConversationInput | MessageSeenLogsUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageSeenLogsUpdateManyWithWhereWithoutConversationInput | MessageSeenLogsUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageSeenLogsScalarWhereInput | MessageSeenLogsScalarWhereInput[]
  }

  export type ConversationParticipantUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ConversationParticipantCreateWithoutConversationInput, ConversationParticipantUncheckedCreateWithoutConversationInput> | ConversationParticipantCreateWithoutConversationInput[] | ConversationParticipantUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationParticipantCreateOrConnectWithoutConversationInput | ConversationParticipantCreateOrConnectWithoutConversationInput[]
    upsert?: ConversationParticipantUpsertWithWhereUniqueWithoutConversationInput | ConversationParticipantUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ConversationParticipantCreateManyConversationInputEnvelope
    set?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    disconnect?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    delete?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    connect?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    update?: ConversationParticipantUpdateWithWhereUniqueWithoutConversationInput | ConversationParticipantUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ConversationParticipantUpdateManyWithWhereWithoutConversationInput | ConversationParticipantUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ConversationParticipantScalarWhereInput | ConversationParticipantScalarWhereInput[]
  }

  export type MessageSeenLogsUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageSeenLogsCreateWithoutConversationInput, MessageSeenLogsUncheckedCreateWithoutConversationInput> | MessageSeenLogsCreateWithoutConversationInput[] | MessageSeenLogsUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageSeenLogsCreateOrConnectWithoutConversationInput | MessageSeenLogsCreateOrConnectWithoutConversationInput[]
    upsert?: MessageSeenLogsUpsertWithWhereUniqueWithoutConversationInput | MessageSeenLogsUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageSeenLogsCreateManyConversationInputEnvelope
    set?: MessageSeenLogsWhereUniqueInput | MessageSeenLogsWhereUniqueInput[]
    disconnect?: MessageSeenLogsWhereUniqueInput | MessageSeenLogsWhereUniqueInput[]
    delete?: MessageSeenLogsWhereUniqueInput | MessageSeenLogsWhereUniqueInput[]
    connect?: MessageSeenLogsWhereUniqueInput | MessageSeenLogsWhereUniqueInput[]
    update?: MessageSeenLogsUpdateWithWhereUniqueWithoutConversationInput | MessageSeenLogsUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageSeenLogsUpdateManyWithWhereWithoutConversationInput | MessageSeenLogsUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageSeenLogsScalarWhereInput | MessageSeenLogsScalarWhereInput[]
  }

  export type ConversationParticipantUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ConversationParticipantCreateWithoutConversationInput, ConversationParticipantUncheckedCreateWithoutConversationInput> | ConversationParticipantCreateWithoutConversationInput[] | ConversationParticipantUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ConversationParticipantCreateOrConnectWithoutConversationInput | ConversationParticipantCreateOrConnectWithoutConversationInput[]
    upsert?: ConversationParticipantUpsertWithWhereUniqueWithoutConversationInput | ConversationParticipantUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ConversationParticipantCreateManyConversationInputEnvelope
    set?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    disconnect?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    delete?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    connect?: ConversationParticipantWhereUniqueInput | ConversationParticipantWhereUniqueInput[]
    update?: ConversationParticipantUpdateWithWhereUniqueWithoutConversationInput | ConversationParticipantUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ConversationParticipantUpdateManyWithWhereWithoutConversationInput | ConversationParticipantUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ConversationParticipantScalarWhereInput | ConversationParticipantScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutConversationParticipantsInput = {
    create?: XOR<ProfileCreateWithoutConversationParticipantsInput, ProfileUncheckedCreateWithoutConversationParticipantsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutConversationParticipantsInput
    connect?: ProfileWhereUniqueInput
  }

  export type ConversationsCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<ConversationsCreateWithoutParticipantsInput, ConversationsUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutParticipantsInput
    connect?: ConversationsWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutConversationParticipantsNestedInput = {
    create?: XOR<ProfileCreateWithoutConversationParticipantsInput, ProfileUncheckedCreateWithoutConversationParticipantsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutConversationParticipantsInput
    upsert?: ProfileUpsertWithoutConversationParticipantsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutConversationParticipantsInput, ProfileUpdateWithoutConversationParticipantsInput>, ProfileUncheckedUpdateWithoutConversationParticipantsInput>
  }

  export type ConversationsUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<ConversationsCreateWithoutParticipantsInput, ConversationsUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutParticipantsInput
    upsert?: ConversationsUpsertWithoutParticipantsInput
    connect?: ConversationsWhereUniqueInput
    update?: XOR<XOR<ConversationsUpdateToOneWithWhereWithoutParticipantsInput, ConversationsUpdateWithoutParticipantsInput>, ConversationsUncheckedUpdateWithoutParticipantsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ConversationsCreateNestedOneWithoutMessageSeenLogsInput = {
    create?: XOR<ConversationsCreateWithoutMessageSeenLogsInput, ConversationsUncheckedCreateWithoutMessageSeenLogsInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutMessageSeenLogsInput
    connect?: ConversationsWhereUniqueInput
  }

  export type ConversationsUpdateOneRequiredWithoutMessageSeenLogsNestedInput = {
    create?: XOR<ConversationsCreateWithoutMessageSeenLogsInput, ConversationsUncheckedCreateWithoutMessageSeenLogsInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutMessageSeenLogsInput
    upsert?: ConversationsUpsertWithoutMessageSeenLogsInput
    connect?: ConversationsWhereUniqueInput
    update?: XOR<XOR<ConversationsUpdateToOneWithWhereWithoutMessageSeenLogsInput, ConversationsUpdateWithoutMessageSeenLogsInput>, ConversationsUncheckedUpdateWithoutMessageSeenLogsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFriendRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendRequestStatus | EnumFriendRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendRequestStatus[] | ListEnumFriendRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendRequestStatus[] | ListEnumFriendRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendRequestStatusFilter<$PrismaModel> | $Enums.FriendRequestStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumFriendRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendRequestStatus | EnumFriendRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendRequestStatus[] | ListEnumFriendRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendRequestStatus[] | ListEnumFriendRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumConversationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationType | EnumConversationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationTypeFilter<$PrismaModel> | $Enums.ConversationType
  }

  export type NestedEnumConversationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConversationType | EnumConversationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConversationType[] | ListEnumConversationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConversationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConversationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConversationTypeFilter<$PrismaModel>
    _max?: NestedEnumConversationTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ConversationParticipantCreateWithoutUserInput = {
    conversation: ConversationsCreateNestedOneWithoutParticipantsInput
  }

  export type ConversationParticipantUncheckedCreateWithoutUserInput = {
    conversationId: string
  }

  export type ConversationParticipantCreateOrConnectWithoutUserInput = {
    where: ConversationParticipantWhereUniqueInput
    create: XOR<ConversationParticipantCreateWithoutUserInput, ConversationParticipantUncheckedCreateWithoutUserInput>
  }

  export type ConversationParticipantCreateManyUserInputEnvelope = {
    data: ConversationParticipantCreateManyUserInput | ConversationParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversationParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationParticipantWhereUniqueInput
    update: XOR<ConversationParticipantUpdateWithoutUserInput, ConversationParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationParticipantCreateWithoutUserInput, ConversationParticipantUncheckedCreateWithoutUserInput>
  }

  export type ConversationParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationParticipantWhereUniqueInput
    data: XOR<ConversationParticipantUpdateWithoutUserInput, ConversationParticipantUncheckedUpdateWithoutUserInput>
  }

  export type ConversationParticipantUpdateManyWithWhereWithoutUserInput = {
    where: ConversationParticipantScalarWhereInput
    data: XOR<ConversationParticipantUpdateManyMutationInput, ConversationParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversationParticipantScalarWhereInput = {
    AND?: ConversationParticipantScalarWhereInput | ConversationParticipantScalarWhereInput[]
    OR?: ConversationParticipantScalarWhereInput[]
    NOT?: ConversationParticipantScalarWhereInput | ConversationParticipantScalarWhereInput[]
    userId?: UuidFilter<"ConversationParticipant"> | string
    conversationId?: UuidFilter<"ConversationParticipant"> | string
  }

  export type MessageSeenLogsCreateWithoutConversationInput = {
    updatedAt?: Date | string
  }

  export type MessageSeenLogsUncheckedCreateWithoutConversationInput = {
    userId: string
    messageId: string
    updatedAt?: Date | string
  }

  export type MessageSeenLogsCreateOrConnectWithoutConversationInput = {
    where: MessageSeenLogsWhereUniqueInput
    create: XOR<MessageSeenLogsCreateWithoutConversationInput, MessageSeenLogsUncheckedCreateWithoutConversationInput>
  }

  export type MessageSeenLogsCreateManyConversationInputEnvelope = {
    data: MessageSeenLogsCreateManyConversationInput | MessageSeenLogsCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type ConversationParticipantCreateWithoutConversationInput = {
    user: ProfileCreateNestedOneWithoutConversationParticipantsInput
  }

  export type ConversationParticipantUncheckedCreateWithoutConversationInput = {
    userId: string
  }

  export type ConversationParticipantCreateOrConnectWithoutConversationInput = {
    where: ConversationParticipantWhereUniqueInput
    create: XOR<ConversationParticipantCreateWithoutConversationInput, ConversationParticipantUncheckedCreateWithoutConversationInput>
  }

  export type ConversationParticipantCreateManyConversationInputEnvelope = {
    data: ConversationParticipantCreateManyConversationInput | ConversationParticipantCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type MessageSeenLogsUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageSeenLogsWhereUniqueInput
    update: XOR<MessageSeenLogsUpdateWithoutConversationInput, MessageSeenLogsUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageSeenLogsCreateWithoutConversationInput, MessageSeenLogsUncheckedCreateWithoutConversationInput>
  }

  export type MessageSeenLogsUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageSeenLogsWhereUniqueInput
    data: XOR<MessageSeenLogsUpdateWithoutConversationInput, MessageSeenLogsUncheckedUpdateWithoutConversationInput>
  }

  export type MessageSeenLogsUpdateManyWithWhereWithoutConversationInput = {
    where: MessageSeenLogsScalarWhereInput
    data: XOR<MessageSeenLogsUpdateManyMutationInput, MessageSeenLogsUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageSeenLogsScalarWhereInput = {
    AND?: MessageSeenLogsScalarWhereInput | MessageSeenLogsScalarWhereInput[]
    OR?: MessageSeenLogsScalarWhereInput[]
    NOT?: MessageSeenLogsScalarWhereInput | MessageSeenLogsScalarWhereInput[]
    conversationId?: UuidFilter<"MessageSeenLogs"> | string
    userId?: UuidFilter<"MessageSeenLogs"> | string
    messageId?: UuidFilter<"MessageSeenLogs"> | string
    updatedAt?: DateTimeFilter<"MessageSeenLogs"> | Date | string
  }

  export type ConversationParticipantUpsertWithWhereUniqueWithoutConversationInput = {
    where: ConversationParticipantWhereUniqueInput
    update: XOR<ConversationParticipantUpdateWithoutConversationInput, ConversationParticipantUncheckedUpdateWithoutConversationInput>
    create: XOR<ConversationParticipantCreateWithoutConversationInput, ConversationParticipantUncheckedCreateWithoutConversationInput>
  }

  export type ConversationParticipantUpdateWithWhereUniqueWithoutConversationInput = {
    where: ConversationParticipantWhereUniqueInput
    data: XOR<ConversationParticipantUpdateWithoutConversationInput, ConversationParticipantUncheckedUpdateWithoutConversationInput>
  }

  export type ConversationParticipantUpdateManyWithWhereWithoutConversationInput = {
    where: ConversationParticipantScalarWhereInput
    data: XOR<ConversationParticipantUpdateManyMutationInput, ConversationParticipantUncheckedUpdateManyWithoutConversationInput>
  }

  export type ProfileCreateWithoutConversationParticipantsInput = {
    id: string
    name: string
    alias: string
    image?: string | null
  }

  export type ProfileUncheckedCreateWithoutConversationParticipantsInput = {
    id: string
    name: string
    alias: string
    image?: string | null
  }

  export type ProfileCreateOrConnectWithoutConversationParticipantsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutConversationParticipantsInput, ProfileUncheckedCreateWithoutConversationParticipantsInput>
  }

  export type ConversationsCreateWithoutParticipantsInput = {
    id?: string
    type: $Enums.ConversationType
    owner?: string | null
    theme?: string | null
    emoji?: string | null
    nickName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messageSeenLogs?: MessageSeenLogsCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateWithoutParticipantsInput = {
    id?: string
    type: $Enums.ConversationType
    owner?: string | null
    theme?: string | null
    emoji?: string | null
    nickName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messageSeenLogs?: MessageSeenLogsUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsCreateOrConnectWithoutParticipantsInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutParticipantsInput, ConversationsUncheckedCreateWithoutParticipantsInput>
  }

  export type ProfileUpsertWithoutConversationParticipantsInput = {
    update: XOR<ProfileUpdateWithoutConversationParticipantsInput, ProfileUncheckedUpdateWithoutConversationParticipantsInput>
    create: XOR<ProfileCreateWithoutConversationParticipantsInput, ProfileUncheckedCreateWithoutConversationParticipantsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutConversationParticipantsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutConversationParticipantsInput, ProfileUncheckedUpdateWithoutConversationParticipantsInput>
  }

  export type ProfileUpdateWithoutConversationParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateWithoutConversationParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversationsUpsertWithoutParticipantsInput = {
    update: XOR<ConversationsUpdateWithoutParticipantsInput, ConversationsUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ConversationsCreateWithoutParticipantsInput, ConversationsUncheckedCreateWithoutParticipantsInput>
    where?: ConversationsWhereInput
  }

  export type ConversationsUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: ConversationsWhereInput
    data: XOR<ConversationsUpdateWithoutParticipantsInput, ConversationsUncheckedUpdateWithoutParticipantsInput>
  }

  export type ConversationsUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageSeenLogs?: MessageSeenLogsUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageSeenLogs?: MessageSeenLogsUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsCreateWithoutMessageSeenLogsInput = {
    id?: string
    type: $Enums.ConversationType
    owner?: string | null
    theme?: string | null
    emoji?: string | null
    nickName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ConversationParticipantCreateNestedManyWithoutConversationInput
  }

  export type ConversationsUncheckedCreateWithoutMessageSeenLogsInput = {
    id?: string
    type: $Enums.ConversationType
    owner?: string | null
    theme?: string | null
    emoji?: string | null
    nickName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ConversationParticipantUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationsCreateOrConnectWithoutMessageSeenLogsInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutMessageSeenLogsInput, ConversationsUncheckedCreateWithoutMessageSeenLogsInput>
  }

  export type ConversationsUpsertWithoutMessageSeenLogsInput = {
    update: XOR<ConversationsUpdateWithoutMessageSeenLogsInput, ConversationsUncheckedUpdateWithoutMessageSeenLogsInput>
    create: XOR<ConversationsCreateWithoutMessageSeenLogsInput, ConversationsUncheckedCreateWithoutMessageSeenLogsInput>
    where?: ConversationsWhereInput
  }

  export type ConversationsUpdateToOneWithWhereWithoutMessageSeenLogsInput = {
    where?: ConversationsWhereInput
    data: XOR<ConversationsUpdateWithoutMessageSeenLogsInput, ConversationsUncheckedUpdateWithoutMessageSeenLogsInput>
  }

  export type ConversationsUpdateWithoutMessageSeenLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ConversationParticipantUpdateManyWithoutConversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutMessageSeenLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConversationTypeFieldUpdateOperationsInput | $Enums.ConversationType
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ConversationParticipantUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationParticipantCreateManyUserInput = {
    conversationId: string
  }

  export type ConversationParticipantUpdateWithoutUserInput = {
    conversation?: ConversationsUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ConversationParticipantUncheckedUpdateWithoutUserInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationParticipantUncheckedUpdateManyWithoutUserInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageSeenLogsCreateManyConversationInput = {
    userId: string
    messageId: string
    updatedAt?: Date | string
  }

  export type ConversationParticipantCreateManyConversationInput = {
    userId: string
  }

  export type MessageSeenLogsUpdateWithoutConversationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageSeenLogsUncheckedUpdateWithoutConversationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageSeenLogsUncheckedUpdateManyWithoutConversationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationParticipantUpdateWithoutConversationInput = {
    user?: ProfileUpdateOneRequiredWithoutConversationParticipantsNestedInput
  }

  export type ConversationParticipantUncheckedUpdateWithoutConversationInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationParticipantUncheckedUpdateManyWithoutConversationInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProfileCountOutputTypeDefaultArgs instead
     */
    export type ProfileCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationsCountOutputTypeDefaultArgs instead
     */
    export type ConversationsCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ConversationsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfileDefaultArgs instead
     */
    export type ProfileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FriendshipDefaultArgs instead
     */
    export type FriendshipArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FriendshipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FriendRequestDefaultArgs instead
     */
    export type FriendRequestArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FriendRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationsDefaultArgs instead
     */
    export type ConversationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ConversationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationParticipantDefaultArgs instead
     */
    export type ConversationParticipantArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ConversationParticipantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageSeenLogsDefaultArgs instead
     */
    export type MessageSeenLogsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MessageSeenLogsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}