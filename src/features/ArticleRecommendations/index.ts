export { ArticleRecommendationsSchema } from "./model/types/ArticleRecommendationsSchema";

export {
  articleRecommendationsActions,
  articleRecommendationsReducer,
  getArticleRecommendations,
} from "./model/slices/ArticleRecommendationsSlice";

export {
  getArticleRecommendationsIsLoading,
  getArticleRecommendationsError,
} from "./model/selectors/recommendations";

export { fetchArticleRecommendations } from "./model/services/fetchArticleRecommendations/fetchArticleRecommendations";
