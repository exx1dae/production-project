import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { fetchArticlesList } from "../../services/fetchArticlesList/fetchArticlesList";
import { getArticlesPageInited } from "../../../model/selectors/articlesPageSelectors";
import { articlesPageActions } from "../../../model/slices/articlesPageSlice";

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("ArticlesPage/initArticlesPage", async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;

  const isInited = getArticlesPageInited(getState());

  if (!isInited) {
    dispatch(articlesPageActions.initState());

    dispatch(
      fetchArticlesList({
        page: 1,
      }),
    );
  }
});
