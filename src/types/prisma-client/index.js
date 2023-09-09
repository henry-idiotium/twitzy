
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.2.0
 * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
 */
Prisma.prismaVersion = {
  client: "5.2.0",
  engine: "2804dc98259d2ea960602aca6b8e7fdc03c1758f"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProfileScalarFieldEnum = {
  id: 'id',
  name: 'name',
  alias: 'alias',
  image: 'image'
};

exports.Prisma.FriendshipScalarFieldEnum = {
  userOneId: 'userOneId',
  userTwoId: 'userTwoId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FriendRequestScalarFieldEnum = {
  id: 'id',
  requesterId: 'requesterId',
  addresseeId: 'addresseeId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ConversationsScalarFieldEnum = {
  id: 'id',
  type: 'type',
  owner: 'owner',
  theme: 'theme',
  emoji: 'emoji',
  nickName: 'nickName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ConversationParticipantScalarFieldEnum = {
  userId: 'userId',
  conversationId: 'conversationId'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  conversationId: 'conversationId',
  content: 'content',
  fromId: 'fromId',
  isEdited: 'isEdited',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MessageSeenLogsScalarFieldEnum = {
  conversationId: 'conversationId',
  userId: 'userId',
  messageId: 'messageId',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.FriendRequestStatus = exports.$Enums.FriendRequestStatus = {
  pending: 'pending',
  blocked: 'blocked'
};

exports.ConversationType = exports.$Enums.ConversationType = {
  group: 'group',
  pair: 'pair'
};

exports.Prisma.ModelName = {
  Profile: 'Profile',
  Friendship: 'Friendship',
  FriendRequest: 'FriendRequest',
  Conversations: 'Conversations',
  ConversationParticipant: 'ConversationParticipant',
  Message: 'Message',
  MessageSeenLogs: 'MessageSeenLogs'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/henry/documents/projects/twitzy/src/types/prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.2.0",
  "engineVersion": "2804dc98259d2ea960602aca6b8e7fdc03c1758f",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DB_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8jcmVnaW9uIEhFQUQKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgID0gZW52KCJEQl9VUkwiKQogIGRpcmVjdFVybCA9IGVudigiREJfRElSRUNUX1VSTCIpCn0KCmdlbmVyYXRvciBjbGllbnQgewogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgPSAiLi4vc3JjL3R5cGVzL3ByaXNtYS1jbGllbnQiCiAgLy9iaW5hcnlUYXJnZXRzID0gWyJuYXRpdmUiXQp9CgovLyBHZW5lcmF0ZSBiZXR0ZXIgZW50aXR5IG1vZGVsIHRoYW4gInByaXNtYS1jbGllbnQtanMiCmdlbmVyYXRvciB6b2QgewogIHByb3ZpZGVyICAgICAgICAgICAgICAgICAgICAgICAgID0gIm5weCB6b2QtcHJpc21hLXR5cGVzIC1wbSBwbnBtIgogIG91dHB1dCAgICAgICAgICAgICAgICAgICAgICAgICAgID0gIi4uL3NyYy90eXBlcy96b2QtZW50aXRpZXMiCiAgY3JlYXRlTW9kZWxUeXBlcyAgICAgICAgICAgICAgICAgPSB0cnVlCiAgY29lcmNlRGF0ZSAgICAgICAgICAgICAgICAgICAgICAgPSB0cnVlCiAgd3JpdGVOdWxsaXNoSW5Nb2RlbFR5cGVzICAgICAgICAgPSB0cnVlCiAgY3JlYXRlT3B0aW9uYWxEZWZhdWx0VmFsdWVzVHlwZXMgPSBmYWxzZQogIGNyZWF0ZVJlbGF0aW9uVmFsdWVzVHlwZXMgICAgICAgID0gZmFsc2UKICBjcmVhdGVJbnB1dFR5cGVzICAgICAgICAgICAgICAgICA9IGZhbHNlCiAgYWRkSW5jbHVkZVR5cGUgICAgICAgICAgICAgICAgICAgPSBmYWxzZQogIGFkZFNlbGVjdFR5cGUgICAgICAgICAgICAgICAgICAgID0gZmFsc2UKICBjcmVhdGVQYXJ0aWFsVHlwZXMgICAgICAgICAgICAgICA9IGZhbHNlCiAgYWRkSW5wdXRUeXBlVmFsaWRhdGlvbiAgICAgICAgICAgPSBmYWxzZQogIHZhbGlkYXRlV2hlcmVVbmlxdWVJbnB1dCAgICAgICAgID0gZmFsc2UKICB1c2VEZWZhdWx0VmFsaWRhdG9ycyAgICAgICAgICAgICA9IGZhbHNlCn0KCi8vI2VuZHJlZ2lvbgoKbW9kZWwgUHJvZmlsZSB7CiAgaWQgU3RyaW5nIEBpZCBAZGIuVXVpZCAvLy9Aem9kLnN0cmluZy51dWlkKCkKCiAgbmFtZSAgU3RyaW5nCiAgYWxpYXMgU3RyaW5nICBAdW5pcXVlCiAgaW1hZ2UgU3RyaW5nPwoKICBmcmllbmRPbmVzICAgICAgICAgICAgICAgRnJpZW5kc2hpcFtdICAgICAgICAgICAgICBAcmVsYXRpb24oInVzZXJPbmUiKSBAaWdub3JlCiAgZnJpZW5kVHdvcyAgICAgICAgICAgICAgIEZyaWVuZHNoaXBbXSAgICAgICAgICAgICAgQHJlbGF0aW9uKCJ1c2VyVHdvIikgQGlnbm9yZQogIGFkZHJlc3NlZXMgICAgICAgICAgICAgICBGcmllbmRSZXF1ZXN0W10gICAgICAgICAgIEByZWxhdGlvbigiYWRkcmVzc2VlIikgQGlnbm9yZQogIHJlcXVlc3RlcnMgICAgICAgICAgICAgICBGcmllbmRSZXF1ZXN0W10gICAgICAgICAgIEByZWxhdGlvbigicmVxdWVzdGVyIikgQGlnbm9yZQogIG1lc3NhZ2UgICAgICAgICAgICAgICAgICBNZXNzYWdlW10gICAgICAgICAgICAgICAgIEBpZ25vcmUKICBtZXNzYWdlU2VlbkxvZyAgICAgICAgICAgTWVzc2FnZVNlZW5Mb2dzW10gICAgICAgICBAaWdub3JlCiAgY29udmVyc2F0aW9uUGFydGljaXBhbnRzIENvbnZlcnNhdGlvblBhcnRpY2lwYW50W10KfQoKbW9kZWwgRnJpZW5kc2hpcCB7CiAgdXNlck9uZUlkIFN0cmluZyBAbWFwKCJ1c2VyX29uZV9pZCIpIEBkYi5VdWlkIC8vL0B6b2Quc3RyaW5nLnV1aWQoKQogIHVzZXJUd29JZCBTdHJpbmcgQG1hcCgidXNlcl90d29faWQiKSBAZGIuVXVpZCAvLy9Aem9kLnN0cmluZy51dWlkKCkKCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgRGF0ZVRpbWUgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgdXNlck9uZSBQcm9maWxlIEByZWxhdGlvbigidXNlck9uZSIsIGZpZWxkczogW3VzZXJPbmVJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHVzZXJUd28gUHJvZmlsZSBAcmVsYXRpb24oInVzZXJUd28iLCBmaWVsZHM6IFt1c2VyVHdvSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCiAgQEBpZChbdXNlck9uZUlkLCB1c2VyVHdvSWRdKQp9CgplbnVtIEZyaWVuZFJlcXVlc3RTdGF0dXMgewogIHBlbmRpbmcgLy8gcGVuZGluZyBhbmQgYXdhaXRpbmcgYXBwcm92YWwgZnJvbSB0aGUgcmVjaXBpZW50IHVzZXIuCiAgYmxvY2tlZCAvLyBoYXMgYmVlbiBibG9ja2VkIGJ5IGVpdGhlciB0aGUgc2VuZGVyIG9yIHRoZSByZWNpcGllbnQsIHByZXZlbnRpbmcgZnVydGhlciBjb21tdW5pY2F0aW9uLgp9Cgptb2RlbCBGcmllbmRSZXF1ZXN0IHsKICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKCiAgcmVxdWVzdGVySWQgU3RyaW5nICAgICAgICAgICAgICBAbWFwKCJyZXF1ZXN0ZXJfaWQiKSBAZGIuVXVpZCAvLy9Aem9kLnN0cmluZy51dWlkKCkKICBhZGRyZXNzZWVJZCBTdHJpbmcgICAgICAgICAgICAgIEBtYXAoImFkZHJlc3NlZV9pZCIpIEBkYi5VdWlkIC8vL0B6b2Quc3RyaW5nLnV1aWQoKQogIHN0YXR1cyAgICAgIEZyaWVuZFJlcXVlc3RTdGF0dXMKICBjcmVhdGVkQXQgICBEYXRlVGltZSAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgICBEYXRlVGltZSAgICAgICAgICAgIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZF9hdCIpCgogIHJlcXVlc3RlciBQcm9maWxlIEByZWxhdGlvbigicmVxdWVzdGVyIiwgZmllbGRzOiBbcmVxdWVzdGVySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBhZGRyZXNzZWUgUHJvZmlsZSBAcmVsYXRpb24oImFkZHJlc3NlZSIsIGZpZWxkczogW2FkZHJlc3NlZUlkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCn0KCmVudW0gQ29udmVyc2F0aW9uVHlwZSB7CiAgZ3JvdXAKICBwYWlyCn0KCm1vZGVsIENvbnZlcnNhdGlvbnMgewogIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCAvLy9Aem9kLnN0cmluZy51dWlkKCkKCiAgdHlwZSAgICAgIENvbnZlcnNhdGlvblR5cGUKICBvd25lciAgICAgU3RyaW5nPwogIHRoZW1lICAgICBTdHJpbmc/CiAgZW1vamkgICAgIFN0cmluZz8KICBuaWNrTmFtZSAgU3RyaW5nPwogIGNyZWF0ZWRBdCBEYXRlVGltZSAgICAgICAgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgRGF0ZVRpbWUgICAgICAgICBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBtZXNzYWdlU2VlbkxvZ3MgTWVzc2FnZVNlZW5Mb2dzW10KICBtZXNzYWdlcyAgICAgICAgTWVzc2FnZVtdCiAgcGFydGljaXBhbnRzICAgIENvbnZlcnNhdGlvblBhcnRpY2lwYW50W10KfQoKbW9kZWwgQ29udmVyc2F0aW9uUGFydGljaXBhbnQgewogIHVzZXJJZCAgICAgICAgIFN0cmluZyBAZGIuVXVpZCAvLy9Aem9kLnN0cmluZy51dWlkKCkKICBjb252ZXJzYXRpb25JZCBTdHJpbmcgQGRiLlV1aWQgLy8vQHpvZC5zdHJpbmcudXVpZCgpCgogIHVzZXIgICAgICAgICBQcm9maWxlICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGNvbnZlcnNhdGlvbiBDb252ZXJzYXRpb25zIEByZWxhdGlvbihmaWVsZHM6IFtjb252ZXJzYXRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAaWQoW3VzZXJJZCwgY29udmVyc2F0aW9uSWRdKQp9Cgptb2RlbCBNZXNzYWdlIHsKICBpZCBTdHJpbmcgQGlkIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQgLy8vQHpvZC5zdHJpbmcudXVpZCgpCgogIGNvbnZlcnNhdGlvbklkIFN0cmluZyAgIEBkYi5VdWlkIC8vL0B6b2Quc3RyaW5nLnV1aWQoKQogIGNvbnRlbnQgICAgICAgIFN0cmluZyAvLy8gQHpvZC5zdHJpbmcubWluKDEpLm1heCgyMDAwKQogIGZyb21JZCAgICAgICAgIFN0cmluZyAgIEBkYi5VdWlkIC8vL0B6b2Quc3RyaW5nLnV1aWQoKQogIGlzRWRpdGVkICAgICAgIEJvb2xlYW4gIEBkZWZhdWx0KGZhbHNlKQogIGNyZWF0ZWRBdCAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgICAgIERhdGVUaW1lIEB1cGRhdGVkQXQKCiAgZnJvbSBQcm9maWxlIEByZWxhdGlvbihmaWVsZHM6IFtmcm9tSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24pCgogIGNvbnZlcnNhdGlvbiAgIENvbnZlcnNhdGlvbnMgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjb252ZXJzYXRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKSBAaWdub3JlCiAgbWVzc2FnZVNlZW5Mb2cgTWVzc2FnZVNlZW5Mb2dzW10gQGlnbm9yZQp9Cgptb2RlbCBNZXNzYWdlU2VlbkxvZ3MgewogIGNvbnZlcnNhdGlvbklkIFN0cmluZyBAZGIuVXVpZCAvLy9Aem9kLnN0cmluZy51dWlkKCkKICB1c2VySWQgICAgICAgICBTdHJpbmcgQGRiLlV1aWQgLy8vQHpvZC5zdHJpbmcudXVpZCgpCiAgbWVzc2FnZUlkICAgICAgU3RyaW5nIEBkYi5VdWlkIC8vL0B6b2Quc3RyaW5nLnV1aWQoKQoKICB1cGRhdGVkQXQgRGF0ZVRpbWUgQHVwZGF0ZWRBdAoKICBtZXNzYWdlICAgICAgTWVzc2FnZSAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbbWVzc2FnZUlkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgdXNlcnMgICAgICAgIFByb2ZpbGUgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIGNvbnZlcnNhdGlvbiBDb252ZXJzYXRpb25zIEByZWxhdGlvbihmaWVsZHM6IFtjb252ZXJzYXRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoKICBAQGlkKFtjb252ZXJzYXRpb25JZCwgdXNlcklkLCBtZXNzYWdlSWRdKQp9Cg==",
  "inlineSchemaHash": "2c098206bf16076663ab033ba378941029f1805fe85dbde89a7d04f6aafe9e79",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/types/prisma-client",
    "types/prisma-client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Profile\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alias\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversationParticipants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ConversationParticipant\",\"relationName\":\"ConversationParticipantToProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Friendship\":{\"dbName\":null,\"fields\":[{\"name\":\"userOneId\",\"dbName\":\"user_one_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"userTwoId\",\"dbName\":\"user_two_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"userOne\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"userOne\",\"relationFromFields\":[\"userOneId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userTwo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"userTwo\",\"relationFromFields\":[\"userTwoId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userOneId\",\"userTwoId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FriendRequest\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requesterId\",\"dbName\":\"requester_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"addresseeId\",\"dbName\":\"addressee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FriendRequestStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"requester\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"requester\",\"relationFromFields\":[\"requesterId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"addressee\",\"relationFromFields\":[\"addresseeId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Conversations\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ConversationType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"theme\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emoji\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"messageSeenLogs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageSeenLogs\",\"relationName\":\"ConversationsToMessageSeenLogs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"relationName\":\"ConversationsToMessage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"participants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ConversationParticipant\",\"relationName\":\"ConversationParticipantToConversations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ConversationParticipant\":{\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"conversationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"ConversationParticipantToProfile\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conversations\",\"relationName\":\"ConversationParticipantToConversations\",\"relationFromFields\":[\"conversationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"conversationId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Message\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"conversationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.min(1).max(2000)\"},{\"name\":\"fromId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"isEdited\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"from\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"MessageToProfile\",\"relationFromFields\":[\"fromId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MessageSeenLogs\":{\"dbName\":null,\"fields\":[{\"name\":\"conversationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"messageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@zod.string.uuid()\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"message\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"relationName\":\"MessageToMessageSeenLogs\",\"relationFromFields\":[\"messageId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"MessageSeenLogsToProfile\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conversations\",\"relationName\":\"ConversationsToMessageSeenLogs\",\"relationFromFields\":[\"conversationId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"conversationId\",\"userId\",\"messageId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"FriendRequestStatus\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"blocked\",\"dbName\":null}],\"dbName\":null},\"ConversationType\":{\"values\":[{\"name\":\"group\",\"dbName\":null},{\"name\":\"pair\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "src/types/prisma-client/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/types/prisma-client/schema.prisma")
