export { CommentList } from "./ui/CommentList/CommentList";
export type { Comment, CommentSchema } from "./model/types/comment";

export { CommentFormAsync as CommentForm } from "./ui/CommentForm/CommentForm.async";

export { commentsAdapter, commentReducer } from "./model/slice/commentSlice";
