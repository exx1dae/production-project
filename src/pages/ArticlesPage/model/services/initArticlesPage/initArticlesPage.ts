import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { fetchArticlesList } from "../../services/fetchArticlesList/fetchArticlesList";
import { getArticlesPageInited } from "../../../model/selectors/articlesPageSelectors";
import { articlesPageActions } from "../../../model/slices/articlesPageSlice";
import { SortOrder } from "shared/types";
import { ArticleSortField, ArticleType } from "entities/Article";

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>("ArticlesPage/initArticlesPage", async (searchParams, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;

  const isInited = getArticlesPageInited(getState());

  if (!isInited) {
    const orderFromUrl = searchParams.get("order") as SortOrder;
    const sortFromUrl = searchParams.get("sort") as ArticleSortField;
    const queryFromUrl = searchParams.get("q");
    const typeFromUrl = searchParams.get("type") as ArticleType;

    dispatch(articlesPageActions.setOrder(orderFromUrl ?? "asc"));
    dispatch(
      articlesPageActions.setSort(sortFromUrl ?? ArticleSortField.TITLE),
    );
    dispatch(articlesPageActions.setSearch(queryFromUrl ?? ""));
    dispatch(articlesPageActions.setType(typeFromUrl ?? ArticleType.ALL));

    dispatch(articlesPageActions.initState());

    dispatch(fetchArticlesList({}));
  }
});
