import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const ProfileScalarFieldEnumSchema = z.enum(['id','name','alias','image']);

export const FriendshipScalarFieldEnumSchema = z.enum(['userOneId','userTwoId','createdAt','updatedAt']);

export const FriendRequestScalarFieldEnumSchema = z.enum(['id','requesterId','addresseeId','status','createdAt','updatedAt']);

export const ConversationsScalarFieldEnumSchema = z.enum(['id','type','owner','theme','emoji','nickName','createdAt','updatedAt']);

export const ConversationParticipantScalarFieldEnumSchema = z.enum(['userId','conversationId']);

export const MessageScalarFieldEnumSchema = z.enum(['id','conversationId','content','fromId','isEdited','createdAt','updatedAt']);

export const MessageSeenLogsScalarFieldEnumSchema = z.enum(['conversationId','userId','messageId','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const FriendRequestStatusSchema = z.enum(['pending','blocked']);

export type FriendRequestStatusType = `${z.infer<typeof FriendRequestStatusSchema>}`

export const ConversationTypeSchema = z.enum(['group','pair']);

export type ConversationTypeType = `${z.infer<typeof ConversationTypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PROFILE SCHEMA
/////////////////////////////////////////

export const ProfileSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  alias: z.string(),
  image: z.string().nullish(),
})

export type Profile = z.infer<typeof ProfileSchema>

/////////////////////////////////////////
// FRIENDSHIP SCHEMA
/////////////////////////////////////////

export const FriendshipSchema = z.object({
  userOneId: z.string().uuid(),
  userTwoId: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Friendship = z.infer<typeof FriendshipSchema>

/////////////////////////////////////////
// FRIEND REQUEST SCHEMA
/////////////////////////////////////////

export const FriendRequestSchema = z.object({
  status: FriendRequestStatusSchema,
  id: z.number(),
  requesterId: z.string().uuid(),
  addresseeId: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type FriendRequest = z.infer<typeof FriendRequestSchema>

/////////////////////////////////////////
// CONVERSATIONS SCHEMA
/////////////////////////////////////////

export const ConversationsSchema = z.object({
  type: ConversationTypeSchema,
  id: z.string().uuid(),
  owner: z.string().nullish(),
  theme: z.string().nullish(),
  emoji: z.string().nullish(),
  nickName: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Conversations = z.infer<typeof ConversationsSchema>

/////////////////////////////////////////
// CONVERSATION PARTICIPANT SCHEMA
/////////////////////////////////////////

export const ConversationParticipantSchema = z.object({
  userId: z.string().uuid(),
  conversationId: z.string().uuid(),
})

export type ConversationParticipant = z.infer<typeof ConversationParticipantSchema>

/////////////////////////////////////////
// MESSAGE SCHEMA
/////////////////////////////////////////

export const MessageSchema = z.object({
  id: z.string().uuid(),
  conversationId: z.string().uuid(),
  content: z.string().min(1).max(2000),
  fromId: z.string().uuid(),
  isEdited: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Message = z.infer<typeof MessageSchema>

/////////////////////////////////////////
// MESSAGE SEEN LOGS SCHEMA
/////////////////////////////////////////

export const MessageSeenLogsSchema = z.object({
  conversationId: z.string().uuid(),
  userId: z.string().uuid(),
  messageId: z.string().uuid(),
  updatedAt: z.coerce.date(),
})

export type MessageSeenLogs = z.infer<typeof MessageSeenLogsSchema>
