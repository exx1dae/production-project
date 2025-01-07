import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { Comment } from "entities/Comment";
import { StateSchema } from "app/providers/StoreProvider";
import { ArticleCommentsSchema } from "../types/ArticleCommentsSchema";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleComments || commentsAdapter.getInitialState(),
);

export const articleCommentListSlice = createSlice({
  name: "articleCommentList",
  initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
    isLoading: false,
    ids: [],
    error: undefined,
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      fetchCommentsByArticleId.fulfilled,
      (state, action: PayloadAction<Comment[]>) => {
        state.error = undefined;
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      },
    );
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { actions: articleCommentActions } = articleCommentListSlice;
export const { reducer: articleCommentsReducer } = articleCommentListSlice;
