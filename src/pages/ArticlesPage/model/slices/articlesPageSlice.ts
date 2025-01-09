import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";
import { StateSchema } from "app/providers/StoreProvider";
import { ArticlesPageSchema } from "../types/articlePageSchema";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { VIEW_LOCAL_STORAGE_KEY } from "shared/const/localstorage";

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const initialState = articlesAdapter.getInitialState<ArticlesPageSchema>({
  isLoading: false,
  ids: [],
  entities: {},
  view: ArticleView.GRID,
});

export const articlesPageSlice = createSlice({
  name: "articlesPageSlice",
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(VIEW_LOCAL_STORAGE_KEY) as ArticleView;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchArticlesList.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      },
    );
    builder.addCase(
      fetchArticlesList.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    );
  },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
