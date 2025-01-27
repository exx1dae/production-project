import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Comment, CommentSchema } from "../types/comment";

export const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

const initialState: CommentSchema = {
  text: "",
};

export const commentSlice = createSlice({
  name: "Comment",
  initialState,
  reducers: {
    updateCommentText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: commentActions } = commentSlice;
export const { reducer: commentReducer } = commentSlice;
