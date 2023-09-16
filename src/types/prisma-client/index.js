
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
 * Prisma Client JS version: 5.3.0
 * Query Engine version: e90b936d84779543cbe0e494bc8b9d7337fad8e4
 */
Prisma.prismaVersion = {
  client: "5.3.0",
  engine: "e90b936d84779543cbe0e494bc8b9d7337fad8e4"
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
  "clientVersion": "5.3.0",
  "engineVersion": "e90b936d84779543cbe0e494bc8b9d7337fad8e4",
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
  "inlineSchema": "Ly8jcmVnaW9uIEhFQUQKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgID0gZW52KCJEQl9VUkwiKQogIGRpcmVjdFVybCA9IGVudigiREJfRElSRUNUX1VSTCIpCn0KCmdlbmVyYXRvciBjbGllbnQgewogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgPSAiLi4vc3JjL3R5cGVzL3ByaXNtYS1jbGllbnQiCiAgLy9iaW5hcnlUYXJnZXRzID0gWyJuYXRpdmUiXQp9CgovLyBHZW5lcmF0ZSBiZXR0ZXIgZW50aXR5IG1vZGVsIHRoYW4gInByaXNtYS1jbGllbnQtanMiCmdlbmVyYXRvciB6b2QgewogIHByb3ZpZGVyICAgICAgICAgICAgICAgICAgICAgICAgID0gIm5weCB6b2QtcHJpc21hLXR5cGVzIC1wbSBwbnBtIgogIG91dHB1dCAgICAgICAgICAgICAgICAgICAgICAgICAgID0gIi4uL3NyYy90eXBlcy96b2QtZW50aXRpZXMiCiAgcHJpc21hQ2xpZW50UGF0aCAgICAgICAgICAgICAgICAgPSAiLi4vcHJpc21hLWNsaWVudCIKICBjcmVhdGVNb2RlbFR5cGVzICAgICAgICAgICAgICAgICA9IHRydWUKICBjb2VyY2VEYXRlICAgICAgICAgICAgICAgICAgICAgICA9IHRydWUKICB3cml0ZU51bGxpc2hJbk1vZGVsVHlwZXMgICAgICAgICA9IHRydWUKICBjcmVhdGVPcHRpb25hbERlZmF1bHRWYWx1ZXNUeXBlcyA9IGZhbHNlCiAgY3JlYXRlUmVsYXRpb25WYWx1ZXNUeXBlcyAgICAgICAgPSBmYWxzZQogIGNyZWF0ZUlucHV0VHlwZXMgICAgICAgICAgICAgICAgID0gZmFsc2UKICBhZGRJbmNsdWRlVHlwZSAgICAgICAgICAgICAgICAgICA9IGZhbHNlCiAgYWRkU2VsZWN0VHlwZSAgICAgICAgICAgICAgICAgICAgPSBmYWxzZQogIGNyZWF0ZVBhcnRpYWxUeXBlcyAgICAgICAgICAgICAgID0gZmFsc2UKICBhZGRJbnB1dFR5cGVWYWxpZGF0aW9uICAgICAgICAgICA9IGZhbHNlCiAgdmFsaWRhdGVXaGVyZVVuaXF1ZUlucHV0ICAgICAgICAgPSBmYWxzZQogIHVzZURlZmF1bHRWYWxpZGF0b3JzICAgICAgICAgICAgID0gZmFsc2UKfQoKLy8jZW5kcmVnaW9uCgptb2RlbCBQcm9maWxlIHsKICBpZCBTdHJpbmcgQGlkIEBkYi5VdWlkIC8vL0B6b2Quc3RyaW5nLnV1aWQoKQoKICBuYW1lICBTdHJpbmcKICBhbGlhcyBTdHJpbmcgIEB1bmlxdWUKICBpbWFnZSBTdHJpbmc/CgogIGZyaWVuZE9uZXMgICAgICAgICAgICAgICBGcmllbmRzaGlwW10gICAgICAgICAgICAgIEByZWxhdGlvbigidXNlck9uZSIpIEBpZ25vcmUKICBmcmllbmRUd29zICAgICAgICAgICAgICAgRnJpZW5kc2hpcFtdICAgICAgICAgICAgICBAcmVsYXRpb24oInVzZXJUd28iKSBAaWdub3JlCiAgYWRkcmVzc2VlcyAgICAgICAgICAgICAgIEZyaWVuZFJlcXVlc3RbXSAgICAgICAgICAgQHJlbGF0aW9uKCJhZGRyZXNzZWUiKSBAaWdub3JlCiAgcmVxdWVzdGVycyAgICAgICAgICAgICAgIEZyaWVuZFJlcXVlc3RbXSAgICAgICAgICAgQHJlbGF0aW9uKCJyZXF1ZXN0ZXIiKSBAaWdub3JlCiAgbWVzc2FnZSAgICAgICAgICAgICAgICAgIE1lc3NhZ2VbXSAgICAgICAgICAgICAgICAgQGlnbm9yZQogIG1lc3NhZ2VTZWVuTG9nICAgICAgICAgICBNZXNzYWdlU2VlbkxvZ3NbXSAgICAgICAgIEBpZ25vcmUKICBjb252ZXJzYXRpb25QYXJ0aWNpcGFudHMgQ29udmVyc2F0aW9uUGFydGljaXBhbnRbXQp9Cgptb2RlbCBGcmllbmRzaGlwIHsKICB1c2VyT25lSWQgU3RyaW5nIEBtYXAoInVzZXJfb25lX2lkIikgQGRiLlV1aWQgLy8vQHpvZC5zdHJpbmcudXVpZCgpCiAgdXNlclR3b0lkIFN0cmluZyBAbWFwKCJ1c2VyX3R3b19pZCIpIEBkYi5VdWlkIC8vL0B6b2Quc3RyaW5nLnV1aWQoKQoKICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZSBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfYXQiKQoKICB1c2VyT25lIFByb2ZpbGUgQHJlbGF0aW9uKCJ1c2VyT25lIiwgZmllbGRzOiBbdXNlck9uZUlkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgdXNlclR3byBQcm9maWxlIEByZWxhdGlvbigidXNlclR3byIsIGZpZWxkczogW3VzZXJUd29JZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoKICBAQGlkKFt1c2VyT25lSWQsIHVzZXJUd29JZF0pCn0KCmVudW0gRnJpZW5kUmVxdWVzdFN0YXR1cyB7CiAgcGVuZGluZyAvLyBwZW5kaW5nIGFuZCBhd2FpdGluZyBhcHByb3ZhbCBmcm9tIHRoZSByZWNpcGllbnQgdXNlci4KICBibG9ja2VkIC8vIGhhcyBiZWVuIGJsb2NrZWQgYnkgZWl0aGVyIHRoZSBzZW5kZXIgb3IgdGhlIHJlY2lwaWVudCwgcHJldmVudGluZyBmdXJ0aGVyIGNvbW11bmljYXRpb24uCn0KCm1vZGVsIEZyaWVuZFJlcXVlc3QgewogIGlkIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQoKICByZXF1ZXN0ZXJJZCBTdHJpbmcgICAgICAgICAgICAgIEBtYXAoInJlcXVlc3Rlcl9pZCIpIEBkYi5VdWlkIC8vL0B6b2Quc3RyaW5nLnV1aWQoKQogIGFkZHJlc3NlZUlkIFN0cmluZyAgICAgICAgICAgICAgQG1hcCgiYWRkcmVzc2VlX2lkIikgQGRiLlV1aWQgLy8vQHpvZC5zdHJpbmcudXVpZCgpCiAgc3RhdHVzICAgICAgRnJpZW5kUmVxdWVzdFN0YXR1cwogIGNyZWF0ZWRBdCAgIERhdGVUaW1lICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgIERhdGVUaW1lICAgICAgICAgICAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgcmVxdWVzdGVyIFByb2ZpbGUgQHJlbGF0aW9uKCJyZXF1ZXN0ZXIiLCBmaWVsZHM6IFtyZXF1ZXN0ZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIGFkZHJlc3NlZSBQcm9maWxlIEByZWxhdGlvbigiYWRkcmVzc2VlIiwgZmllbGRzOiBbYWRkcmVzc2VlSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKfQoKZW51bSBDb252ZXJzYXRpb25UeXBlIHsKICBncm91cAogIHBhaXIKfQoKbW9kZWwgQ29udmVyc2F0aW9ucyB7CiAgaWQgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkIC8vL0B6b2Quc3RyaW5nLnV1aWQoKQoKICB0eXBlICAgICAgQ29udmVyc2F0aW9uVHlwZQogIG93bmVyICAgICBTdHJpbmc/CiAgdGhlbWUgICAgIFN0cmluZz8KICBlbW9qaSAgICAgU3RyaW5nPwogIG5pY2tOYW1lICBTdHJpbmc/CiAgY3JlYXRlZEF0IERhdGVUaW1lICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZSAgICAgICAgIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZF9hdCIpCgogIG1lc3NhZ2VTZWVuTG9ncyBNZXNzYWdlU2VlbkxvZ3NbXQogIG1lc3NhZ2VzICAgICAgICBNZXNzYWdlW10KICBwYXJ0aWNpcGFudHMgICAgQ29udmVyc2F0aW9uUGFydGljaXBhbnRbXQp9Cgptb2RlbCBDb252ZXJzYXRpb25QYXJ0aWNpcGFudCB7CiAgdXNlcklkICAgICAgICAgU3RyaW5nIEBkYi5VdWlkIC8vL0B6b2Quc3RyaW5nLnV1aWQoKQogIGNvbnZlcnNhdGlvbklkIFN0cmluZyBAZGIuVXVpZCAvLy9Aem9kLnN0cmluZy51dWlkKCkKCiAgdXNlciAgICAgICAgIFByb2ZpbGUgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY29udmVyc2F0aW9uIENvbnZlcnNhdGlvbnMgQHJlbGF0aW9uKGZpZWxkczogW2NvbnZlcnNhdGlvbklkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBpZChbdXNlcklkLCBjb252ZXJzYXRpb25JZF0pCn0KCm1vZGVsIE1lc3NhZ2UgewogIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZCAvLy9Aem9kLnN0cmluZy51dWlkKCkKCiAgY29udmVyc2F0aW9uSWQgU3RyaW5nICAgQGRiLlV1aWQgLy8vQHpvZC5zdHJpbmcudXVpZCgpCiAgY29udGVudCAgICAgICAgU3RyaW5nIC8vLyBAem9kLnN0cmluZy5taW4oMSkubWF4KDIwMDApCiAgZnJvbUlkICAgICAgICAgU3RyaW5nICAgQGRiLlV1aWQgLy8vQHpvZC5zdHJpbmcudXVpZCgpCiAgaXNFZGl0ZWQgICAgICAgQm9vbGVhbiAgQGRlZmF1bHQoZmFsc2UpCiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgRGF0ZVRpbWUgQHVwZGF0ZWRBdAoKICBmcm9tIFByb2ZpbGUgQHJlbGF0aW9uKGZpZWxkczogW2Zyb21JZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBOb0FjdGlvbikKCiAgY29udmVyc2F0aW9uICAgQ29udmVyc2F0aW9ucyAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NvbnZlcnNhdGlvbklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpIEBpZ25vcmUKICBtZXNzYWdlU2VlbkxvZyBNZXNzYWdlU2VlbkxvZ3NbXSBAaWdub3JlCn0KCm1vZGVsIE1lc3NhZ2VTZWVuTG9ncyB7CiAgY29udmVyc2F0aW9uSWQgU3RyaW5nIEBkYi5VdWlkIC8vL0B6b2Quc3RyaW5nLnV1aWQoKQogIHVzZXJJZCAgICAgICAgIFN0cmluZyBAZGIuVXVpZCAvLy9Aem9kLnN0cmluZy51dWlkKCkKICBtZXNzYWdlSWQgICAgICBTdHJpbmcgQGRiLlV1aWQgLy8vQHpvZC5zdHJpbmcudXVpZCgpCgogIHVwZGF0ZWRBdCBEYXRlVGltZSBAdXBkYXRlZEF0CgogIG1lc3NhZ2UgICAgICBNZXNzYWdlICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFttZXNzYWdlSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICB1c2VycyAgICAgICAgUHJvZmlsZSAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgY29udmVyc2F0aW9uIENvbnZlcnNhdGlvbnMgQHJlbGF0aW9uKGZpZWxkczogW2NvbnZlcnNhdGlvbklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCgogIEBAaWQoW2NvbnZlcnNhdGlvbklkLCB1c2VySWQsIG1lc3NhZ2VJZF0pCn0K",
  "inlineSchemaHash": "c98e3fb907f5e6565bcf544ab236ce73d56e9a5cfd0ec908b65c82a512083082",
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
