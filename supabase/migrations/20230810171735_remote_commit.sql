
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pg_net" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

ALTER SCHEMA "public" OWNER TO "postgres";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE TYPE "public"."ConversationType" AS ENUM (
    'group',
    'pair'
);

ALTER TYPE "public"."ConversationType" OWNER TO "postgres";

CREATE TYPE "public"."FriendRequestStatus" AS ENUM (
    'pending',
    'blocked'
);

ALTER TYPE "public"."FriendRequestStatus" OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE "public"."ConversationParticipant" (
    "userId" "uuid" NOT NULL,
    "conversationId" "uuid" NOT NULL
);

ALTER TABLE "public"."ConversationParticipant" OWNER TO "postgres";

CREATE TABLE "public"."Conversations" (
    "id" "uuid" NOT NULL,
    "type" "public"."ConversationType" NOT NULL,
    "owner" "text",
    "theme" "text",
    "emoji" "text",
    "nickName" "text",
    "created_at" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updated_at" timestamp(3) without time zone NOT NULL
);

ALTER TABLE "public"."Conversations" OWNER TO "postgres";

CREATE TABLE "public"."FriendRequest" (
    "id" integer NOT NULL,
    "requester_id" "uuid" NOT NULL,
    "addressee_id" "uuid" NOT NULL,
    "status" "public"."FriendRequestStatus" NOT NULL,
    "created_at" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updated_at" timestamp(3) without time zone NOT NULL
);

ALTER TABLE "public"."FriendRequest" OWNER TO "postgres";

CREATE SEQUENCE "public"."FriendRequest_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."FriendRequest_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."FriendRequest_id_seq" OWNED BY "public"."FriendRequest"."id";

CREATE TABLE "public"."Friendship" (
    "user_one_id" "uuid" NOT NULL,
    "user_two_id" "uuid" NOT NULL,
    "created_at" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updated_at" timestamp(3) without time zone NOT NULL
);

ALTER TABLE "public"."Friendship" OWNER TO "postgres";

CREATE TABLE "public"."Message" (
    "id" "uuid" NOT NULL,
    "conversationId" "uuid" NOT NULL,
    "content" "text" NOT NULL,
    "fromId" "uuid" NOT NULL,
    "isEdited" boolean DEFAULT false NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);

ALTER TABLE "public"."Message" OWNER TO "postgres";

CREATE TABLE "public"."MessageSeenLogs" (
    "conversationId" "uuid" NOT NULL,
    "userId" "uuid" NOT NULL,
    "messageId" "uuid" NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);

ALTER TABLE "public"."MessageSeenLogs" OWNER TO "postgres";

CREATE TABLE "public"."User" (
    "id" "uuid" NOT NULL,
    "name" "text" NOT NULL,
    "alias" "text" NOT NULL,
    "image" "text"
);

ALTER TABLE "public"."User" OWNER TO "postgres";

CREATE TABLE "public"."_prisma_migrations" (
    "id" character varying(36) NOT NULL,
    "checksum" character varying(64) NOT NULL,
    "finished_at" timestamp with time zone,
    "migration_name" character varying(255) NOT NULL,
    "logs" "text",
    "rolled_back_at" timestamp with time zone,
    "started_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "applied_steps_count" integer DEFAULT 0 NOT NULL
);

ALTER TABLE "public"."_prisma_migrations" OWNER TO "postgres";

ALTER TABLE ONLY "public"."FriendRequest" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."FriendRequest_id_seq"'::"regclass");

ALTER TABLE ONLY "public"."ConversationParticipant"
    ADD CONSTRAINT "ConversationParticipant_pkey" PRIMARY KEY ("userId", "conversationId");

ALTER TABLE ONLY "public"."Conversations"
    ADD CONSTRAINT "Conversations_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."FriendRequest"
    ADD CONSTRAINT "FriendRequest_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."Friendship"
    ADD CONSTRAINT "Friendship_pkey" PRIMARY KEY ("user_one_id", "user_two_id");

ALTER TABLE ONLY "public"."MessageSeenLogs"
    ADD CONSTRAINT "MessageSeenLogs_pkey" PRIMARY KEY ("conversationId", "userId", "messageId");

ALTER TABLE ONLY "public"."Message"
    ADD CONSTRAINT "Message_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."_prisma_migrations"
    ADD CONSTRAINT "_prisma_migrations_pkey" PRIMARY KEY ("id");

CREATE UNIQUE INDEX "User_alias_key" ON "public"."User" USING "btree" ("alias");

ALTER TABLE ONLY "public"."ConversationParticipant"
    ADD CONSTRAINT "ConversationParticipant_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "public"."Conversations"("id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE ONLY "public"."ConversationParticipant"
    ADD CONSTRAINT "ConversationParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE ONLY "public"."FriendRequest"
    ADD CONSTRAINT "FriendRequest_addressee_id_fkey" FOREIGN KEY ("addressee_id") REFERENCES "public"."User"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."FriendRequest"
    ADD CONSTRAINT "FriendRequest_requester_id_fkey" FOREIGN KEY ("requester_id") REFERENCES "public"."User"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."Friendship"
    ADD CONSTRAINT "Friendship_user_one_id_fkey" FOREIGN KEY ("user_one_id") REFERENCES "public"."User"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."Friendship"
    ADD CONSTRAINT "Friendship_user_two_id_fkey" FOREIGN KEY ("user_two_id") REFERENCES "public"."User"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."MessageSeenLogs"
    ADD CONSTRAINT "MessageSeenLogs_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "public"."Conversations"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."MessageSeenLogs"
    ADD CONSTRAINT "MessageSeenLogs_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "public"."Message"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."MessageSeenLogs"
    ADD CONSTRAINT "MessageSeenLogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."Message"
    ADD CONSTRAINT "Message_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "public"."Conversations"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."Message"
    ADD CONSTRAINT "Message_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "public"."User"("id") ON UPDATE CASCADE;

ALTER TABLE "public"."ConversationParticipant" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."Conversations" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."FriendRequest" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."Friendship" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."Message" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."MessageSeenLogs" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."User" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."_prisma_migrations" ENABLE ROW LEVEL SECURITY;

REVOKE USAGE ON SCHEMA "public" FROM PUBLIC;

RESET ALL;
