import { User } from "entities/User";

export interface Comment {
  id: string;
  text: string;
  user: User;
}

export type CommentSchema = Omit<Comment, "id" | "user">;
