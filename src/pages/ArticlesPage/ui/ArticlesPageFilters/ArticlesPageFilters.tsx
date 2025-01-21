import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";

import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleType,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSelector,
} from "entities/Article";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { SortOrder } from "shared/types";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { HStack, VStack } from "shared/ui/Stack";

interface ArticlesFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(
  ({ className }: ArticlesFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const query = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
      (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
      },
      [dispatch],
    );

    const onChangeSort = useCallback(
      (newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
      (newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
      (query: string) => {
        dispatch(articlesPageActions.setSearch(query));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
      },
      [dispatch, debouncedFetchData],
    );

    const onChangeType = useCallback(
      (type: ArticleType) => {
        dispatch(articlesPageActions.setType(type));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData],
    );

    return (
      <VStack gap={16} full className={classNames("", {}, [className])}>
        <HStack full align="start" justify="between">
          <ArticleSortSelector
            sort={sort}
            order={order}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
          />
          <ArticleViewSelector view={view} onViewClick={onChangeView} />
        </HStack>
        <VStack full align="start" gap={16}>
          <Card>
            <Input
              value={query}
              onChange={onChangeSearch}
              placeholder={t("Поиск")}
            />
          </Card>
          <ArticleTypeTabs value={type} onChangeType={onChangeType} />
        </VStack>
      </VStack>
    );
  },
);
