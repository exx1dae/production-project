import { classNames } from "shared/lib/classNames/classNames";
import { HTMLAttributeAnchorTarget, memo } from "react";

import cls from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { useSelector } from "react-redux";
import { getArticlesPageLimit } from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { ArticleEmptyState } from "../../ui/ArticleEmptyState/ArticleEmptyState";
import { ArticleListSkeletons } from "../../ui/ArticleList/ArticleListSkeletons";
import { ArticleListItemGrid } from "../ArticleListItemGrid/ArticleListItemGrid";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.GRID,
    isLoading,
    target,
  } = props;

  const limit = useSelector(getArticlesPageLimit);

  if (!isLoading && !articles.length) return <ArticleEmptyState />;

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length
        ? articles.map((article) =>
            view === ArticleView.LIST ? (
              <ArticleListItem
                key={article.id}
                article={article}
                target={target}
              />
            ) : (
              <ArticleListItemGrid
                key={article.id}
                article={article}
                target={target}
              />
            ),
          )
        : null}
      {isLoading && <ArticleListSkeletons view={view} limit={limit} />}
    </div>
  );
});
