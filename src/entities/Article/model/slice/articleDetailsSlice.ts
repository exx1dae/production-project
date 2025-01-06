import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { Article } from "../types/article";

const initialState: ArticleDetailsSchema = {
  error: undefined,
  data: undefined,
  isLoading: false,
};

export const articleDetailsSlice = createSlice({
  name: "articleDetailsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
      state.data = undefined;
    });
    builder.addCase(
      fetchArticleById.fulfilled,
      (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.error = undefined;
        state.data = action.payload;
      },
    );
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articleDetailsSliceActions } = articleDetailsSlice;
export const { reducer: articleDetailsSliceReducer } = articleDetailsSlice;
