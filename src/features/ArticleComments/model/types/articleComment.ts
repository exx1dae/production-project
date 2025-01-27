import { Comment, CommentSchema } from "entities/Comment";

export interface ArticleComment extends Comment {
  articleId: string;
  userId: string;
}

export interface ArticleCommentSchema extends CommentSchema {
  articleId: string;
  userId: string;
}
