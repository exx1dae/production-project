import { memo } from "react";
import { ArticleList } from "entities/Article";
import { useSelector } from "react-redux";
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { getArticles } from "../../model/slices/articlesPageSlice";

export const ArticleInfiniteList = memo(() => {
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  const articles = useSelector(getArticles.selectAll);

  return <ArticleList view={view} articles={articles} isLoading={isLoading} />;
});
