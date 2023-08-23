

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      ConversationParticipant: {
        Row: {
          conversationId: string
          userId: string
        }
        Insert: {
          conversationId: string
          userId: string
        }
        Update: {
          conversationId?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "ConversationParticipant_conversationId_fkey"
            columns: ["conversationId"]
            referencedRelation: "Conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ConversationParticipant_userId_fkey"
            columns: ["userId"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      Conversations: {
        Row: {
          created_at: string
          emoji: string | null
          id: string
          nickName: string | null
          owner: string | null
          theme: string | null
          type: Database["public"]["Enums"]["ConversationType"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          emoji?: string | null
          id: string
          nickName?: string | null
          owner?: string | null
          theme?: string | null
          type: Database["public"]["Enums"]["ConversationType"]
          updated_at: string
        }
        Update: {
          created_at?: string
          emoji?: string | null
          id?: string
          nickName?: string | null
          owner?: string | null
          theme?: string | null
          type?: Database["public"]["Enums"]["ConversationType"]
          updated_at?: string
        }
        Relationships: []
      }
      FriendRequest: {
        Row: {
          addressee_id: string
          created_at: string
          id: number
          requester_id: string
          status: Database["public"]["Enums"]["FriendRequestStatus"]
          updated_at: string
        }
        Insert: {
          addressee_id: string
          created_at?: string
          id?: number
          requester_id: string
          status: Database["public"]["Enums"]["FriendRequestStatus"]
          updated_at: string
        }
        Update: {
          addressee_id?: string
          created_at?: string
          id?: number
          requester_id?: string
          status?: Database["public"]["Enums"]["FriendRequestStatus"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FriendRequest_addressee_id_fkey"
            columns: ["addressee_id"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FriendRequest_requester_id_fkey"
            columns: ["requester_id"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      Friendship: {
        Row: {
          created_at: string
          updated_at: string
          user_one_id: string
          user_two_id: string
        }
        Insert: {
          created_at?: string
          updated_at: string
          user_one_id: string
          user_two_id: string
        }
        Update: {
          created_at?: string
          updated_at?: string
          user_one_id?: string
          user_two_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Friendship_user_one_id_fkey"
            columns: ["user_one_id"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Friendship_user_two_id_fkey"
            columns: ["user_two_id"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      Message: {
        Row: {
          content: string
          conversationId: string
          createdAt: string
          fromId: string
          id: string
          isEdited: boolean
          updatedAt: string
        }
        Insert: {
          content: string
          conversationId: string
          createdAt?: string
          fromId: string
          id: string
          isEdited?: boolean
          updatedAt: string
        }
        Update: {
          content?: string
          conversationId?: string
          createdAt?: string
          fromId?: string
          id?: string
          isEdited?: boolean
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Message_conversationId_fkey"
            columns: ["conversationId"]
            referencedRelation: "Conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Message_fromId_fkey"
            columns: ["fromId"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      MessageSeenLogs: {
        Row: {
          conversationId: string
          messageId: string
          updatedAt: string
          userId: string
        }
        Insert: {
          conversationId: string
          messageId: string
          updatedAt: string
          userId: string
        }
        Update: {
          conversationId?: string
          messageId?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "MessageSeenLogs_conversationId_fkey"
            columns: ["conversationId"]
            referencedRelation: "Conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "MessageSeenLogs_messageId_fkey"
            columns: ["messageId"]
            referencedRelation: "Message"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "MessageSeenLogs_userId_fkey"
            columns: ["userId"]
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      Profile: {
        Row: {
          alias: string
          id: string
          image: string | null
          name: string
        }
        Insert: {
          alias: string
          id: string
          image?: string | null
          name: string
        }
        Update: {
          alias?: string
          id?: string
          image?: string | null
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      ConversationType: "group" | "pair"
      FriendRequestStatus: "pending" | "blocked"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

