import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Article } from "entities/Article";
import { StateSchema } from "app/providers/StoreProvider";
import { ArticleRecommendationsSchema } from "../types/ArticleRecommendationsSchema";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ||
      recommendationsAdapter.getInitialState(),
  );

export const articleRecommendationsSlice = createSlice({
  name: "articleRecommendationsSlice",
  initialState:
    recommendationsAdapter.getInitialState<ArticleRecommendationsSchema>({
      isLoading: false,
      error: "",
      ids: [],
      entities: {},
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleRecommendations.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
      state.isLoading = false;
      recommendationsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchArticleRecommendations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articleRecommendationsActions } =
  articleRecommendationsSlice;
export const { reducer: articleRecommendationsReducer } =
  articleRecommendationsSlice;
