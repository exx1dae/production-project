import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "entities/Article";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>("fetchArticleRecommendations", async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;

  try {
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _limit: 4,
      },
    });

    if (!response.data) {
      return rejectWithValue("error");
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
