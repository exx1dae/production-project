import {
  articleCommentsReducer,
  ArticleCommentsSchema,
} from "features/ArticleCommentList";
import {
  articleRecommendationsReducer,
  ArticleRecommendationsSchema,
} from "features/ArticleRecommendations";

import { combineReducers } from "@reduxjs/toolkit";

export interface ArticleDetailsPageSchema {
  comments: ArticleCommentsSchema;
  recommendations: ArticleRecommendationsSchema;
}

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    comments: articleCommentsReducer,
    recommendations: articleRecommendationsReducer,
  });
