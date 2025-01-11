import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleDetails, ArticleList, ArticleView } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { CommentList } from "entities/Comment";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { useSelector } from "react-redux";
import {
  fetchCommentsByArticleId,
  getArticleComments,
  getArticleCommentsIsLoading,
} from "features/ArticleCommentList";
import {
  fetchArticleRecommendations,
  getArticleRecommendations,
  getArticleRecommendationsIsLoading,
} from "features/ArticleRecommendations";
import { AddCommentForm } from "features/AddNewComment";

import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentForArticle } from "../../model/addCommentForArticle/addCommentForArticle";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Page } from "widgets/Page/Page";
import { articleDetailsPageReducer } from "../../model/types";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // comments
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  // recommendations
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading,
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  const onBackClick = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id && __PROJECT__ !== "storybook") {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button onClick={onBackClick} theme={ButtonTheme.OUTLINE}>
          {t("Назад к списку")}
        </Button>
        <ArticleDetails id={id || "1"} />
        <Text
          size={TextSize.lg}
          title={t("Рекоммендации")}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <ArticleList
          className={cls.recommendations}
          articles={recommendations}
          view={ArticleView.GRID}
          isLoading={recommendationsIsLoading}
          /* eslint-disable-next-line i18next/no-literal-string */
          target="_blank"
        />
        <Text
          size={TextSize.lg}
          title={t("Комментарии")}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
